const hamburguesa = document.querySelector("#abrir");
const nav = document.querySelector("#nav");
const cerrar = document.querySelector("#cerrar")

hamburguesa.addEventListener("click", () => {
    nav.style.right = 0;
})

cerrar.addEventListener("click", () => {
    nav.style.right = "-400px" ;
})


