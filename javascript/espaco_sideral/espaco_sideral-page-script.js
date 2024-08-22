// Carrosel - Código de funcionamento
var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 30,
  rewind: true,
  autoplay: {
      delay: 7800,
      disableOnInteraction: false
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
},

breakpoints: {
    0: {
        slidesPerView: 1,
    },

    700: {
        slidesPerView: '2',
    },
    
    900: {
        slidesPerView: '3',
    },

    1295: {
      slidesPerView: '4',
    },

}
 
});

//Arquivos de alimentação do carrosel - Notícias que são mostradas

const arrayCarrossel = [
  {
    linkNotices:
      "https://revistadecinema.com.br/2023/06/o-espaco-sideral-e-o-cinema-uma-historia-de-amor/",
    cardImg:
      "https://revistadecinema.com.br/wp-content/uploads/2023/06/photo-1518364538800-6bae3c2ea0f2-800x445.jpeg",
    altImgCard: "Imagem de foguetes espaciais",
    tittleCard:
      "O espaço sideral e o cinema, uma história de amor.",
    descriptionCard:
      "Os homens sonham e o cinema realiza. E não existe sonho mais recorrente do que as estrelas. A relação da humanidade com os astros é antiga, começou nos tempos das cavernas...",
  },

  {
    linkNotices:
      "https://spacetoday.com.br/inteligencia-artificial-no-estudo-do-campo-magnetico-solar/",
    cardImg:
      "https://spacetoday.com.br/wp-content/uploads/2023/07/ia_campo_magnetico_sol_01.jpg",
    altImgCard: "Imagem ilustrativa do campo magnético solar",
    tittleCard: "Inteligência Artificial No Estudo Do Campo Magnético Solar.",
    descriptionCard:
      "Cientistas da Universidade de Graz e do Skoltech alcançaram um avanço significativo na física solar, conforme publicado na revista Nature Astronomy.",
  },

  {
    linkNotices:
      "https://spacetoday.com.br/elon-musk-fala-das-grandes-atualizacoes-do-starship/",
    cardImg:
      "https://spacetoday.com.br/wp-content/uploads/2023/06/starship_01.png",
    altImgCard: "Imagem do foguete Starship",
    tittleCard: "Elon Musk Fala Das Grandes Atualizações do Starship.",
    descriptionCard:
      "A SpaceX precisará de mais seis semanas ou mais para concluir a implementação de centenas de mudanças em seu foguete Super Heavy-Starship e na gigantesca plataforma de lançamento do Texas.",
  },

  {
    linkNotices:
      "https://spacetoday.com.br/o-legado-do-helicoptero-ingenuity-em-marte/",
    cardImg:
      "https://spacetoday.com.br/wp-content/uploads/2023/05/ingenuity.jpg",
    altImgCard: "Imagem do Helicóptero Ingenuity",
    tittleCard: "O Legado do Helicóptero Ingenuity Em Marte.",
    descriptionCard:
      "Em 19 de abril de 2021, um pequeno helicóptero chamado Ingenuity fez história ao realizar o primeiro voo motorizado e controlado em outro planeta.",
  },

  {
    linkNotices:
      "https://spacetoday.com.br/james-webb-estuda-em-detalhe-um-mini-netuno/",
    cardImg:
      "https://spacetoday.com.br/wp-content/uploads/2023/06/1-hazyminineptune-16.jpg",
    altImgCard: "Imagem do Mini-Netuno ",
    tittleCard: "James Webb Estuda Em Detalhe Um Mini-Netuno.",
    descriptionCard:
      "Uma equipe de cientistas obtém uma nova visão sobre a atmosfera de um “mini-Netuno”, uma classe de planeta comum na galáxia, mas sobre a qual pouco se sabe.",
  },

  {
    linkNotices:
      "https://spacetoday.com.br/a-procura-por-bacterias-e-entendimentos-sobre-o-manto-terrestre-na-iss/",
    cardImg:
      "https://spacetoday.com.br/wp-content/uploads/2016/12/iss050e011020-1024x682.jpg",
    altImgCard: "Cientista na ISS",
    tittleCard:
      "A procura por bactérias e entendimentos sobre o manto terrestre na ISS.",
    descriptionCard:
      "Os trabalhos da nova tripulação da ISS/NASA estão mais interessantes do que nunca! Com o dobro de membros tripulantes, as pesquisas científicas ganharam um up!",
  },

  {
    linkNotices:
      "https://revistagalileu.globo.com/ciencia/espaco/noticia/2023/07/nasa-divulga-foto-deslumbrante-de-lagoa-no-rs-diretamente-do-espaco.ghtml",
    cardImg:
      "https://s2-galileu.glbimg.com/RclyAxzTmJyrstSzCizMTSSTfJs=/0x0:1600x1064/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/h/V/4RIemKTaqKU1LBkV3fOw/whatsapp-image-2023-07-14-at-10.18.36.jpeg",
    altImgCard: "Imagem da lagoa no RS",
    tittleCard:
      "Nasa divulga foto deslumbrante de lagoa no RS diretamente do espaço.",
    descriptionCard:
      "Imagem feita pelo ex-astronauta Jack Fischer a partir da Estação Espacial Internacional (ISS) mostra a beleza da Lagoa dos Barros, no litoral gaúcho.",
  },

  {
    linkNotices:
      "https://revistagalileu.globo.com/ciencia/espaco/noticia/2023/07/entenda-a-foto-comemorativa-do-primeiro-ano-de-atividade-do-james-webb.ghtml",
    cardImg:
      "https://s2-galileu.glbimg.com/HsNsFP9yQHqpGx87m0WOKyxrIm4=/0x0:1280x1199/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/p/o/YgiPfLRHOm0m7L3lJquw/weic2316a.jpg",
    altImgCard: "Imagem da nebulosa",
    tittleCard:
      "Entenda a foto comemorativa do primeiro ano de atividade do James Webb.",
    descriptionCard:
      "Nova imagem apresenta a região de formação estelar mais próxima da Terra, no complexo de nuvens Rho Ophiuchi.",
  },
];

/*
for (let index = 0; index < arrayCarrossel.length; index++) {
  // Criar elemento
  let carrosselScript = document.createElement("div");

  // Atribuir uma classe ao elemento (caso necessário)
  carrosselScript.className = "card swiper-slide";

  // Manipular elemento
  carrosselScript.innerHTML = `
        <a class="link-notices" target="_blank" href="${arrayCarrossel[index].linkNotices}">
            <div class="image-content">
                <span class="overlay">
                    <div class="card-image">
                        <img class="card-img" src="${arrayCarrossel[index].cardImg}" alt="${arrayCarrossel[index].altImgCard}">
                    </div>
                </span>
            </div>
            <div class="card-content">
                <h3 class="tittle_card">
                    ${arrayCarrossel[index].tittleCard}
                </h3>
                <p class="description_card">
                    ${arrayCarrossel[index].descriptionCard}
                </p>
            </div>
        </a>

    `;

  // Adicionar na página

  let selecionarClasseCarrossel = document.querySelector(".card-wrapper");

  selecionarClasseCarrossel.appendChild(carrosselScript);
}*/



