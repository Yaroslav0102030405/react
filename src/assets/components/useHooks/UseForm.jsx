import React, { useState, useEffect } from 'react';

const UseForm = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log(email);
  }, [email]);

  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log(password);
  }, [password]);

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    alert(`${email}, ${password}`);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          <input type="email" onChange={updateEmail} value={email} />
        </label>
        <label>
          <input type="password" onChange={updatePassword} value={password} />
        </label>

        <button type="submit">Sign up</button>
      </form>
    </>
  );
};

export default UseForm;
