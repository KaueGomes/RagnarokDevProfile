// Lista de imagens do personagem em ordem de rotação
var personagemImgs = [
    "components/img/Char/Frente.png",
    "components/img/Char/FrenteDireita.png",
    "components/img/Char/Direita.png",
    "components/img/Char/DireitaCima.png",
    "components/img/Char/Cima.png",
    "components/img/Char/EsquerdaCima.png",
    "components/img/Char/Esquerda.png",
    "components/img/Char/FrenteEsquerda.png"
];
var sentadoImg = "components/img/Char/Sentado.png";
var slideIndex = 0;
var inactivityTimer = null;
var sentadoTimeout = 30000; // 30 segundos
var isSentado = false;

function resetInactivityTimer() {
    if (inactivityTimer) clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(function() {
        showSentado();
    }, sentadoTimeout);
}

function showSentado() {
    var img = document.getElementById('personagem-img');
    if (img) {
        img.src = sentadoImg;
    }
    isSentado = true;
}

function hideSentado() {
    isSentado = false;
}

function plusSlides(n) {
    hideSentado();
    slideIndex = (slideIndex + n + personagemImgs.length) % personagemImgs.length;
    showSlides();
    resetInactivityTimer();
}

function currentSlide(n) {
    hideSentado();
    slideIndex = n % personagemImgs.length;
    showSlides();
    resetInactivityTimer();
}

function showSlides() {
    var img = document.getElementById('personagem-img');
    if (!img) return;
    if (isSentado) {
        img.src = sentadoImg;
    } else {
        img.src = personagemImgs[slideIndex];
    }
}

// Inicialização
showSlides();
resetInactivityTimer();