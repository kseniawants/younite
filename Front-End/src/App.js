import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideNav from './component/SideNav';
import Home from './pages/Home';
import UserInfo from './pages/UserInfo';
function App() {
  return (
<<<<<<< HEAD
    <div className='App container-fluid'>
      <div className='row'>
        <div className='col-4 '>
          <SideNav />
        </div>
        <div className='col-8'>
          <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/userinfo' element={<UserInfo />}></Route>
          </Routes>
        </div>
      </div>
    </div>
=======
    // // <div style={{display:"flex", flexDirection:"row"}}>
    // // <div>
    //   {/* <Nav/> 66*/}
    //   {/* <Chatlist/> */}
    //   {/* <Chatroom/> */}
    //   {/* <Personalinfo/> */}
    // // </div>
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
>>>>>>> dev
  );
}

export default App;
