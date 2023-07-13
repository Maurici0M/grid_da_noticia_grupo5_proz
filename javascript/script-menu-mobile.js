const menuDiv = document.querySelector('.links-mobile')
const btnAnimacao = document.querySelector('#btn-menu')

    menuDiv.addEventListener('click', animacaoMenu)

    function animacaoMenu(){
        menuDiv.classList.toggle('abrir')
        btnAnimacao.classList.toggle('ativo')
    }