import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router';

const BookId = () => {
  // state = { books: [] };
  const [books, setBooks] = useState([]);

  // async componentDidMount() {
  //   const response = await Axios.get('http://localhost:3000/todos');
  //   console.log(response.data);
  //   this.setState({ books: response.data });
  // }

  useEffect(() => {
    // if (!books) return;

    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/todos');

      setBooks(response.data);
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <h1>Сторінка всіх книг</h1>

      <ul>
        {books.map(({ id, text }) => (
          <li key={id}>
            <Link to={`/books/${id}`}>{text}</Link>
            <br />
            <Link to={`/books/${id}`}>Узнать больше</Link>
            <br />
            <button
              type="button"
              onClick={() => {
                navigate(`/books/${id}`);
              }}
            >
              Кнопка перехода
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BookId;
