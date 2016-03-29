'use strict';
// get the dependencies
const gulp = require('gulp');
const childProcess = require('child_process');
const electron = require('electron-prebuilt');

// create the gulp task
gulp.task('run', function () {
    childProcess.spawn(electron, ['./app'], {stdio: 'inherit'});
});