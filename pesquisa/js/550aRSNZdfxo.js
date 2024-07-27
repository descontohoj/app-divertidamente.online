document.addEventListener('DOMContentLoaded', function () {
    hideAllExcept();
    verification();
});

function hideAllExcept() {
    document.getElementById("verificacao").style.display = "block";
    document.getElementById("pergunta01").style.display = "none";
    document.getElementById("pergunta02").style.display = "none";
    document.getElementById("pergunta03").style.display = "none";
    document.getElementById("pergunta04").style.display = "none";
    document.getElementById("finalizacao").style.display = "none";

    document.getElementById("verify-2").style.display = "none";
    document.getElementById("verify-3").style.display = "none";
    document.getElementById("verify-4").style.display = "none";
    document.getElementById("botaoVerificacao").style.display = "none";
}

function verification() {
    setTimeout(function() {
        document.getElementById("verify-1-img").src = "images/LbGbanlzZ7hk.png"
        document.getElementById("verify-1-text").innerText = "Verificando elegibilidade"
        document.getElementById("verify-2").style.display = "";

        setTimeout(function() {
            document.getElementById("verify-2-img").src = "images/LbGbanlzZ7hk.png"
            document.getElementById("verify-2-text").innerText = "Verificando promoção"
            document.getElementById("verify-3").style.display = "";

            setTimeout(function() {
                document.getElementById("verify-3-img").src = "images/LbGbanlzZ7hk.png"
                document.getElementById("verify-3-text").innerText = "Tudo certo"
                document.getElementById("verify-4").style.display = "";

                setTimeout(function() {
                    document.getElementById("verify-4-img").src = "images/LbGbanlzZ7hk.png"
                    document.getElementById("verify-4-text").innerText = "Clique em prosseguir"
                    document.getElementById("botaoVerificacao").style.display = "";
                    document.getElementById("botaoVerificacao").removeAttribute('disabled');
                    document.getElementById("botaoVerificacao").classList.add('active');
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}