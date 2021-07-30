import React, { useReducer } from 'react';
import AuthContext from './authContext';
import axios from 'axios';
import * as types from './authTypes';
import reducer from './authReducer';

const AuthState = (props) => {
  const initialState = {
    user: null,
    isAuth: null,
    loading: true,
    error: null
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  // laod user

  //  register user
  const regiserUser = async (user) => {
    try {
      const res = await axios.post('/api/users', user);
      dispatch({ type: types.registerSuccess, payLoad: res.data });
    } catch (e) {
      const err = await e.response.data.msg;
      dispatch({ type: types.registerFail, payLoad: err });
    }
  };
  // login user
  const loginUser = async (user) => {
    try {
      const res = await axios.post('/api/auth', { ...user });
      dispatch({ type: types.loginSuccess, payLoad: res.data });
    } catch (e) {
      const err = await e.response.data.msg;

      dispatch({ type: types.loginFail, payLoad: err });
    }
  };

  const isLoginUser = async () => {
    try {
      const res = await axios.get('/api/auth', { withCredentials: true });
      dispatch({ type: types.loginSuccess, payLoad: res.data });
    } catch (e) {
      dispatch({ type: types.loginFail });
    }
  };
  // logout
  const logout = async () => {
    try {
      const res = await axios.post('/api/auth/logout', {
        withCredentials: true
      });

      dispatch({ type: types.logout });
    } catch (e) {
      throw e;
    }
  };
  // clear errors
  const clearError = () => {
    dispatch({ type: types.clearError });
  };
  return (
    <AuthContext.Provider
      value={{
        isAuth: state.isAuth,
        loading: state.loading,
        error: state.error,
        user: state.user,
        regiserUser,
        loginUser,
        isLoginUser,
        clearError,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
