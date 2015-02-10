"use strict";

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserify = require('gulp-browserify'),
    stringify = require('stringify'),
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat');

gulp.task('browserify', function () {
    gulp.src(['./app/js/app.js'])
        .pipe(browserify({
            transform: stringify({
                extensions: ['.html'], minify: true
            }),
            debug: true
        }))
        .pipe(gulp.dest('./dist/js/'))
        .pipe(livereload());
});

gulp.task('concat', function () {
    gulp.src([
        './bower_components/angular/angular.js',
        './bower_components/angular-resource/angular-resource.js',
        './bower_components/angular-bootstrap/ui-bootstrap.js',
        './bower_components/angular-bootstrap/ui-bootstrap-tpls.js'
    ])
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('./dist/libs/'));
});

gulp.task('sass', function () {
    gulp.src('./app/style/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy', function () {
    gulp.src(['./bower_components/bootstrap/dist/**/*']).pipe(gulp.dest('./dist/libs/bootstrap/'));
    gulp.src(['./app/index.html']).pipe(gulp.dest('./dist/'));
    gulp.src(['./app/fonts/*']).pipe(gulp.dest('./dist/fonts/'));
});

gulp.task('default', ['concat', 'sass', 'copy', 'browserify'], function () {
    livereload.listen();
    gulp.watch(['app/**/*'], ['sass', 'copy', 'browserify']);
});