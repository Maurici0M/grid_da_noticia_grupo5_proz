const arrayAdsTecnologiaPage = [
  {
    imgAds: "https://i.gifer.com/4734.gif",

    altImg: "Publicidade",

    adsText: "Publicidade",
  },

  {
    imgAds:
      "https://1.bp.blogspot.com/-944c0Wboqh0/T3ssHYzMVuI/AAAAAAAAAFY/8tUtuE1j37g/s1600/gatocosmico.gif",

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
