module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'demos',
        'root',
        'astro-contact-form',
        'astro-js-favicon',
        'astro-js-sass-styling',
        'astro-js-tutorial',
        'astro-self-hosted-fonts',
        'astro-scroll-to-anchor',
        'getting-started-astro',
        'temporal-api-duration',
        'temporal-api-time-zones',
      ],
    ],
    'scope-empty': [2, 'never'],
  },
};
