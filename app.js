// function keycode(){
//     let key = event.key;
//     let code = event.code;
//     let which = event.which;
//     console.log(key);
//     console.log(code);
//     console.log(which);
//     }

const body = document.querySelector("body");
const key = document.getElementById("key");
const code = document.getElementById("code");
const which = document.getElementById("which");

body.addEventListener("keydown", event =>{
    key.textContent = event.key;
});

body.addEventListener("keydown", event => {
    code.textContent = event.code;
});

body.addEventListener("keydown", event => {
    which.textContent = event.which;
});