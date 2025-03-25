// Extrai os parâmetros da URL
const queryParams = new URLSearchParams(window.location.search);

// Insere os valores nos elementos HTML
document.getElementById('nome').textContent = queryParams.get('nome');
document.getElementById('email').textContent = queryParams.get('email');
document.getElementById('servico').textContent = queryParams.get('servico');
document.getElementById('data').textContent = queryParams.get('data');
