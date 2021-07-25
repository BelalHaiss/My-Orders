import React, { useContext } from 'react';
import orderContext from '../context/createContext';

import OrderItem from './OrderItem';
const Orders = () => {
  const Context = useContext(orderContext);
  const { orders } = Context;

  return (
    <div>
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
};

export default Orders;
