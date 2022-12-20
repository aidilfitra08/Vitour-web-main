import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

//style
import "./Destination.css";

//Image
import { Footer } from "../../LandingPageCompt/Footer/Footer";

function Destination() {
  const location = useLocation();
  const id = location.state.id;
  console.log(location.state);

  const [destination, setDestination] = useState([]);
  const [video, setVideo] = useState([]);
  const [handle, setHandle] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchDestination = async () => {
      axios
        .get(process.env.REACT_APP_BASE_URL + `/api/city/destinations/${id}`)
        .then((res) => {
          console.log("result :", res.data.data);
          console.log("result :", res.data.data.videovrs.length);
          setDestination(res.data.data);
          if (res.data.data.videovrs.length != 0) {
            setVideo(res.data.data.videovrs[0].link_video);
            setHandle(true);
          } else {
            setVideo("");
            setHandle(false);
          }
          // setVideo(res.data.data[0].videovrs[0].link_video);
          setPhotos(res.data.data.images);

          console.log(res.data.data.images);
        });
    };

    fetchDestination();
  }, [id]);
  return (
    <>
      <section className="header_destination">
        <div className="img_wrap">
          {photos.slice(1, 2).map((image) => {
            return (
              <img
                src={image.images_link}
                alt=""
                className="header_background"
              />
            );
          })}
        </div>
        <div className="header_content_destination">
          <h1 className="title_destination">{destination.nama_destinasi}</h1>
          <p className="desc_destination">{destination.deskripsi_destinasi}</p>
        </div>
      </section>
      <section className="top_destinasi">
        <div className="rekomendasi_destinasi">
          <h1 className="title_destination">Rekomendasi Tempat</h1>
          <p className="desc_destination">{destination.deskripsi_destinasi}</p>
        </div>
      </section>
      <section className="wrap_video_destinasi">
        <iframe
          className="video_destinasi"
          width="946.67"
          height="420"
          src={handle ? video : "https://www.youtube.com/embed/aKtb7Y3qOck"}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="allowfullscreen"
        ></iframe>
      </section>
      <section className="gallery_destinasi">
        <h1 className="title_gallery">Destination Photos</h1>
        <div className="grid_gallery">
          {photos.map((photo) => {
            return <img src={photo.images_link} className="img_destination" />;
          })}

          {/* <img
            src="https://jurnalsecurity.com/go/wp-content/uploads/2018/11/raja-ampat.jpg"
            alt=""
            className="img_destination"
          /> */}
        </div>
      </section>
      <section className="feedback">
        <h1 className="title_feedback">Customer Feedback</h1>
        <Row xs="auto">
          <Col>
            <div className="divider-1"></div>
          </Col>
          <Col>
            <div className="divider-2"></div>
          </Col>
          <Col>
            <div className="divider-2"></div>
          </Col>
        </Row>
        <Container className="card-feedback">
          <Row xs="auto">
            <Col>
              <div className="feedback-1">
                <img
                  src="https://telegra.ph/file/c148a5d17a280a2fe3d00.jpg"
                  alt=""
                  className="img-profile"
                />
                <p className="desc_feedback">
                  Tempatnya sangat bagus dan murah. Sangat di rekomendasikan
                  untuk keluarga
                </p>
                <p className="profile_feedback">Ghaffa Gapuy</p>
                <p className="profile_feedback">Manager</p>
              </div>
            </Col>
            <Col>
              <div className="feedback-1">
                <img
                  src="https://telegra.ph/file/c148a5d17a280a2fe3d00.jpg"
                  alt=""
                  className="img-profile"
                />
                <p className="desc_feedback">
                  Patut dikunjungi karena banyak menjual makanan enak dan spot
                  foto
                </p>
                <p className="profile_feedback">Dika Dikoy</p>
                <p className="profile_feedback">Pejabat</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Destination;
