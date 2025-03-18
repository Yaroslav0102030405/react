import React from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router';

const Testx = () => {
  // let history = useHistory();
  // let navigate = useNavigate();
  let params = useParams();
  console.log(params);

  // console.log(navigate);

  return (
    <>
      <h1>Тестовый период ттттттттттт</h1>
    </>
  );
};

export default Testx;
