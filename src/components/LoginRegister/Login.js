import React, { useState } from "react";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";
// import PropTypes from 'prop-types'
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import gambarLogin from "./../../assets/images/LoginRegister/login.png";
import gambarGoogle from "./../../assets/images/LoginRegister/google.png";
import gambarFacebook from "./../../assets/images/LoginRegister/facebook.png";
import gambarTwitter from "./../../assets/images/LoginRegister/twitter.png";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [msg, setMsg] = useState('');
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_BASE_URL);
    axios
      .post(
        process.env.REACT_APP_BASE_URL + '/api/login',
        {
          email: email,
          password: password,
        },
        { withCredentials: false }
      )
      .then((res) => {
        if (res.status === 200) {
          // alert('!LOGGED');
          console.log(res);
          console.log(res.data);
          console.log(res.data.data.token);
          sessionStorage.setItem("token", res.data.data.token);
          sessionStorage.setItem("name", res.data.data.name);
          // setToken(res.data.data.token)

          navigate("/", { replace: true });
          window.location.reload(true);
          // return res.data;
        } else if (res.status === 400) {
          // console.log(res.data);
          alert(res.data.message);
        }
        // console.log(res.data);
        // alert('!LOGGED');
        // navigate("/")
      })
      .catch((error) => {
        // let parsedErrors = [];
        // parsedErrors = JSON.parse(error.request.response);
        console.log(error.response.data.message);
        alert(error.response.data.message);
        // setHandleErrors(parsedErrors);

        // setIsSubmitted(true);
      });
    // setToken("token123")
    // sessionStorage.setItem('token', JSON.stringify("token123"));
    // setToken(res.data.token);
  };
  // console.log("saya aidil")
  return (
    <>
      {/* <LoginRegisterNavBar pageName={"Login Page"} /> */}
      <Container className="vh-100 px-0" fluid={true}>
        <Row>
          <Col style={{ backgroundImage: `url(${gambarLogin}` }} id="gambar">
            <div className="section-kiri">
              <h3 className="h3" style={{ color: "white" }}>
                Explore Your Places
              </h3>
              <h5 className="subtitle1">Visit Indonesia</h5>
            </div>
          </Col>
          <Col id="form-section">
            <Container>
              <Form onSubmit={handleLogin}>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                  style={{ fontWeight: "bold" }}
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicPassword"
                  style={{ fontWeight: "bold" }}
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Row className="mb-3">
                  <Col>
                    <Button
                      variant="primary"
                      type="submit"
                      style={{ marginRight: 50 }}
                    >
                      Login
                    </Button>
                  </Col>

                  <Col>
                    <Link to="/register">
                      <Button
                        md="3"
                        variant="primary"
                        style={{ paddingRight: 50, paddingLeft: 50 }}
                      >
                        Register
                      </Button>
                    </Link>
                  </Col>
                </Row>
                <Row className="mb-3">
                  {/* <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group> */}
                  <Col style={{ padding: 8 }}>
                    <a href="#">Forget Password</a>
                  </Col>
                </Row>
                <div className="via">
                  <h3 className="subtitle1">Sign in via</h3>
                </div>
                <div className="alternate-login row">
                  <div className="col-sm-auto component">
                    <Image src={gambarGoogle} className="img-google" />
                  </div>
                  <div className="col-sm-auto component">
                    <Image src={gambarFacebook} className="img-facebook" />
                  </div>
                  <div className="col-sm-auto component">
                    <Image src={gambarTwitter} className="img-twitter" />
                  </div>
                </div>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
//   };

export default Login;
