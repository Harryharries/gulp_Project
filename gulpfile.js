// use 
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');
const less = require('gulp-less');
const csso = require('gulp-csso');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
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

// html task
// 1.html compress
// 2. mutli used html code extraction
gulp.task('htmlmin', (cb) => {
    gulp.src('./src/*.html')
        //mutli used html code extraction
        .pipe(fileinclude())
        // compress
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
    cb()
});

// css任务
// 1.less语法转换
// 2.css代码压缩
gulp.task('cssmin', (cb) => {
    // 选择css目录下的所有less文件以及css文件
    gulp.src(['./src/css/*.less', './src/css/*.css'])
        // 将less语法转换为css语法
        .pipe(less())
        // 将css代码进行压缩
        .pipe(csso())
        // 将处理的结果进行输出
        .pipe(gulp.dest('dist/css'))
    cb()
});

// js任务
// 1.es6代码转换
// 2.代码压缩
gulp.task('jsmin', (cb) => {
    gulp.src('./src/js/*.js')
        .pipe(babel({
            // 它可以判断当前代码的运行环境 将代码转换为当前运行环境所支持的代码
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
    cb()
});


// 复制文件夹
gulp.task('copy', (cb) => {

    gulp.src('./src/images/*')
        .pipe(gulp.dest('dist/images'));

    gulp.src('./src/lib/*')
        .pipe(gulp.dest('dist/lib'))
    cb();
});

// 构建任务
gulp.task('default', gulp.series(['htmlmin', 'cssmin', 'jsmin', 'copy']));