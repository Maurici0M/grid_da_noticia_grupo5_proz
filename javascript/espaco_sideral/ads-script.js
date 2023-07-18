const arrayAdsTecnologiaPage = [
  {
    imgAds:
      "https://img.freepik.com/vetores-premium/conceito-de-ilustracao-de-marketing-de-outdoor-uma-ilustracao-plana-isolada-no-fundo-branco_701961-1632.jpg?w=740",

    altImg: "Publicidade",

    adsText: "Publicidade",
  },

  {
    imgAds:
      "https://img.freepik.com/vetores-premium/conceito-de-ilustracao-de-marketing-de-outdoor-uma-ilustracao-plana-isolada-no-fundo-branco_701961-1632.jpg?w=740",

    altImg: "Publicidade",

    adsText: "Publicidade",
  },
];

for (let index = 0; index < arrayAdsTecnologiaPage.length; index++) {
  // criar elemento (foi criado uma div)
  let divADS = document.createElement("div");

  // a div criada recebeu uma classe
  divADS.className = "ads-group";

  // manipular elemento (adicionar conteúdo ao elemento selecionado)

  divADS.innerHTML = `
            <a class = "link-ads" target="_blank" href="">
                <img class="img-ads" src="${arrayAdsTecnologiaPage[index].imgAds}" alt="${arrayAdsTecnologiaPage[index].altImg}">
                <p class="ads-text">${arrayAdsTecnologiaPage[index].adsText}</p>
            </a>
        `;

  // adicionar elemento na página
  let capturarElemento = document.querySelector(".ads-section");

  capturarElemento.appendChild(divADS);
}
