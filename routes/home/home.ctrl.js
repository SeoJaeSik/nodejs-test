// ES6 사용
"use strict";

// 컨트롤러 분리
function login(req, res){
    res.render("home/login");
}

module.exports = {
    login
};