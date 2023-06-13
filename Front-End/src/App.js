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
    </div>
  );
}

export default App;
