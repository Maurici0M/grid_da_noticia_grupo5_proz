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
      "https://receitas.globo.com/receitas-da-tv/mais-voce/pudim-de-leite-condensado-4d514bb052e0b252bc00e85a.ghtml",
    cardImg:
      "https://s2-receitas.glbimg.com/z2JiB6nwO_XITDhQksL2uiAhic0=/0x0:984x765/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2020/D/m/r8XAmWTcuRAzTRMBJZ1A/pudim-de-leite-condensado.jpg",
    altImgCard: "Imagem de um pudim de leite condensado",
    tittleCard: "Pudim de leite condensado",
    descriptionCard:
      "Veja como fazer o pudim de leite condensado tradicional, que leva apenas 4 ingredientes: açúcar, leite condensado, leite e ovos. Ana Maria Braga ensina o passo a passo desta sobremesa tipicamente brasileira que vai encantar sua família.",
  },

  {
    linkNotices: 'https://g1.globo.com/tecnologia/noticia/2023/07/13/bard-o-chatgpt-do-google-e-lancado-no-brasil-veja-como-funciona.ghtml',
        cardImg: 'https://googlediscovery.com/wp-content/uploads/bard-2-800x500.jpg',
        altImgCard: 'Logo do Google Bard',
        tittleCard: 'Bard, o "ChatGPT do Google", é lançado no Brasil; veja como funciona.',
        descriptionCard: 'O Bard, ferramenta de inteligência artificial do Google, foi lançado nesta quinta-feira (13) no Brasil. O serviço, que funciona como o ChatGPT, é gratuito e chega ao país pouco mais de três meses após ser lançado nos Estados Unidos e no Reino Unido.',
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
      "https://guia.folha.uol.com.br/restaurantes/2023/07/inspirada-em-barbie-doceria-pikurruchas-em-sp-anuncia-doces-e-drinques-cor-de-rosa.shtml",
    cardImg:
      "https://f.i.uol.com.br/fotografia/2023/07/14/168935808464b18f049419d_1689358084_3x2_lg.jpg",
    altImgCard: "Imagem da doceria Pikurrucha's",
    tittleCard:
      "Inspirada em 'Barbie', doceria Pikurrucha's, em SP, anuncia doces e drinques cor-de-rosa.",
    descriptionCard:
      "Pioneira no conceito do espaço instagramável, a confeitaria decidiu ampliar o ambiente cor-de-rosa que dialoga com a boneca para seu cardápio, oferecendo opções como um café rosa com brigadeiro branco e pipoca doce.",
  },

  {
    linkNotices:
      "https://g1.globo.com/tecnologia/noticia/2023/07/05/instagram-threads-rival-twitter.ghtml",
    cardImg:
      "https://s2-g1.glbimg.com/XvJgv46mktFspeaOXTWubWa87Mg=/0x0:6000x3375/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/y/6/jynisCQqywFngyjBH5Jg/aplicativo-threads.png",
    altImgCard: 'Imagens da nova rede social: "Threads"',
    tittleCard:
      "Instagram lança Threads, rede social para rivalizar com o Twitter.",
    descriptionCard:
      "Rede social foi revelada dias após o Twitter anunciar um limite para leitura de posts. Usuários poderão fazer login e encontrar amigos por meio de suas contas no Instagram.",
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

  {
    linkNotices:
      "https://receitas.globo.com/blog/alimentacao-e-saude/tapioca-engorda-conheca-mitos-e-verdades-do-alimento.ghtml",
    cardImg:
      "https://s2-receitas.glbimg.com/LNr5zJu-Fo1pY5TZjk2iCEOS2PE=/0x0:5184x3456/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/B/J/TwmuA3QfaNQTXLzLwETQ/rapioca-recheada-com-morango.jpg",
    altImgCard: "Imagem de uma tapioca",
    tittleCard: "Tapioca engorda? Conheça mitos e verdades do alimento.",
    descriptionCard:
      "A tapioca ganhou destaque em muitas receitas e virou parte do cardápio de quem busca uma alimentação mais saudável. Feita da massa da mandioca, ela também é consumida por quem pratica exercícios físicos, já que funciona como pré e pós-treino.",
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

function openNav() {
  document.getElementById("side_nav").style.width = "25%";
}
function closeNav() {
  document.getElementById("side_nav").style.width = "0";
}

