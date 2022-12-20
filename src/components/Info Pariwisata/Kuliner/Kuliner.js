import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { HeaderCompt } from "../../Component/Header/HeaderCompt";
import { CardCompt3 } from "./../../Component/CardComponent/CardCompt3";
import "../Budaya/culture.css";
import SliderCompt3 from "../../Component/SliderCompt/SliderCompt3";

function Kuliner(props) {
  const location = useLocation();
  const city_id = location.state.id;
  const city_name = location.state.title;
  console.log(city_name);

  const [culinary, setCulinary] = useState([]);

  useEffect(() => {
    const fetchCulinary = async () => {
      axios
        .get(
          process.env.REACT_APP_BASE_URL +
            `/api/city/culinaries?filter=${city_id}`
        )
        .then((res) => {
          console.log("culinaries :", res.data.data);
          setCulinary(res.data.data);
        });
    };
    fetchCulinary();
  }, []);
  return (
    <>
      <HeaderCompt
        title={`Discover Culinary in ${city_name}`}
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident quasi repudiandae qui ducimus ullam obcaecati. Neque, quas itaque! Distinctio odit dolorum inventore quibusdam, enim molestiae."
      ></HeaderCompt>
      <section id="section2-culture">
        <SliderCompt3 data={culinary}></SliderCompt3>
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
Kuliner.defaultProps = {
  loc: "Kota, Provinsi",
};
export default Kuliner;
