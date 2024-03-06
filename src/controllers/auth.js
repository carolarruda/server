import User from "../domain/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_EXPIRY, JWT_SECRET } from "../utils/config.js";
import { sendDataResponse, sendErrorResponse } from "../utils/responses.js";
import { OAuth2Client } from "google-auth-library";

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return sendErrorResponse(
      res,
      400,
      "Invalid email and/or password provided"
    );
  }

  try {
    const foundUser = await User.findByEmail(email);
    const areCredentialsValid = await validateCredentials(password, foundUser);

    if (!areCredentialsValid) {
      return sendErrorResponse(
        res,
        400,
        "Invalid email and/or password provided"
      );
    }
    const token = generateJwt(foundUser.id);

    return sendDataResponse(res, 200, { token, ...foundUser.toJSON() });
  } catch (e) {
    console.log(e);
    return sendErrorResponse(res, 500, "Unable to process request");
  }
};

function generateJwt(userId) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRY });
}

async function validateCredentials(password, user) {
  if (!user) {
    return false;
  }

  if (!password) {
    return false;
  }

  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
  if (!isPasswordValid) {
    return false;
  }

  return true;
}

export const loginGoogle = async (req, res) => {
  const { client_id, jwtToken } = req.body;
  const client = new OAuth2Client(client_id);

  try {
    const ticket = await client.verifyIdToken({
      idToken: jwtToken,
      audience: client_id,
    });

    const payload = ticket.getPayload();

    const { email, given_name, family_name, picture } = payload;

    let user = await User.findByEmail(email);

    if (!user) {
      const userGoogle = {
        email: email,
        password: client_id,
        firstName: given_name,
        lastName: family_name,
        avatar: picture,
        role: "GUEST",
      };
      const userToCreate = await User.fromJson(userGoogle);
      const createdUser = await userToCreate.save();
      return sendDataResponse(res, 201, createdUser);
    }

    const token = generateJwt(user.id);
    return sendDataResponse(res, 200, { token, user });
  } catch (error) {
    console.error("Error occurred during Google login:", error);
    return sendErrorResponse(res, 500, "Unable to process request");
  }
};
