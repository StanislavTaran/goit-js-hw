'use strict';

const total = 100;
const ordered = 50;

// const ordered = prompt("Пожалуйста введите желаемое количество товара", '');

let reply;

if (ordered <= total) {
  reply = 'Заказ оформлен, с вами свяжется менеджер';
} else {
  reply = 'На складе недостаточно товаров!';
}
console.log(reply);
