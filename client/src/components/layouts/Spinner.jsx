import React from 'react';
import spinner from '../Styles/spinner.gif';

const Spinner = ({ w }) => {
  return (
    <div>
      <img
        className='img-fluid '
        src={spinner}
        alt=''
        style={{
          width: w ? w : '200px',
          margin: 'auto',
          marginTop: '30vh',
          display: 'block'
        }}
      />
    </div>
  );
};

export default Spinner;
