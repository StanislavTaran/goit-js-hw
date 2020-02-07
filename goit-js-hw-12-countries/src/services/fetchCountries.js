const baseUrl = 'https://restcountries.eu/rest/v2/name';

export default {
  fetchCountries(country) {
    const query = `/${country}`;
    return fetch(baseUrl + query).then(response => {
      return response.json();
    });
  },
};
