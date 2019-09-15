var gulp = require('gulp'),
  gulpPlumber = require('gulp-plumber'),
  gulpImagemin = require('gulp-imagemin'),
  gulpSass = require('gulp-sass'),
  gulpAutoprefixer = require('gulp-autoprefixer'),
  gulpUglify = require('gulp-uglify'),
  browserSync = require('browser-sync').create();


gulp.task('default', ['other', 'watch']);

gulp.task('other', function() {
  console.log('call other function, and start watching.');
});

gulp.task('watch', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "./"
    }
  })
  gulp.watch('sass/*.scss', ['styles', 'browserSync']);
  gulp.watch('javascript/original/*.js', ['scripts', 'browserSync']);
  gulp.watch('index.html', ['browserSync']);
});

gulp.task('browserSync', function() {
  browserSync.reload();
})

gulp.task('styles', function() {
  gulp.src('sass/*.scss')
  .pipe(gulpPlumber())
  .pipe(gulpAutoprefixer())
  .pipe(gulpSass({
    outputStyle: 'compressed'
  }))
  .pipe(gulp.dest('css'))
});

gulp.task('scripts', function() {
  gulp.src('javascript/original/*.js')
  .pipe(gulpPlumber())
  .pipe(gulpUglify())
  .pipe(gulp.dest('javascript/minify'));
});

gulp.task('MinifyImages', function() {
  gulp.src('images/original/**')
  .pipe(gulpImagemin())
  .pipe(gulp.dest('images'))
});
