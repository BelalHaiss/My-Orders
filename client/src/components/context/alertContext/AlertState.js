import React, { useReducer } from 'react';
import reducer from './AlertReducer';

import AlertContext from './alertContext';
import { v4 as uuidv4 } from 'uuid';

const AlertState = (props) => {
  const initialState = [];

  const [state, dispatch] = useReducer(reducer, initialState);
  const setAlert = (msg, type, timeout = 500) => {
    const id = uuidv4();
    dispatch({
      type: 'setAlert',
      payLoad: { msg, type, id }
    });
    setTimeout(() => clearAlert(id), timeout);
  };
  const clearAlert = (id) =>
    dispatch({
      type: 'clearAlert',
      payLoad: id
    });

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
        clearAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};
export default AlertState;
