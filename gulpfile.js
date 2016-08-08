var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var inject = require('gulp-inject');
var wiredep = require('wiredep');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('inject',
  ['gulp-inject',
  'wiredep-inject']
);

gulp.task('gulp-inject', function () {
  var target = gulp.src('./app/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./app/scripts/*.js', './app/styles/*.css'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./app'));
});

gulp.task('wiredep-inject', function () {
  wiredep({ src: 'app/index.html' });
});

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });

  gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'app'}, reload);
});
