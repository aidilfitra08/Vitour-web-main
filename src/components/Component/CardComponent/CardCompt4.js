import React from "react";
import "./CardCompt.css";
import Image from "./default-2.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CardModal } from "./CardModal";

export const CardCompt4 = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.image} alt="" className="card-img" />
        <div className="card-content">
          <h1 className="card-header">{props.header}</h1>
          <p className="card-desc">{props.desc}</p>
          <p className="card-text">
            <FaMapMarkerAlt /> {props.loc}
          </p>
          <div className="buttonExplore">
            <button
              onClick={() => {
                window.open(
                  "https://api.whatsapp.com/send?phone=628989040798",
                  "_blank"
                );
              }}
              className="card-btn"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
      <CardModal trigger={false}>
        <h3>My Popup</h3>
      </CardModal>
    </>
  );
};

CardCompt4.defaultProps = {
  header: "Lorem Ipsum",
  desc: "Lorem Ipsum",
  loc: "Jawa Barat",
  image: Image,
};

export default CardCompt4;
