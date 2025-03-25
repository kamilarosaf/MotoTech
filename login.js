// Função de validação do formulário de login
function validarLogin(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Pegando os valores dos campos
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    // Dados de usuário e senha (exemplo)
    var usuariosValidos = {
        "usuario1": "senha1",
        "usuario2": "senha2"
    };

    // Verificando se o usuário e a senha estão corretos
    if (usuariosValidos[usuario] && usuariosValidos[usuario] === senha) {
        alert("Login bem-sucedido!");
        window.location.href = "dashboard.html";  // Redirecionar para a página
    } else {
        alert("Usuário ou senha incorretos.");
    }
}
