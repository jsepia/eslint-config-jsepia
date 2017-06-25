# eslint-config-jsepia

[![Build Status](https://travis-ci.org/jsepia/eslint-config-jsepia.svg?branch=master)](https://travis-ci.org/jsepia/eslint-config-jsepia) [![NPM version](https://img.shields.io/npm/v/eslint-config-jsepia.svg)](https://npmjs.org/package/eslint-config-jsepia)

My personal eslint config.

## Usage

```sh
yarn add --dev eslint-config-jsepia
```

```sh
npm --save-dev install eslint-config-jsepia
```

`**.eslintrc**`

```json
{
  "extends": "jsepia"
}
```

## Rules

* ES6
* node, mocha, browser
* no semicolons
* backticks for string interpolation, single quotes for literals
* `console.log` is allowed
