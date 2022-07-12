import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <nav className='nav'>
        <div className='left-items'>
          <Link to='/' className='logo'>
            <span>
              TOP THREAD
            </span>
          </Link>
          <div className='links'>
            <Link to='/men' className='link'>Men</Link>
            <Link to='/women' className='link'>Women</Link>
            <Link to='/about-us' className='link'>About Us</Link>
            <Link to='/contact' className='link'>Contact</Link>
          </div>
        </div>
        <Link to='/shopping-cart' className='shopping-cart'>
          <img src='/images/shopping-bag-solid.svg' alt='shopping cart'></img>
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
