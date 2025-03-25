document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Simulando autenticação (exemplo básico)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Substitua essa validação pela lógica do servidor
    if (username === 'admin' && password === '1234') {
        alert('Login realizado com sucesso!');
        window.location.href = 'index.html'; // Redireciona para a tela inicial
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
});
