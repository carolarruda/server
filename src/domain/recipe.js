import dbClient from '../utils/dbClient.js'

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
          id: userId
        }
      }
    },
    select: {
      id: true,
      title: true,
      user: true
    }
  })
}
