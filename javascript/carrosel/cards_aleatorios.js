// Essa função fará com que as notícias do carrosel apareçam na tela de maneira aleatória, mudando a ordem das notícias cada vez que o site for acessado.

// Ativado para todas as páginas.

function shuffleArray(arrayCarrossel) {
    for (let index = arrayCarrossel.length - 1; index > 0; index--) {
        const j = Math.floor(Math.random() * (index + 1));
        [arrayCarrossel[index], arrayCarrossel[j]] = [arrayCarrossel[j], arrayCarrossel[index]];
  
        // Criar elemento
    let carrosselScript = document.createElement("div");
  
    // Atribuir uma classe ao elemento (caso necessário)
    carrosselScript.className = "card swiper-slide";
  
    // Manipular elemento
    carrosselScript.innerHTML = `
          <a class="link-notices" target="_blank" href="${arrayCarrossel[index].linkNotices}">
              <div class="image-content">
                  <span class="overlay">
                      <div class="card-image">
                          <img class="card-img" src="${arrayCarrossel[index].cardImg}" alt="${arrayCarrossel[index].altImgCard}">
                      </div>
                  </span>
              </div>
              <div class="card-content">
                  <h3 class="tittle_card">
                      ${arrayCarrossel[index].tittleCard}
                  </h3>
                  <p class="description_card">
                      ${arrayCarrossel[index].descriptionCard}
                  </p>
              </div>
          </a>
  
      `;
  
    // Adicionar na página
  
    let selecionarClasseCarrossel = document.querySelector(".card-wrapper");
  
    selecionarClasseCarrossel.appendChild(carrosselScript);
    }
    return arrayCarrossel;
  }

    const meuArray = arrayCarrossel;
    const arrayEmbaralhado = shuffleArray(meuArray);