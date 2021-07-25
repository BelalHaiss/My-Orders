import React, { useContext } from 'react';
import orderContext from '../context/createContext';
import ModalExample from '../layouts/Modal';

import { PizzaImg, SandwichImg } from '../Styles/icons/icons';

const OrderItem = ({ order }) => {
  // eslint-disable-next-line
  const { type, item, details, qty, address, id } = order;
  const theOrderContext = useContext(orderContext);
  const deleteOrder = () => {
    theOrderContext.deleteOrder(id);
  };
  return (
    <div
      className={`'card text-white   p1 mb-1 bg-${
        type === 'pizza' ? 'pizza' : 'danger'
      } ' `}
    >
      <div className='card-header text-center bg-dark'>
        {type === 'pizza' ? (
          <PizzaImg text={item} w={'50px'} />
        ) : (
          <SandwichImg text={item} w={'50px'} />
        )}
      </div>
      <div className='card-body'>
        <div className='row'>
          <div className='col-8   d-flex flex-column  align-items-center '>
            <p className='fs-4   mb-0 text-light  '>Order Details </p>
            <span>{details.comments.slice(0, 20)}</span>
            <span>{<ModalExample details={details} id={id} />}</span>
          </div>
          <div className='col-4    align-items-center d-flex flex-column '>
            <p className=' fs-4 mb-0'>Quantity</p>
            <span className='fs-5'>{qty}</span>
          </div>
        </div>
      </div>
      <div className='card-footer d-flex form-order-footer flex-wrap justify-content-around align-items-start  bg-dark'>
        <button
          className='btn btn-danger '
          onClick={deleteOrder}
          style={{ flexBasis: '150px' }}
        >
          {' '}
          Delete Order
        </button>
        <button
          className='btn btn-warning edit-form-btn'
          style={{ flexBasis: '150px' }}
        >
          {' '}
          Edit Order
        </button>
      </div>
    </div>
  );
};

export default OrderItem;
