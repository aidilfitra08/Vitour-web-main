import React, { useState, useEffect } from "react";
import axios from "axios";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Select from "react-select";
import { Dots } from "loading-animations-react";
import Image from "../../assets/images/kuliner.jpg";
import "./Store.css";
import { Footer } from "../LandingPageCompt/Footer/Footer";

function Store() {
  const location = useLocation();
  const [dummy, setDummy] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [search, setSearch] = useState("");
  const [merch, setMerch] = useState([]);
  const [filterItem, setfilterItem] = useState([]);
  const [filterCity, setfilterCity] = useState([]);
  const [city, setCity] = useState([]);
  const [getKeyword, setGetKeyword] = useState("");
  const [getTitle, setTitle] = useState("Several Destination");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(location.state) {
      setGetKeyword(location.state.id);
      setTitle(location.state.title);
    }
    
  }, []);

  useEffect(() => {
    const fetchMerch = async () => {
      setLoading(true);
      axios
        .get(process.env.REACT_APP_BASE_URL + `/api/city/merchandises`)
        .then((res) => {
          setMerch(res.data.data);
          setfilterItem(res.data.data);
          setfilterCity(res.data.data);
          setLoading(false);
        });
    };
    const fetchCity = async () => {
      axios
        .get(process.env.REACT_APP_BASE_URL + `/api/cities`)
        .then((res) => {
          setCity(res.data.data);
        });
    };

    fetchCity();
    fetchMerch();
  }, []);

  const filterCategory = (catItem) => {
    const result = filterItem.filter((curData) => {
      if (catItem === "All") {
        return curData;
      }
      return catItem === curData.merchandise_type;
    });
    setGetKeyword(null);
    setMerch(result);
    console.log(result);
  };

  const filterCityById = (event) => {
    let value = event.target.value;
    console.log(value);
    const resultFilter = filterItem.filter((curData) => {
      if (value === "All") {
        return curData;
      }
      return curData.city_id === value;
    });
    setGetKeyword(null);
    setMerch(resultFilter);
    console.log("city_id", value);
  };

  //remove duplicate array when mapping inside jsx
  const uniqueItem = [];
  const uniqueCat = filterItem.filter((element) => {
    const isDuplicate = uniqueItem.includes(element.merchandise_type);

    if (!isDuplicate) {
      uniqueItem.push(element.merchandise_type);
      return true;
    }
    return false;
  });

  //function for filter by city
  const filterByCity = (city_id, city_name) => {
    const result = filterCity.filter((curData) => {
      if (city_id === "All") {
        return curData;
      }
      return city_id === curData.city_id;
    });
    setGetKeyword(null);
    setMerch(result);
    console.log(result);
  };

  return (
    <>
      <div className="store_container">
        <div className="store_header">
          <h1 className="store_header_title">
            Find Some Merch From UMKM in{" "}
            {getTitle}
          </h1>
          <div className="filter_search">
            <input
              type="text"
              className="inputFilter2"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="store_content_container">
          <div className="store_sidebar_menu">
            <div className="category_menu">
              <h2 className="menu_title">Category</h2>
              <hr />
              <div className="menu_cat">
                <input
                  type="radio"
                  name="category"
                  id="category"
                  value="All"
                  onChange={() => filterCategory("All")}
                />
                <span className="cat_2">All</span>
              </div>
              {uniqueCat.map((cat) => {
                return (
                  <div className="menu_cat">
                    <input
                      type="radio"
                      name="category"
                      id="category"
                      value={cat.merchandise_type}
                      onChange={() => filterCategory(cat.merchandise_type)}
                    />
                    <span className="cat_1">{cat.merchandise_type}</span>
                  </div>
                );
              })}
            </div>
            <div className="city_menu">
              <h2 className="city_menu_title">City</h2>
              <hr />
              <DropdownButton
                id="dropdown-item-button filter_city"
                title="City"
              >
                <Dropdown.Item
                  as="button"
                  value="All"
                  onClick={() => filterByCity("All")}
                >
                  All
                </Dropdown.Item>
                {city.map((kota) => {
                  return (
                    <Dropdown.Item
                      as="button"
                      value={kota.city_id}
                      onClick={() => filterByCity(kota.city_id, kota.nama_kota)}
                    >
                      {kota.nama_kota}
                    </Dropdown.Item>
                  );
                })}
              </DropdownButton>
              {/* <select
              name="city_select"
              id="city_select"
              onChange={filterCityById}
            >
              <option value="All">All</option>
              {city.map((option) => {
                return (
                  <option value={option.city_id}>{option.nama_kota}</option>
                );
              })}
            </select> */}
            </div>
          </div>
          <div className="store_item_list">
            {loading ? (
              <div className="wrap_loading">
                <Dots className="spin-loading" color1="#003bfd" color2="#fff" />
              </div>
            ) : (
              merch
                .filter((value) => {
                  if (getKeyword) {
                    if (value.city_id === getKeyword) {
                      console.log("berhasil");
                      return value;
                    }
                  } else if (search === " ") {
                    return value;
                  } else if (
                    value.nama_merchandise
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((post) => {
                  return (
                    <Link
                      className="item_link"
                      to={`/store/item/${post.merchandise_id}`}
                      state={post.merchandise_id}
                    >
                      <div key={post} className="store_card_item_container">
                        <div className="store_card_item_image_wrap">
                          {post.images.slice(0, 1).map((image, index) => {
                            return (
                              <img
                                src={image.images_link}
                                alt=""
                                className="store_card_item_image"
                              />
                            );
                          })}
                        </div>
                        <h2 className="store_card_item_title">
                          {post.nama_merchandise}
                        </h2>
                        <div className="location_merch">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                          >
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                          </svg>
                          <p className="store_card_item_desc">
                            {post.alamat_toko}
                          </p>
                        </div>
                        <h2 className="item_price">Rp{post.price}</h2>
                        {/* <div className="store_card_item_btn_wrap">
                      <a className="item_btn">Add to Cart</a>
                    </div> */}
                      </div>
                    </Link>
                  );
                })
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Store;
