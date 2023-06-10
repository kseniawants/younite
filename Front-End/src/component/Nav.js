import React from 'react';
import '../styles/nav.scss';

const Nav = () => {
  return (
    <nav className='container-fluid'>
      <div className='row'>
        <div className='bg-secondary col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column align-items-center'>
          <div className='text-decoration-none mt-5 d-flex flex-column align-items-center'>
            <i className='fa-solid fa-user fs-5 mt-1'></i>
            <span className='ms-1 fs-5 text-black'>Cindy 24</span>
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
                  <span className='bg-primary text-white rounded-5 p-1 fs-6 badge'>1,419</span>
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
          <ul className='nav flex-column mb-5 fs-5'>
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                <i className='fa-solid fa-circle-question text-black'></i>
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                <i className='fa-solid fa-right-from-bracket text-black'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
