module.exports = {
  "globals": {
    "d3": true,
    "L": true
  },
  "rules": {
    "no-console": [1],
    "quotes": [2, "single"],
    "linebreak-style": [2, "unix"],
    "semi": [2, "always"],
    "comma-dangle": [1, "never"],
    "no-trailing-spaces": [2, {"skipBlankLines": true}]
  },
  "env": {
    "node": true,
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended"
}
