<?php
// Começar a sessão para armazenar os dados temporariamente
session_start();

// Verificar se o formulário foi enviado via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletar os dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $servico = $_POST['servico'];
    $data = $_POST['data'];

    // Armazenar os dados na sessão
    $_SESSION['agendamento'] = [
        'nome' => $nome,
        'email' => $email,
        'servico' => $servico,
        'data' => $data
    ];

    // Redirecionar para a página de "Meus Agendamentos"
    header("Location: meus-agendamentos.php");
    exit();
}
?>
