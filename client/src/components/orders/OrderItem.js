import React from 'react';
import Modal from '../layouts/Modal';

import { PizzaImg, SandwichImg } from '../Styles/icons/icons';

const OrderItem = ({ order }) => {
  const { item, details, qty, address } = order;
  console.log();
  return (
    <div
      className={`'card text-white  p1 mb-1 bg-${
        item === 'pizza' ? 'pizza' : 'danger'
      } ' `}
    >
      <div className='card-header text-center bg-dark'>
        {item === 'pizza' ? <PizzaImg /> : <SandwichImg />}ORDER
      </div>
      <div className='card-body'>
        <div className='row'>
          <div className='col-8   d-flex flex-column  align-items-center '>
            <p className='fs-4   mb-0 text-light  '>Order Details </p>
            <span>{details.slice(0, 20)}</span>
            <span>{<Modal details={details} />}</span>
          </div>
          <div className='col-4    align-items-center d-flex flex-column '>
            <p className=' fs-4 mb-0'>Quantity</p>
            <span className='fs-5'>{qty}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
