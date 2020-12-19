import React, { Component } from 'react';
import s from './App.module.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Button from './components/Button';
import Modal from './components/Modal';
import Loader from 'react-loader-spinner';

class App extends Component {
  state = {
    query: '',
    page: 1,
    hits: [],
    error: null,
    status: 'idle',
    showModal: false,
  };

  componentDidMount() {
    // this.fetchPic()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.setState({ status: 'pending' });
      this.resetList();
      this.fetchPic();
    }
    if (this.state.page !== prevState.page) {
      this.fetchPic();
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  fetchPic = (page = 1) => {
    fetch(
      `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=18694203-d22239baec913b213273a87a8&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(
          new Error(`Нет картинок по запросу ${this.state.query}`),
        );
      })
      .then(({ hits }) => {
        const newPic = hits;
        this.setState(({ hits }) => ({
          hits: [...hits, ...newPic],
          status: 'resolved',
        }));
      })
      .catch(error => this.state({ error, status: 'rejected' }));
  };

  resetList() {
    this.setState({ hits: [] });
  }

  getPage = () => {
    this.setState({ status: 'pending' });
    this.setState(prevState => ({ page: prevState.page + 1 }));
    this.setState({ status: 'resolved' });
  };

  resetPage() {
    this.setState({ page: 1 });
  }

  getInput = input => {
    this.setState({ query: input });
    this.resetPage();
  };

  openModal = event => {
    this.setState({ showModal: true });
    const id = event;
    // const aim = event;
    console.log([id]);
    //   if(this.state.showModal) {

    // }
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { query, hits, loading, error, status, page } = this.state;
    if (status === 'idle') {
      return <Searchbar onSubmit={this.getInput} />;
    }
    if (status === 'pending') {
      return (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={10000} //3 secs
        />
      );
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }

    if (status === 'resolved') {
      return (
        <>
          <Searchbar onSubmit={this.getInput} />
          <ImageGallery>
            <ImageGalleryItem hits={hits} clickModal={this.openModal} />
          </ImageGallery>

          {this.state.showModal && (
            <Modal url={hits} closeModal={this.closeModal} />
          )}

          <div>{hits.length ? <Button getPage={this.getPage} /> : null}</div>
        </>
      );
    }

    // return (
    //   <div className="App">

    //     <Searchbar onSubmit={this.getInput} />
    //     {error && <h1>{ error.message}</h1>}
    //           <ImageGallery >
    //       <ImageGalleryItem isLoaded={this.getHits} query={query} page={page} loading={this.loading} />
    //     </ImageGallery>
    //     {loading &&
    //      <Loader
    //     type="Puff"
    //     color="#00BFFF"
    //     height={100}
    //     width={100}
    //     timeout={1000} //3 secs
    //       />}

    //     {hits && <Button getPage={this.getPage }/>}
    //     <Modal />
    //   </div>
    // );
  }
}

export default App;
