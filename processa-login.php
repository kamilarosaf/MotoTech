<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Processa o login

    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];

    // Simulação de usuários válidos
    $usuarios_validos = [
        'usuario1' => 'senha123',
        'usuario2' => 'senha456'
    ];

    // Verifica se o usuário existe e se a senha está correta
    if (isset($usuarios_validos[$usuario]) && $usuarios_validos[$usuario] == $senha) {
        // Login bem-sucedido, redireciona para a página inicial
        header("Location: index.html");
        exit();
    } else {
        echo "Usuário ou senha incorretos.";
    }
} else {
    // Em caso de outro tipo de requisição, exibe uma mensagem de erro
    echo "Método não permitido.";
}
?>
