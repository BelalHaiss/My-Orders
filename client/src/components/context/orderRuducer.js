import * as types from './types';

const reducer = (state, action) => {
  switch (action.type) {
    case types.addOrder:
      return { ...state, orders: [...state.orders, action.payload] };
    case types.deleteOrder:
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
