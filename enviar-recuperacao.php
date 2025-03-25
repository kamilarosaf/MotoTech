<?php
// Lógica para enviar email de recuperação de senha (exemplo)
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

    // Verifica se o e-mail existe (exemplo simples)
    $usuarios = ['usuario1' => 'usuario1@email.com'];

    if (in_array($email, $usuarios)) {
        // Enviar um e-mail de recuperação (não implementado aqui)
        echo "E-mail de recuperação enviado!";
    } else {
        echo "E-mail não encontrado!";
    }
}
?>
