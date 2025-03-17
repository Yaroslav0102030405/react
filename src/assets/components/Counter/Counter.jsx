import React from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import Value from './Value';
import * as actions from '../../redux/counter/counter-actions';

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <>
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: (value) => dispatch(actions.increment(value)),
    onDecrement: (value) => dispatch(actions.decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// class Counter extends React.Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   state = {
//     value: this.props.initialValue,
//   };

//   onIncrement = () => {
//     this.setState({ value: this.state.value + 1 });
//   };

//   onDecrement = () => {
//     this.setState((prevState) => ({
//       value: prevState.value - 1,
//     }));
//   };

//   render() {
//     return (
//       <>
//         <Value value={this.state.value} />
//         <Controls
//           onIncrement={this.onIncrement}
//           onDecrement={this.onDecrement}
//         />
//       </>
//     );
//   }
// }

// export default Counter;
