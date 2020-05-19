Auther: Harry Zhengyu Gu
Front-end and node.js origin-code is from: "www.itheima.com"
upgrade to the latest version by: Harry Zhengyu Gu

WHAT GULP can do:

compressing HTML,CSS,JS

syntax transfer:  es6-> es / less-> css

public file for store things, improve efficiency

listen file change: then refresh the webpage



method:

gulp.src(): get raw file

gulp.dest(): out put compressing file

gulp.task(): start gulp task

gulp watch(): listen the file change


package.json 

The file is for node_modules, since node_modules could meet 2 problems:
1: files and folders will be a large amount in node_modules, copy will spend lot's of time
2: modules's dependency is complecate, and modules will have lot's of different version, which could make runtime error 

- package can solve these problems
run this command will deal with these problem by package.json
$ npm int -y

# gulp_Project

Prepare:
before you run Project, you will need to install GULP,
under the gulp_Project directory 


$ npm install gulp



since gulp-cli can be used to all of gulp project, install it on global


$ npm install gulp-cli -g

Run:
$ gulp gulpfile.js
