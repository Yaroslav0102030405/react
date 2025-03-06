import axios from 'axios';

axios.defaults.headers.common['Authorization'] =
  'Bearer 2b084a585a6744c9a99186e76694f8db';

const fetchArticles = ({ searchQuery = '', currentPage = 1, pageSize = 4 }) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`
    )
    .then((response) => response.data.articles);
};

export default { fetchArticles };
