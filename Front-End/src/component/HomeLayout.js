import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../component/SideNav';

function HomeLayout() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='p-0'>
            <SideNav />
          </div>
          <div className='bg-page'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
