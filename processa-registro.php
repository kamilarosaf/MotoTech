<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    // Lógica para salvar no banco de dados (Exemplo: MySQL)
    // Conectar ao banco de dados e verificar se o e-mail já existe
    // Caso não exista, salvar o e-mail e senha (senha deve ser criptografada)

    // Exemplo simples de criptografia
    $senha_criptografada = password_hash($senha, PASSWORD_DEFAULT);

    // Código para salvar os dados no banco de dados (não mostrado aqui)

    // Se tudo deu certo, redirecionar para o login ou dashboard
    header('Location: login.html');
    exit();
}
?>
