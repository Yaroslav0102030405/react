import React from 'react';
import Axios from 'axios';
// import { Link } from 'react-router';

class BookId extends React.Component {
  state = { authors: [] };

  async componentDidMount() {
    const response = await Axios.get('http://localhost:3000/authors');
    console.log(response.data);
    this.setState({ authors: response.data });
  }
  render() {
    // console.log(this.state.books.name);
    return (
      <>
        <h1>Сторінка однієї книги</h1>

        {/* <ul>
          {this.state.authors.map(({ id, name }) => (
            <li key={id}>
              <Link to={`/boo/${id}`}>{name}</Link>
            </li>
          ))}
        </ul> */}
      </>
    );
  }
}

export default BookId;
