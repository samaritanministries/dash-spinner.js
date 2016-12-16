var webpack = require("webpack");
var path = require("path")

const PROJECT_ROOT = path.resolve(__dirname)

module.exports = {
  entry: {
    "dist/dash-spinner.js": [
      "./bower_components/jquery/dist/jquery.js",
      "./bower_components/underscore/underscore.js",
      "./bower_components/backbone/backbone.js",
      "./scripts/namespace.js",
      "./scripts/dash-spinner/configuration.js",
      "./scripts/dash-spinner/spinner.js"
    ],
    ".tmp/sample_app.js": [
      "./scripts/sample_app/spinner_controls_view.js",
      "./scripts/sample_app/main.js"
    ]
  },
  output: {
    filename: "[name]"
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
    new webpack.ProvidePlugin({
      $: "jquery"
    }),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
    )
  ],
  resolve: {
    alias: {
      "dash_spinner": path.join(PROJECT_ROOT, "scripts", "dash-spinner")
    },
    modulesDirectories: [
      path.join(PROJECT_ROOT, "node_modules"),
      path.join(PROJECT_ROOT, "bower_components")
    ]
  }
}
