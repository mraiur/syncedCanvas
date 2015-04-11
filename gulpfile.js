var gulp = require('gulp'),
    sass = require('gulp-sass'),
    bowerFiles = require('main-bower-files');

gulp.task('bower', function(){
    return gulp.src(bowerFiles())
        .pipe( gulp.dest('public/bower/') );
});

gulp.task('clean', function(){
    //TODO make any cleaning of directories or assets
});

gulp.task('sass', function(){
    gulp.src('./resources/sass/*.scss')
        .pipe( sass() )
        .pipe( gulp.dest('./public/stylesheets/') );
});

gulp.task('default', [], function(){
    gulp.start('bower', 'sass');
});