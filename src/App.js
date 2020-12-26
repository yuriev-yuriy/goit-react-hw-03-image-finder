import React, { Component } from 'react';
import s from './App.module.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Button from './components/Button';
import Loader from 'react-loader-spinner';
import fetchPic from './services/Api';

class App extends Component {
  state = {
    query: '',
    page: 1,
    hits: [],
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const query = this.state.query;
    const page = this.state.page;
    if (this.state.query !== prevState.query) {
      this.setState({ status: 'pending' });
      this.resetList();
      fetchPic(query, page).then(({ hits }) => {
        const newPic = hits;
        this.setState(({ hits }) => ({
          hits: [...hits, ...newPic],
          status: 'resolved',
        }));
      });
      return;
    }
    if (this.state.page !== prevState.page) {
      this.setState({ status: 'pending' });
      fetchPic(this.state.query, this.state.page).then(({ hits }) => {
        const newPic = hits;
        this.setState(({ hits }) => ({
          hits: [...hits, ...newPic],
          status: 'resolved',
        }));
      });
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  resetList() {
    this.setState({ hits: [] });
  }

  getPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  resetPage() {
    this.setState({ page: 1 });
  }

  getInput = input => {
    this.setState({ query: input });
    this.resetPage();
  };

  render() {
    const { hits, error, status } = this.state;
    if (status === 'idle') {
      return <Searchbar onSubmit={this.getInput} />;
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    } else {
      return (
        <>
          <Searchbar onSubmit={this.getInput} />
          <ImageGallery>
            <ImageGalleryItem hits={hits} />
          </ImageGallery>
          {status === 'pending' ? (
            <Loader
              className={s.Loader}
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          ) : null}
          <div>{hits.length ? <Button getPage={this.getPage} /> : null}</div>
        </>
      );
    }
  }
}

export default App;
