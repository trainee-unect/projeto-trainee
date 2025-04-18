const linkInicio = document.getElementById("navInicio")
const linkSobre = document.getElementById("navSobre")
const linkServicos = document.getElementById("navServicos")
const linkContato = document.getElementById("navContato")
const linkLogoInicio = document.getElementById("logo")
const linkLogoRodape = document.getElementById("imagem-blocos")

linkLogoInicio.addEventListener("click", (e) => {
    const elemento = document.getElementById("inicio")
    e.preventDefault();
    elemento.scrollIntoView({
        behavior:"smooth",
        block: "start",
        inline: "nearest",
    })
})

linkLogoRodape.addEventListener("click", (e) => {
    const elemento = document.getElementById("inicio")
    e.preventDefault();
    elemento.scrollIntoView({
        behavior:"smooth",
        block: "start",
        inline: "nearest",
    })
})

linkInicio.addEventListener("click", (e) => {
    const elemento = document.getElementById("inicio")
    e.preventDefault();
    elemento.scrollIntoView({
        behavior:"smooth",
        block: "start",
        inline: "nearest",
    })
})

linkServicos.addEventListener("click", (e) => {
    const elemento = document.getElementById("servicos1")
    e.preventDefault();
    elemento.scrollIntoView({
        behavior:"smooth",
        block: "start",
        inline: "nearest",
    })
})

linkSobre.addEventListener("click", (e) => {
    const elemento = document.getElementById("quem-somos")
    e.preventDefault();
    elemento.scrollIntoView({
        behavior:"smooth",
        block: "start",
        inline: "nearest",
    })
})

linkContato.addEventListener("click", (e) => {
    const elemento = document.getElementById("contato")
    e.preventDefault();
    elemento.scrollIntoView({
        behavior:"smooth",
        block: "start",
        inline: "nearest",
    })
}) 


let paginaAtual = 1;
let paginaAtualMob = 1;

function trocarPagina(acao) {
    const comentarios = document.querySelectorAll('.comentario');
    const totalPaginas = 3;

    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    const prevMob = document.getElementById("prevMob");
    const nextMob = document.getElementById("nextMob");

    // Navegação desktop
    if (acao === 'prev' && paginaAtual > 1) paginaAtual--;
    if (acao === 'next' && paginaAtual < totalPaginas) paginaAtual++;

    // Navegação mobile
    if (acao === 'prevMob' && paginaAtualMob > 1) paginaAtualMob--;
    if (acao === 'nextMob' && paginaAtualMob < totalPaginas) paginaAtualMob++;

    // Atualiza números na tela
    document.getElementById('paginaAtual').textContent = paginaAtual;
    document.getElementById('paginaAtualMob').textContent = paginaAtualMob;

    // Atualiza exibição dos comentários
    let paginaReferencia = acao.includes("Mob") ? paginaAtualMob : paginaAtual;
    comentarios.forEach(comentario => {
        comentario.style.display = comentario.getAttribute('data-pagina') == paginaReferencia ? 'block' : 'none';
    });

    // Controle de botões Desktop
    prev.disabled = paginaAtual === 1;
    next.disabled = paginaAtual === totalPaginas;
    prev.style.visibility = paginaAtual === 1 ? 'hidden' : 'visible';
    next.style.visibility = paginaAtual === totalPaginas ? 'hidden' : 'visible';

    // Controle de botões Mobile
    prevMob.disabled = paginaAtualMob === 1;
    nextMob.disabled = paginaAtualMob === totalPaginas;
    prevMob.style.visibility = paginaAtualMob === 1 ? 'hidden' : 'visible';
    nextMob.style.visibility = paginaAtualMob === totalPaginas ? 'hidden' : 'visible';
}

// Executa ao carregar
trocarPagina('next'); // pode ser qualquer ação inicial só pra ativar






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

