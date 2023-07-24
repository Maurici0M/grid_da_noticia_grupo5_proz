const arrayAdsTecnologiaPage = [
    {
        imgAds: 'https://news.microsoft.com/wp-content/uploads/2018/01/MCW_MICRO_GIF-1_v3.gif' ,

        altImg: 'Publicidade',

        adsText: 'Publicidade',
    },

    {
        imgAds: 'https://nintendo-switch-br.s3.us-east-2.amazonaws.com/3-MODOS-EM-UM-BANNER.jpg' ,

        altImg: 'Publicidade',

        adsText: 'Publicidade',
    },
    ]

for (let index = 0; index < arrayAdsTecnologiaPage.length; index++) {

    // criar elemento (foi criado uma div)
    let divADS = document.createElement('div')

    // a div criada recebeu uma classe
    divADS.className = 'ads-group'

    // manipular elemento (adicionar conteúdo ao elemento selecionado)
    divADS.innerHTML = `
        <a class = "link-ads" target="_blank" href="">
            <img class="img-ads" src="${arrayAdsTecnologiaPage[index].imgAds}" alt="${arrayAdsTecnologiaPage[index].altImg}">
            <p class="ads-text">${arrayAdsTecnologiaPage[index].adsText}</p>
        </a>
    `

    // adicionar elemento na página
    let capturarElemento = document.querySelector('.ads-section')
        capturarElemento.appendChild(divADS)
}