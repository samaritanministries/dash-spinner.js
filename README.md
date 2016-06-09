# Dash Spinner
[![Build Status](https://travis-ci.org/samaritanministries/dash-spinner.js.svg?branch=master)](https://travis-ci.org/samaritanministries/dash-spinner.js)
[![Dash-Spinner Version](https://img.shields.io/badge/Version-0.2.2-green.svg)]()

This is a JavaScript library that provides a thin wrapper around the Spin.js library. It also provides default configuration for the Dash platform.

## Browser Support

| Chrome | Edge | Firefox | Opera | IE | Safari |
|--------|------|---------|-------|----|--------|
| Latest | Latest | Latest | Latest | IE 11+ | Safari 8+ |

## Getting Started

### Install the Component

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

#### Including SASS in your project

Include component styles in your main application SASS file.

```scss
@import "bower_components/dash-spinner.js/styles/dash-spinner";
```
>Note: Depending on your bower configuration, this file path may be different

Once installed, configure the spinner color by setting the SASS variable `$spinner-color` to a valid CSS color. Be sure to configure the spinner color before the import of the dash-spinner.js styles.

Example configuration:

```scss
$spinner-color: #2DB16C;
@import "bower_components/dash-spinner.js/styles/dash-spinner";
```

#### Including JavaScript in your project 

Please refer to our [documentation site](http://developers.samaritanministries.org/developers/dash-spinner.js/) for details on component configuration.


## Contribution

Feel free to add to this component and make it better. We're always looking for improvements.

### Setup

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
4. Install global NPM components
  
  ```bash
  npm install testem -g
  ```

### Tests

Make sure that you have testem installed globally. When you're ready to run tests, open up your project and run:

```bash
testem
```

MIT License
