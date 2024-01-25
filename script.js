function submitForm() {
    // Aqui você pode adicionar lógica para processar o envio do formulário
    var formData = {
        user: document.getElementById('user-id').value,
        pass: document.getElementById('pass-id').value
    };

    // Exemplo de exibição dos dados no console
    console.log('Formulário enviado:', formData);
}

function forgotPassword() {
    // Lógica para lidar com "Esqueceu a senha?"
    console.log('Esqueceu a senha? Cliqueu!');
}