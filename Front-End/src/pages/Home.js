import React from "react";
import { Button } from "antd";
import { Col, Row } from "antd";
import Nav from "../components/Nav";
import "../styles/Homepage.css";
import PeoplePhoto from "../components/PeoplePhoto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../components/Icons";

const Home = () => {
  return (
    <Row gutter={[8, 8]}>
      <Nav span={24} />
      <Row className="homepage">
        <Col className="homePageMain">
          <div className="homePageTitle">
            <h3>你可能喜歡</h3>
            <Button type="primary" className="FilterBtn">
              <FontAwesomeIcon icon="house-chimney" />
              <i class="fa-solid fa-filter"> 篩選</i>
            </Button>
          </div>
          <div className="homePagePhoto">
            <PeoplePhoto />
            <PeoplePhoto />
            <PeoplePhoto />
            <PeoplePhoto />
            <PeoplePhoto />
          </div>
          <div className="homePageMore">
            <a href="">顯示更多...</a>
          </div>
        </Col>
        <div className="homPageBottom">
          <div className="homePageBottomCard">
            <h3>你可能喜歡</h3>
          </div>
          <div className="homePageBottomCard">
            <h3>你可能喜歡</h3>
          </div>
          <div className="homePageBottomCard">
            <h3>你可能喜歡</h3>
          </div>
        </div>
      </Row>
    </Row>
  );
};

export default Home;
