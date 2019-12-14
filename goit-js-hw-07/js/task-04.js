'use strict';

let counterValue = 0;

const incrementBtn = document.querySelector('button[data-action="increment"]');

const decrementBtn = document.querySelector('button[data-action="decrement"]');
let value = document.getElementById('value');

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
});

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
