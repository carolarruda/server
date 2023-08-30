import dbClient from "../utils/dbClient.js";

export async function createRecipe(
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
) {
  return await dbClient.recipe.create({
    data: {
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
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export async function getAllRecipes() {
  return await dbClient.recipe.findMany({});
}

export async function getRecipeId(id) {
  return await dbClient.recipe.findUnique({
    where: { id: id },
  });
}

export async function getRecipePersonal(userId) {
  return await dbClient.recipe.findMany({
    where: { userId: userId },
  });
}

export async function deleteRecipeById(id) {
  return await dbClient.recipe.delete({
    where: { id: id },
  });
}

export async function UpdateRecipe(
  recipeId, 
  title,
  imageUrl,
  rating,
  courseType,
  prepTime,
  cookTime,
  servings,
  ingredients,
  instructions,
  notes
) {
  const UpdateOnRecipe = await dbClient.recipe.update({
    where: {
      id: recipeId,
    },
    data: {
      title,
      imageUrl,
      rating,
      courseType,
      prepTime,
      cookTime,
      servings,
      ingredients,
      instructions,
      notes,
    },
  });
  return UpdateOnRecipe;
}
