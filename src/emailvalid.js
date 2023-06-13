"use strict";

const personForm = document.getElementById("person");
const errorContainer = document.createElement("div");
errorContainer.id = "errorContainer";
errorContainer.classList.add("hide");
personForm.appendChild(errorContainer);

const emailInput = document.querySelector('input[name="email"]');

function validateEmail(email) {
  const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/;
  return emailRegex.test(email);
}

function displayError(errorMessage) {
  errorContainer.textContent = errorMessage;
  errorContainer.classList.remove("hide");
  errorContainer.classList.add("show");
}

function removeError() {
  errorContainer.textContent = "";
  errorContainer.classList.remove("show");
  errorContainer.classList.add("hide");
}

function validateEmailInput() {
  const email = emailInput.value;
  if (!validateEmail(email)) {
    displayError("Некорректный email");
    emailInput.classList.add("error");
  } else {
    removeError();
    emailInput.classList.remove("error");
  }
}


emailInput.addEventListener("change", validateEmailInput);

 errorContainer.classList.add("hide");
