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

    // Definindo as credenciais corretas (pode ser alterado conforme necessidade)
    var usuarioCorreto = "usuario"; // Usuário correto
    var senhaCorreta = "senha123";  // Senha correta

    // Validando as credenciais inseridas
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        // Se as credenciais estiverem corretas, armazena a informação no localStorage
        localStorage.setItem('usuarioLogado', usuario);

        // Redireciona para a página inicial
        window.location.href = 'index.html'; // Altere o caminho conforme necessário
    } else {
        // Se as credenciais estiverem incorretas
        alert("Usuário ou senha incorretos. Tente novamente.");
    }
}
