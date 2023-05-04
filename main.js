const menu = document.querySelector(".menu");
const menuProy = document.querySelector(".menu-proy");
const btnMenu = document.querySelector("#abrir");
const btnProyectos = document.querySelector("#Proyectos");
const btnCerrar = document.querySelector("#cerrar");
const btnVolver = document.querySelector("#back");

btnMenu.addEventListener("click" , () => {
    menu.classList.add("active");
})

btnProyectos.addEventListener("click" , () => {
    menuProy.classList.add("active");
})

btnCerrar.addEventListener("click" , () => {
    menu.classList.remove("active");
    menuProy.classList.remove("active");
})

btnVolver.addEventListener("click" , () => {
    menuProy.classList.remove("active");
})

