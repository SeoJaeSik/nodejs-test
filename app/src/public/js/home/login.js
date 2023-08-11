"use strict"

const id = document.querySelector("input#id");
const passwd = document.querySelector("input#pw");
const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id : id.value,
        pw : passwd.value
    };

    fetch("/login", {
        method : "post",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req)
    })
      .then((res)=> res.json())
      .then((res)=>{
        if(res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
      })
      .catch((err)=>{
        console.error(new Error("로그인중 에러 발생"));
      })
}