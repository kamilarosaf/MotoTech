// Função para pegar os parâmetros da URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Exibir os dados na tela
document.getElementById("confirmaServico").textContent = getQueryParam("servico");
document.getElementById("confirmaData").textContent = getQueryParam("data");
document.getElementById("confirmaHorario").textContent = getQueryParam("horario");

// Simula a confirmação e redireciona para a página inicial
function confirmarAgendamento() {
    alert("Agendamento confirmado com sucesso!");
    window.location.href = "index.html"; // Voltar para a página inicial
}

// Voltar para a página de agendamento para edição
function voltarAgendamento() {
    window.history.back(); // Voltar para a página anterior
}
