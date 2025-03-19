const linkServicos = document.getElementById("navServicos")
const linkSobre = document.getElementById("navSobre")
const linkInicio = document.getElementById("navInicio")
const linkContato = document.getElementById("navContato")

linkServicos.addEventListener("click", (e) => {
    const elemento = document.getElementById("servicos1")
    e.preventDefault();
    window.scrollTo({top: elemento.offsetTop, behavior: "smooth"})
})

linkSobre.addEventListener("click", (e) => {
    const elemento = document.getElementById("quem-somos")
    e.preventDefault();
    window.scrollTo({top: elemento.offsetTop, behavior: "smooth"})
})

linkInicio.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: "smooth"})
}) 