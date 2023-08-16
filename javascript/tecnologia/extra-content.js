let array_conteudo_extra = [

    {
        iframe: '<iframe width="400" height="215" src="https://www.youtube.com/embed/Cx5yTKohyn4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },

    {
        iframe: '<iframe width="400" height="215" src="https://www.youtube.com/embed/5BS9AB1w6CQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },

    {
        iframe: '<iframe width="400" height="215" src="https://www.youtube.com/embed/Lbk-EDaySmw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },

    {
        iframe: '<iframe class="audio-spotify" style="border-radius:12px" src="https://open.spotify.com/embed/episode/7oDlx29ZWyRappuvjMcCbW?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    },

    {
        iframe: '<iframe class="audio-spotify" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2OZeGVRBQqYHtVmKTh6kDj?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    },
    
    {
        iframe: '<iframe class="audio-spotify" style="border-radius:12px" src="https://open.spotify.com/embed/episode/0gf7K6pUjof4QaH7IgKEkO?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
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

