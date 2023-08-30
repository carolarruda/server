import { Router } from "express";

import { create, get, getRecipe, getMyRecipes, deleteRecipe } from "../controllers/recipe.js";

import { validateAuth } from "../middleware/auth.js";

const router = Router();


router.get("/personal", validateAuth, getMyRecipes);
router.get("/:id", getRecipe);
router.delete("/:id", validateAuth, deleteRecipe)
router.get("/", get);
router.post("/", validateAuth, create);

export default router;
