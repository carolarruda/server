import dbClient from '../utils/dbClient.js'

export async function getAllUsers() {
  return await dbClient.user.findMany({
    select: { id: true, email: true, role: true }
  })
}
