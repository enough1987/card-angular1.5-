

var gulp = require('gulp');
var server = require('gulp-server-livereload');
 
gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: false
    }));
})

gulp.task('default', ['webserver']);