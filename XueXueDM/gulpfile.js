const gulp = require('gulp'),
  gulpPlumber = require('gulp-plumber'),
  gulpImagemin = require('gulp-imagemin'),
  gulpSass = require('gulp-sass'),
  gulpAutoprefixer = require('gulp-autoprefixer'),
  gulpUglify = require('gulp-uglify'),
  browserSync = require('browser-sync').create();


function scripts() {
  return gulp.src('javascript/original/*.js')
  .pipe(gulpPlumber())
  .pipe(gulpUglify())
  .pipe(gulp.dest('javascript/minify'));
}

function styles() {
  return gulp.src('sass/*.scss')
  .pipe(gulpPlumber())
  .pipe(gulpAutoprefixer())
  .pipe(gulpSass({
    outputStyle: 'compressed'
  }))
  .pipe(gulp.dest('css'))
  .pipe(browserSync.stream());
}

function minifyImages() {
  return  gulp.src('images/original/**')
      .pipe(gulpImagemin())
      .pipe(gulp.dest('images'));
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('minifyImages', minifyImages);

gulp.task('watch', () => {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    browser: 'google chrome'
  });
  gulp.watch('sass/*.scss', styles);
  gulp.watch('javascript/original/*.js', scripts).on('change', browserSync.reload);
  gulp.watch('index.html').on('change', browserSync.reload);
});


gulp.task('default', gulp.series('styles', 'scripts', 'watch'));

