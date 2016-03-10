var gulp       = require('gulp');
//var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
//var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');

/*gulp.task('build-js', function () {

    gulp.src(['views/app/main.js'])
        .pipe(browserify({
            debug: true,
            transform: [ 'reactify' ]
        }))
        .pipe(gulp.dest('./public/'));

});*/


//gulp.task('watch-js', function() {
//    gulp.watch(['./views/app/**/*.js', './views/app/*.js'], ['build-js']);
//});

gulp.task('build-js1', function () {
    browserify({
        entries: './views/app/main.js',
        extensions: ['.js'],
        debug: true
    })
        .transform("babelify",
        {
          "presets": ["react", 'es2015']
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(rename('appMain.js'))
        .pipe(gulp.dest('./public/'));
    // .pipe(buffer())
    // .pipe(uglify())
    // .pipe(rename('adapteach.min.js'))
    // .pipe(gulp.dest('./public/javascripts/'));
});

gulp.task('watch-js1', function() {
    gulp.watch(['./views/app/**/*.js', './views/app/*.js'], ['build-js1']);
});

gulp.task('default', ['build-js1','watch-js1']);