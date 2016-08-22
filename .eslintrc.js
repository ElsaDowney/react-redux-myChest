module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [
      "error",
      2,
      {"SwitchCase": 1}
    ],
    "complexity": [
      "error",
      3
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-console":0,
    "semi": [
      "error",
      "always"
    ],
    "max-statements": [
      "error",
      15
    ],
    "react/jsx-uses-vars": [2],
    "max-lines": [
      "error",
      {
        "max": 150,
        "skipComments": true
      }
    ]
  }
};
