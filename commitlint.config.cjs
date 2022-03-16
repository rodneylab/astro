module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [
      2,
      "always",
      ["demos", "root", "getting-started-astro", "astro-scroll-to-anchor"],
    ],
    "scope-empty": [2, "never"],
  },
};
