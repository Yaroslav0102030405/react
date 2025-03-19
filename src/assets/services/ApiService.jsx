import axios from 'axios';

export const ApiService = {
  async getById(id) {
    const response = await axios.get(`http://localhost:3000/authors?id=${id}`);

    return response.data[0];
  },
};
