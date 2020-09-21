var swiper = new Swiper('.swiper-container', { // Criar novo slide
    loop: true, // Repete o slide
    speed: 500, // Velocidade transição
    autoplay: { // Rodar sozinho
        delay: 4000, // Tempo para trocar pro próximo
    },
    navigation: { // Setas de navegação
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});