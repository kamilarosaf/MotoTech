<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Coleta os dados do formulário
    $nome = $_GET['nome'];
    $email = $_GET['email'];
    $servico = $_GET['servico'];
    $data = $_GET['data'];

    // Exibe os dados para depuração (temporariamente)
    echo "<h2>Dados do Agendamento:</h2>";
    echo "Nome: " . htmlspecialchars($nome) . "<br>";
    echo "Email: " . htmlspecialchars($email) . "<br>";
    echo "Serviço: " . htmlspecialchars($servico) . "<br>";
    echo "Data: " . htmlspecialchars($data) . "<br>";

    // A partir daqui você pode redirecionar para outra página ou processar os dados.
    // Exemplo de redirecionamento para uma página de sucesso:
    // header("Location: sucesso.html");
}
?>
