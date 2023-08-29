import { sendDataResponse, sendErrorResponse } from "../utils/responses.js";

import { createRecipe, getAllRecipes, getRecipeId, getRecipePersonal } from "../domain/recipe.js";

export const get = async (req, res) => {
  try {
    const gettingRecipes = await getAllRecipes();
    if (!gettingRecipes) {
      return sendErrorResponse(
        res,
        404,
        "we could not find any recipes, sorry"
      );
    }
    return sendDataResponse(res, 200, gettingRecipes);
  } catch (e) {
    return sendErrorResponse(res, 500, "Unable to get recipes");
  }
};

export const getRecipe = async (req, res) => {
  const id  = Number(req.params.id);

  try {
    const gettingRecipe = await getRecipeId(id);
    return sendDataResponse(res, 200, {
      recipe: gettingRecipe,
    });
  } catch (error) {
    return sendErrorResponse(res, 500, "Unable to get recipe");
  }
};

export const getMyRecipes = async(req, res)=> {
  const userId = req.user.id;
  try {
    const gettingMyRecipes = await getRecipePersonal(userId);
    return sendDataResponse(res, 200, {
      recipes: gettingMyRecipes,
    });
  } catch (error) {
    return sendErrorResponse(res, 500, "Unable to get your recipes");
  }
}

export const create = async (req, res) => {
  const {
    title,
    favourite,
    imageUrl,
    rating,
    courseType,
    prepTime,
    cookTime,
    servings,
    ingredients,
    instructions,
    notes,
  } = req.body;
  const userId = req.user.id;
  if (!title || title === "" || typeof title !== "string") {
    return sendErrorResponse(res, 400, "Must provide valid content");
  }

  try {
    const creatingRecipe = await createRecipe(
      title,
      favourite,
      imageUrl,
      rating,
      courseType,
      prepTime,
      cookTime,
      servings,
      ingredients,
      instructions,
      notes,
      userId
    );

    return sendDataResponse(res, 201, {
      recipe: creatingRecipe,
    });
  } catch (error) {
    console.log(error);
    return sendErrorResponse(res, 500, "Unable to create recipe");
  }
};
