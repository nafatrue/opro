'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  return gulp.src('./styles/src/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles/dist'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./styles/src/main.scss', ['sass']);
});

gulp.task('minify-css', function() {
  return gulp.src('./styles/dist/main.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(rename({
       suffix: ".min",
    }))
    .pipe(gulp.dest('./styles/dist/'))
});

gulp.task('min-css', function () {
    gulp.watch(['./styles/dist/main.css'], ['minify-css']);
});

gulp.task('default', ['sass', 'sass:watch']);
