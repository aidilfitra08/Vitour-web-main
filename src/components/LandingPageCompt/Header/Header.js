import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
// import { Carousel, Button } from "react-bootstrap";
// import Image1 from "./../../../assets/images/pict (1).png";
// import Image2 from "./../../../assets/images/pict (2).png";
// import Image3 from "./../../../assets/images/pict (3).png";
import { Link } from "react-router-dom";
import "@fortawesome/free-solid-svg-icons";

function Header() {
  const navigate = useNavigate();
  const handleCityDetail = (keyword) => {
    const cat = "";
    navigate(`/search`, { state: { keyword: keyword, cat: cat } });
  };
  return (
    <>
      <section className="header-homepage">
        <div className="content-homepage-container">
          <h1 className="homepage-title">
            <mark>Discover</mark> Your Dream and Favorite Destination Virtually
          </h1>
          <p className="homepage-desc">
            Find Everthing About Your Dream Destination With Virtual Tour,
            Culiner, Culture and Merch From The City You Choose
          </p>
          <div className="search-bar">
            <input
              type="text"
              name="search-bar"
              id="search-bar-homepage"
              placeholder="Where do you want visit?"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleCityDetail(e.target.value);
                }
              }}
            />
            {/* <Link to="/search">
              <button>search</button>
            </Link> */}
          </div>
        </div>
      </section>
    </>
    // <Carousel fade={true} interval={5000} controls={false}>
    //   <Carousel.Item>
    //     <div className="overlay-container">
    //       <div className="overlay"></div>
    //     </div>
    //     <img
    //       className="d-block w-100"
    //       src={Image1}
    //       alt="First slide"
    //       width={900}
    //       height="auto"
    //     />
    //     <Carousel.Caption>
    //       <h2>Explore your dream tourist spot virtually</h2>
    //       <p>
    //         Find a tourist spot you want to visit then enjoy the sensation of
    //         traveling virtually
    //       </p>
    //       {/* <Link to="/virtualtour" className="buttonVitour">
    //       <button className="button1">Start Virtual Tour</button>
    //     </Link> */}
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <div className="overlay"></div>
    //     <img
    //       className="d-block w-100"
    //       src={Image2}
    //       alt="Second slide"
    //       width={900}
    //       height="auto"
    //     />

    //     <Carousel.Caption>
    //       <h2>Explore your dream tourist spot virtually</h2>
    //       <p>
    //         Find a tourist spot you want to visit then enjoy the sensation of
    //         traveling virtually
    //       </p>
    //       {/* <Link to="/virtualtour" className="buttonExplore">
    //       <button className="button1">Start Virtual Tour</button>
    //     </Link> */}
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <div className="overlay"></div>
    //     <img
    //       className="d-block w-100"
    //       src={Image3}
    //       alt="Third slide"
    //       width={900}
    //       height="auto"
    //     />

    //     <Carousel.Caption>
    //       <h2>Explore your dream tourist spot virtually</h2>
    //       <p>
    //         Find a tourist spot you want to visit then enjoy the sensation of
    //         traveling virtually
    //       </p>
    //       {/* <Link to="/virtualtour" className="buttonExplore">
    //       <button className="button1">Start Virtual Tour</button>
    //     </Link> */}
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
  );
}

export default Header;
