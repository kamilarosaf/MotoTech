<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $servico = $_POST['servico'];
    $data = $_POST['data'];

    // Aqui, podemos gravar esses dados em um banco de dados ou arquivo
    // Para fins de teste, vamos armazenar os dados em uma variável de sessão
    session_start();
    $_SESSION['agendamento'] = [
        'nome' => $nome,
        'email' => $email,
        'servico' => $servico,
        'data' => $data
    ];

    // Redireciona para a página de "Meus Agendamentos"
    header("Location: meus-agendamentos.php");
    exit();
}
?>

