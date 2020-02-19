import './styles.css';
import './services/getImages';
import TempalateResultItem from './templates/result-item.hbs';
import TempalateSearchItem from './templates/search-item.hbs';
import PNotify from '../node_modules/pnotify/dist/es/PNotify';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';
import getImages from './services/getImages';

const refs = {
  input: document.getElementById('input'),
  output: document.getElementById('result-of-search'),
  searchForm: document.getElementById('search-form'),
  searchList: document.getElementById('search-list'),
  debounce: require('lodash/debounce'),
};

refs.input.addEventListener('input', refs.debounce(handleSearchQuery, 1000));
// refs.searchList.addEventListener('click', choiceCountry);

function handleSearchQuery(e) {
  const query = e.target.value;
  if (!query) {
    return;
  }

  getImages.getImages(query).then(data => {
    createMarkupResult(data);
  });
}

function createMarkupResult(obj) {
  console.log(obj.hits);
  const result = obj.hits;
  const markup = result
    .map(item => {
      return TempalateResultItem(item);
    })
    .join('');
  drawMarkup(markup, refs.output);
}

function drawMarkup(markup, output) {
  output.insertAdjacentHTML('beforeend', markup);
}
