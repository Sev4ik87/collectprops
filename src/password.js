"use strict";
const confirmPasswordInput = document.querySelector('input[name="c-password"]');


function checkPasswordMatch(event) {
  event.preventDefault(); 

  const passwordInput = document.querySelector('input[name="password"]');

  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    console.log("Пароли не совпадают");
  } else {
    console.log("Пароли совпадают");
  }
}

confirmPasswordInput.addEventListener('change', checkPasswordMatch);

