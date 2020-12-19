import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';
import Modal from './Modal';

class ImageGalleryItem extends Component {
  // state = {
  //      showModal: false,
  // };

  // componentDidMount() {
  //   this.fetchPic()
  //   this.props.isLoaded(this.state.hits)
  //   console.log((`"gallery - " ${this.state.hits.length}`))
  // }

  // componentDidUpdate(prevProps, prevState) {

  //   if (this.props.query !== prevProps.query) {

  //     this.resetList();
  //     this.fetchPic();
  //   }
  //   if (this.props.page !== prevProps.page) {
  //     this.fetchPic();
  //   }
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: 'smooth',
  //   });
  // }

  // fetchPic = () => {

  //   this.setState({ loading: true });
  //   fetch(
  //     `https://pixabay.com/api/?q=${this.props.query}&page=${this.props.page}&key=18694203-d22239baec913b213273a87a8&image_type=photo&orientation=horizontal&per_page=12`,
  //   ).then(res => {
  //     if (res.ok) {
  //       return res.json();
  //     }

  //     return Promise.reject(
  //       new Error(`Нет картинок по запросу ${this.state.query}`),
  //     );
  //   })
  //     .then(({ hits }) => {
  //       const newPic = hits; this.setState((({ hits }) =>
  //         ({ hits: [...hits, ...newPic] })))
  //     })
  //     .catch(error => this.state({ error }))
  //     .finally(() => this.setState({ loading: false }))

  //   this.props.isLoaded(this.state.hits.length)
  //   console.log((`"gallery - " ${this.state.hits.length}`))
  // }

  // resetList() {
  //   this.setState({ hits: [] })
  // };
  openModal = event => {
    this.props.clickModal(event.target);
    console.log(event.target);
  };

  render() {
    return (
      <>
        {/* <Loader className={s.Loader}
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout= {loading} //3 secs
        display="block"
        /> */}

        {this.props.hits.map(({ id, webformatURL, tags }) => (
          <li key={id} className={s.ImageGalleryItem}>
            <img
              src={webformatURL}
              alt={tags}
              className={s.ImageGalleryItem_image}
              onClick={this.openModal}
            />
          </li>
        ))}
        {/* {showModal && <Modal url={ this.props.hits}/>} */}
      </>
    );
  }
}
export default ImageGalleryItem;
