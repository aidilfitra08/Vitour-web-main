import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import "./cart.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Footer } from "../LandingPageCompt/Footer/Footer";
import { useNavigate } from "react-router-dom";

function Cart(props) {
  const navigate = useNavigate();
  const [cartItem, setCartItem] = useState([]);
  const [subTotal, setSubTotal] = useState();

  const [tax, setTax] = useState(500);
  const [grossPay, setGrossPay] = useState();

  // variabel untuk dikirim ke midtrans
  const [paymentType, setPaymentType] = useState("");
  const [bank, setBank] = useState("");

  const [loading, setLoading] = useState(false);
  // sessionStorage.getItem('token')
  const myToken = sessionStorage.getItem("token");
  console.log(myToken);

  const deleteHandling = (cartId) => {
    // e.preventDefault();
    console.log(cartId);
    axios
      .delete( process.env.REACT_APP_BASE_URL + `/api/cart/` + cartId, {
        headers: {
          Authorization: `Bearer ${myToken}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          alert(res.data.message);
          window.location.reload(true);
          navigate("/my-cart");
        } else if (res.status === 400) {
          alert(res.data.message);
          // window.location.reload(true);
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
  };

  const paymentHandling = (e) => {
    e.preventDefault();

    axios
      .post(
        process.env.REACT_APP_BASE_URL + `/api/order/charge`,
        {
          payment_type: paymentType,
          bank: bank,
          gross_amount: grossPay,
        },
        {
          headers: {
            Authorization: `Bearer ${myToken}`,
          },
        }
      )
      .then((res) => {
        // setCartItem(res.data.data.cart_item);
        // setSubTotal(res.data.data.sub_total_price);
        console.log(res.data.data.order_id);
        console.log(res.status);
        if (res.data.data.status_code == 201) {
          // alert("");
          navigate(`/orders/detail/${res.data.data.order_id}`, {
            state: { bank: bank },
          });
        }
        // setGrossPay(res.data.data.sub_total_price+tax)

        // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      axios
        .get(process.env.REACT_APP_BASE_URL + `/api/cart`, {
          headers: {
            Authorization: `Bearer ${myToken}`,
          },
        })
        .then((res) => {
          setCartItem(res.data.data.cart_item);
          setSubTotal(res.data.data.sub_total_price);
          console.log(res.data.data);
          setGrossPay(res.data.data.sub_total_price + tax);

          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    // const fetchCity = async () => {
    //   axios
    //     .get(`https://vitour-backend.herokuapp.com/api/cities`)
    //     .then((res) => {
    //       setCity(res.data.data);
    //     });
    // };

    // fetchCity();
    fetchCart();
    // cart.map((item) => { console.log(item)})
  }, []);

  const paymentTypeOnChange = (e) => {
    console.log(e);
  };
  console.log(bank);
  const paymentMethod = (paymentType) => {
    if (paymentType == "bank_transfer") {
      return (
        <div class="pay-button d-flex justify-content-center">
          <Form.Select
            aria-label="Payment type"
            onChange={(e) => setBank(e.target.value)}
          >
            <option>Select Bank</option>
            <option value="bri">BRI</option>
            <option value="bni">BNI</option>
            <option value="bca">BCA</option>
          </Form.Select>
        </div>
      );
    }
  };

  console.log(cartItem);
  console.log(subTotal);
  console.log(grossPay);
  return (
    <>
      <Container style={{ paddingTop: "5vw", paddingBottom: "3vw" }} fluid>
        <Row>
          <Col className="cart-left">
            <Container>
              <div className="title" style={{ marginBottom: "-20px" }}>
                <Row>
                  <Col className="title-cart">
                    <h4>SHOPING CART</h4>
                  </Col>
                  <Col className="total-items">
                    <h5>{cartItem.length} items</h5>
                  </Col>
                </Row>
              </div>

              <Row>
                {cartItem.map((item) => {
                  console.log(item);
                  return (
                    <>
                      <hr className="line"></hr>
                      <Col>
                        <div className="item-img">
                          <img
                            src={item.image_link}
                            alt=""
                            className="img-cart"
                          />
                        </div>
                      </Col>
                      <Col>
                        <h5 className="produk">{item.nama_merchandise}</h5>
                        <h5 className="harga-total">
                          Rp {item.subtotal_price_item},00
                        </h5>
                        <Row>
                          <Col md="auto" className="qty">
                            <p>Variant: {item.variant}</p>
                          </Col>
                          <Col
                            md="auto"
                            className="qty"
                            style={{ marginLeft: "5px" }}
                          >
                            <p>
                              Qty: {item.quantity == null ? 0 : item.quantity}
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col className="harga-baju">
                        <h5 className="harga-satuan">
                          Rp {item.price == null ? 0 : item.price},00
                        </h5>
                        <Button variant="primary">Wishlist</Button>{" "}
                        <Button
                          variant="danger"
                          onClick={() => deleteHandling(item.cart_id)}
                        >
                          Delete
                        </Button>{" "}
                      </Col>
                    </>
                  );
                })}
              </Row>
            </Container>
          </Col>
          <Col md lg="5">
            <Container className="cart-right">
              <div className="title">
                <h4>ORDER SUMMARY</h4>
              </div>
              <div className="cardd">
                <Row>
                  <Col>
                    <h5 class="content-left">Sub total</h5>
                    <p class="content-left">Tax</p>
                    <p class="content-left">Shipping</p>
                    <p class="content-left">Total</p>
                  </Col>
                  <Col>
                    <h5 class="content-right">Rp {subTotal},00</h5>
                    <p class="content-right">Rp {tax},00</p>
                    <p class="content-right">Free</p>
                    <p class="content-right">Rp {grossPay},00</p>
                  </Col>
                </Row>
                <div class="d-flex justify-content-center">
                  <h5>Select Payment</h5>
                </div>
                <div class="pay-button d-flex justify-content-center">
                  <Form.Select
                    aria-label="Payment type"
                    onChange={(e) => setPaymentType(e.target.value)}
                  >
                    <option>Payment Type</option>
                    <option value="bank_transfer">Bank Transfer</option>
                    <option value="dompet_digital">Dompet Digital</option>
                    <option value="3">Other</option>
                  </Form.Select>
                </div>

                {paymentMethod(paymentType)}
                <div class="pay-button d-flex justify-content-center">
                  <button class="pay-btn" onClick={paymentHandling}>
                    Pay
                  </button>
                </div>
                {/* <div class="cancel-button  d-flex justify-content-center">
                  <a class="cancel" href="/"><button class="cancel-btn">Cancel</button></a>
                </div> */}
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Cart;
