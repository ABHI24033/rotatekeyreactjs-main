import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./Scroll.css";
import { isMobile } from "react-device-detect";
import mumbaitaj from "../../images/mumbaitaj.png";
import bangalorevidhan from "../../images/bangalorevidhan.png";
import hydrabadminar from "../../images/hydrabadminar.png";
import chennaistation from "../../images/chennaistation.png";
import puneshanivar from "../../images/puneshanivar.png";
import ahem from "../../images/ahem.png";
import delhiindia from "../../images/delhiindia.png";
import jaipur from "../../images/jaipur.png";
import indore from "../../images/indore.png";
import noida from "../../images/noida.png";
import lucknow from "../../images/lucknow.png";
import chandigarh from "../../images/chandigarh.png";
import vado from "../../images/vado.png";
import kol from "../../images/kol.png";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  // slidesToShow: 14,
  slidesToShow: 11,
  slidesToScroll: 9,
  initialSlide: 0,
  // autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 7,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      },
    },
  ],
};
const City = () => {
  const mobileStyle = {
    backgroundSize: "cover",
    borderRadius: "35px",
    width: "70px",
    height: "70px",
    marginLeft: "10px",
  };
  const desktopStyle = {
    backgroundSize: "cover",
    borderRadius: "35px",
    width: "70px",
    height: "70px",
  };

  return (
    <>
      <div
        className="container justify-content-center mainborder"
        style={{
          zIndex: "2",
          backdropFilter: "blur(3px)",
          marginTop: "-5px",
          height: "140px",
          width:"100%",
          borderRadius: "5px",
        }}
      >
        <Slider {...settings}>
          <div>
            <Link to={`/ads-listing/location/${"Bengaluru"}/`}>
              <img
                alt="imag"
                src={bangalorevidhan}
                style={isMobile ? mobileStyle : desktopStyle}
                className="circleHover"
              />
              <p
                className="text-black fs-14 mt-1"
                style={{ textAlign: "center" }}
              >
                Bengaluru
              </p>
            </Link>
          </div>

          <div>
            <Link to={`/ads-listing/location/${"Mumbai"}/`}>
              <img
                alt="imag"
                src={mumbaitaj}
                style={isMobile ? mobileStyle : desktopStyle}
                className="circleHover"
              />
              <p
                className="text-black fs-14 mt-1"
                style={{ textAlign: "center" }}
              >
                Mumbai
              </p>
            </Link>
          </div>

          <div>
            <Link to={`/ads-listing/location/${"Hyderabad"}/`}>
              <img
                alt="imag"
                src={hydrabadminar}
                style={isMobile ? mobileStyle : desktopStyle}
                className="circleHover"
              />
              <p
                className="text-black fs-14 mt-1"
                style={{ textAlign: "center" }}
              >
                Hyderabad
              </p>
            </Link>
          </div>

          <div>
            <Link to={`/ads-listing/location/${"Chennai"}/`}>
              <img
                alt="imag"
                src={chennaistation}
                style={isMobile ? mobileStyle : desktopStyle}
                className="circleHover"
              />
              <p
                className="text-black fs-14 mt-1"
                style={{ textAlign: "center" }}
              >
                Chennai
              </p>
            </Link>
          </div>
          <div>
            <Link to={`/ads-listing/location/${"Pune"}/`}>
              <img
                alt="imag"
                src={puneshanivar}
                style={isMobile ? mobileStyle : desktopStyle}
                className="circleHover"
              />
              <p
                className="text-black fs-14 mt-1"
                style={{ textAlign: "center" }}
              >
                Pune
              </p>
            </Link>
          </div>
          <div>
            <Link to={`/ads-listing/location/${"Ahmedabad"}/`}>
              <img
                alt="imag"
                src={ahem}
                style={isMobile ? mobileStyle : desktopStyle}
                className="circleHover"
              />
              <p
                className="text-black fs-14 mt-1"
                style={{ textAlign: "center" }}
              >
                Ahmedabad
              </p>
            </Link>
          </div>

          <div>
            <Link to={`/ads-listing/location/${"Delhi"}/`}>
              <img
                alt="imag"
                src={delhiindia}
                style={isMobile ? mobileStyle : desktopStyle}
                className="circleHover"
              />
              <p
                className="text-black fs-14 mt-1"
                style={{ textAlign: "center" }}
              >
                Delhi
              </p>
            </Link>
          </div>

          <div>
            <Link to={`/ads-listing/location/${"Jaipur"}/`}>
              <img
                alt="imag"
                src={jaipur}
                style={isMobile ? mobileStyle : desktopStyle}
                className="circleHover"
              />
              <p
                className="text-black fs-14 mt-1"
                style={{ textAlign: "center" }}
              >
                Jaipur
              </p>
            </Link>
          </div>
          <div>
            <Link to={`/ads-listing/location/${"Indore"}/`}>
              <img
                alt="imag"
                src={indore}
                style={isMobile ? mobileStyle : desktopStyle}
                className="circleHover"
              />
              <p
                className="text-black fs-14 mt-1"
                style={{ textAlign: "center" }}
              >
                Indore
              </p>
            </Link>
          </div>
          <div>
            <Link to={`/ads-listing/location/${"Noida"}/`}>
              <img
                alt="imag"
                src={noida}
                style={isMobile ? mobileStyle : desktopStyle}
                className="circleHover"
              />
              <p
                className="text-black fs-14 mt-1"
                style={{ textAlign: "center" }}
              >
                Noida
              </p>
            </Link>
          </div>
          <div>
            <Link to={`/ads-listing/location/${"Lucknow"}/`}>
              <img
                alt="imag"
                src={lucknow}
                style={isMobile ? mobileStyle : desktopStyle}
                className="circleHover"
              />
              <p
                className="text-black fs-14 mt-1"
                style={{ textAlign: "center" }}
              >
                Lucknow
              </p>
            </Link>
          </div>
          <div>
            <Link to={`/ads-listing/location/${"Chandigarh"}/`}>
              <img
                alt="imag"
                src={chandigarh}
                style={isMobile ? mobileStyle : desktopStyle}
                className="circleHover"
              />
              <p
                className="text-black fs-14 mt-1"
                style={{ textAlign: "center" }}
              >
                Chandigarh
              </p>
            </Link>
          </div>
          <div>
            <Link to={`/ads-listing/location/${"Vadodara"}/`}>
              <img
                alt="imag"
                src={vado}
                style={isMobile ? mobileStyle : desktopStyle}
                className="circleHover"
              />
              <p
                className="text-black fs-14 mt-1"
                style={{ textAlign: "center" }}
              >
                Vadodara
              </p>
            </Link>
          </div>
          <div>
            <Link to={`/ads-listing/location/${"Kolkata"}/`}>
              <img
                alt="imag"
                src={kol}
                style={isMobile ? mobileStyle : desktopStyle}
                className="circleHover"
              />
              <p
                className="text-black fs-14 mt-1"
                style={{ textAlign: "center" }}
              >
                Kolkata
              </p>
            </Link>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default City;
