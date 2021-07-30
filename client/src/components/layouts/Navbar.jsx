import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import authContext from '../context/Auth/authContext';
import orderContext from '../context/createContext';

const Navbar = () => {
  const theAuthContext = useContext(authContext);
  const theOrderContext = useContext(orderContext);
  const onClick = () => {
    theAuthContext.logout();
    theOrderContext.clearOrders();
  };
  return (
    <nav className='p-1 navbar navbar-expand-lg navbar-light bg-dark'>
      <span className=' ms-5 navbar-brand text-success'>
        <i className='bi bi-shop fs-1   '></i> Orders Maker
      </span>

      {theAuthContext.isAuth ? (
        <div className='ms-auto p-2'>
          <li className='nav-link ms-2   fs-5 badge     d-inline-block'>
            Hello {theAuthContext.user && theAuthContext.user.username}
          </li>
          <Link
            onClick={onClick}
            className='nav-link ms-2   text-dark btn btn-success d-inline-block'
            to='#'
          >
            Logout
          </Link>
        </div>
      ) : (
        <div className='ms-auto p-2'>
          {' '}
          <Link
            className='nav-link ms-2   text-dark btn btn-success d-inline-block'
            to='/Login'
          >
            Login
          </Link>
          <Link
            className='nav-link ms-2   text-dark btn btn-success d-inline-block'
            to='/Register'
          >
            Register
          </Link>{' '}
        </div>
      )}
    </nav>
  );
};
export default Navbar;
