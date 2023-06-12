<<<<<<< HEAD
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
=======
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
>>>>>>> 1cae526f2ee27dc1cd33762cf9928750fddac248
