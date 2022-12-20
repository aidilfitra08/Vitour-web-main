import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Recommendation.css";

function Recommendation() {
  return (
    <Container className="recom-cont">
      <div className="title">
        <h1>Merch Store and Crafter Recommendation</h1>
      </div>
      <Link to="/item" className="link-store">
        <div className="btn-batik">
          <div className="caption">
            <h2>Batik Crafter</h2>
            <p>30+ Crafter</p>
          </div>
        </div>
      </Link>
      <div className="btn-senirupa">
        <div className="caption">
          <h2>Fine Art Crafter</h2>
          <p>30+ Crafter</p>
        </div>
      </div>
      <div className="btn-other">
        <div className="caption">
          <h2>Other Crafter</h2>
          <p>30+ Crafter</p>
        </div>
      </div>
    </Container>
  );
}

export default Recommendation;
