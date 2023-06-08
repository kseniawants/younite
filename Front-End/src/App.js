import React from "react";
import "antd/dist/reset.css";
import Nav from "./components/Nav";
import Chatlist from "./components/Chatlist";
import Chatroom from "./components/Chatroom";
import Personalinfo from "./pages/Personalinfo";
import "./styles/date.css";
import LandingPage from "./pages/landingPage";
import Login from "./pages/login";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
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
      </Routes>
    </Router>
  );
};

export default App;
