var gulp       = require('gulp'),
    browserify = require('gulp-browserify');

gulp.task('build-js', function () {

    gulp.src(['app/main.js'])
        .pipe(browserify({
            debug: true,
            transform: [ 'reactify' ]
        }))
        .pipe(gulp.dest('./public/'));

});

gulp.task('watch-js', function() {
    gulp.watch(['./app/**/*.js', './app/*.js'], ['build-js']);
});

gulp.task('default', ['build-js','watch-js']);