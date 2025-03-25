function validarCadastro(event) {
    event.preventDefault(); // Impede o envio do formulário até validar

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (!nome || !email || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    // Simula o cadastro bem-sucedido
    alert("Cadastro realizado com sucesso! Você será redirecionado para o login.");
    window.location.href = "login.html";
}
