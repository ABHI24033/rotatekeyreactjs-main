import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./Scroll.css";
import sofa from "../../images/sofa.png";
import ghar from "../../images/ghar.png";
import Dog from "../../images/Dog.png";
import bike from "../../images/bike.png";
import car from "../../images/car.png";
import electronics from "../../images/electronics.png";
import mobiles from "../../images/mobiles.png";
import Services from "../../images/Service1.jpg";
// import jobs from "../../images/jobs.png";
import { isMobile } from "react-device-detect";
// import { Services } from "../../env";

const Scroll = () => {
  const mobileStyle = {
    backgroundSize: "cover",
    borderRadius: "35px",
    width: "70px",
    height: "70px",
    marginLeft: "10px",
  };
  const desktopStyle = {
    backgroundSize: "cover",
    borderRadius: "20px",
    width: "130px",
    height: "100px",
  };

  // const arr=[
  //     {img:realEstate,text:"Real Estate"},
  //     {img: sofa,text:"Furnitures"},
  //      {img:Dog,text:"pets"},
  //     {img:bike,text:"Bikes"},
  //     {img:car,text:"Cars"},
  //     {img:electronics,text:"Electronics"},
  //     {img:mobiles,text:"Mobiles"},
  //     {img:jobs,text:"Jobs"},

  // ];

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    // slidesToShow: 10,
    slidesToShow: 4,
    // slidesToScroll: 9,
    slidesToScroll: 1,
    initialSlide: 0,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          // slidesToShow: 8,
          slidesToShow: 4,
          // slidesToScroll: 7,
          slidesToScroll: 3,
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

  return (
    <div style={{marginBottom:"10px"}}>
      {/* <div className="p-2">
        <Slider {...settings}>
            {arr.map((images,index)=>{
                console.log("images",images)
                return(
                    <div >
                   <img
                   alt="imag" src={images.img}  style={{backgroundImage:`url(${images.img})`,backgroundSize:'cover',
                    borderRadius:'50px',width:'100px',height:'100px'}}/>
                    <p className="text-center" >{images.text}</p>
                    </div>
                )
     
            })}
         </Slider>
      </div> */}
      <div className="slider-container px-2 m-5" style={{ marginBottom: "-40px",backgroundColor: "#FFFFFF" }}>
        <h2
          className=" text-uppercase mt-4"
          style={{ textAlign: "center", fontSize: "30px" }}
        >
          Our Top Categories
        </h2>

        <Slider {...settings} className="  slider">
          <div className=" category_card">
            <Link to="/cat/RealEstate" title="Category RealEstates">
              <img
                alt="imag"
                src={ghar}
                style={isMobile ? mobileStyle : desktopStyle}
                className="circleHover"
              />
              <p className="text-center fs-5 mb-0">Real Estate</p>
            </Link>
          </div>

          <div className="category_card">
            <Link to="/cat/furniture" title="Category Furnitures">
              <img
                alt="imag"
                src={sofa}
                style={isMobile ? mobileStyle : desktopStyle}
                className="circleHover"
              />
              <p className="text-center fs-5 mb-0">Furnitures</p>
            </Link>
          </div>

          <div className="category_card">
            <Link to="/cat/Pets" title="Category Pets">
              <img
                alt="imag"
                src={Dog}
                style={isMobile ? mobileStyle : desktopStyle}
                className="circleHover"
              />
              <p className="text-center fs-5 mb-0">Pets</p>
            </Link>
          </div>

          <div className="category_card">
            <Link to="/cat/Bike" title="Category Bikes">
              <img
                alt="imag"
                src={bike}
                style={isMobile ? mobileStyle : desktopStyle}
                className="circleHover"
              />
              <p className="text-center fs-5 mb-0">Bikes</p>
            </Link>
          </div>
          <div className="category_card">
            <Link to="/cat/Cars" title="Category Cars">
              <img
                alt="imag"
                src={car}
                style={isMobile ? mobileStyle : desktopStyle}
                className="circleHover"
              />
              <p className="text-center fs-5 mb-0">Cars</p>
            </Link>
          </div>
          <div className="category_card">
            <Link to="/cat/electronics" title="Category Electronics">
              <img
                alt="imag"
                src={electronics}
                style={isMobile ? mobileStyle : desktopStyle}
                className="circleHover"
              />
              <p className="text-center fs-5 mb-0">Electronics</p>
            </Link>
          </div>

          <div className="category_card">
            <Link to="/cat/Mobiles" title="Category Mobiles">
              <img
                alt="imag"
                src={mobiles}
                style={isMobile ? mobileStyle : desktopStyle}
                className="circleHover"
              />
              <p className="text-center fs-5 mb-0">Mobiles</p>
            </Link>
          </div>

          <div className="category_card">
            <Link to="/cat/Services" title="Category Services">
              <img
                alt="imag"
                src={Services}
                style={isMobile ? mobileStyle : desktopStyle}
                className="circleHover"
              />
              <p className="text-center fs-5 mb-0">Services</p>
            </Link>
          </div>

          {/* <div>
            <Link to="/cat/jobs" title="Category Jobs">
              <img
                alt="imag"
                src={jobs}
                style={isMobile ? mobileStyle : desktopStyle}
                className="circleHover"
              />
              <p className="text-center fs-14 mb-0">Jobs</p>
            </Link>
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default Scroll;
