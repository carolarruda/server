
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.15.2
 * Query Engine version: 461d6a05159055555eb7dfb337c9fb271cbd4d7e
 */
Prisma.prismaVersion = {
  client: "3.15.2",
  engine: "461d6a05159055555eb7dfb337c9fb271cbd4d7e"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  password: 'password',
  role: 'role',
  avatar: 'avatar',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ProfileScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  firstName: 'firstName',
  lastName: 'lastName',
  bio: 'bio',
  phone: 'phone'
});

exports.Prisma.RecipeScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  imageUrl: 'imageUrl',
  rating: 'rating',
  courseType: 'courseType',
  prepTime: 'prepTime',
  cookTime: 'cookTime',
  servings: 'servings',
  ingredients: 'ingredients',
  instructions: 'instructions',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
});

exports.Prisma.WebsiteScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  url: 'url',
  imageUrl: 'imageUrl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
});

exports.Prisma.LikeScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  recipeId: 'recipeId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  commentId: 'commentId'
});

exports.Prisma.CommentScalarFieldEnum = makeEnum({
  id: 'id',
  recipeId: 'recipeId',
  userId: 'userId',
  content: 'content',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.Role = makeEnum({
  GUEST: 'GUEST',
  ADMNIN: 'ADMNIN'
});

exports.Prisma.ModelName = makeEnum({
  User: 'User',
  Profile: 'Profile',
  Recipe: 'Recipe',
  Website: 'Website',
  Like: 'Like',
  Comment: 'Comment'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
