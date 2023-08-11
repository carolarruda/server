# boolean-prettier-config

Source: https://dev.to/matthias/sharing-prettier-configuration-files-gba

## Usage

This package helps us configure ESlint and Prettier to work together nicely. When the steps below are completed, then our node project will have ESLint and Prettier interact correctly. This configuration ensures that a VSCode with ESLint & Prettier plugins (without custom settings) will work.

### Step 1: Install eslint packages and boolean prettier config

`npm install --save-dev eslint-plugin-prettier eslint-config-prettier prettier @boolean-uk/boolean-prettier-config`

### Step 2: Update `package.json` to use the prettier config

If you want to use your shared Prettier configuration in other projects, you need to reference it in your project's `package.json` manifest by adding the `prettier` property:

```json
{
  "name": "my-cool-library",
  // ...
  "prettier": "@boolean-uk/boolean-prettier-config"
  // ...
}
```

### Step 3: Ensure ESLint knows about Prettier

ESLint configuration: ensure we extend prettier, use the prettier plugin and have the prettier error rule setup.

```js
module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: ['standard', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error']
  }
  parserOptions: {
    ecmaVersion: 12
  },
}

```

### Step 4: Close and Restart VSCode

After cloning and running `npm install` we must restart VSCode in order for the ESLint and Prettier plugins to pick up the updated configuration.
