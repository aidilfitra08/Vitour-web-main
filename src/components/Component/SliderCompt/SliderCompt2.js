import React, { Component } from "react";
import Slider from "react-slick";
import "./SliderCompt2.css";

export default class SliderCompt2 extends Component {
  slider() {
    return (
      this.props.data &&
      this.props.data.map((post, index) => {
        return (
          <div>
            <div
              key={index}
              className="slider_card_container"
              key={post.city_id}
            >
              <div className="slider_img_wrapper">
                {post.images.slice(0, 1).map((image, index) => {
                  return (
                    <img
                      key={index}
                      src={image.images_link}
                      alt=""
                      className="slider_card_img"
                    />
                  );
                })}
              </div>
              <div className="slider_card_content">
                <h2 className="slider_card_title">{post.nama_budaya}</h2>
                <p className="slider_card_desc">{post.deskripsi_budaya}</p>
              </div>
            </div>
          </div>
        );
      })
    );
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="slider2_container">
        {/* <h2 className="title_slider">Discover City</h2> */}
        <Slider {...settings}>{this.slider()}</Slider>
      </div>
    );
  }
}
