const linkServicos = document.getElementById("navServicos")
const linkSobre = document.getElementById("navSobre")
const linkInicio = document.getElementById("navInicio")
const linkContato = document.getElementById("navContato")

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

linkInicio.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" })
})

let paginaAtual = 1;

        function trocarPagina(acao) {
            const comentarios = document.querySelectorAll('.comentario');
            const totalPaginas = 3;

            if (acao === 'prev' && paginaAtual > 1) paginaAtual--;
            if (acao === 'next' && paginaAtual < totalPaginas) paginaAtual++;

            document.getElementById('paginaAtual').textContent = paginaAtual;

            // Exibe apenas os comentários da página atual
            comentarios.forEach(comentario => {
                comentario.style.display = comentario.getAttribute('data-pagina') == paginaAtual ? 'block' : 'none';
            });

            

            // Desativa os botões quando estiver no início ou fim da navegação
            document.getElementById('prev').disabled = paginaAtual === 1;
            document.getElementById('next').disabled = paginaAtual === totalPaginas;

            
        }

        // Inicializa a primeira página ao carregar
        trocarPagina();