import React from "react";
import "../styles/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Icons"; // 引入 icons.js

const Nav = () => {
  return (
    <nav className="sideNav">
      <div className="siderBarUser">
        <FontAwesomeIcon icon="circle-user" />
        <h5>Cindy 24</h5>
      </div>
      <div className="siderBarIcon">
        <div className="siderBarIcon1">
          <FontAwesomeIcon icon="house-chimney" />
          <FontAwesomeIcon icon="bell" />
          <FontAwesomeIcon icon="comment-dots" />
          <FontAwesomeIcon icon="heart" />
          <FontAwesomeIcon icon="gear" />
        </div>
        <div className="siderBarIcon2">
          <FontAwesomeIcon icon="circle-question" />
          <FontAwesomeIcon icon="right-from-bracket" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
