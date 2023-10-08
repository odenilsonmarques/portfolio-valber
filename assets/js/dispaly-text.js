
const mostrarMaisBotao = document.querySelector('.mostrar-mais');
const textoCompleto = document.querySelector('.texto-completo');

mostrarMaisBotao.addEventListener('click', function () {
    if (textoCompleto.style.display === 'none' || textoCompleto.style.display === '') {
        textoCompleto.style.display = 'inline';
        mostrarMaisBotao.textContent = 'Veja menos';
    } else {
        textoCompleto.style.display = 'none';
        mostrarMaisBotao.textContent = 'Veja mais';
    }
});