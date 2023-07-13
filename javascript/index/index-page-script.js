// Carrosel - Código de funcionamento
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
  fade: "true",
  gragCursor: "true",
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    660: {
      slidesPerView: 2,
    },

    950: {
      slidesPerView: 3,
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
      "https://www.oficinadanet.com.br/playstation/45086-playstation-2-fatos-curiosidades",
    cardImg:
      "https://www.oficinadanet.com.br/media/post/45086/750/playstation-2.jpg",
    altImgCard: "Imagem do console PlayStation 2",
    tittleCard:
      "PlayStation 2 completa 23 anos: relembre fatos e curiosidades.",
    descriptionCard:
      "Com um design icônico e jogos inesquecíveis, como GTA San Andreas, Final Fantasy X e Metal Gear Solid 2, o PlayStation 2 tornou-se um dos consoles mais populares de todos os tempos.",
  },

  {
    linkNotices: "https://www.gov.br/governodigital/pt-br/vlibras/",
    cardImg:
      "https://www.gov.br/governodigital/pt-br/vlibras/imagens/avatar.png",
    altImgCard: "Avatares do VLibras: Guga, Ícaro e Hozana",
    tittleCard:
      "VLibras - Tradução automática para tornar a Web mais acessível.",
    descriptionCard:
      "As aplicações da Suíte VLibras permitem que pessoas surdas acessem conteúdo multimídia em sua língua natural de comunicação, o que contribui para com a acessibilidade de computadores, dispositivos móveis e páginas Web.",
  },

  {
    linkNotices:
      "https://olhardigital.com.br/2020/11/03/noticias/pesquisadores-dizem-que-o-google-usa-recaptcha-para-captar-dados/",
    cardImg:
      "https://proxy.olhardigital.com.br/wp-content/uploads/2020/11/20201103064551.jpg",
    altImgCard: 'Imagem da verificação: "Não sou um robô"',
    tittleCard:
      "Pesquisadores dizem que o Google usa reCAPTCHA para coletar dados.",
    descriptionCard:
      "Segundo analistas, ferramenta anti-spam tem sido usada para criar rastros de navegação e direcionar anúncio aos usuários.",
  },

  {
    linkNotices:
      "https://tecnoblog.net/noticias/2023/06/22/para-ficar-com-activision-microsoft-admite-que-xbox-perdeu-guerra-dos-consoles/",
    cardImg:
      "https://files.tecnoblog.net/wp-content/uploads/2022/04/xbox-x_capa-2_tb-1060x596.png",
    altImgCard: "Imagem do console Microsoft Xbox",
    tittleCard:
      "Para ficar com Activision, Microsoft admite que Xbox perdeu guerra dos consoles.",
    descriptionCard:
      "Em um documento enviado à corte, a Microsoft revela que, desde que foi lançado, em 2001, “o console Xbox ficou consistentemente com a terceira posição entre as três concorrentes, atrás de PlayStation e Nintendo nas vendas”.",
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
