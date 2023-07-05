/*const arraySlider = [
    {
        linkNotices: 'https://www.hardware.com.br/noticias/2023-06/marvel-e-criticada-por-usar-inteligencia-artificial-para-criar-abertura-de-serie.html',
        imgCard: 'https://www.hardware.com.br/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-22-at-11.11.20.jpeg',
        altImgCard: 'Imagem da nova série da Marvel: "Invasão Secreta"',
        tittle_card: 'Marvel é criticada por usar inteligência artificial para criar abertura de série.',
        description_card: 'A controvérsia surgiu após a revelação de que a Marvel usou IA para criar a sequência de abertura de sua nova série, “Invasão Secreta”.'
    },
    {
        linkNotices: 'https://www.estadao.com.br/link/discord-o-que-e-e-como-funciona-o-app-para-gamers-que-virou-foco-de-abusos-contra-jovens/',
        imgCard: 'https://t.ctcdn.com.br/OBqzxQ888c3zUJEzGrxu4jjioOo=/512x288/smart/filters:format(webp)/i525670.png',
        altImgCard:'Logo do aplicativo Discord',
        tittle_card: 'Discord: O que é e como funciona o app para gamers que virou foco de abusos contra jovens.',
        description_card: 'Plataforma ganhou popularidade entre os jovens por transmissões ao vivo de vídeos das partidas, mas virou mecanismo da ação de criminosos para subornar menores.'
    },
    
    {
        linkNotices: 'https://tecnoblog.net/noticias/2023/06/22/para-ficar-com-activision-microsoft-admite-que-xbox-perdeu-guerra-dos-consoles/',
        imgCard: 'https://files.tecnoblog.net/wp-content/uploads/2022/04/xbox-x_capa-2_tb-1060x596.png',
        altImgCard: 'Imagem do console Microsoft Xbox',
        tittle_card: 'Para ficar com Activision, Microsoft admite que Xbox perdeu guerra dos consoles.',
        description_card: 'Em um documento enviado à corte, a Microsoft revela que, desde que foi lançado, em 2001, “o console Xbox ficou consistentemente com a terceira posição entre as três concorrentes, atrás de PlayStation e Nintendo nas vendas”.'
    },
    ]
    
    for (let index = 0; index < arraySlider.length; index++) {
    
    // criar elemento (foi criado uma div)
    let divContainerNotices = document.createElement('div')
    
    // a div criada recebeu uma classe
    divContainerNotices.className = 'container_notices'
    
    
    // manipular elemento (adicionar conteúdo ao elemento selecionado)
    
    divContainerNotices.innerHTML = `
        <a class="link-notices" target="_blank" href="${arraySlider[index].linkNotices}">
            <div class="card">
                <img class="img-card" src="${arraySlider[index].imgCard}" alt="${arraySlider.altImgCard}">
                <div class="card-info">
                    <h3 class="tittle_card">
                        ${arraySlider[index].tittle_card}
                    </h3>
                    <p class="description_card">
                        ${arraySlider[index].description_card}
                    </p>
                </div>
                </a>
            </div>
        
    `
    
    // adicionar elemento na página
    let capturarElemento = document.querySelector('.container_notices')
    
    capturarElemento.appendChild(divContainerNotices)
    
    } */
    

/*Carrosel - Código de funcionamento */
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    centeredSlides: true,
    fade: 'true',
    gragCursor: 'true',
    autoplay: {
        delay: 6500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    

});  




/*Arquivos de alimentação do carrosel - Notícias que são mostradas*/

const arrayCarrossel = [

    {
        linkNotices: 'https://www.estadao.com.br/link/discord-o-que-e-e-como-funciona-o-app-para-gamers-que-virou-foco-de-abusos-contra-jovens/',
        cardImg:'https://t.ctcdn.com.br/OBqzxQ888c3zUJEzGrxu4jjioOo=/512x288/smart/filters:format(webp)/i525670.png',
        altImgCard:'Logo do aplicativo Discord',
        tittleCard: 'Discord: O que é e como funciona o app para gamers que virou foco de abusos contra jovens.',
        descriptionCard: 'Plataforma ganhou popularidade entre os jovens por transmissões ao vivo de vídeos das partidas, mas virou mecanismo da ação de criminosos para subornar menores.'
    },

    {
        linkNotices: 'https://www.gov.br/governodigital/pt-br/vlibras/',
        cardImg: 'https://www.gov.br/governodigital/pt-br/vlibras/imagens/avatar.png',
        altImgCard: 'Avatares do VLibras: Guga, Ícaro e Hozana',
        tittleCard: 'VLibras - Tradução automática para tornar a Web mais acessível.',
        descriptionCard: 'As aplicações da Suíte VLibras permitem que pessoas surdas acessem conteúdo multimídia em sua língua natural de comunicação, o que contribui para com a acessibilidade de computadores, dispositivos móveis e páginas Web.'
    },

    {
        linkNotices: 'https://olhardigital.com.br/2020/11/03/noticias/pesquisadores-dizem-que-o-google-usa-recaptcha-para-captar-dados/',
        cardImg: 'https://proxy.olhardigital.com.br/wp-content/uploads/2020/11/20201103064551.jpg',
        altImgCard: 'Imagem da verificação: "Não sou um robô"',
        tittleCard: 'Pesquisadores dizem que o Google usa reCAPTCHA para coletar dados',
        descriptionCard: 'Segundo analistas, ferramenta anti-spam tem sido usada para criar rastros de navegação e direcionar anúncio aos usuários.'
    },

    {
        linkNotices: 'https://tecnoblog.net/noticias/2023/06/22/para-ficar-com-activision-microsoft-admite-que-xbox-perdeu-guerra-dos-consoles/',
        cardImg: 'https://files.tecnoblog.net/wp-content/uploads/2022/04/xbox-x_capa-2_tb-1060x596.png',
        altImgCard: 'Imagem do console Microsoft Xbox',
        tittleCard: 'Para ficar com Activision, Microsoft admite que Xbox perdeu guerra dos consoles.',
        descriptionCard: 'Em um documento enviado à corte, a Microsoft revela que, desde que foi lançado, em 2001, “o console Xbox ficou consistentemente com a terceira posição entre as três concorrentes, atrás de PlayStation e Nintendo nas vendas”.',
    },

    {
        linkNotices: 'https://www.hardware.com.br/noticias/2023-06/marvel-e-criticada-por-usar-inteligencia-artificial-para-criar-abertura-de-serie.html',
        cardImg: 'https://www.hardware.com.br/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-22-at-11.11.20.jpeg',
        altImgCard: 'Imagem da nova série Marvel: Invasão Secreta',
        tittleCard: 'Marvel é criticada por usar inteligência artificial para criar abertura de série.',
        descriptionCard: 'A controvérsia surgiu após a revelação de que a Marvel usou IA para criar a sequência de abertura de sua nova série, “Invasão Secreta”.'
    },

    {
        linkNotices: 'https://www.oficinadanet.com.br/playstation/45086-playstation-2-fatos-curiosidades',
        cardImg: 'https://www.oficinadanet.com.br/media/post/45086/750/playstation-2.jpg',
        altImgCard: 'Imagem do console PlayStation 2',
        tittleCard: 'PlayStation 2 completa 23 anos: relembre fatos e curiosidades',
        descriptionCard: 'Com um design icônico e jogos inesquecíveis, como GTA San Andreas, Final Fantasy X e Metal Gear Solid 2, o PlayStation 2 tornou-se um dos consoles mais populares de todos os tempos.'
    },


]

for (let index = 0; index < arrayCarrossel.length; index++) {
    // Criar elemento
    let carrosselScript = document.createElement('div')

// Atribuir uma classe ao elemento (caso necessário)
carrosselScript.className = 'card swiper-slide'

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

    `

// Adicionar na página

    let selecionarClasseCarrossel = document.querySelector('.card-wrapper')

    selecionarClasseCarrossel.appendChild(carrosselScript)
    
}







/*Script original do Swiper "Freemode" (desativado)*/

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