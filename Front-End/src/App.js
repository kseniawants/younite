import { Routes, Route } from 'react-router-dom';
import React from 'react';
import PersonalInfo from './pages/PersonalInfo';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
      </Routes>
    </div>
  );
}

export default App;
