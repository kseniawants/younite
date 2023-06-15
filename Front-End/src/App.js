import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PersonalInfo from './pages/PersonalInfo';
import HomeLayout from './component/HomeLayout';
import Home from './pages/Home';
import UserInfo from './pages/UserInfo';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/personal' element={<PersonalInfo />}></Route>
        <Route path='/' element={<HomeLayout />}>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/userinfo' element={<UserInfo />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
