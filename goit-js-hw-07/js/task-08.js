'use strict';
const container = document.getElementById('boxes');
const createBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

const box = {
  width: 30,
  height: 30,
  randomColor() {
    let o = Math.round,
      r = Math.random,
      s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
  },
};

function createBoxes(amount) {
  amount = Number(document.querySelector('div#controls').firstElementChild.value);
  let { width, height, randomColor } = box;
  const elements = [];

  for (let i = 1; i <= amount; i += 1) {
    const el = `<div style = 'width : ${width}px; height : ${height}px; background-color: ${randomColor()}'></div>`;
    elements.push(el);
    width += 10;
    height += 10;
  }
  container.insertAdjacentHTML('afterbegin', elements.join(''));
  console.log(`Создано ${amount} элементов!`);
}

function destroyBoxes() {
  const clearContainer = '<div id="boxes"></div>';
  container.innerHTML = clearContainer;
  console.log('Поле очищено!');
}
