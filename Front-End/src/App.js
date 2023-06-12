import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/dateweb/src/pages/login.js" element={<Login />} />
        <Route
          path="/dateweb/src/pages/Personalinfo.js"
          element={<Personalinfo />}
        />
        <Route
          path="/dateweb/src/pages/Personalinfo.js"
          element={<Personalinfo />}
        />
        <Route path="/dateweb/src/pages/Home.js" element={<Home />} />
        <Route path="/dateweb/src/pages/Home.js" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
