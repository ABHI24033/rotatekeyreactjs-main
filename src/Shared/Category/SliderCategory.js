import React from "react";
import EnqueryForm from "./EnqueryForm";

const SliderCategory = (props) => {
  return (
    <div>
      {" "}
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
                style={{ height: "450px" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={props.props.slideImageTwo}
                alt="Chicago"
                style={{ height: "450px" }}
              />
            </div>

            <div className="carousel-item">
              <img
                src={props.props.slideImageThird}
                alt="Los Angeles"
                style={{ height: "450px" }}
              />
            </div>
            {/* <EnqueryForm/> */}
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
  );
};

export default SliderCategory;
