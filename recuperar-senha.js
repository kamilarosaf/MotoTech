document.getElementById('recuperarForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Simula o envio do e-mail
    const email = document.getElementById('email').value;

    if (email) {
        // Exibe a mensagem de confirmação
        document.getElementById('mensagemConfirmacao').style.display = 'block';

        // Oculta o formulário após o envio
        document.getElementById('recuperarForm').style.display = 'none';
    } else {
        alert('Por favor, insira um e-mail válido.');
    }
});
