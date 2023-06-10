import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './component/SideNav';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<SideNav />}>
            <Route path='' element={<Home />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
