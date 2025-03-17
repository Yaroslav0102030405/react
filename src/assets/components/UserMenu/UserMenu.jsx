import React from 'react';

// import ctxAuthContext from '../../context/authContext';
import withAuthContext from '../../hoc/withAuthContext';

const userMenu = ({ auth }) => {
  // const { name } = useContext(ctxAuthContext);

  return (
    <>
      {auth.user ? (
        <div>
          <img
            src={auth.user.avatar}
            alt={auth.user.name}
            width="50"
            style={{ borderRadius: '50%' }}
          />
          <span>Welcome!, {name}</span>
          <button type="button" onClick={auth.onLogOut}>
            Log Out
          </button>
        </div>
      ) : (
        <button type="button" onClick={auth.onLogIn}>
          Log In
        </button>
      )}
    </>
  );
};

export default withAuthContext(userMenu);
