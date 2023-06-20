import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PersonalInfo from './pages/PersonalInfo';
import HomeLayout from './component/HomeLayout';
import Home from './pages/Home';
import SettingPersonal from './pages/SettingPersonal';
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/src/pages/Register.jsx' element={<Register />}></Route>
        <Route path='/src/pages/Login.jsx' element={<Login />}></Route>
        <Route path='/src/pages/PersonalInfo.jsx' element={<PersonalInfo />}></Route>
        <Route path='/' element={<HomeLayout />}>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/setting' element={<SettingPersonal />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
