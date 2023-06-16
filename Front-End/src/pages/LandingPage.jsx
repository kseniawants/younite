import React from 'react';
import '../styles/landing.scss';
import { Link } from 'react-router-dom';
import Logo from "../assets/LOGO/LOGO.png";


function landingPage() {
  return (
    <main>
      <div className='overlay'></div>
      <img src={Logo} alt="logo" className='logo w-1 m-4' style={{width:"96px", height:"96px" }}></img>
      <div className='buttonArea d-flex flex-row position-absolute top-50 start-50 translate-middle'>
        <Link to='/src/pages/Register.jsx'>
          <button type='default' className='btn btn-outline-primary btn-lg m-2' style={{color:"#fff"}}>
            註冊
          </button>
        </Link>

        <Link to='/src/pages/Login.jsx'>
          <button type="button" className="btn btn-primary btn-lg m-2" style={{color:"#fff"}}>
            登入
          </button>
        </Link>
      </div>
    </main>
  );
}

export default landingPage;
