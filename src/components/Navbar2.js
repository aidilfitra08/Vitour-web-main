import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, NavDropdown, Row, Col, Container } from "react-bootstrap";
import Logo from "./../assets/images/logo-white.png";
import Logout from "./LoginRegister/Logout";
import "./Navbar.css";

function Navbar2() {
  const [isMobile, setIsMobile] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [rightButton, setRightButton] = useState(isNotLogged);
  const [pageName, setPageName] = useState("");
  const navigate = useNavigate();

  const changeNavbarBackground = () => {
    if (window.scrollY >= 100) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBackground);

  function isLogged() {
    const logout = () => {
      sessionStorage.clear();
      navigate("/");
      window.location.reload(true);
    };

    return (
      <div className="auth logged-in">
        <li>
          <NavDropdown id="profile-menu" title={sessionStorage.getItem("name")}>
            <NavDropdown.Item>
              <Link to="/profile" style={{ color: "black" }}>
                Profile
              </Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Link to="/my-cart" style={{ color: "black" }}>
                My Cart
              </Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Link to="/orders" style={{ color: "black" }}>
                Orders
              </Link>
            </NavDropdown.Item>
          </NavDropdown>

          <div>
            <div className="prof-drop">
              <Link to="/profile" className="store">
                Profile
              </Link>
            </div>
            <div className="prof-drop">
              <Link to="/my-cart" className="home">
                My Cart
              </Link>
            </div>
            <div className="prof-drop">
              <Link to="/orders" className="home">
                Orders
              </Link>
            </div>
          </div>
        </li>
        <li>
          <Link to="/" onClick={logout} className="logout">
            Logout
          </Link>
        </li>
      </div>
    );
  }

  function isNotLogged() {
    return (
      <div className="auth">
        <li>
          <Link
            to="/login"
            className="login"
            onClick={() => {
              setHideNav(true);
              setPageName("Login Page");
            }}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className="register"
            onClick={() => {
              setHideNav(true);
              setPageName("Register Page");
            }}
          >
            Register
          </Link>
        </li>
      </div>
    );
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      // console.log(sessionStorage.getItem('token'))
      setRightButton(isLogged);
    }

    if (window.location.pathname === "/login") {
      setHideNav(true);
      setPageName("Login Page");
    } else if (window.location.pathname === "/register") {
      setHideNav(true);
      setPageName("Register Page");
    } else {
      setHideNav(false);
    }
  }, []);

  // kondisi navbar di page login dan register
  if (hideNav === true) {
    return (
      <Container fluid={true} className="navbar-login-register">
        <Row>
          <Col md="auto" className="img-wrapper">
            <Link
              to="/"
              onClick={() => {
                setHideNav(false);
              }}
            >
              <img src={Logo} alt="" className="logo" />
            </Link>
          </Col>
          <Col md="auto" className="page-name">
            <h2>{pageName}</h2>
          </Col>
        </Row>
      </Container>
    );

    //kondisi navbar di page selain page login dan register
  } else {
    return (
      <>
        <nav className={stickyNav ? "navbar active" : "navbar"}>
          <div className="img-wrapper">
            <Link
              to="/"
              onClick={() => {
                setHideNav(false);
              }}
            >
              <img src={Logo} alt="" className="logo" />
            </Link>
          </div>
          <ul
            className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setIsMobile(false)}
          >
            <li>
              <Link to="/" className="Home">
                Home
              </Link>
            </li>
            <li>
              <Link to="/store" className="Store">
                Store
              </Link>
            </li>
            <li>
              <Link to="/virtualtour" className="vTour">
                Virtual Tour
              </Link>
            </li>
            <li>
              <Link to="/about" className="about">
                About
              </Link>
            </li>
            <div>{rightButton}</div>
          </ul>
          <button
            className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>
        </nav>
      </>
    );
  }
}

export default Navbar2;
