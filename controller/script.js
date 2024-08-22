/* script.js
document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('whatsapp');
    
    botao.addEventListener('click', () => {
        // Adiciona a classe 'ampliado' ao botão quando clicado
        botao.classList.add('ampliado');
        
        // Remove a classe após a animação para permitir novos cliques
        setTimeout(() => {
            botao.classList.remove('ampliado');
        }, 300); // Tempo de animação em milissegundos
    });
});
 */