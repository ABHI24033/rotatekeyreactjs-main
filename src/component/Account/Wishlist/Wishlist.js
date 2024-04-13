// import { ContactMailOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from "react";
import Login from "../Login/Login";
import { useParams, useLocation } from "react-router";
// import { Link } from 'react-router-dom';
import { TbHeartMinus } from "react-icons/tb";
import { useNavigate } from "react-router";
import { url } from "../../env";
import { decrypt, encrypt } from "../../Base/encryptDecrypt/encryptDecrypt";
import Spiner from "../../Spiner";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../../store/Track/trackUserSlice";
import { Link, NavLink } from "react-router-dom";
import YoutubeMagic1 from "../../ContentLoader/YoutubeMagic1";
import { curentValue, remove } from "../../../store/wishlistSlice";
import { Tooltip } from "antd";
import { isMobile } from "react-device-detect";

import {
  BsBuilding,
  BsFillBookmarkFill,
  BsFillCheckSquareFill,
  BsFillTagFill,
  BsGeoAltFill,
  BsNewspaper,
} from "react-icons/bs";
import DynamicFont from "react-dynamic-font";
import NoDataFound from "../../datanotfound/NoDataFound";
import { FormatPrice } from "../../../Utils/FormatPrice";
const Wishlist = (props) => {
  const mob = {
    width: "100%",
    textAlign: "center",
  };
  const desk = {};
  // const[product,setProduct]=useState();
  var [wishlistmain, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isloading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState(true);
  const wishlistData = useSelector((state) => state.wishlistSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const idValue = useParams().id;
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("access_token") != null) {
      if (localStorage.getItem("wishlist") == null) {
        var wishlist = [];
        if (idValue != undefined) {
          wishlist.push(idValue);
        }
        encrypt({
          key: "wishlist",
          value: JSON.stringify([...new Set(wishlist)]),
        });
        //  localStorage.setItem("wishlist",JSON.stringify([...new Set(wishlist)]))
      } else {
        let newArray = [];
        var storedWishlist = JSON.parse(decrypt("wishlist"));
        storedWishlist.map((result) => {
          if (result != null) {
            newArray.push(result);
          }
        });
        if (idValue != undefined) {
          newArray.push(idValue);
        }

        // storedWishlist.push(useParams().id)
        encrypt({
          key: "wishlist",
          value: JSON.stringify([...new Set(newArray)]),
        });
        // localStorage.setItem("wishlist",JSON.stringify([...new Set(newArray)]))
      }
      if (localStorage.getItem("access_token") != null) {
        let barererToken = "Bearer " + localStorage.getItem("access_token");
        var myHeaders = new Headers();
        myHeaders.append("Authorization", barererToken);
        var formdata = new FormData();
        formdata.append("wishlist", wishlistData?.data);

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: formdata,
          redirect: "follow",
        };

        fetch(url + "api/user/wishlist/", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            setLoading(true);
            setWishlist(result);
          })

          .catch((error) => {
            setLoading(false);
          });
      }
    }
    setTemp(false);
  }, [temp, wishlistData?.data]);

  useEffect(() => {
    dispatch(add({ view: ["Wishlist"] }));
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => {
      clearTimeout(t);
    };
  }, []);
  document.title = "RotateKey - YourWishlisht";

  return (
    <>
      {isloading ? (
        <YoutubeMagic1 />
      ) : (
        <div>
          {wishlistmain?.length == 0 ? (
            <div class=" mt-1" role="alert">
              <NoDataFound />
            </div>
          ) : (
            !loading && <Spiner />
          )}
          {loading && (
            <div className="row">
              {localStorage.getItem("access_token") ? (
                <div class="row mx-1">
                  {wishlistmain
                    ?.sort((a, b) => b.pk - a.pk)
                    .map((product, index) =>
                      // products.map((product, index) => (
                      true ? (
                        <div
                          class="col-lg-3 col-sm-12"
                          style={isMobile ? mob : desk}
                        >
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
                                      !product.fields.image
                                        ? "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                        : product.fields.image
                                    }
                                    alt="Product Ima"
                                    style={{
                                      height: "165px",
                                      width: "350px",
                                    }}
                                  />
                                </div>

                                <div className="product-type">
                                  <span className="flat-badge booking">
                                    {product.fields.is_featured ? (
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
                                      {product.fields.viewsproduct}
                                    </span>
                                  </li>
                                  <li className="rating">
                                    <i
                                      className=""
                                      style={{ color: "white" }}
                                    />
                                    <span style={{ color: "white" }}>
                                      <BsNewspaper />
                                      &nbsp; {product.fields.subCategoryValue}
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
                                  <p className="owlFont fs-14 fw-normal">
                                    <Tooltip
                                      placement="topLeft"
                                      title={product.fields.title}
                                    >
                                      {product.fields.title.length > 31 ? (
                                        <p className="owlFont">
                                          {product.fields?.title?.slice(0, 30)}
                                          {product.fields.title.length > 20
                                            ? "..."
                                            : null}
                                        </p>
                                      ) : (
                                        <div>
                                          <p className="owlFont">
                                            {" "}
                                            <DynamicFont
                                              content={product.fields.title}
                                            />
                                          </p>
                                        </div>
                                      )}
                                    </Tooltip>
                                  </p>
                                  {/* DESKTOP VIEW */}

                                  {/* <p className="fs-14 fw-normal"><b>{new Date(product.fields.date_created).toGMTString()?.slice(0, 12)}</b></p> */}
                                  <p
                                    className="owlFont fs-14 fw-normal"
                                    title="Add to cart"
                                  ></p>
                                </div>

                                <div
                                  className="d-flex justify-content-between"
                                  style={{ marginTop: "-35px" }}
                                >
                                  {product.fields.category == "RealEstate" ? (
                                    <p className="owlFont fs-14">
                                      <BsFillBookmarkFill />
                                      {product.fields.FurnishedType?.slice(
                                        0,
                                        5
                                      )}
                                    </p>
                                  ) : product.fields.category ==
                                    "Jobs" ? null : (
                                    <p className="owlFont fs-14">
                                      <BsFillTagFill />
                                      <DynamicFont
                                        content={product.fields.tags?.slice(
                                          0,
                                          20
                                        )}
                                      />
                                      ...
                                    </p>
                                  )}
                                  {product.fields.category == "RealEstate" ? (
                                    <p className="owlFont fs-14">
                                      <BsBuilding className="mr-2" />
                                      {product.fields.BuildUpArea}
                                    </p>
                                  ) : (
                                    <p className="fs-14">
                                      <BsFillCheckSquareFill className="mr-1" />
                                      {product.fields.condition?.slice(0, 9)}
                                    </p>
                                  )}
                                </div>

                                <div
                                  className="d-flex justify-content-between "
                                  style={{ marginTop: "-10px" }}
                                >
                                  <p className="autoFont fs-14">
                                    <BsGeoAltFill className="mr-1" />
                                    <Tooltip
                                      placement="topLeft"
                                      title={product.locality}
                                    >
                                      <DynamicFont
                                        content={product.fields.City}
                                      />
                                    </Tooltip>
                                  </p>
                                  {product.fields.category == "Jobs" ? null : (
                                    <p className="fs-14 ">
                                      <strong>
                                        <FormatPrice
                                          price={product.fields.price}
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

                                <div
                                  className="product-btn mb-1"
                                  style={{ marginRight: "15px" }}
                                >
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      e.preventDefault();
                                      dispatch(
                                        remove({
                                          value: Number(e.target.value),
                                        })
                                      );
                                    }}
                                    value={product.pk}
                                    className="btn-sm w-100 text-white  fs-10"
                                    style={{
                                      background:
                                        "linear-gradient(60deg,#0f3854,#2b224c)",
                                    }}
                                  >
                                    Remove{" "}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </NavLink>
                        </div>
                      ) : null
                    )}
                </div>
              ) : (
                <div>
                  <Login />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Wishlist;
