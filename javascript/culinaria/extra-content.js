let array_conteudo_extra = [

    {
        iframe: '<iframe width="400" height="215" src="https://www.youtube.com/embed/pZkDkBrMr5U?si=NqxvbU2a1Y3an56U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },

    {
        iframe: '<iframe width="400" height="215" src="https://www.youtube.com/embed/tCbJdxHDeMA?si=r2k8UGLi7Gea69AD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },

    {
        iframe: '<iframe width="400" height="215" src="https://www.youtube.com/embed/D9BQyF--_8k?si=WtRkHo0qnW4dyuWc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },

    {
        iframe: '<iframe width="400" height="215" src="https://www.youtube.com/embed/HAQ77n4753w?si=zuJ56ejTr-ljJ9y5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    }

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

