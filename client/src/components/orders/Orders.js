import React, { useContext, useEffect } from 'react';
import orderContext from '../context/createContext';

import FilterOrders from './FilterOrders';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '../layouts/Spinner';

import OrderItem from './OrderItem';
import alertContext from '../context/alertContext/alertContext';
const Orders = () => {
  const theAlertContext = useContext(alertContext);
  const Context = useContext(orderContext);
  const { orders, filtered, loading, orderError } = Context;

  useEffect(() => {
    Context.getOrders();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (orderError) {
      theAlertContext.setAlert(orderError, 'danger');
    }
    // eslint-disable-next-line
  }, [orderError]);
  if (loading) {
    return <Spinner w='90' />;
  }
  if (orders && orders.length === 0) {
    return (
      <div className='alert alert-warning' role='alert'>
        <h4 className='alert-heading'>You don`t have any orders.</h4>
        <p>Go And Place one 😎</p>
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
                key={order._id}
              >
                <OrderItem order={order} />
              </CSSTransition>
            ))
          : orders.map((order) => (
              <CSSTransition
                timeout={500}
                classNames='trans-item'
                key={order._id}
              >
                <OrderItem order={order} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </div>
  );
};

export default Orders;
