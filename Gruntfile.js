/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    autoprefixer: {
      options: {
        browsers: ['last 8 versions']
      },
      production: {
        files: {
          'build/build.css' : 'build/build.css'
        }
      }
    },
    sass: {
      production: {
        options: {
          style: 'compressed',
          require: 'susy'
        },
        files: {
          'build/style.css': 'sass/style.scss'
        }
      },
      development: {
        options: {
          style: 'expanded',
          require: 'susy'
        },
        files: {
          'build/build.css' : 'sass/style.scss'
        }
      }
    },
    watch: {
      css: {
        files: 'sass/*.scss',
        tasks: ['sass:development', 'autoprefixer:production']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['sass:production']);
  grunt.registerTask('dev', ['sass:development','autoprefixer:production','watch']);
};
