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
    delay: 7340,
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
      "https://metropolitanafm.com.br/televisao/chef-erick-jacquin-fala-o-que-nao-devia-e-expoe-preferencia-por-outro-programa-muito-melhor",
    cardImg:
      "https://metropolitanafm.com.br/wp-content/uploads/2023/05/img_chef_jacquin_2023-600x338.jpg",
    altImgCard: "Foto de Erick Jacquin",
    tittleCard:
      'Chef Erick Jacquin fala o que não devia e expõe preferência por outro programa: "Muito melhor".',
    descriptionCard:
      "Erick Jacquin, um dos jurados do MasterChef Brasil, revelou quais são seus programas favoritos na televisão. Em entrevista, o cozinheiro disse que sente falta de ter um espaço próprio na telinha.",
  },

  {
    linkNotices:
      "https://www.gov.br/turismo/pt-br/assuntos/noticias/sabores-do-brasil-culinaria-brasileira-e-um-dos-principais-impulsionadores-do-turismo",
    cardImg:
      "https://www.gov.br/turismo/pt-br/assuntos/noticias/sabores-do-brasil-culinaria-brasileira-e-um-dos-principais-impulsionadores-do-turismo/PortalMTur.png/@@images/2f30bc58-6dbb-4a38-8d06-8dc2ced1dc78.png",
    altImgCard: "Foto de comidas brasileiras",
    tittleCard:
      'Sabores do Brasil: culinária brasileira é um dos principais impulsionadores do turismo.',
    descriptionCard:
      "Quatro cidades brasileiras integram a Rede Brasileira de Cidades Criativas da Unesco na categoria gastronômica e revelam ser um destaque em combinação de sabores únicos do país.",
  },

  {
    linkNotices:
      "https://metropolitanafm.com.br/televisao/realities/masterchef/masterchef-brasil-2023-confira-o-que-rolou-no-episodio-de-estreia",
    cardImg:
      "https://metropolitanafm.com.br/wp-content/uploads/2023/05/IMG-Estreia-MasterChef-Brasil-2023-600x338.jpg",
    altImgCard: "Imagem dos jurados do Master Chef",
    tittleCard:
      "MasterChef Brasil 2023: Confira o que rolou no episódio de estreia!",
    descriptionCard:
      "O primeiro episódio desta temporada revisitou o primeiro episódio do reality show culinário, há 10 anos. E, trouxe 90 candidatos para participar da primeira etapa seletiva, que definiu quem entra oficialmente na disputa culinária.",
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

  {
    linkNotices:
      "https://receitas.globo.com/tipos-de-prato/bolos/bolo-de-cenoura-de-liquidificador-4e80cb6a8811965be7003c43.ghtml",
    cardImg:
      "https://s2-receitas.glbimg.com/CfHtIpRubb2sm1XzO65Vwp711HA=/0x0:1280x800/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/9/N/bmnJNgR5G0K2QmEYFkPQ/bolo-de-cenoura-receita.jpg",
    altImgCard: "Imagem de um bolo de cenoura",
    tittleCard: "Aprenda como fazer bolo de cenoura de liquidificador.",
    descriptionCard:
      "O bolo de cenoura é uma opção simples e prática para o café da manhã, lanche da tarde ou para uma ocasião especial com famílias e amigos. Essa receita é feita no liquidificador e fica pronta em menos de 1 hora.",
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
    linkNotices: "https://panelaterapia.com/2023/07/chocolate-quente-2.html",
    cardImg:
      "https://panelaterapia.com/wp-content/uploads/2023/07/chocolate2.png",
    altImgCard: "Imagem de um chocolate quente",
    tittleCard: "Receitas de Chocolate Quente.",
    descriptionCard:
      "Se você nunca fez um chocolate quente caprichado, vamos começar pela receita básica que é bastante simples e requer apenas alguns poucos ingredientes, mas que fica muito boa.",
  },

  {
    linkNotices:
      "https://receitas.globo.com/receitas-da-tv/mais-voce/pudim-de-leite-condensado-4d514bb052e0b252bc00e85a.ghtml",
    cardImg:
      "https://s2-receitas.glbimg.com/z2JiB6nwO_XITDhQksL2uiAhic0=/0x0:984x765/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2020/D/m/r8XAmWTcuRAzTRMBJZ1A/pudim-de-leite-condensado.jpg",
    altImgCard: "Imagem de um pudim de leite condensado",
    tittleCard: "Pudim de leite condensado.",
    descriptionCard:
      "Veja como fazer o pudim de leite condensado tradicional, que leva apenas 4 ingredientes: açúcar, leite condensado, leite e ovos. Ana Maria Braga ensina o passo a passo desta sobremesa tipicamente brasileira que vai encantar sua família.",
  },

  {
    linkNotices:
      "https://www.gov.br/turismo/pt-br/assuntos/noticias/a-arte-e-o-sabor-das-cachacas-brasileiras-que-conquistam-o-brasil-e-o-mundo",
    cardImg:
      "https://www.gov.br/turismo/pt-br/assuntos/noticias/a-arte-e-o-sabor-das-cachacas-brasileiras-que-conquistam-o-brasil-e-o-mundo/PortalMTur1.png/@@images/0c711d59-9dc5-44cf-8b03-6689da228745.png",
    altImgCard: "Imagem de bebidas alcoólicas brasileras",
    tittleCard: "A arte e o sabor das cachaças brasileiras que conquistam o Brasil e o mundo.",
    descriptionCard:
      "No Dia Nacional de uma das bebidas mais populares no Brasil, conheça produtos nacionais premiados e reconhecidos.",
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


