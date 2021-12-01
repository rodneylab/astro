module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", ["demos", "root"]],
    "scope-empty": [2, "never"],
  },
};
