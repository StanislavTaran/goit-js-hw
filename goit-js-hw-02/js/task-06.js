'use strict';

function sumInput() {
  let input;
  let total = 0;
  const numbers = [];
  do {
    input = prompt('Please enter any number', '');
    if (isNaN(Number(input))) {
      alert('Было введено не число, попробуйте еще раз');
    } else {
      numbers.push(input);
    }
  } while (input !== null);

  numbers.pop();

  const numbersLength = numbers.length;

  for (let i = 0; i < numbersLength; i += 1) {
    total += Number(numbers[i]);
  }
  console.log(`Общая сумма чисел равна: ${total}`);
}

sumInput();
