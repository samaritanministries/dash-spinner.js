# Dash Spinner

This is a JavaScript library that provides a thin wrapper around the Spin.js library. It also provides default configuration for the Dash platform.

# Setup

* install node/npm
* npm install
* bower install
* npm install testem -g

# Tests

Run `testem`

# Usage

The minified JavaScript file can be found in `dist/`. There is also a sample application that allows you to start and stop a spinner.

### Example Spinner

```CoffeeScript
spinner = new DashSpinner.Spinner
  target: $("#element_to_contain_spinner")
spinner.spin()
spinner.stop()
```

### Example Dash Spinner

```CoffeeScript
spinner = new DashSpinner.Spinner
  target: $("#element_to_contain_spinner")
  spinnerConfiguration: DashSpinner.Configuration.large
spinner.spin()
spinner.stop()
```

MIT License
