import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import newsApi from '../news-api/news-api';
import SearchForm from '../SearchForm/SearchForm';

axios.defaults.headers.common['Authorization'] =
  'Bearer 2b084a585a6744c9a99186e76694f8db';

const APIfetchArticles = ({
  searchQuery = '',
  currentPage = 1,
  pageSize = 4,
} = {}) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`
    )
    .then((response) => response.data.articles);
};

const ArticlesView = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = () => {
      setIsLoading(true);

      APIfetchArticles({ searchQuery: query, currentPage })
        .then((responseArticles) => {
          setArticles((prevArticles) => [...prevArticles, ...responseArticles]);
          setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
        })
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false));
    };
    // fetchArticles();

    // return () => {
    //   return !fetchArticles();
    // };
  }, [currentPage, query]);

  const onChangeQuery = (query) => {
    setQuery(query), setCurrentPage(1), setArticles([]), setError(null);
  };

  const shouldRenderLoadMoreButton = articles.length > 0 && !isLoading;

  return (
    <>
      {error && <h1>Ой ошибка, все пропало!!!</h1>}
      <h1>Статьи</h1>
      <SearchForm onSubmit={onChangeQuery} />
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        {articles.map(({ title, url, author, description, urlToImage }) => (
          <li
            style={{
              width: '250px',
              padding: '10px',
              border: '1px solid black',
            }}
            key={title}
          >
            <a href={url}>
              <img width="200" height="120" src={urlToImage} alt={title} />
              <h2>{author}</h2>
              <p>{description}</p>
            </a>
          </li>
        ))}
      </ul>

      {isLoading && <span className="loader"></span>}

      {shouldRenderLoadMoreButton && (
        <button type="button" onClick={APIfetchArticles}>
          Заргузить еще...{' '}
        </button>
      )}
    </>
  );
};

// class ArticlesView extends React.Component {
//   state = {
//     articles: [],
//     currentPage: 1,
//     searchQuery: '',
//     isLoading: false,
//     error: null,
//   };

//   // componentDidMount() {}

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.searchQuery !== this.state.searchQuery) {
//       this.fetchArticles();
//     }
//   }

//   onChangeQuery = (query) => {
//     this.setState({
//       searchQuery: query,
//       currentPage: 1,
//       articles: [],
//       error: null,
//     });
//   };

//   fetchArticles = () => {
//     const { currentPage, searchQuery } = this.state;

//     const options = {
//       searchQuery,
//       currentPage,
//     };

//     this.setState({ isLoading: true });

//     newsApi
//       .fetchArticles(options)
//       .then((articles) => {
//         this.setState((prevState) => ({
//           articles: [...prevState.articles, ...articles],
//           currentPage: prevState.currentPage + 1,
//         }));
//       })
//       .catch((error) => this.setState({ error }))
//       .finally(() => this.setState({ isLoading: false }));
//   };

//   render() {
//     const { articles, isLoading, error } = this.state;
//     const shouldRenderLoadMoreButton = articles.length > 0 && !isLoading;

//     return (
//       <>
//         {error && <h1>Ой ошибка, все пропало!!!</h1>}
//         <h1>Статьи</h1>

//         <SearchForm onSubmit={this.onChangeQuery} />

//         <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
//           {this.state.articles.map(
//             ({ title, url, author, description, urlToImage }) => (
//               <li
//                 style={{
//                   width: '250px',
//                   padding: '10px',
//                   border: '1px solid black',
//                 }}
//                 key={title}
//               >
//                 <a href={url}>
//                   <img width="200" height="120" src={urlToImage} alt={title} />
//                   <h2>{author}</h2>
//                   <p>{description}</p>
//                 </a>
//               </li>
//             )
//           )}
//         </ul>

//         {isLoading && <span className="loader"></span>}

//         {shouldRenderLoadMoreButton && (
//           <button type="button" onClick={this.fetchArticles}>
//             Заргузить еще...
//           </button>
//         )}
//       </>
//     );
//   }
// }

export default ArticlesView;
