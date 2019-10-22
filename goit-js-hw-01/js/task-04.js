'use strict';

const credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let numberOfDroid = prompt(
  'Пожалуйста введите желаемое количество дроидов',
  '',
);

if (numberOfDroid == null) {
  alert('Отменено пользователем!');
} else {
  totalPrice = numberOfDroid * pricePerDroid;
}

if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else if (numberOfDroid > 0 && totalPrice <= credits) {
  let creditBalance = credits - totalPrice;
  console.log(
    `'Вы купили ${numberOfDroid} дроидов, на счету осталось ${creditBalance} кредитов.`,
  );
} else {
  console.log(
    'Вы не заказали ни одного дроида либо ввели некорректное значение',
  );
}
