import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from './component/Nav';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Nav />}>
            <Route path='' element={<Home />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
