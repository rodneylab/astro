module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [
      2,
      "always",
      [
        "demos",
        "root",
        "astro-self-hosted-fonts",
        "astro-scroll-to-anchor",
        "getting-started-astro",
      ],
    ],
    "scope-empty": [2, "never"],
  },
};
