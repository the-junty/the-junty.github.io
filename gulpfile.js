const fs = require('fs'),
  browserify = require('browserify'),
  gulp = require('gulp');

gulp.task('build', () => {
  browserify('./public/js/main.js')
    .transform('babelify', {presets: ['es2015']})
    .bundle()
    .pipe(fs.createWriteStream('./public/dist/js/main.js'));
});

/*gulp.task('watch', ['build'], () => {
  gulp.watch('*.js', ['build']);
});*/

gulp.task('default', ['build']);