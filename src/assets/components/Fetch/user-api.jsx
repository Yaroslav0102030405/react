const delay = 300;

const user = {
  name: 'Mango',
  email: 'mango@gmail.com',
  avatar: 'https://cdn-icons-png.flaticon.com/512/3038/3038168.png',
};

const fetchUser = () => {
  return new Promise((resolve) => setTimeout(() => resolve(user), delay));
};

export default { fetchUser };
