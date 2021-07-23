import React, { useContext } from 'react';
import orderContext from '../context/createContext';

import OrderItem from './OrderItem';
const Orders = () => {
  const Context = useContext(orderContext);
  const { orders } = Context;

  return (
    <div className=' row'>
      <div className='col-7 col-sm-5 ms-auto'>
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
