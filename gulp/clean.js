'use strict';

var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function() {
  return del([
    'public/build',
    // global.paths.sass.dist,
    // global.paths.js.dist,
    // global.paths.html.index,
    // global.paths.html.page,
  ]);
});
