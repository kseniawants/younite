import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../component/SideNav';

function HomeLayout() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='p-0 col-1'>
            <SideNav />
          </div>
          <main className='bg-page-gradient col-11  container-fluid'>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default HomeLayout;
