'use strict';

const range = document.getElementById('font-size-control');
const text = document.getElementById('text');

range.addEventListener('input', changeFontSize);

function changeFontSize(event) {
  let rangeValue = event.currentTarget.value;
  text.setAttribute('style', `font-size: ${rangeValue}px`);
}
