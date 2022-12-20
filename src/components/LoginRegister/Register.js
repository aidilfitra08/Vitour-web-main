import React, { useState } from 'react'
import axios from 'axios';

import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import gambarLogin from "./../../assets/images/LoginRegister/login.png";
import "./Login.css";

function Register(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState('');
    const [validated, setValidated] = useState(false);
    let navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
        }

        setValidated(true);

        // try{

        // } catch (error) {

        // }
        axios.post(process.env.REACT_APP_BASE_URL + `/api/register`, { 
            name: name,
            email: email,
            password: password
        }, { withCredentials: false })
            .then(res => {
                if(res.status === 201) {
                    console.log(res);
                    console.log(res.data);
                    // console.log(res.data.data.token);
                    alert("Account succesfully registered!");
                    navigate('/login');
                    // window.location.reload(true);
                }
                
                // setToken(res.data.token)
            }).catch(error => {
                // let parsedErrors = [];
                // parsedErrors = JSON.parse(error.request.response);
                console.log(error.response.data)
                alert(error.response.data);
                navigate('/login');
                // setHandleErrors(parsedErrors);
    
                // setIsSubmitted(true);
            })

        // setToken(res.data.token);
    }

  return (
    <>
    <Container className="vh-100 px-0" fluid={true}>
      <Row >
        <Col style={{ backgroundImage: `url(${gambarLogin}`}} id='gambar'>
        <div className="section-kiri">
            <h3 className="h3" style={{color:"white"}}>Explore Your Places</h3>
            <h5 className="subtitle1">Visit Indonesia</h5>
        </div>
        </Col>
        <Col id="form-section">
            <Container>
                <h1>Lets Get Started</h1>
                <p className="mb-3 text-muted" >Have an account <Link to="/login">Login</Link></p>
                <Form noValidate validated={validated} onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="name" style={{fontWeight: "bold"}}>
                        <Form.Label>Name</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control type="text" placeholder="Name" onChange={e => setName(e.target.value)} required/>
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                            <Form.Control.Feedback type="invalid">
                            Name need to be filled
                            </Form.Control.Feedback>
                        </InputGroup>
                        
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{fontWeight: "bold"}}>
                        <Form.Label>Email address</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} required/>
                            <Form.Control.Feedback type="invalid">
                            Email need to be filled
                            </Form.Control.Feedback>
                        </InputGroup>
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" style={{fontWeight: "bold"}}>
                        <Form.Label >Password</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required/>
                            <Form.Control.Feedback type="invalid">
                            Password need to be filled
                            </Form.Control.Feedback>
                        </InputGroup>
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="address" style={{fontWeight: "bold"}}>
                        <Form.Label>Address</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control type="text" placeholder="Address"  required/>
                            <Form.Control.Feedback type="invalid">
                            Address need to be filled
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <p className="mb-3 text-muted" >By continuing you agree to <a href='#'>Term & Condition</a> and <a href='#'>Privacy Policy</a></p>
                    <Form.Group className="mb-3" controlId="button" style={{fontWeight: "bold"}}>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>

                    </Form.Group>
                    
                </Form>
            </Container>
            
        </Col>
      </Row>
    </Container>
    </>
    
  )
}

// Login.propTypes = {}

export default Register
