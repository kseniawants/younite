import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideNav from './component/SideNav';
import Home from './pages/Home';
import UserInfo from './pages/UserInfo';
function App() {
  return (
    <Route>
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
    </Route>
  );
}

export default App;
