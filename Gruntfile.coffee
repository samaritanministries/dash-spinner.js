module.exports = (grunt) ->
  require('load-grunt-tasks') grunt
  grunt.initConfig
    clean:
      tmp: ['.tmp/*']
      dist: ['dist/*']

    coffee:
      src:
        files: [{
          expand: true
          cwd: 'scripts'
          src: '**/**/*.coffee'
          dest: '.tmp/scripts'
          ext: '.js'
        }]
      spec:
        files: [{
          expand: true
          cwd: 'spec'
          src: '**/**/*.coffee'
          dest: '.tmp/spec'
          ext: '.js'
        }]

    copy:
      namespace:
        src: 'scripts/namespace.js'
        dest: '.tmp/scripts/namespace.js'

    jst:
      compile:
        options:
          namespace: 'DashSpinnerJST'
      files:
        '.tmp/scripts/dash-spinner/templates.js': ['scripts/dash-spinner/**/*.ejs']

    uglify:
      options:
        mangle: true
      dist:
        files:
          'dist/dash-spinner.min.js': [
            '.tmp/scripts/namespace.js'
            '.tmp/scripts/dash-spinner/**/*.js'
          ]

  grunt.registerTask 'build:dist', [
    'clean:tmp'
    'clean:dist'
    'jst'
    'coffee:src'
    'copy:namespace'
    'uglify'
  ]

  grunt.registerTask 'build:spec', [
    'clean:tmp'
    'jst'
    'coffee:src'
    'coffee:spec'
  ]

  grunt.registerTask 'default', ['build:dist']
