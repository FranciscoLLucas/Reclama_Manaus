
function aplicarModoDaltonico() {
    const modoSalvo = localStorage.getItem('colorblind-mode') || 'none';
    document.body.setAttribute('data-colorblind', modoSalvo);
}

// Atualiza o modo e salva a escolha
function mudarModoDaltonico(modo) {
    document.body.setAttribute('data-colorblind', modo);
    localStorage.setItem('colorblind-mode', modo);
}

// Inicializa o seletor se ele existir na página
function inicializarSeletorDaltonismo() {
    const seletor = document.getElementById('colorblind-mode');
    if (seletor) {
        // Define o valor atual
        seletor.value = localStorage.getItem('colorblind-mode') || 'none';

        // Adiciona evento de mudança
        seletor.addEventListener('change', (e) => {
            mudarModoDaltonico(e.target.value);
        });
    }
}

// Executa automaticamente ao carregar
window.addEventListener('DOMContentLoaded', () => {
    aplicarModoDaltonico();
    inicializarSeletorDaltonismo();
});
