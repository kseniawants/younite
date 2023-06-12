import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideNav from './component/SideNav';
import Home from './pages/Home';
import UserInfo from './pages/UserInfo';
function App() {
  return (
    <div className='App container-fluid'>
      <div className='row'>
        <div className='col-2 p-0'>
          <SideNav />
        </div>
        <div className='col-10'>
          <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/userinfo' element={<UserInfo />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
