import React, { createContext } from 'react';
import userAPI from '../components/Fetch/user-api';

const Context = createContext();

const user = {
  name: 'Mango',
  email: 'mango@gmail.com',
  avatar: 'https://cdn-icons-png.flaticon.com/512/3038/3038168.png',
};

export default class AuthContext extends React.Component {
  static Consumer = Context.Consumer;

  logIn = () => {
    userAPI.fetchUser().then((user) => this.setState({ user }));
  };

  logOut = () => {
    this.setState({ user: null });
  };

  state = { user: null, onLogIn: this.logIn, onLogOut: this.logOut };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
