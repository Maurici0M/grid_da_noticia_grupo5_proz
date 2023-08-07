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
  inputElement.classList.remove("form_Input_error");
  inputElement.parentElement.querySelector(
    ".form_input-error-message"
  ).textContent = "";
}

function confereSenha() {
  const password = document.querySelector("input[name=password]");
  const confirm = document.querySelector("input[name=confirm]");

  if (confirm.value === password.value) {
    confirm.setCustomValidity("");
  } else {
    confirm.setCustomValidity("Senhas não conferem");
  }
}

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

    setFormMessage(loginForm, "error", "Nome de usuário ou senha incorretos");
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
          "O nome de usuário deve possuir ao menos 7 caracteres."
        );
      }
    });

    document.querySelectorAll(".form_input").forEach((inputElement) => {
      inputElement.addEventListener("blur", (e) => {
        if (
          e.target.id === "signupEmail" &&
          e.target.value.search("@") == -1 &&
          e.target.value.search(" ") == -1 &&
          e.target.value.search(".") != -1
        ) {
          setInputError(inputElement, "Digite um endereço de email válido.");
        }
      });
      document.querySelectorAll(".form_input").forEach((inputElement) => {
        inputElement.addEventListener("blur", (e) => {
          if (
            e.target.id === "signupPassword" &&
            e.target.value.length > 0 &&
            e.target.value.length < 8
          ) {
            setInputError(
              inputElement,
              "Sua senha deve conter no mínimo 8 caracteres."
            );
          }
        });
      });
    });
  });
});
