import React from 'react';
// import { connect } from 'react-redux';
// import todosActions from '../../redux/todos/todos-actions';

class TodoEditor extends React.Component {
  state = {
    message: '',
  };

  handleChange = (e) => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmitText(this.state.message);
    this.reset();
  };

  reset = () => {
    this.setState({ message: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <textarea
            style={{ resize: 'none' }}
            value={this.state.message}
            onChange={this.handleChange}
          ></textarea>
          <button type="submit">Добавить</button>
        </form>
      </>
    );
  }
}

// const mapDispatchProps = (dispatch) => ({
//   onSubmit: (text) => dispatch(todosActions.addTodo(text)),
// });

export default TodoEditor;
