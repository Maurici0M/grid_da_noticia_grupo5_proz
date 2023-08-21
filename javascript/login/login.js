function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form_message");

  messageElement.textContent = message;
  messageElement.classList.remove("form_message_success", "form_message_error");
  messageElement.classList.add(`form_message--${type}`);
}

function setInputError(inputElement, message) {
  inputElement.classList.add("form_input_error");
  inputElement.parentElement.querySelector(
    ".form_input-error-message"
  ).textContent = message;
  
}

function clearInputError(inputElement) {
  inputElement.classList.remove("form_input_error");
  inputElement.parentElement.querySelector(
    ".form_input-error-message"
  ).textContent = "";
  
}

// setFormMessage(loginform, "success", "You're loggein in!");

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

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    setFormMessage(loginForm, "error", "Usuário ou senha inválidos");
  });

  document.querySelectorAll(".form_input").forEach((inputElement) => {
    inputElement.addEventListener("blur", (e) => {
      if (
        e.target.id === "signupUsername" &&
        e.target.value.length > 0 &&
        e.target.value.length < 7
      ) {
        setInputError(
          inputElement,
          "O nome de usuário deve ter ao menos 7 caracteres"
        );
      }
      
    });
    inputElement.addEventListener("input", (e) => {
      clearInputError(inputElement);
    });
  });
  document.querySelectorAll(".form_input").forEach((inputElement) => {
    inputElement.addEventListener("blur", (e) => {
      if (
        e.target.id === "signupEmail" &&
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          e.target.value
        ) === false
      ) {
        setInputError(inputElement, "Digite um endereço de E-mail válido");

        //Modificado
        let botaoContinuar = document.getElementById('botaocontinuar')
        botaoContinuar.classList.add('desativado')
      }
    });
    inputElement.addEventListener("input", (e) => {
      clearInputError(inputElement);

      //Modificado
      let botaoContinuar = document.getElementById('botaocontinuar')
        botaoContinuar.classList.remove('desativado')
    });
  });
  
  document.querySelectorAll(".form_input").forEach((inputElement) => {
    inputElement.addEventListener("blur", (e) => {
      if (
        e.target.id === "signupPassword" &&
        e.target.value.length > 0 &&
        e.target.value.length < 8
      ) {
        setInputError(inputElement, "Sua senha deve ter ao menos 8 caracteres");

        //Modificado
        let botaoContinuar = document.getElementById('botaocontinuar')
        botaoContinuar.classList.add('desativado')
      }
    });
    inputElement.addEventListener("input", (e) => {
      clearInputError(inputElement);

      //Modificado
      let botaoContinuar = document.getElementById('botaocontinuar')
        botaoContinuar.classList.remove('desativado')
    });
  });

  document.querySelectorAll(".form_input").forEach((inputElement) => {
    inputElement.addEventListener("blur", (e) => {
      if (
        e.target.id === "confirmPassword" &&
        e.target.value !== document.getElementById("signupPassword").value
      ) {
        setInputError(inputElement, "As senhas não coincidem");

        //Modificado
        let botaoContinuar = document.getElementById('botaocontinuar')
        botaoContinuar.classList.add('desativado')
      }
    });
    inputElement.addEventListener("input", (e) => {
      clearInputError(inputElement);
      
      //Modificado
      let botaoContinuar = document.getElementById('botaocontinuar')
        botaoContinuar.classList.remove('desativado')
    });
  });
});
