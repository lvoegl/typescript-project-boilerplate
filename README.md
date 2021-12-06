# TypeScript Boilerplate
## [ES2020](https://262.ecma-international.org/11.0/) with [ESLint](https://github.com/eslint/eslint), [Mocha](https://github.com/mochajs/mocha)/[Chai](https://github.com/chaijs/chai) Testing and [TypeDoc](https://github.com/TypeStrong/typedoc) Documentation

### This project uses the [yarn](https://yarnpkg.com/) package manager.

## Getting Started:
**run `yarn install` to install all neccessary dev-packages**

- **`yarn start`** starts the project with `ts-node`
- **`yarn lint`** lints the project with ESLint and shows any problems
- **`yarn dev`** executes `yarn lint` and `yarn start` and will restart on any changes in `./src`
- **`yarn compile`** executes `yarn lint` and compiles the project to the `./build` folder
- **`yarn prod`** runs the compiled project with `node` (Node must be installed)
- **`yarn test`** runs all tests in `./test`
- **`yarn test:coverage`** generates a test coverage report under `./coverage`
- **`yarn lint:fix`** automatically fixes ESLint problems
- **`yarn docs`** generates docs with TypeDoc under `./docs`

## Linting:
Linting is done with **[ESLint](https://github.com/eslint/eslint)** based on a TypeScript version of [Airbnb's ESLint config](https://github.com/iamturns/eslint-config-airbnb-typescript) alongside 
[Prettier](https://github.com/prettier/eslint-plugin-prettier) integrated in the ESLint rules.
[Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) allow to run a Lint automatically before a commit is completed.

<br>

*NOTE*: You will need [Node.js](https://nodejs.org/) version (`node -v`) >= 14.0 to run the build files. You can change `"target": "ES2020"` in your `tsconfig.json` to support older node versions.
