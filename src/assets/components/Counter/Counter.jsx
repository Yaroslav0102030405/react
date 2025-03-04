import React from 'react';
import Controls from './Controls';
import Value from './Value';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  //   constructor() {
  //     super();

  //     this.state = {
  //       value: this.props.initialValue,
  //     };
  //   }

  state = {
    value: this.props.initialValue,
  };

  onIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  onDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
      //  this.state.value - 1
    }));
  };

  render() {
    return (
      <>
        <Value value={this.state.value} />
        {/* <span>{this.state.value}</span> */}
        <Controls
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
        />
        {/* <button type="button" onClick={this.onIncrement}>
          +
        </button>
        <button type="button" onClick={this.onDecrement}>
          -
        </button> */}
      </>
    );
  }
}

export default Counter;
