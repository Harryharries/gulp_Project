// use 
const gulp = require('gulp');

// gulp.task(): start gulp task
// parameter
// 1.task name
// 2.callback 
gulp.task('first', (cb) => {
    console.log('first gulp executed');
    // 1.gulp.src(): get raw file
    gulp.src('./src/css/base.css')
        .pipe(gulp.dest('dist/css'));
    //callback function for return
    cb()
});