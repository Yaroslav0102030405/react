import React from 'react';
import { connect } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

class RegisterPage extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <>
        <form onSubmit={this.onSubmit}>
          <label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.onChange}
            />
          </label>
          <label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.onChange}
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.onChange}
            />
          </label>

          <button type="submit">Зарегестрироваться</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = { onRegister: authOperations.register };

export default connect(null, mapDispatchToProps)(RegisterPage);
