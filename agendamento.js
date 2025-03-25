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
