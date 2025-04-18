// login.js

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Usuário e senha armazenados no código
    const usuarioCorreto = "usuario1";
    const senhaCorreta = "senha123";

    // Pegando os valores dos campos do formulário
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    // Verificando se o usuário e a senha estão corretos
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        // Redireciona para a tela inicial
        window.location.href = "index.html";
    } else {
        // Mensagem de erro caso as credenciais sejam inválidas
        alert("Usuário ou senha incorretos! Tente novamente.");
    }
});
