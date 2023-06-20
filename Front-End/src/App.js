import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PersonalInfo from './pages/PersonalInfo';
import HomeLayout from './component/HomeLayout';
import Home from './pages/Home';
import SettingPersonal from './pages/SettingPersonal';
import ChatRoom from './pages/ChatRoom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/personal' element={<PersonalInfo />}></Route>
        <Route path='/chatroom' element={<ChatRoom />}></Route>
        <Route element={<HomeLayout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/setting' element={<SettingPersonal />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
