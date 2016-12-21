'use strict'

import gulp from 'gulp';
import watch from 'gulp-watch';
import babel from 'gulp-babel';

gulp.task('transform', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('routes'));
});

gulp.task('watch', () => {
    return gulp.src('src/**/*.js')
        .pipe(watch('src/**/*.js', {
            verbose: true
        }))
        .pipe(babel())
        .pipe(gulp.dest('routes'));
});

gulp.task('default', () => {
    gulp.start('transform');
});