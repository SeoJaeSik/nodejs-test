// ES6 사용
"use strict";
const output = {
    // 컨트롤러 분리    
    login : (req, res) => {
        res.render("home/login");
    }
    // 아래와 동일
    // function login (req, res) {
    //     res.render("home/login");
    // }
}

const process = {
    login : (req, res) => {
        console.log(req.body);
    }
}


module.exports = {
    output,
    process
};

