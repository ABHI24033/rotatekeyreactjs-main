import React from "react";
// import "./carsSlider.css"
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import Life from "../../component/images/life.jpg";
import { Link } from "react-router-dom";
import EnqueryForm from "../Category/EnqueryForm";
import { isMobile } from "react-device-detect";

const images = [
  {
    url:
      "https://www.supercars.net/blog/wp-content/uploads/2020/09/wallpaperflare.com_wallpaper-1-1.jpg",
  },
  {
    url:
      "https://www.supercars.net/blog/wp-content/uploads/2020/07/1991-Ferrari-512-TR-010-2000-2048x1365.jpg",
  },
  {
    url:
      "https://www.supercars.net/blog/wp-content/uploads/2020/07/820562-2048x1365.jpg",
  },
];
const CarsSlider = (props) => {
  const mobileStyle = {
    height: "400px",
  };
  const desktopStyle = {
    height: "300px",
  };

  console.log("@@sliderCategory values", props);
  return (
    <div className="row mt-1">
      <div className="col-lg-8">
        <div className="mx-2 mt-1">
          <div
            id="carouselExampleFade"
            className="carousel"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner rounded">
              <div className="carousel-item active">
                <img
                  src={props.props.slideImageOne}
                  alt="Los Angeles"
                  style={{ height: "300px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={props.props.slideImageTwo}
                  alt="Chicago"
                  style={{ height: "300px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={props.props.slideImageThird}
                  alt="Los Angeles"
                  style={{ height: "300px" }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-4" style={isMobile ? mobileStyle : desktopStyle}>
        <EnqueryForm />
      </div>
    </div>
  );
};

export default CarsSlider;
