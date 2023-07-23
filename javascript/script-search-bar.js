//data = arraycarrossel

//name = tittle

// description = descriptionCard

// Função para buscar os resultados na array
function pesquisar(query) {
    // Converte a palavra digitada para letras minúsculas
    query = query.toLowerCase();
    
    // Cria uma array vazia para armazenar os resultados
    var results = [];
    // Percorre a array de dados
    for (var i = 0; i < arrayCarrossel.length; i++) {
    // Converte o nome e a descrição do objeto para letras minúsculas
    var tittle = arrayCarrossel[i].tittleCard.toLowerCase();
    var description = arrayCarrossel[i].descriptionCard.toLowerCase();
    // Verifica se a palavra digitada está contida no nome ou na descrição do objeto
    if (tittle.includes(query) || description.includes(query)) {
    // Adiciona o objeto à array de resultados
    results.push(arrayCarrossel[i]);
    }
    }/*
    // Ordena os resultados em ordem alfabética pelo nome
    results.sort(function(a, b) {
    return a.name.localeCompare(b.name);
    });*/
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
    resultName.classList.add('card')

    //Selecionando a div que mostrará os resultados na tela, e adicionando estilos para os conteúdos se ajustarem perfeitamente na tela.
    var resultadosMostradosNaTela = document.querySelector('.search-results')
    resultadosMostradosNaTela.style.display = 'flex'
    resultadosMostradosNaTela.style.width = 'auto'
    resultadosMostradosNaTela.style.justifyContent = 'center'
    resultadosMostradosNaTela.style.flexWrap = 'wrap'
    resultadosMostradosNaTela.style.marginBottom = '10%'

    resultName.innerHTML = `
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

`
    // Adiciona os elementos ao div do resultado
    resultDiv.appendChild(resultName);

    // Adiciona o div do resultado ao div dos resultados
    resultsDiv.appendChild(resultDiv);
    }
    } else {
    // Cria um elemento p para informar que não há resultados
    var noResults = document.createElement("p");
    noResults.textContent = "Nenhum resultado encontrado.";
    // Adiciona o elemento ao div dos resultados
    resultsDiv.appendChild(noResults);
    }
    }

// Seleciona o elemento da barra de pesquisa
var searchInput = document.getElementById("search-input");
// Seleciona o elemento do botão de busca
var searchButton = document.getElementById("search-button");
// Adiciona um evento de clique ao botão de busca
searchButton.addEventListener("click", function() {
// Obtém o valor da barra de pesquisa
var query = searchInput.value;
// Verifica se o valor não está vazio
if (query) {
// Busca os resultados na array de dados
var results = pesquisar(query);
// Mostra os resultados na página
showResults(results);
}
});