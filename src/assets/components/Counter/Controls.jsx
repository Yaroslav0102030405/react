const Controls = ({ step, onIncrement, onDecrement }) => {
  return (
    <>
      <button type="button" onClick={onIncrement}>
        + на {step}
      </button>
      <button type="button" onClick={onDecrement}>
        - на {step}
      </button>
    </>
  );
};

export default Controls;
