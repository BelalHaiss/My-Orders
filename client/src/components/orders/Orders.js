import React, { useContext } from 'react';
import orderContext from '../context/createContext';
import FilterOrders from './FilterOrders';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import OrderItem from './OrderItem';
const Orders = () => {
  const Context = useContext(orderContext);
  const { orders, filtered } = Context;

  if (!orders.length) {
    return (
      <div>
        <h5 className='text-danger'>You Don`t have Any orders </h5>
      </div>
    );
  }

  return (
    <div>
      <FilterOrders />
      <TransitionGroup>
        {filtered
          ? filtered.map((order) => (
              <CSSTransition
                timeout={500}
                classNames='trans-item'
                key={order.id}
              >
                <OrderItem order={order} />
              </CSSTransition>
            ))
          : orders.map((order) => (
              <CSSTransition
                timeout={500}
                classNames='trans-item'
                key={order.id}
              >
                <OrderItem order={order} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </div>
  );
};

export default Orders;
