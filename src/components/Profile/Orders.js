import React, { useEffect, useState } from 'react'
import axios from 'axios';

import "./Orders.css"
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Footer } from '../LandingPageCompt/Footer/Footer';

function Orders(props) {
  const [orders, setOrders] = useState([]);
  
  const myToken = sessionStorage.getItem('token')
  // console.log(myToken)
  
  useEffect(() => {
    const fetchCart = async () => {
      // setLoading(true);
      axios
        .get(process.env.REACT_APP_BASE_URL + `/api/order/user/find`, {
          headers: {
            'Authorization': `Bearer ${myToken}`
          }
        })
        .then((res) => {
          setOrders(res.data.data)
          console.log(res.data.data)
          
          // setLoading(false);
        }).catch(err => {
          console.log(err)
        })
    };

    fetchCart();
  }, []);
  return (
    <>
    <Container className="my-orders">
      <div className='page-title'>
      <h1>Orders</h1>
      </div>
      
      <Container className="orders">
        {orders.map((order) => {
          return (
            <Card className='order-card'>
              <Card.Body>
                <hr/>
                <Row>
                  <Col className="sub-title">
                    <p>Order id</p>
                    <p>Total Payment</p>
                    <p>Status</p>
                    
                  </Col>
                  <Col>
                    <p>: {order.order_id}</p>
                    <p>: Rp {order.total_price}</p>
                    <p>: {order.status}</p>
                  </Col>
                </Row>
                <div className='d-flex justify-content-end button-detail'>
                  <Link to={"/orders/detail/"+order.order_id}><Button>Order Detail</Button></Link>
                </div>
              </Card.Body>
             
            </Card>
          )
        })}
        
      </Container>
      
        

    </Container>
    <Footer/>
    </>
  )
}

export default Orders