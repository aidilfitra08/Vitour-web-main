import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CardCompt } from "../Component/CardComponent/CardCompt";
import { Link, useNavigate } from "react-router-dom";
import "./VirtualTour.css";
import axios from "axios";
import { Dots } from "loading-animations-react";
import { Footer } from "../LandingPageCompt/Footer/Footer";

function VirtualTour() {
  const [city, setCity] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCity = async () => {
      const res = await axios.get(
        process.env.REACT_APP_BASE_URL + "/api/cities"
      );
      setCity(res.data.data);
    };
    fetchCity();
  }, []);

  const handleCityDetail = (id, nama_kota) => {
    navigate(`/virtualtour/${nama_kota}`, { state: { id: id, nama_kota: nama_kota } });
  };
  return (
    <>
      <div className="wrap">
        <Container className="containerVT">
          <div className="title">
            <h1>Choose City</h1>
          </div>
          <div className="city-wrap">
            <CardCompt data={city} goDetail={handleCityDetail} />
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default VirtualTour;
