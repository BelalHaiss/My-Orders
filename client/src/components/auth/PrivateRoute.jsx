import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import authContext from '../context/Auth/authContext';
import Spinner from '../layouts/Spinner';
const PrivateRoute = ({ component: Component, ...rests }) => {
  const theAuthContext = useContext(authContext);
  const { isAuth, loading } = theAuthContext;

  if (loading) {
    return <Spinner />;
  }

  return (
    <Route
      {...rests}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
};

export default PrivateRoute;
