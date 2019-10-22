'use strict';

let input;
let total = 0;

do {
  input = prompt('please enter any number', '');

  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  } else {
    total += Number(input);
  }
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
