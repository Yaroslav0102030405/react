import React from 'react';
import AuthContext from '../context/Auth';

const withAuthContext = (WrappedComponent) => {
  return function WithAuthContext(props) {
    return (
      <AuthContext.Consumer>
        {(ctx) => <WrappedComponent {...props} auth={ctx} />}
      </AuthContext.Consumer>
    );
  };
};

export default withAuthContext;
