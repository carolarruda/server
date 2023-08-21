import dbClient from '../utils/dbClient.js'
import bcrypt from 'bcrypt'

// export async function getAllUsers() {
//   return await dbClient.user.findMany({
//     select: { id: true, email: true, role: true, createdAt: true, updatedAt: true,     profile: true },
//   })
// }

// export async function getUserByEmail(email) {
//   return await dbClient.user.findUnique({
//     where: {email: email},

//   })
// }

export default class User {
  /**
   * This is JSDoc - a way for us to tell other developers what types functions/methods
   * take as inputs, what types they return, and other useful information that JS doesn't have built in
   * @tutorial https://www.valentinog.com/blog/jsdoc
   *
   * @param { { id: int, email: string, profile: { firstName: string, lastName: string, bio: string } } } user
   * @returns {User}
   */
  static fromDb(user) {
    return new User(
      user.id,
      user.profile?.firstName,
      user.profile?.lastName,
      user.email,
      user.profile?.bio,
      user.password,
      user.role
    )
  }

  static async fromJson(json) {
    // eslint-disable-next-line camelcase
    const { firstName, lastName, email, biography, password } = json

    const passwordHash = await bcrypt.hash(password, 8)

    return new User(
      null,
      null,
      firstName,
      lastName,
      email,
      biography,
      passwordHash
    )
  }

  constructor(
    id,
    firstName,
    lastName,
    email,
    bio,
    passwordHash = null,
    role = 'GUEST'
  ) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.bio = bio
    this.passwordHash = passwordHash
    this.role = role
  }

  toJSON() {
    const user = {
      user: {
        id: this.id,
        role: this.role,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        biography: this.bio
      }
    }
    return user
  }

  /**
   * @returns {User}
   *  A user instance containing an ID, representing the user data created in the database
   */
  async save() {
    const data = {
      email: this.email,
      password: this.passwordHash,
      role: this.role
    }

    if (this.firstName && this.lastName) {
      data.profile = {
        create: {
          firstName: this.firstName,
          lastName: this.lastName,
          bio: this.bio
        }
      }
    }
    const createdUser = await dbClient.user.create({
      ...data,
      include: {
        profile: true
      }
    })

    return User.fromDb(createdUser)
  }

  static async findByEmail(email) {
    return User._findByUnique('email', email)
  }

  static async findById(id) {
    return User._findByUnique('id', id)
  }

  static async findManyByName(firstName, lastName) {
    if (!firstName && !lastName) {
      throw new Error('Must contain at least firstName or lastName.')
    }

    const profileQueryObjects = []
    if (firstName) {
      profileQueryObjects.push({ key: 'firstName', value: firstName })
    }
    if (lastName) {
      profileQueryObjects.push({ key: 'lastName', value: lastName })
    }
    return User._findMany(profileQueryObjects)
  }

  static async findAll() {
    return User._findMany()
  }

  static async _findByUnique(key, value = false) {
    const foundUser = await dbClient.user.findUnique({
      where: {
        [key]: value
      },
      include: {
        profile: true
      }
    })

    if (foundUser) {
      return User.fromDb(foundUser)
    }

    return null
  }

  static async _findMany(keyValueList = []) {
    const query = {
      include: {
        profile: true
      }
    }

    const profileQueryObjects = keyValueList.map(({ key, value }) => {
      return {
        [key]: {
          contains: value,
          mode: 'insensitive'
        }
      }
    })

    query.where = {
      profile: {
        AND: profileQueryObjects
      }
    }

    if (profileQueryObjects.length === 1) {
      query.where.profile = {
        ...profileQueryObjects[0]
      }
    }

    const foundUsers = await dbClient.user.findMany(query)

    return foundUsers.map((user) => User.fromDb(user))
  }

  static async createProfile(id, profile) {
    const query = {
      where: {
        id
      },
      data: {
        profile
      },
      include: {
        profile: true
      }
    }
    const createdProfile = await dbClient.user.update(query)
    return createdProfile
  }

  static async updateUserDetails(id, user) {
    const query = {
      where: {
        id
      },
      data: {
        email: user.email,
        password: user.password,
        role: user.role
      }
    }
    const updatedUser = await dbClient.user.update(query)
    return updatedUser
  }

  static async updateProfileDetails(id, profile) {
    const query = {
      where: {
        id
      },
      data: {
        firstName: profile.firstName,
        lastName: profile.lastName,
        bio: profile.bio
      }
    }
    const updatedProfile = await dbClient.profile.update(query)
    return updatedProfile
  }
}
