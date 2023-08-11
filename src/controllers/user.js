import { getAllUsers } from '../domain/user.js'
import { sendDataResponse, sendErrorResponse } from '../utils/responses.js'

export const getAll = async (req, res) => {
  try {
    const gettingUsers = await getAllUsers()
    if (gettingUsers.length === 0) {
      return sendErrorResponse(res, 404, 'No users found')
    }
    return sendDataResponse(res, 201, gettingUsers)
  } catch (error) {
    return sendErrorResponse(res, 500, 'Unable to get users')
  }
}
