'use strict';

let country = prompt('В какую страну вы хотите заказать доставку?', '');

let price;

if (country !== null) {
  country = country.toUpperCase();

  switch (country) {
    case 'КИТАЙ':
      price = 100;
      break;

    case 'ЧИЛИ':
      price = 250;
      break;

    case 'АВСТРАЛИЯ':
      price = 170;
      break;

    case 'ИНДИЯ':
      price = 80;
      break;

    case 'КИТАЙ':
      price = 120;
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }
  console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
} else {
  alert('Отменено!');
}
