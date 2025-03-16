import React, { useState } from 'react';

const useCounter = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1);
  };

  const onDecrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <p>You cliked {count} times</p>
      <button type="button" onClick={onIncrement}>
        Увеличить значение
      </button>
      <button type="button" onClick={onDecrement}>
        Уменьшить
      </button>
    </>
  );
};

export default useCounter;
