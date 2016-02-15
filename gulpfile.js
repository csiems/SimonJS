var gulp = require('gulp');
var browserify = require('browserify');
var source  = require('vinyl-source-stream');
var jshint = require('gulp-jshint');

gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/simon-interface.js']})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('jshint', function() {
  return gulp.src(['js/*.js', 'spec/specs.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
