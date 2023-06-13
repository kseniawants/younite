<<<<<<< HEAD
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PersonalInfo from './pages/PersonalInfo';
import Home from './pages/Home';
import UserInfo from './pages/UserInfo';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<PersonalInfo />} />
        <Route path='/home' element={<Home />}></Route>
        <Route path='/userinfo' element={<UserInfo />}></Route>
      </Routes>
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import ChatRoom from './pages/ChatRoom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ChatRoom />} />
        </Routes>
      </Router>
>>>>>>> origin/dev
    </div>
  );
}

export default App;
