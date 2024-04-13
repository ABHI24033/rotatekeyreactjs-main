import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { localUrl } from "../../env";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

import "../../../component/Ads/FeaturedAds/Feature.css";
import { useSelector } from "react-redux/es/exports";
import { isMobile } from "react-device-detect";

import {
  BsFillTagFill,
  BsFillBookmarkFill,
  BsFillCheckSquareFill,
  BsGeoAltFill,
  BsBuilding,
  BsNewspaper,
} from "react-icons/bs";
import DynamicFont from "react-dynamic-font";

import { Tooltip, Spin } from "antd";

import YoutubeMagic1 from "../../ContentLoader/YoutubeMagic1";

import { SliderContainer } from "../../../Utils/SliderContainer";
import YoutubeMagic from "../../ContentLoader/YoutubeMagic";
import NoDataFound from "../../datanotfound/NoDataFound";
import { FormatPrice } from "../../../Utils/FormatPrice";
var settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 6,
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

const UserActiveAds = () => {
  const mobileStyle = {
    textAlign: "center",
  };
  const desktopStyle = {
    textAlign: "right",
  };

  const mobileStyle1 = {
    textAlign: "center",
  };
  const desktopStyle1 = {
    marginTop: "15px",
    borderLeft: "1px solid green",
    height: "70px",
  };

  let { id } = useParams();
  const [userData, setUserData] = useState([]);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const imageValue = useSelector((state) => state.profile);
  const [isloading, setIsLoading] = useState(true);

  const getUserData = async () => {
    setIsLoading(true);
    var formdata = new FormData();
    formdata.append("start", "0");
    formdata.append("end", "8");
    formdata.append("user", id);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    await fetch(localUrl + "/adsapi/allAdsByInerval", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUserData(result);
        console.log(result, "re");
        setIsLoading(false);
      })
      .catch((error) => setIsLoading(false));
  };
  useEffect(() => {
    getUserData();
  }, [id]);

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("user", id);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://hola9.live/api/user/userProfileDetailsApi/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setName(result[0].fields.name);
        setEmail(result[0].fields.email);
      })
      .catch((error) => console.log("error", error));
  });
  return (
    <>
      {isloading ? <YoutubeMagic /> : null}
      {userData.length ? (
        <div>
          <div
            className="col-lg-6 col-md-offset-3 mt-2"
            style={{ border: "1px solid #00000030", borderRadius: "10px" }}
          >
            <div className="row">
              <div
                className="col-lg-3 "
                style={isMobile ? mobileStyle : desktopStyle}
              >
                <a className="image-link" href="#">
                  {/* {default_image} */}
                  <img
                    style={{ height: "100px" }}
                    className=""
                    alt="error"
                    src={
                      !imageValue.length > 0
                        ? "https://static.vecteezy.com/system/resources/thumbnails/000/550/980/small/user_icon_001.jpg"
                        : imageValue[imageValue.length - 1]
                    }
                  />
                </a>
              </div>
              <div
                className="col-lg-9"
                style={isMobile ? mobileStyle1 : desktopStyle1}
              >
                <h3>{name}</h3>
                <p>{email}</p>
              </div>
            </div>
          </div>

          <h3
            className="mt-3"
            style={{ textAlign: "center", textDecoration: "underline" }}
          >
            All Ads
          </h3>

          <div className="row p-1">
            <SliderContainer>
              <Slider {...settings}>
                {userData.map((usersdata) => {
                  return (
                    <div>
                      <NavLink to={`/ads-listing/${usersdata.pk}/`}>
                        <div
                          className="product-card m-2 "
                          style={{
                            borderRadius: "3px",
                            boxShadow: "rgb(187 187 187 / 28%) 0px 0px 5px 0px",
                          }}
                        >
                          <div className="product-media">
                            <div
                              className="product-img"
                              style={{ weight: "500px" }}
                            >
                              <img
                                src={
                                  !usersdata.fields.image
                                    ? "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                    : usersdata.fields.image
                                }
                                alt="Product"
                                style={{ height: "200px", width: "350px" }}
                                onError={(e) => {
                                  e.target.src =
                                    "https://images.unsplash.com/photo-1509937528035-ad76254b0356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg0fHxwcm9kdWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
                                  e.onerror = null;
                                }}
                              />
                            </div>
                            <div className="product-type">
                              <span className="flat-badge booking">
                                {true ? (
                                  <b>
                                    <span
                                      className="flat-badge booking"
                                      style={{ color: "#0b157e" }}
                                    >
                                      {usersdata.fields.PlanCategory}
                                    </span>
                                  </b>
                                ) : null}
                              </span>
                            </div>
                            <ul className="product-action">
                              <li className="view">
                                <i
                                  className="fas fa-eye"
                                  style={{ color: "white" }}
                                />
                                <span style={{ color: "white" }}>
                                  {usersdata.fields.viewsproduct}
                                </span>
                              </li>
                              <li className="rating">
                                <i className="" style={{ color: "white" }} />
                                <span style={{ color: "white" }}>
                                  <BsNewspaper />
                                  &nbsp; {usersdata.fields.subCategoryValue}
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="product-content bg-white">
                            <div className="d-flex justify-content-between  ">
                              {/* DESKTOP VIEW */}
                              <p className="featureFont fs-14 fw-normal hidden-sm hidden-xs visible-md-block visible-lg-block">
                                <Tooltip
                                  placement="topLeft"
                                  title={usersdata.fields.title}
                                >
                                  {usersdata.fields.title.length > 20 ? (
                                    <p className="featureFont">
                                      {usersdata.fields.title.slice(0, 20)}
                                      {usersdata.fields.title.length > 20
                                        ? "..."
                                        : null}
                                    </p>
                                  ) : (
                                    <div>
                                      <p className="featureFont">
                                        {" "}
                                        <DynamicFont
                                          content={usersdata.fields.title}
                                        />
                                      </p>
                                    </div>
                                  )}
                                </Tooltip>
                              </p>
                              {/* DESKTOP VIEW */}
                              {/* MOBILE VIEW */}
                              <p className="featureFont fs-14 fw-normal d-lg-none hidden-md visible-xs-block visible-sm-block d-flex">
                                <Tooltip
                                  placement="topLeft"
                                  title={usersdata.fields.title}
                                >
                                  {usersdata.fields.title.length > 20 ? (
                                    <p className="featureFont">
                                      {usersdata.fields.title.slice(0, 30)}
                                      {usersdata.fields.title.length > 20
                                        ? "..."
                                        : null}
                                    </p>
                                  ) : (
                                    <div>
                                      <p className="featureFont">
                                        {" "}
                                        <DynamicFont
                                          content={usersdata.fields.title}
                                        />
                                      </p>
                                    </div>
                                  )}
                                </Tooltip>
                              </p>
                            </div>
                            <div
                              className="d-flex justify-content-between"
                              style={{ marginTop: "-25px" }}
                            >
                              {usersdata.fields.category == "RealEstate" ? (
                                <p className="featureFont fs-14">
                                  <BsBuilding className="mr-2" />
                                  {usersdata.fields.BuildUpArea}
                                </p>
                              ) : (
                                <p className="fs-14">
                                  <BsFillTagFill />
                                  <DynamicFont
                                    content={usersdata.fields.tags?.slice(
                                      0,
                                      15
                                    )}
                                  />
                                  ...
                                </p>
                              )}
                              {usersdata.fields.category == "RealEstate" ? (
                                <p className="featureFont fs-14">
                                  <BsFillBookmarkFill />
                                  {usersdata.fields.FurnishedType.slice(0, 5)}
                                </p>
                              ) : (
                                <p className="fs-14">
                                  <BsFillCheckSquareFill className="mr-1" />
                                  {usersdata.fields.condition}
                                </p>
                              )}

                              {/* <p className="fs-14"><BsFillBookmarkFill/>{usersdata.fields.price}</p> */}
                            </div>

                            <div className="d-flex justify-content-between ">
                              <p className="autoFont fs-14">
                                <BsGeoAltFill className="mr-1" />
                                <Tooltip
                                  placement="topLeft"
                                  title={usersdata.fields.locality}
                                >
                                  <DynamicFont
                                    content={usersdata.fields.City}
                                  />
                                </Tooltip>
                              </p>
                              <p className="fs-14">
                                {usersdata.fields.category != "Jobs" ? (
                                  <strong>
                                    {" "}
                                    <FormatPrice
                                      price={usersdata.fields.price}
                                    />
                                  </strong>
                                ) : null}
                              </p>
                            </div>

                            <div className="d-flex justify-content-between py-2">
                              <button className=" btn-sm  w-100 ">
                                Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}
              </Slider>
            </SliderContainer>
          </div>
        </div>
      ) : !isloading ? (
        <NoDataFound />
      ) : null}
    </>
  );
};
export default UserActiveAds;
