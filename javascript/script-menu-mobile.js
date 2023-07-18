const menuDiv = document.querySelector('.links-mobile')
const btnAnimacao = document.querySelector('#btn-menu')
const btnClose = document.querySelector('#btn-menu-close')

    menuDiv.addEventListener('click', animacaoMenu)

    function animacaoMenu(){
        menuDiv.classList.toggle('abrir')
        btnAnimacao.classList.toggle('ativo')
        btnClose.classList.toggle('ativo')
        
    }