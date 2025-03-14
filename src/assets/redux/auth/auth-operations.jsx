import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://lpj-tasker.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = (dataUserInitials) => async (dispatch) => {
  dispatch(authActions.reqisterRequest());

  try {
    const response = await axios.post('/users/signup', dataUserInitials);

    dispatch(authActions.reqisterRequest(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error));
  }
};

export default { register };
