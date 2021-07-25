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
        item: 'burger',
        details: {
          name: 'belal',
          phone: '01032758989',
          comments: 'no vegs'
        },
        address: '6st-el ramd',
        qty: 5
      },
      {
        id: 2,
        type: 'pizza',
        item: 'hot dog',
        details: {
          name: 'belal',
          phone: '01032758989',
          comments: 'no vegs'
        },
        address: '6st-el ramd',
        qty: 3
      },
      {
        id: 3,
        type: 'pizza',
        item: 'hot dog',
        details: {
          name: 'belal',
          phone: '01032758989',
          comments: 'no vegs'
        },
        address: '6st-el ramd',
        qty: 1
      },
      {
        id: 4,
        type: 'sandwich',
        item: 'French fries',
        details: {
          name: 'belal',
          phone: '01032758989',
          comments: 'no vegs'
        },
        address: '6st-el ramd',
        qty: 6
      }
    ]
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  // add order
  const addOrder = (order) => {
    let theOrder = {};

    theOrder = {
      address: order.address,
      id: uuidv4(),
      type: order.type,
      item: order.item,
      qty: order.qty,
      details: {
        name: order.name,
        phone: order.phone,
        comments: order.comments
      }
    };

    dispatch({ type: types.addOrder, payload: theOrder });
  };

  // edit order

  // delete order
  const deleteOrder = (id) => {
    dispatch({ type: types.deleteOrder, payload: id });
  };
  // filter orders

  // clear filter

  return (
    <orderContext.Provider
      value={{
        orders: state.orders,
        addOrder,
        deleteOrder
      }}
    >
      {props.children}
    </orderContext.Provider>
  );
};

export default OrderState;
