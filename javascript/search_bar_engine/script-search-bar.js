// Barra de Pesquisa

//  TROCAR O NOME 'arrayCarrossel' PELO CONJUNTO DE ARRAYS QUE A BARRA DE PESQUISA IRÁ BUSCAR RESULTADOS

var allNoticesPage = arrayCarrossel.concat(arrayMiniNotices);

// Função para buscar os resultados na array
function pesquisar(query) {
    // Converte a palavra digitada para letras minúsculas
    query = query.toLowerCase();
    
    // Cria uma array vazia para armazenar os resultados
    var results = [];
    // Percorre a array de dados
    for (var i = 0; i < allNoticesPage.length; i++) {
    // Converte o nome e a descrição do objeto para letras minúsculas
    var tittle = allNoticesPage[i].tittleCard.toLowerCase();
    var description = allNoticesPage[i].descriptionCard.toLowerCase();
    // Verifica se a palavra digitada está contida no nome ou na descrição do objeto
    if (tittle.includes(query) || description.includes(query)) {
    // Adiciona o objeto à array de resultados
    results.push(allNoticesPage[i]);
    }
    }
    // Retorna a array de resultados
    return results;
    }


// Função para mostrar os resultados na página
function showResults(results) {
    // Seleciona o elemento que vai conter os resultados
    var resultsDiv = document.getElementById("search-results");
    // Limpa o conteúdo do elemento
    resultsDiv.innerHTML = "";
    // Verifica se há algum resultado
    if (results.length > 0) {
    // Percorre a array de resultados
    for (var i = 0; i < results.length; i++) {
    // Cria um elemento div para cada resultado
    var resultDiv = document.createElement("div");
    resultDiv.className = "search-result";

    var resultName = document.createElement('div')
    resultName.classList.add('card23')

    //Selecionando a div que mostrará os resultados na tela, e adicionando estilos para os conteúdos se ajustarem melhor na tela.
    var resultadosMostradosNaTela = document.querySelector('.search-results')
    resultadosMostradosNaTela.style.display = 'flex'
    resultadosMostradosNaTela.style.width = 'auto'
    resultadosMostradosNaTela.style.justifyContent = 'center'
    resultadosMostradosNaTela.style.flexWrap = 'wrap'
    resultadosMostradosNaTela.style.marginBottom = '10%'

    resultName.innerHTML = `
    <div class = 'card'>
        <a class="link-notices" target="_blank" href="${results[i].linkNotices}">
            <div class="image-content">
                <span class="overlay">
                    <div class="card-image">
                        <img class="card-img" src="${results[i].cardImg}" alt="${results[i].altImgCard}">
                    </div>
                </span>
            </div>
            <div class="card-content">
                <h3 class="tittle_card">
                    ${results[i].tittleCard}
                </h3>
                <p class="description_card">
                    ${results[i].descriptionCard}
                </p>
            </div>
        </a>
    </div>
`
    // Adiciona os elementos ao div do resultado
    resultDiv.appendChild(resultName);

    // Adiciona o div do resultado ao div dos resultados
    resultsDiv.appendChild(resultDiv);

    //reativando as páginas do site
    let htmlCarrossel = document.querySelector('.container-notices')
    let adsSection = document.querySelector('.ads-section')
    let containerNoticesPosAds = document.querySelector('.container_notices_pos_ads')
    let botaoCarregarMais = document.querySelector('.btn-ver-mais')

    htmlCarrossel.classList.remove ('desativado')
    adsSection.classList.remove ('desativado')
    containerNoticesPosAds.classList.remove ('desativado')
    botaoCarregarMais.classList.remove ('desativado')
    
    }
    }else {
    // Cria um elemento p para informar que não há resultados
    var noResults = document.createElement("div");
    noResults.classList.add('no-results-messenger-group')

    noResults.innerHTML = `
    <img class = 'no-results-img' src="../assets/images/tech-pesquisa-nao-encontrada-robo.png" alt="Resultado de Pesquisa Não Encontrado.">

    <div class = 'text-no-results'>
        <p>
            Desculpe, não conseguimos obter resultados para sua pesquisa.
        </p>
        <br>
        <p>
            Você pode tentar pesquisar novamente, ver as principais notícias desta página, ou navegar por nossos outros temas disponíveis.
        </p>
    </div>
    `
    // Adiciona o elemento ao div dos resultados
    resultsDiv.appendChild(noResults);

    //desativando as páginas do site
    let htmlCarrossel = document.querySelector('.container-notices')
    let adsSection = document.querySelector('.ads-section')
    let containerNoticesPosAds = document.querySelector('.container_notices_pos_ads')
    let botaoCarregarMais = document.querySelector('.btn-ver-mais')

    htmlCarrossel.classList.add ('desativado')
    adsSection.classList.add ('desativado')
    containerNoticesPosAds.classList.add ('desativado')
    botaoCarregarMais.classList.add ('desativado')

    }
}


// Seleciona o elemento da barra de pesquisa
var searchInput = document.getElementById("search");

// Seleciona o elemento do botão de busca
var searchButton = document.getElementById("search-button");
// Adiciona um evento de clique ao botão de busca
searchInput.addEventListener("keyup", function() {
// Obtém o valor da barra de pesquisa
var query = searchInput.value;
// Verifica se o valor não está vazio

if (query) {
// Busca os resultados na array de dados
var results = pesquisar(query);
// Mostra os resultados na página
showResults(results);
}

else {
    let resultsDiv = document.getElementById("search-results");
    resultsDiv.style.display = 'none'


    //Reativando o site caso o usuário exclua os dados do input selecionando-os e depois deletando de uma só vez
    let htmlCarrossel = document.querySelector('.container-notices')
    let adsSection = document.querySelector('.ads-section')
    let containerNoticesPosAds = document.querySelector('.container_notices_pos_ads')
    let botaoCarregarMais = document.querySelector('.btn-ver-mais')

    htmlCarrossel.classList.remove ('desativado')
    adsSection.classList.remove ('desativado')
    containerNoticesPosAds.classList.remove ('desativado')
    botaoCarregarMais.classList.remove ('desativado')
}
}); 

