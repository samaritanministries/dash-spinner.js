var webpack = require("webpack");
var path = require("path");

const PROJECT_ROOT = path.resolve(__dirname);

module.exports = {
  entry: {
    "dist/dash-spinner.js": "./scripts/dash_spinner/load.js",
    ".tmp/sample-app.js": "./scripts/sample_app/main.js"
  },
  output: {
    filename: "[name]"
  },
  module: {
    loaders: [{
      include: [
        path.join(PROJECT_ROOT, "scripts"),
        path.join(PROJECT_ROOT, "spec")
      ],
      loader: "babel-loader",
      test: /\.js$/
    }]
  }, plugins: [
    new webpack.ProvidePlugin({
      $: "jquery"
    }), new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
    )
  ], resolve: {
    alias: {
      "dash_spinner": path.join(PROJECT_ROOT, "scripts", "dash_spinner"),
      "sample_app": path.join(PROJECT_ROOT, "scripts", "sample_app")
    }, modulesDirectories: [
      path.join(PROJECT_ROOT, "node_modules"),
      path.join(PROJECT_ROOT, "bower_components")
    ]
  }
}
