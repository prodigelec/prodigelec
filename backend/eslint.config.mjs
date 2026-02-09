import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

const config = [
  {
    ignores: [
      "node_modules/**",
      "public/**",
      "eslint.config.mjs",
      "prisma/migrations/**",
      "prisma/generated/**",
    ],
  },
  js.configs.recommended,
  eslintConfigPrettier,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "preserve-caught-error": "off",
    },
  },
];

export default config;
