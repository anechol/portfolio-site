'use strict';

const { src, dest, watch, series } = require('gulp');
const del = require('del');
const cache = require('gulp-cache');
const gulpif = require('gulp-if');
const useref = require('gulp-useref');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const eslint = require('gulp-eslint');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const browsersync = require('browser-sync').create();

sass.compiler = require('node-sass');

// Clean - Removes old dist folder before build
function clean() {
  return del(['app/dist/**', '!app/dist/']);
}

// Styles - Converts Sass files to CSS and Autoprefix
function styles() {
  return src('app/sass/**/main.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(dest('app/css/'))
    .pipe(browsersync.reload({stream: true}))
}

// ESLint - Run JS files through ESLint and log errors to console
// Use before building
function lint() {
  return src('app/js/**/*.js')
    .pipe(eslint({configFile: '.eslintrc'}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(dest('js/'))
}

// Image Minify - Compresses images and caches them to the 'dist' folder
// Includes JPGs, PNGs, SVGs, and GIFs
function minifyImg() {
  return src('app/img/*')
    .pipe(cache(imagemin()))
    .pipe(dest('app/dist/img'));
}

// Build - Minifies CSS and JS files and adds to 'dist' folder with index.html
function build() {
  return src('app/*.html')
    .pipe(useref())
    .pipe(gulpif('app/*.js', terser()))
    .pipe(gulpif('app/*.css', cleanCSS({compatibility:'ie8'})))
    .pipe(dest('app/dist'));
}

// Watch Files - Watches all files for changes
function watchFiles() {
  browsersync.init({ server: './app'});

  watch('app/sass/**/*.sass', styles);
  watch('app/js/**/*.js').on('change', browsersync.reload);
  watch('app/*.html').on('change', browsersync.reload);
}

// Gulp Tasks
exports.default = watchFiles;
exports.build = series(clean, minifyImg, build);
exports.clean = clean;
exports.lint = lint;
