'use strict';

function calculateEngravingPrice(message, pricePerWord) {
  const messageArr = message.split(' ');
  const wordCount = messageArr.length;
  return pricePerWord * wordCount;
}

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40));
