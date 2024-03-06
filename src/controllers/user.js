import User from "../domain/user.js";
import { emailValidation } from "../utils/emailValidation.js";
import { passwordValidation } from "../utils/passwordValidation.js";
import { sendDataResponse, sendErrorResponse } from "../utils/responses.js";

const validatePasswordLength = (password) => {
  if (password.length < 8) {
    return {
      status: "error",
      message: "Password must be at least 8 characters long",
    };
  }

  return {
    status: "ok",
  };
};

async function validateUserId(req, res) {
  if (!req.user) {
    return sendErrorResponse(res, 500, "req.user is not populated");
  }
  const id = Number(req.params.id);

  if (req.user.id !== id) {
    return sendErrorResponse(
      res,
      403,
      "User is not authorised to perform this action"
    );
  }
}

export const create = async (req, res) => {
  const { password } = req.body;
  const passwordValidate = validatePasswordLength(password);

  const userToCreate = await User.fromJson(req.body);
  console.log(userToCreate);

  try {
    if (passwordValidate.status === "error") {
      console.log(passwordValidate.status);
      return sendErrorResponse(res, 400, passwordValidate.message);
    }

    const existingUser = await User.findByEmail(userToCreate.email);

    if (existingUser) {
      return sendErrorResponse(res, 400, "Email already in use");
    }

    if (!emailValidation(userToCreate.email)) {
      console.log(!emailValidation(userToCreate.email));
      return sendErrorResponse(res, 400, "Email not valid");
    }

    if (!passwordValidation(password)) {
      console.log(!passwordValidation(password));
      return sendErrorResponse(
        res,
        400,
        "Password must contain at least one uppercase character, one lowercase character, one special character, and one number"
      );
    }

    const createdUser = await userToCreate.save();

    return sendDataResponse(res, 201, createdUser);
  } catch (error) {
    console.log(error);
    return sendErrorResponse(res, 500, "Unable to create new user");
  }
};

export const getById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const foundUser = await User.findById(id);
    if (!foundUser) {
      return sendErrorResponse(res, 404, "User not found");
    }
    return sendDataResponse(res, 200, foundUser);
  } catch (e) {
    return sendErrorResponse(res, 500, "Unable to get user");
  }
};

export const getAll = async (req, res) => {
  const { firstName, lastName } = req.query;

  let foundUsers;

  if (firstName || lastName) {
    foundUsers = await User.findManyByName(firstName, lastName);
  } else {
    foundUsers = await User.findAll();
  }

  const formattedUsers = foundUsers.map((user) => {
    return {
      ...user.toJSON().user,
    };
  });

  return sendDataResponse(res, 200, { users: formattedUsers });
};

export const createProfile = async (req, res) => {
  const id = parseInt(req.params.id);
  const { firstName, lastName, bio, githubUrl, avatar } = req.body;

  console.log("profile", avatar);
  validateUserId(req, res);
  if (!firstName || !lastName) {
    return sendErrorResponse(res, 400, "First and Last names are required");
  }
  const profile = {
    create: {
      firstName: firstName,
      lastName: lastName,
      avatar: avatar,
    },
  };
  if (bio) {
    profile.create.bio = bio;
  }
  if (githubUrl) {
    profile.create.githubUrl = githubUrl;
  }
  try {
    const createdProfile = await User.createProfile(id, profile);
    delete createdProfile.password;
    return sendDataResponse(res, 201, createdProfile);
  } catch (e) {
    if (e.code === "P2014") {
      return sendErrorResponse(res, 409, "Profile already exists");
    }
    return sendErrorResponse(res, 500, "Unable to create profile");
  }
};

export const updateById = async (req, res) => {
  const { email, password, role, firstName, lastName, bio, avatar } = req.body;
  const id = parseInt(req.params.id);
  const userToUpdate = {};
  const profileToUpdate = {};

  if (role) {
    if (req.user.role !== "ADMNIN") {
      return sendDataResponse(res, 403, {
        authorization: "You are not authorized to perform this action",
      });
    }
  } else if (req.user.id !== id) {
    return sendErrorResponse(res, 403, "You can only update your own details");
  }

  if (firstName === "" || lastName === "") {
    return sendErrorResponse(res, 400, "First and Last names cannot be blank");
  }
  if (req.user.id !== id && password) {
    return sendErrorResponse(res, 403, "You may only change your own password");
  }

  if (email) {
    userToUpdate.email = email;
  }
  if (password) {
    userToUpdate.password = password;
  }
  if (role) {
    userToUpdate.role = role;
  }
  if (firstName) {
    profileToUpdate.firstName = firstName;
  }
  if (lastName) {
    profileToUpdate.lastName = lastName;
  }
  if (bio) {
    profileToUpdate.bio = bio;
  }
  if (avatar) {
    profileToUpdate.avatar = avatar;
  }
  try {
    const updatedUser = await User.updateUserDetails(id, userToUpdate);
    const updatedProfile = await User.updateProfileDetails(id, profileToUpdate);
    const updatedDetails = { updatedUser, updatedProfile };
    return sendDataResponse(res, 200, updatedDetails);
  } catch (error) {
    console.error(error);
    return sendErrorResponse(res, 500, "unable to update user and/or profile");
  }
};

export const deleteById = async (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    const foundUser = await User.findById(userId);
    if (!foundUser) {
      return sendErrorResponse(res, 404, "User not found");
    }

    const deletingUser = await User.deleteUser(userId);
    return sendDataResponse(res, 200, deletingUser);
  } catch (e) {
    console.log(e);
    return sendErrorResponse(res, 500, "Unable to get user");
  }
};

export const getPicById = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const foundUser = await User.findById(id);
    if (!foundUser) {
      return sendErrorResponse(res, 404, "User not found");
    }

    const gettingPic = await User.findByAvatarbyId(id);
    return sendDataResponse(res, 200, gettingPic);
  } catch (e) {
    console.log(e);
    return sendErrorResponse(res, 500, "Unable to get avatar");
  }
};
