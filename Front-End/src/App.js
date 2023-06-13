import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChatRoom from './pages/ChatRoom';
import Home from './pages/Home';
import UserInfo from './pages/UserInfo';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<ChatRoom />} />
        <Route path='/home' element={<Home />}></Route>
        <Route path='/userinfo' element={<UserInfo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
