import React from "react";
import { Link } from "react-router-dom";
import EnqueryForm from "../../Shared/Category/EnqueryForm";
import "./furnitureSlider.scss";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { isMobile } from "react-device-detect";

const images = [
  {
    url:
      "https://www.pixelstalk.net/wp-content/uploads/images1/Desktop-Floor-Pictures.jpg",
  },
  {
    url:
      "https://www.pixelstalk.net/wp-content/uploads/images1/Download-hd-furniture-wallpapers.jpg",
  },
  {
    url:
      "https://hips.hearstapps.com/edc.h-cdn.co/assets/16/28/2048x1024/landscape-1468439687-white-living-room-furniture-lead.jpg?resize=980:*",
  },
];
const FurnitureSlider = (props) => {
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

export default FurnitureSlider;
