import React, { useState, useEffect } from 'react';

const Test = () => {
  const [counter, setCounter] = useState(1);

  const onIncrement = () => {
    setCounter(counter + 1);
  };

  const onDecrement = () => {
    setCounter(counter - 1);
  };

  // первый рендер
  // каждый рендер
  //каждый рендер при изменении какого-то стейта или пропса
  // последний рендер

  return (
    <>
      <button type="button" onClick={onIncrement}>
        +
      </button>
      <span>{counter}</span>
      <button type="button" onClick={onDecrement}>
        -
      </button>
    </>
  );
};

export default Test;
