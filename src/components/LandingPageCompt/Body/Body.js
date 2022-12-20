//library
import React, { useState, useEffect } from "react";
import "./Body.css";
import { Carousel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Dots } from "loading-animations-react";

//component
import { CardCompt5 } from "../../Component/CardComponent/CardCompt5";
import { SliderCard } from "../../Component/CardComponent/SliderCard";
// import { CardCompt } from "../../CardComponent/CardCompt";

//image
import fiturImg1 from "./../../../assets/images/fitur (1).png";
import fiturImg2 from "./../../../assets/images/fitur (2).png";
import fiturImg3 from "./../../../assets/images/fitur (3).png";
import pakSandi from "./../../../assets/images/pakSandi.jpg";
import ridwanKamil from "./../../../assets/images/ridwanKamil.jpg";
import rektorUnpad from "./../../../assets/images/rektorUnpad.jpeg";
// import Logo from "./../../../assets/images/logo2.png";

function Body(props) {
  //get cities data
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostsCities = async () => {
      setLoading(true);
      const res = await axios.get(
        process.env.REACT_APP_BASE_URL + "/api/cities"
      );
      setCities(res.data.data);
      setLoading(false);
      // console.log("HASIL :", res.data.data);
    };

    fetchPostsCities();
  }, []);

  //handler untuk navigasi ke page detail city
  const handleCityDetail = (id, nama_kota) => {
    navigate(`/virtualtour/${nama_kota}`, {
      state: { id: id, nama_kota: nama_kota },
    });
  };

  return (
    <>
      <div className="banner-fitur">
        <div className="banner">
          <div className="banner-img-wrap">
            <img src={fiturImg3} alt="" className="banner-img" />
          </div>
          <p>Virtual Tour</p>
        </div>
        <div className="banner">
          <div className="banner-img-wrap">
            <img src={fiturImg2} alt="" className="banner-img" />
          </div>
          <p>City Information</p>
        </div>
        <div className="banner">
          <div className="banner-img-wrap">
            <img src={fiturImg1} alt="" className="banner-img" />
          </div>
          <p>Recommendation Store</p>
        </div>
      </div>
      <div className="container-body">
        {loading ? (
          <div className="wrap_loading">
            <Dots className="spin-loading" color1="#003bfd" color2="#fff" />
          </div>
        ) : (
          <SliderCard data={cities} goDetail={handleCityDetail} />
        )}
        <div className="banner-merch">
          <div className="banner-merch-img-wrapper">
            <img
              src="https://statik.tempo.co/data/2021/10/17/id_1059371/1059371_720.jpg"
              alt=""
              className="img-banner-merch"
            />
          </div>
          <div className="banner-merch-content">
            <h1 className="banner-merch-title">
              Get Special Merch From Several Destination
            </h1>
            <p className="banner-merch-desc">
              Recommendation spesial merch from us only for you!
            </p>
            <Link to="/store">
              <button className="baner-merch-button">Find It</button>
            </Link>
          </div>
        </div>
        <div className="categories">
          <h1 className="category-title">Categories</h1>
          <p className="category-desc">Choose categories you want to see it!</p>
          <div className="category-container">
            <Link
              className="link"
              to="/search"
              state={{ keyword: "", cat: "nature" }}
            >
              <div className="category-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="nature"
                >
                  <path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z" />
                </svg>
                <p className="category-item-title cat1">Nature</p>
              </div>
            </Link>
            <Link
              className="link"
              to="/search"
              state={{ keyword: "", cat: "mixed" }}
            >
              <div className="category-item">
                <svg
                  className="mountain"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 32c12.5 0 24.1 6.4 30.7 17L503.4 394.4c5.6 8.9 8.6 19.2 8.6 29.7c0 30.9-25 55.9-55.9 55.9H55.9C25 480 0 455 0 424.1c0-10.5 3-20.8 8.6-29.7L225.2 49c6.6-10.6 18.3-17 30.8-17zm65 192L256 120.4 176.9 246.5 208 288l48-64h65z" />
                </svg>
                <p className="category-item-title cat2">Mixed</p>
              </div>
            </Link>
            <Link
              className="link"
              to="/search"
              state={{ keyword: "", cat: "historical" }}
            >
              <div className="category-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="history"
                >
                  <path d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8.1-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zm128-96c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z" />
                </svg>
                <p className="category-item-title cat3">Historical</p>
              </div>
            </Link>
            <Link
              className="link"
              to="/search"
              state={{ keyword: "", cat: "iconic" }}
            >
              <div className="category-item">
                <svg
                  className="iconic"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M180.7 4.7c6.2-6.2 16.4-6.2 22.6 0l80 80c2.5 2.5 4.1 5.8 4.6 9.3l40.2 322H55.9L96.1 94c.4-3.5 2-6.8 4.6-9.3l80-80zM152 272c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H152zM32 448H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                </svg>
                <p className="category-item-title cat4">Iconic</p>
              </div>
            </Link>
            <Link
              className="link"
              to="/search"
              state={{ keyword: "", cat: "mall" }}
            >
              <div className="category-item">
                <svg
                  className="mall"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z" />
                </svg>
                <p className="category-item-title cat5">Mall</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="testimoni">
          <h2>Testimoni</h2>
          <Carousel fade={true} interval={3000} controls={false}>
            <Carousel.Item>
              <CardCompt5
                image={pakSandi}
                subTitle="Menteri Pariwisata dan Ekonomi Kreatif"
                title="Sandiaga Uno"
                desc="Dibawah tangan-tangan ahli anak muda, bisa terciptalah suatu karya digital. Vitour merupakan salah satu platform pariwisata yang patut untuk untuk diapresiasi"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCompt5
                image={ridwanKamil}
                subTitle="Gubernur Jawa Barat"
                title="Ridwan Kamil"
                desc="Websitenya sangat bagus dan informatif. mengusung teknologi yang sedang hype di zaman sekarang dan bisa menjadi pusat informasi pariwisata"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCompt5
                image={rektorUnpad}
                subTitle="Rektor Unpad"
                title="Prof. Dr. Rina Indiastuti, S.E., M.SIE."
                desc="Perlunya sentralisasi informasi pariwisata menjadi salah satu solusi pelestarian budaya secara digital. Vitour menjadi salah satu dobrakan baru untuk menjadi pusat data pariwisata daerah"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Body;
// <div className="search-wrapper">
//     <div class="search_box">
//         <input type="text" class="input" placeholder="search..."/>
//         <div class="btn">
//             <p>Search</p>
//         </div>
//     </div>
// </div>
