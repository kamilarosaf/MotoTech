function validarLogin(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Pegando os valores dos campos
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    // Verificando se os campos não estão vazios
    if (usuario === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Caso os campos estejam preenchidos, o formulário será enviado
    event.target.submit(); // Envia o formulário
}
