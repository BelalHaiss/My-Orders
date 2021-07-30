import React from 'react';
import spinner from '../Styles/spinner.gif';

const Spinner = () => {
  return (
    <div>
      <img
        className='img-fluid'
        src={spinner}
        alt=''
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </div>
  );
};

export default Spinner;
