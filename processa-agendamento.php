<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $servico = $_POST['servico'];
    $data = $_POST['data'];

    // Aqui você pode salvar os dados em um banco de dados ou enviar um e-mail, por exemplo
    // Exemplo de salvar em banco (não implementado aqui)

    // Redireciona para a página de sucesso
    header("Location: sucesso.html"); // Página de sucesso após o agendamento
    exit; // Não se esqueça de chamar exit após o redirecionamento
}
?>
