// p

import React from "react";
import "./electronicsSlider.css";
import EnqueryForm from "../../Shared/Category/EnqueryForm";
import { Link } from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import { isMobile } from "react-device-detect";

const images = [
  {
    url:
      "https://e1.pxfuel.com/desktop-wallpaper/504/821/desktop-wallpaper-awesome-47-electronic-electronic-components.jpg",
  },
  {
    url:
      "https://e0.pxfuel.com/wallpapers/494/364/desktop-wallpaper-dj-music-headphones-equipment-sound-electronics-installation.jpg",
  },
];
const ServiceSlider = (props) => {
  const mobileStyle = {
    height: "400px",
  };
  const desktopStyle = {
    height: "300px",
  };

  return (
    <>
      <div className="row  mt-1">
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
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4" style={isMobile ? mobileStyle : desktopStyle}>
          <EnqueryForm />
        </div>
      </div>
    </>
  );
};

export default ServiceSlider;
