// ES6 사용
"use strict";

const User = require("../../model/User");

const output = {
    // 컨트롤러 분리    
    login : (req, res) => {
        res.render("home/login");
    },
    home : (req, res) => {
        res.render("home/home");
    },
    register : (req, res) => {
        res.render("home/register");
    }
    // 아래와 동일
    // function login (req, res) {
    //     res.render("home/login");
    // }
}

const process = {
    login : async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    register : async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    }
}


module.exports = {
    output,
    process
};

