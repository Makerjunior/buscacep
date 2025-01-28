$(document).ready(function() {
    // Função para validar o formulário
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário enquanto validamos
        
        let isValid = true;
        let errorMessages = [];
        
        // Limpa mensagens de erro anteriores e estilos de erro
        $('.error-message').remove();
        $('.form-control').removeClass('is-invalid');

        // Validação do nome
        if ($('#nome').val().trim() === '') {
            isValid = false;
            $('#nome').addClass('is-invalid');
            $('#nome').after('<div class="error-message text-danger">O campo Nome é obrigatório.</div>');
        }

        // Validação do sobrenome
        if ($('#sobrenome').val().trim() === '') {
            isValid = false;
            $('#sobrenome').addClass('is-invalid');
            $('#sobrenome').after('<div class="error-message text-danger">O campo Sobrenome é obrigatório.</div>');
        }

        // Validação do e-mail
        const email = $('#email').val().trim();
        // Expressão regular para validar e-mails com domínios válidos
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|org|net|gov|edu|co|info|io|br|[a-z]{2,})$/;
        
        if (email === '') {
            isValid = false;
            $('#email').addClass('is-invalid');
            $('#email').after('<div class="error-message text-danger">O campo E-mail é obrigatório.</div>');
        } else if (!emailPattern.test(email)) {
            isValid = false;
            $('#email').addClass('is-invalid');
            $('#email').after('<div class="error-message text-danger">O e-mail deve ser válido (ex: exemplo@dominio.com).</div>');
        }

        // Validação da senha (mínimo de 8 caracteres, pelo menos 1 número e 1 caractere especial)
        const senha = $('#senha').val().trim();
        const senhaPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{8,}$/;

        if (senha === '') {
            isValid = false;
            $('#senha').addClass('is-invalid');
            $('#senha').after('<div class="error-message text-danger">O campo Senha é obrigatório.</div>');
        } else if (!senhaPattern.test(senha)) {
            isValid = false;
            $('#senha').addClass('is-invalid');
            $('#senha').after('<div class="error-message text-danger">A senha deve ter pelo menos 8 caracteres, incluindo um número e um caractere especial.</div>');
        }

        // Validação do número (somente números)
        const numero = $('#numero').val().trim();
        if (numero === '') {
            isValid = false;
            $('#numero').addClass('is-invalid');
            $('#numero').after('<div class="error-message text-danger">O campo Número é obrigatório.</div>');
        } else if (!/^\d+$/.test(numero)) {
            isValid = false;
            $('#numero').addClass('is-invalid');
            $('#numero').after('<div class="error-message text-danger">O campo Número deve conter apenas números.</div>');
        }

        // Validação do CEP
        const cep = $('#cep').val().trim();
        if (cep === '') {
            isValid = false;
            $('#cep').addClass('is-invalid');
            $('#cep').after('<div class="error-message text-danger">O campo CEP é obrigatório.</div>');
        } else if (!/^\d{8}$/.test(cep)) {
            isValid = false;
            $('#cep').addClass('is-invalid');
            $('#cep').after('<div class="error-message text-danger">O CEP deve conter 8 números.</div>');
        }

        // Verifica se a validação foi bem-sucedida
        if (isValid) {
            // Caso o formulário esteja válido, podemos enviar
            alert('Formulário enviado com sucesso!');
            this.submit();
        } else {
            // Caso haja erros, impede o envio e mostra as mensagens
            alert('Por favor, corrija os erros abaixo antes de enviar.');
        }
    });

    // Máscaras para o campo CEP (apenas números)
    $('#cep').on('input', function() {
        var value = $(this).val().replace(/\D/g, ''); // Remove qualquer coisa que não seja número
        if (value.length <= 8) {
            $(this).val(value);
        }
    });

    // Máscaras para o campo Número (apenas números)
    $('#numero').on('input', function() {
        var value = $(this).val().replace(/\D/g, ''); // Remove qualquer coisa que não seja número
        $(this).val(value);
    });
});
