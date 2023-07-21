const menuDiv = document.querySelector(".links-mobile");
const btnAnimacao = document.querySelector("#btn-menu");
const btnClose = document.querySelector("#btn-menu-close");

menuDiv.addEventListener("click", animacaoMenu);

function animacaoMenu() {
  menuDiv.classList.toggle("abrir");
  btnAnimacao.classList.toggle("ativo");
  btnClose.classList.toggle("ativo");
}
/*
function openNav() {
  document.getElementById("side_nav").style.width = "25%";
}
function closeNav() {
  document.getElementById("side_nav").style.width = "0";
}*/
