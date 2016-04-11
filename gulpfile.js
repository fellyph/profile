var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('assets/scss/**/**.scss')
  .pipe(sass())
  .pipe(gulp.dest('assets/css'))
  .pipe(browserSync.reload({
      stream: true
  }))
});

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: 'assets'
        },
    })
})

gulp.task('watch',['browserSync', 'sass'], function() {
    gulp.watch('assets/scss/**/*.scss',['sass']);
});