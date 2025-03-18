const linkServicos = document.getElementById("linkServicos")
const linkSobre = document.getElementById("linkSobre")
const linkInicio = document.getElementById("linkInicio")

linkServicos.addEventListener("click", (e) => {
    const elemento = document.getElementById("container4")
    e.preventDefault();
    window.scrollTo({top: elemento.offsetTop, behavior: "smooth"})
})

linkSobre.addEventListener("click", (e) => {
    const elemento = document.getElementById("container3")
    e.preventDefault();
    window.scrollTo({top: elemento.offsetTop, behavior: "smooth"})
})

linkInicio.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: "smooth"})
})