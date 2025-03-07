import Axios from 'axios';
import React from 'react';

class Author extends React.Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    const response = await Axios.get('http://localhost:3000/authors');
    console.log(response.data);

    this.setState({ authors: response.data });
  }

  render() {
    return (
      <>
        <h1>Сторінка усіх книг</h1>
        <ul>
          {this.state.authors.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default Author;
