const arrayMiniNotices = [
    {
        linkNotices: 'https://guia.folha.uol.com.br/restaurantes/2023/07/sal-gastronomia-de-henrique-fogaca-vai-migrar-de-higienopolis-para-os-jardins.shtml',

        cardImg: 'https://f.i.uol.com.br/fotografia/2023/07/10/168900531764ac2d0592b88_1689005317_3x2_md.jpg' ,

        altImg: 'Foto Chef Henrique Fogaça',

        tittleCard: ' Sal Gastronomia, de Henrique Fogaça, vai migrar de Higienópolis para os Jardins.',

        descriptionCard: '',

    },

    {
        linkNotices: 'https://g1.globo.com/tecnologia/noticia/2023/03/08/hackers-causaram-prejuizos-a-cerca-de-25-das-empresas-brasileiras-em-2022-diz-pesquisa.ghtml',

        cardImg: 'https://s2-g1.glbimg.com/Vo9n1UdeaUVfSISB0rZN7l59bLA=/0x0:5568x3712/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/s/8/3lGjCjSm2rfee1HJXBfA/age20230119042.jpg' ,

        altImg: 'Lojas Americanas',

        tittleCard: 'Hackers causaram prejuízos a cerca de 25% das empresas brasileiras em 2022, diz pesquisa.',

        descriptionCard: 'Clique e saiba mais',
    },

    {
        linkNotices: 'https://revistagalileu.globo.com/ciencia/espaco/noticia/2023/07/fisico-sugere-que-universo-tem-o-dobro-da-idade-estabelecida-ate-agora.ghtml',

        cardImg: 'https://s2-galileu.glbimg.com/mY_AMNl08NIk-WgMvDw8H9T4GQg=/0x0:1920x904/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/i/g/hO3B7sSAidbElDLXOnIA/galaxy.jpg' ,

        altImg: 'Imagem do Universo',

        tittleCard: 'Físico sugere que universo tem o dobro da idade estabelecida até agora.',

        descriptionCard: '',
    },

    {
        linkNotices: 'https://olhardigital.com.br/2020/11/03/noticias/pesquisadores-dizem-que-o-google-usa-recaptcha-para-captar-dados/',
        cardImg: 'https://proxy.olhardigital.com.br/wp-content/uploads/2020/11/20201103064551.jpg',
        altImg: 'Imagem da verificação: "Não sou um robô"',
        tittleCard: 'Pesquisadores dizem que o Google usa reCAPTCHA para coletar dados.',
        descriptionCard: '',
    },

    /*  {
        linkNotices: '',
        cardImg: '',
        altImg: '',
        tittleCard: '',
        descriptionCard: '',
    },*/
]

for (let index = 0; index < arrayMiniNotices.length; index++) {

    // criar elemento (foi criado uma div)
    let divMiniNotices = document.createElement('div')
        
    // a div criada recebeu uma classe
    divMiniNotices.className = 'card-container-2'
        
    // manipular elemento (adicionar conteúdo ao elemento selecionado)
        
    divMiniNotices.innerHTML = `
        <a class="link-notices" target="_blank" href="${arrayMiniNotices[index].linkNotices}">

            <img class="img-card" src= "${arrayMiniNotices[index].cardImg}" alt="${arrayMiniNotices[index].altImg}">

            <div class="card-info">
                <h3 class="tittle_card">
                    ${arrayMiniNotices[index].tittleCard}
                </h3>
            </div>
        </a>
    `

// adicionar elemento na página
let containerNoticesPosAds2 = document.querySelector('.container_notices_pos_ads')
containerNoticesPosAds2.appendChild(divMiniNotices)
}

