import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '35668074-77b173ff4d0ead46d48834048';

export default class Api {
  constructor() {
    this.inputValue = '';
    this.totalHits = 0;
    this.page = 1;
  }

  // making (axios)fetch with options query
  async fetchData() {
    const OPTIONS = new URLSearchParams({
      q: this.inputValue,
      safesearch: true,
      page: this.page,
      per_page: 12,
    });

    try {
      const response = await axios.get(
        `${URL}?key=${KEY}&${OPTIONS.toString()}`
      );
      this.loadOneMorePage();
      return response.data;
    } catch (error) {
      console.error(error.JSON());
    }
  }

  get query() {
    return this.inputValue;
  }

  set query(fetchedQuery) {
    this.inputValue = fetchedQuery;
  }

  get hits() {
    return this.totalHits;
  }

  set hits(fetchedTotalHits) {
    this.totalHits = fetchedTotalHits;
  }

  loadOneMorePage() {
    this.page += 1;
  }

  reset() {
    this.page = 1;
  }
}
