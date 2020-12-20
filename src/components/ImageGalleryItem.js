import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';
import Modal from './Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    largeImg: '',
  };

  openModal = event => {
    this.setState({ showModal: true });
    const largeImg = event.target.dataset.img;
    this.largePic = () => {
      return largeImg;
    };
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <>
        {this.props.hits.map(({ id, webformatURL, tags, largeImageURL }) => (
          <li key={id} className={s.ImageGalleryItem}>
            <img
              src={webformatURL}
              alt={tags}
              data-img={largeImageURL}
              className={s.ImageGalleryItem_image}
              onClick={this.openModal}
            />
          </li>
        ))}
        {this.state.showModal && (
          <Modal url={this.largePic()} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ),
};
export default ImageGalleryItem;
