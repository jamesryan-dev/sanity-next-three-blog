module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: "@typescript-eslint/parser", // Specifies ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for use parseing of modern EMCA
    sourceType: "module", // Allows the use of imports
    ecmaFeatures: {
      jsx: true, // Allow for pasrsing of jsx
    },
  },
  plugins: ["@typescript-eslint", "react", "prettier"],
  extends: [
    "plugin:@next/next/recommended",
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".ts", ".tsx", ".jsx"] },
    ],
    "import/extensions": 0,
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": ["error", { custom: "ignore" }],
    "prettier/prettier": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        paths: ["~"],
      },
    },
  },
};
