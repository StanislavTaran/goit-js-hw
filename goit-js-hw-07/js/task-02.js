'use strict';

const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];
const ingredientsListMarkup = document.getElementById('ingredients');
const itemsMarkup = createItemsMarkup(ingredients);

function createItemMarkup(ingredient) {
  const item = `<li>${ingredient}</li>`;
  return item;
}

function createItemsMarkup(ingredients) {
  return ingredients.map(ingridient => createItemMarkup(ingridient)).join('');
}

ingredientsListMarkup.insertAdjacentHTML('afterbegin', itemsMarkup);
