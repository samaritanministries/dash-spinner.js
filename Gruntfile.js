'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    //********************************
    //Tasks in alphabetical order
    //********************************

    clean: ['.tmp', 'dist'],

    coffee: {
      src: {
        files: [{
          expand: true,
          cwd: 'scripts',
          src: '**/**/*.coffee',
          dest: '.tmp/scripts',
          ext: '.js'
        }]
      },

      spec: {
        files: [{
          expand: true,
          cwd: 'spec',
          src: '**/**/*.coffee',
          dest: '.tmp/spec',
          ext: '.js'
        }]
      }
    },

    copy: {
      namespace: {
        src: 'scripts/namespace.js',
        dest: '.tmp/scripts/namespace.js'
      },
      css: {
        src: '.tmp/styles/dash-spinner.css',
        dest: 'dist/dash-spinner.css'
      },
      scss: {
        src: 'styles/dash-spinner.scss',
        dest: 'dist/dash-spinner.scss'
      }
    },

    jst: {
      compile: {
        options: {
          namespace: 'DashSpinnerJST'
        },
        files: {
          ".tmp/scripts/dash-spinner/templates.js": ["scripts/dash-spinner/**/*.ejs"]
        }
      }
    },

    sass: {
      dist: {
        files: {
          ".tmp/styles/dash-spinner.css": "styles/dash-spinner.scss"
        }
      }
    },

    uglify: {
      options: {
        mangle: true
      },

      dist: {
        files: {
          'dist/dash-spinner.min.js': [
            '.tmp/scripts/namespace.js',
            '.tmp/scripts/dash-spinner/templates.js',
            '.tmp/scripts/dash-spinner/view.js'
          ]
        }
      }
    },
  });

  //********************************
  //Builds
  //********************************

  grunt.registerTask('build:dist', [
                     'clean',
                     'jst',
                     'coffee:src',
                     'sass',
                     'copy:namespace',
                     'copy:css',
                     'copy:scss',
                     'uglify'

  ]);

  grunt.registerTask('build:spec', [
                     'clean',
                     'jst',
                     'coffee:src',
                     'coffee:spec'
  ]);

  grunt.registerTask('default', ['build:dist']);
};
