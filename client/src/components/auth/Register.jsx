import React, { useContext, useState, useEffect } from 'react';
import alertContext from '../context/alertContext/alertContext';

import { Form } from 'react-bootstrap';
import authContext from '../context/Auth/authContext';
const Register = (props) => {
  const [validated, setValidated] = useState(false);
  const myAlertContext = useContext(alertContext);
  const theAuthContext = useContext(authContext);
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
    password2: ''
  });
  const { email, password, password2, username } = user;
  useEffect(() => {
    if (theAuthContext.isAuth) {
      props.history.push('/');
    }
    if (theAuthContext.error !== null && theAuthContext.error) {
      console.log(theAuthContext.error);
      myAlertContext.setAlert(theAuthContext.error, 'danger');
      theAuthContext.clearError();
    } // eslint-disable-next-line
  }, [theAuthContext.error, theAuthContext.isAuth]);
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
    } else {
      e.preventDefault();

      if (password !== password2) {
        myAlertContext.setAlert('Passwords are not the same ', 'danger');
      } else {
        theAuthContext.regiserUser({ email, username, password });
      }
      return setValidated(false);
    }

    setValidated(true);
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 mt-5 mx-auto col-sm-10 col-lg-6'>
          <h1 className='text-center'>
            Account <span className='text-primary'>Register</span>{' '}
          </h1>
          <Form
            noValidate
            validated={validated}
            onSubmit={onSubmit}
            className=' p-4  mt-2'
          >
            <Form.Group>
              <Form.Label htmlFor='username' className='fs-5'>
                Username
              </Form.Label>
              <Form.Control
                required
                name='username'
                type='text'
                minLength={5}
                onChange={onChange}
                id='username'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor='email' className='fs-5'>
                {' '}
                Email Address
              </Form.Label>
              <Form.Control
                required
                type='email'
                onChange={onChange}
                name='email'
                id='email'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor='password' className='fs-5'>
                {' '}
                password
              </Form.Label>
              <Form.Control
                required
                autoComplete='password'
                type='password'
                name='password'
                minLength={8}
                onChange={onChange}
                id='password'
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor='password2' className='mt-3 fs-5'>
                {' '}
                Confirm Password
              </Form.Label>
              <Form.Control
                required
                id='password2'
                minLength={8}
                name='password2'
                autoComplete='password'
                type='password'
                onChange={onChange}
              />
            </Form.Group>
            <button className='my-3 btn btn-primary w-100'>Register</button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Register;
