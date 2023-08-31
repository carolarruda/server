import { Router } from "express";
import User from "../domain/user.js";
import multer from "multer";
import admin from "firebase-admin";
import path from "path";

import serviceAccount from "../serviceAccountKey.json" assert { type: "json" };
import {
  getAll,
  create,
  getById,
  updateById,
  deleteById,
  getPicById,
} from "../controllers/user.js";
import { validateAuth, validateAdmnin } from "../middleware/auth.js";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "carls-3b6c3.appspot.com",
});

const router = Router();

const upload = multer({
  limits: { fileSize: 1000000 },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      cb(new Error("Please upload an image."));
    } else {
      cb(null, true);
    }
  },
});
router.post("/", create);
router.post(
  "/:id/upload",
  validateAuth,
  upload.single("upload"),
  async (req, res) => {
    try {
      const userId = Number(req.params.id);
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).send("User not found.");
      }
      if (!req.file) {
        return res.status(400).send("No image file provided.");
      }
      const imageFilename = `${userId}_${Date.now()}`;
      const bucket = admin.storage().bucket();
      const file = bucket.file(imageFilename);

      await file.save(req.file.buffer, {
        metadata: { contentType: req.file.mimetype },
      });
      const signedUrl = await file.getSignedUrl({
        action: "read",
        expires: "03-17-2024",
      });

      await User.updateAvatar(userId, {
        avatar: signedUrl[0],
      });

      res.send({
        avatar: signedUrl[0],
        data: `Image uploaded and user avatar updated successfully`,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.get("/", validateAuth, getAll);
router.get("/:id", validateAuth, getById);
router.patch("/:id", validateAuth, updateById);
router.get("/avatar/:id", validateAuth, getPicById);
router.delete("/:id", validateAuth, deleteById);
router.get("/:id/image", async (req, res) => {
  try {
    const incident = await Incident.findById(req.params.id);
    if (!incident || !incident.image) {
      throw new Error();
    }
    res.set("Content-Type", "image/png");
    console.log(incident.image);
    res.send(incident.image);
  } catch (e) {
    res.status(404).send();
  }
});
export default router;
