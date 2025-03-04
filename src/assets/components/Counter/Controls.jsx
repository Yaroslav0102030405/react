const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <>
      <button type="button" onClick={onIncrement}>
        +
      </button>
      <button type="button" onClick={onDecrement}>
        -
      </button>
    </>
  );
};

export default Controls;
