import React, { useReducer } from 'react';
import reducer from './orderRuducer';
import axios from 'axios';
import * as types from './types';
import orderContext from './createContext';

const OrderState = (props) => {
  const initialState = {
    orders: [],
    current: null,
    loading: true,
    filtered: null,
    orderError: null
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  // setLoading to false
  const setLoading = () => {
    dispatch({ type: types.setLoading });
  };
  // add order
  const addOrder = async (order) => {
    try {
      const res = await axios.post('/api/orders', order);
      dispatch({ type: types.addOrder, payload: res.data });

      setLoading();
    } catch (e) {
      const err = await e.response.data.msg;

      dispatch({ type: types.orderError, payload: err });
      setTimeout(() => dispatch({ type: types.clearError }), 500);
      setLoading();
    }
  };
  // get orders
  const getOrders = async () => {
    try {
      const res = await axios.get('/api/orders', { withCredentials: true });
      dispatch({ type: types.getOrders, payload: res.data });
      setLoading();
    } catch (e) {
      const err = await e.response.data.msg;
      setLoading();
      dispatch({ type: types.orderError, payload: err });
      setTimeout(() => dispatch({ type: types.clearError }), 500);
    }
  };
  const updateOrder = async (order) => {
    try {
      const res = await axios.put(`/api/orders/${order._id}`, order);
      dispatch({ type: types.updateOrder, payload: res.data });
    } catch (e) {
      const err = await e.response.data.msg;
      setLoading();
      dispatch({ type: types.orderError, payload: err });
      setTimeout(() => dispatch({ type: types.clearError }), 500);
    }
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
  // delete order
  const deleteOrder = async (id) => {
    try {
      await axios.delete(`/api/orders/${id}`);
      dispatch({ type: types.deleteOrder, payload: id });
    } catch (e) {
      const err = await e.response.data.msg;
      setLoading();
      dispatch({ type: types.orderError, payload: err });
      setTimeout(() => dispatch({ type: types.clearError }), 500);
    }
  };
  // filter orders
  const setFilter = (text) => {
    dispatch({ type: types.setFilter, payload: text });
  };
  // clear filter
  const clearFilter = (text) => {
    dispatch({ type: types.clearFilter });
  };
  const clearOrders = () => {
    dispatch({ type: types.clearOrders });
  };
  return (
    <orderContext.Provider
      value={{
        orders: state.orders,
        addOrder,
        deleteOrder,
        current: state.current,
        filtered: state.filtered,
        clearOrders,
        setFilter,
        clearFilter,
        setCurrent,
        loading: state.loading,
        clearCurrent,
        orderError: state.orderError,
        updateOrder,
        getOrders
      }}
    >
      {props.children}
    </orderContext.Provider>
  );
};

export default OrderState;
