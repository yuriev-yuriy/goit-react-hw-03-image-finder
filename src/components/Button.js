import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './Button.module.css';

class Button extends Component {
  loadMore = () => {
    this.props.getPage();
  };

  render() {
    return (
      <button className={s.Button} type="button" onClick={this.loadMore}>
        Load More
      </button>
    );
  }
}

export default Button;
