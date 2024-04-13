import React from "react";
import CategoryEnquiryForm from "./CategoryEnquiryForm";
import { Link } from "react-router-dom";
import ghar from "../../src/component/images/ghar.png";
import furnitureCat from "../../src/component/images/furnitureCat.jpg";
import doggy from "../../src/component/images/doggy.png";
import bike from "../../src/component/images/bike.png";
import car from "../../src/component/images/car.png";
import mob from "../../src/component/images/mob.png";
import service1 from "../../src/component/images/Service1.jpg";
import electronics from "../../src/component/images/electronics.png";
import "./AllCategory.css";

const AllCategories = () => {
  return (
    <>
      <div className="enquiry">
        <div className="row gap-5">
          <div className="col-lg-3">
            <h5
              style={{
                textAlign: "center",
                paddingTop: "25px",
                fontFamily: "areal",
                marginBottom: "-20px"
              }}
            >
              <ins>ENQUIRY FORM</ins>
            </h5>
            <CategoryEnquiryForm />
          </div>
          <div
            className=" col-lg-8  hidden-sm hidden-xs visible-md-block visible-lg-block"
            style={{ background: "white", borderRadius: "8rem 0 0 8rem", paddingTop: '4rem', paddingLeft: '5rem' }}
          >
            <div class="row">
              <div class="col-4">
                <div>
                  <Link to="/business-pricing/Furnitures" title="Category Furnitures">
                    <img
                      alt="imag"
                      src={furnitureCat}
                      className="categoryHover"
                    />
                    <p className="text-center fs-14 mb-0">Furnitures</p>
                  </Link>
                </div>
              </div>
              <div class="col-4">
                <Link to="/business-pricing/RealEstates" title="Category RealEstates">
                  <img
                    alt="imag"
                    src={ghar}
                    // style={isMobile ? mobileStyle : desktopStyle}
                    className="categoryHover"
                  />
                  <p className="text-center fs-14 mb-0">Real Estate</p>
                </Link>
              </div>
              <div class="col-4">
                <div>
                  <Link to="/business-pricing/Bikes" title="Category Bikes">
                    <img alt="imag" src={bike} className="categoryHover" />
                    <p className="text-center fs-14 mb-0">Bikes</p>
                  </Link>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-4">
                <div>
                  <Link to="/business-pricing/Pets" title="Category Pets">
                    <img alt="imag" src={doggy} className="categoryHover" />
                    <p className="text-center fs-14 mb-0">Pets</p>
                  </Link>
                </div>
              </div>
              <div class="col-4">
                <div>
                  <Link to="/business-pricing/Electronics" title="Category Electronics">
                    <img
                      alt="imag"
                      src={electronics}
                      className="categoryHover"
                    />
                    <p className="text-center fs-14 mb-0">Electronics</p>
                  </Link>
                </div>
              </div>
              <div class="col-4">
                <div>
                  <Link to="/business-pricing/Cars" title="Category Cars">
                    <img alt="imag" src={car} className="categoryHover" />
                    <p className="text-center fs-14 mb-0">Cars</p>
                  </Link>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-4">
                {" "}
                <div>
                  <Link to="/business-pricing/Mobiles" title="Category Mobiles">
                    <img alt="imag" src={mob} className="categoryHover" />
                    <p className="text-center fs-14 mb-0">Mobiles</p>
                  </Link>
                </div>
              </div>
              <div class="col-4">
                {" "}
                <div>
                  <Link to="/business-pricing/Services" title="Category Services">
                    <img alt="imag" src={service1} className="categoryHover" />
                    <p className="text-center fs-14 mb-0">Services</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5 border d-lg-none hidden-md visible-xs-block visible-sm-block">
            <div class="row">
              <div class="col-6">
                <div>
                  <Link to="/business-pricing/Furnitures" title="Category Furnitures">
                    <img
                      alt="imag"
                      src={furnitureCat}
                      className="categoryHover"
                    />
                    <p className="text-center fs-14 mb-0">Furnitures</p>
                  </Link>
                </div>
              </div>
              <div class="col-6">
                {" "}
                <div>
                  <Link to="/business-pricing/RealEstates" title="Category RealEstates">
                    <img
                      alt="imag"
                      src={ghar}
                      // style={isMobile ? mobileStyle : desktopStyle}
                      className="categoryHover"
                    />
                    <p className="text-center fs-14 mb-0">Real Estate</p>
                  </Link>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-6">
                {" "}
                <div>
                  <Link to="/business-pricing/Bikes" title="Category Bikes">
                    <img alt="imag" src={bike} className="categoryHover" />
                    <p className="text-center fs-14 mb-0">Bikes</p>
                  </Link>
                </div>
              </div>
              <div class="col-6">
                {" "}
                <div>
                  <Link to="/business-pricing/Pets" title="Category Pets">
                    <img alt="imag" src={doggy} className="categoryHover" />
                    <p className="text-center fs-14 mb-0">Pets</p>
                  </Link>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div>
                  <Link to="/business-pricing/Electronics" title="Category Electronics">
                    <img
                      alt="imag"
                      src={electronics}
                      className="categoryHover"
                    />
                    <p className="text-center fs-14 mb-0">Electronics</p>
                  </Link>
                </div>
              </div>
              <div class="col-6">
                <div>
                  <Link to="/business-pricing/Cars" title="Category Cars">
                    <img alt="imag" src={car} className="categoryHover" />
                    <p className="text-center fs-14 mb-0">Cars</p>
                  </Link>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-6">
                {" "}
                <div>
                  <Link to="/business-pricing/Mobiles" title="Category Mobiles">
                    <img alt="imag" src={mob} className="categoryHover" />
                    <p className="text-center fs-14 mb-0">Mobiles</p>
                  </Link>
                </div>
              </div>
              <div class="col-6">
                <div>
                  <Link to="/business-pricing/Services" title="Category Services">
                    <img alt="imag" src={service1} className="categoryHover" />
                    <p className="text-center fs-14 mb-0">Services</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCategories;
