const botaoMenu = document.getElementById("menu")
const listaDrop = document.getElementById("drop")

listaDrop.style.display = "none"

botaoMenu.addEventListener("click", e =>{
    if(listaDrop.style.display == "grid"){
        listaDrop.style.display = "none"
    } else {
        listaDrop.style.display = "grid"
    }
})