
// Publicidade desativada para a página inicial!
//Caso ative, retirar no CSS o display 'none'

const arrayAdsTecnologiaPage = [
  {
    imgAds:
    "https://www.valuehost.com.br/blog/wp-content/uploads/2019/02/274034-erro-de-http-wordpress-como-corrigir.jpg",

    altImg: "Publicidade",

    adsText: "Publicidade",
  },

  {
    imgAds:
      "https://www.valuehost.com.br/blog/wp-content/uploads/2019/02/274034-erro-de-http-wordpress-como-corrigir.jpg",

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


//gif
/*https://fortpark.com.br/wp-content/uploads/2020/12/5f6e13188a95bf168268a3acbd6b5f01.gif*/ 