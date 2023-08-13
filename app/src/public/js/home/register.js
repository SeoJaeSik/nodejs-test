"use strict"

const id = document.querySelector("input#id");
const name = document.querySelector("#name");
const passwd = document.querySelector("input#pw");
const confirmPw = document.querySelector("input#confirm-pw");
const registerBtn = document.querySelector("#registerBtn");

registerBtn.addEventListener("click", register);

function register() {
    if (passwd.value != confirmPw.value) {
        return alert("비밀번호가 일치하지 않습니다.");
    }

    const req = {
        id : id.value,
        name : name.value,
        passwd : passwd.value,
    };

    fetch("/register", {
        method : "post",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req)
    })
      .then((res)=> res.json())
      .then((res)=>{
        if(res.success) {
            location.href = "/login";
        } else {
            alert(res.msg);
        }
      })
      .catch((err)=>{
        console.error(new Error("회원가입중 에러 발생"));
      })
}