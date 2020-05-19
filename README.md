Auther: Harry Zhengyu Gu
Front-end and node.js origin-code is from: "www.itheima.com"
upgrade to the latest version by: Harry Zhengyu Gu

# gulp_Project

Prepare:
before you run Project, you will need to install GULP,
under the gulp_Project directory 


$ npm int -y



since gulp-cli can be used to all of gulp project, install it on global


$ npm install gulp-cli -g

Run:


$ gulp "taskname"




--------------------------------------------------
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



The file is for node_modules since node_modules could meet 2 problems:

1: files and folders will be a large amount in node_modules, a copy will spend lot's of time

2: modules' dependency is complicated, and modules will have lot's of a different version, which could make runtime error



- package.json can solve these problems

run this command will deal with these problems by package.json



$ npm int -y



------------------------



--save-dev / 

some times we only need a package in development rather than the client env

 --save-dev will let  the package.json will understand it is only for development env

put it into

"devDependencies": {

"gulp": "^3.9.1"

},



the production module is in:

"dependencies": {

"formidable": "^1.2.1",

"mime": "^2.3.1"

},



$ npm install ----production

it will only get  production modules



--------------------------------

package-lock.json

-this file record all the dependencies

- this file provide packages' version and download address

packages' versions can prevent the wrong version.

dependencies can make package downloads be faster.






