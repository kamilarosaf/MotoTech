<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];

    // Aqui você pode substituir essa verificação por uma consulta a um banco de dados real
    // Exemplo de usuários fictícios:
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
        // Se a validação falhar
        echo "Usuário ou senha incorretos.";
    }
}
?>
