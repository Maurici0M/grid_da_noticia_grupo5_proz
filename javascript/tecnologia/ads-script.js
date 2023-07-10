const arrayAdsTecnologiaPage = [
    {
        imgAds: 'https://gifs.eco.br/wp-content/uploads/2022/11/gifs-microsoft-1.gif' ,

        altImg: 'Publicidade',

        adsText: '',
    },

    {
        imgAds: 'https://media.tenor.com/kX17Sjvo5zAAAAAC/nintendo-switch.gif' ,

        altImg: 'Publicidade',

        adsText: '',
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