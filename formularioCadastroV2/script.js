// Função para buscar o endereço ao preencher o campo CEP
document.getElementById('cep').addEventListener('blur', function() {
    // Obtém o valor do CEP inserido
    const cep = document.getElementById('cep').value.replace(/\D/g, ''); // Remove não-números

    // Verifica se o CEP tem exatamente 8 dígitos
    if (cep.length !== 8) {
        alert('CEP inválido. O CEP deve ter 8 dígitos.');
        return;
    }

    // URL para realizar a requisição à API ViaCEP
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    // Realiza a requisição para a API ViaCEP
    fetch(url)
        .then(response => response.json()) // Converte a resposta para JSON
        .then(data => {
            // Verifica se o CEP retornou um erro
            if (data.erro) {
                alert('CEP não encontrado.');
                return;
            }

            // Preenche os campos com os dados retornados pela API
            document.getElementById('logradouro').value = data.logradouro || 'Não disponível';
            document.getElementById('bairro').value = data.bairro || 'Não disponível';
            document.getElementById('cidade').value = data.localidade || 'Não disponível';
            document.getElementById('estado').value = data.uf || 'Não disponível';
        })
        .catch(error => {
            alert('Erro ao buscar o CEP. Tente novamente.');
            console.error(error);
        });
});

// Lógica para enviar o formulário
document.getElementById('addressForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    // Aqui você pode adicionar a lógica de envio do formulário para um servidor ou apenas mostrar uma mensagem de sucesso
    alert('Endereço cadastrado com sucesso!');
});
