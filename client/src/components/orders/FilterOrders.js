import React, { useRef, useContext, useEffect } from 'react';
import orderContext from '../context/createContext';
import { Form } from 'react-bootstrap';
function FilterOrders() {
  const text = useRef('');
  const theOrderContext = useContext(orderContext);
  useEffect(() => {
    if (!theOrderContext.filtered) {
      text.current.value = '';
    }
  });
  const onChange = (e) => {
    if (text.current.value !== '') {
      theOrderContext.setFilter(e.target.value);
    } else {
      theOrderContext.clearFilter();
    }
  };
  return (
    <div>
      <Form.Control
        className='w-50 mx-auto mb-4'
        type='text'
        ref={text}
        onChange={onChange}
        placeholder='Filter Orders ....'
      />
    </div>
  );
}

export default FilterOrders;
