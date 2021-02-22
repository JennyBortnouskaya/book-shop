const { resolve } = require('path')

module.exports = {
  configBaseDir: resolve(__dirname, 'node_modules'),
  plugins: [],
  extends: [
    'stylelint-config-standard',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'no-empty-source': null
    //check and add avaialble rules here: https://github.com/kristerkari/stylelint-scss

  },
}
