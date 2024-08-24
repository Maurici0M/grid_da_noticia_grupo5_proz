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
        linkNotices: 'https://www.tudocelular.com/android/noticias/n225049/x-twitter-anuncia-fim-operacoes-no-brasil.html',
        cardImg: 'https://t2.tudocdn.net/677192?w=646&h=284',
        altImgCard: 'Logo do Twitter X',
        tittleCard: 'X (Twitter) anuncia encerramento das operações no Brasil, mas seguirá disponível aos usuários.',
        descriptionCard: 'O X (Twitter) comunicou o fim das suas atividades oficiais no Brasil. A decisão vem após a rede social de Elon Musk se negar a cumprir uma decisão judicial do Supremo Tribunal Federal (STF).',
    },

    {
        linkNotices: 'https://g1.globo.com/tecnologia/noticia/2023/07/13/bard-o-chatgpt-do-google-e-lancado-no-brasil-veja-como-funciona.ghtml',
        cardImg: 'https://googlediscovery.com/wp-content/uploads/bard-2-800x500.jpg',
        altImgCard: 'Logo do Google Bard',
        tittleCard: 'Bard, o "ChatGPT do Google", é lançado no Brasil; veja como funciona.',
        descriptionCard: 'O Bard, ferramenta de inteligência artificial do Google, foi lançado nesta quinta-feira (13) no Brasil. O serviço, que funciona como o ChatGPT, é gratuito e chega ao país pouco mais de três meses após ser lançado nos Estados Unidos e no Reino Unido.',
    },

    {
        linkNotices: 'https://www.estadao.com.br/link/discord-o-que-e-e-como-funciona-o-app-para-gamers-que-virou-foco-de-abusos-contra-jovens/',
        cardImg:'https://t.ctcdn.com.br/OBqzxQ888c3zUJEzGrxu4jjioOo=/512x288/smart/filters:format(webp)/i525670.png',
        altImgCard:'Logo do aplicativo Discord',
        tittleCard: 'Discord: O que é e como funciona o app para gamers que virou foco de abusos contra jovens.',
        descriptionCard: 'Plataforma ganhou popularidade entre os jovens por transmissões ao vivo de vídeos das partidas, mas virou mecanismo da ação de criminosos para subornar menores.'
    },

    {
        linkNotices: 'https://www.b9.com.br/163580/samsung-desafia-lealdade-ao-iphone-com-parodia-de-terror-em-campanha-do-galaxy-z-flip-5/',
        cardImg: 'https://www.sammobile.com/wp-content/uploads/2023/07/Galaxy-Z-Flip-Join-the-Flip-Side.jpg',
        altImgCard: 'Imagem novo smartphone Samsung',
        tittleCard: 'Samsung desafia lealdade ao iPhone com paródia de terror em campanha do Galaxy Z Flip 5.',
        descriptionCard: '"Join the Flip Side" brinca com quem diz que "jamais trocaria meu smartphone".',
    },

    {
        linkNotices: 'https://www.hardware.com.br/noticias/2023-06/marvel-e-criticada-por-usar-inteligencia-artificial-para-criar-abertura-de-serie.html',
        cardImg: 'https://www.hardware.com.br/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-22-at-11.11.20.jpeg',
        altImgCard: 'Imagem da nova série Marvel: Invasão Secreta',
        tittleCard: 'Marvel é criticada por usar inteligência artificial para criar abertura de série.',
        descriptionCard: 'A controvérsia surgiu após a revelação de que a Marvel usou IA para criar a sequência de abertura de sua nova série, “Invasão Secreta”.'
    },

    {
        linkNotices: 'https://tecnoblog.net/noticias/2023/06/22/para-ficar-com-activision-microsoft-admite-que-xbox-perdeu-guerra-dos-consoles/',
        cardImg: 'https://files.tecnoblog.net/wp-content/uploads/2022/04/xbox-x_capa-2_tb-1060x596.png',
        altImgCard: 'Imagem do console Microsoft Xbox',
        tittleCard: 'Para ficar com Activision, Microsoft admite que Xbox perdeu guerra dos consoles.',
        descriptionCard: 'Em um documento enviado à corte, a Microsoft revela que, desde que foi lançado, em 2001, “o console Xbox ficou consistentemente com a terceira posição entre as três concorrentes, atrás de PlayStation e Nintendo nas vendas”.',
    },

    {
        linkNotices: 'https://www.gov.br/governodigital/pt-br/vlibras/',
        cardImg: '../assets/images/Suite_Vlibras_imagem.png',
        altImgCard: 'Avatares do VLibras: Guga, Ícaro e Hozana',
        tittleCard: 'VLibras - Tradução automática para tornar a Web mais acessível.',
        descriptionCard: 'As aplicações da Suíte VLibras permitem que pessoas surdas acessem conteúdo multimídia em sua língua natural de comunicação, o que contribui para com a acessibilidade de computadores, dispositivos móveis e páginas Web.'
    },

    {
        linkNotices: 'https://www.infomoney.com.br/negocios/sony-vai-investir-us-22-bilhoes-em-pesquisa-e-desenvolvimento-na-unidade-de-games/',
        cardImg: 'https://www.infomoney.com.br/wp-content/uploads/2023/07/GettyImages-1438610077.jpg?w=594&quality=70&strip=all',
        altImgCard: 'Imagem do controle de PS5',
        tittleCard: 'Sony vai investir US$ 2,2 bilhões em pesquisa e desenvolvimento na unidade de games.',
        descriptionCard: 'A rival Microsoft recorreu a aquisições, como a operação com a Activision Blizzard, para fazer frente à Sony, que segue como líder do setor.',
    },

    {
        linkNotices: 'https://g1.globo.com/tecnologia/noticia/2023/07/05/instagram-threads-rival-twitter.ghtml',
        cardImg: 'https://s2-g1.glbimg.com/XvJgv46mktFspeaOXTWubWa87Mg=/0x0:6000x3375/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/y/6/jynisCQqywFngyjBH5Jg/aplicativo-threads.png',
        altImgCard: 'Imagens da nova rede social: "Threads"',
        tittleCard: 'Instagram lança Threads, rede social para rivalizar com o Twitter.',
        descriptionCard: 'Rede social foi revelada dias após o Twitter anunciar um limite para leitura de posts. Usuários poderão fazer login e encontrar amigos por meio de suas contas no Instagram.'
    },

    {
        linkNotices: 'https://www.oficinadanet.com.br/playstation/45086-playstation-2-fatos-curiosidades',
        cardImg: 'https://www.oficinadanet.com.br/media/post/45086/750/playstation-2.jpg',
        altImgCard: 'Imagem do console PlayStation 2',
        tittleCard: 'PlayStation 2 completa 23 anos: relembre fatos e curiosidades.',
        descriptionCard: 'Com um design icônico e jogos inesquecíveis, como GTA San Andreas, Final Fantasy X e Metal Gear Solid 2, o PlayStation 2 tornou-se um dos consoles mais populares de todos os tempos.'
    },

    {
        linkNotices: 'https://olhardigital.com.br/2019/04/11/noticias/o-que-e-o-wikileaks-saiba-mais-sobre-o-site-criado-por-julian-assange/',
        cardImg: 'https://proxy.olhardigital.com.br/wp-content/uploads/2019/04/20190411065012.jpg',
        altImgCard: 'Imagem de Julian Assange - Criador do Wikileaks',
        tittleCard: 'O que é o WikiLeaks? Saiba mais sobre o site criado por Julian Assange.',
        descriptionCard: 'O WikiLeaks é uma organização que divulga na internet documentos confidenciais obtidos de empresas e agências governamentais do mundo todo. Segundo o ativista, os processos aos quais ele responde têm a ver, principalmente, com o papel do WikiLeaks na divulgação de arquivos secretos de países e corporações.',
    },

    {
        linkNotices: 'https://agenciabrasil.ebc.com.br/geral/noticia/2024-07/entenda-falha-no-sistema-da-crowdstrike-que-causou-apagao-cibernetico',
        cardImg: 'https://imagens.ebc.com.br/JuyJu4pOSOAky0SReX3dQQGkWw4=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2022-05-06t162338z_1_lynxnpei450rz_rtroptp_4_data-global-bis.jpg?itok=OTPN2eAC',
        altImgCard: 'Teclado de computador iluminado por código cibernético',
        tittleCard: 'Entenda falha no sistema da CrowdStrike que causou apagão cibernético.',
        descriptionCard: 'Uma falha na atualização de conteúdo relacionada ao sensor de segurança CrowdStrike Falcon, que serve para detectar possíveis invasões de hackers, foi a causa do ataque cibernético desta sexta-feira (19), que deixou milhares de empresas e pessoas em todo o mundo sem acesso a sistemas operacionais, especialmente o Windows, da Microsoft.',
    },

    {
        linkNotices: 'https://pages.prozeducacao.com.br/proz-tecnologia',
        cardImg: 'https://s3.sa-east-1.amazonaws.com/proz-joy-class/production/instances/12de7cca531c4dbdb6e42c937f21c1a81703272239039.png',
        altImgCard: 'Logo Portal Tech - Proz, Amazon e Meta',
        tittleCard: 'Capacitação Gratuita em Introdução à Programação.',
        descriptionCard: 'O Portal Tech é um programa criado pela AWS, em duas fases, para abrir um portal de acesso ao conhecimento sobre algumas das tecnologias que mais crescem no mundo: a computação em nuvem, o metaverso e o marketing digital.',
    },

]


/*for (let index = 0; index < arrayCarrossel.length; index++) {
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
    
}*/
