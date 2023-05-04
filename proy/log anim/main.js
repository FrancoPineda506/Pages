const registro = document.querySelector(".register-box");
const login = document.querySelector(".login-box");
const btn_registro = document.querySelector(".register-link");
const btn_login = document.querySelector(".login-link");

btn_registro.addEventListener("click" , () => {
    registro.classList.add("active"); 
    login.classList.remove("active");
})

btn_login.addEventListener("click" , () => {
    login.classList.add("active"); 
    registro.classList.remove("active");
})
