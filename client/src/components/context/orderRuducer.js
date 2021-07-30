import * as types from './types';

const initialState = {
  orders: [],
  current: null,
  loading: true,
  filtered: null,
  orderError: null
};
const reducer = (state, action) => {
  switch (action.type) {
    case types.addOrder:
      return { ...state, orders: [...state.orders, action.payload] };

    case types.getOrders:
      const newState = { ...state, orders: action.payload };
      return newState;

    case types.deleteOrder:
      return {
        ...state,
        orders: state.orders.filter((order) => order._id !== action.payload)
      };
    case types.setCurrent:
      return { ...state, current: action.payload };
    case types.clearOrders:
      return initialState;
    case types.clearCurrent:
      return { ...state, current: null };
    case types.clearError:
      return { ...state, orderError: null };
    case types.updateOrder:
      return {
        ...state,
        orders: state.orders.map((order) =>
          order._id === action.payload._id ? action.payload : order
        )
      };
    case types.orderError:
      return { ...state, orderError: action.payload };
    case types.setFilter:
      return {
        ...state,
        filtered: state.orders.filter((order) => {
          try {
            const reText = new RegExp(`${action.payload}`, `gi`);

            return (
              order.item.match(reText) ||
              order.name.match(reText) ||
              order.type.match(reText)
            );
          } catch (e) {
            return null;
          }
        })
      };
    case types.clearFilter:
      return { ...state, filtered: null };
    case types.setLoading:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;
