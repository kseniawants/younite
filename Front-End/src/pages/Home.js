import React from 'react';
import SideNav from '../component/SideNav';

function Home() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-2 p-0'>
            <SideNav />
          </div>
          <div className='col-10'>
            <h1>嗨</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
