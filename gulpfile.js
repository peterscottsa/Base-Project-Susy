var gulp = require('gulp');
var plumber = require('gulp-plumber');
var coffee = require('gulp-coffee');
var compass = require('gulp-compass');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var gulpJade = require('gulp-jade');
var uglify = require('gulp-uglify');
//var wiredep = require('wiredep').stream;


gulp.task('coffee', function() {
  gulp.src('./coffee/**/*.coffee')
    .pipe(plumber())
    .pipe(coffee({bare: true}))
    .pipe(uglify())
    .pipe(gulp.dest('./app/assets/js/'))
});


gulp.task('jade', function() {
  gulp.src('./templates/**/*.jade')
    .pipe(plumber())
    .pipe(gulpJade({
      pretty: true
    }))
    .pipe(gulp.dest('./views/'));
});

gulp.task('compass', function() {
  gulp.src('./sass/*.scss')
    .pipe(plumber())
    .pipe(compass({
      font: './app/assets/fonts/',
      css: './app/assets/stylesheets/',
      sass: './sass/',
      image: './app/assets/images/'
    }))
    .pipe(autoprefixer({
      browsers: ['last 8 versions']
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./app/assets/stylesheets/'));
});

gulp.task('watch', function () {
  gulp.watch('./sass/**/**/*.scss', ['compass']);
  gulp.watch('./coffee/**/*.coffee', ['coffee']);
  gulp.watch('./templates/**/*.jade', ['jade']);
});

gulp.task('default', ['coffee', 'compass', 'jade', 'watch']);