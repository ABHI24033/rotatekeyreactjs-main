// import React, { useEffect, useState } from "react"
import { useState } from "react";
import { url } from "../../../env";
import "./realEstateSection.css";
import { isMobile } from "react-device-detect";
// import "react-awesome-slider/dist/styles.css";
import EnqueryForm from "../../../../Shared/Category/EnqueryForm";
import Hola9logo from "../../../images/logotext.png";
import home1 from "../../../../component/images/home1.png";
import home2 from "../../../../component/images/home2.png";
import home3 from "../../../../component/images/home3.png";
// const RealStateImage = {
//   Image1: home1,
//   Image2: home2,
//   Image3: home3,
// };

const RealEstateSection = (props) => {
  const mobileStyle = {
    height: "400px",
  };
  const desktopStyle = {
    height: "300px",
  };

  const myStyle = {
    backgroundImage:
      "url('http://www.empressgroup.in/images/overview-banner.jpg')",
  };
  const [realEstateForm, setrealEstateForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zip_Code: "",
  });
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setrealEstateForm({ ...realEstateForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    var formdata = new FormData();
    formdata.append("firstName", realEstateForm.firstName);
    formdata.append("lastName", realEstateForm.lastName);
    formdata.append("email", realEstateForm.email);
    formdata.append("zip_code", realEstateForm.zip_Code);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "api/adsapi/RealEstateEnquery", requestOptions)
      .then((response) => {
        setSuccess(true);
      })

      .catch((error) => {
        setSuccess(false);
      });
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
                  src={home1}
                  alt="Los Angeles"
                  style={{ height: "300px" }}
                />
              </div>
              <div className="carousel-item">
                <img src={home2} alt="Chicago" style={{ height: "300px" }} />
              </div>
              <div className="carousel-item">
                <img
                  src={home3}
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

export default RealEstateSection;
