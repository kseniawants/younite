import React from 'react';
import Logo from '../assets/logo/logo.png';
import Image from 'react-bootstrap/Image';
import '../styles/nav.scss';

const Nav = () => {
  return (
    <nav className='container-fluid'>
      <div className='row col-8'>
        <div className='bg-secondary col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column align-items-center'>
          <div className='text-decoration-none mt-5 d-flex flex-column align-items-center'>
            <img src={Logo} alt='' className='mb-5' />
            <Image src={Logo} roundedCircle className='bg-white' />
            <span className='ms-1 text-black nav-userName'>Cindy 24</span>
          </div>
          <ul className='nav flex-column fs-5'>
            <li className='nav-item'>
              <a href='#' className='nav-link' aria-current='page'>
                <i className='fa-solid fa-house text-black'></i>
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                <span className='fa-layers fa-fw'>
                  <i className='fa-solid fa-bell text-black'></i>
                  <span className='bg-primary text-white rounded-5 p-1 fs-6 badge'>1</span>
                </span>
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                <i className='fa-solid fa-comment-dots text-black'></i>
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                <i className='fa-solid fa-heart text-black'></i>
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                <i className='fa-solid fa-gear text-black'></i>
              </a>
            </li>
          </ul>
          <ul className='nav flex-column mb-5 fs-5 nav-bottom'>
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                <i className='fa-solid fa-circle-question'></i>
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                <i className='fa-solid fa-right-from-bracket'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
