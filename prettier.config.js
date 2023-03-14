const php = require('@prettier/plugin-php');

module.exports = {
  printWidth: 100,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  vueIndentScriptAndStyle: true,
  plugins: [php],
  overrides: [
    {
      files: '*.php',
      options: {
        phpVersion: '8.1',
        singleQuote: true,
        tabWidth: 4,
      },
    },
  ],
};
