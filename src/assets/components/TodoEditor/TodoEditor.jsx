import React from 'react';

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

export default TodoEditor;
