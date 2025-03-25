<?php
// Iniciar a sessão
session_start();
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meus Agendamentos - MotoTech</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="meus-agendamentos.css">
</head>
<body>

    <!-- Atalho para a Tela Inicial -->
    <a href="index.html" class="home-link">
        <i class="fas fa-home"></i> Início
    </a>

    <div class="agendamento-container">
        <h1>Meus Agendamentos</h1>
        
        <?php if (isset($_SESSION['agendamento'])): ?>
            <div class="agendamento-info">
                <p><strong>Nome:</strong> <?php echo $_SESSION['agendamento']['nome']; ?></p>
                <p><strong>E-mail:</strong> <?php echo $_SESSION['agendamento']['email']; ?></p>
                <p><strong>Serviço:</strong> <?php echo $_SESSION['agendamento']['servico']; ?></p>
                <p><strong>Data:</strong> <?php echo $_SESSION['agendamento']['data']; ?></p>
            </div>
        <?php else: ?>
            <p>Você ainda não fez nenhum agendamento.</p>
        <?php endif; ?>
    </div>

    <footer>
        <p>&copy; 2025 Kamila Rosa. Todos os direitos reservados.</p>
    </footer>

</body>
</html>
