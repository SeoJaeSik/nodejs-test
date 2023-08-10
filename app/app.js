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
const bodyParser = require("body-parser");
const app = express()

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 라우팅
const home = require("./src/routes/home");
app.use(express.static(`${__dirname}/src/public`));

app.use(bodyParser.json());
// JSON 데이터 파싱
app.use(bodyParser.urlencoded({extended: true}));
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결

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