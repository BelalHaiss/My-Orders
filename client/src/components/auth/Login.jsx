import React, { useState, useContext, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import alertContext from '../context/alertContext/alertContext';
import authContext from '../context/Auth/authContext';

const Login = (props) => {
  const [validated, setValidated] = useState(false);
  const theAuthContext = useContext(authContext);
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const myAlertContext = useContext(alertContext);
  useEffect(() => {
    console.log(props.history);
    if (theAuthContext.isAuth) {
      props.history.push('/');
    }
    if (
      theAuthContext.error !== null &&
      theAuthContext.error !== 'no user' &&
      theAuthContext.error
    ) {
      console.log(theAuthContext.error);
      myAlertContext.setAlert(theAuthContext.error, 'danger');
      theAuthContext.clearError();
    }
    // eslint-disable-next-line
  }, [theAuthContext.error, theAuthContext.isAuth, props.history.push]);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
      myAlertContext.setAlert('please check your inputs', 'danger', 500);
    } else {
      e.preventDefault();
      theAuthContext.loginUser(user);
      return setValidated(false);
    }

    setValidated(true);
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 mt-5 mx-auto col-sm-10 col-lg-6'>
          <h1 className='text-center'>
            Account <span className='text-primary'>Login</span>
          </h1>
          <Form
            noValidate
            validated={validated}
            onSubmit={onSubmit}
            className=' p-4  mt-2'
          >
            <Form.Group>
              <Form.Label htmlFor='email' className='fs-5'>
                Email Address
              </Form.Label>
              <Form.Control
                type='email'
                onChange={onChange}
                name='email'
                required
                autoComplete='email'
                id='email'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor='password' className='fs-5'>
                {' '}
                password
              </Form.Label>
              <Form.Control
                type='password'
                name='password'
                required
                autoComplete='passwrod'
                onChange={onChange}
                id='password'
              />
            </Form.Group>
            <button className='my-3 btn btn-primary w-100  '>Login</button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Login;
