import React, { useEffect, useState } from "react";
import { BsFillHeartFill, BsList, BsPersonSquare } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import { IoMdLogIn } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { VscDashboard } from "react-icons/vsc";
import { VscPersonAdd } from "react-icons/vsc";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { decrypt } from "../encryptDecrypt/encryptDecrypt";
// import { useDispatch } from "react-redux";
import { getExtraField } from "../../../store/ProductFilterSlice";
import { Electronics, Furniture, Pets, Mobiles } from "../../env";

import UserProfileDetailsSlice from "../../../store/UserProfileDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import side from "../../images/side.png";

const Sidebar = () => {
  const userProfileDetails = useSelector((state) => state.userProfileData);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [toggles, setToggles] = useState(false);
  const dispatch = useDispatch();
  const handleClick = (category, subCategoryValue) => {
    let obj = { category, subCategoryValue, extrafiled: {} };
    dispatch(getExtraField(obj));
  };
  const userData = useSelector((state) => state.userIdSlice);
  // const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("access_token") != null) {
      let result = decrypt("userdata");
      setName(result.name);
      setEmail(result.email);
    }
  }, []);
  useEffect(() => {
    if (toggles) {
      setToggles(false);
    }
  }, [toggles]);

  return (
    <>
      {/* <div className="offcanvas offcanvas-start w-25" tabIndex={-1} id="offcanvas" */}
      {!toggles ? (
        <div
          className="offcanvas offcanvas-start "
          style={{ width: "280px", position: "fixed" }}
          tabIndex={-1}
          id="offcanvas"
          data-bs-keyboard="false"
          data-bs-backdrop="false"
        >
          <div
            className="offcanvas-header"
            style={{ background: "linear-gradient(60deg,#0f3854,#2b224c)" }}
          >
            <h6 className="offcanvas-title text-white" id="offcanvas">
            RotateKey
            </h6>
            {/* <h6 className="offcanvas-title d-none d-sm-block" id="offcanvas">
        Menu
      </h6> */}
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              style={{ backgroundColor: "white" }}
            />
          </div>
          <div
            className="offcanvas-body p-0"
            style={{ background: "linear-gradient(60deg,#0f3854,#2b224c)" }}
          >
            <ul
              style={{ overflowX: "hidden" }}
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start"
              id="menu"
            >
              {localStorage.getItem("access_token") == null ? (
                <li
                  className="nav-item"
                  style={{
                    background: "linear-gradient(60deg,#0f3854,#2b224c)",
                  }}
                >
                  <hr
                    style={{
                      marginTop: "0px",
                      width: "200px",
                      color: "rgb(15 56 84 / 11%)",
                    }}
                  />
                  <Link
                    to="/signup/"
                    onClick={() => setToggles(!toggles)}
                    className="nav-link text-truncate text-white"
                    style={{ marginTop: "-15px" }}
                  >
                    <VscPersonAdd style={{ fontSize: "20px" }} />
                    <span className="ms-1  d-sm-inline">
                      <b>Signup</b>
                    </span>
                  </Link>
                  <hr
                    style={{
                      marginTop: "0px",
                      width: "200px",
                      color: "rgb(15 56 84 / 11%)",
                    }}
                  />

                  <Link
                    to="/login/"
                    onClick={() => setToggles(!toggles)}
                    className="nav-link text-truncate p-2 text-white rounded"
                    style={{ marginTop: "-15px" }}
                  >
                    <IoMdLogIn style={{ fontSize: "20px" }} />
                    <span className="ms-1  d-sm-inline">
                      <b>Login</b>
                    </span>
                  </Link>

                  <hr
                    style={{
                      marginTop: "0px",
                      width: "280px",
                      color: "rgb(15 56 84 / 11%)",
                    }}
                  />
                </li>
              ) : (
                <div
                  style={{
                    display: "flex",
                    background: "linear-gradient(60deg,#0f3854,#2b224c)",
                  }}
                >
                  {userProfileDetails.status ? (
                    <div class="loader "></div>
                  ) : (
                    <img
                      className="m-1 p-0"
                      alt="profile"
                      style={{
                        width: "80px",
                        height: "80px",
                        color: "white",
                        borderRadius: "15px",
                      }}
                      src={
                        userProfileDetails?.data.length === 0 ||
                        userProfileDetails?.data[0]?.fields?.image ==
                          "undefined"
                          ? side
                          : userProfileDetails?.data[0]?.fields?.image
                      }
                    />
                  )}
                  <li
                    className="nav-item"
                    style={{
                      background: "linear-gradient(60deg,#0f3854,#2b224c)",
                      marginTop: "-7px",
                    }}
                  >
                    <Link
                      to="/dashboard/profile"
                      onClick={() => setToggles(!toggles)}
                      className="nav-link text-truncate p-2 text-white "
                    >
                      <VscAccount style={{ fontSize: "20px" }} />
                      <span className="ms-1  d-sm-inline">
                        <b>{name}</b>
                      </span>
                    </Link>
                    <Link
                      to="/dashboard/"
                      className="nav-link text-truncate p-2 text-white rounded"
                      onClick={() => setToggles(!toggles)}
                      style={{
                        marginTop: "-12px",
                        background: "linear-gradient(60deg,#0f3854,#2b224c)",
                      }}
                    >
                      <VscDashboard style={{ fontSize: "20px" }} />
                      <span className="ms-1  d-sm-inline ">
                        <b>Dashboard</b>
                      </span>
                    </Link>
                    <Link
                      to="/logout/"
                      className="nav-link text-truncate text-white p-2"
                      style={{ marginTop: "-15px" }}
                    >
                      <IoMdLogOut style={{ fontSize: "20px" }} />
                      <span className="ms-1  d-sm-inline">
                        <b>Logout</b>
                      </span>
                    </Link>
                    <hr
                      style={{
                        marginTop: "0px",
                        width: "280px",
                        color: "rgb(15 56 84 / 11%)",
                      }}
                    />

                    <hr
                      style={{
                        marginTop: "0px",
                        width: "280px",
                        color: "rgb(15 56 84 / 11%)",
                      }}
                    />
                  </li>
                </div>
              )}
              <div
                style={{
                  background:
                    "linear-gradient(60deg, rgb(15 56 84 / 89%), rgb(43 34 76 / 88%))",
                  width: "280px",
                }}
              >
                <li className="nav-item mx-2 ">
                  <span className="nav-link text-truncate">
                    <Link
                      to="/"
                      className="mycategories"
                      onClick={() => setToggles(!toggles)}
                    >
                      <b className="text-white">Home</b>{" "}
                    </Link>
                  </span>
                </li>
                <li className="nav-item mx-2 ">
                  <span className="nav-link text-truncate">
                    <Link
                      to="/aboutUs/"
                      className="mycategories"
                      onClick={() => setToggles(!toggles)}
                    >
                      <b className="text-white">About us</b>{" "}
                    </Link>
                  </span>
                </li>

                <li className="nav-item mx-2">
                  <span className="nav-link text-truncate">
                    <Link
                      to="/contact/"
                      className="mycategories"
                      onClick={() => setToggles(!toggles)}
                    >
                      <b className="text-white">Contact us</b>{" "}
                    </Link>
                  </span>
                </li>
                <li className="nav-item mx-2">
                  <span className="nav-link text-truncate">
                    <Link
                      to="/blogs-listing/"
                      className="mycategories"
                      onClick={() => setToggles(!toggles)}
                    >
                      <b className="text-white">Blogs</b>
                    </Link>
                  </span>
                </li>
                <li className="nav-item mx-2">
                  <span className="nav-link text-truncate">
                    <Link
                      to="/ads-listing/"
                      className="mycategories"
                      onClick={() => setToggles(!toggles)}
                    >
                      <b className="text-white">All Ads </b>
                    </Link>
                  </span>
                  {localStorage.getItem("access_token") !== null ? (
                    <Link
                      className="my mx-2 text-white"
                      style={{ marginTop: "-10px" }}
                      to="/add-product/"
                      onClick={() => setToggles(!toggles)}
                    >
                      Create Ads
                    </Link>
                  ) : (
                    ""
                  )}
                </li>
                <li className="nav-item mx-2">
                  <span className="nav-link text-truncate">
                    <Link
                      to="/dashboard/wishlist/"
                      className="mycategories"
                      onClick={() => setToggles(!toggles)}
                    >
                      <b className="text-white">Wishlist</b>
                    </Link>
                  </span>
                </li>

                <li className="nav-item mx-2">
                  <span className="nav-link text-truncate">
                    <Link
                      to="/cat/RealEstate"
                      className="mycategories"
                      onClick={() => setToggles(!toggles)}
                    >
                      <b className="text-white">Real Estate</b>
                    </Link>
                  </span>
                </li>
                <Link
                  to={`/ads-listing/category/${"RealEstate"}/subcategory/${"RealEstate"}`}
                  className="my"
                  onClick={() => setToggles(!toggles)}
                >
                  Rentals
                </Link>
                <Link
                  to={`/ads-listing/category/${"RealEstate"}/subcategory/${"RealEstate"}`}
                  className="my"
                  onClick={() => setToggles(!toggles)}
                >
                  Properties For Sale
                </Link>
                <Link
                  to={`/ads-listing/category/${"RealEstate"}/subcategory/${"RealEstate"}`}
                  className="my"
                  onClick={() => setToggles(!toggles)}
                >
                  PG-Hostels
                </Link>

                {/* <li className="nav-item mx-2">
                  <span className="nav-link text-truncate">
                    <Link
                      to="/cat/jobs"
                      className="mycategories"
                      onClick={() => setToggles(!toggles)}
                    >
                      <b className="text-white">Jobs</b>
                    </Link>
                  </span>
                </li>
                {Jobs.map((value, index) => (
                  <>
                    <div>
                      <Link
                        key={index}
                        onClick={() => {
                          handleClick("Jobs", value);
                          setToggles(!toggles);
                        }}
                        to={`/ads-listing/category/${"Jobs"}/subcategory/${value}`}
                      >
                        <li className="my">{value}</li>
                      </Link>
                    </div>
                  </>
                ))} */}

                <li className="nav-item mx-2">
                  <span className="nav-link text-truncate">
                    <Link
                      to="/cat/furniture"
                      className="mycategories"
                      onClick={() => setToggles(!toggles)}
                    >
                      <b className="text-white">Furnitures</b>
                    </Link>
                  </span>
                </li>
                {Furniture.slice(0, 4).map((value, index) => (
                  <>
                    <div>
                      <Link
                        key={index}
                        onClick={() => {
                          handleClick("Furniture", value);
                          setToggles(!toggles);
                        }}
                        to={`/ads-listing/category/${"Furniture"}/subcategory/${value}`}
                      >
                        <li className="my">{value}</li>
                      </Link>
                    </div>
                  </>
                ))}

                <li className="nav-item mx-2">
                  <span className="nav-link text-truncate">
                    <Link
                      to="/cat/electronics"
                      className="mycategories"
                      onClick={() => setToggles(!toggles)}
                    >
                      <b className="text-white">Electronics</b>
                    </Link>
                  </span>
                </li>
                {Electronics.slice(0, 5).map((value, index) => (
                  <>
                    <div>
                      <Link
                        key={index}
                        onClick={() => {
                          handleClick("Electronics", value);
                          setToggles(!toggles);
                        }}
                        to={`/ads-listing/category/${"Electronics"}/subcategory/${value}`}
                      >
                        <li className="my">{value}</li>
                      </Link>
                    </div>
                  </>
                ))}

                <li className="nav-item mx-2">
                  <span className="nav-link text-truncate ">
                    <Link
                      to="/cat/Mobiles"
                      className="mycategories"
                      onClick={() => setToggles(!toggles)}
                    >
                      <b className="text-white">Mobiles</b>
                    </Link>
                  </span>
                </li>
                {Mobiles.map((value, index) => (
                  <>
                    <div>
                      <Link
                        key={index}
                        onClick={() => {
                          handleClick("Mobiles", value);
                          setToggles(!toggles);
                        }}
                        to={`/ads-listing/category/${"Mobiles"}/subcategory/${value}`}
                      >
                        <li className="my">{value}</li>
                      </Link>
                    </div>
                  </>
                ))}

                {/* <li className="nav-item mx-2" style={{position:'absolute',bottom:'0'}} >
      <b style={{color:'rgb(43, 34, 76) ',fontSize:'18px'}}>Hola9</b>
      <p className="text-white">Made in India With <span><BsFillHeartFill className="text-danger"/></span></p>
    </li> */}
              </div>
            </ul>
          </div>
        </div>
      ) : null}
      {/* <div className="container-fluid"> */}

      <div style={{ position: "absolute", left: "0", marginLeft: "-10px" }}>
        {/* <div className="col min-vh-10 p-4"> */}
        {/* <div style={{ position: 'absolute', right: '0', marginRight: '5px' }}> */}

        {/* toggler */}
        {/* <button className="btn float-end" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas" role="button"> */}
        {!toggles ? (
          <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas">
            <BsList style={{ fontSize: "30px" }} />
            <i
              className="bi bi-arrow-right-square-fill fs-3"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas"
            />
          </button>
        ) : (
          <button
            data-bs-toggle="offcanvas"
            onClick={() => setToggles(!toggles)}
            data-bs-target="#offcanvas"
          >
            <BsList style={{ fontSize: "30px" }} />
            <i
              className="bi bi-arrow-right-square-fill fs-3"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas"
            />
          </button>
        )}
      </div>
    </>
  );
};

export default Sidebar;
