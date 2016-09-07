var gulp    = require('gulp'), 
    browserSync = require('browser-sync').create(),
    sass    = require ('gulp-sass');

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "app",
        port: 1500
    });

    gulp.watch("app/scss/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});


gulp.task("sass", function(){
  return gulp.src('app/scss/main.scss')
  .pipe(sass({ outputStyle: 'nested'}))
  .pipe(gulp.dest('app/scss/'));
});

gulp.task('default', ['serve']);