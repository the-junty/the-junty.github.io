const fs = require('fs'),
  browserify = require('browserify'),
  gulp = require('gulp'),
  exec = require('child_process').exec;

gulp.task('build', () => {
  browserify('./public/js/main.js')
    .transform('babelify', {presets: ['es2015']})
    .bundle()
    .pipe(fs.createWriteStream('./public/dist/js/main.js'));
});

gulp.task('junty', () => {
  exec('php vendor/junty/junty/bin/junty run', (err, out, outerr) => {
    if (err) console.error(err);
    if (out) console.log(out);
  });
});

gulp.task('default', ['build', 'junty']);