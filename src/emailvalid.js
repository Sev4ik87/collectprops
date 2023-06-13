"use strict";

const errorContainer = document.querySelector("#errorContainer");
const emailInput = document.querySelector('input[name="email"]');

function validateEmail(email) {
  const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/;
  return emailRegex.test(email);
}

function displayError(errorMessage) {
  errorContainer.innerHTML = `<div class="message error">${errorMessage}</div>`;
  errorContainer.classList.toggle("hide", false);
  errorContainer.classList.toggle("show", true);
}

function removeError() {
  errorContainer.innerHTML = "";
  errorContainer.classList.toggle("hide", true);
  errorContainer.classList.toggle("show", false);
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

errorContainer.classList.toggle("hide", true);
