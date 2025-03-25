const linkInicio = document.getElementById("navInicio")
const linkSobre = document.getElementById("navSobre")
const linkServicos = document.getElementById("navServicos")
const linkContato = document.getElementById("navContato")
const linkLogoInicio = document.getElementById("logo")
const linkLogoRodape = document.getElementById("imagem-blocos")

linkLogoInicio.addEventListener("click", (e) => {
    const elemento = document.getElementById("inicio")
    e.preventDefault();
    window.scrollTo({ top: elemento.offsetTop, behavior: "smooth" })
})

linkLogoRodape.addEventListener("click", (e) => {
    const elemento = document.getElementById("inicio")
    e.preventDefault();
    window.scrollTo({ top: elemento.offsetTop, behavior: "smooth" })
})

linkInicio.addEventListener("click", (e) => {
    const elemento = document.getElementById("inicio")
    e.preventDefault();
    window.scrollTo({ top: elemento.offsetTop, behavior: "smooth" })
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
    window.scrollTo({ top: elemento.offsetTop, behavior: "smooth" })
})


let paginaAtual = 1;

function trocarPagina(acao) {
    const comentarios = document.querySelectorAll('.comentario');
    const totalPaginas = 3;
    const prev = document.getElementById("prev")
    const next = document.getElementById("next")

    if (acao === 'prev' && paginaAtual > 1) paginaAtual--;
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

// Variáveis do carrossel
let paginaAtualCarrossel = 1;
const totalPaginasCarrossel = 3;

function trocarPaginaCarrossel(direcao) {
    const banners = document.querySelectorAll('.banner-carrossel');
    const circulos = document.querySelectorAll('.circulos div');

    if (direcao === 'prev') {
        paginaAtualCarrossel = paginaAtualCarrossel === 1 ? totalPaginasCarrossel : paginaAtualCarrossel - 1;
    } else if (direcao === 'next') {
        paginaAtualCarrossel = paginaAtualCarrossel === totalPaginasCarrossel ? 1 : paginaAtualCarrossel + 1;
    } else if (typeof direcao === 'number') {
        paginaAtualCarrossel = direcao;
    }

    banners.forEach((banner, index) => {
        banner.style.display = (index + 1 === paginaAtualCarrossel) ? 'flex' : 'none';
    });

    circulos.forEach((circulo, index) => {
        circulo.style.backgroundColor = (index + 1 === paginaAtualCarrossel) ? 'var(--cor11)' : 'var(--cor6)';
    });
}

window.onload = function () {
    trocarPaginaCarrossel(1);
};

document.getElementById("next").addEventListener("click", function () {
    trocarPaginaCarrossel('next');
});

document.getElementById("prev").addEventListener("click", function () {
    trocarPaginaCarrossel('prev');
});

