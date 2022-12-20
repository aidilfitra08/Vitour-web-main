import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "./DetailItem.css";
import Img from "../../assets/images/karedok.jpg";

export const DetailItem = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state;
  //   console.log(id);
  const [item, setItem] = useState([]);
  const [img, setImage] = useState("");

  // data untuk add to cart
  const [mercId, setMercId] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(0);

  const myToken = sessionStorage.getItem('token')

  useEffect(() => {
    const fetchItem = async () => {
      axios
        .get(process.env.REACT_APP_BASE_URL + `/api/city/merchandises/${id}`)
        .then((res) => {
          console.log(res.data.data[0]);
          setImage(res.data.data[0].images[0]);
          setItem(res.data.data[0]);

          setMercId(res.data.data[0].merchandise_id)
          setPrice(res.data.data[0].price)
        });
    };
    fetchItem();
  }, []);

  const handleAddToCart = async (e) => {
    e.preventDefault();

    axios.post(process.env.REACT_APP_BASE_URL + `/api/cart`,
        {
            merchandise_id: mercId,
            price: price,
            quantity: quantity
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
                    alert("Data Berhasil ditambahkan ke Cart");
                    navigate("/my-cart");
                    // return res.data;
                }

                // alert('!LOGGED');
                // navigate("/")

            })
            .catch((err) => {
                console.log(err.response.status)
                if(err.response.status === 401){
                  alert("You're not Logging, redirecting to login page");
                  navigate("/login");
                  window.location.reload(true);
                  
                  // return res.data;
                }
            })
  }

  const increment = async (e) => {
    let counter = quantity
    counter = counter + 1
    setQuantity(counter)
  }

  const decrement = async (e) => {
    let counter = quantity
    counter = counter - 1
    setQuantity(counter)
  }

  return (
    <>
      <div className="container_merch_detail">
        <div className="merch_img_wrap">
          <img src={img.images_link} alt="" />
        </div>
        <div className="merch_detail">
          <h1 className="merch_name">{item.nama_merchandise}</h1>
          <p className="merch_desc">{item.deskripsi_merchandise}</p>
          <h3 className="price">Rp {item.price}</h3>
          <hr/>
          <h5>Variant</h5>
          <p>{item.variant}</p>
          <hr/>
          <div className={myToken ? "box-counter-show" : "box-counter-hide"}>
            <h5>quantity</h5>
            <div className="btn-counter">
              <button onClick={decrement}>-</button>
              <span id="value-box">{quantity}</span>
              <button onClick={increment}>+</button>
            </div>
            <hr/>
          </div>
          
          
          <div className="merch_btn_wrap">
            <div className="buy_btn_wrap">
              <a href="#" className="buy_button" onClick={handleAddToCart}>
                Buy
              </a>
            </div>
            <div className="add_cart_wrap">
              <a href="#" className="add_to_cart" onClick={handleAddToCart}>
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
