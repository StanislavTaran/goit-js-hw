import './styles.css';
import './services/getImages';
import TempalateResultItem from './templates/result-item.hbs';
import PNotify from '../node_modules/pnotify/dist/es/PNotify';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';
// import getImages from './services/getImages';
import InfiniteScroll from 'infinite-scroll';

const refs = {
  input: document.getElementById('input'),
  output: document.getElementById('gallery'),
  resultSection: document.getElementById('result-of-search'),
  searchForm: document.getElementById('search-form'),
  searchList: document.getElementById('search-list'),
  searchButton: document.getElementById('search-btn'),
  loadMoreButton: document.getElementById('load-more-btn'),
  galleryParent: document.getElementById('gallery'),
  lightbox: document.querySelector('.lightbox'),
  lightboxImage: document.querySelector('.lightbox__image'),
  lightboxOverlay: document.querySelector('.lightbox__content'),
  sentinelObserve: document.getElementById('sentinel'),
  debounce: require('lodash/debounce'),
};

const queryOptions = {
  numberOfPage: 1,
  searchValue: '',
  baseUrl:
    'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=',
  API_KEY: '12685146-fdd2799488131e47273c0b199',
};

const fetchQuery = {
  getImages(SearchQuery, numberOfPage) {
    const query = `${SearchQuery}`;
    return fetch(
      queryOptions.baseUrl +
        query +
        '&' +
        'page=' +
        numberOfPage +
        '&per_page=12' +
        '&key=' +
        queryOptions.API_KEY,
    ).then(response => {
      if (response.status == 200) {
        return response.json();
      }
    });
  },
};

const lightBox = {
  openLightbox(event) {
    event.preventDefault();

    const url = event.target.dataset.source;

    refs.lightbox.classList.add('is-open');
    refs.lightboxImage.setAttribute('src', url);

    window.addEventListener('keydown', lightBox.handleKeyPress);
  },

  closeLightbox() {
    refs.lightbox.classList.remove('is-open');
    refs.lightboxImage.setAttribute('src', ' ');

    window.removeEventListener('keydown', lightBox.handleKeyPress);
  },

  handleOverlayClick(event) {
    if (event.target !== event.currentTarget) {
      return;
    }

    lightBox.closeLightbox();
  },

  handleKeyPress(event) {
    if (event.code !== 'Escape') {
      return;
    }

    lightBox.closeLightbox();
  },
};

function handleSearchQuery(e) {
  e.preventDefault();
  const query = refs.input.value;
  if (query !== queryOptions.searchValue) {
    refs.output.innerHTML = '';
    fetchQuery.getImages(query, queryOptions.numberOfPage).then(data => {
      if (data.hits.length < 1) {
        PNotify.alert({
          text: 'Ничего не найдено по Вашему запросу.',
          delay: 1000,
        });
      } else createMarkupResult(data);
    });
  } else if (query === '') {
    PNotify.info({
      text: 'Укажите, что нужно найти пожалуйста.',
      delay: 1000,
    });
  }
  queryOptions.searchValue = query;
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

function downloadNextPage() {
  const query = refs.input.value;
  queryOptions.numberOfPage++;
  getImages.getImages(query, queryOptions.numberOfPage).then(data => {
    createMarkupResult(data);
  });
}

function clearSearchQuery() {
  queryOptions.numberOfPage = 1;
}

const infScr = new InfiniteScroll(refs.galleryParent, {
  path() {
    return (
      queryOptions.baseUrl +
      '&key=' +
      queryOptions.API_KEY +
      `&q=${query}` +
      `&page=${this.pageIndex}`
    );
  },
  history: false,
  responseType: 'text',
  status: '.page-load-status',
});

infScr.on(`load`, response => {
  const images = JSON.parse(response);

  createMarkupResult(images);
});

refs.searchButton.addEventListener('click', handleSearchQuery);
refs.input.addEventListener('input', clearSearchQuery);
// refs.loadMoreButton.addEventListener('click', downloadNextPage);
refs.galleryParent.addEventListener('click', lightBox.openLightbox);
refs.lightboxOverlay.addEventListener('click', lightBox.handleOverlayClick);
