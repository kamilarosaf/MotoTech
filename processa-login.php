<?php
// Dados fictícios de usuário (em um banco de dados seria diferente)
$usuarios = [
    'usuario1' => 'senha1',  // Nome de usuário => Senha
    'usuario2' => 'senha2'
];

// Verificando os dados do formulário
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];

    // Valida se o usuário e senha estão corretos
    if (isset($usuarios[$usuario]) && $usuarios[$usuario] == $senha) {
        // Login bem-sucedido, redireciona para o painel
        header("Location: dashboard.html");
        exit;
    } else {
        // Senha ou usuário incorretos
        echo "Usuário ou senha incorretos!";
    }
}
?>
