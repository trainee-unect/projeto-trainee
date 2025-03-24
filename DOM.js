const linkInicio = document.getElementById("navInicio")
const linkSobre = document.getElementById("navSobre")
const linkServicos = document.getElementById("navServicos")
const linkContato = document.getElementById("navContato")
const linkLogoInicio = document.getElementById("logo")
const linkLogoRodape = document.getElementById("imagem-blocos")

linkLogoInicio.addEventListener("click", (e) => {
    const elemento = document.getElementById("inicio")
    e.preventDefault();
    window.scrollTo({top: elemento.offsetTop, behavior: "smooth"})
})

linkLogoRodape.addEventListener("click", (e) => {
    const elemento = document.getElementById("inicio")
    e.preventDefault();
    window.scrollTo({top: elemento.offsetTop, behavior: "smooth"})
})

linkInicio.addEventListener("click", (e) => {
    const elemento = document.getElementById("inicio")
    e.preventDefault();
    window.scrollTo({top: elemento.offsetTop, behavior: "smooth"})
})

linkServicos.addEventListener("click", (e) => {
    const elemento = document.getElementById("servicos1")
    e.preventDefault();
    window.scrollTo({ top: elemento.offsetTop, behavior: "smooth" })
})

linkSobre.addEventListener("click", (e) => {
    const elemento = document.getElementById("quem-somos")
    e.preventDefault();
    window.scrollTo({ top: elemento.offsetTop, behavior: "smooth" })
})

linkContato.addEventListener("click", (e) => {
    const elemento = document.getElementById("contato")
    e.preventDefault();
    window.scrollTo({top: elemento.offsetTop, behavior: "smooth"})
}) 


let paginaAtual = 1;

        function trocarPagina(acao) {
            const comentarios = document.querySelectorAll('.comentario');
            const totalPaginas = 3;
            const prev = document.getElementById("prev")
            const next = document.getElementById("next")

            if (acao === 'prev' && paginaAtual > 1) paginaAtual-- ;
            if (acao === 'next' && paginaAtual < totalPaginas) paginaAtual++;
            

            document.getElementById('paginaAtual').textContent = paginaAtual;

            comentarios.forEach(comentario => {
                comentario.style.display = comentario.getAttribute('data-pagina') == paginaAtual ? 'block' : 'none';
                
            });

            document.getElementById('prev').disabled = paginaAtual === 1;
            document.getElementById('next').disabled = paginaAtual === totalPaginas;
            
            prev.style.visibility = paginaAtual === 1 ? 'hidden' : 'visible';
            next.style.visibility = paginaAtual === totalPaginas ? 'hidden' : 'visible';
        }
        
        trocarPagina();