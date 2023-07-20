// Carrossel - Código de funcionamento (adaptado para a página 'Sobre nós')
var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 1,
  centeredSlides: true,
  fade: "true",
  gragCursor: "true",
  autoplay: {
    delay: 6500,
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
});

//Arquivos de alimentação do mini carrossel lateral - Sobre Nós

const arrayMiniCarrossel = [
  {
    href: "culinaria.html",
    cardImg:
      "https://www.tskf.com.br/blog/wp-content/uploads/2018/04/181069-x-curiosidades-sobre-a-culinaria-da-china-para-voce-conhecer.jpg",
  },

  {
    href: "espaco_sideral.html",
    cardImg: "https://images2.alphacoders.com/588/588604.jpg",
  },
  {
    href: "tecnologia.html",
    cardImg: "https://images7.alphacoders.com/865/865098.jpg",
  },
];

for (let index = 0; index < arrayMiniCarrossel.length; index++) {
  // Criar elemento
  let carrosselScript = document.createElement("div");

  // Atribuir uma classe ao elemento (caso necessário)
  carrosselScript.className = "card swiper-slide";

  // Manipular elemento
  carrosselScript.innerHTML = `
        <a href="${arrayMiniCarrossel[index].href}">
            <img class="img-card" src="${arrayMiniCarrossel[index].cardImg}" alt="not informed">
        </a>
    `;

  // Adicionar na página

  let selecionarClasseCarrossel = document.querySelector(".card-wrapper");

  selecionarClasseCarrossel.appendChild(carrosselScript);
}

// Arquivos de texto que ficam ao lado do mini carrosel

const arrayTextoSobreNos = [
  {
    primeiroParagrafo:
      'O <a target="_blank" href="index.html"><strong class="nome-jornal-grifado">Grid da Notícia</strong></a> é um site indexador de notícias, desenvolvido por estudantes de tecnologia, que tem o objetivo de trazer as principais informações sobre: <a href="culinaria.html">Culinária</a>, <a href="espaco_sideral.html">Espaço Sideral</a> e <a href="tecnologia.html">Tecnologia</a>.',
  },

  {
    segundoParagrafo:
      'O nosso principal propósito, é o de promover um site que seja adaptável, seguro e acessível, onde vocês possam se informar das principais notícias dos temas que temos disponíveis, sem se preocupar com as "fake news", nós não tratamos nossos apoiadores como produtos, por isso, muito mais vale seriedade e credibilidade do que "clicks".',
  },
];

//Criar elemento

let textoSobreNos = document.createElement("div");

//Manipular elemento

textoSobreNos.innerHTML = `
    <p>
        ${arrayTextoSobreNos[0].primeiroParagrafo}
    </p>

    <br>

    <p>
        ${arrayTextoSobreNos[1].segundoParagrafo}
    </p>

`;

let selecionarDivTextoSobreNos = document.querySelector(".texto-sobre-nos");

selecionarDivTextoSobreNos.appendChild(textoSobreNos);

// Cards

const arrayCardsSobreNos = [
  {
    img: "https://www.valuehost.com.br/blog/wp-content/uploads/2019/02/274034-erro-de-http-wordpress-como-corrigir.jpg",
    altImg: "",
    titleCard: "Adaptáveis:",
    descriptionCard:
      "Somos <strong>adaptáveis</strong>, pois cada tema tem sua própria personalização e identidade, o que mostra o cuidado que temos com a experiência de navegação em nosso site.",
  },

  {
    img: "https://strati.com.br/wp-content/uploads/2021/12/32-topo-seguranca-da-informacao.jpg",
    altImg: "",
    titleCard: "Seguro:",
    descriptionCard:
      'O Grid da Notícia é <strong>seguro</strong>, exatamente por prezar pela seriedade e credibilidade do que por "clicks". <br> <br> Até nossos parceiros publicitários passam por um rigoroso processo de aprovação, para poderem anunciar conosco, assim como, as notícias que são divulgadas em nossas páginas.',
  },

  {
    img: "https://tribox.com.br/wp-content/uploads/2018/01/capa-ok.jpg",
    altImg: "",
    titleCard: "Acessivel:",
    descriptionCard:
      'De nada adianta apoiarmos a causa de mais <strong>acessibilidade</strong>, se não fizermos a nossa parte. <br> <br> Por isso, sentimos orgulho de contar com o plug-in de acessibilidade <strong> <a href="https://www.gov.br/governodigital/pt-br/vlibras" target="_blank" rel="noopener noreferrer">VLibras</a></strong> em nosso site.',
  },
];

for (let index = 0; index < arrayCardsSobreNos.length; index++) {
  // Criar elemento:
  let cardsSobreNos = document.createElement("div");

  // Atribuir uma classe ao elemento:
  cardsSobreNos.className = "card-somos";

  // Manipular elemento:
  cardsSobreNos.innerHTML = `
        <img class="img-card" src="${arrayCardsSobreNos[index].img}" alt="${arrayCardsSobreNos[index].altImg}">

        <div class="card-info">
            <h3 class="title_card">
                ${arrayCardsSobreNos[index].titleCard}
            </h3>

            <p class="description_card">
                ${arrayCardsSobreNos[index].descriptionCard}
            </p>
        </div>
        
    `;

  //

  // Adicionar elemento:
  let sectionCardsSobreNosSomos = document.querySelector(
    ".cards-sobre-nos-somos"
  );
  sectionCardsSobreNosSomos.appendChild(cardsSobreNos);
}

function openNav() {
  document.getElementById("side_nav").style.width = "25%";
}
function closeNav() {
  document.getElementById("side_nav").style.width = "0";
}
