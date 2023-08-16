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

// function usuariotamanho() {
//   const usuario = document.querySelector("input[name=usuario]");
//   if (usuario.value.length >= 7) {
//     usuario.setCustomValidity("");
//   } else
//     usuario.setCustomValidity(
//       "O nome de usuário deve possuir ao menos 7 caracteres."
//     );
// }

// function emailcorreto() {
//   const email = document.querySelector("input[name=email]");
//   if (email.value.search("@") == -1) {
//     email.setCustomValidity(
//       "Você esqueceu de adicionar um @ em seu endereço de email."
//     );
//   }
//   if (email.value.search("") == -1) {
//     email.setCustomValidity("Adicione um endereço de email");
//   }
//   if (email.value.search(".") == -1) {
//     email.setCustomValidity("Adicione um endereço de email válido");
//   }
// }

// function confereSenha() {
//   const password = document.querySelector("input[name=password]");
//   const confirm = document.querySelector("input[name=confirm]");

//   if (confirm.value === password.value) {
//     confirm.setCustomValidity("");
//   } else {
//     confirm.setCustomValidity("Senhas não conferem");
//   }
// }

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
        if (e.target.id === "signupEmail") {
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
          document.querySelectorAll(".form_input").forEach((inputElement) => {
            inputElement.addEventListener("blur", (e) => {
              if (
                ((e.target.id === "signupPassword") != e.target.id) ===
                "signupPassword2"
              ) {
                setInputError(inputElement, "Senhas não conferem.");
              }
            });
          });
        });
      });
    });
  });
});
