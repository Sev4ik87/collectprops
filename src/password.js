"use strict";

function checkPasswordMatch(event) {
  event.preventDefault(); 

  const passwordInput = document.querySelector('input[name="password"]');
  const confirmPasswordInput = document.querySelector('input[name="c-password"]');

  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    console.log("Пароли не совпадают");
  } else {
    console.log("Пароли совпадают");
  }
}

const btnOk = document.querySelector('#btn-person button:first-child');
btnOk.addEventListener('click', checkPasswordMatch);