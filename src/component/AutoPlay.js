import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { NavLink, useNavigate } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";
import { decrypt } from "./Base/encryptDecrypt/encryptDecrypt";
import { Link } from "react-router-dom";
import "./AutoPlay.css";
import { url } from "./env.js";
import {
  BsReverseLayoutTextSidebarReverse,
  BsFillTagFill,
  BsFillBookmarkFill,
  BsFillClockFill,
  BsFillCheckSquareFill,
  BsGeoAltFill,
  BsBuilding,
  BsNewspaper,
} from "react-icons/bs";
import DynamicFont from "react-dynamic-font";
import { Tooltip, Spin } from "antd";

import { UserContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/wishlistSlice";
import Distance from "./distance";
import YoutubeMagic from "./ContentLoader/YoutubeMagic";
import { SliderContainer } from "../Utils/SliderContainer";
import { FormatPrice } from "../Utils/FormatPrice";
import { isMobile } from "react-device-detect";
var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  autoplay: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 5,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 4,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

export default function AutoPlay(props) {
  const automob = {

  }
  const autodesk = {
    padding:'20px'
  }
  const [isloading, setIsLoading] = useState(true);
  const [products, setProduct] = useState([]);
  const [DataisLoaded, setDataisLoaded] = useState(false);
  const ads = useContext(UserContext);
  const wishlistData = useSelector((state) => state.wishlistSlice);

  const [wishlistID] = ["wishlistId"].map(
    document.getElementById.bind(document)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addingWishlist = (value, e) => {
    if (localStorage.getItem("access_token") == null) {
      navigate("/login");
    }
    if (wishlistData?.data?.indexOf(value) !== -1) {
      dispatch(remove({ value: value }));
    } else {
      dispatch(add({ value: value }));
    }

    // wishlistID.addEventListener('click', e => e.stopPropagation());
  };

  useEffect(() => {
    setDataisLoaded(true);
    var formdata = new FormData();
    formdata.append("start", "0");
    formdata.append("end", "120");
    // formdata.append("isActive", "True");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "api/adsapi/allAdsByInerval", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        let value = result.map((result) => {
          let a = { ...result.fields };
          a["pk"] = result.pk;
          return a;
        });

        if (localStorage.getItem("lat")) {
          let s = Distance(value);
          setProduct(s);
        } else {
          setProduct(value);
        }
        // setDataisLoaded(false)
        setIsLoading(false);
      })
      .catch((error) => console.log("error", error));
    setDataisLoaded(false);
  }, []);

  return (
    <>
      {isloading ? <YoutubeMagic /> : null}

      {products.map((pro) => pro?.adsType?.includes("TopAds")).length ? (
        <div style={{ marginBottom: "-15px" }}>
          <div  style={isMobile?automob:autodesk}>
          {/* <div className="mx-4 mb-2"> */}
            <div className="d-flex justify-content-between">
              <h2
                className="text-decoration-underline"
                style={{ fontSize: "17px", fontWeight: "bold" }}
              >
                Premium Ads
              </h2>
              <Link
                to={"/premium-ads/"}
                className="mt-3"
                style={{ marginRight: "20px" }}
              >
                <b> View More</b>
              </Link>
            </div>
            {/* {products.length===0 && <YoutubeMagic1/>}  */}
            <SliderContainer>
              <Slider {...settings}>
                {products
                  .sort((a, b) => b.pk - a.pk)
                  .map((product, index) =>
                    // product.is_active === true &&
                    // product.expiry === false &&
                    // product.adsType === "TopAds" ? (
                      <>
                        <div className="" style={{ color: "#dde8eb" }}>
                          <NavLink to={`/ads-listing/${product.pk}/`}>
                            <div
                              className="product-card m-2 "
                              style={{
                                borderRadius: "3px",
                                boxShadow: "1px 2px 6px 3px lightgray",
                              }}
                            >
                              <div className="product-media">
                                <div
                                  className="product-img"
                                  style={{ weight: "500px" }}
                                >
                                  <img
                                    src={
                                      !product.image
                                        ? "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                        : product.image
                                    }
                                    alt="Product Ima"
                                    style={{ height: "165px", width: "350px" }}
                                    onError={(e) => {
                                      e.target.src =
                                        "https://images.unsplash.com/photo-1509937528035-ad76254b0356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg0fHxwcm9kdWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
                                      e.onerror = null;
                                    }}
                                  />
                                </div>
                                <div className="product-type">
                                  <span className="flat-badge booking">
                                    {product.is_featured ? (
                                      <span className="flat-badge booking">
                                        Premium
                                      </span>
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
                                      {product.viewsproduct}
                                    </span>
                                  </li>
                                  <li className="rating">
                                    <i
                                      className=""
                                      style={{ color: "white" }}
                                    />
                                    <span style={{ color: "white" }}>
                                      <BsNewspaper />
                                      &nbsp; {product.subCategoryValue}
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="product-content"
                                style={{ background: "white" }}
                              >
                                <div className="d-flex justify-content-between  ">
                                  {/* Desktop VIEW */}
                                  <p className="autoFont fs-14 fw-normal hidden-sm hidden-xs visible-md-block visible-lg-block">
                                    <Tooltip
                                      placement="topLeft"
                                      title={product.title}
                                    >
                                      {product.title.length > 20 ? (
                                        <p>
                                          {product.title.slice(0, 20)}
                                          {product.title.length > 20
                                            ? "..."
                                            : null}
                                        </p>
                                      ) : (
                                        <div>
                                          <p className="autoFont">
                                            {" "}
                                            <DynamicFont
                                              content={product.title}
                                            />
                                          </p>
                                        </div>
                                      )}
                                    </Tooltip>
                                  </p>
                                  {/* desktop VIEW */}
                                  {/* MOBILE VIEW */}
                                  <p className="autoFont fs-14 fw-normal d-lg-none hidden-md visible-xs-block visible-sm-block d-flex">
                                    <Tooltip
                                      placement="topLeft"
                                      title={product.title}
                                    >
                                      {product.title.length > 20 ? (
                                        <p>
                                          {product.title.slice(0, 27)}
                                          {product.title.length > 20
                                            ? "..."
                                            : null}
                                        </p>
                                      ) : (
                                        <div>
                                          <p className="autoFont">
                                            {" "}
                                            <DynamicFont
                                              content={product.title}
                                            />
                                          </p>
                                        </div>
                                      )}
                                    </Tooltip>
                                  </p>
                                  {/* MOBILE VIEW */}
                                  {/* <p className="fs-14 fw-normal"><b>{new Date(product.date_created).toGMTString().slice(0, 12)}</b></p> */}
                                  <p
                                    className="fs-14 fw-normal"
                                    title="Add to cart"
                                  >
                                    <BsHeartFill
                                      id="wishlistId"
                                      className={
                                        wishlistData?.data?.indexOf(
                                          product.pk
                                        ) !== -1
                                          ? "text-danger"
                                          : "fas fa-duotone fa-heart"
                                      }
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        addingWishlist(product.pk);
                                      }}
                                    />
                                  </p>
                                </div>

                                {/* <div
                                  className="d-flex justify-content-between"
                                  style={{ marginTop: "-30px" }}
                                >
                                  {product.category == "RealEstate" ? (
                                    <p className="owlFont fs-14">
                                      <BsFillBookmarkFill />
                                      {product.FurnishedType?.slice(0, 5)}
                                    </p>
                                  ) : product.category == "Jobs" ? null : (
                                    <p className="owlFont fs-14">
                                      <BsFillTagFill />
                                      <DynamicFont
                                        content={product.tags?.slice(0, 14)}
                                      />
                                      ...
                                    </p>
                                  )}
                                  {product.category == "RealEstate" ? (
                                    <p className="owlFont fs-14">
                                      <BsBuilding className="mr-2" />
                                      {product.BuildUpArea}
                                    </p>
                                  ) : (
                                    <p className="fs-14">
                                      <BsFillCheckSquareFill className="mr-1" />
                                      {product.condition?.slice(0, 9)}
                                    </p>
                                  )}
                                </div> */}
                                <div
                                  className="d-flex justify-content-between"
                                  style={{ marginTop: "-30px" }}
                                >
                                  {product.category == "RealEstate" ? (
                                    <p className="owlFont fs-14">
                                      <BsFillBookmarkFill />
                                      {product.FurnishedType?.slice(0, 5)}
                                      <BsBuilding className="mr-2" />
                                      {product.BuildUpArea}
                                    </p>
                                  ) : (
                                    <p className="fs-14">
                                      <BsFillCheckSquareFill className="mr-1" />
                                      {product.condition?.slice(0, 9)}
                                    </p>
                                  )}
                                </div>

                                <div
                                  className="d-flex justify-content-between "
                                  style={{ marginTop: "-10px" }}
                                >
                                  <p
                                    className="autoFont fs-14"
                                    style={{ textAlign: "left" }}
                                  >
                                    <BsGeoAltFill className="mr-1" />
                                    <Tooltip
                                      placement="topLeft"
                                      title={product.locality}
                                    >
                                      <DynamicFont content={product.City} />
                                    </Tooltip>
                                  </p>
                                  {product.category === "Jobs" ? null : (
                                    <p className="fs-14 ">
                                      <strong>
                                        <FormatPrice price={product.price} />
                                      </strong>
                                    </p>
                                  )}
                                </div>

                                <div
                                  className="d-flex justify-content-between py-2"
                                  style={{ marginTop: "-10px" }}
                                >
                                  <button className=" btn-sm w-100 ">
                                    Details
                                  </button>
                                </div>
                              </div>
                            </div>
                          </NavLink>
                        </div>
                      </>
                    // ) : null
                  )}
              </Slider>
            </SliderContainer>
          </div>
        </div>
      ) : null}
    </>
  );
}
