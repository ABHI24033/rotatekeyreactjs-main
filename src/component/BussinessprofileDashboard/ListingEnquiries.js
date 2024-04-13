// export default ListingEnquiries;
import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";
import {
  BsFillTagFill,
  BsFillBookmarkFill,
  BsFillCheckSquareFill,
  BsGeoAltFill,
  BsBuilding,
  BsNewspaper,
} from "react-icons/bs";

import DynamicFont from "react-dynamic-font";
import { Tooltip } from "antd";
import { url } from "../env";
import { UserContext } from "../../App";
import { useInterval } from "react-interval-hook";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../store/wishlistSlice";
import Distance from "../distance";
import YoutubeMagic from "../ContentLoader/YoutubeMagic";
import { SliderContainer } from "../../Utils/SliderContainer";
var settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
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

const TrendingAds = (props) => {
  const adsData = useContext(UserContext);
  const [category, setCateory] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    if (props?.value) {
      setCateory(props?.value);
    }
  }, []);

  const [products, setProducts] = useState([]);
  const [lockInterval, setLockInterval] = useState(true);
  const [interval, setInterval] = useState({ start: 0, end: 10 });
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

  const getProducts = () => {
    setIsLoading(true);
    var formdata = new FormData();
    formdata.append("start", interval.start);
    formdata.append("end", interval.end);
    formdata.append("isActive", "True");

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

        if (value.length == 0) {
          setLockInterval(false);
        }
        if (products.length == 0) {
          if (localStorage.getItem("lat")) {
            const result1 = Distance(value);
            setProducts(result1);
          } else {
            setProducts(value);
          }
        } else {
          value.map((result) => {
            let newproductValuie = products;
            newproductValuie.push(result);
            if (localStorage.getItem("lat")) {
              const result1 = Distance(newproductValuie);
              setProducts(result1);
            } else {
              setProducts(newproductValuie);
            }
          });
        }
        setInterval({ start: interval.end + 1, end: interval.end + 16 });
        setIsLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  useInterval(() => {
    if (products.length > 0 && lockInterval && products.length < 40) {
      getProducts();
    }
  }, 5000);

  return (
    <>
      <div>
        {products.length ? (
          <div style={{ padding: "20px", marginBottom: "-25px" }}>
            <div className="d-flex justify-content-between">
              <h2
                className="text-decoration-underline"
                style={{ fontSize: "17px",fontWeight:"bold", marginBottom: "0px" }}
              >
                Listings Sold
              </h2>{" "}
              <Link
                to="/trending-ads/"
                className="mt-3"
                style={{ marginBottom: "-20px" }}
              >
                <b> View More </b>
              </Link>
            </div>
            {/* {products.length===0 && <YoutubeMagic1/>} */}
            <div className="row p-2 mt-2 ">
              <SliderContainer >
                <Slider {...settings} >
                  {products
                    .sort((a, b) => b.viewsproduct - a.viewsproduct)
                    .map((product, index) =>
                      product.is_active === true && product.expiry === false ? (
                        <div>
                          <NavLink to={`/ads-listing/${product?.pk}/`}>
                            <div
                              className="product-card m-2 col-lg-11"
                              style={{
                                borderRadius: "3px",
                                boxShadow: "1px 2px 6px 3px lightgray",
                                // height : "15rem"
                              }}
                            >
                              <div className="product-media " >
                                <div
                                  className="product-img"
                                  style={{ weight: "500px" }}
                                >
                                  <img
                                    src={
                                      !product?.image
                                        ? "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                        : product?.image
                                    }
                                    alt="Product Image"
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
                                    {true ? (
                                      <b>
                                        <span
                                          className="flat-badge booking"
                                          style={{ color: "#0b157e" }}
                                        >
                                          {product?.PlanCategory}
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
                                      {product?.viewsproduct}
                                    </span>
                                  </li>
                                  <li className="rating">
                                    <i
                                      className=""
                                      style={{ color: "white" }}
                                    />
                                    <span style={{ color: "white" }}>
                                      <BsNewspaper />
                                      &nbsp; {product?.subCategoryValue}
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="product-content"
                                style={{ background: "white", width: '14rem' }}
                              >
                                <div className="d-flex justify-content-between  ">
                                  {/* DESKTOP VIEW */}
                                  <p className="featureFont fs-12 fw-normal hidden-sm hidden-xs visible-md-block visible-lg-block">
                                    <Tooltip
                                      placement="topLeft"
                                      title={product?.title}
                                    >
                                      {product?.title?.length > 8 ? (
                                        <p className="featureFont">
                                          {product?.title?.slice(0, 8)}
                                          {product?.title?.length > 8
                                            ? "..."
                                            : null}
                                        </p>
                                      ) : (
                                        <div>
                                          <p className="featureFont">
                                            {" "}
                                            <DynamicFont
                                              content={product?.title}
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
                                      title={product?.title}
                                    >
                                      {product?.title?.length > 8 ? (
                                        <p className="featureFont">
                                          {product?.title?.slice(0, 8)}
                                          {product?.title?.length > 8
                                            ? "..."
                                            : null}
                                        </p>
                                      ) : (
                                        <div>
                                          <p className="featureFont">
                                            {" "}
                                            <DynamicFont
                                              content={product?.title}
                                            />
                                          </p>
                                        </div>
                                      )}
                                    </Tooltip>
                                  </p>
                                  {/* MOBILE VIEW */}
                                  {/* <p className="fs-14 fw-normal"><b>{new Date(product?.date_created).toGMTString().slice(0, 12)}</b></p> */}
                                  <p
                                    className="fs-14 fw-normal"
                                    title="Add to cart"
                                  >
                                    <BsHeartFill
                                      id="wishlistId"
                                      className={
                                        wishlistData?.data?.indexOf(
                                          product?.pk
                                        ) !== -1
                                          ? "text-danger"
                                          : "fas fa-duotone fa-heart"
                                      }
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        addingWishlist(product?.pk);
                                      }}
                                    />
                                  </p>
                                </div>
                                {/* <div
                                className="d-flex justify-content-between"
                                style={{ marginTop: "-20px" }}
                              > */}
                                {/* {product?.category == "RealEstate" ? (
                                  <p className="featureFont fs-14">
                                    <BsBuilding className="mr-2" />
                                    {product?.BuildUpArea}
                                  </p>
                                ) : null}
                                {product?.category == "RealEstate" ? (
                                  <p className="featureFont fs-14">
                                    <BsBuilding className="mr-2" />
                                    {product?.ApartMentType}
                                  </p>
                                ) : null} */}

                                {/* <p className="fs-14"><BsFillBookmarkFill/>{product?.price}</p> */}

                                {/* <div
                              className="d-flex justify-content-between "
                              style={{ marginTop: "-15px" }}
                            >
                              {product?.category == "RealEstate" ? (
                                <p className="featureFont fs-14">
                                  <BsFillBookmarkFill />
                                  {product?.FurnishedType?.slice(0, 5)}
                                </p>
                              ) : (
                                <p className="fs-14">
                                  <BsFillTagFill />
                                  <DynamicFont
                                    content={product?.tags?.slice(0, 14)}
                                  />
                                  ...
                                </p>
                              )}
                              {product?.category == "RealEstate" ? (
                                <p className="featureFont fs-14">
                                  <BsFillClockFill className="mr-2" />
                                  {product?.Availability?.slice(0, 6)}...
                                </p>
                              ) : null
                              }
                              <p className="fs-14">
                                <BsFillCheckSquareFill className="mr-1" />
                                {product?.condition}
                              </p>

                            </div> */}
                                {/* <div
                                  className="d-flex justify-content-between"
                                  style={{ marginTop: "-35px" }}
                                >
                                  {product.category == "RealEstate" ? (
                                    <p className="owlFont fs-14">
                                      <BsFillBookmarkFill />
                                      {product.FurnishedType?.slice(0, 5)}
                                    </p>
                                  ) : product.category ==
                                    "RealEstate" ? null : (
                                    <p className="owlFont fs-14">
                                      <BsFillTagFill />
                                      <DynamicFont
                                        content={
                                          product?.tags?.length > 15
                                            ? product?.tags?.slice(0, 15) +
                                              "...."
                                            : product?.tags
                                        }
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
                                        content={
                                          product?.City?.length > 10
                                            ? product?.City?.slice(0, 10) +
                                              "...."
                                            : product?.City
                                        }
                                      />
                                    </Tooltip>
                                  </p>
                                  {product.category == "Jobs" ? null : (
                                    <p className="fs-14  ">
                                      <strong> ₹{product.price}</strong>
                                    </p>
                                  )}
                                </div>

                                <div
                                  className="d-flex justify-content-between py-2"
                                  style={{ marginTop: "-15px" }}
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
            </div>
            {/* </div> */}
          </div>
        ) : null}
        {isloading ? <YoutubeMagic /> : null}
      </div>
    </>
  );
};

export default TrendingAds;

// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/navigation";

// import "./ListingEnquiries.css";

// // import required modules
// import { Navigation } from "swiper";

// const ListingEnquiries = () => {
//   return (
//     <>
//       <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
//         <SwiperSlide>
//         <div style={{display: 'flex'}}>
//           <div>
//             <img
//               src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/bike-car-wash-design-template-e16cdd2aec2c160f369ccaed75498803_screen.jpg?ts=1664207710"
//               style={{ height: "20rem", width: "15rem", marginLeft: '1rem' }}
//             ></img>
//             <button className="btn-primary">Details</button>
//           </div>
    
//           <div>
//             <img
//               src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/bike-car-wash-design-template-e16cdd2aec2c160f369ccaed75498803_screen.jpg?ts=1664207710"
//               style={{ height: "20rem", width: "15rem" }}
//             ></img>
//             <button className="btn-primary">Details</button>
//           </div>
    
//           <div>
//             <img
//               src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/bike-car-wash-design-template-e16cdd2aec2c160f369ccaed75498803_screen.jpg?ts=1664207710"
//               style={{ height: "20rem", width: "15rem" }}
//             ></img>
//             <button className="btn-primary">Details</button>
//           </div>
    
//           <div>
//             <img
//               src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/bike-car-wash-design-template-e16cdd2aec2c160f369ccaed75498803_screen.jpg?ts=1664207710"
//               style={{ height: "20rem", width: "15rem" }}
//             ></img>
//             <button className="btn-primary">Details</button>
//           </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//       </Swiper>
//     </>
//   );
// };
// export default ListingEnquiries;
