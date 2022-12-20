import React from "react";
// import { Link } from "react-router-dom";
import "./footer.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <ul className="flex-row">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/virtualtour">Virtual Tour</a>
          </li>
          <li>
            <a href="/Store">Store</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
        <ul className="flex-row">
          <FaInstagram className="iconIG" />
          <FaLinkedinIn className="iconLI" />
          <FaFacebookSquare className="iconFB" />
          <FaYoutube className="iconYT" />
          <FaTwitter className="iconTT" />
        </ul>
        <p className="copyright">Copyright &#169; 2022. All rights reserved.</p>
      </div>
    </>
  );
};
