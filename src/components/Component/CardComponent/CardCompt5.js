//for testimoni
import React from "react";
// import food from './../../assets/images/karedok.jpg';
import Image from "./default-2.jpg";
import { Row, Col } from "react-bootstrap";
import "./CardCompt5.css";
// import { Link } from "react-router-dom";

export const CardCompt5 = (props) => {
  return (
    <div className="card5-container">
      <Row className="row-card3">
        <Col className="img-wrapper">
          <img src={props.image} alt="" />
        </Col>
        <Col className="deskripsi">
          <h3>{props.title}</h3>
          <p className="sub-title">{props.subTitle}</p>
          <p className="desc">{props.desc}</p>
        </Col>
      </Row>
    </div>
  );
};
CardCompt5.defaultProps = {
  title: "Lorem Ipsum",
  desc:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis porro, unde atque necessitatibus commodi totam quia rerum iusto accusamus dignissimos vero debitis incidunt excepturi error a, nihil optio accusantium in.",
  subTitle: "Lorem Ipsum",
  image: Image,
  buttonText: "Find Out",
};
