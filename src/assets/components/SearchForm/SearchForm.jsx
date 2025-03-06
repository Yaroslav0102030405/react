import React from 'react';

class SearchForm extends React.Component {
  state = {
    query: '',
  };

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);

    this.setState({ query: '' });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Искать</button>
        </form>
      </>
    );
  }
}

export default SearchForm;
