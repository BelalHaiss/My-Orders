import React from 'react';
import { Form } from 'react-bootstrap';

const ItemSelect = ({ type, onChange, item }) => {
  return (
    <Form.Select required onChange={onChange} name='item'>
      <option selected={item === ''} value=''>
        {' '}
        select from menu
      </option>
      <option value={type === 'pizza' ? 'Margherita' : 'Burger'}>
        {type === 'pizza' ? 'Margherita' : 'Burger'}
      </option>
      <option value={type === 'pizza' ? 'Formaggio' : '7alawa'}>
        {type === 'pizza' ? 'Formaggio' : '7alawa'}
      </option>
      <option value={type === 'pizza' ? 'Meat Town' : 'flafel'}>
        {type === 'pizza' ? 'Meat Town' : 'flafel'}
      </option>
      <option value={type === 'pizza' ? 'fried chicken' : 'French fries'}>
        {type === 'pizza' ? 'chicken' : 'French fries'}
      </option>
    </Form.Select>
  );
};
export default ItemSelect;
