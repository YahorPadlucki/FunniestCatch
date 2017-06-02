var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');

var  jsDest = 'dist';
var jsFiles = [
    'js/events/*.js',
    'js/models/*.js',
    'js/elements/fishes/behaviour/DefaultMove.js',
    'js/elements/popups/Popup.js',
    'js/**/!(Game)*.js',
    'js/Game.js'
];

gulp.task('concatScripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('main.js'))
        .pipe(uglify())
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest(jsDest));
});

gulp.task('default', ['concatScripts']);
