var webpack = require("webpack");
var path = require("path")

const PROJECT_ROOT = path.resolve(__dirname)

module.exports = {
  entry: [
    "./bower_components/underscore/underscore.js",
    "./scripts/dash-spinner/bar.js",
    "./scripts/dash-spinner/foo.js",
    "./scripts/dash-spinner/foo.coffee"
  ],
  output: {
    path: "./dist",
    filename: "new-spinner.js"
  },
  module: {
    loaders:[
      {
        include: [
          path.join(PROJECT_ROOT, "scripts"),
          path.join(PROJECT_ROOT, "spec")
        ],
        loader: "babel-loader",
        test: /\.js$/
      }, {
        include: [
          path.join(PROJECT_ROOT, "scripts"),
          path.join(PROJECT_ROOT, "spec")
        ],
        loader: "babel!coffee",
        test: /\.coffee$/
      }
    ]
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
    )
  ],
  resolve: {
    alias: {
      "dash_spinner": path.join(PROJECT_ROOT, "scripts", "dash-spinner")
    }
  }
}
