var gulp = require('gulp'),
    mocha = require('gulp-mocha');

gulp.task('default', ['test'], function () {});

gulp.task('test', function () {
    return gulp.src(['**/**_test.js', '!node_modules/**/*'], {read:false})
               .pipe(mocha({reporter: 'spec'}));
});
