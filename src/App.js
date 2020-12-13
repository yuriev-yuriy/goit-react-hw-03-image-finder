import React, { Component } from 'react';
import s from './App.module.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Button from './components/Button';
import Modal from './components/Modal';

class App extends Component {
  state = {
    query: '',
    hits: [],
  };

  componentDidMount() {
    fetch(
      `https://pixabay.com/api/?q=${this.state.query}&page=1&key=18694203-d22239baec913b213273a87a8&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(res => res.json())
      .then(({ hits }) => this.setState({ hits }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      fetch(
        `https://pixabay.com/api/?q=${this.state.query}&page=1&key=18694203-d22239baec913b213273a87a8&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        .then(({ hits }) => this.setState({ hits }));
    }
  }

  getInput = input => {
    this.setState({ query: input });
  };

  render() {
    console.log(this.state.hits);
    // console.log(this.state.data)
    return (
      <div className="App">
        <Searchbar onSubmit={this.getInput} />
        <ImageGallery>
          <ImageGalleryItem hits={this.state.hits} />
        </ImageGallery>

        <Button />
        <Modal />
      </div>
    );
  }
}

export default App;
