import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import Login from './pages/Login';
import PersonalInfo from './pages/PersonalInfo';
import HomeLayout from './component/HomeLayout';
import Home from './pages/Home';
import SettingPersonal from './pages/SettingPersonal';
import ChatRoom from './pages/ChatRoom';
import Store from './pages/Store';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/personal' element={<PersonalInfo />}></Route>
        <Route path='/chatroom' element={<ChatRoom />}></Route>
        <Route path='/' element={<HomeLayout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/setting' element={<SettingPersonal />}></Route>
          <Route path='/store' element={<Store />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
