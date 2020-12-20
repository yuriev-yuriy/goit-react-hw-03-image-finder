import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    input: '',
  };
  changeInput = event => {
    this.setState({ input: event.currentTarget.value.toLowerCase() });
  };

  makeSubmit = event => {
    event.preventDefault();
    if (this.state.input.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.makeSubmit}>
          <button type={s.SearchFormbutton} className="SearchForm-button">
            <span className={s.SearchFormbuttonlabel}>Search</span>
          </button>

          <input
            className={s.SearchForminput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.input}
            onChange={this.changeInput}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
