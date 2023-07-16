// Carrosel - Código de funcionamento
var swiper = new Swiper(".slide-content", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    660: {
      slidesPerView: "auto",
    },

    950: {
      slidesPerView: "auto",
    },
  },
});

//Arquivos de alimentação do carrosel - Notícias que são mostradas

const arrayCarrossel = [
  {
    linkNotices:
      "https://www.estadao.com.br/link/discord-o-que-e-e-como-funciona-o-app-para-gamers-que-virou-foco-de-abusos-contra-jovens/",
    cardImg:
      "https://t.ctcdn.com.br/OBqzxQ888c3zUJEzGrxu4jjioOo=/512x288/smart/filters:format(webp)/i525670.png",
    altImgCard: "Logo do aplicativo Discord",
    tittleCard:
      "Discord: O que é e como funciona o app para gamers que virou foco de abusos contra jovens.",
    descriptionCard:
      "Plataforma ganhou popularidade entre os jovens por transmissões ao vivo de vídeos das partidas, mas virou mecanismo da ação de criminosos para subornar menores.",
  },

  {
    linkNotices:
      "https://revistagalileu.globo.com/ciencia/espaco/noticia/2023/07/nasa-divulga-foto-deslumbrante-de-lagoa-no-rs-diretamente-do-espaco.ghtml/",
    cardImg:
      "https://s2-galileu.glbimg.com/RclyAxzTmJyrstSzCizMTSSTfJs=/0x0:1600x1064/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/h/V/4RIemKTaqKU1LBkV3fOw/whatsapp-image-2023-07-14-at-10.18.36.jpeg",
    altImgCard: "Imagem da lagoa no RS",
    tittleCard:
      "Nasa divulga foto deslumbrante de lagoa no RS diretamente do espaço",
    descriptionCard:
      "Imagem feita pelo ex-astronauta Jack Fischer a partir da Estação Espacial Internacional (ISS) mostra a beleza da Lagoa dos Barros, no litoral gaúcho.",
  },

  {
    linkNotices:
      "https://www.hardware.com.br/noticias/2023-06/marvel-e-criticada-por-usar-inteligencia-artificial-para-criar-abertura-de-serie.html",
    cardImg:
      "https://www.hardware.com.br/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-22-at-11.11.20.jpeg",
    altImgCard: "Imagem da nova série Marvel: Invasão Secreta",
    tittleCard:
      "Marvel é criticada por usar inteligência artificial para criar abertura de série.",
    descriptionCard:
      "A controvérsia surgiu após a revelação de que a Marvel usou IA para criar a sequência de abertura de sua nova série, “Invasão Secreta”.",
  },

  {
    linkNotices:
      "https://receitas.globo.com/receitas-da-tv/mais-voce/pudim-de-leite-condensado-4d514bb052e0b252bc00e85a.ghtml",
    cardImg:
      "https://s2-receitas.glbimg.com/z2JiB6nwO_XITDhQksL2uiAhic0=/0x0:984x765/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2020/D/m/r8XAmWTcuRAzTRMBJZ1A/pudim-de-leite-condensado.jpg",
    altImgCard: "Imagem de um pudim de leite condensado",
    tittleCard: "Pudim de leite condensado",
    descriptionCard:
      "Veja como fazer o pudim de leite condensado tradicional, que leva apenas 4 ingredientes: açúcar, leite condensado, leite e ovos. Ana Maria Braga ensina o passo a passo desta sobremesa tipicamente brasileira que vai encantar sua família.",
  },

  {
    linkNotices:
      "https://guia.folha.uol.com.br/restaurantes/2023/07/inspirada-em-barbie-doceria-pikurruchas-em-sp-anuncia-doces-e-drinques-cor-de-rosa.shtml",
    cardImg:
      "https://f.i.uol.com.br/fotografia/2023/07/14/168935808464b18f049419d_1689358084_3x2_lg.jpg",
    altImgCard: "Imagem da doceria Pikurrucha's",
    tittleCard:
      "Inspirada em 'Barbie', doceria Pikurrucha's, em SP, anuncia doces e drinques cor-de-rosa",
    descriptionCard:
      "Pioneira no conceito do espaço instagramável, a confeitaria decidiu ampliar o ambiente cor-de-rosa que dialoga com a boneca para seu cardápio, oferecendo opções como um café rosa com brigadeiro branco e pipoca doce.",
  },

  {
      linkNotices: 
      'https://g1.globo.com/tecnologia/noticia/2023/07/05/instagram-threads-rival-twitter.ghtml',
        cardImg: 
        'https://s2-g1.glbimg.com/XvJgv46mktFspeaOXTWubWa87Mg=/0x0:6000x3375/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/y/6/jynisCQqywFngyjBH5Jg/aplicativo-threads.png',
        altImgCard: 
        'Imagens da nova rede social: "Threads"',
        tittleCard: 
        'Instagram lança Threads, rede social para rivalizar com o Twitter.',
        descriptionCard: 
        'Rede social foi revelada dias após o Twitter anunciar um limite para leitura de posts. Usuários poderão fazer login e encontrar amigos por meio de suas contas no Instagram.'
  },

  {
    linkNotices:
      "https://spacetoday.com.br/o-legado-do-helicoptero-ingenuity-em-marte/",
    cardImg:
      "https://spacetoday.com.br/wp-content/uploads/2023/05/ingenuity.jpg",
    altImgCard: "Imagem do Helicóptero Ingenuity",
    tittleCard: "O Legado do Helicóptero Ingenuity Em Marte",
    descriptionCard:
      "Em 19 de abril de 2021, um pequeno helicóptero chamado Ingenuity fez história ao realizar o primeiro voo motorizado e controlado em outro planeta.",
  },
];

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
}

// Script original do Swiper "Freemode" (desativado)

/*var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }); */
