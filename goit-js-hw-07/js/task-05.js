'use strict';

const inputNameField = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

inputNameField.addEventListener('input', handleInputChange);

function handleInputChange(event) {
  if (event.currentTarget.value !== '') {
    nameOutput.textContent = event.currentTarget.value;
  } else {
    nameOutput.textContent = 'Незнакомец';
  }
}
