import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { HeaderCompt } from "../../Component/Header/HeaderCompt";
import { CardCompt3 } from "./../../Component/CardComponent/CardCompt3";
import "./culture.css";
import SliderCompt2 from "../../Component/SliderCompt/SliderCompt2";

function Budaya(props) {
  const location = useLocation();
  const city_id = location.state.id;
  const city_name = location.state.title;
  console.log(city_name);

  const [culture, setCulture] = useState([]);

  useEffect(() => {
    const fetchCulture = async () => {
      axios
        .get(
          process.env.REACT_APP_BASE_URL + `/api/city/cultures?filter=${city_id}`
        )
        .then((res) => {
          console.log("Culture :", res.data.data);
          setCulture(res.data.data);
        });
    };
    fetchCulture();
  }, []);
  return (
    <>
      <HeaderCompt
        title={`Discover Culture in ${city_name}`}
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident quasi repudiandae qui ducimus ullam obcaecati. Neque, quas itaque! Distinctio odit dolorum inventore quibusdam, enim molestiae."
      ></HeaderCompt>
      <section id="section2-culture">
        <SliderCompt2 data={culture}></SliderCompt2>
      </section>
      {/* <section id="section3-culture">
        <div class="background-culture-3">
          <div class="description-culture-3">
            <div class="subtitle-culture-3">
              <div class="line"></div>
              <div class="subtitle2 indonesia-culture-3">Indonesia</div>
              <div class="line"></div>
            </div>
            <div class="title-culture-3">
              <div class="h3">Explore more culture in indonesia</div>
            </div>
            <div class="body-culture-3">
              <div class="bodytext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                viverra sapien arcu id sed pretium. Rhoncus, arcu cras ac ut
                curabitur dui tristique.
              </div>
            </div>
            <div class="explore">
              <a class="explore-more" href="#">
                <button class="btn btn-explore">
                  <div class="bodytext">Explore More</div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section> */}
      {/* <div class="back">
        <a class="back-destination" href="#">
          <button class="btn btn-back">
            <div class="bodytext">Back to Destination</div>
          </button>
        </a>
      </div> */}
    </>
  );
}
Budaya.defaultProps = {
  loc: "Kota, Provinsi",
};
export default Budaya;
