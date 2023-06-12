import { Routes, Route } from 'react-router-dom';
import React from 'react';
// import PersonalInfo from './pages/PersonalInfo';
import ChatRoom from './pages/ChatRoom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ChatRoom />} />
      </Routes>
    </div>
  );
}

export default App;
