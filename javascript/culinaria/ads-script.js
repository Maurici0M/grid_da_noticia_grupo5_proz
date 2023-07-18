const arrayAdsTecnologiaPage = [
  {
    imgAds:
      "https://pa1.aminoapps.com/8578/e8c47ca39e064d02c318fe7beeeca7ac32afa596r1-640-360_hq.gif",

    altImg: "Publicidade",

    adsText: "Publicidade",
  },

  {
    imgAds:
      "https://i.pinimg.com/originals/c7/94/be/c794be5349bc93ec47a2a17daab1b279.gif",

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
