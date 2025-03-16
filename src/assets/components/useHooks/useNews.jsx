import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UseNews = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get('https://hn.algolia.com/api/v1/search?query=react')
      .then(({ data }) => setArticles(data.hits))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <ul>
        {articles.map(({ objectID, title, url }) => (
          <li key={objectID}>
            <a href={url} target="_blank" rel="nooperen noreferrer">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UseNews;
