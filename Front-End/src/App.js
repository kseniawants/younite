import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
// import Home from './pages/Home';
import PersonalInfo from './pages/PersonalInfo';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PersonalInfo />}/>
          {/* <Route path='/' element={<Home />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
