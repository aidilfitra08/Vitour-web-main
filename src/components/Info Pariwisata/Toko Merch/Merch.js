import React from 'react';
import { Container } from 'react-bootstrap';
import { CardCompt3 } from './../../CardComponent/CardCompt3';
import "./../InfoPariwisata.css"

export const Merch = (props) => {
  return (
    <Container className="infoContainer">
    <div className="title">
        <h1>Merch</h1>
        <h3>{props.loc}</h3>
    </div>
        <CardCompt3 />
    </Container>
  )
}
Merch.defaultProps = {
    loc : "Kota, Provinsi"
}

