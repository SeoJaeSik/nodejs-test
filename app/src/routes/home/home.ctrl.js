// ES6 사용
"use strict";

const UserStorage = require("../../model/UserStorage");

const output = {
    // 컨트롤러 분리    
    login : (req, res) => {
        res.render("home/login");
    },
    home : (req, res) => {
        res.render("home/home");
    }
    // 아래와 동일
    // function login (req, res) {
    //     res.render("home/login");
    // }
}

const process = {
    login : (req, res) => {
        const id = req.body.id;
        const pw = req.body.pw;

        const users = UserStorage.getUsers("id", "passwd");
        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id); 
            if (users.passwd[idx] == pw) {
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패하였습니다";
        return res.json(response);
    }
}


module.exports = {
    output,
    process
};

