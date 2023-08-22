const arrayMiniNotices = [
    {
        linkNotices: 'https://guia.folha.uol.com.br/restaurantes/2023/07/galeria-cafe-inaugura-o-resto-em-sp-com-jantares-servidos-durante-a-balada.shtml',

        cardImg: 'https://f.i.uol.com.br/fotografia/2021/10/27/16353732136179d09ddb0df_1635373213_3x2_lg.jpg' ,

        altImg: 'not informed',

        tittleCard: 'Galeria Café inaugura o Restô em SP, com jantares servidos durante a balada.',

        descriptionCard: '',

    },

    {
        linkNotices: 'https://guia.folha.uol.com.br/restaurantes/2023/07/sal-gastronomia-de-henrique-fogaca-vai-migrar-de-higienopolis-para-os-jardins.shtml',

        cardImg: 'https://f.i.uol.com.br/fotografia/2023/07/10/168900531764ac2d0592b88_1689005317_3x2_md.jpg' ,

        altImg: '',

        tittleCard: 'Sal Gastronomia, de Henrique Fogaça, vai migrar de Higienópolis para os Jardins.',

        descriptionCard: 'Clique e saiba mais',
    },

    {
        linkNotices: 'https://receitas.globo.com/regionais/rpc/estudio-c/receita-facil-de-brownie-de-chocolate-g.ghtml',

        cardImg: 'https://s2-receitas.glbimg.com/tV0rNjf9zlBOdtUy3PkWzDEvm_4=/0x0:924x520/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/h/R/isTuAVRBundv1RAQg0BA/receita-facil-de-brownie-de-chocolate.jpg' ,

        altImg: '',

        tittleCard: 'Receita fácil de brownie de chocolate não dá trabalho e é ideal para comer no café da manhã!',

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

