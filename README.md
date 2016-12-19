# Dash Spinner
[![Build Status](https://travis-ci.org/samaritanministries/dash-spinner.js.svg?branch=master)](https://travis-ci.org/samaritanministries/dash-spinner.js)
[![Dash-Spinner Version](https://img.shields.io/badge/Version-1.0.0-green.svg)]()

This is a JavaScript library that provides a CSS based spinner. It also provides default configurations for the Dash platform.

Dash Spinner has been converted to use ES6 and Webpack, however it is still being shipped with a bundled Javascript file for use with pre-ES6 applications. Instructions for both are included.

## Installation

Dash-Spinner.js is delivered as a [bower](bower.io) component.

1. Install bower
  ```bash
  npm install -g bower
  ```

  >Note: Bower requires node, npm and git.

2. Create a `bower.json` file
  ```bash
  bower init
  ```

3. Install the dash-spinner.js bower component and save it to your `bower.json` file
  ```bash
  bower install dash-spinner.js --save
  ```

## Usage

### ES5

1. Add `<script src="path/to/dash_spinner/dist/dash-spinner.js"></script>` to your index.
2. `new DashSpinner.Spinner(options).spin()`

### ES6

```
import DashSpinner from "dash_spinner/spinner.js"
new DashSpinner(options).spin()
```

### Browser Support

| Chrome | Edge | Firefox | Opera | IE | Safari |
|--------|------|---------|-------|----|--------|
| Latest | Latest | Latest | Latest | IE 11+ | Safari 8+ |

## Project Setup

### Dependencies

1. Install node.js and NPM

  ```bash
  install node/npm
  ```
2. Install NPM components

  ```bash
  npm install
  ```
3. Install bower components

  ```bash
  bower install
  ```

### Running the Tests

For a single run of the tests:
`npm test`

To run the tests with a watcher:
`npm run karma`

### Running the Demo

1. `npm run webpack`
2. `open app/index.html`

## Releasing a New Version

1. Commit your changes
2. Run `./bower_deploy.sh`

## License

[MIT License](LICENSE.md)
