import React from 'react';

const Modal = ({ details }) => {
  return (
    <div className='mt-2'>
      <button
        type='button'
        className='btn btn-dark'
        data-bs-toggle='modal'
        data-bs-target='#staticBackdrop'
      >
        More Details
      </button>
      <div
        className='modal fade'
        id='staticBackdrop'
        data-bs-keyboard='false'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title text-dark' id='staticBackdropLabel'>
                Order Details
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body alert alert-warning'>{details}</div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
