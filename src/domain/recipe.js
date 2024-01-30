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
  description,
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
      description,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export async function getAllRecipes() {
  return await dbClient.recipe.findMany({  include: {
    user: {
      select: {
        id: true,
        email: true,
        role: true,
        profile: true,
        avatar: true
      },
    },
  },});
}

export async function getRecipeId(id) {
  return await dbClient.recipe.findUnique({
    where: { id: id },
    include: {
      user: {
        select: {
          id: true,
          email: true,
          role: true,
          profile: true,
          avatar: true
        },
      },
    },
  });
}

export async function getRecipePersonal(userId) {
  return await dbClient.recipe.findMany({
    where: { userId: userId },
    include: {
      user: {
        select: {
          id: true,
          email: true,
          role: true,
          profile: true
        },
      },
    },
  });
}

export async function deleteRecipeById(id) {
  return await dbClient.recipe.delete({
    where: { id: id },
    include: {
      user: {
        select: {
          id: true,
          email: true,
          role: true,
          profile: true
        },
      },
    },
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
  description
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
      description,
    },
    include: {
      user: {
        select: {
          id: true,
          email: true,
          role: true,
          profile: true
        },
      },
    },
  });
  return UpdateOnRecipe;
}
