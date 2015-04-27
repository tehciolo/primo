var gulp = require('gulp'),
  sass = require('gulp-sass'),
  plumber = require('gulp-plumber'),
  uglify = require('gulp-uglify'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload;


// Scripts Task
// Uglifies JavaScript
gulp.task('scripts', function() {
  gulp.src('assets/js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
})

// Styles Task
// Compiles Sass
gulp.task('styles', function () {
  gulp.src('assets/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('build/css'))
    .pipe(reload({stream: true}));
});

// Watch Task
gulp.task('watch', ['scripts', 'styles'], function() {
  browserSync({
    server: "./build"
  });
  gulp.watch('assets/scss/**/*.scss', ['styles']);
  gulp.watch('assets/js/*.js', ['scripts']);
  gulp.watch('build/*.html').on('change', reload);
});


gulp.task('default', ['watch']);