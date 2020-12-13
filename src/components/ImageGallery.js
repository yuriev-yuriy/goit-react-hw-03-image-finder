import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import { Children } from 'react';

const ImageGallery = ({ children }) => {
  return (
    <ul className={s.ImageGallery}>
      {children}
      {/* <!-- Набор <li> с изображениями --> */}
    </ul>
  );
};

export default ImageGallery;
