// login.js

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Usuário e senha armazenados no código
    const usuarioCorreto = "usuario1";
    const senhaCorreta = "senha123";

    // Pegando os valores dos campos do formulário
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    // Verificando se o usuário e a senha estão corretos
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        // Se os dados estiverem corretos, redireciona para a página inicial
        window.location.href = "index.html"; // Redireciona para a página principal
    } else {
        // Caso o login falhe, exibe uma mensagem de erro
        alert("Usuário ou senha incorretos!"); // Mensagem de erro
    }
});
