// Configuração do WhatsApp
const WHATSAPP_NUMBER = '5516999999999'; // Substitua pelo número real
const WHATSAPP_MESSAGE = 'Olá Petiscaria do Garcia, gostaria de conversar sobre a proposta digital';

// Elementos do DOM
const menuToggle = document.getElementById('menuToggle');
const navbarMenu = document.getElementById('navbarMenu');
const navLinks = document.querySelectorAll('.nav-link');
const whatsappButtons = document.querySelectorAll('#whatsappBtn, #heroWhatsapp, #finalWhatsapp');

// Toggle do Menu Mobile
menuToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remover classe active de todos os links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Adicionar classe active ao link clicado
        link.classList.add('active');
        
        // Fechar menu mobile
        navbarMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        
        // Scroll para a seção
        const sectionId = link.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Adicionar evento de clique aos botões do WhatsApp
whatsappButtons.forEach(button => {
    button.addEventListener('click', () => {
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
        window.open(whatsappUrl, '_blank');
    });
});

// Atualizar link ativo ao fazer scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
});

// Adicionar estilos para o menu mobile ativo
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 1023px) {
        .navbar-menu {
            display: none;
            position: absolute;
            top: 60px;
            left: 0;
            right: 0;
            background-color: white;
            border-top: 1px solid #e0e0e0;
            flex-direction: column;
            gap: 0;
            padding: 12px 0;
            max-height: 400px;
            overflow-y: auto;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .navbar-menu.active {
            display: flex;
        }
        
        .nav-link {
            padding: 12px 20px;
            border-radius: 0;
            text-align: left;
            width: 100%;
        }
        
        .menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(10px, 10px);
        }
        
        .menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
        }
    }
`;
document.head.appendChild(style);

// Log de inicialização
console.log('Site Petiscaria do Garcia carregado com sucesso!');
console.log('Número do WhatsApp configurado:', WHATSAPP_NUMBER);
