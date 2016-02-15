var gulp = require('gulp');
var browserify = require('browserify');
var source  = require('vinyl-source-stream');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');

gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
})

gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js']})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('jshint', function() {
  return gulp.src(['js/*.js', 'spec/specs.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
