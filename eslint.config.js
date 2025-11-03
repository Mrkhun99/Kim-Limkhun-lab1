// ESLint v9 flat config (CommonJS to avoid ESM warning)
/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
      globals: {
        // Node globals
        module: "readonly",
        require: "readonly",
        __dirname: "readonly",
        process: "readonly",
        console: "readonly",
        // Mocha globals
        describe: "readonly",
        it: "readonly",
        before: "readonly",
        after: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {},
  },
];
