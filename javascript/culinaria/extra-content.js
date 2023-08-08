let array_conteudo_extra = [

    {
        iframe: '<iframe width="400" height="215" src="https://www.youtube.com/embed/GVZdFjkycRY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },

    {
        iframe: '<iframe width="400" height="215" src="https://www.youtube.com/embed/SeDXen3LqrA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },

    {
        iframe: '<iframe width="400" height="215" src="https://www.youtube.com/embed/3Ngx1BEo6A8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },

]

for (let index = 0; index < array_conteudo_extra.length; index++) {
    
    // criar elemento (foi criado uma div)
    let divConteudosExtras = document.createElement('div')

    //Adicionar classe a div
    divConteudosExtras.classList.add('videos-yt')

    // manipular elemento (adicionar conteúdo ao elemento selecionado)
    divConteudosExtras.innerHTML = `
        ${array_conteudo_extra[index].iframe}
    `

    // adicionar elemento na página
    let capturarElemento = document.querySelector('.videos-section')
        capturarElemento.appendChild(divConteudosExtras)
}

