"use strict";

const btnOk = document.querySelector("#btn-person button:first-child");
const errorContainer = document.querySelector("#errorContainer");

class Person {
	constructor(firstName, lastName, email, nickName) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.nickName = nickName;
  }
}


function validateEmail(email) {
  const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/;
  return emailRegex.test(email);
}

function displayError(errorMessage) {
  errorContainer.innerHTML = `<div class="message error">${errorMessage}</div>`;
  errorContainer.classList.add("show");
  errorContainer.classList.remove("hide");
}

function removeError() {
  errorContainer.innerHTML = "";
  errorContainer.classList.add("hide");
  errorContainer.classList.remove("show");
}

function collectPropsFromForm(event) {
  event.preventDefault();
  const collectionProps = Array.from(
		document.querySelectorAll('#person input[type="text"]')
  );
  const lastName = document.querySelector('input[name="lastName"]');
  const arrValues = collectionProps.map((item) => item.value);
  const person = new Person(...arrValues);
  localStorage.setItem(`${lastName.value}`, JSON.stringify(person));
  const emailInput = document.querySelector('input[name="email"]');

  const email = emailInput.value;
  if (!validateEmail(email)) {
    displayError("Некорректный email");
    emailInput.classList.add("error");
    return;
  }

  removeError();
  emailInput.classList.remove("error");
}

btnOk.addEventListener("click", collectPropsFromForm);

const emailInput = document.querySelector('input[name="email"]');
emailInput.addEventListener("input", validateEmailInput);

function validateEmailInput() {
  const email = this.value;
  if (!validateEmail(email)) {
    displayError("Некорректный email");
    emailInput.classList.add("error");
  } else {
    removeError();
    emailInput.classList.remove("error");
  }
}
errorContainer.classList.add("hide");
