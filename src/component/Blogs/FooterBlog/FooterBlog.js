import axios from "axios";
import React, { useEffect, useState } from "react";
import "./FooterBlog.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Margin } from "@mui/icons-material";
import { localUrl } from "../../env";
// import "./Scroll.css";
// import Hola9logo from '../images/logotext.png';

const current = new Date();
const date = `${current.getDate()}-${
  current.getMonth() + 1
}-${current.getFullYear()}`;

const FooterBlog = () => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [product, setProduct] = useState([]);
  useEffect(() => {
    const loadPost = async () => {
      const response = await axios(localUrl + "adsapi");
      setProduct(response.data);
    };
    loadPost();
  }, []);
  return (
    <>
      <div className="mx-5 mb-5">
        <h6 className="fs-18 mb-4">Latest Ads</h6>
        <hr className="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto" />
        {/* <Slider {...settings}> */}
        <div className="row">
          <Slider {...settings}>
            {product.map((prod, index) => {
              return (
                <div className="col-md-12 col-lg-4">
                  <div
                    className=" mx-3 mt-0 mb-5 mb-lg-0 border br-3 bg-white p-2 box-shadow2 "
                    style={{
                      width: "300px",
                      Margin: "10px",
                      height: "180px",
                    }}
                  >
                    <img
                      className="h-50 w-100 rounded"
                      src={prod.image}
                      alt="img"
                    />
                    <div className="media-body">
                      <h4 className="mt-0 mb-1 fs-16">
                        <a className="text-body" href="">
                          <Link to={`/ads-listing/${prod.id}/`}>
                            {prod.title}
                          </Link>
                        </a>
                      </h4>

                      <span className="fs-12 text-muted">
                        <i className="fa fa-calendar" /> {date}
                      </span>
                      <div className="h6 mb-0 mt-1 font-weight-normal">
                        <span className="font-weight-semibold">Price:</span> ${" "}
                        {prod.price}
                        <del> ${prod.price}</del>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>

          {/* <div className="col-md-12 col-lg-4">
              <div className="d-flex mt-0 mb-5 mb-lg-0 border br-3 bg-white p-4 box-shadow2">
                <img
                  className="w-8 h-8 me-4 br-3"
                  src="https://www.spruko.com/demo/autolist/Autolist/assets/images/products/4.png"
                  alt="img"
                />
                <div className="media-body">
                  <h4 className="mt-0 mb-1 fs-16">
                    <a className="text-body" href="#">
                      Best New Car
                    </a>
                  </h4>
                  <span className="fs-12 text-muted">
                    <i className="fa fa-calendar" /> 20th Jun 2019
                  </span>
                  <div className="h6 mb-0 mt-1 font-weight-normal">
                    <span className="font-weight-semibold">Price:</span> $245
                    <del>$354</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="d-flex mt-0 mb-0 border br-3 bg-white p-4 box-shadow2">
                <img
                  className="w-8 h-8 me-4 br-3"
                  src="https://www.spruko.com/demo/autolist/Autolist/assets/images/products/2.png"
                  alt="img"
                />
                <div className="media-body">
                  <h4 className="mt-0 mb-1 fs-16">
                    <a className="text-body" href="#">
                      Fuel Effeciency Car
                    </a>
                  </h4>
                  <span className="fs-12 text-muted">
                    <i className="fa fa-calendar" /> 14th Aug 2019
                  </span>
                  <div className="h6 mb-0 mt-1 font-weight-normal">
                    <span className="font-weight-semibold">Price:</span> $214
                    <del>$562</del>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
        {/* </Slider> */}
      </div>
    </>
  );
};

export default FooterBlog;
