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
    .src('*.html')
    .pipe(htmlmin())
    .on('error', errorLog)
    .pipe(gulp.dest('dist'));
}

function styles() {
    return gulp
    .src('sass/*.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoprefixer())
        .on('error', errorLog)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream()); //browser reload css file
}

function scripts() {
    return gulp
    .src('js/*.js')
    .pipe(sourcemaps.init())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(terser())
        .on('error', errorLog)
    .pipe(sourcemaps.write())
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
    gulp.watch('*.html', html).on('change', browserSync.reload);
    gulp.watch('sass/*.scss', styles);
    gulp.watch('images').on('change', browserSync.reload);
    gulp.watch('js/*.js', scripts).on('change', browserSync.reload);
};

function images() {
    return gulp
    .src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
}

gulp.task('html', html);
gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);
gulp.task('images', images);

gulp.task('default', gulp.series('html', 'styles', 'scripts', 'watch'));




