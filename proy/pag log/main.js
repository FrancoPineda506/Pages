const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const btnPopup2 = document.querySelector(".btnLogin-popup2");
const iconClose = document.querySelector(".icon-close");
const nav = document.querySelector("#nav")
const abrir = document.querySelector(".menu-nav")
const cerrar = document.querySelector("#cerrar")

registerLink.addEventListener("click" , () => {
    wrapper.classList.add("active"); 
})

loginLink.addEventListener("click" , () => {
    wrapper.classList.remove("active"); 
})

btnPopup.addEventListener("click" , () => {
    wrapper.classList.add("active-popup"); 
})

btnPopup2.addEventListener("click" , () => {
    wrapper.classList.add("active-popup"); 
})

iconClose.addEventListener("click" , () => {
    wrapper.classList.remove("active-popup"); 
})

abrir.addEventListener("click" , () => {
    nav.classList.add("visible")
})

cerrar.addEventListener("click" , () => {
    nav.classList.remove("visible")
})
