import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
function ModalExample({ details: { comments, address, name, phone } }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='dark' className='mt-2' onClick={handleShow}>
        More Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {' '}
            <span className='fs-5'> comments:</span> {comments}
          </p>
          <p>
            {' '}
            <span className='fs-5'> Name:</span> {name}
          </p>
          <p>
            {' '}
            <span className='fs-5'> phone:</span> {phone}
          </p>
          <p>
            {' '}
            <span className='fs-5'> address:</span> {address}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalExample;
