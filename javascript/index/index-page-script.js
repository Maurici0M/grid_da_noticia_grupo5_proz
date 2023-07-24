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

function openNav() {
  document.getElementById("side_nav").style.width = "25%";
}
function closeNav() {
  document.getElementById("side_nav").style.width = "0";
}





// Barra de Pesquisa

// Função para buscar os resultados na array
function pesquisar(query) {
  // Converte a palavra digitada para letras minúsculas
  query = query.toLowerCase();
  
  // Cria uma array vazia para armazenar os resultados
  var results = [];
  // Percorre a array de dados
  for (var i = 0; i < arrayCarrossel.length; i++) {
  // Converte o nome e a descrição do objeto para letras minúsculas
  var tittle = arrayCarrossel[i].tittleCard.toLowerCase();
  var description = arrayCarrossel[i].descriptionCard.toLowerCase();
  // Verifica se a palavra digitada está contida no nome ou na descrição do objeto
  if (tittle.includes(query) || description.includes(query)) {
  // Adiciona o objeto à array de resultados
  results.push(arrayCarrossel[i]);
  }
  }
  // Retorna a array de resultados
  return results;
  }


// Função para mostrar os resultados na página
function showResults(results) {
  // Seleciona o elemento que vai conter os resultados
  var resultsDiv = document.getElementById("search-results");
  // Limpa o conteúdo do elemento
  resultsDiv.innerHTML = "";
  // Verifica se há algum resultado
  if (results.length > 0) {
  // Percorre a array de resultados
  for (var i = 0; i < results.length; i++) {
  // Cria um elemento div para cada resultado
  var resultDiv = document.createElement("div");
  resultDiv.className = "search-result";

  var resultName = document.createElement('div')
  resultName.classList.add('card23')

  //Selecionando a div que mostrará os resultados na tela, e adicionando estilos para os conteúdos se ajustarem melhor na tela.
  var resultadosMostradosNaTela = document.querySelector('.search-results')
  resultadosMostradosNaTela.style.display = 'flex'
  resultadosMostradosNaTela.style.width = 'auto'
  resultadosMostradosNaTela.style.justifyContent = 'center'
  resultadosMostradosNaTela.style.flexWrap = 'wrap'
  resultadosMostradosNaTela.style.marginBottom = '10%'

  resultName.innerHTML = `
  <div class = 'card'>
      <a class="link-notices" target="_blank" href="${results[i].linkNotices}">
          <div class="image-content">
              <span class="overlay">
                  <div class="card-image">
                      <img class="card-img" src="${results[i].cardImg}" alt="${results[i].altImgCard}">
                  </div>
              </span>
          </div>
          <div class="card-content">
              <h3 class="tittle_card">
                  ${results[i].tittleCard}
              </h3>
              <p class="description_card">
                  ${results[i].descriptionCard}
              </p>
          </div>
      </a>
  </div>
`
  // Adiciona os elementos ao div do resultado
  resultDiv.appendChild(resultName);

  // Adiciona o div do resultado ao div dos resultados
  resultsDiv.appendChild(resultDiv);

  //reativando as páginas do site
  let htmlCarrossel = document.querySelector('.container-notices')
  let adsSection = document.querySelector('.ads-section')
  let containerNoticesPosAds = document.querySelector('.container_notices_pos_ads')
  let botaoCarregarMais = document.querySelector('.btn-ver-mais')

  htmlCarrossel.classList.remove ('desativado')
  adsSection.classList.remove ('desativado')
  containerNoticesPosAds.classList.remove ('desativado')
  botaoCarregarMais.classList.remove ('desativado')
  }
  
  }else {
  // Cria um elemento p para informar que não há resultados
  var noResults = document.createElement("div");
  noResults.classList.add('no-results-messenger-group')
 /* noResults.textContent = "Desculpe, não encontramos resultados para sua pesquisa.";*/
  noResults.innerHTML = `
  <img class = 'no-results-img' src="../assets/images/tech-pesquisa-nao-encontrada-robo.png" alt="Resultado de Pesquisa Não Encontrado.">

  <div class = 'text-no-results'>
      <p>
          Desculpe, não conseguimos obter resultados para sua pesquisa.
      </p>
      <br>
      <p>
          Você pode tentar pesquisar novamente, ver as principais notícias desta página, ou navegar por nossos outros temas disponíveis.
      </p>
  </div>
  `
  // Adiciona o elemento ao div dos resultados
  resultsDiv.appendChild(noResults);

  //desativando as páginas do site
  let htmlCarrossel = document.querySelector('.container-notices')
  let adsSection = document.querySelector('.ads-section')
  let containerNoticesPosAds = document.querySelector('.container_notices_pos_ads')
  let botaoCarregarMais = document.querySelector('.btn-ver-mais')

  htmlCarrossel.classList.add ('desativado')
  adsSection.classList.add ('desativado')
  containerNoticesPosAds.classList.add ('desativado')
  botaoCarregarMais.classList.add ('desativado')
  }
}


// Seleciona o elemento da barra de pesquisa
var searchInput = document.getElementById("search");

// Seleciona o elemento do botão de busca
var searchButton = document.getElementById("search-button");
// Adiciona um evento de clique ao botão de busca
searchInput.addEventListener("keyup", function() {
// Obtém o valor da barra de pesquisa
var query = searchInput.value;
// Verifica se o valor não está vazio

if (query) {
// Busca os resultados na array de dados
var results = pesquisar(query);
// Mostra os resultados na página
showResults(results);
}

else {
  let resultsDiv = document.getElementById("search-results");
  resultsDiv.style.display = 'none'


  //Reativando o site caso o usuário exclua os dados do input selecionando-os e depois deletando de uma só vez
  let htmlCarrossel = document.querySelector('.container-notices')
  let adsSection = document.querySelector('.ads-section')
  let containerNoticesPosAds = document.querySelector('.container_notices_pos_ads')
  let botaoCarregarMais = document.querySelector('.btn-ver-mais')

  htmlCarrossel.classList.remove ('desativado')
  adsSection.classList.remove ('desativado')
  containerNoticesPosAds.classList.remove ('desativado')
  botaoCarregarMais.classList.remove ('desativado')
}
});







