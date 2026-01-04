import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
  // --------------------------------------------------
  // Base rules (apply everywhere)
  // --------------------------------------------------
  {
    ignores: ["node_modules", ".nuxt", ".output", "dist", "coverage"],

    rules: {
      // ----- General JS / TS -----
      "no-console":
        process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": "warn",
      "prefer-const": "error",
      "no-unused-vars": "off", // handled by TS

      // ----- TypeScript -----
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/consistent-type-imports": "off",

      // ----- Vue -----
      "vue/multi-word-component-names": "warn",
      "vue/no-mutating-props": "error",
      "vue/no-unused-components": "warn",
      "vue/require-default-prop": "off",

      // ----- Style -----
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],

      "vue/attributes-order": [
        "warn",
        {
          order: [
            "CONDITIONALS",
            "LIST_RENDERING",
            "UNIQUE",
            "GLOBAL",
            "OTHER_ATTR",
            "TWO_WAY_BINDING",
            "OTHER_DIRECTIVES",
            "EVENTS",
            "CONTENT",
          ],
          alphabetical: false,
        },
      ],
    },
  },

  // --------------------------------------------------
  // Nuxt pages (routing files → allow single word)
  // --------------------------------------------------
  {
    files: ["app/pages/**/*.vue"],
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },

  // --------------------------------------------------
  // (Optional) layouts also usually single-word
  // --------------------------------------------------
  {
    files: ["app/layouts/**/*.vue"],
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
]);
