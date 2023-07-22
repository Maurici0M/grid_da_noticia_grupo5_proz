document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const creatAccountForm = document.querySelector("#createAccount");

  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("form_hidden");
      creatAccountForm.classList.remove("form_hidden");
    });

  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("form_hidden");
    creatAccountForm.classList.add("form_hidden");
  });
});
