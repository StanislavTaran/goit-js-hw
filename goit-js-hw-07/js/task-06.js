'use strict';
const input = document.getElementById('validation-input');
const validValue = Number(input.getAttribute('data-length'));

input.addEventListener('blur', checkedIsValid);

function checkedIsValid(event) {
  const value = event.currentTarget.value.length;
  const isValid = value === validValue;

  if (isValid) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
