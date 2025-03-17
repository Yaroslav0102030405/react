import React, { useState, useEffect, useRef } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  const intervalId = useRef();

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <>
      <p>Current time: {time.toLocaleTimeString()}</p>
      <button type="button" onClick={stop}>
        STOP TIME
      </button>
    </>
  );
};

export default Clock;
