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
      "https://spacetoday.com.br/inteligencia-artificial-no-estudo-do-campo-magnetico-solar/",
    cardImg:
      "https://spacetoday.com.br/wp-content/uploads/2023/07/ia_campo_magnetico_sol_01.jpg",
    altImgCard: "Imagem ilustrativa do campo magnético solar",
    tittleCard: "Inteligência Artificial No Estudo Do Campo Magnético Solar",
    descriptionCard:
      "Cientistas da Universidade de Graz e do Skoltech alcançaram um avanço significativo na física solar, conforme publicado na revista Nature Astronomy.",
  },

  {
    linkNotices:
      "https://spacetoday.com.br/elon-musk-fala-das-grandes-atualizacoes-do-starship/",
    cardImg:
      "https://spacetoday.com.br/wp-content/uploads/2023/06/starship_01.png",
    altImgCard: "Imagem do foguete Starship",
    tittleCard: "Elon Musk Fala Das Grandes Atualizações do Starship",
    descriptionCard:
      "A SpaceX precisará de mais seis semanas ou mais para concluir a implementação de centenas de mudanças em seu foguete Super Heavy-Starship e na gigantesca plataforma de lançamento do Texas.",
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

  {
    linkNotices:
      "https://spacetoday.com.br/james-webb-estuda-em-detalhe-um-mini-netuno/",
    cardImg:
      "https://spacetoday.com.br/wp-content/uploads/2023/06/1-hazyminineptune-16.jpg",
    altImgCard: "Imagem do Mini-Netuno ",
    tittleCard: "James Webb Estuda Em Detalhe Um Mini-Netuno",
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
      "A procura por bactérias e entendimentos sobre o manto terrestre na ISS",
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
      "Nasa divulga foto deslumbrante de lagoa no RS diretamente do espaço",
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
      "Entenda a foto comemorativa do primeiro ano de atividade do James Webb",
    descriptionCard:
      "Nova imagem apresenta a região de formação estelar mais próxima da Terra, no complexo de nuvens Rho Ophiuchi.",
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



function openNav() {
  document.getElementById("side_nav").style.width = "25%";
  // document.getElementById("#").style.marginLeft = "#";

  const navbar = document.querySelector('.navbar-header')
  navbar.style.transition = 'all 0.9s ease'

  const body = document.querySelector('body')
  body.style.marginLeft = '21rem'
  body.style.transition = 'all 0.5s ease-in-out'

  const menuDesktop1 = document.querySelector('#menu-desktop')
  menuDesktop1.style.display = 'none'

  const setasCarrossel = document.querySelector('.swiper-button-prev')
  setasCarrossel.style.display = 'none'

  const setasCarrossel2 = document.querySelector('.swiper-button-next')
  setasCarrossel2.style.display = 'none'
  
  //Encostar o carrossel ao sidebar:
  const carrossel = document.querySelector('.container-notices')
  carrossel.style.marginLeft = '-50px'


}
function closeNav() {
  document.getElementById("side_nav").style.width = "0";
  // document.getElementById("#").style.marginLeft = "#";
  
  const body = document.querySelector('body')
  body.style.marginLeft = '0'
  body.style.transition = 'all 0.5s ease-in-out'

  const navbar = document.querySelector('.navbar-header')
  navbar.style.transition = 'all 0.5s ease'

  const menuDesktop1 = document.querySelector('#menu-desktop')
  menuDesktop1.style.display = 'block'

  const setasCarrossel = document.querySelector('.swiper-button-prev')
  setasCarrossel.style.display = 'block'

  const setasCarrossel2 = document.querySelector('.swiper-button-next')
  setasCarrossel2.style.display = 'block'
  
  //Voltar o carrossel para posição padrão, após fechar o sidebar
  const carrossel = document.querySelector('.container-notices')
  carrossel.style.marginLeft = '0px'
}


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