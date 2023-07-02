const arraySlider = [
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
    
    }
    
    