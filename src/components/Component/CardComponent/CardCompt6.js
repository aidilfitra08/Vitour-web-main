import React from "react";
import "./CardCompt6.css";

export const CardCompt6 = (props) => {
  return (
    <div className="ctm-card-container2" key={props.key}>
      <img src={props.image} alt="" className="card-img" />
      <h2 className="title-card">{props.title}</h2>
      <p className="description-card">{props.desc}</p>
      <div className="discover">
        <a className="link-crs" onClick={() => this.props.goDetail(props.id)}>
          Discover
        </a>
      </div>
    </div>
  );
};
CardCompt6.defaultProps = {
  title: "Lorem Ipsum",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, aperiam.",
  image: "https://picsum.photos/400/200",
  to: "/",
  key: "1",
};
