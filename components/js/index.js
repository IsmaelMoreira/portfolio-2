document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Cria a mensagem para o WhatsApp
    const whatsappMessage = `*Nome:* ${name}%0A*Email:* ${email}%0A*Mensagem:* ${message}`;
    const whatsappNumber = '5598999702520'; // O número de WhatsApp que você forneceu (inclui o código do país)
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Abre o WhatsApp
    window.open(whatsappLink, '_blank');
});
