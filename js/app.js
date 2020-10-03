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

// Variáveis do carrinho e dos botões de compra
let carrinho = document.querySelector("#carrinho");
let produtoBtn = document.querySelectorAll(".produto-btn");

// Variável para contar o número de itens no carrinho
let itensCarrinho = 0;

// Loop para atribuir o eventListener e a função para todos botões
for (let i = 0; i < produtoBtn.length; i++) {
  produtoBtn[i].addEventListener("click", function(e) {
    // Utiliza evento para prevenir o link do seu comportamento padrão
    e.preventDefault();

    // Soma itens no carrinho a cada clique em um botão e atualiza o número de itens no menu
    itensCarrinho++;
    carrinho.innerHTML = `Carrinho (${itensCarrinho}) <i class="fas fa-shopping-cart"></i>`;
  });
}