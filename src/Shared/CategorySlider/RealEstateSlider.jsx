import React from "react";
import EnqueryForm from "../../Shared/Category/EnqueryForm";
import { isMobile } from "react-device-detect";
const realEstateSlider = (props) => {
  console.log("@@sliderCategory values", props);
  const mobileStyle = {
    height: "600px",
  };
  const desktopStyle = {
    height: "500px",
  };
  const mob = {
    width: "100%",
  };
  const desk = {
    width: "50%",
  };
  return (
    <div className="row ">
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
                  style={{ height: "400px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={props.props.slideImageTwo}
                  alt="Chicago"
                  style={{ height: "400px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={props.props.slideImageThird}
                  alt="Los Angeles"
                  style={{ height: "400px" }}
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

export default realEstateSlider;
