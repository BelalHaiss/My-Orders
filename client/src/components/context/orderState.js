import React, { useReducer } from 'react';
import reducer from './orderRuducer';
import * as types from './types';
import orderContext from './createContext';
import uuid from 'uuid';

const OrderState = (props) => {
  const initialState = {
    orders: [
      {
        id: 1,
        item: 'pizza',
        details: 'hot dog pizzaNo Vegs',
        address: 'el ramd',
        qty: 5
      },
      {
        id: 2,
        item: 'sandwich',
        details: ' 1 fool No Vegs',
        address: 'el ramd',
        qty: 3
      },
      {
        id: 3,
        item: 'pizza',
        details: 'cheese pizza No Vegs',
        address: 'el ramd',
        qty: 1
      },
      {
        id: 4,
        item: 'sandwich',
        details: 'btates No Vegs',
        address: 'el ramd',
        qty: 6
      }
    ]
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  // add order

  // edit order

  // delete order

  // filter orders

  // clear filter

  return (
    <orderContext.Provider
      value={{
        orders: state.orders
      }}
    >
      {props.children}
    </orderContext.Provider>
  );
};

export default OrderState;
