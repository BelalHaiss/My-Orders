import React from 'react';
import Orders from '../orders/Orders';
import { Container, Row, Col, Form } from 'react-bootstrap';
import AddOrderForm from '../orders/AddOrderForm';

const Home = () => {
  return (
    <Container fluid={'md'}>
      <Row>
        <Col xs={'12'} md={'7'} className='ms-auto'>
          <AddOrderForm />
        </Col>

        <Col xs={'12'} md={'5'} className='ms-auto orders__Component'>
          <Orders />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
