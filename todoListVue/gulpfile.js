'use strict';

const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const autoprefixer = require('gulp-autoprefixer');
const terser = require('gulp-terser'); //minify js
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const eslint = require('gulp-eslint');

function errorLog(error) {
  console.error.bind(error);
  this.emit('end');
}

function html() {
  return gulp
    .src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .on('error', errorLog)
    .pipe(gulp.dest('dist'));
}

function styles() {
  return gulp
    .src('src/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer())
    .on('error', errorLog)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream()); //browser reload css file
}

function scripts() {
  return gulp
    .src('src/js/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write())
    .on('error', errorLog)
    .pipe(gulp.dest('dist/js'));
};

function watch() {
  browserSync.init({
    server: {
      baseDir: 'dist',
      index: 'index.html'
    },
    browser: 'google chrome'
  });
  gulp.watch('src/*.html', html).on('change', browserSync.reload);
  gulp.watch('src/sass/*.scss', styles);
  gulp.watch('src/images').on('change', browserSync.reload);
  gulp.watch('src/js/*.js', scripts).on('change', browserSync.reload);
};

function images() {
  return gulp
    .src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
}

gulp.task('html', html);
gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);
gulp.task('images', images);

gulp.task('default', gulp.series('html', 'styles', 'scripts', 'watch'));




