import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='p-1 navbar navbar-expand-lg navbar-light bg-dark'>
      <span className=' ms-5 navbar-brand text-success'>
        <i className='bi bi-shop fs-1   '></i> Orders Maker
      </span>
      <div className='ms-auto'>
        <Link
          className='nav-link  text-dark btn btn-success  d-inline-block'
          to='/'
        >
          Home
        </Link>
        <Link
          className='nav-link  mx-3 text-dark btn btn-success d-inline-block'
          to='/About'
        >
          About
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
