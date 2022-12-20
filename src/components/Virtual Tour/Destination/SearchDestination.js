import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import "./SearchDestination.css";
import "../City/city.css";

function SearchDestination() {
  const [destinasi, setDestination] = useState([]);
  const [search, setSearch] = useState("");
  const [getKeyword, setGetKeyword] = useState("");
  const [selectCategory, setSelectCategory] = useState([]);
  const [selectCity, setSelectCity] = useState("");
  const [city, setCity] = useState([]);
  const location = useLocation();
  const keywordSearch = location.state.keyword;
  const keywordCat = location.state.cat;
  //initialize data from search bar in homepage
  useEffect(() => {
    setSearch(keywordSearch);
    setGetKeyword(keywordCat);
  }, []);

  useEffect(() => {
    const fetchDestination = async () => {
      axios
        .get(process.env.REACT_APP_BASE_URL + `/api/city/destinations`)
        .then((res) => {
          console.log("result :", res.data.data);
          setDestination(res.data.data);
          setSelectCategory(res.data.data);
          setSelectCity(res.data.data);
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
    fetchDestination();
  }, []);

  const navigate = useNavigate();
  const handleDestination = (id, nama_destinasi) => {
    navigate(`/destination/${id}`, {
      state: {
        id: id,
        nama_destinasi: nama_destinasi,
      },
    });
    console.log("success");
  };

  //remove duplicate array when mapping inside jsx
  const uniqueItem = [];
  const uniqueCat = selectCategory.filter((element) => {
    const isDuplicate = uniqueItem.includes(element.tipe_destinasi);

    if (!isDuplicate) {
      uniqueItem.push(element.tipe_destinasi);
      return true;
    }
    return false;
  });

  //function for filter by category
  const filterCategory = (categories) => {
    const result = selectCategory.filter((curData) => {
      if (categories === "All") {
        return curData;
      }
      return categories === curData.tipe_destinasi;
    });
    setGetKeyword(null);
    setDestination(result);
    // console.log(result);
  };

  //function for filter by city
  const filterCity = (city_id, city_name) => {
    const result = selectCity.filter((curData) => {
      if (city_id === "All") {
        return curData;
      }
      return city_id === curData.city_id;
    });
    setGetKeyword(null);
    setDestination(result);
    // console.log(result);
  };
  return (
    <div className="search_container vh-100 px-0" fluid={true}>
      <div className="search-bar">
        <input
          type="text"
          name="search-bar"
          id="search-bar"
          placeholder="Where do you want visit?"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Row className="filter_bar">
        <Col className="filter_cat">
          <DropdownButton id="dropdown-item-button" title="Category">
            <Dropdown.Item
              as="button"
              value="All"
              onClick={() => filterCategory("All")}
            >
              All
            </Dropdown.Item>
            {uniqueCat.map((category) => {
              return (
                <Dropdown.Item
                  as="button"
                  value={category.tipe_destinasi}
                  onClick={() => filterCategory(category.tipe_destinasi)}
                >
                  {category.tipe_destinasi}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
        </Col>
        <Col className="filter_city">
          <DropdownButton id="dropdown-item-button" title="City">
            <Dropdown.Item
              as="button"
              value="All"
              onClick={() => filterCity("All")}
            >
              All
            </Dropdown.Item>
            {city.map((kota) => {
              return (
                <Dropdown.Item
                  as="button"
                  value={kota.city_id}
                  onClick={() => filterCity(kota.city_id, kota.nama_kota)}
                >
                  {kota.nama_kota}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
        </Col>
      </Row>
      <div className="result">
        {/* <h3 className="result_search">
          Search by keyword <mark>"{search}"</mark> ,{" "}
          <mark>"{getKeyword}"</mark>
        </h3> */}
      </div>
      <div className="detailcity_destination_content onSearch">
        {destinasi
          .filter((value) => {
            if (getKeyword) {
              if (
                value.tipe_destinasi.toLowerCase() === getKeyword.toLowerCase()
              ) {
                return value;
                {
                  /* console.log("berhasil"); */
                }
              } else if (value.city_id === getKeyword) {
                return value;
                {
                  /* console.log("berhasil"); */
                }
              }
            } else if (keywordCat === null) {
              return value;
            } else if (search === " ") {
              return value;
            } else if (
              value.nama_destinasi.toLowerCase().includes(search.toLowerCase())
            ) {
              return value;
            }
          })
          .map((data) => {
            return (
              <div className="ctm-card-container2" key={data.destination_id}>
                {data.images.slice(0, 1).map((image, index) => {
                  return (
                    <img
                      key={index}
                      src={image.images_link}
                      alt=""
                      className="card-img destinationList"
                    />
                  );
                })}
                <h2 className="title-card">{data.nama_destinasi}</h2>
                <p className="description-card">{data.deskripsi_destinasi}</p>
                <div
                  className="discover"
                  onClick={() =>
                    handleDestination(data.destination_id, data.nama_destinasi)
                  }
                >
                  <a className="link-crs">Discover</a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SearchDestination;
