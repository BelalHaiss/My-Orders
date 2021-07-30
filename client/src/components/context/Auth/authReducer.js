import * as types from './authTypes';
const initialState = {
  user: null,
  isAuth: null,
  loading: true,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.registerSuccess:
    case types.loginSuccess:
      return {
        ...state,
        user: action.payLoad,
        loading: false,
        isAuth: true
      };
    case types.registerFail:
      return { ...initialState, error: action.payLoad, loading: false };
    case types.loginFail:
      return { ...initialState, error: action.payLoad, loading: false };

    case types.logout:
      return { ...initialState, loading: false };
    case types.clearError: {
      return { ...state, error: null };
    }
    default:
      return initialState;
  }
};

export default reducer;
