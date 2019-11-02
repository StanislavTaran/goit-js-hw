'use strict';

const formatString = function(string) {
  const testString = string;
  let targetLength = 40;

  if (testString.length <= targetLength) {
    return string;
  } else {
    return string.substring(0, targetLength) + '...';
  }
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка
