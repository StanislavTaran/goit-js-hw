'use strict';

const checkForSpam = function(string) {
  const lowRegString = string.toLowerCase();
  if (lowRegString.includes('spam') || lowRegString.includes('sale')) {
    return true;
  }
  return false;
};
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
