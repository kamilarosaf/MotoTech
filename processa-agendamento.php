<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $servico = $_POST['servico'];
    $data = $_POST['data'];

    // Exibe os dados para depuração (temporariamente)
    echo "<h2>Dados do Agendamento:</h2>";
    echo "Nome: " . htmlspecialchars($nome) . "<br>";
    echo "Email: " . htmlspecialchars($email) . "<br>";
    echo "Serviço: " . htmlspecialchars($servico) . "<br>";
    echo "Data: " . htmlspecialchars($data) . "<br>";
}
?>
