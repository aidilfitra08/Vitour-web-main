import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Dots } from "loading-animations-react";
import ImageDefault from "./../../Component/CardComponent/default-2.jpg";
import CardCompt2 from "../../Component/CardComponent/CardCompt2";
import { CardCompt6 } from "../../Component/CardComponent/CardCompt6";
import Image from "../../../assets/images/pict (3).png";
import Empty from "../../../assets/images/empty.jpg";
import defaultPhoto from "./default-city-bg.webp";
import "./city.css";
import { Footer } from "../../LandingPageCompt/Footer/Footer";

function DetailCity(props) {
  //mengambil data dari page sebelumnya
  const location = useLocation();
  const navigate = useNavigate();
  const [cities, setCities] = useState([]);
  const [destinasi, setDestination] = useState([]);
  const [cityImage, setCityImage] = useState("");
  const [culture, setCulture] = useState("");
  const [loading, setLoading] = useState(false);
  const [empty, isEmpty] = useState(false);

  // console.log(location);
  const dummy = [1, 2, 3, 4, 5, 6, 7, 8];
  // const city_id = location.state.id;
  // const city_name = location.state.nama_kota;
  // const [city_id, setCityId] = useState("");
  let city_id = "";
  let city_name = "";
  const { id } = useParams();

  if (location.state) {
    city_id = location.state.id;
    city_name = location.state.nama_kota;
  } else if (id != undefined) {
    city_name = id;
  }

  useEffect(() => {
    const fetchCityByID = async () => {
      setLoading(true);
      axios
        // .get(`https://vitour-backend.herokuapp.com/api/cities/${city_id}`)
        .get(process.env.REACT_APP_BASE_URL + `/api/cities/name/${id}`)
        .then((res) => {
          console.log("result :", res.data.data);
          // setCityId(res.data.data.city_id)
          // city_id = res.data.data.city_id
          // console.log("Image1 :", res.data.data.images[1]);
          if (res.data.data.images.length > 0) {
            setCityImage(res.data.data.images[1].images_link);
          }

          setCities(res.data.data);
          setLoading(false);
          isEmpty(true);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const fetchDestination = async () => {
      setLoading(true);
      axios
        .get(process.env.REACT_APP_BASE_URL + `/api/city/destinations`)
        .then((res) => {
          console.log("Destination :", res.data.data);
          setDestination(res.data.data);
          setLoading(false);
          isEmpty(true);
        });
    };

    fetchDestination();
    fetchCityByID();
  }, []);

  //handler untuk navigasi ke page destination
  const handleDestination = (id, nama_destinasi) => {
    navigate(`/destination/${id}`, {
      state: { id: id, nama_destinasi: nama_destinasi },
    });
    console.log("success");
  };
  console.log(cities);
  let getDestinationData = () => {
    if (loading) {
      return (
        <div className="wrap_loading">
          <Dots className="spin-loading" color1="#003bfd" color2="#fff" />
        </div>
      );
    } else {
      return (
        <>
          <h1 className="title_detailcity_destination">
            Tempat wisata di {cities.nama_kota}
          </h1>
          <div className="detailcity_destination_content">
            {destinasi
              .filter((filterData) => filterData.city_id === cities.city_id)
              .map((data) => {
                return data != null ? (
                  <div
                    className="ctm-card-container2"
                    key={data.destination_id}
                  >
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
                    <p className="description-card">
                      {data.deskripsi_destinasi}
                    </p>
                    <div
                      className="discover"
                      onClick={() =>
                        handleDestination(
                          data.destination_id,
                          data.nama_destinasi
                        )
                      }
                    >
                      <a className="link-crs">Discover</a>
                    </div>
                  </div>
                ) : (
                  <h2 className="alert">Kosong</h2>
                );
              })}
          </div>
        </>
      );
    }
  };

  // const Image1 = cities.images[0].images_link;
  return (
    <>
      <section className="header_detailcity">
        <div className="img_wrap">
          <img
            src={cityImage == [] ? defaultPhoto : cityImage}
            alt=""
            className="header_background"
          />
        </div>
        <div className="header_content_detailcity">
          <h1 className="title_detailcity">{cities.nama_kota}</h1>
          <p className="desc_detailcity">{cities.informasi_kota}</p>
        </div>
      </section>
      <section className="detailcity_destination">
        {getDestinationData()}
      </section>
      <section className="city_info">
        <h1 className="city_info_title">Informasi Daerah</h1>
        <div className="city_info_content">
          <CardCompt2
            header="Kuliner"
            image="https://www.astronauts.id/blog/wp-content/uploads/2022/08/Makanan-Khas-Daerah-tiap-Provinsi-di-Indonesia-Serta-Daerah-Asalnya.jpg"
            sendId={city_id}
            title={city_name}
            address={"virtualtour/" + city_name + "/culinary"}
            text="Find some culinary from this city in here"
          ></CardCompt2>
          <CardCompt2
            header="Budaya"
            image="https://sumbernesia.com/wp-content/uploads/2019/01/Keragaman-Kebudayaan-Indonesia.jpg"
            sendId={city_id}
            title={city_name}
            address={"virtualtour/" + city_name + "/culture"}
            text="Get know culture from this city in here"
            // goToCulture={handleCulture(city_id)}
          ></CardCompt2>
          <CardCompt2
            header="Merch"
            image="https://lpem.baznas.go.id/wp-content/uploads/2021/01/BAZNAS-Zakat-LPEM-26-Jan-2b.jpeg"
            sendId={city_id}
            title={city_name}
            address={"store"}
            text="Get some souvenirs 100% original from city in here"
          ></CardCompt2>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default DetailCity;
