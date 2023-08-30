import dbClient from '../utils/dbClient.js'
import bcrypt from 'bcrypt'


export default class User {
 
  static fromDb(user) {
    return new User(
      user.id,
      user.profile?.firstName,
      user.profile?.lastName,
      user.email,
      user.profile?.bio,
      user.profile?.phone,
      user.password,
      user.role
    )
  }

  static async fromJson(json) {
    const { firstName, lastName, email, bio, password, phone } = json

    const passwordHash = await bcrypt.hash(password, 8)

    return new User(
      null,
      firstName,
      lastName,
      email,
      bio,
      phone,
      passwordHash
    )
  }

  constructor(
    id,
    firstName,
    lastName,
    email,
    bio,
    phone,
    passwordHash = null,
    role = 'GUEST'
  ) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.bio = bio
    this.phone = phone
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
        biography: this.bio,
        phone: this.phone
      }
    }
    return user
  }


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
          bio: this.bio,
          phone: this.phone
        }
      }
    }
    const createdUser = await dbClient.user.create({
      data,
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
    
    const passwordHash = await bcrypt.hash(user.password, 8)
    const query = {
      where: {
        id
      },
      data: {
        email: user.email,
        password: passwordHash,
        role: user.role
      },
      select: {
        id: true,
        email: true,
        role: true
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
      },
    
    }
    const updatedProfile = await dbClient.profile.update(query)

    return updatedProfile
  }

  static async deleteUser(userId) {
    await dbClient.profile.delete({
      where: {
        id: userId
      }
    });
    return await dbClient.user.delete({
      where: {
        id: userId
      },
      include: {
        profile: true
      }
    })
  }
}


