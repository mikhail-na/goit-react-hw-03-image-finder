import { Component } from 'react';
// import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from 'services/Api';

import { SearchbarEl } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';

import { AppContainer } from './App.module';

const serviceApi = new Api();


export class App extends Component {

  // static propTypes = {
  //   inputValue: PropTypes.string.isRequired,
  // };

  state = {
    galleryItems: [],
    inputValue: ``,

    loading: false,
    hasButton: false,
    error: true,

    page: 1,

  };

  componentDidUpdate(prevProps, prevState) {
    const nextQuery = this.state.inputValue;
    const nextPage = this.state.page;

    if (prevState.inputValue !== nextQuery) {
      this.setState({ page: 1, galleryItems: [], hasButton: false });
      if (nextPage) {
        this.handleFetchItems(nextQuery, nextPage);
      }
    } else if (prevState.page !== nextPage ) {
      this.handleFetchItems(nextQuery, nextPage);
    }
  }


  handleFetchItems = (nextQuery, nextPage) => {
    this.setState({ loading: true, error: false });

    serviceApi.query = nextQuery;
    serviceApi.page = nextPage;

    serviceApi
      .fetchData()
      .then(data => {
      serviceApi.hits = data.totalHits;

      const fetchedData = data.hits.map(
        ({ webformatURL, largeImageURL, id, tags }) => ({
          webformatURL,
          largeImageURL,
          id,
          tags,
        })
      );
      // const newData = [...this.state.galleryItems, ...fetchedData];

      this.setState(prevState => ({
        galleryItems: [...prevState.galleryItems, ...fetchedData],
      }));
        
      // if (newData.length >= data.totalHits) {
      //   this.setState({ loading: false, hasButton: false, error: false});
      //   return;
      // }

      if (!data.totalHits) {
        this.setState({ loading: false, error: true });
        return toast.error(
          'Sorry, we could not find any images matching your request. Please try again.'
        );
      }

      if (nextPage === 1) {
        toast.success(`Congratulations! We found ${serviceApi.hits} images.`);
      }

      this.setState({ loading: false, hasButton: true, error: false });
    });
  };

  handleFormSubmit = inputValue => {
    this.setState({ inputValue });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1, hasButton: false, loading:true }));
  };

  render() {
    const { galleryItems, loading, hasButton, error } = this.state;

    return (
      <AppContainer>
        <SearchbarEl onSubmit={this.handleFormSubmit} />

        {!error && <ImageGallery galleryItems={galleryItems} />}

        {error && <h2>Hello, Enter a keyword, please..</h2>}

        {hasButton && <Button onClick={this.handleLoadMore} />}

        {loading && <Loader />}

        <ToastContainer
          draggablePercent={60}
          position="bottom-left"
          autoClose={2000}
          theme="dark" />
      </AppContainer>
    );
  }
}