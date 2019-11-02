'use strict';

function findLongestWord(string) {
  const wordsArr = string.split(' ');
  let longestWord = wordsArr[0];

  for (let i = 0; i < wordsArr.length; i++) {
    if (longestWord.length < wordsArr[i].length) {
      longestWord = wordsArr[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
