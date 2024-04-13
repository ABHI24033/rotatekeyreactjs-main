import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Distance from "../distance";
import { url } from "./../env";
import DynamicFont from "react-dynamic-font";
import { NavLink, useNavigate } from "react-router-dom";
import {
  BsBuilding,
  BsFillBookmarkFill,
  BsFillCheckSquareFill,
  BsFillTagFill,
  BsGeoAltFill,
  BsHeartFill,
  BsNewspaper,
} from "react-icons/bs";
import { Tooltip } from "antd";
import { add, remove } from "../../store/wishlistSlice";
import YoutubeMagic from "./../ContentLoader/YoutubeMagic";
import { SliderContainer } from "./../../Utils/SliderContainer";
import { height } from "@mui/system";
import { FormatPrice } from "../../Utils/FormatPrice";

export const PremiumAds = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [products, setProduct] = useState([]);
  const [loader, setLoader] = useState(true);
  const wishlistData = useSelector((state) => state.wishlistSlice);
  const [lockInterval, setLockInterval] = useState(true);
  const [interval, setInterval] = useState({ start: 0, end: 8 });
  const [newData, setNewData] = useState([]);
  const getProducts = () => {
    setLoader(true);
    var formdata = new FormData();
    formdata.append("start", interval.start);
    formdata.append("end", interval.end);
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "api/adsapi/allAdsByInerval", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        newData.push(...result);

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
    getProducts();
    // setProduct(hola9.hola9DataApp)
    // setDataisLoaded(true)

    //   if(props?.trending && hola9.hola9DataApp.length>0){

    //     let ads=Trending(hola9.hola9DataApp)
    //     setProduct(ads)
    //   }
  }, [products]);

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
  console.log("check", newData);
  document.title = "RotateKey-Premium-Ads";
  return (
    <div className="" style={{ width: "100%", textAlign: "center" }}>
      <h2 className="text-decoration-underline" style={{ fontSize: "19px" }}>
        Premium Ads
      </h2>
      {newData.map((pro) => pro.fields?.adsType?.includes("TopAds")).length ? (
        <div style={{ marginBottom: "-10px" }}>
          <div className="d-flex justify-content-center bg-white">
            {/* <h2
              className="text-decoration-underline"
              style={{ fontSize: "19px" }}
            >
              Premium Ads
            </h2> */}

            <SliderContainer>
              {newData
                ?.sort((a, b) => b.pk - a.pk)
                ?.map((product, index) =>
                  // product?.fields.adsType === "TopAds" ? (
                    <div className="col-sm-3 col-xs-3 d-flex mt-3">
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
                                  !product.fields?.image
                                    ? "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                    : product.fields.image
                                }
                                alt="Product Ima"
                                style={{ height: "165px", width: "350px" }}
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
                                  {product?.fields?.viewsproduct}
                                </span>
                              </li>
                              <li className="rating">
                                <i className="" style={{ color: "white" }} />
                                <span style={{ color: "white" }}>
                                  <BsNewspaper />
                                  &nbsp; {product?.fields?.subCategoryValue}
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
                                  title={product?.fields?.title}
                                >
                                  {product?.fields?.title?.length > 20 ? (
                                    <p className="owlFont">
                                      {product?.fields?.title?.slice(0, 20)}
                                      {product?.fields?.title?.length > 20
                                        ? "..."
                                        : null}
                                    </p>
                                  ) : (
                                    <div>
                                      <p className="owlFont">
                                        {" "}
                                        <DynamicFont
                                          content={product?.fields?.title}
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
                                  title={product?.fields?.title}
                                >
                                  {product?.fields?.title?.length > 20 ? (
                                    <p className="owlFont">
                                      {product?.fields?.title?.slice(0, 30)}
                                      {product?.fields?.title?.length > 20
                                        ? "..."
                                        : null}
                                    </p>
                                  ) : (
                                    <div>
                                      <p className="owlFont">
                                        {" "}
                                        <DynamicFont
                                          content={product?.fields?.title}
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
                                      product?.fields?.pk
                                    ) !== -1
                                      ? "text-danger"
                                      : "fas fa-duotone fa-heart"
                                  }
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    addingWishlist(product?.fields?.pk);
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
                                    content={product?.fields?.tags?.slice(
                                      0,
                                      14
                                    )}
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
                                  title={product?.fields?.locality}
                                >
                                  <DynamicFont
                                    content={product?.fields?.City}
                                  />
                                </Tooltip>
                              </p>
                              {product.category == "Jobs" ? null : (
                                <p className="fs-14 ">
                                  <strong>
                                    {" "}
                                    <FormatPrice
                                      price={product?.fields?.price}
                                    />
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
                  // ) : null
                )}
            </SliderContainer>
          </div>
        </div>
      ) : null}
      {loader ? <YoutubeMagic /> : null}
    </div>
  );
};
