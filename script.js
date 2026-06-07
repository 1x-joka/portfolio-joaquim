document.addEventListener('DOMContentLoaded', function() {
    let atual = 0;
    const cards = document.querySelectorAll('.projeto-card');
    const indicadores = document.querySelectorAll('.indicador');

    function moverCarrossel(direcao) {
        cards[atual].classList.remove('ativo');
        indicadores[atual].classList.remove('ativo');

        atual = (atual + direcao + cards.length) % cards.length;

        cards[atual].classList.add('ativo');
        indicadores[atual].classList.add('ativo');
    }

    cards[0].classList.add('ativo');

    window.moverCarrossel = moverCarrossel;
});