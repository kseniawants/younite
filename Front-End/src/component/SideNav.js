import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo/whiteLogo.png';
import '../styles/component/nav.scss';
import UserImage from '../assets/images/sia.png';

function Nav() {
  return (
    <>
      <nav className='bg-secondary d-flex p-0 justify-content-between flex-column align-items-center'>
        <div className='text-decoration-none mt-5 d-flex flex-column align-items-center'>
          <img src={Logo} alt='YouNite-Logo' className='mb-5' style={{ height: '20px' }} />
          <img src={UserImage} alt='Your Picture' className='mb-1 round-image user-image' />
          <h6 className='text-black nav-text mt-2'>Cindy 24</h6>
        </div>
        <ul className='nav flex-column fs-5'>
          <li className='nav-item'>
            <NavLink to='/home' className='nav-link' aria-current='page'>
              <i className='fa-solid fa-house text-black'></i>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/notice' className='nav-link'>
              <span className='fa-layers fa-fw'>
                <i className='fa-solid fa-bell text-black'></i>
                <span className='bg-primary text-white rounded-5 p-1 badge'>1</span>
              </span>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/chatroom' className='nav-link'>
              <i className='fa-solid fa-comment-dots text-black'></i>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/friends' className='nav-link'>
              <i className='fa-solid fa-heart text-black'></i>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/userinfo' className='nav-link'>
              <i className='fa-solid fa-gear text-black'></i>
            </NavLink>
          </li>
        </ul>
        <ul className='nav flex-column mb-5 fs-5 nav-bottom'>
          <li className='nav-item'>
            <NavLink to='/question' className='nav-link'>
              <i className='fa-solid fa-circle-question'></i>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/signout' className='nav-link'>
              <i className='fa-solid fa-right-from-bracket'></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
