"use strict";


const btnOk = document.querySelector('#btn-person :first-child');
class Person {
	constructor(firstName, lastName, email, nickName) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.nickName = nickName;
	}
}

function collectPropsFromForm(event){
  event.preventDefault();
  const collectionProps = Array.from(
		document.querySelectorAll('#person input[type="text"]')
  );
  const lastName = document.querySelector('input[name="lastName"]');
  const arrValues = collectionProps.map((item) => item.value);
  const person = new Person(...arrValues);
  localStorage.setItem(`${lastName.value}`, JSON.stringify(person));
  console.log(collectionProps);
  console.log(arrValues);
}



btnOk.addEventListener('click', collectPropsFromForm);
