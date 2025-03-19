import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Axios from 'axios';
// import { Link } from 'react-router';
import { ApiService } from '../services/ApiService';
import AuthorItem from './AuthorItem';

const BookId = () => {
  // state = { books: [] };
  let { id } = useParams();
  const [author, setAuthor] = useState({ id: null, text: null });

  // async componentDidMount() {
  //   const response = await Axios.get(`http://localhost:3000/todos`);
  //   console.log(response.data);
  //   this.setState({ books: response.data });
  // }

  // console.log(this.props.url);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const data = await ApiService.getById(id);
      console.log(data);
      setAuthor({ ...data });
    };
    fetchData();
  }, [id]);

  console.log(id);

  // if (!author) return <h2>Loading...</h2>;
  // const { text } = author;

  return (
    <>
      <h1>Сторінка однієї книги{id}</h1>

      <p>{author.name}</p>

      <AuthorItem author={author} />
      {/* <p>{text}</p> */}
    </>
  );
};

export default BookId;
