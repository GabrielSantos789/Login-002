<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["user"]) && isset($_POST["pass"])) {
        $username = $_POST["user"];
        $password = $_POST["pass"];

        echo "Usuário: $username, Senha: $password";
    } else {
        echo "Erro: Campos não preenchidos corretamente.";
    }
} else {
    echo "Erro: Método de requisição inválido.";
}
?>
