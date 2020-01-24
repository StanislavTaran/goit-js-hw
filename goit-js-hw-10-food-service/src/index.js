import menu from './json/menu.json';
import menuItemTemplate from './templates/menu-item.hbs';
import './js/theme';
import './styles.css';

const refs = {
  menuFeed: document.querySelector('.js-menu'),
};

function createMenu(menu) {
  const markup = menu.map(menuItem => menuItemTemplate(menuItem)).join('');

  refs.menuFeed.insertAdjacentHTML('beforeend', markup);
}

createMenu(menu);
