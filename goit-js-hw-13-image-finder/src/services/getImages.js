const baseUrl =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=';
let numberOfPage = 0;

const API_KEY = '12685146-fdd2799488131e47273c0b199';

export default {
  getImages(SearchQuery) {
    numberOfPage++;
    const query = `${SearchQuery}`;
    return fetch(
      baseUrl +
        query +
        '&' +
        'page=' +
        numberOfPage +
        '&per_page=12' +
        '&key=' +
        API_KEY,
    ).then(response => {
      return response.json();
    });
  },
};

//12685146-fdd2799488131e47273c0b199
//&key=твой_ключ
