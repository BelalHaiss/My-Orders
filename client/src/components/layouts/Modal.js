import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
function ModalExample({ details }) {
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
            <span className='fs-4'> comments:</span> {details.comments}
          </p>
          <p>
            {' '}
            <span className='fs-4'> Name:</span> {details.name}
          </p>
          <p>
            {' '}
            <span className='fs-4'> phone:</span> {details.phone}
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
