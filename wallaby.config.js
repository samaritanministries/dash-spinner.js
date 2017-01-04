var webpack = require("webpack");
var wallabyWebpack = require('wallaby-webpack');
var webpackConfig = require('./webpack.config');
var path = require("path");

const PROJECT_ROOT = path.resolve(__dirname);

module.exports = function (wallaby) {
  webpackPostprocessor = wallabyWebpack({
    plugins: webpackConfig.plugins,
    resolve: {
      alias: {
        "dash_spinner": path.join(wallaby.projectCacheDir, "scripts", "dash_spinner"),
        "sample_app": path.join(wallaby.projectCacheDir, "scripts", "sample_app")
      },
      modulesDirectories: [
        path.join(PROJECT_ROOT, "node_modules"),
        path.join(PROJECT_ROOT, "bower_components")
      ]
    }
  })

  return {
    compilers: {
      "scripts/**/*.js": wallaby.compilers.babel(),
      "spec/**/*.js": wallaby.compilers.babel()
    },

    files: [
      {pattern: "bower_components/jquery/dist/jquery.js", load: true},
      {pattern: "bower_components/jasmine-jquery/lib/jasmine-jquery.js", load: true},
      {pattern: "scripts/**/*.js", load: false}
    ],

    postprocessor: webpackPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    },

    tests: [
      {pattern: "spec/**/*_spec.js", load: false}
    ]
  };

};
