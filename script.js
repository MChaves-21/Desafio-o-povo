'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Inicialização do Swiper
    const swiper = new Swiper('.cast-slider', {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 6, spaceBetween: 40 }
        }
    });

    // Lógica para controle de acessibilidade do menu mobile
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function () {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            // Aqui você pode adicionar a lógica para abrir/fechar o seu menu se necessário no futuro
        });
    }

    console.log("Interface Barbie Refatorada: Semântica, Acessibilidade e Arquitetura Mobile-First aplicadas.");
});