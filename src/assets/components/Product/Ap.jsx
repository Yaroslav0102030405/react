import React, { useState } from 'react';
// import { AuthContext } from './AuthContex';

const Ap = () => {
  //   const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toogle = () => {
    setIsLoggedIn((prev) => !prev);
  };
  return (
    <>
      <h2>{isLoggedIn ? 'Привет, Ярослав!' : 'Сначала войдите'}</h2>
      <br />

      {isLoggedIn ? (
        <button onClick={toogle}>Выйти из системы</button>
      ) : (
        <button onClick={toogle}>Войти в систему</button>
      )}
    </>
  );
};

export default Ap;
