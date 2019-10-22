"use strict"

let country = prompt("В какую страну вы хотите заказать доставку?",'');
country = country.toUpperCase();
let price;

switch (country){

    case "КИТАЙ":
        price = 100;
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;

     case "ЧИЛИ":
        price = 250;
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;

     case "АВСТРАЛИЯ":
        price = 170;
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;

     case "ИНДИЯ":
        price = 80;
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;

    case "КИТАЙ":
        price = 120;
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;

    default:
        alert("В вашей стране доставка не доступна");
}
