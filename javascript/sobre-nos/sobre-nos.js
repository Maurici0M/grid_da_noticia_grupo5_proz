    // Carrosel - Código de funcionamento (geral)
var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 1,
    centeredSlides: true,
    fade: 'true',
    gragCursor: 'true',
    autoplay: {
        delay: 6500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    

});  


//Arquivos de alimentação do carrosel - Cards da aba "Sobre Nós"

const arrayCarrossel = [

    {
        href: 'culinaria.html',
        cardImg: 'https://www.tskf.com.br/blog/wp-content/uploads/2018/04/181069-x-curiosidades-sobre-a-culinaria-da-china-para-voce-conhecer.jpg',
    },

    {
        href: 'espaco_sideral.html',
        cardImg: 'https://images2.alphacoders.com/588/588604.jpg'
    },
    {
        href: 'tecnologia.html',
        cardImg: 'https://www.10wallpaper.com/wallpaper/1366x768/1805/Creative_integrated_circuit_high_tech_earth_1366x768.jpg',
    },
]

for (let index = 0; index < arrayCarrossel.length; index++) {
    // Criar elemento
    let carrosselScript = document.createElement('div')

// Atribuir uma classe ao elemento (caso necessário)
carrosselScript.className = 'card swiper-slide'

// Manipular elemento
    carrosselScript.innerHTML = `
        <a href="${arrayCarrossel[index].href}">
            <img class="img-card" src="${arrayCarrossel[index].cardImg}" alt="not informed">
        </a>
    `

// Adicionar na página

    let selecionarClasseCarrossel = document.querySelector('.card-wrapper')

    selecionarClasseCarrossel.appendChild(carrosselScript)
    
}

