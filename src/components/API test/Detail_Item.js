import React from "react";
import { Link } from "react-router-dom";
import "./Detail_item.css";
import BatikImg from "./batik.png";

function Detail_Item() {
  return (
    <div className="container_detail_item">
      <div className="row">
        <div className="col-sm-6">
          <div className="photo">
            <img src={BatikImg} className="img-1-batik" />
          </div>
        </div>
        <div className="col-sm-5">
          <div>
            <h1 className="h1">Batik Cirebon</h1>
            <p className="bodytext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque cras feugiat massa venenatis eu tempus integer magna
              sodales. Duis lorem vel nulla accumsan. Ornare diam habitasse sit
              vivamus. Urna, a eget eget sagittis rhoncus. Eget eros tellus
              condimentum massa.
            </p>
            <h4 className="subtitle1">Rp 100.000,00</h4>
            <hr className="line" />
            <div className="row">
              <div className="col-sm-1 bodytext">
                <div className="size">XS</div>
              </div>
              <div className="col-sm-1 bodytext">
                <div className="size">S</div>
              </div>
              <div className="col-sm-1 bodytext">
                <div className="size">M</div>
              </div>
              <div className="col-sm-1 bodytext">
                <div className="size">L</div>
              </div>
              <div className="col-sm-1 bodytext">
                <div className="size">XL</div>
              </div>
            </div>
            <hr className="line" />
            <div className="row">
              <div className="dot-1"></div>
              <div className="dot-2"></div>
              <div className="dot-3"></div>
            </div>
            <div>
              <a className="add-to-cart" href="#">
                <button className="btn btn-add-to-cart">Add to Cart</button>
              </a>
            </div>
            <div className="bodytext">
              <a className="sizeguide" href="#">
                Size guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail_Item;
