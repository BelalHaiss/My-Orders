import React, { useState, useContext } from 'react';
import { Form } from 'react-bootstrap';
import orderContext from '../context/createContext';

import { PizzaImg, SandwichImg } from '../Styles/icons/icons';
import ItemSelect from './ItemSelect';
const AddOrderForm = () => {
  // eslint-disable-next-line
  const [validated, setValidated] = useState(false);

  const myOrderContext = useContext(orderContext);
  const [order, setOrder] = useState({
    name: '',
    phone: '',
    address: '',
    qty: '',
    details: '',
    type: 'pizza',
    item: ''
  });
  const { name, phone, address, item, type, qty, details } = order;
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
      myOrderContext.addOrder(order);
      setOrder({
        name: '',
        phone: '',
        address: '',
        qty: '',
        type: 'pizza',
        details: '',
        item: ''
      });
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
        <h3>Add A new order</h3>
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
            value={address}
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
          <Form.Label className='fs-4'> Order Details</Form.Label>
          <Form.Control
            as='textarea'
            onChange={onChange}
            required
            name='comments'
            value={details.comments}
            placeholder='Leave a comment here'
          />
        </Form.Group>
        <button className='btn btn-success w-100 mt-3 mb-1 '>Add Order</button>
      </Form>
    </>
  );
};

export default AddOrderForm;
