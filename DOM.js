const linkInicio = document.getElementById("navInicio")
const linkSobre = document.getElementById("navSobre")
const linkServicos = document.getElementById("navServicos")
const linkContato = document.getElementById("navContato")

linkInicio.addEventListener("click", (e) => {
    const elemento = document.getElementById("inicio")
    e.preventDefault();
    window.scrollTo({top: elemento.offsetTop, behavior: "smooth"})
})

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

linkContato.addEventListener("click", (e) => {
    const elemento = document.getElementById("contato")
    e.preventDefault();
    window.scrollTo({top: elemento.offsetTop, behavior: "smooth"})
}) 