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
    case types.setCurrent:
      return { ...state, current: action.payload };
    case types.clearCurrent:
      return { ...state, current: null };
    case types.updateOrder:
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.id === action.payload.id ? action.payload : order
        )
      };
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
    default:
      return state;
  }
};

export default reducer;
