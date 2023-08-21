import { sendDataResponse, sendErrorResponse } from '../utils/responses.js'

import { createRecipe } from '../domain/recipe.js'

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
    notes
  } = req.body
  const userId = req.user.id
  if (!title || title === '' || typeof title !== 'string') {
    return sendErrorResponse(res, 400, 'Must provide valid content')
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
    )

    return sendDataResponse(res, 201, {
      recipe: creatingRecipe
    })
  } catch (error) {
    console.log(error)
    return sendErrorResponse(res, 500, 'Unable to create recipe')
  }
}
