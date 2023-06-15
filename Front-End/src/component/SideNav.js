import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo/logo.png';
import '../styles/component/nav.scss';
import UserImage from '../assets/images/sia.png';

function Nav() {
  return (
    <>
      <nav className='bg-secondary d-flex p-0 justify-content-between flex-column align-items-center'>
        <div className='text-decoration-none mt-5 d-flex flex-column align-items-center'>
          <img src={Logo} alt='YouNite-Logo' className='mb-5' style={{ height: '30px' }} />
          <img src={UserImage} alt='Your Picture' className='mb-1 round-image user-image' />
          <h6 className='text-black nav-text mt-2'>Cindy 24</h6>
        </div>
        <ul className='nav flex-column fs-5'>
          <li className='nav-item'>
            <NavLink to='/' className='nav-link' aria-current='page'>
              <i className='fa-solid fa-house text-black'></i>
            </NavLink>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link'>
              <span className='fa-layers fa-fw'>
                <i className='fa-solid fa-bell text-black'></i>
                <span className='bg-primary text-white rounded-5 p-1 badge'>1</span>
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
            <NavLink to='/userinfo' className='nav-link'>
              <i className='fa-solid fa-gear text-black'></i>
            </NavLink>
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
      </nav>
    </>
  );
}

export default Nav;
