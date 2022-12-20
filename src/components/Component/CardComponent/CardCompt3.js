import React from "react";
// import food from "./../../assets/images/karedok.jpg";
import Image from "./default-2.jpg";
import { Row, Col } from "react-bootstrap";
import "./CardCompt3.css";
// import { Link } from "react-router-dom";

export const CardCompt3 = (props) => {
  return (
    <div className="card3-container">
      <Row className="row-card3">
        <Col>
          <img src={props.image} alt="" />
        </Col>
        <Col className="deskripsi">
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
          <div className="RestoNavigation">
            <button
              className="card-btn"
              onClick={() => {
                window.open(props.loc, "_blank");
              }}
            >
              {props.buttonText}
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

CardCompt3.defaultProps = {
  title: "Lorem Ipsum",
  desc:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis porro, unde atque necessitatibus commodi totam quia rerum iusto accusamus dignissimos vero debitis incidunt excepturi error a, nihil optio accusantium in.",
  image: Image,
  buttonText: "Find Out",
  loc:
    "https://www.google.com/maps/place/Indonesia/@-2.3930523,108.819883,5z/data=!3m1!4b1!4m5!3m4!1s0x2c4c07d7496404b7:0xe37b4de71badf485!8m2!3d-0.789275!4d113.921327",
};

export default CardCompt3;
