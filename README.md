# Secure - ESLint Shareable Config  
[![circleci](https://img.shields.io/circleci/project/github/jkohrman/eslint-config-secure.svg)](https://circleci.com/gh/jkohrman/eslint-config-secure)
[![codecov](https://img.shields.io/codecov/c/github/jkohrman/eslint-config-secure.svg)](https://codecov.io/gh/jkohrman/eslint-config-secure)
[![npm](https://img.shields.io/npm/v/eslint-config-secure.svg)](https://npmjs.org/package/eslint-config-secure)
[![downloads](https://img.shields.io/npm/dm/eslint-config-secure.svg)](https://npmjs.org/package/eslint-config-secure)
  
_An ESLint [Shareable Config](https://eslint.org/docs/developer-guide/shareable-configs) with generic static security analysis plugins._  
  
  
## What is this?  
This module checks for basic security issues in your Javascript.  It includes plugins recommended by 18F, [listed here](https://pages.18f.gov/before-you-ship/security/static-analysis/#javascript).  
  
  
### Usage  
  
Shareable configs are designed to work with the ESLint `extends` feature.  
  
Learn more about [Shareable Configs](https://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.  
  
1. Add the package to your `package.json` file:  
  ```bash
  $ npm install --save-dev eslint-config-secure
  ```
2. Add this line to your `.eslintrc` file:  
  ```
  {
    "extends": "eslint-config-secure"
  }
  ```  
  
You can override settings from this config by adding them directly to your `.eslintrc` file.  
  
  
## License  
MIT.  Copyright (c) [Jeff Kohrman](https://jkohrman.github.io)  
  
