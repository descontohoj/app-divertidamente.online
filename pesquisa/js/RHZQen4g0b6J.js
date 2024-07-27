function removeDiv(divID) {
    let divRemover = document.getElementById(divID);
    if (divRemover) {
        let parentDiv = divRemover.parentNode;
        parentDiv.removeChild(divRemover);
    }
}

function scrollToTop() {
    // Rola a página para o topo
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Adiciona um efeito de rolagem suave (opcional)
    });
}

function scrollToDown() {
    window.scrollTo({
        top: 250,
        behavior: 'smooth' // Adiciona um efeito de rolagem suave (opcional)
    });
}

function playAudio(audioPath) {
    var audio = new Audio(audioPath);
    audio.play();
}

function pergunta01() {
    removeDiv('pergunta01');
    document.getElementById("pergunta02").style.display = "block";

    scrollToTop();

    playAudio('sfx/check.mp3');
}

function pergunta02() {
    removeDiv('pergunta02');
    document.getElementById("pergunta03").style.display = "block";

    scrollToTop();

    playAudio('sfx/check.mp3');
}

function pergunta03() {
    removeDiv('pergunta03');
    document.getElementById("pergunta04").style.display = "block";
    
    scrollToTop();

    playAudio('sfx/check.mp3');
}

function pergunta04() {
    removeDiv('pergunta04');
    document.getElementById("finalizacao").style.display = "block";
    
    scrollToTop();

    playAudio('sfx/check.mp3');
}

function verificacao() {
    removeDiv('verificacao');
    document.getElementById("pergunta01").style.display = "block";
    var popup = document.getElementById("popup");
    popup.click();

    var trilha = document.getElementById('trilha');
    trilha.volume = 0.03;
    trilha.play();
}