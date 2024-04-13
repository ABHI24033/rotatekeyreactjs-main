import React, { useContext, useEffect, useState } from "react";
// import React, {Component, useContext, useEffect, useState } from "react"; unused component
import Slider from "react-slick";
import "./Owl.css";
import { NavLink, useNavigate } from "react-router-dom";
import { url } from "./env";
import { Link } from "react-router-dom";
import { decrypt } from "./Base/encryptDecrypt/encryptDecrypt";
// import Trending from "./adsReSorting/trending";
import {
  BsReverseLayoutTextSidebarReverse,
  BsHeartFill,
  BsFillTagFill,
  BsFillBookmarkFill,
  BsFillClockFill,
  BsFillCheckSquareFill,
  BsGeoAltFill,
  BsBuilding,
  BsNewspaper,
} from "react-icons/bs";
import DynamicFont from "react-dynamic-font";
// import { Button, Tooltip, Popover } from 'antd'; unused {Button, Popover}
import { Tooltip } from "antd";
import { UserContext } from "../App";
import { useInterval } from "react-interval-hook";
import YoutubeMagic from "./ContentLoader/YoutubeMagic";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/wishlistSlice";
import Distance from "./distance";
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
  autoplay: false,

  //   speed: 5000,
  //   autoplaySpeed: 1000,
  // cssEase: "linear",

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
        initialSlide: 1,
        infinite: true,
      },
    },
  ],
};


function Responsive(props) {
  const owlmob = {

  }
  const owldesk = {
    padding: "20px", marginBottom: "-40px"
  }
  const [products, setProduct] = useState([]);
  const [loader, setLoader] = useState(true);
  // const [details,setdetails]=useState([])  not using in the component
  // const [DataisLoaded,setDataisLoaded]=useState(false)  not using in the component
  const hola9 = useContext(UserContext);
  const wishlistData = useSelector((state) => state.wishlistSlice);
  const [lockInterval, setLockInterval] = useState(true);
  const [interval, setInterval] = useState({ start: 0, end: 8 });
  const [wishlistID] = ["wishlistId"].map(
    document.getElementById.bind(document)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getProducts = () => {
    var formdata = new FormData();
    formdata.append("start", interval.start);
    formdata.append("end", interval.end);
    formdata.append("category", props.greeting);
    if (props?.subcategory) {
      formdata.append("subCategory", props.subcategory);
    }
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    fetch(url + "api/adsapi/categoryAdsByInterval", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        let value = result.map((result) => {
          let a = { ...result.fields };
          a["pk"] = result.pk;
          return a;
        });
        if (value.length === 0) {
          setLockInterval(false);
        } else {
          if (products.length === 0) {
            if (localStorage.getItem("lat")) {
              let s = Distance(value);
              setProduct(s);
            } else {
              setProduct(value);
            }
          } else {
            var tempProduct = [
              ...products,
              value.map((result) => products.push(result)),
            ];
            if (localStorage.getItem("lat")) {
              tempProduct = Distance(tempProduct);
            }
            setProduct(tempProduct);
          }
        }

        setInterval({ start: interval.end + 1, end: interval.end + 16 });
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
      });
  };

  useEffect(() => {
    getProducts()
  }, [])
  var value = true;
  const [loaderTrigger, setLoaderTrigger] = useState(true);

  useEffect(() => {
    if (loaderTrigger) {
      setLoader(true);
      setLoaderTrigger(false);
    }

    //getProducts();
    // setProduct(hola9.hola9DataApp)
    // setDataisLoaded(true)

    //   if(props?.trending && hola9.hola9DataApp.length>0){

    //     let ads=Trending(hola9.hola9DataApp)
    //     setProduct(ads)
    //   }
  }, [products]);
  // },[])  before it was empty array
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

  useInterval(() => {
    if (products.length > 0 && lockInterval && products.length < 40) {
      getProducts();
    }
  }, 5000);
  useEffect(() => { }, [interval]);

  // const { DataisLoaded, products } = state;
  //     if (!DataisLoaded) return <div>
  //         <h6 className="fs-10 text-white">  Pleses wait some time.... </h6> </div> ;

  return (
    <>
      <div>
        {products.length ? (
          // <div style={{ padding: "20px", marginBottom: "-40px" }}>
          <div style={isMobile ? owlmob : owldesk}>

            <div className="d-flex justify-content-between">
              <h2
                className="text-decoration-underline"
                style={{ fontSize: "17px", fontWeight: "bold" }}
              >
                {" "}
                {props?.subcategory ? (
                  <span>{props.subcategory}</span>
                ) : !props.trending ? (
                  <span>{props.greeting}</span>
                ) : (
                  <span>Trending Ads</span>
                )}
              </h2>

              <Link
                to={`/cat/${props.greeting}`}
                className="mt-3"
                style={{ marginRight: "20px" }}
              >
                <b> View More</b>
              </Link>
            </div>
            {loader ? (
              <YoutubeMagic />
            ) : (
              <SliderContainer>
                <Slider {...settings}>
                  {products
                    .sort((a, b) => b.pk - a.pk)
                    .map((product, index) =>
                      // products.map((product, index) => (
                      product.category === props.greeting &&
                        (props?.subcategory
                          ? product.subCategoryValue === props.subcategory
                          : true) ? (
                        <div>
                          {/* <div className='col-sm-12 col-xs-12'> */}
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
                                  />
                                </div>
                                <div className="product-type">
                                  <span className="flat-badge booking" style={{ border: '1px solid #0b157e', backgroundColor: "#0b157e" }}>
                                    {product?.plan != "Free" ? (
                                      <span className="flat-badge booking">
                                        {product?.plan}
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
                                  {/* DESKTOP VIEW */}
                                  <p className="owlFont fs-14 fw-normal hidden-sm hidden-xs visible-md-block visible-lg-block">
                                    <Tooltip
                                      placement="topLeft"
                                      title={product.title}
                                    >
                                      {product.title.length > 20 ? (
                                        <p className="owlFont">
                                          {product?.title?.slice(0, 10)}
                                          {product.title.length > 10
                                            ? "..."
                                            : null}
                                        </p>
                                      ) : (
                                        <div>
                                          <p className="owlFont">
                                            {" "}
                                            <DynamicFont
                                              content={product.title}
                                            />
                                          </p>
                                        </div>
                                      )}
                                    </Tooltip>
                                  </p>
                                  {/* DESKTOP VIEW */}

                                  {/* MOBILE VIEW */}

                                  <p className="owlFont fs-14 fw-normal d-lg-none hidden-md visible-xs-block visible-sm-block d-flex">
                                    <Tooltip
                                      placement="topLeft"
                                      title={product.title}
                                    >
                                      {product.title.length > 20 ? (
                                        <p className="owlFont">
                                          {product.title?.slice(0, 15)}
                                          {product.title.length > 20
                                            ? "..."
                                            : null}
                                        </p>
                                      ) : (
                                        <div>
                                          <p className="owlFont">
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
                                  {/* <p className="fs-14 fw-normal"><b>{new Date(product.date_created).toGMTString()?.slice(0, 12)}</b></p> */}
                                  <p
                                    className="owlFont fs-14 fw-normal"
                                    title="Add to cart"
                                  >
                                    {/* {localStorage.getItem("access_token")==null?<NavLink to={`/login`} ><BsHeartFill className={`${JSON.parse(decrypt('wishlist')).indexOf(product.pk?.toString()) !== -1 ? "text-danger" : "fas fa-duotone fa-heart"}`} /></NavLink>:<NavLink to={`/dashboard/wishlist/${product.pk}`} >
                                    <BsHeartFill className={`${JSON.parse(decrypt('wishlist')).indexOf(product.pk?.toString()) !== -1 ? "text-danger" : "fas fa-duotone fa-heart"}`} />
                                    </NavLink>} */}

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

                                <div
                                  className="d-flex justify-content-between"
                                  style={{ marginTop: "-35px" }}
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
                                      <DynamicFont
                                        content={product.City?.slice(0, 10)}
                                      />
                                    </Tooltip>
                                  </p>
                                  {product.category == "Jobs" ? null : (
                                    <p className="fs-14 ">
                                      <strong>
                                        {" "}
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
                      ) : null
                    )}
                </Slider>
              </SliderContainer>
            )}
          </div>
        ) : null}
        {loader ? <YoutubeMagic /> : null}
      </div>
    </>
  );
}

export default Responsive;
