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
          'assets/stylesheets/style.css' : 'assets/stylesheets/style.css'
        }
      }
    },
    jade: {
      production: {
        options: {
          pretty: true
        },
        files: {
          'index.html' : 'index.jade'
        }
      }
    },
    compass: {
      options: {
        httpPath: '',
        sassDir: 'sass',
        cssDir: 'assets/stylesheets/',
        imagesDir: 'assets/images/',
        fontsDir: 'assets/fonts/',
        relativeAssets: true
      },
      production: {
        options: {
          outputStyle: 'compressed',
          require: 'susy'
        }
      },
      development: {
        options: {
          outputStyle: 'expanded',
          require: 'susy'
        }
      }
    },
    watch: {
      css: {
        files: ['sass/**/*.scss', 'public/**/*.scss'],
        tasks: ['compass:development', 'autoprefixer:production']
      },
      jade: {
        files: ['**/*.jade'],
        tasks: ['jade:production']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['compass:production']);
  grunt.registerTask('dev', ['jade:production', 'compass:development','autoprefixer:production','watch']);
};
