import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PersonalInfo from './pages/PersonalInfo';
import HomeLayout from './component/HomeLayout';
import Home from './pages/Home';
import UserInfo from './pages/UserInfo';
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/src/pages/Register.jsx' element={<Register />}></Route>
        <Route path='/src/pages/Login.jsx' element={<Login />}></Route>
        <Route path='/src/pages/PersonalInfo.jsx' element={<PersonalInfo />}></Route>
        <Route path='/' element={<HomeLayout />}>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/userinfo' element={<UserInfo />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
