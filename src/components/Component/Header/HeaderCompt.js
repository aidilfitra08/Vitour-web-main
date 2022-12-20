import React from "react";
import Image from "../../../assets/images/jakarta.jpg";
import "./HeaderCompt.css";

export const HeaderCompt = (props) => {
  return (
    <section className="header_compt">
      <div className="img_wrap">
        <img src={props.image} alt="" className="header_background" />
      </div>
      <div className="header_compt_content">
        <h1 className="title_header_compt">{props.title}</h1>
        <p className="desc_header_compt">{props.desc}</p>
      </div>
    </section>
  );
};
HeaderCompt.defaultProps = {
  title: "Lorem Ipsum",
  desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, nisi blanditiis cum repudiandae eius architecto autem.",
  image: Image,
  to: "/",
};
