import PropTypes from 'prop-types';
import s from './Modal.module.css';

const Modal = ({ url, closeModal }) => {
  console.log(url);
  const clickOver = event => {
    if (event.target === event.currentTarget) closeModal();
  };
  return (
    <div className={s.Overlay} onClick={clickOver}>
      <div className={s.Modal}>
        <img
          src="https://pixabay.com/get/57e4d7434251ac14f6da8c7dda7936761336dae753526c48732f73d79f4bcd59ba_1280.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Modal;
