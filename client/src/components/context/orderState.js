import React, { useReducer } from 'react';
import reducer from './orderRuducer';
import * as types from './types';
import orderContext from './createContext';
import { v4 as uuidv4 } from 'uuid';

const OrderState = (props) => {
  const initialState = {
    orders: [
      {
        id: 1,
        type: 'sandwich',
        item: 'flafel',
        name: 'belal',
        phone: '01032758989',
        address: '6st-el ramd',
        comments: 'no vegs',
        qty: 5
      },
      {
        id: 2,
        type: 'pizza',
        item: 'hot dog',
        name: 'belal',
        phone: '01032758989',
        address: '6st-el ramd',
        comments: 'no vegs',
        qty: 3
      },
      {
        id: 3,
        type: 'pizza',
        item: 'hot dog',
        name: 'belal',
        phone: '01032758989',
        address: '6st-el ramd',
        comments: 'no vegs',
        qty: 1
      },
      {
        id: 4,
        type: 'sandwich',
        item: 'French fries',
        name: 'belal',
        phone: '01032758989',
        address: '6st-el ramd',
        comments: 'no vegs',
        qty: 9
      }
    ],
    current: null,
    filtered: null
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  // add order
  const addOrder = (order) => {
    order.id = uuidv4();

    dispatch({ type: types.addOrder, payload: order });
  };
  // setCurrent
  const setCurrent = (order) => {
    dispatch({ type: types.setCurrent, payload: order });
  };

  // clearCurrent
  const clearCurrent = (order) => {
    dispatch({ type: types.clearCurrent });
  };
  // edit order
  const updateOrder = (order) => {
    dispatch({ type: types.updateOrder, payload: order });
  };
  // delete order
  const deleteOrder = (id) => {
    dispatch({ type: types.deleteOrder, payload: id });
  };
  // filter orders
  const setFilter = (text) => {
    dispatch({ type: types.setFilter, payload: text });
  };
  // clear filter
  const clearFilter = (text) => {
    dispatch({ type: types.clearFilter });
  };
  return (
    <orderContext.Provider
      value={{
        orders: state.orders,
        addOrder,
        deleteOrder,
        current: state.current,
        filtered: state.filtered,
        setFilter,
        clearFilter,
        setCurrent,
        clearCurrent,
        updateOrder
      }}
    >
      {props.children}
    </orderContext.Provider>
  );
};

export default OrderState;
