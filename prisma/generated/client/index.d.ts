
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  email: string
  password: string
  role: Role
  avatar: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Profile
 * 
 */
export type Profile = {
  id: number
  userId: number
  firstName: string
  lastName: string
  bio: string | null
  phone: string | null
}

/**
 * Model Recipe
 * 
 */
export type Recipe = {
  id: number
  title: string
  imageUrl: string | null
  rating: number | null
  courseType: string | null
  prepTime: number | null
  cookTime: number | null
  servings: number | null
  ingredients: string[]
  instructions: string[]
  description: string | null
  createdAt: Date
  updatedAt: Date
  userId: number
}

/**
 * Model Website
 * 
 */
export type Website = {
  id: number
  name: string
  url: string
  imageUrl: string
  createdAt: Date
  updatedAt: Date
  userId: number
}

/**
 * Model Like
 * 
 */
export type Like = {
  id: number
  userId: number
  recipeId: number
  createdAt: Date
  updatedAt: Date
  commentId: number | null
}

/**
 * Model Comment
 * 
 */
export type Comment = {
  id: number
  recipeId: number
  userId: number
  content: string
  createdAt: Date
  updatedAt: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Role: {
  GUEST: 'GUEST',
  ADMNIN: 'ADMNIN'
};

export type Role = (typeof Role)[keyof typeof Role]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<GlobalReject>;

  /**
   * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.RecipeDelegate<GlobalReject>;

  /**
   * `prisma.website`: Exposes CRUD operations for the **Website** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Websites
    * const websites = await prisma.website.findMany()
    * ```
    */
  get website(): Prisma.WebsiteDelegate<GlobalReject>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.LikeDelegate<GlobalReject>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Prisma Client JS version: 3.15.2
   * Query Engine version: 461d6a05159055555eb7dfb337c9fb271cbd4d7e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Profile: 'Profile',
    Recipe: 'Recipe',
    Website: 'Website',
    Like: 'Like',
    Comment: 'Comment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    recipe: number
    Website: number
    likes: number
    comments: number
  }

  export type UserCountOutputTypeSelect = {
    recipe?: boolean
    Website?: boolean
    likes?: boolean
    comments?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type RecipeCountOutputType
   */


  export type RecipeCountOutputType = {
    likes: number
    comments: number
  }

  export type RecipeCountOutputTypeSelect = {
    likes?: boolean
    comments?: boolean
  }

  export type RecipeCountOutputTypeGetPayload<
    S extends boolean | null | undefined | RecipeCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? RecipeCountOutputType
    : S extends undefined
    ? never
    : S extends RecipeCountOutputTypeArgs
    ?'include' extends U
    ? RecipeCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof RecipeCountOutputType ? RecipeCountOutputType[P] : never
  } 
    : RecipeCountOutputType
  : RecipeCountOutputType




  // Custom InputTypes

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     * 
    **/
    select?: RecipeCountOutputTypeSelect | null
  }



  /**
   * Count Type CommentCountOutputType
   */


  export type CommentCountOutputType = {
    likes: number
  }

  export type CommentCountOutputTypeSelect = {
    likes?: boolean
  }

  export type CommentCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CommentCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CommentCountOutputType
    : S extends undefined
    ? never
    : S extends CommentCountOutputTypeArgs
    ?'include' extends U
    ? CommentCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CommentCountOutputType ? CommentCountOutputType[P] : never
  } 
    : CommentCountOutputType
  : CommentCountOutputType




  // Custom InputTypes

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     * 
    **/
    select?: CommentCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: Role | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: Role | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    avatar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    role: Role
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    profile?: boolean | ProfileArgs
    recipe?: boolean | RecipeFindManyArgs
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Website?: boolean | WebsiteFindManyArgs
    likes?: boolean | LikeFindManyArgs
    comments?: boolean | CommentFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    profile?: boolean | ProfileArgs
    recipe?: boolean | RecipeFindManyArgs
    Website?: boolean | WebsiteFindManyArgs
    likes?: boolean | LikeFindManyArgs
    comments?: boolean | CommentFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'profile' ? ProfileGetPayload<S['include'][P]> | null :
        P extends 'recipe' ? Array < RecipeGetPayload<S['include'][P]>>  :
        P extends 'Website' ? Array < WebsiteGetPayload<S['include'][P]>>  :
        P extends 'likes' ? Array < LikeGetPayload<S['include'][P]>>  :
        P extends 'comments' ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'profile' ? ProfileGetPayload<S['select'][P]> | null :
        P extends 'recipe' ? Array < RecipeGetPayload<S['select'][P]>>  :
        P extends 'Website' ? Array < WebsiteGetPayload<S['select'][P]>>  :
        P extends 'likes' ? Array < LikeGetPayload<S['select'][P]>>  :
        P extends 'comments' ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    profile<T extends ProfileArgs = {}>(args?: Subset<T, ProfileArgs>): CheckSelect<T, Prisma__ProfileClient<Profile | null >, Prisma__ProfileClient<ProfileGetPayload<T> | null >>;

    recipe<T extends RecipeFindManyArgs = {}>(args?: Subset<T, RecipeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Recipe>>, PrismaPromise<Array<RecipeGetPayload<T>>>>;

    Website<T extends WebsiteFindManyArgs = {}>(args?: Subset<T, WebsiteFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Website>>, PrismaPromise<Array<WebsiteGetPayload<T>>>>;

    likes<T extends LikeFindManyArgs = {}>(args?: Subset<T, LikeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Like>>, PrismaPromise<Array<LikeGetPayload<T>>>>;

    comments<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Profile
   */


  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    firstName: string | null
    lastName: string | null
    bio: string | null
    phone: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    firstName: string | null
    lastName: string | null
    bio: string | null
    phone: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    userId: number
    firstName: number
    lastName: number
    bio: number
    phone: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    bio?: true
    phone?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    bio?: true
    phone?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    bio?: true
    phone?: true
    _all?: true
  }

  export type ProfileAggregateArgs = {
    /**
     * Filter which Profile to aggregate.
     * 
    **/
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs = {
    where?: ProfileWhereInput
    orderBy?: Enumerable<ProfileOrderByWithAggregationInput>
    by: Array<ProfileScalarFieldEnum>
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }


  export type ProfileGroupByOutputType = {
    id: number
    userId: number
    firstName: string
    lastName: string
    bio: string | null
    phone: string | null
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect = {
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    bio?: boolean
    phone?: boolean
    user?: boolean | UserArgs
  }

  export type ProfileInclude = {
    user?: boolean | UserArgs
  }

  export type ProfileGetPayload<
    S extends boolean | null | undefined | ProfileArgs,
    U = keyof S
      > = S extends true
        ? Profile
    : S extends undefined
    ? never
    : S extends ProfileArgs | ProfileFindManyArgs
    ?'include' extends U
    ? Profile  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Profile ? Profile[P] : never
  } 
    : Profile
  : Profile


  type ProfileCountArgs = Merge<
    Omit<ProfileFindManyArgs, 'select' | 'include'> & {
      select?: ProfileCountAggregateInputType | true
    }
  >

  export interface ProfileDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProfileFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProfileFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Profile'> extends True ? CheckSelect<T, Prisma__ProfileClient<Profile>, Prisma__ProfileClient<ProfileGetPayload<T>>> : CheckSelect<T, Prisma__ProfileClient<Profile | null >, Prisma__ProfileClient<ProfileGetPayload<T> | null >>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProfileFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProfileFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Profile'> extends True ? CheckSelect<T, Prisma__ProfileClient<Profile>, Prisma__ProfileClient<ProfileGetPayload<T>>> : CheckSelect<T, Prisma__ProfileClient<Profile | null >, Prisma__ProfileClient<ProfileGetPayload<T> | null >>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProfileFindManyArgs>(
      args?: SelectSubset<T, ProfileFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Profile>>, PrismaPromise<Array<ProfileGetPayload<T>>>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
    **/
    create<T extends ProfileCreateArgs>(
      args: SelectSubset<T, ProfileCreateArgs>
    ): CheckSelect<T, Prisma__ProfileClient<Profile>, Prisma__ProfileClient<ProfileGetPayload<T>>>

    /**
     * Create many Profiles.
     *     @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profile = await prisma.profile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProfileCreateManyArgs>(
      args?: SelectSubset<T, ProfileCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
    **/
    delete<T extends ProfileDeleteArgs>(
      args: SelectSubset<T, ProfileDeleteArgs>
    ): CheckSelect<T, Prisma__ProfileClient<Profile>, Prisma__ProfileClient<ProfileGetPayload<T>>>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProfileUpdateArgs>(
      args: SelectSubset<T, ProfileUpdateArgs>
    ): CheckSelect<T, Prisma__ProfileClient<Profile>, Prisma__ProfileClient<ProfileGetPayload<T>>>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProfileDeleteManyArgs>(
      args?: SelectSubset<T, ProfileDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProfileUpdateManyArgs>(
      args: SelectSubset<T, ProfileUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
    **/
    upsert<T extends ProfileUpsertArgs>(
      args: SelectSubset<T, ProfileUpsertArgs>
    ): CheckSelect<T, Prisma__ProfileClient<Profile>, Prisma__ProfileClient<ProfileGetPayload<T>>>

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProfileClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * Throw an Error if a Profile can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Profile to fetch.
     * 
    **/
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * Throw an Error if a Profile can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Profile to fetch.
     * 
    **/
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     * 
    **/
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     * 
    **/
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }


  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * Filter, which Profiles to fetch.
     * 
    **/
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     * 
    **/
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }


  /**
   * Profile create
   */
  export type ProfileCreateArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * The data needed to create a Profile.
     * 
    **/
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }


  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs = {
    /**
     * The data used to create many Profiles.
     * 
    **/
    data: Enumerable<ProfileCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Profile update
   */
  export type ProfileUpdateArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * The data needed to update a Profile.
     * 
    **/
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     * 
    **/
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs = {
    /**
     * The data used to update Profiles.
     * 
    **/
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     * 
    **/
    where?: ProfileWhereInput
  }


  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * The filter to search for the Profile to update in case it exists.
     * 
    **/
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     * 
    **/
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }


  /**
   * Profile delete
   */
  export type ProfileDeleteArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * Filter which Profile to delete.
     * 
    **/
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs = {
    /**
     * Filter which Profiles to delete
     * 
    **/
    where?: ProfileWhereInput
  }


  /**
   * Profile without action
   */
  export type ProfileArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
  }



  /**
   * Model Recipe
   */


  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    prepTime: number | null
    cookTime: number | null
    servings: number | null
    userId: number | null
  }

  export type RecipeSumAggregateOutputType = {
    id: number | null
    rating: number | null
    prepTime: number | null
    cookTime: number | null
    servings: number | null
    userId: number | null
  }

  export type RecipeMinAggregateOutputType = {
    id: number | null
    title: string | null
    imageUrl: string | null
    rating: number | null
    courseType: string | null
    prepTime: number | null
    cookTime: number | null
    servings: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type RecipeMaxAggregateOutputType = {
    id: number | null
    title: string | null
    imageUrl: string | null
    rating: number | null
    courseType: string | null
    prepTime: number | null
    cookTime: number | null
    servings: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type RecipeCountAggregateOutputType = {
    id: number
    title: number
    imageUrl: number
    rating: number
    courseType: number
    prepTime: number
    cookTime: number
    servings: number
    ingredients: number
    instructions: number
    description: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type RecipeAvgAggregateInputType = {
    id?: true
    rating?: true
    prepTime?: true
    cookTime?: true
    servings?: true
    userId?: true
  }

  export type RecipeSumAggregateInputType = {
    id?: true
    rating?: true
    prepTime?: true
    cookTime?: true
    servings?: true
    userId?: true
  }

  export type RecipeMinAggregateInputType = {
    id?: true
    title?: true
    imageUrl?: true
    rating?: true
    courseType?: true
    prepTime?: true
    cookTime?: true
    servings?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type RecipeMaxAggregateInputType = {
    id?: true
    title?: true
    imageUrl?: true
    rating?: true
    courseType?: true
    prepTime?: true
    cookTime?: true
    servings?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type RecipeCountAggregateInputType = {
    id?: true
    title?: true
    imageUrl?: true
    rating?: true
    courseType?: true
    prepTime?: true
    cookTime?: true
    servings?: true
    ingredients?: true
    instructions?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type RecipeAggregateArgs = {
    /**
     * Filter which Recipe to aggregate.
     * 
    **/
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     * 
    **/
    orderBy?: Enumerable<RecipeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type RecipeGroupByArgs = {
    where?: RecipeWhereInput
    orderBy?: Enumerable<RecipeOrderByWithAggregationInput>
    by: Array<RecipeScalarFieldEnum>
    having?: RecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _avg?: RecipeAvgAggregateInputType
    _sum?: RecipeSumAggregateInputType
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }


  export type RecipeGroupByOutputType = {
    id: number
    title: string
    imageUrl: string | null
    rating: number | null
    courseType: string | null
    prepTime: number | null
    cookTime: number | null
    servings: number | null
    ingredients: string[]
    instructions: string[]
    description: string | null
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type RecipeSelect = {
    id?: boolean
    title?: boolean
    imageUrl?: boolean
    rating?: boolean
    courseType?: boolean
    prepTime?: boolean
    cookTime?: boolean
    servings?: boolean
    ingredients?: boolean
    instructions?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs
    userId?: boolean
    likes?: boolean | LikeFindManyArgs
    comments?: boolean | CommentFindManyArgs
    _count?: boolean | RecipeCountOutputTypeArgs
  }

  export type RecipeInclude = {
    user?: boolean | UserArgs
    likes?: boolean | LikeFindManyArgs
    comments?: boolean | CommentFindManyArgs
    _count?: boolean | RecipeCountOutputTypeArgs
  }

  export type RecipeGetPayload<
    S extends boolean | null | undefined | RecipeArgs,
    U = keyof S
      > = S extends true
        ? Recipe
    : S extends undefined
    ? never
    : S extends RecipeArgs | RecipeFindManyArgs
    ?'include' extends U
    ? Recipe  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'likes' ? Array < LikeGetPayload<S['include'][P]>>  :
        P extends 'comments' ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends '_count' ? RecipeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'likes' ? Array < LikeGetPayload<S['select'][P]>>  :
        P extends 'comments' ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends '_count' ? RecipeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Recipe ? Recipe[P] : never
  } 
    : Recipe
  : Recipe


  type RecipeCountArgs = Merge<
    Omit<RecipeFindManyArgs, 'select' | 'include'> & {
      select?: RecipeCountAggregateInputType | true
    }
  >

  export interface RecipeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RecipeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RecipeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Recipe'> extends True ? CheckSelect<T, Prisma__RecipeClient<Recipe>, Prisma__RecipeClient<RecipeGetPayload<T>>> : CheckSelect<T, Prisma__RecipeClient<Recipe | null >, Prisma__RecipeClient<RecipeGetPayload<T> | null >>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RecipeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RecipeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Recipe'> extends True ? CheckSelect<T, Prisma__RecipeClient<Recipe>, Prisma__RecipeClient<RecipeGetPayload<T>>> : CheckSelect<T, Prisma__RecipeClient<Recipe | null >, Prisma__RecipeClient<RecipeGetPayload<T> | null >>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RecipeFindManyArgs>(
      args?: SelectSubset<T, RecipeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Recipe>>, PrismaPromise<Array<RecipeGetPayload<T>>>>

    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
    **/
    create<T extends RecipeCreateArgs>(
      args: SelectSubset<T, RecipeCreateArgs>
    ): CheckSelect<T, Prisma__RecipeClient<Recipe>, Prisma__RecipeClient<RecipeGetPayload<T>>>

    /**
     * Create many Recipes.
     *     @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
     *     @example
     *     // Create many Recipes
     *     const recipe = await prisma.recipe.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RecipeCreateManyArgs>(
      args?: SelectSubset<T, RecipeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
    **/
    delete<T extends RecipeDeleteArgs>(
      args: SelectSubset<T, RecipeDeleteArgs>
    ): CheckSelect<T, Prisma__RecipeClient<Recipe>, Prisma__RecipeClient<RecipeGetPayload<T>>>

    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RecipeUpdateArgs>(
      args: SelectSubset<T, RecipeUpdateArgs>
    ): CheckSelect<T, Prisma__RecipeClient<Recipe>, Prisma__RecipeClient<RecipeGetPayload<T>>>

    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RecipeDeleteManyArgs>(
      args?: SelectSubset<T, RecipeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RecipeUpdateManyArgs>(
      args: SelectSubset<T, RecipeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
    **/
    upsert<T extends RecipeUpsertArgs>(
      args: SelectSubset<T, RecipeUpsertArgs>
    ): CheckSelect<T, Prisma__RecipeClient<Recipe>, Prisma__RecipeClient<RecipeGetPayload<T>>>

    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(
      args?: Subset<T, RecipeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RecipeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    likes<T extends LikeFindManyArgs = {}>(args?: Subset<T, LikeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Like>>, PrismaPromise<Array<LikeGetPayload<T>>>>;

    comments<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Recipe findUnique
   */
  export type RecipeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * Throw an Error if a Recipe can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Recipe to fetch.
     * 
    **/
    where: RecipeWhereUniqueInput
  }


  /**
   * Recipe findFirst
   */
  export type RecipeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * Throw an Error if a Recipe can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Recipe to fetch.
     * 
    **/
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     * 
    **/
    orderBy?: Enumerable<RecipeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     * 
    **/
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     * 
    **/
    distinct?: Enumerable<RecipeScalarFieldEnum>
  }


  /**
   * Recipe findMany
   */
  export type RecipeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * Filter, which Recipes to fetch.
     * 
    **/
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     * 
    **/
    orderBy?: Enumerable<RecipeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     * 
    **/
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RecipeScalarFieldEnum>
  }


  /**
   * Recipe create
   */
  export type RecipeCreateArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * The data needed to create a Recipe.
     * 
    **/
    data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
  }


  /**
   * Recipe createMany
   */
  export type RecipeCreateManyArgs = {
    /**
     * The data used to create many Recipes.
     * 
    **/
    data: Enumerable<RecipeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Recipe update
   */
  export type RecipeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * The data needed to update a Recipe.
     * 
    **/
    data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
    /**
     * Choose, which Recipe to update.
     * 
    **/
    where: RecipeWhereUniqueInput
  }


  /**
   * Recipe updateMany
   */
  export type RecipeUpdateManyArgs = {
    /**
     * The data used to update Recipes.
     * 
    **/
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     * 
    **/
    where?: RecipeWhereInput
  }


  /**
   * Recipe upsert
   */
  export type RecipeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * The filter to search for the Recipe to update in case it exists.
     * 
    **/
    where: RecipeWhereUniqueInput
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     * 
    **/
    create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
  }


  /**
   * Recipe delete
   */
  export type RecipeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * Filter which Recipe to delete.
     * 
    **/
    where: RecipeWhereUniqueInput
  }


  /**
   * Recipe deleteMany
   */
  export type RecipeDeleteManyArgs = {
    /**
     * Filter which Recipes to delete
     * 
    **/
    where?: RecipeWhereInput
  }


  /**
   * Recipe without action
   */
  export type RecipeArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
  }



  /**
   * Model Website
   */


  export type AggregateWebsite = {
    _count: WebsiteCountAggregateOutputType | null
    _avg: WebsiteAvgAggregateOutputType | null
    _sum: WebsiteSumAggregateOutputType | null
    _min: WebsiteMinAggregateOutputType | null
    _max: WebsiteMaxAggregateOutputType | null
  }

  export type WebsiteAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type WebsiteSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type WebsiteMinAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type WebsiteMaxAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type WebsiteCountAggregateOutputType = {
    id: number
    name: number
    url: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type WebsiteAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type WebsiteSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type WebsiteMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type WebsiteMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type WebsiteCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type WebsiteAggregateArgs = {
    /**
     * Filter which Website to aggregate.
     * 
    **/
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     * 
    **/
    orderBy?: Enumerable<WebsiteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Websites
    **/
    _count?: true | WebsiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebsiteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebsiteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebsiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebsiteMaxAggregateInputType
  }

  export type GetWebsiteAggregateType<T extends WebsiteAggregateArgs> = {
        [P in keyof T & keyof AggregateWebsite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebsite[P]>
      : GetScalarType<T[P], AggregateWebsite[P]>
  }




  export type WebsiteGroupByArgs = {
    where?: WebsiteWhereInput
    orderBy?: Enumerable<WebsiteOrderByWithAggregationInput>
    by: Array<WebsiteScalarFieldEnum>
    having?: WebsiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebsiteCountAggregateInputType | true
    _avg?: WebsiteAvgAggregateInputType
    _sum?: WebsiteSumAggregateInputType
    _min?: WebsiteMinAggregateInputType
    _max?: WebsiteMaxAggregateInputType
  }


  export type WebsiteGroupByOutputType = {
    id: number
    name: string
    url: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: WebsiteCountAggregateOutputType | null
    _avg: WebsiteAvgAggregateOutputType | null
    _sum: WebsiteSumAggregateOutputType | null
    _min: WebsiteMinAggregateOutputType | null
    _max: WebsiteMaxAggregateOutputType | null
  }

  type GetWebsiteGroupByPayload<T extends WebsiteGroupByArgs> = PrismaPromise<
    Array<
      PickArray<WebsiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebsiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebsiteGroupByOutputType[P]>
            : GetScalarType<T[P], WebsiteGroupByOutputType[P]>
        }
      >
    >


  export type WebsiteSelect = {
    id?: boolean
    name?: boolean
    url?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs
    userId?: boolean
  }

  export type WebsiteInclude = {
    user?: boolean | UserArgs
  }

  export type WebsiteGetPayload<
    S extends boolean | null | undefined | WebsiteArgs,
    U = keyof S
      > = S extends true
        ? Website
    : S extends undefined
    ? never
    : S extends WebsiteArgs | WebsiteFindManyArgs
    ?'include' extends U
    ? Website  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Website ? Website[P] : never
  } 
    : Website
  : Website


  type WebsiteCountArgs = Merge<
    Omit<WebsiteFindManyArgs, 'select' | 'include'> & {
      select?: WebsiteCountAggregateInputType | true
    }
  >

  export interface WebsiteDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Website that matches the filter.
     * @param {WebsiteFindUniqueArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WebsiteFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WebsiteFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Website'> extends True ? CheckSelect<T, Prisma__WebsiteClient<Website>, Prisma__WebsiteClient<WebsiteGetPayload<T>>> : CheckSelect<T, Prisma__WebsiteClient<Website | null >, Prisma__WebsiteClient<WebsiteGetPayload<T> | null >>

    /**
     * Find the first Website that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindFirstArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WebsiteFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WebsiteFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Website'> extends True ? CheckSelect<T, Prisma__WebsiteClient<Website>, Prisma__WebsiteClient<WebsiteGetPayload<T>>> : CheckSelect<T, Prisma__WebsiteClient<Website | null >, Prisma__WebsiteClient<WebsiteGetPayload<T> | null >>

    /**
     * Find zero or more Websites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Websites
     * const websites = await prisma.website.findMany()
     * 
     * // Get first 10 Websites
     * const websites = await prisma.website.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const websiteWithIdOnly = await prisma.website.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WebsiteFindManyArgs>(
      args?: SelectSubset<T, WebsiteFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Website>>, PrismaPromise<Array<WebsiteGetPayload<T>>>>

    /**
     * Create a Website.
     * @param {WebsiteCreateArgs} args - Arguments to create a Website.
     * @example
     * // Create one Website
     * const Website = await prisma.website.create({
     *   data: {
     *     // ... data to create a Website
     *   }
     * })
     * 
    **/
    create<T extends WebsiteCreateArgs>(
      args: SelectSubset<T, WebsiteCreateArgs>
    ): CheckSelect<T, Prisma__WebsiteClient<Website>, Prisma__WebsiteClient<WebsiteGetPayload<T>>>

    /**
     * Create many Websites.
     *     @param {WebsiteCreateManyArgs} args - Arguments to create many Websites.
     *     @example
     *     // Create many Websites
     *     const website = await prisma.website.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WebsiteCreateManyArgs>(
      args?: SelectSubset<T, WebsiteCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Website.
     * @param {WebsiteDeleteArgs} args - Arguments to delete one Website.
     * @example
     * // Delete one Website
     * const Website = await prisma.website.delete({
     *   where: {
     *     // ... filter to delete one Website
     *   }
     * })
     * 
    **/
    delete<T extends WebsiteDeleteArgs>(
      args: SelectSubset<T, WebsiteDeleteArgs>
    ): CheckSelect<T, Prisma__WebsiteClient<Website>, Prisma__WebsiteClient<WebsiteGetPayload<T>>>

    /**
     * Update one Website.
     * @param {WebsiteUpdateArgs} args - Arguments to update one Website.
     * @example
     * // Update one Website
     * const website = await prisma.website.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WebsiteUpdateArgs>(
      args: SelectSubset<T, WebsiteUpdateArgs>
    ): CheckSelect<T, Prisma__WebsiteClient<Website>, Prisma__WebsiteClient<WebsiteGetPayload<T>>>

    /**
     * Delete zero or more Websites.
     * @param {WebsiteDeleteManyArgs} args - Arguments to filter Websites to delete.
     * @example
     * // Delete a few Websites
     * const { count } = await prisma.website.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WebsiteDeleteManyArgs>(
      args?: SelectSubset<T, WebsiteDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Websites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Websites
     * const website = await prisma.website.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WebsiteUpdateManyArgs>(
      args: SelectSubset<T, WebsiteUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Website.
     * @param {WebsiteUpsertArgs} args - Arguments to update or create a Website.
     * @example
     * // Update or create a Website
     * const website = await prisma.website.upsert({
     *   create: {
     *     // ... data to create a Website
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Website we want to update
     *   }
     * })
    **/
    upsert<T extends WebsiteUpsertArgs>(
      args: SelectSubset<T, WebsiteUpsertArgs>
    ): CheckSelect<T, Prisma__WebsiteClient<Website>, Prisma__WebsiteClient<WebsiteGetPayload<T>>>

    /**
     * Count the number of Websites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteCountArgs} args - Arguments to filter Websites to count.
     * @example
     * // Count the number of Websites
     * const count = await prisma.website.count({
     *   where: {
     *     // ... the filter for the Websites we want to count
     *   }
     * })
    **/
    count<T extends WebsiteCountArgs>(
      args?: Subset<T, WebsiteCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebsiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Website.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebsiteAggregateArgs>(args: Subset<T, WebsiteAggregateArgs>): PrismaPromise<GetWebsiteAggregateType<T>>

    /**
     * Group by Website.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebsiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebsiteGroupByArgs['orderBy'] }
        : { orderBy?: WebsiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebsiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebsiteGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Website.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WebsiteClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Website findUnique
   */
  export type WebsiteFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Website
     * 
    **/
    select?: WebsiteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WebsiteInclude | null
    /**
     * Throw an Error if a Website can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Website to fetch.
     * 
    **/
    where: WebsiteWhereUniqueInput
  }


  /**
   * Website findFirst
   */
  export type WebsiteFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Website
     * 
    **/
    select?: WebsiteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WebsiteInclude | null
    /**
     * Throw an Error if a Website can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Website to fetch.
     * 
    **/
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     * 
    **/
    orderBy?: Enumerable<WebsiteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Websites.
     * 
    **/
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Websites.
     * 
    **/
    distinct?: Enumerable<WebsiteScalarFieldEnum>
  }


  /**
   * Website findMany
   */
  export type WebsiteFindManyArgs = {
    /**
     * Select specific fields to fetch from the Website
     * 
    **/
    select?: WebsiteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WebsiteInclude | null
    /**
     * Filter, which Websites to fetch.
     * 
    **/
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     * 
    **/
    orderBy?: Enumerable<WebsiteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Websites.
     * 
    **/
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     * 
    **/
    skip?: number
    distinct?: Enumerable<WebsiteScalarFieldEnum>
  }


  /**
   * Website create
   */
  export type WebsiteCreateArgs = {
    /**
     * Select specific fields to fetch from the Website
     * 
    **/
    select?: WebsiteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WebsiteInclude | null
    /**
     * The data needed to create a Website.
     * 
    **/
    data: XOR<WebsiteCreateInput, WebsiteUncheckedCreateInput>
  }


  /**
   * Website createMany
   */
  export type WebsiteCreateManyArgs = {
    /**
     * The data used to create many Websites.
     * 
    **/
    data: Enumerable<WebsiteCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Website update
   */
  export type WebsiteUpdateArgs = {
    /**
     * Select specific fields to fetch from the Website
     * 
    **/
    select?: WebsiteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WebsiteInclude | null
    /**
     * The data needed to update a Website.
     * 
    **/
    data: XOR<WebsiteUpdateInput, WebsiteUncheckedUpdateInput>
    /**
     * Choose, which Website to update.
     * 
    **/
    where: WebsiteWhereUniqueInput
  }


  /**
   * Website updateMany
   */
  export type WebsiteUpdateManyArgs = {
    /**
     * The data used to update Websites.
     * 
    **/
    data: XOR<WebsiteUpdateManyMutationInput, WebsiteUncheckedUpdateManyInput>
    /**
     * Filter which Websites to update
     * 
    **/
    where?: WebsiteWhereInput
  }


  /**
   * Website upsert
   */
  export type WebsiteUpsertArgs = {
    /**
     * Select specific fields to fetch from the Website
     * 
    **/
    select?: WebsiteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WebsiteInclude | null
    /**
     * The filter to search for the Website to update in case it exists.
     * 
    **/
    where: WebsiteWhereUniqueInput
    /**
     * In case the Website found by the `where` argument doesn't exist, create a new Website with this data.
     * 
    **/
    create: XOR<WebsiteCreateInput, WebsiteUncheckedCreateInput>
    /**
     * In case the Website was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<WebsiteUpdateInput, WebsiteUncheckedUpdateInput>
  }


  /**
   * Website delete
   */
  export type WebsiteDeleteArgs = {
    /**
     * Select specific fields to fetch from the Website
     * 
    **/
    select?: WebsiteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WebsiteInclude | null
    /**
     * Filter which Website to delete.
     * 
    **/
    where: WebsiteWhereUniqueInput
  }


  /**
   * Website deleteMany
   */
  export type WebsiteDeleteManyArgs = {
    /**
     * Filter which Websites to delete
     * 
    **/
    where?: WebsiteWhereInput
  }


  /**
   * Website without action
   */
  export type WebsiteArgs = {
    /**
     * Select specific fields to fetch from the Website
     * 
    **/
    select?: WebsiteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WebsiteInclude | null
  }



  /**
   * Model Like
   */


  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    recipeId: number | null
    commentId: number | null
  }

  export type LikeSumAggregateOutputType = {
    id: number | null
    userId: number | null
    recipeId: number | null
    commentId: number | null
  }

  export type LikeMinAggregateOutputType = {
    id: number | null
    userId: number | null
    recipeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    commentId: number | null
  }

  export type LikeMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    recipeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    commentId: number | null
  }

  export type LikeCountAggregateOutputType = {
    id: number
    userId: number
    recipeId: number
    createdAt: number
    updatedAt: number
    commentId: number
    _all: number
  }


  export type LikeAvgAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    commentId?: true
  }

  export type LikeSumAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    commentId?: true
  }

  export type LikeMinAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    createdAt?: true
    updatedAt?: true
    commentId?: true
  }

  export type LikeMaxAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    createdAt?: true
    updatedAt?: true
    commentId?: true
  }

  export type LikeCountAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    createdAt?: true
    updatedAt?: true
    commentId?: true
    _all?: true
  }

  export type LikeAggregateArgs = {
    /**
     * Filter which Like to aggregate.
     * 
    **/
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     * 
    **/
    orderBy?: Enumerable<LikeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type LikeGroupByArgs = {
    where?: LikeWhereInput
    orderBy?: Enumerable<LikeOrderByWithAggregationInput>
    by: Array<LikeScalarFieldEnum>
    having?: LikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _avg?: LikeAvgAggregateInputType
    _sum?: LikeSumAggregateInputType
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }


  export type LikeGroupByOutputType = {
    id: number
    userId: number
    recipeId: number
    createdAt: Date
    updatedAt: Date
    commentId: number | null
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type LikeSelect = {
    id?: boolean
    userId?: boolean
    user?: boolean | UserArgs
    recipeId?: boolean
    recipe?: boolean | RecipeArgs
    createdAt?: boolean
    updatedAt?: boolean
    Comment?: boolean | CommentArgs
    commentId?: boolean
  }

  export type LikeInclude = {
    user?: boolean | UserArgs
    recipe?: boolean | RecipeArgs
    Comment?: boolean | CommentArgs
  }

  export type LikeGetPayload<
    S extends boolean | null | undefined | LikeArgs,
    U = keyof S
      > = S extends true
        ? Like
    : S extends undefined
    ? never
    : S extends LikeArgs | LikeFindManyArgs
    ?'include' extends U
    ? Like  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'recipe' ? RecipeGetPayload<S['include'][P]> :
        P extends 'Comment' ? CommentGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'recipe' ? RecipeGetPayload<S['select'][P]> :
        P extends 'Comment' ? CommentGetPayload<S['select'][P]> | null :  P extends keyof Like ? Like[P] : never
  } 
    : Like
  : Like


  type LikeCountArgs = Merge<
    Omit<LikeFindManyArgs, 'select' | 'include'> & {
      select?: LikeCountAggregateInputType | true
    }
  >

  export interface LikeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LikeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LikeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Like'> extends True ? CheckSelect<T, Prisma__LikeClient<Like>, Prisma__LikeClient<LikeGetPayload<T>>> : CheckSelect<T, Prisma__LikeClient<Like | null >, Prisma__LikeClient<LikeGetPayload<T> | null >>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LikeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LikeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Like'> extends True ? CheckSelect<T, Prisma__LikeClient<Like>, Prisma__LikeClient<LikeGetPayload<T>>> : CheckSelect<T, Prisma__LikeClient<Like | null >, Prisma__LikeClient<LikeGetPayload<T> | null >>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LikeFindManyArgs>(
      args?: SelectSubset<T, LikeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Like>>, PrismaPromise<Array<LikeGetPayload<T>>>>

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
    **/
    create<T extends LikeCreateArgs>(
      args: SelectSubset<T, LikeCreateArgs>
    ): CheckSelect<T, Prisma__LikeClient<Like>, Prisma__LikeClient<LikeGetPayload<T>>>

    /**
     * Create many Likes.
     *     @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     *     @example
     *     // Create many Likes
     *     const like = await prisma.like.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LikeCreateManyArgs>(
      args?: SelectSubset<T, LikeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
    **/
    delete<T extends LikeDeleteArgs>(
      args: SelectSubset<T, LikeDeleteArgs>
    ): CheckSelect<T, Prisma__LikeClient<Like>, Prisma__LikeClient<LikeGetPayload<T>>>

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LikeUpdateArgs>(
      args: SelectSubset<T, LikeUpdateArgs>
    ): CheckSelect<T, Prisma__LikeClient<Like>, Prisma__LikeClient<LikeGetPayload<T>>>

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LikeDeleteManyArgs>(
      args?: SelectSubset<T, LikeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LikeUpdateManyArgs>(
      args: SelectSubset<T, LikeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
    **/
    upsert<T extends LikeUpsertArgs>(
      args: SelectSubset<T, LikeUpsertArgs>
    ): CheckSelect<T, Prisma__LikeClient<Like>, Prisma__LikeClient<LikeGetPayload<T>>>

    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LikeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    recipe<T extends RecipeArgs = {}>(args?: Subset<T, RecipeArgs>): CheckSelect<T, Prisma__RecipeClient<Recipe | null >, Prisma__RecipeClient<RecipeGetPayload<T> | null >>;

    Comment<T extends CommentArgs = {}>(args?: Subset<T, CommentArgs>): CheckSelect<T, Prisma__CommentClient<Comment | null >, Prisma__CommentClient<CommentGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Like
     * 
    **/
    select?: LikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikeInclude | null
    /**
     * Throw an Error if a Like can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Like to fetch.
     * 
    **/
    where: LikeWhereUniqueInput
  }


  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Like
     * 
    **/
    select?: LikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikeInclude | null
    /**
     * Throw an Error if a Like can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Like to fetch.
     * 
    **/
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     * 
    **/
    orderBy?: Enumerable<LikeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     * 
    **/
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     * 
    **/
    distinct?: Enumerable<LikeScalarFieldEnum>
  }


  /**
   * Like findMany
   */
  export type LikeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Like
     * 
    **/
    select?: LikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikeInclude | null
    /**
     * Filter, which Likes to fetch.
     * 
    **/
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     * 
    **/
    orderBy?: Enumerable<LikeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     * 
    **/
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LikeScalarFieldEnum>
  }


  /**
   * Like create
   */
  export type LikeCreateArgs = {
    /**
     * Select specific fields to fetch from the Like
     * 
    **/
    select?: LikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikeInclude | null
    /**
     * The data needed to create a Like.
     * 
    **/
    data: XOR<LikeCreateInput, LikeUncheckedCreateInput>
  }


  /**
   * Like createMany
   */
  export type LikeCreateManyArgs = {
    /**
     * The data used to create many Likes.
     * 
    **/
    data: Enumerable<LikeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Like update
   */
  export type LikeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Like
     * 
    **/
    select?: LikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikeInclude | null
    /**
     * The data needed to update a Like.
     * 
    **/
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
    /**
     * Choose, which Like to update.
     * 
    **/
    where: LikeWhereUniqueInput
  }


  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs = {
    /**
     * The data used to update Likes.
     * 
    **/
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     * 
    **/
    where?: LikeWhereInput
  }


  /**
   * Like upsert
   */
  export type LikeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Like
     * 
    **/
    select?: LikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikeInclude | null
    /**
     * The filter to search for the Like to update in case it exists.
     * 
    **/
    where: LikeWhereUniqueInput
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     * 
    **/
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
  }


  /**
   * Like delete
   */
  export type LikeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Like
     * 
    **/
    select?: LikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikeInclude | null
    /**
     * Filter which Like to delete.
     * 
    **/
    where: LikeWhereUniqueInput
  }


  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs = {
    /**
     * Filter which Likes to delete
     * 
    **/
    where?: LikeWhereInput
  }


  /**
   * Like without action
   */
  export type LikeArgs = {
    /**
     * Select specific fields to fetch from the Like
     * 
    **/
    select?: LikeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LikeInclude | null
  }



  /**
   * Model Comment
   */


  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    recipeId: number | null
    userId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    recipeId: number | null
    userId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    recipeId: number | null
    userId: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    recipeId: number | null
    userId: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    recipeId: number
    userId: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    recipeId?: true
    userId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    recipeId?: true
    userId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    recipeId?: true
    userId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    recipeId?: true
    userId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    recipeId?: true
    userId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs = {
    /**
     * Filter which Comment to aggregate.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs = {
    where?: CommentWhereInput
    orderBy?: Enumerable<CommentOrderByWithAggregationInput>
    by: Array<CommentScalarFieldEnum>
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }


  export type CommentGroupByOutputType = {
    id: number
    recipeId: number
    userId: number
    content: string
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect = {
    id?: boolean
    recipeId?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recipe?: boolean | RecipeArgs
    user?: boolean | UserArgs
    likes?: boolean | LikeFindManyArgs
    _count?: boolean | CommentCountOutputTypeArgs
  }

  export type CommentInclude = {
    recipe?: boolean | RecipeArgs
    user?: boolean | UserArgs
    likes?: boolean | LikeFindManyArgs
    _count?: boolean | CommentCountOutputTypeArgs
  }

  export type CommentGetPayload<
    S extends boolean | null | undefined | CommentArgs,
    U = keyof S
      > = S extends true
        ? Comment
    : S extends undefined
    ? never
    : S extends CommentArgs | CommentFindManyArgs
    ?'include' extends U
    ? Comment  & {
    [P in TrueKeys<S['include']>]:
        P extends 'recipe' ? RecipeGetPayload<S['include'][P]> :
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'likes' ? Array < LikeGetPayload<S['include'][P]>>  :
        P extends '_count' ? CommentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'recipe' ? RecipeGetPayload<S['select'][P]> :
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'likes' ? Array < LikeGetPayload<S['select'][P]>>  :
        P extends '_count' ? CommentCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Comment ? Comment[P] : never
  } 
    : Comment
  : Comment


  type CommentCountArgs = Merge<
    Omit<CommentFindManyArgs, 'select' | 'include'> & {
      select?: CommentCountAggregateInputType | true
    }
  >

  export interface CommentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CommentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Comment'> extends True ? CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>> : CheckSelect<T, Prisma__CommentClient<Comment | null >, Prisma__CommentClient<CommentGetPayload<T> | null >>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CommentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Comment'> extends True ? CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>> : CheckSelect<T, Prisma__CommentClient<Comment | null >, Prisma__CommentClient<CommentGetPayload<T> | null >>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentFindManyArgs>(
      args?: SelectSubset<T, CommentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends CommentCreateArgs>(
      args: SelectSubset<T, CommentCreateArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Create many Comments.
     *     @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comment = await prisma.comment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentCreateManyArgs>(
      args?: SelectSubset<T, CommentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends CommentDeleteArgs>(
      args: SelectSubset<T, CommentDeleteArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentUpdateArgs>(
      args: SelectSubset<T, CommentUpdateArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentDeleteManyArgs>(
      args?: SelectSubset<T, CommentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentUpdateManyArgs>(
      args: SelectSubset<T, CommentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends CommentUpsertArgs>(
      args: SelectSubset<T, CommentUpsertArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    recipe<T extends RecipeArgs = {}>(args?: Subset<T, RecipeArgs>): CheckSelect<T, Prisma__RecipeClient<Recipe | null >, Prisma__RecipeClient<RecipeGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    likes<T extends LikeFindManyArgs = {}>(args?: Subset<T, LikeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Like>>, PrismaPromise<Array<LikeGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Throw an Error if a Comment can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Comment to fetch.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Throw an Error if a Comment can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Comment to fetch.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     * 
    **/
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Comment findMany
   */
  export type CommentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter, which Comments to fetch.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Comment create
   */
  export type CommentCreateArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The data needed to create a Comment.
     * 
    **/
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }


  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs = {
    /**
     * The data used to create many Comments.
     * 
    **/
    data: Enumerable<CommentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Comment update
   */
  export type CommentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The data needed to update a Comment.
     * 
    **/
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs = {
    /**
     * The data used to update Comments.
     * 
    **/
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     * 
    **/
    where?: CommentWhereInput
  }


  /**
   * Comment upsert
   */
  export type CommentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The filter to search for the Comment to update in case it exists.
     * 
    **/
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     * 
    **/
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }


  /**
   * Comment delete
   */
  export type CommentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter which Comment to delete.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs = {
    /**
     * Filter which Comments to delete
     * 
    **/
    where?: CommentWhereInput
  }


  /**
   * Comment without action
   */
  export type CommentArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    bio: 'bio',
    phone: 'phone'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const RecipeScalarFieldEnum: {
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
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const WebsiteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type WebsiteScalarFieldEnum = (typeof WebsiteScalarFieldEnum)[keyof typeof WebsiteScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    recipeId: 'recipeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    commentId: 'commentId'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    recipeId: 'recipeId',
    userId: 'userId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    password?: StringFilter | string
    role?: EnumRoleFilter | Role
    profile?: XOR<ProfileRelationFilter, ProfileWhereInput> | null
    recipe?: RecipeListRelationFilter
    avatar?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Website?: WebsiteListRelationFilter
    likes?: LikeListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    recipe?: RecipeOrderByRelationAggregateInput
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Website?: WebsiteOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    role?: EnumRoleWithAggregatesFilter | Role
    avatar?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProfileWhereInput = {
    AND?: Enumerable<ProfileWhereInput>
    OR?: Enumerable<ProfileWhereInput>
    NOT?: Enumerable<ProfileWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    bio?: StringNullableFilter | string | null
    phone?: StringNullableFilter | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = {
    id?: number
    userId?: number
  }

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProfileScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProfileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProfileScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    bio?: StringNullableWithAggregatesFilter | string | null
    phone?: StringNullableWithAggregatesFilter | string | null
  }

  export type RecipeWhereInput = {
    AND?: Enumerable<RecipeWhereInput>
    OR?: Enumerable<RecipeWhereInput>
    NOT?: Enumerable<RecipeWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    imageUrl?: StringNullableFilter | string | null
    rating?: IntNullableFilter | number | null
    courseType?: StringNullableFilter | string | null
    prepTime?: IntNullableFilter | number | null
    cookTime?: IntNullableFilter | number | null
    servings?: IntNullableFilter | number | null
    ingredients?: StringNullableListFilter
    instructions?: StringNullableListFilter
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
    likes?: LikeListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type RecipeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    rating?: SortOrder
    courseType?: SortOrder
    prepTime?: SortOrder
    cookTime?: SortOrder
    servings?: SortOrder
    ingredients?: SortOrder
    instructions?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
    likes?: LikeOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type RecipeWhereUniqueInput = {
    id?: number
  }

  export type RecipeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    rating?: SortOrder
    courseType?: SortOrder
    prepTime?: SortOrder
    cookTime?: SortOrder
    servings?: SortOrder
    ingredients?: SortOrder
    instructions?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: RecipeCountOrderByAggregateInput
    _avg?: RecipeAvgOrderByAggregateInput
    _max?: RecipeMaxOrderByAggregateInput
    _min?: RecipeMinOrderByAggregateInput
    _sum?: RecipeSumOrderByAggregateInput
  }

  export type RecipeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RecipeScalarWhereWithAggregatesInput>
    OR?: Enumerable<RecipeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RecipeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    imageUrl?: StringNullableWithAggregatesFilter | string | null
    rating?: IntNullableWithAggregatesFilter | number | null
    courseType?: StringNullableWithAggregatesFilter | string | null
    prepTime?: IntNullableWithAggregatesFilter | number | null
    cookTime?: IntNullableWithAggregatesFilter | number | null
    servings?: IntNullableWithAggregatesFilter | number | null
    ingredients?: StringNullableListFilter
    instructions?: StringNullableListFilter
    description?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: IntWithAggregatesFilter | number
  }

  export type WebsiteWhereInput = {
    AND?: Enumerable<WebsiteWhereInput>
    OR?: Enumerable<WebsiteWhereInput>
    NOT?: Enumerable<WebsiteWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    url?: StringFilter | string
    imageUrl?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
  }

  export type WebsiteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
  }

  export type WebsiteWhereUniqueInput = {
    id?: number
  }

  export type WebsiteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: WebsiteCountOrderByAggregateInput
    _avg?: WebsiteAvgOrderByAggregateInput
    _max?: WebsiteMaxOrderByAggregateInput
    _min?: WebsiteMinOrderByAggregateInput
    _sum?: WebsiteSumOrderByAggregateInput
  }

  export type WebsiteScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WebsiteScalarWhereWithAggregatesInput>
    OR?: Enumerable<WebsiteScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WebsiteScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    imageUrl?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: IntWithAggregatesFilter | number
  }

  export type LikeWhereInput = {
    AND?: Enumerable<LikeWhereInput>
    OR?: Enumerable<LikeWhereInput>
    NOT?: Enumerable<LikeWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    recipeId?: IntFilter | number
    recipe?: XOR<RecipeRelationFilter, RecipeWhereInput>
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Comment?: XOR<CommentRelationFilter, CommentWhereInput> | null
    commentId?: IntNullableFilter | number | null
  }

  export type LikeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    recipeId?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Comment?: CommentOrderByWithRelationInput
    commentId?: SortOrder
  }

  export type LikeWhereUniqueInput = {
    id?: number
  }

  export type LikeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    commentId?: SortOrder
    _count?: LikeCountOrderByAggregateInput
    _avg?: LikeAvgOrderByAggregateInput
    _max?: LikeMaxOrderByAggregateInput
    _min?: LikeMinOrderByAggregateInput
    _sum?: LikeSumOrderByAggregateInput
  }

  export type LikeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LikeScalarWhereWithAggregatesInput>
    OR?: Enumerable<LikeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LikeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    recipeId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    commentId?: IntNullableWithAggregatesFilter | number | null
  }

  export type CommentWhereInput = {
    AND?: Enumerable<CommentWhereInput>
    OR?: Enumerable<CommentWhereInput>
    NOT?: Enumerable<CommentWhereInput>
    id?: IntFilter | number
    recipeId?: IntFilter | number
    userId?: IntFilter | number
    content?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    recipe?: XOR<RecipeRelationFilter, RecipeWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    likes?: LikeListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    likes?: LikeOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = {
    id?: number
  }

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CommentScalarWhereWithAggregatesInput>
    OR?: Enumerable<CommentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CommentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    recipeId?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    content?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    role?: Role
    profile?: ProfileCreateNestedOneWithoutUserInput
    recipe?: RecipeCreateNestedManyWithoutUserInput
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Website?: WebsiteCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role?: Role
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    recipe?: RecipeUncheckedCreateNestedManyWithoutUserInput
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Website?: WebsiteUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    profile?: ProfileUpdateOneWithoutUserInput
    recipe?: RecipeUpdateManyWithoutUserInput
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Website?: WebsiteUpdateManyWithoutUserInput
    likes?: LikeUpdateManyWithoutUserInput
    comments?: CommentUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    profile?: ProfileUncheckedUpdateOneWithoutUserInput
    recipe?: RecipeUncheckedUpdateManyWithoutUserInput
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Website?: WebsiteUncheckedUpdateManyWithoutUserInput
    likes?: LikeUncheckedUpdateManyWithoutUserInput
    comments?: CommentUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    role?: Role
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    firstName: string
    lastName: string
    bio?: string | null
    phone?: string | null
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    userId: number
    firstName: string
    lastName: string
    bio?: string | null
    phone?: string | null
  }

  export type ProfileUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProfileInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileCreateManyInput = {
    id?: number
    userId: number
    firstName: string
    lastName: string
    bio?: string | null
    phone?: string | null
  }

  export type ProfileUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeCreateInput = {
    title: string
    imageUrl?: string | null
    rating?: number | null
    courseType?: string | null
    prepTime?: number | null
    cookTime?: number | null
    servings?: number | null
    ingredients?: RecipeCreateingredientsInput | Enumerable<string>
    instructions?: RecipeCreateinstructionsInput | Enumerable<string>
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRecipeInput
    likes?: LikeCreateNestedManyWithoutRecipeInput
    comments?: CommentCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateInput = {
    id?: number
    title: string
    imageUrl?: string | null
    rating?: number | null
    courseType?: string | null
    prepTime?: number | null
    cookTime?: number | null
    servings?: number | null
    ingredients?: RecipeCreateingredientsInput | Enumerable<string>
    instructions?: RecipeCreateinstructionsInput | Enumerable<string>
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    likes?: LikeUncheckedCreateNestedManyWithoutRecipeInput
    comments?: CommentUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    courseType?: NullableStringFieldUpdateOperationsInput | string | null
    prepTime?: NullableIntFieldUpdateOperationsInput | number | null
    cookTime?: NullableIntFieldUpdateOperationsInput | number | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    ingredients?: RecipeUpdateingredientsInput | Enumerable<string>
    instructions?: RecipeUpdateinstructionsInput | Enumerable<string>
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecipeInput
    likes?: LikeUpdateManyWithoutRecipeInput
    comments?: CommentUpdateManyWithoutRecipeInput
  }

  export type RecipeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    courseType?: NullableStringFieldUpdateOperationsInput | string | null
    prepTime?: NullableIntFieldUpdateOperationsInput | number | null
    cookTime?: NullableIntFieldUpdateOperationsInput | number | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    ingredients?: RecipeUpdateingredientsInput | Enumerable<string>
    instructions?: RecipeUpdateinstructionsInput | Enumerable<string>
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    likes?: LikeUncheckedUpdateManyWithoutRecipeInput
    comments?: CommentUncheckedUpdateManyWithoutRecipeInput
  }

  export type RecipeCreateManyInput = {
    id?: number
    title: string
    imageUrl?: string | null
    rating?: number | null
    courseType?: string | null
    prepTime?: number | null
    cookTime?: number | null
    servings?: number | null
    ingredients?: RecipeCreateingredientsInput | Enumerable<string>
    instructions?: RecipeCreateinstructionsInput | Enumerable<string>
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type RecipeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    courseType?: NullableStringFieldUpdateOperationsInput | string | null
    prepTime?: NullableIntFieldUpdateOperationsInput | number | null
    cookTime?: NullableIntFieldUpdateOperationsInput | number | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    ingredients?: RecipeUpdateingredientsInput | Enumerable<string>
    instructions?: RecipeUpdateinstructionsInput | Enumerable<string>
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    courseType?: NullableStringFieldUpdateOperationsInput | string | null
    prepTime?: NullableIntFieldUpdateOperationsInput | number | null
    cookTime?: NullableIntFieldUpdateOperationsInput | number | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    ingredients?: RecipeUpdateingredientsInput | Enumerable<string>
    instructions?: RecipeUpdateinstructionsInput | Enumerable<string>
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type WebsiteCreateInput = {
    name: string
    url: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWebsiteInput
  }

  export type WebsiteUncheckedCreateInput = {
    id?: number
    name: string
    url: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type WebsiteUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWebsiteInput
  }

  export type WebsiteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type WebsiteCreateManyInput = {
    id?: number
    name: string
    url: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type WebsiteUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type LikeCreateInput = {
    user: UserCreateNestedOneWithoutLikesInput
    recipe: RecipeCreateNestedOneWithoutLikesInput
    createdAt?: Date | string
    updatedAt?: Date | string
    Comment?: CommentCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateInput = {
    id?: number
    userId: number
    recipeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    commentId?: number | null
  }

  export type LikeUpdateInput = {
    user?: UserUpdateOneRequiredWithoutLikesInput
    recipe?: RecipeUpdateOneRequiredWithoutLikesInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Comment?: CommentUpdateOneWithoutLikesInput
  }

  export type LikeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LikeCreateManyInput = {
    id?: number
    userId: number
    recipeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    commentId?: number | null
  }

  export type LikeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentCreateInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recipe: RecipeCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
    likes?: LikeCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    recipeId: number
    userId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipe?: RecipeUpdateOneRequiredWithoutCommentsInput
    user?: UserUpdateOneRequiredWithoutCommentsInput
    likes?: LikeUpdateManyWithoutCommentInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutCommentInput
  }

  export type CommentCreateManyInput = {
    id?: number
    recipeId: number
    userId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type ProfileRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type RecipeListRelationFilter = {
    every?: RecipeWhereInput
    some?: RecipeWhereInput
    none?: RecipeWhereInput
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type WebsiteListRelationFilter = {
    every?: WebsiteWhereInput
    some?: WebsiteWhereInput
    none?: WebsiteWhereInput
  }

  export type LikeListRelationFilter = {
    every?: LikeWhereInput
    some?: LikeWhereInput
    none?: LikeWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type RecipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebsiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type RecipeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    rating?: SortOrder
    courseType?: SortOrder
    prepTime?: SortOrder
    cookTime?: SortOrder
    servings?: SortOrder
    ingredients?: SortOrder
    instructions?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type RecipeAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    prepTime?: SortOrder
    cookTime?: SortOrder
    servings?: SortOrder
    userId?: SortOrder
  }

  export type RecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    rating?: SortOrder
    courseType?: SortOrder
    prepTime?: SortOrder
    cookTime?: SortOrder
    servings?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type RecipeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    rating?: SortOrder
    courseType?: SortOrder
    prepTime?: SortOrder
    cookTime?: SortOrder
    servings?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type RecipeSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    prepTime?: SortOrder
    cookTime?: SortOrder
    servings?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type WebsiteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type WebsiteAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type WebsiteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type WebsiteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type WebsiteSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type RecipeRelationFilter = {
    is?: RecipeWhereInput
    isNot?: RecipeWhereInput
  }

  export type CommentRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type LikeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    commentId?: SortOrder
  }

  export type LikeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    commentId?: SortOrder
  }

  export type LikeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    commentId?: SortOrder
  }

  export type LikeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    commentId?: SortOrder
  }

  export type LikeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    commentId?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    userId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    userId?: SortOrder
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type RecipeCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<RecipeCreateWithoutUserInput>, Enumerable<RecipeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<RecipeCreateOrConnectWithoutUserInput>
    createMany?: RecipeCreateManyUserInputEnvelope
    connect?: Enumerable<RecipeWhereUniqueInput>
  }

  export type WebsiteCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<WebsiteCreateWithoutUserInput>, Enumerable<WebsiteUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WebsiteCreateOrConnectWithoutUserInput>
    createMany?: WebsiteCreateManyUserInputEnvelope
    connect?: Enumerable<WebsiteWhereUniqueInput>
  }

  export type LikeCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<LikeCreateWithoutUserInput>, Enumerable<LikeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LikeCreateOrConnectWithoutUserInput>
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: Enumerable<LikeWhereUniqueInput>
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUserInput>, Enumerable<CommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type RecipeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<RecipeCreateWithoutUserInput>, Enumerable<RecipeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<RecipeCreateOrConnectWithoutUserInput>
    createMany?: RecipeCreateManyUserInputEnvelope
    connect?: Enumerable<RecipeWhereUniqueInput>
  }

  export type WebsiteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<WebsiteCreateWithoutUserInput>, Enumerable<WebsiteUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WebsiteCreateOrConnectWithoutUserInput>
    createMany?: WebsiteCreateManyUserInputEnvelope
    connect?: Enumerable<WebsiteWhereUniqueInput>
  }

  export type LikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<LikeCreateWithoutUserInput>, Enumerable<LikeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LikeCreateOrConnectWithoutUserInput>
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: Enumerable<LikeWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUserInput>, Enumerable<CommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type ProfileUpdateOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type RecipeUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<RecipeCreateWithoutUserInput>, Enumerable<RecipeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<RecipeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<RecipeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: RecipeCreateManyUserInputEnvelope
    set?: Enumerable<RecipeWhereUniqueInput>
    disconnect?: Enumerable<RecipeWhereUniqueInput>
    delete?: Enumerable<RecipeWhereUniqueInput>
    connect?: Enumerable<RecipeWhereUniqueInput>
    update?: Enumerable<RecipeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<RecipeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<RecipeScalarWhereInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WebsiteUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<WebsiteCreateWithoutUserInput>, Enumerable<WebsiteUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WebsiteCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<WebsiteUpsertWithWhereUniqueWithoutUserInput>
    createMany?: WebsiteCreateManyUserInputEnvelope
    set?: Enumerable<WebsiteWhereUniqueInput>
    disconnect?: Enumerable<WebsiteWhereUniqueInput>
    delete?: Enumerable<WebsiteWhereUniqueInput>
    connect?: Enumerable<WebsiteWhereUniqueInput>
    update?: Enumerable<WebsiteUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<WebsiteUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<WebsiteScalarWhereInput>
  }

  export type LikeUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<LikeCreateWithoutUserInput>, Enumerable<LikeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LikeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<LikeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: LikeCreateManyUserInputEnvelope
    set?: Enumerable<LikeWhereUniqueInput>
    disconnect?: Enumerable<LikeWhereUniqueInput>
    delete?: Enumerable<LikeWhereUniqueInput>
    connect?: Enumerable<LikeWhereUniqueInput>
    update?: Enumerable<LikeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<LikeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<LikeScalarWhereInput>
  }

  export type CommentUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUserInput>, Enumerable<CommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CommentCreateManyUserInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileUncheckedUpdateOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type RecipeUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<RecipeCreateWithoutUserInput>, Enumerable<RecipeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<RecipeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<RecipeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: RecipeCreateManyUserInputEnvelope
    set?: Enumerable<RecipeWhereUniqueInput>
    disconnect?: Enumerable<RecipeWhereUniqueInput>
    delete?: Enumerable<RecipeWhereUniqueInput>
    connect?: Enumerable<RecipeWhereUniqueInput>
    update?: Enumerable<RecipeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<RecipeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<RecipeScalarWhereInput>
  }

  export type WebsiteUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<WebsiteCreateWithoutUserInput>, Enumerable<WebsiteUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WebsiteCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<WebsiteUpsertWithWhereUniqueWithoutUserInput>
    createMany?: WebsiteCreateManyUserInputEnvelope
    set?: Enumerable<WebsiteWhereUniqueInput>
    disconnect?: Enumerable<WebsiteWhereUniqueInput>
    delete?: Enumerable<WebsiteWhereUniqueInput>
    connect?: Enumerable<WebsiteWhereUniqueInput>
    update?: Enumerable<WebsiteUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<WebsiteUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<WebsiteScalarWhereInput>
  }

  export type LikeUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<LikeCreateWithoutUserInput>, Enumerable<LikeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LikeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<LikeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: LikeCreateManyUserInputEnvelope
    set?: Enumerable<LikeWhereUniqueInput>
    disconnect?: Enumerable<LikeWhereUniqueInput>
    delete?: Enumerable<LikeWhereUniqueInput>
    connect?: Enumerable<LikeWhereUniqueInput>
    update?: Enumerable<LikeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<LikeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<LikeScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUserInput>, Enumerable<CommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CommentCreateManyUserInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type RecipeCreateingredientsInput = {
    set: Enumerable<string>
  }

  export type RecipeCreateinstructionsInput = {
    set: Enumerable<string>
  }

  export type UserCreateNestedOneWithoutRecipeInput = {
    create?: XOR<UserCreateWithoutRecipeInput, UserUncheckedCreateWithoutRecipeInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecipeInput
    connect?: UserWhereUniqueInput
  }

  export type LikeCreateNestedManyWithoutRecipeInput = {
    create?: XOR<Enumerable<LikeCreateWithoutRecipeInput>, Enumerable<LikeUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<LikeCreateOrConnectWithoutRecipeInput>
    createMany?: LikeCreateManyRecipeInputEnvelope
    connect?: Enumerable<LikeWhereUniqueInput>
  }

  export type CommentCreateNestedManyWithoutRecipeInput = {
    create?: XOR<Enumerable<CommentCreateWithoutRecipeInput>, Enumerable<CommentUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutRecipeInput>
    createMany?: CommentCreateManyRecipeInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type LikeUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<Enumerable<LikeCreateWithoutRecipeInput>, Enumerable<LikeUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<LikeCreateOrConnectWithoutRecipeInput>
    createMany?: LikeCreateManyRecipeInputEnvelope
    connect?: Enumerable<LikeWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<Enumerable<CommentCreateWithoutRecipeInput>, Enumerable<CommentUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutRecipeInput>
    createMany?: CommentCreateManyRecipeInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecipeUpdateingredientsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type RecipeUpdateinstructionsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type UserUpdateOneRequiredWithoutRecipeInput = {
    create?: XOR<UserCreateWithoutRecipeInput, UserUncheckedCreateWithoutRecipeInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecipeInput
    upsert?: UserUpsertWithoutRecipeInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutRecipeInput, UserUncheckedUpdateWithoutRecipeInput>
  }

  export type LikeUpdateManyWithoutRecipeInput = {
    create?: XOR<Enumerable<LikeCreateWithoutRecipeInput>, Enumerable<LikeUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<LikeCreateOrConnectWithoutRecipeInput>
    upsert?: Enumerable<LikeUpsertWithWhereUniqueWithoutRecipeInput>
    createMany?: LikeCreateManyRecipeInputEnvelope
    set?: Enumerable<LikeWhereUniqueInput>
    disconnect?: Enumerable<LikeWhereUniqueInput>
    delete?: Enumerable<LikeWhereUniqueInput>
    connect?: Enumerable<LikeWhereUniqueInput>
    update?: Enumerable<LikeUpdateWithWhereUniqueWithoutRecipeInput>
    updateMany?: Enumerable<LikeUpdateManyWithWhereWithoutRecipeInput>
    deleteMany?: Enumerable<LikeScalarWhereInput>
  }

  export type CommentUpdateManyWithoutRecipeInput = {
    create?: XOR<Enumerable<CommentCreateWithoutRecipeInput>, Enumerable<CommentUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutRecipeInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutRecipeInput>
    createMany?: CommentCreateManyRecipeInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutRecipeInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutRecipeInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type LikeUncheckedUpdateManyWithoutRecipeInput = {
    create?: XOR<Enumerable<LikeCreateWithoutRecipeInput>, Enumerable<LikeUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<LikeCreateOrConnectWithoutRecipeInput>
    upsert?: Enumerable<LikeUpsertWithWhereUniqueWithoutRecipeInput>
    createMany?: LikeCreateManyRecipeInputEnvelope
    set?: Enumerable<LikeWhereUniqueInput>
    disconnect?: Enumerable<LikeWhereUniqueInput>
    delete?: Enumerable<LikeWhereUniqueInput>
    connect?: Enumerable<LikeWhereUniqueInput>
    update?: Enumerable<LikeUpdateWithWhereUniqueWithoutRecipeInput>
    updateMany?: Enumerable<LikeUpdateManyWithWhereWithoutRecipeInput>
    deleteMany?: Enumerable<LikeScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutRecipeInput = {
    create?: XOR<Enumerable<CommentCreateWithoutRecipeInput>, Enumerable<CommentUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutRecipeInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutRecipeInput>
    createMany?: CommentCreateManyRecipeInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutRecipeInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutRecipeInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutWebsiteInput = {
    create?: XOR<UserCreateWithoutWebsiteInput, UserUncheckedCreateWithoutWebsiteInput>
    connectOrCreate?: UserCreateOrConnectWithoutWebsiteInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWebsiteInput = {
    create?: XOR<UserCreateWithoutWebsiteInput, UserUncheckedCreateWithoutWebsiteInput>
    connectOrCreate?: UserCreateOrConnectWithoutWebsiteInput
    upsert?: UserUpsertWithoutWebsiteInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutWebsiteInput, UserUncheckedUpdateWithoutWebsiteInput>
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    connect?: UserWhereUniqueInput
  }

  export type RecipeCreateNestedOneWithoutLikesInput = {
    create?: XOR<RecipeCreateWithoutLikesInput, RecipeUncheckedCreateWithoutLikesInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutLikesInput
    connect?: RecipeWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutLikesInput = {
    create?: XOR<CommentCreateWithoutLikesInput, CommentUncheckedCreateWithoutLikesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutLikesInput
    connect?: CommentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    upsert?: UserUpsertWithoutLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type RecipeUpdateOneRequiredWithoutLikesInput = {
    create?: XOR<RecipeCreateWithoutLikesInput, RecipeUncheckedCreateWithoutLikesInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutLikesInput
    upsert?: RecipeUpsertWithoutLikesInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<RecipeUpdateWithoutLikesInput, RecipeUncheckedUpdateWithoutLikesInput>
  }

  export type CommentUpdateOneWithoutLikesInput = {
    create?: XOR<CommentCreateWithoutLikesInput, CommentUncheckedCreateWithoutLikesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutLikesInput
    upsert?: CommentUpsertWithoutLikesInput
    disconnect?: boolean
    delete?: boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<CommentUpdateWithoutLikesInput, CommentUncheckedUpdateWithoutLikesInput>
  }

  export type RecipeCreateNestedOneWithoutCommentsInput = {
    create?: XOR<RecipeCreateWithoutCommentsInput, RecipeUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutCommentsInput
    connect?: RecipeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type LikeCreateNestedManyWithoutCommentInput = {
    create?: XOR<Enumerable<LikeCreateWithoutCommentInput>, Enumerable<LikeUncheckedCreateWithoutCommentInput>>
    connectOrCreate?: Enumerable<LikeCreateOrConnectWithoutCommentInput>
    createMany?: LikeCreateManyCommentInputEnvelope
    connect?: Enumerable<LikeWhereUniqueInput>
  }

  export type LikeUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<Enumerable<LikeCreateWithoutCommentInput>, Enumerable<LikeUncheckedCreateWithoutCommentInput>>
    connectOrCreate?: Enumerable<LikeCreateOrConnectWithoutCommentInput>
    createMany?: LikeCreateManyCommentInputEnvelope
    connect?: Enumerable<LikeWhereUniqueInput>
  }

  export type RecipeUpdateOneRequiredWithoutCommentsInput = {
    create?: XOR<RecipeCreateWithoutCommentsInput, RecipeUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutCommentsInput
    upsert?: RecipeUpsertWithoutCommentsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<RecipeUpdateWithoutCommentsInput, RecipeUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type LikeUpdateManyWithoutCommentInput = {
    create?: XOR<Enumerable<LikeCreateWithoutCommentInput>, Enumerable<LikeUncheckedCreateWithoutCommentInput>>
    connectOrCreate?: Enumerable<LikeCreateOrConnectWithoutCommentInput>
    upsert?: Enumerable<LikeUpsertWithWhereUniqueWithoutCommentInput>
    createMany?: LikeCreateManyCommentInputEnvelope
    set?: Enumerable<LikeWhereUniqueInput>
    disconnect?: Enumerable<LikeWhereUniqueInput>
    delete?: Enumerable<LikeWhereUniqueInput>
    connect?: Enumerable<LikeWhereUniqueInput>
    update?: Enumerable<LikeUpdateWithWhereUniqueWithoutCommentInput>
    updateMany?: Enumerable<LikeUpdateManyWithWhereWithoutCommentInput>
    deleteMany?: Enumerable<LikeScalarWhereInput>
  }

  export type LikeUncheckedUpdateManyWithoutCommentInput = {
    create?: XOR<Enumerable<LikeCreateWithoutCommentInput>, Enumerable<LikeUncheckedCreateWithoutCommentInput>>
    connectOrCreate?: Enumerable<LikeCreateOrConnectWithoutCommentInput>
    upsert?: Enumerable<LikeUpsertWithWhereUniqueWithoutCommentInput>
    createMany?: LikeCreateManyCommentInputEnvelope
    set?: Enumerable<LikeWhereUniqueInput>
    disconnect?: Enumerable<LikeWhereUniqueInput>
    delete?: Enumerable<LikeWhereUniqueInput>
    connect?: Enumerable<LikeWhereUniqueInput>
    update?: Enumerable<LikeUpdateWithWhereUniqueWithoutCommentInput>
    updateMany?: Enumerable<LikeUpdateManyWithWhereWithoutCommentInput>
    deleteMany?: Enumerable<LikeScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type ProfileCreateWithoutUserInput = {
    firstName: string
    lastName: string
    bio?: string | null
    phone?: string | null
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    firstName: string
    lastName: string
    bio?: string | null
    phone?: string | null
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type RecipeCreateWithoutUserInput = {
    title: string
    imageUrl?: string | null
    rating?: number | null
    courseType?: string | null
    prepTime?: number | null
    cookTime?: number | null
    servings?: number | null
    ingredients?: RecipeCreateingredientsInput | Enumerable<string>
    instructions?: RecipeCreateinstructionsInput | Enumerable<string>
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeCreateNestedManyWithoutRecipeInput
    comments?: CommentCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    imageUrl?: string | null
    rating?: number | null
    courseType?: string | null
    prepTime?: number | null
    cookTime?: number | null
    servings?: number | null
    ingredients?: RecipeCreateingredientsInput | Enumerable<string>
    instructions?: RecipeCreateinstructionsInput | Enumerable<string>
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutRecipeInput
    comments?: CommentUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutUserInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput>
  }

  export type RecipeCreateManyUserInputEnvelope = {
    data: Enumerable<RecipeCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type WebsiteCreateWithoutUserInput = {
    name: string
    url: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebsiteUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    url: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebsiteCreateOrConnectWithoutUserInput = {
    where: WebsiteWhereUniqueInput
    create: XOR<WebsiteCreateWithoutUserInput, WebsiteUncheckedCreateWithoutUserInput>
  }

  export type WebsiteCreateManyUserInputEnvelope = {
    data: Enumerable<WebsiteCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutUserInput = {
    recipe: RecipeCreateNestedOneWithoutLikesInput
    createdAt?: Date | string
    updatedAt?: Date | string
    Comment?: CommentCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutUserInput = {
    id?: number
    recipeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    commentId?: number | null
  }

  export type LikeCreateOrConnectWithoutUserInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeCreateManyUserInputEnvelope = {
    data: Enumerable<LikeCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recipe: RecipeCreateNestedOneWithoutCommentsInput
    likes?: LikeCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: number
    recipeId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: Enumerable<CommentCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeUpsertWithWhereUniqueWithoutUserInput = {
    where: RecipeWhereUniqueInput
    update: XOR<RecipeUpdateWithoutUserInput, RecipeUncheckedUpdateWithoutUserInput>
    create: XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput>
  }

  export type RecipeUpdateWithWhereUniqueWithoutUserInput = {
    where: RecipeWhereUniqueInput
    data: XOR<RecipeUpdateWithoutUserInput, RecipeUncheckedUpdateWithoutUserInput>
  }

  export type RecipeUpdateManyWithWhereWithoutUserInput = {
    where: RecipeScalarWhereInput
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyWithoutRecipeInput>
  }

  export type RecipeScalarWhereInput = {
    AND?: Enumerable<RecipeScalarWhereInput>
    OR?: Enumerable<RecipeScalarWhereInput>
    NOT?: Enumerable<RecipeScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    imageUrl?: StringNullableFilter | string | null
    rating?: IntNullableFilter | number | null
    courseType?: StringNullableFilter | string | null
    prepTime?: IntNullableFilter | number | null
    cookTime?: IntNullableFilter | number | null
    servings?: IntNullableFilter | number | null
    ingredients?: StringNullableListFilter
    instructions?: StringNullableListFilter
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    userId?: IntFilter | number
  }

  export type WebsiteUpsertWithWhereUniqueWithoutUserInput = {
    where: WebsiteWhereUniqueInput
    update: XOR<WebsiteUpdateWithoutUserInput, WebsiteUncheckedUpdateWithoutUserInput>
    create: XOR<WebsiteCreateWithoutUserInput, WebsiteUncheckedCreateWithoutUserInput>
  }

  export type WebsiteUpdateWithWhereUniqueWithoutUserInput = {
    where: WebsiteWhereUniqueInput
    data: XOR<WebsiteUpdateWithoutUserInput, WebsiteUncheckedUpdateWithoutUserInput>
  }

  export type WebsiteUpdateManyWithWhereWithoutUserInput = {
    where: WebsiteScalarWhereInput
    data: XOR<WebsiteUpdateManyMutationInput, WebsiteUncheckedUpdateManyWithoutWebsiteInput>
  }

  export type WebsiteScalarWhereInput = {
    AND?: Enumerable<WebsiteScalarWhereInput>
    OR?: Enumerable<WebsiteScalarWhereInput>
    NOT?: Enumerable<WebsiteScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    url?: StringFilter | string
    imageUrl?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    userId?: IntFilter | number
  }

  export type LikeUpsertWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
  }

  export type LikeUpdateManyWithWhereWithoutUserInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutLikesInput>
  }

  export type LikeScalarWhereInput = {
    AND?: Enumerable<LikeScalarWhereInput>
    OR?: Enumerable<LikeScalarWhereInput>
    NOT?: Enumerable<LikeScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    recipeId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    commentId?: IntNullableFilter | number | null
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentsInput>
  }

  export type CommentScalarWhereInput = {
    AND?: Enumerable<CommentScalarWhereInput>
    OR?: Enumerable<CommentScalarWhereInput>
    NOT?: Enumerable<CommentScalarWhereInput>
    id?: IntFilter | number
    recipeId?: IntFilter | number
    userId?: IntFilter | number
    content?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutProfileInput = {
    email: string
    password: string
    role?: Role
    recipe?: RecipeCreateNestedManyWithoutUserInput
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Website?: WebsiteCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    email: string
    password: string
    role?: Role
    recipe?: RecipeUncheckedCreateNestedManyWithoutUserInput
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Website?: WebsiteUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    recipe?: RecipeUpdateManyWithoutUserInput
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Website?: WebsiteUpdateManyWithoutUserInput
    likes?: LikeUpdateManyWithoutUserInput
    comments?: CommentUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    recipe?: RecipeUncheckedUpdateManyWithoutUserInput
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Website?: WebsiteUncheckedUpdateManyWithoutUserInput
    likes?: LikeUncheckedUpdateManyWithoutUserInput
    comments?: CommentUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateWithoutRecipeInput = {
    email: string
    password: string
    role?: Role
    profile?: ProfileCreateNestedOneWithoutUserInput
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Website?: WebsiteCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecipeInput = {
    id?: number
    email: string
    password: string
    role?: Role
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Website?: WebsiteUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecipeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecipeInput, UserUncheckedCreateWithoutRecipeInput>
  }

  export type LikeCreateWithoutRecipeInput = {
    user: UserCreateNestedOneWithoutLikesInput
    createdAt?: Date | string
    updatedAt?: Date | string
    Comment?: CommentCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutRecipeInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    commentId?: number | null
  }

  export type LikeCreateOrConnectWithoutRecipeInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutRecipeInput, LikeUncheckedCreateWithoutRecipeInput>
  }

  export type LikeCreateManyRecipeInputEnvelope = {
    data: Enumerable<LikeCreateManyRecipeInput>
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutRecipeInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    likes?: LikeCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutRecipeInput = {
    id?: number
    userId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutRecipeInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRecipeInput, CommentUncheckedCreateWithoutRecipeInput>
  }

  export type CommentCreateManyRecipeInputEnvelope = {
    data: Enumerable<CommentCreateManyRecipeInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRecipeInput = {
    update: XOR<UserUpdateWithoutRecipeInput, UserUncheckedUpdateWithoutRecipeInput>
    create: XOR<UserCreateWithoutRecipeInput, UserUncheckedCreateWithoutRecipeInput>
  }

  export type UserUpdateWithoutRecipeInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    profile?: ProfileUpdateOneWithoutUserInput
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Website?: WebsiteUpdateManyWithoutUserInput
    likes?: LikeUpdateManyWithoutUserInput
    comments?: CommentUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    profile?: ProfileUncheckedUpdateOneWithoutUserInput
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Website?: WebsiteUncheckedUpdateManyWithoutUserInput
    likes?: LikeUncheckedUpdateManyWithoutUserInput
    comments?: CommentUncheckedUpdateManyWithoutUserInput
  }

  export type LikeUpsertWithWhereUniqueWithoutRecipeInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutRecipeInput, LikeUncheckedUpdateWithoutRecipeInput>
    create: XOR<LikeCreateWithoutRecipeInput, LikeUncheckedCreateWithoutRecipeInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutRecipeInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutRecipeInput, LikeUncheckedUpdateWithoutRecipeInput>
  }

  export type LikeUpdateManyWithWhereWithoutRecipeInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutLikesInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutRecipeInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutRecipeInput, CommentUncheckedUpdateWithoutRecipeInput>
    create: XOR<CommentCreateWithoutRecipeInput, CommentUncheckedCreateWithoutRecipeInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutRecipeInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutRecipeInput, CommentUncheckedUpdateWithoutRecipeInput>
  }

  export type CommentUpdateManyWithWhereWithoutRecipeInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentsInput>
  }

  export type UserCreateWithoutWebsiteInput = {
    email: string
    password: string
    role?: Role
    profile?: ProfileCreateNestedOneWithoutUserInput
    recipe?: RecipeCreateNestedManyWithoutUserInput
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWebsiteInput = {
    id?: number
    email: string
    password: string
    role?: Role
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    recipe?: RecipeUncheckedCreateNestedManyWithoutUserInput
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWebsiteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWebsiteInput, UserUncheckedCreateWithoutWebsiteInput>
  }

  export type UserUpsertWithoutWebsiteInput = {
    update: XOR<UserUpdateWithoutWebsiteInput, UserUncheckedUpdateWithoutWebsiteInput>
    create: XOR<UserCreateWithoutWebsiteInput, UserUncheckedCreateWithoutWebsiteInput>
  }

  export type UserUpdateWithoutWebsiteInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    profile?: ProfileUpdateOneWithoutUserInput
    recipe?: RecipeUpdateManyWithoutUserInput
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUpdateManyWithoutUserInput
    comments?: CommentUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutWebsiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    profile?: ProfileUncheckedUpdateOneWithoutUserInput
    recipe?: RecipeUncheckedUpdateManyWithoutUserInput
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutUserInput
    comments?: CommentUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateWithoutLikesInput = {
    email: string
    password: string
    role?: Role
    profile?: ProfileCreateNestedOneWithoutUserInput
    recipe?: RecipeCreateNestedManyWithoutUserInput
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Website?: WebsiteCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    id?: number
    email: string
    password: string
    role?: Role
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    recipe?: RecipeUncheckedCreateNestedManyWithoutUserInput
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Website?: WebsiteUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type RecipeCreateWithoutLikesInput = {
    title: string
    imageUrl?: string | null
    rating?: number | null
    courseType?: string | null
    prepTime?: number | null
    cookTime?: number | null
    servings?: number | null
    ingredients?: RecipeCreateingredientsInput | Enumerable<string>
    instructions?: RecipeCreateinstructionsInput | Enumerable<string>
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRecipeInput
    comments?: CommentCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutLikesInput = {
    id?: number
    title: string
    imageUrl?: string | null
    rating?: number | null
    courseType?: string | null
    prepTime?: number | null
    cookTime?: number | null
    servings?: number | null
    ingredients?: RecipeCreateingredientsInput | Enumerable<string>
    instructions?: RecipeCreateinstructionsInput | Enumerable<string>
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    comments?: CommentUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutLikesInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutLikesInput, RecipeUncheckedCreateWithoutLikesInput>
  }

  export type CommentCreateWithoutLikesInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recipe: RecipeCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutLikesInput = {
    id?: number
    recipeId: number
    userId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutLikesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutLikesInput, CommentUncheckedCreateWithoutLikesInput>
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    profile?: ProfileUpdateOneWithoutUserInput
    recipe?: RecipeUpdateManyWithoutUserInput
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Website?: WebsiteUpdateManyWithoutUserInput
    comments?: CommentUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    profile?: ProfileUncheckedUpdateOneWithoutUserInput
    recipe?: RecipeUncheckedUpdateManyWithoutUserInput
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Website?: WebsiteUncheckedUpdateManyWithoutUserInput
    comments?: CommentUncheckedUpdateManyWithoutUserInput
  }

  export type RecipeUpsertWithoutLikesInput = {
    update: XOR<RecipeUpdateWithoutLikesInput, RecipeUncheckedUpdateWithoutLikesInput>
    create: XOR<RecipeCreateWithoutLikesInput, RecipeUncheckedCreateWithoutLikesInput>
  }

  export type RecipeUpdateWithoutLikesInput = {
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    courseType?: NullableStringFieldUpdateOperationsInput | string | null
    prepTime?: NullableIntFieldUpdateOperationsInput | number | null
    cookTime?: NullableIntFieldUpdateOperationsInput | number | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    ingredients?: RecipeUpdateingredientsInput | Enumerable<string>
    instructions?: RecipeUpdateinstructionsInput | Enumerable<string>
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecipeInput
    comments?: CommentUpdateManyWithoutRecipeInput
  }

  export type RecipeUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    courseType?: NullableStringFieldUpdateOperationsInput | string | null
    prepTime?: NullableIntFieldUpdateOperationsInput | number | null
    cookTime?: NullableIntFieldUpdateOperationsInput | number | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    ingredients?: RecipeUpdateingredientsInput | Enumerable<string>
    instructions?: RecipeUpdateinstructionsInput | Enumerable<string>
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    comments?: CommentUncheckedUpdateManyWithoutRecipeInput
  }

  export type CommentUpsertWithoutLikesInput = {
    update: XOR<CommentUpdateWithoutLikesInput, CommentUncheckedUpdateWithoutLikesInput>
    create: XOR<CommentCreateWithoutLikesInput, CommentUncheckedCreateWithoutLikesInput>
  }

  export type CommentUpdateWithoutLikesInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipe?: RecipeUpdateOneRequiredWithoutCommentsInput
    user?: UserUpdateOneRequiredWithoutCommentsInput
  }

  export type CommentUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeCreateWithoutCommentsInput = {
    title: string
    imageUrl?: string | null
    rating?: number | null
    courseType?: string | null
    prepTime?: number | null
    cookTime?: number | null
    servings?: number | null
    ingredients?: RecipeCreateingredientsInput | Enumerable<string>
    instructions?: RecipeCreateinstructionsInput | Enumerable<string>
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRecipeInput
    likes?: LikeCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutCommentsInput = {
    id?: number
    title: string
    imageUrl?: string | null
    rating?: number | null
    courseType?: string | null
    prepTime?: number | null
    cookTime?: number | null
    servings?: number | null
    ingredients?: RecipeCreateingredientsInput | Enumerable<string>
    instructions?: RecipeCreateinstructionsInput | Enumerable<string>
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    likes?: LikeUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutCommentsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutCommentsInput, RecipeUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    email: string
    password: string
    role?: Role
    profile?: ProfileCreateNestedOneWithoutUserInput
    recipe?: RecipeCreateNestedManyWithoutUserInput
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Website?: WebsiteCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: number
    email: string
    password: string
    role?: Role
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    recipe?: RecipeUncheckedCreateNestedManyWithoutUserInput
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Website?: WebsiteUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type LikeCreateWithoutCommentInput = {
    user: UserCreateNestedOneWithoutLikesInput
    recipe: RecipeCreateNestedOneWithoutLikesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeUncheckedCreateWithoutCommentInput = {
    id?: number
    userId: number
    recipeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutCommentInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutCommentInput, LikeUncheckedCreateWithoutCommentInput>
  }

  export type LikeCreateManyCommentInputEnvelope = {
    data: Enumerable<LikeCreateManyCommentInput>
    skipDuplicates?: boolean
  }

  export type RecipeUpsertWithoutCommentsInput = {
    update: XOR<RecipeUpdateWithoutCommentsInput, RecipeUncheckedUpdateWithoutCommentsInput>
    create: XOR<RecipeCreateWithoutCommentsInput, RecipeUncheckedCreateWithoutCommentsInput>
  }

  export type RecipeUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    courseType?: NullableStringFieldUpdateOperationsInput | string | null
    prepTime?: NullableIntFieldUpdateOperationsInput | number | null
    cookTime?: NullableIntFieldUpdateOperationsInput | number | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    ingredients?: RecipeUpdateingredientsInput | Enumerable<string>
    instructions?: RecipeUpdateinstructionsInput | Enumerable<string>
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecipeInput
    likes?: LikeUpdateManyWithoutRecipeInput
  }

  export type RecipeUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    courseType?: NullableStringFieldUpdateOperationsInput | string | null
    prepTime?: NullableIntFieldUpdateOperationsInput | number | null
    cookTime?: NullableIntFieldUpdateOperationsInput | number | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    ingredients?: RecipeUpdateingredientsInput | Enumerable<string>
    instructions?: RecipeUpdateinstructionsInput | Enumerable<string>
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    likes?: LikeUncheckedUpdateManyWithoutRecipeInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    profile?: ProfileUpdateOneWithoutUserInput
    recipe?: RecipeUpdateManyWithoutUserInput
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Website?: WebsiteUpdateManyWithoutUserInput
    likes?: LikeUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    profile?: ProfileUncheckedUpdateOneWithoutUserInput
    recipe?: RecipeUncheckedUpdateManyWithoutUserInput
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Website?: WebsiteUncheckedUpdateManyWithoutUserInput
    likes?: LikeUncheckedUpdateManyWithoutUserInput
  }

  export type LikeUpsertWithWhereUniqueWithoutCommentInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutCommentInput, LikeUncheckedUpdateWithoutCommentInput>
    create: XOR<LikeCreateWithoutCommentInput, LikeUncheckedCreateWithoutCommentInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutCommentInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutCommentInput, LikeUncheckedUpdateWithoutCommentInput>
  }

  export type LikeUpdateManyWithWhereWithoutCommentInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutLikesInput>
  }

  export type RecipeCreateManyUserInput = {
    id?: number
    title: string
    imageUrl?: string | null
    rating?: number | null
    courseType?: string | null
    prepTime?: number | null
    cookTime?: number | null
    servings?: number | null
    ingredients?: RecipeCreateingredientsInput | Enumerable<string>
    instructions?: RecipeCreateinstructionsInput | Enumerable<string>
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebsiteCreateManyUserInput = {
    id?: number
    name: string
    url: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeCreateManyUserInput = {
    id?: number
    recipeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    commentId?: number | null
  }

  export type CommentCreateManyUserInput = {
    id?: number
    recipeId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecipeUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    courseType?: NullableStringFieldUpdateOperationsInput | string | null
    prepTime?: NullableIntFieldUpdateOperationsInput | number | null
    cookTime?: NullableIntFieldUpdateOperationsInput | number | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    ingredients?: RecipeUpdateingredientsInput | Enumerable<string>
    instructions?: RecipeUpdateinstructionsInput | Enumerable<string>
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUpdateManyWithoutRecipeInput
    comments?: CommentUpdateManyWithoutRecipeInput
  }

  export type RecipeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    courseType?: NullableStringFieldUpdateOperationsInput | string | null
    prepTime?: NullableIntFieldUpdateOperationsInput | number | null
    cookTime?: NullableIntFieldUpdateOperationsInput | number | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    ingredients?: RecipeUpdateingredientsInput | Enumerable<string>
    instructions?: RecipeUpdateinstructionsInput | Enumerable<string>
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutRecipeInput
    comments?: CommentUncheckedUpdateManyWithoutRecipeInput
  }

  export type RecipeUncheckedUpdateManyWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    courseType?: NullableStringFieldUpdateOperationsInput | string | null
    prepTime?: NullableIntFieldUpdateOperationsInput | number | null
    cookTime?: NullableIntFieldUpdateOperationsInput | number | null
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    ingredients?: RecipeUpdateingredientsInput | Enumerable<string>
    instructions?: RecipeUpdateinstructionsInput | Enumerable<string>
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteUncheckedUpdateManyWithoutWebsiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUpdateWithoutUserInput = {
    recipe?: RecipeUpdateOneRequiredWithoutLikesInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Comment?: CommentUpdateOneWithoutLikesInput
  }

  export type LikeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LikeUncheckedUpdateManyWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipe?: RecipeUpdateOneRequiredWithoutCommentsInput
    likes?: LikeUpdateManyWithoutCommentInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutCommentInput
  }

  export type CommentUncheckedUpdateManyWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateManyRecipeInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    commentId?: number | null
  }

  export type CommentCreateManyRecipeInput = {
    id?: number
    userId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeUpdateWithoutRecipeInput = {
    user?: UserUpdateOneRequiredWithoutLikesInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Comment?: CommentUpdateOneWithoutLikesInput
  }

  export type LikeUncheckedUpdateWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentUpdateWithoutRecipeInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsInput
    likes?: LikeUpdateManyWithoutCommentInput
  }

  export type CommentUncheckedUpdateWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutCommentInput
  }

  export type LikeCreateManyCommentInput = {
    id?: number
    userId: number
    recipeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeUpdateWithoutCommentInput = {
    user?: UserUpdateOneRequiredWithoutLikesInput
    recipe?: RecipeUpdateOneRequiredWithoutLikesInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}