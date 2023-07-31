function openNav() {
    document.getElementById("side_nav").style.width = "25%";
    document.getElementById("side_nav").style.overflowY = "hidden";
    // document.getElementById("#").style.marginLeft = "#";
  

    const navbar = document.querySelector('.navbar-header')
    navbar.style.transition = 'all 0.9s ease'
  
    const body = document.querySelector('body')
    body.style.marginLeft = '20.2rem'
    body.style.transition = 'all 0.5s ease-in-out'
  
    const menuDesktop1 = document.querySelector('#menu-desktop')
    menuDesktop1.style.display = 'none'
  
    const setasCarrossel = document.querySelector('.swiper-button-prev')
    setasCarrossel.style.display = 'none'
  
    const setasCarrossel2 = document.querySelector('.swiper-button-next')
    setasCarrossel2.style.display = 'none'
    
    //Encostar o carrossel ao sidebar:
    const carrossel = document.querySelector('.container-notices')
    carrossel.style.marginLeft = '-50px'

    const navbarHeader = document.querySelector('.navbar-header')
    navbarHeader.style.marginLeft = '-75px'
    navbarHeader.style.transition = 'all 0.5s ease-in-out'

    const linksNavBar = document.querySelector('.links')
    linksNavBar.style.display = 'none'

  }
  function closeNav() {
    document.getElementById("side_nav").style.width = "0";
    // document.getElementById("#").style.marginLeft = "#";
    
    const body = document.querySelector('body')
    body.style.marginLeft = '0'
    body.style.transition = 'all 0.5s ease-in-out'
  
    const navbar = document.querySelector('.navbar-header')
    navbar.style.transition = 'all 0.5s ease'
  
    const menuDesktop1 = document.querySelector('#menu-desktop')
    menuDesktop1.style.display = 'block'
  
    const setasCarrossel = document.querySelector('.swiper-button-prev')
    setasCarrossel.style.display = 'block'
  
    const setasCarrossel2 = document.querySelector('.swiper-button-next')
    setasCarrossel2.style.display = 'block'
    
    //Voltar o carrossel para posição padrão, após fechar o sidebar
    const carrossel = document.querySelector('.container-notices')
    carrossel.style.marginLeft = '0px'

    const navbarHeader = document.querySelector('.navbar-header')
    navbarHeader.style.marginLeft = '0px'

    const footer = document.querySelector('.footer')
    footer.style.marginLeft = '0px'
    footer.style.transition = 'all 0.5s ease-in-out'

    const linksNavBar = document.querySelector('.links')
    linksNavBar.style.display = 'block'
    
  }