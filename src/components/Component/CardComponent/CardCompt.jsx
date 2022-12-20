import React from "react";
import "./CardCompt.css";
// import Image from "./default-2.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const CardCompt = (props) => {
  return props.data.map((post, index) => {
    return (
      <>
        <div
          key={index}
          className="card_container"
          onClick={() => props.goDetail(post.city_id, post.nama_kota)}
          key={post}
        >
          {post.images.slice(0, 1).map((image, index) => {
            return (
              <img
                key={index}
                src={image.images_link}
                alt=""
                className="card_img"
              />
            );
          })}
          <div className="card_content">
            <h2 className="card_title">{post.nama_kota}</h2>
            <p className="card_desc">Indonesia</p>
            <div className="card_btn_wrap">
              <button
                onClick={() => props.goDetail(post.city_id)}
                className="card-btn"
              >
                Discover
              </button>
            </div>
          </div>
        </div>
      </>
    );
  });
};

CardCompt.defaultProps = {
  header: "Lorem Ipsum",
  text: "Lorem Ipsum",
  image:
    "https://media.istockphoto.com/photos/aerial-view-of-gedung-sate-bandung-west-java-indonesia-with-beautiful-picture-id1363372573?b=1&k=20&m=1363372573&s=170667a&w=0&h=a8pkPSMl97kjNFDF8mPOWYsaQ6RSox9I1-SYKpo9JS8=",
  to: "/",
};

export default CardCompt;
