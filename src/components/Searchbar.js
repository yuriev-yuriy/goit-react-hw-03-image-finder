import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    input: '',
  };
  changeInput = event => {
    this.setState({ input: event.currentTarget.value.toLowerCase() });
    console.log(event.currentTarget.value);
  };

  makeSubmit = event => {
    event.preventDefault();
    if (this.state.input.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.input);
    console.log(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className="SearchForm" onSubmit={this.makeSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="s.SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
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

export default Searchbar;
