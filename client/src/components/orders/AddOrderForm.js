import React, { useState, useContext, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import orderContext from '../context/createContext';

import { PizzaImg, SandwichImg } from '../Styles/icons/icons';
import ItemSelect from './ItemSelect';
const AddOrderForm = () => {
  // eslint-disable-next-line
  const [validated, setValidated] = useState(false);
  const defaultOrder = {
    name: '',
    phone: '',
    address: '',
    qty: '',
    comments: '',
    type: 'pizza',
    item: ''
  };

  const [order, setOrder] = useState(defaultOrder);
  const { name, phone, address, item, type, qty, comments } = order;
  const [theCase, setCase] = useState('Add');
  const myOrderContext = useContext(orderContext);
  useEffect(() => {
    if (myOrderContext.current) {
      setOrder(myOrderContext.current);
      setCase('Edit');
    } else {
      setOrder(defaultOrder);
      setCase('Add');
    }
  }, [myOrderContext]);
  const onChange = (e) =>
    setOrder((state) => {
      if (e.target.name === 'type') {
        return { ...state, [e.target.name]: e.target.value, item: '' };
      }
      return { ...state, [e.target.name]: e.target.value };
    });

  const onSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
    } else {
      e.preventDefault();
      if (myOrderContext.current) {
        myOrderContext.updateOrder(order);
      } else {
        myOrderContext.addOrder(order);
      }

      myOrderContext.clearCurrent();
      return setValidated(false);
    }

    setValidated(true);
  };
  return (
    <>
      <Form
        noValidate
        validated={validated}
        onSubmit={onSubmit}
        className='p-4 border border-dark'
      >
        <h3>{theCase === 'Add' ? 'Add A new order' : 'Edit The Order'} </h3>
        <Form.Group className='mt-3'>
          <Form.Control
            placeholder='Name'
            value={name}
            name='name'
            type='text'
            required
            onChange={onChange}
          />

          <br />
          <Form.Control
            placeholder='phone'
            value={phone}
            name='phone'
            type='text'
            required
            onChange={onChange}
          />
          <br />
          <Form.Control
            placeholder='Address'
            value={address}
            required
            name='address'
            type='text'
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className='my-2 '>
          <Form.Label className='d-block fs-4'>Order Type </Form.Label>
          <Form.Check
            className='d-inline-block w-50'
            type='radio'
            onChange={onChange}
            name='type'
            required
            value='pizza'
            checked={type === 'pizza'}
            onClick={onChange}
            id='pizza'
            label={<PizzaImg w={'25px'} text={'pizza'} />}
          />

          <Form.Check
            className='d-inline-block w-50 '
            type='radio'
            required
            onChange={onChange}
            checked={type === 'sandwich'}
            name='type'
            value='sandwich'
            id='sandwich'
            size={'lg'}
            onClick={onChange}
            label={<SandwichImg w={'25px'} text={'sandwich'} />}
          />

          <div className='my-2'>
            <ItemSelect item={item} onChange={onChange} type={type} />
          </div>
        </Form.Group>
        <Form.Group>
          <Form.Label className='fs-4'>QTY</Form.Label>
          <Form.Select
            name='qty'
            value={qty}
            required
            onChange={onChange}
            id='inlineFormCustomSelect'
          >
            <option value=''>Select</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label className='fs-4'> Order comments</Form.Label>
          <Form.Control
            as='textarea'
            onChange={onChange}
            required
            name='comments'
            value={comments}
            placeholder='Leave a comment here'
          />
        </Form.Group>
        <button className='btn btn-success w-100 mt-3 mb-1 '>
          {theCase === 'Add' ? 'Add A new order' : 'Edit The Order'}
        </button>
        {myOrderContext.current && (
          <button
            className='btn btn-primary w-100'
            onClick={() => myOrderContext.clearCurrent()}
          >
            {' '}
            Clear{' '}
          </button>
        )}
      </Form>
    </>
  );
};

export default AddOrderForm;
