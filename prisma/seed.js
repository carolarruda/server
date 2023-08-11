import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
const prisma = new PrismaClient()

async function seed() {
  const guest = await createUser(
    'testguest@test.com',
    'Testpassword1!',
    'Matias',
    'Sunny',
    'Hello, world!'
  )
  const admnin = await createUser(
    'admnin@test.com',
    'Testpassword1!',
    'Louis',
    'Sanchez',
    'Hello there!',
    'ADMNIN'
  )

  process.exit(0)
}

async function createUser(
  email,
  password,
  firstName,
  lastName,
  bio,
  role = 'GUEST'
) {
  const user = await prisma.user.create({
    data: {
      email,
      password: await bcrypt.hash(password, 8),
      role,
      profile: {
        create: {
          firstName,
          lastName,
          bio
        }
      }
    },
    include: {
      profile: true
    }
  })

  console.info(`${role} created`, user)

  return user
}

seed().catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})
