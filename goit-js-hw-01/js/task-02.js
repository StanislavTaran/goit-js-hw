'use strict';

const total = 100;
const ordered = 50;

// const ordered = prompt("Пожалуйста введите желаемое количество товара", '');

let reply =
  ordered <= total
    ? 'Заказ оформлен, с вами свяжется менеджер'
    : 'На складе недостаточно товаров!';
console.log(reply);
