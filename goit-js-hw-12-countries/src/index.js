import './styles.css';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';
import fetchCountries from './services/fetchCountries';
import countryTemplate from './templates/template-country.hbs';
import searchListTemplate from './templates/searchListTemplate.hbs';
import PNotify from '../node_modules/pnotify/dist/es/PNotify';

const refs = {
  input: document.getElementById('input-searh'),
  output: document.getElementById('output-container'),
  searchList: document.querySelector('.search-list-container'),
  debounce: require('lodash/debounce'),
};

refs.input.addEventListener('input', refs.debounce(handleSearhQuery, 500));
refs.output.addEventListener('click', choiceCountry);

function handleSearhQuery(e) {
  clearSearchResult();
  const country = e.target.value;
  if (!country) {
    clearSearchResult();
    return;
  }

  fetchCountries.fetchCountries(country).then(data => {
    console.log(data);

    if (data.length >= 2 && data.length <= 10) {
      data.map(country => {
        insertMarkupCountry(country, searchListTemplate);
      });
    } else if (data.length === 1) {
      data.map(country => insertMarkupCountry(country, countryTemplate));
    } else {
      PNotify.error({
        text: 'Please specify your request.',
        delay: 1000,
      });
    }
  });
}

function insertMarkupCountry(items, template) {
  const markup = template(items);

  refs.output.insertAdjacentHTML('beforeend', markup);
}

function clearSearchResult() {
  refs.output.innerHTML = '';
}

function choiceCountry(e) {
  if (e.target.classList.contains('search-list__item')) {
    const countryFullName = e.target.textContent;
    clearSearchResult();
    refs.input.value = countryFullName;
    const event = new Event('input', {
      bubbles: true,
      cancelable: true,
    });

    refs.input.dispatchEvent(event);
  }
}
