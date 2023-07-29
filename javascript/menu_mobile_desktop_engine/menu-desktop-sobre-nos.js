function openNav() {
    document.getElementById("side_nav").style.width = "25%";
    document.getElementById("side_nav").style.overflowY = "hidden";
    // document.getElementById("#").style.marginLeft = "#";


    const navbar = document.querySelector('.navbar-header')
    navbar.style.transition = 'all 0.9s ease'

    const body = document.querySelector('body')
    body.style.marginLeft = '20rem'
    body.style.transition = 'all 0.5s ease-in-out'

    const menuDesktop1 = document.querySelector('#menu-desktop')
    menuDesktop1.style.display = 'none'

    const navbarHeader = document.querySelector('.navbar-header')
    navbarHeader.style.marginLeft = '-75px'
    navbarHeader.style.transition = 'all 0.5s ease-in-out'

    const linksNavBar = document.querySelector('.links')
    linksNavBar.style.display = 'none'

    //Ajustes dos slides quando o side-bar for aberto

    const containerSobreNos = document.querySelector('.container-sobre-nos')
    containerSobreNos.style.flexDirection = 'column'

    const slidesCarrossel = document.querySelector('.slide-container')
    slidesCarrossel.style.width = '50%'
    slidesCarrossel.style.transition = 'none'
    
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

    const navbarHeader = document.querySelector('.navbar-header')
    navbarHeader.style.marginLeft = '0px'

    const footer = document.querySelector('.footer')
    footer.style.marginLeft = '0px'
    footer.style.transition = 'all 0.5s ease-in-out'

    const linksNavBar = document.querySelector('.links')
    linksNavBar.style.display = 'block'

    //Ajustes dos slides quando o side-bar for aberto

    const containerSobreNos = document.querySelector('.container-sobre-nos')
    containerSobreNos.style.flexDirection = 'inherit'

    const slidesCarrossel = document.querySelector('.slide-container')
    slidesCarrossel.style.width = '100%'
    slidesCarrossel.style.transition = 'none'

}