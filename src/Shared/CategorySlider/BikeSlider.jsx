import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import EnqueryForm from "../Category/EnqueryForm";
import "./bikeSlider.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { isMobile } from "react-device-detect";

const images = [
  {
    url: "https://wallpaperaccess.com/full/3460583.jpg",
  },
  {
    url: "https://wallpaperaccess.com/full/6371908.jpg",
  },
  {
    url: "https://wallpaperaccess.com/full/6371935.jpg",
  },
];
const BikeSlider = (props) => {
  const mobileStyle = {
    height: "400px",
  };
  const desktopStyle = {
    height: "300px",
  };
  console.log("@@sliderCategory values", props);

  return (
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

export default BikeSlider;
