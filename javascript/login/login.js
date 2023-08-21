const creatAccountForm = document.querySelector("#createAccount");
const loginForm = document.querySelector("#login");

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

creatAccountForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const usernameInput = document.querySelector("#signupUsername");
  const emailInput = document.querySelector("#signupEmail");
  const passwordInput = document.querySelector("#signupPassword");
  const confirmPasswordInput = document.querySelector("#confirmPassword");

  let isValid = true;
  if (usernameInput.value.length < 7) {
    setInputError(
      usernameInput,
      "O nome de usuário deve ter ao menos 7 caracteres"
    );
    isValid = false;
  }
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      emailInput.value
    )
  ) {
    setInputError(emailInput, "Digite um endereço de E-mail válido");
    isValid = false;
  }
  if (passwordInput.value.length < 8) {
    setInputError(passwordInput, "Sua senha deve ter ao menos 8 caracteres");
    isValid = false;
  }
  if (confirmPasswordInput.value !== passwordInput.value) {
    setInputError(confirmPasswordInput, "As senhas não coincidem");
    isValid = false;
  }

  // If all inputs are valid, submit the form
  if (isValid) {
    // Submit

    usernameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    confirmPasswordInput.value = "";

    // voltar para a página de login
    creatAccountForm.classList.add("form_hidden");
    loginForm.classList.remove("form_hidden");
  } else {
    setFormMessage(
      creatAccountForm,
      "error",
      "Preencha todos os campos corretamente"
    );
  }
});

// setFormMessage(loginform, "success", "You're loggein in!");

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const creatAccountForm = document.querySelector("#createAccount");

  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (e) => {
      loginForm.classList.add("form_hidden");
      creatAccountForm.classList.remove("form_hidden");

      setFormMessage(creatAccountForm, "error", "");
    });

  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    loginForm.classList.remove("form_hidden");
    creatAccountForm.classList.add("form_hidden");
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    setFormMessage(loginForm, "error", "Usuário ou senha inválidos");
  });

  creatAccountForm.addEventListener("submit", (e) => {
    e.preventDefault();

    setFormMessage(
      creatAccountForm,
      "error",
      "Preencha todos os campos corretamente"
    );
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
      }
    });
    inputElement.addEventListener("input", (e) => {
      clearInputError(inputElement);
    });
    inputElement.addEventListener("input", (e) => {
      clearInputError(inputElement);
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
      }
    });
    inputElement.addEventListener("input", (e) => {
      clearInputError(inputElement);
    });
  });

  document.querySelectorAll(".form_input").forEach((inputElement) => {
    inputElement.addEventListener("blur", (e) => {
      if (
        e.target.id === "confirmPassword" &&
        e.target.value !== document.getElementById("signupPassword").value
      ) {
        setInputError(inputElement, "As senhas não coincidem");
      }
    });
    inputElement.addEventListener("input", (e) => {
      clearInputError(inputElement);
    });
  });
});
