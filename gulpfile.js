var concat = require('gulp-concat');
var gulp = require('gulp');

gulp.task('scripts', function() {
    gulp.src(['./js/Game.js', './js/utils/Utils.js'])
        .pipe(concat('all.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('./dist/'))
});