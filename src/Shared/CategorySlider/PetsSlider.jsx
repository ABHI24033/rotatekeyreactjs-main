import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { url } from "../../../src/component/env";
import "./petsSlider.css";
import { isMobile } from "react-device-detect";

// import CommonSectionCategory from '../../Shared/CommonSectionCategory';
import { categoryModel } from "../../Model/categoryCons";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import EnqueryForm from "../Category/EnqueryForm";
const images = [
  {
    url: "https://wallpaperaccess.com/full/546539.jpg",
  },
  {
    url:
      "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    url:
      "https://images.pexels.com/photos/96428/pexels-photo-96428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
const PetsSlider = (props) => {
  const mobileStyle = {
    height: "400px",
  };
  const desktopStyle = {
    height: "300px",
  };
  const [loading, setLoading] = useState(false);
  const greeting = "Pets";
  const hola9 = useContext(UserContext);

  const [realEstateForm, setrealEstateForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zip_Code: "",
  });
  const [success, setSuccess] = useState(null);
  // const [error, setError] = useState(false)

  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setrealEstateForm({ ...realEstateForm, [name]: value });
    console.log("@@checking signupform value", realEstateForm);
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
        console.log(response, "!Padma");
        setSuccess(true);
      })
      .catch((error) => {
        setSuccess(false);
      });
    console.log("message", success);
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

export default PetsSlider;
