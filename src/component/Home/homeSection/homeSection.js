// import React, { useEffect, useState } from "react"
// import Search from '../../Base/Search/search';
import Searchnew from "../../Base/Search/Searchnew";
import "./homeSection.css";
import { Link } from "react-router-dom";
import any2 from "../../images/any2.jpg";
import any3 from "../../images/any3.jpg";
import any4 from "../../images/any4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronDown } from "react-icons/bs";
import City from "../../Ads/category/City";
import SearchForm from "../../Base/Search/SearchForm";
import { getExtraField } from "../../../store/ProductFilterSlice";
import { useDispatch } from "react-redux";

// import Hola9logo from '../images/logotext.png';

const HomeSection = () => {
  const dispatch = useDispatch();
  const handleClick = (category) => {
    const obj = { category, extrafiled: {} };
    dispatch(getExtraField(obj));
  };

  return (
    <>
      <div className="hidden-sm hidden-xs visible-md-block visible-lg-block">
        <div
          className="container-fluid bgcolor"
          style={{ display: "flex", justifyContent: "center", height: "45px" }}
        >
          <p className="fs-14 mx-3">
            <Link
              onClick={() => handleClick("RealEstate")}
              to={`/ads-listing/category/${"RealEstate"}/`}
              className="catList"
            >
              {" "}
              Real Estate{" "}
            </Link>
          </p>
          <p className="fs-14 mx-3 categoriesLink">
            {" "}
            <Link
              onClick={() => handleClick("Furniture")}
              to={`/ads-listing/category/${"Furniture"}/`}
              className="catList"
            >
              {" "}
              Furniture{" "}
            </Link>
          </p>
          <p className="fs-14 mx-3">
            {" "}
            <Link
              onClick={() => handleClick("Mobiles")}
              to={`/ads-listing/category/${"Mobiles"}/`}
              className="catList"
            >
              {" "}
              Mobiles{" "}
            </Link>
          </p>
          <p className="fs-14 mx-3">
            {" "}
            <Link
              onClick={() => handleClick("Bikes")}
              to={`/ads-listing/category/${"Bike"}/`}
              className="catList"
            >
              {" "}
              Bikes
            </Link>
          </p>
          <p className="fs-14 mx-3">
            {" "}
            <Link
              onClick={() => handleClick("Cars")}
              to={`/ads-listing/category/${"Cars"}/`}
              className="catList"
            >
              {" "}
              Cars
            </Link>
          </p>
          <p className="fs-14 mx-3">
            {" "}
            <Link
              onClick={() => handleClick("Electronics")}
              to={`/ads-listing/category/${"Electronics"}/`}
              className="catList"
            >
              {" "}
              Electronics
            </Link>
          </p>
          {/* <p className="fs-14 mx-3">
            {" "}
            <Link
              onClick={() => handleClick("Jobs")}
              to={`/ads-listing/category/${"Jobs"}/`}
              className="catList"
            >
              {" "}
              Jobs
            </Link>
          </p> */}
          <p className="fs-14 mx-3">
            {" "}
            <Link
              onClick={() => handleClick("Pets")}
              to={`/ads-listing/category/${"Pets"}/`}
              className="catList"
            >
              {" "}
              Pets{" "}
            </Link>
          </p>

          <p className="fs-14 mx-3">
            {" "}
            <Link
              onClick={() => handleClick("Services")}
              to={`/ads-listing/category/${"Services"}/`}
              className="catList"
            >
              {" "}
              Services{" "}
            </Link>
          </p>
        </div>
      </div>

      <div className="d-lg-none hidden-md visible-xs-block visible-sm-block">
        <SearchForm />
      </div>
      <div className="mx-2 mt-1 hidden-sm hidden-xs visible-md-block visible-lg-block">
        <div
          id="carouselExampleFade"
          className="carousel"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner rounded">
            <div className="carousel-item active">
              <img src={any4} alt="Los Angeles" style={{ height: "370px" }} />
            </div>
            <div className="carousel-item">
              <img src={any2} alt="Chicago" style={{ height: "370px" }} />
            </div>

            <div className="carousel-item">
              <img src={any3} alt="Los Angeles" style={{ height: "370px" }} />
            </div>
            <Searchnew />
            {/* <City /> */}
          </div>

          <div className=" w-100 m-2">
            <City />
          </div>
          {/* <button
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
          </button> */}
        </div>
      </div>
      <div
        className="d-lg-none hidden-md visible-xs-block visible-sm-block "
        style={{ marginTop: "-50px", marginBottom: "-5px" }}
      >
        <City />
      </div>
    </>
  );
};

export default HomeSection;
