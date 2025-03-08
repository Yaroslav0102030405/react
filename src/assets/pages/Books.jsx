import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router';

class BookId extends React.Component {
  state = { books: [] };

  async componentDidMount() {
    const response = await Axios.get('http://localhost:3000/todos');
    console.log(response.data);
    this.setState({ books: response.data });
  }
  render() {
    return (
      <>
        <h1>Сторінка всіх книг</h1>
        <ul>
          {this.state.books.map(({ id, text }) => (
            <li key={id}>
              <Link to={`/books/${id}`}>{text}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default BookId;
