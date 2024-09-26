let selectedButton = null;
let selectedRating = null; // Para armazenar o valor da avaliação

// Função chamada quando um botão de avaliação é clicado
function escolha(button, rating) {
    // Se houver um botão já selecionado, remove o estilo de seleção
    if (selectedButton) {
        selectedButton.classList.remove('selected');
    }
    
    // Adiciona o estilo ao botão clicado
    button.classList.add('selected');
    
    // Atualiza a variável para o novo botão selecionado
    selectedButton = button;
    selectedRating = rating; // Armazena o valor da avaliação
}

// Função chamada ao clicar no botão "Submit"
function submitRating() {
    if (selectedRating) {
        // Armazena o valor da avaliação no localStorage
        localStorage.setItem('selectedRating', selectedRating);

        // Redireciona para a página "envited.html"
        window.location.href = "envited.html";
    } else {
        alert('Please select a rating before submitting!');
    }
}
