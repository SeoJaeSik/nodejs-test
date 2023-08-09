// console.log("hello");

// terminal - npm install figlet
// terminal - npm uninstall figlet

// var figlet = require("figlet");

// figlet("Seo Jae Sik", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });


const express = require('express')
const app = express()

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 라우팅
const home = require("./src/routes/home");
app.use("/", home); // use -> 미들웨어를 등록해주는 메소드
 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
// app.get('/user/:id', function (req, res) {
//     // const id = req.params;
//     // console.log(id);
//     const test = req.query;
//     console.log(test);

//     res.send("출력");
// })
// // app.get('/login', function (req, res) {
// //   res.sendFile(__dirname + '/index.html')
// // })
// app.get('/login', function (req, res) {
//   res.render("home/login")  ;
// })


// 서버 종료 ctrl + C

module.exports = app;