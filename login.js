function validarLogin(event) {
    event.preventDefault(); // Previne o envio do formulário para validação

    // Pegando os valores dos campos
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    // Verificando se os campos não estão vazios
    if (usuario === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Caso os campos estejam preenchidos, o formulário será enviado normalmente
    // Agora, o formulário vai para o PHP, que fará a validação e o redirecionamento
    document.getElementById('loginForm').submit(); // Submete o formulário
}
