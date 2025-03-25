// Abre o modal de confirmação e exibe os dados selecionados
function abrirConfirmacao() {
    let servico = document.getElementById("servico").value;
    let data = document.getElementById("data").value;
    let horario = document.getElementById("horario").value;

    if (!servico || !data || !horario) {
        alert("Por favor, preencha todos os campos antes de agendar!");
        return;
    }

    document.getElementById("confirmaServico").textContent = servico;
    document.getElementById("confirmaData").textContent = data;
    document.getElementById("confirmaHorario").textContent = horario;

    document.getElementById("modalConfirmacao").style.display = "flex";
}

// Fecha o modal
function fecharModal() {
    document.getElementById("modalConfirmacao").style.display = "none";
}

// Confirma o agendamento (aqui pode ser enviado para um backend)
function confirmarAgendamento() {
    alert("Seu serviço foi agendado com sucesso!");
    fecharModal();
}
function redirecionarConfirmacao(event) {
    event.preventDefault(); // Impede o envio do formulário

    let servico = document.getElementById("servico").value;
    let data = document.getElementById("data").value;
    let horario = document.getElementById("horario").value;

    if (!servico || !data || !horario) {
        alert("Por favor, preencha todos os campos antes de agendar!");
        return;
    }

    // Redireciona para a página de confirmação com os dados na URL
    window.location.href = `confirmacao.html?servico=${encodeURIComponent(servico)}&data=${encodeURIComponent(data)}&horario=${encodeURIComponent(horario)}`;
}
