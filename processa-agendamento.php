<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $servico = $_POST['servico'];
    $data = $_POST['data'];

    // Aqui você pode salvar os dados em um banco de dados ou enviar um e-mail, por exemplo
    // Exemplo de salvar em banco (não implementado aqui)

    // Supondo que tudo ocorreu bem, você pode redirecionar para uma página de sucesso:
    echo "Agendamento realizado com sucesso! Você será contatado em breve.";
    // Ou redirecionar:
    // header("Location: sucesso.html");
}
?>
