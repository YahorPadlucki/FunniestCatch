var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');
var gutil = require('gulp-util')

var jsFiles = 'js/**/*.js',
    jsDest = 'dist';

gulp.task('concatScripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(minify())
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest(jsDest));
});

gulp.task('default', ['concatScripts']);
