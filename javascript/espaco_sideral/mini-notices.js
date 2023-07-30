const arrayMiniNotices = [
    {
        linkNotices: 'https://revistagalileu.globo.com/ciencia/espaco/noticia/2023/07/fisico-sugere-que-universo-tem-o-dobro-da-idade-estabelecida-ate-agora.ghtml',

        cardImg: 'https://s2-galileu.glbimg.com/mY_AMNl08NIk-WgMvDw8H9T4GQg=/0x0:1920x904/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/i/g/hO3B7sSAidbElDLXOnIA/galaxy.jpg' ,

        altImg: 'not informed',

        tittleCard: 'Físico sugere que universo tem o dobro da idade estabelecida até agora.',

        descriptionCard: '',

    },

    {
        linkNotices: 'https://revistagalileu.globo.com/ciencia/espaco/noticia/2023/07/entenda-os-objetivos-da-missao-espacial-indiana-chandrayaan-3-rumo-a-lua.ghtml',

        cardImg: 'https://s2-galileu.glbimg.com/3a7Q5SFXN_aqfSZSyXiI-Ecl7KQ=/0x0:1200x675/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/x/f/HfZV2mTGGpdOWsy20KoQ/missao3.jpg' ,

        altImg: '',

        tittleCard: 'Entenda os objetivos da missão espacial indiana Chandrayaan-3 rumo à Lua.',

        descriptionCard: 'Clique e saiba mais',
    },

    {
        linkNotices: 'https://revistagalileu.globo.com/ciencia/espaco/noticia/2023/07/james-webb-pode-ter-achado-1a-evidencia-de-estrelas-escuras-entenda.ghtml',

        cardImg: 'https://s2-galileu.glbimg.com/f3ENJpskGUzzjIv5GZjQpU7r0jU=/0x0:873x608/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/0/B/9BAaQEQx2iTO1fCBDinw/captura-de-tela-2023-07-13-133319.png' ,

        altImg: '',

        tittleCard: 'James Webb pode ter achado 1ª evidência de "estrelas escuras", entenda.',

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

