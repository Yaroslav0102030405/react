import React from 'react';
import Axios from 'axios';

const BookId = () => {
  // async componentDidMount() {
  //   const response = await Axios.get(`http://localhost:3000/books/${id}`);
  //   console.log(response.data);
  //   this.setState({ books: response.data });
  // }

  return (
    <>
      <h1>Сторінка однієї книги</h1>

      {/* <ul>
          {this.state.books.map(({ id, name }) => (
            <li key={id}>
              <h1>{name}</h1>
            </li>
          ))}
        </ul> */}
    </>
  );
};

export default BookId;
