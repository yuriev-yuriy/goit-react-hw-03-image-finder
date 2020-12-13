import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ hits }) => {
  // const { hits } = data;
  // console.log(props)
  // console.log(data);
  console.log(hits);
  // console.log(data.pageURL);

  return (
    <>
      {hits.map(({ id, webformatURL, tags }) => (
        <li key={id} className={s.ImageGalleryItem}>
          <img
            src={webformatURL}
            alt={tags}
            className={s.ImageGalleryItem_image}
          />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;
