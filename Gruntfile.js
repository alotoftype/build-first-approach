const sass = require('node-sass');


module.exports = function(grunt) {
  //Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/index.js',
        dest: 'build/js/main.min.js'
      }
    },
    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      build: {
        files: [{
          src: 'src/sass/main.scss',
          dest: 'build/css/main.css'
        }]
      }
    }
  });

  // Load the plugin that provides the "uglify" task
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass')


  // Default task(s)
  grunt.registerTask('default', ['uglify']);


};