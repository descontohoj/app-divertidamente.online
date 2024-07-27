// function toggleCard(clickedElement) {
//     const allCards = document.querySelectorAll('.card__grade');
//     allCards.forEach(card => {
//         card.classList.remove('active');
//     });

//     clickedElement.classList.add('active');
// }

function toggleCard(clickedElement) {
    const allCards = document.querySelectorAll('.card__grade');
    
    allCards.forEach(card => {
        card.classList.remove('active');
    });

    // Adicione um switch para lidar com diferentes ações
    switch (clickedElement.id) {
        case 'card__grade1':
            updateStars('star1', '', '#ffd700');
            updateStars('star2', '', '#ccc');
            updateStars('star3', '', '#ccc');
            updateStars('star4', '', '#ccc');
            updateStars('star5', '', '#ccc');
            break;
        case 'card__grade2':
            updateStars('star1', '', '#ffd700');
            updateStars('star2', '', '#ffd700');
            updateStars('star3', '', '#ccc');
            updateStars('star4', '', '#ccc');
            updateStars('star5', '', '#ccc');
            break;
        case 'card__grade3':
            updateStars('star1', '', '#ffd700');
            updateStars('star2', '', '#ffd700');
            updateStars('star3', '', '#ffd700');
            updateStars('star4', '', '#ccc');
            updateStars('star5', '', '#ccc');
            break;
        case 'card__grade4':
            updateStars('star1', '', '#ffd700');
            updateStars('star2', '', '#ffd700');
            updateStars('star3', '', '#ffd700');
            updateStars('star4', '', '#ffd700');
            updateStars('star5', '', '#ccc');
            break;
        case 'card__grade5':
            updateStars('star1', '', '#ffd700');
            updateStars('star2', '', '#ffd700');
            updateStars('star3', '', '#ffd700');
            updateStars('star4', '', '#ffd700');
            updateStars('star5', '', '#ffd700');
            break;
        // Adicione mais casos conforme necessário
        default:
            // Ação padrão, se nenhum caso corresponder
            console.log("Nenhum caso correspondente");
    }
}

function updateStars(elementId, className, color) {
    const starElement = document.getElementById(elementId);
    if (starElement) {
        starElement.className = className;
        starElement.style.color = color; // Adiciona a cor amarela
    } else {
        console.error("Elemento não encontrado com ID: " + elementId);
    }
}

// Adicione um evento de clique aos elementos que deseja controlar
const cards = document.querySelectorAll('.card__grade');

cards.forEach(card => {
    card.addEventListener('click', function() {
        toggleCard(this); // "this" se refere ao elemento clicado
    });
});