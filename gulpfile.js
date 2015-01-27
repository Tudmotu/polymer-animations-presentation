var gulp         = require('gulp'),
    connect      = require('gulp-connect');

gulp.task('connect', function () {
    connect.server({
        //root: 'index.html',
        port: 8001
    });
});
