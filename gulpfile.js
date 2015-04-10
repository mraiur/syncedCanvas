var gulp = require('gulp');
var bowerFiles = require('main-bower-files');

gulp.task('bower', function(){
    return gulp.src(bowerFiles())
        .pipe( gulp.dest('public/bower/') );
});

gulp.task('clean', function(){
    //TODO make any cleaning of directories or assets
});

gulp.task('default', ['clean'], function(){
    gulp.start('bower');
});