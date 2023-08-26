var MenuItem = document.querySelectorAll ('.item-menu')

function selectLink(){
    MenuItem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

MenuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

// Fazendo o site ter um evento de mostrar o menu, ao apertar no icone menu:

var btnMenu = document.querySelector('#btn-menu');
var menuSide = document.querySelector('.menu-lateral')

btnMenu.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
    if (menuSide.classList.contains('expandir')){
        let botao = document.querySelector('.btn-expandir')
        botao.style.marginLeft = '12px'

        let btnExpandir = document.querySelector('.btn-expandir > span')
            btnExpandir.style.transform = 'rotate(-180deg)'
            btnExpandir.style.transitio = 'all 0.5s ease-in-out;'

    const navbar = document.querySelector('.navbar-header')
        navbar.style.transition = 'all 0.5s ease'
  
  
    const body = document.querySelector('body')
        body.style.marginLeft = '20.2rem'
        body.style.transition = 'all 0.45s ease-in-out'
    
    let logo = document.querySelector('.logo > a')
    logo.style.marginLeft = '-10rem'

    let barraPesquisa = document.querySelector('.search-box')
    barraPesquisa.style.marginLeft = '-25rem'

    let main = document.querySelector('main')
        main.style.marginLeft = '10px'

    let footer = document.querySelector ('.footer')
    footer.style.marginLeft = '15px'
        /*main.style.transition = 'all 0.5s ease-in-out'*/

    /*const setasCarrossel = document.querySelector('.swiper-button-prev')
    setasCarrossel.style.display = 'none'
  
    const setasCarrossel2 = document.querySelector('.swiper-button-next')
    setasCarrossel2.style.display = 'none'*/
  
    const menuDesktop1 = document.querySelector('#menu-desktop')
    menuDesktop1.style.display = 'none'
  
    
    
    //Encostar o carrossel ao sidebar:
    const carrossel = document.querySelector('.container-notices')
    carrossel.style.marginLeft = '-50px'

    const navbarHeader = document.querySelector('.navbar-header')
    navbarHeader.style.marginLeft = '-75px'
    navbarHeader.style.transition = 'all 0.5s ease-in-out'

    const linksNavBar = document.querySelector('.links')
    linksNavBar.style.display = 'none'

    }


    else{
        let botao = document.querySelector('.btn-expandir')
        botao.style.marginLeft = ''

        let btnExpandir = document.querySelector('.btn-expandir > span')
            btnExpandir.style.transform = ''

        const body = document.querySelector('body')
        body.style.marginLeft = ''

        let logo = document.querySelector('.logo > a') 
        logo.style.marginLeft = '10rem'

        let barraPesquisa = document.querySelector('.search-box')
        barraPesquisa.style.marginLeft = ''
        
    
        let main = document.querySelector('main')
        main.style.marginLeft = '70px'
    
        /*const setasCarrossel = document.querySelector('.swiper-button-prev')
        setasCarrossel.style.display = 'none'

        const setasCarrossel2 = document.querySelector('.swiper-button-next')
        setasCarrossel2.style.display = 'none'*/

        const menuDesktop1 = document.querySelector('#menu-desktop')
        menuDesktop1.style.display = 'none'

        
        
        //Encostar o carrossel ao sidebar:
        const carrossel = document.querySelector('.container-notices')
        carrossel.style.marginLeft = ''
    
        const navbarHeader = document.querySelector('.navbar-header')
        navbarHeader.style.marginLeft = ''
        navbarHeader.style.transition = 'all 0.5s ease-in-out'
    
        const linksNavBar = document.querySelector('.links')
        linksNavBar.style.display = 'none'


            
            
        
    }
})

