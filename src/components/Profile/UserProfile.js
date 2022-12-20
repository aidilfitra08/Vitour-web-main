import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { Container, Row, Col } from "react-bootstrap";
import PropTypes from 'prop-types'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import gambarLogin from "./../../assets/images/LoginRegister/login.png";
import gambarGoogle from "./../../assets/images/LoginRegister/google.png";
import gambarFacebook from "./../../assets/images/LoginRegister/facebook.png";
import gambarTwitter from "./../../assets/images/LoginRegister/twitter.png";
import "./UserProfile.css";
import { useNavigate } from 'react-router-dom';
import default_picture from "./default_prof_pic.jpg";
import { Footer } from '../LandingPageCompt/Footer/Footer';

function Profile(props) {
    const [profile, setProfile] = useState([]);
    const [msg, setMsg] = useState('');
    let navigate = useNavigate();
    const myToken = sessionStorage.getItem('token')
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [handphone, setHandphone] = useState('');
    const [prof_pic, setProfPic] = useState('');

    // if (!sessionStorage.getItem('token')) {
    //     navigate("/login");
    // }

    const handleEdit = async (e) => {
        e.preventDefault();

        axios.put(process.env.REACT_APP_BASE_URL + `/api/my-profile`,
        {
            name: name,
            address: address,
            handphone: handphone,
            prof_pic_link: prof_pic
        },
        {
            headers: {
              'Authorization': `Bearer ${myToken}`
            }
        })
            .then(res => {
                console.log(res);
                console.log(res.data.message);
                
                // console.log(res.data.data.token)
                if(res.status === 200){
                    alert(res.data.message);
                    window.location.reload(true);
                    // return res.data;
                }

                // alert('!LOGGED');
                // navigate("/")

            })
            .catch((err) => {
                console.log(err)
            })

        // setToken(res.data.token);
    }
    // console.log("saya aidil")

    useEffect(() => {
        const fetchProfile = async () => {
            // setLoading(true);
            axios
                // .get(`https://vitour-backend.herokuapp.com/api/cities/${city_id}`)
                .get(
                    process.env.REACT_APP_BASE_URL + `/api/my-profile`, {
                    headers: {
                      'Authorization': `Bearer ${myToken}`
                    }
                })
                .then((res) => {
                    console.log("result :", res.data.data);
                    setProfile(res.data.data);
                    // city_id = res.data.data[0].city_id
                    // console.log("Image1 :", res.data.data[0].city_id);
                    // setCityImage(res.data.data[0].images[1]);
                    // setCities(res.data.data[0]);
                    // setLoading(false);
                    // isEmpty(true);
                }).catch((err) => {
                    console.log(err)
                });
        };
        fetchProfile();
        // 👇 add class to body element
        document.body.classList.add('profile');


        return () => {
          // 👇️ removing classes from body element
          // when the component unmounts
          document.body.classList.remove('profile');
        }
      }, []);
  return (
    <>
    <Container className='profile'>
      <Row >
        <div></div>
        <div sm={4} className='left-col'>
            <Container className='profile-view'>
                <h5>Profile</h5>
                {console.log(profile)}
                <img src={profile.prof_pic_link != null ? profile.prof_pic_link : default_picture} alt="photo-profile" className="photo-profile rowMid" />
                <h5 className="rowMid name-view">{profile.name}</h5>
                <h5>Email</h5>
                <p>{profile.email}</p>

                <h5>Address</h5>
                <p>{profile.address != null ? profile.address : "Add your address"}</p>

                <h5>Handphone</h5>
                <p>{profile.handphone != null ? profile.handphone : "Add your phone number"}</p>

                {/* <h5>About</h5>
                <p>Lorem ipsum</p> */}

            </Container>

        </div>
        <Col sm={8} className='right-col'>
            <Container className='profile-view'>
                <div className='form-edit'>
                    <p className="has-text-centered">{msg}</p>
                        <Form onSubmit={handleEdit}>
                            <div style={{borderBottom: "3px solid grey"}}>
                                <Row>
                                    <Col>
                                        <h3>Profile Setting</h3>
                                    </Col>
                                    <Col md={{ span: 4, offset: 4 }} className='edit-button'>
                                        <Row className="mb-3">
                                            <Col>
                                                <Button variant="outline-primary" className='ale'>
                                                    Cancel
                                                </Button>
                                            </Col>
                                            <Col>
                                            <Button variant="primary" type="submit">
                                                Edit
                                            </Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                            <div className='mb-3'></div>
                            <Form.Group className="mb-3" controlId="Email" style={{fontWeight: "bold"}}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" value={profile.email} readOnly/>
                                {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="Name" style={{fontWeight: "bold"}}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" onChange={e => setName(e.target.value)}/>
                            </Form.Group>

                            {/* <Form.Group className="mb-3" controlId="Password" style={{fontWeight: "bold"}}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                            </Form.Group> */}

                            <Form.Group className="mb-3" controlId="Adress" style={{fontWeight: "bold"}}>
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Address" onChange={e => setAddress(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="Handphone" style={{fontWeight: "bold"}}>
                                <Form.Label>Handphone</Form.Label>
                                <Form.Control type="text" placeholder="Handphone number" onChange={e => setHandphone(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="prof-pic" style={{fontWeight: "bold"}}>
                                <Form.Label>Profile Picture Link</Form.Label>
                                <Form.Control type="text" placeholder="Profile Picture Link" onChange={e => setProfPic(e.target.value)} />
                            </Form.Group>
                            <div style={{marginBottom: "2vw"}}></div>
                            {/* <Form.Group className="mb-3" controlId="AboutMe" style={{fontWeight: "bold"}}>
                                <Form.Label>About Me</Form.Label>
                                <div className='mb-3' style={{borderBottom: "3px solid grey"}}></div>
                                <Form.Control as="textarea" placeholder="About Me"/>
                            </Form.Group> */}

                    </Form>
                </div>
            </Container>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>
  )
}

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
//   };

export default Profile
