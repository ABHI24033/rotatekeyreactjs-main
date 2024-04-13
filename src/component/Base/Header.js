import React, { useContext, createContext, useEffect, useState } from "react";
import "./Header.css";

import { FaPlus } from "react-icons/fa";
import Hola9logo from "../images/logotext.png";
import TopHeader from "./TopHeader/topHeader";
import { Link, useNavigate } from "react-router-dom";
import { location1 } from "../env";
import Mobileheader from "./TopHeader/Mobileheader";
import { RiMapPinLine } from "react-icons/ri";
import { url } from "../env";
import { decrypt } from "./encryptDecrypt/encryptDecrypt";
import { FaSearchLocation } from "react-icons/fa";
import { useGeolocated } from "react-geolocated";
// import { ClipLoader } from "react-spinners";
import axios from "axios";
import { UserContext } from "../../App";
import wishlistSlice, {
  postWishlit,
  removeAllWishlist,
  wishlistGet,
  wishlistUserData,
} from "../../store/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { removeUserData, UserProfile } from "../../store/userIdSlice";
import { typeOf } from "react-is";
// import { wishlistUserData } from "../../services/UserServices";
import { Button, Modal, Space, Tooltip } from "antd";
import user from "../../component/images/user.png";
import { userProfileDataApi } from "../../store/UserProfileDetailsSlice";
import { BsBell } from "react-icons/bs";
import { getUserProfileData } from "../../store/UserProfileDetailsSlice";

import { ExclamationCircleFilled } from "@ant-design/icons";

const ReachableContext = createContext(null);
const UnreachableContext = createContext(null);

const config = {
  title: "Please Allow Location",
  content: (
    <>
      <ReachableContext.Consumer>
        {(name) => `Reachable: ${name}!`}
      </ReachableContext.Consumer>
      <br />
      <UnreachableContext.Consumer>
        {(name) => `Unreachable: ${name}!`}
      </UnreachableContext.Consumer>
    </>
  ),
};
const Header = (props) => {
  const userProfileDetails = useSelector((state) => state.userProfileData);

  const [modal, contextHolder] = Modal.useModal();
  const navigate = useNavigate();
  const user1 = useContext(UserContext);
  const [loginTemp, setloginTemp] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    removeAll();
    var myItem = localStorage.getItem("currentLocation");
    localStorage.clear();
    localStorage.setItem("currentLocation", myItem);
    // window.location.reload()
    updateLastLoginTime();
    navigate("/");
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  if (props == "true") {
    setloginTemp(true);
  }

  // useEffect(()=>{
  //   window.location.reload()

  // },[])
  var CryptoJS = require("crypto-js");
  const LocationList = location1;
  const [location, setLocation] = useState(null);
  const coords = useGeolocated();
  // const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  const [locationFlag, setLocationFlag] = useState(false);
  const [decryptedData, setdecryptedData] = useState(null);
  const [loaderProfile, setloaderProfile] = useState(false);
  const [locationData, setLocationData] = useState(null);
  const wishlistData = useSelector((state) => state.wishlistSlice);
  const userData = useSelector((state) => state.userIdSlice);
  const profileD = useSelector((state) => state.userProfileData);
  const dispatch = useDispatch();
  // ads was not getting visible after a day that why we i commented this api
  // useEffect(() => {
  //   var requestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //   };

  //   fetch(url + "api/adsapi/jobEveryDAYRun", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // }, []);
  useEffect(() => {
    console.log(
      localStorage.getItem("currentLocation"),
      typeOf(localStorage.getItem("currentLocation"))
    );
    if (localStorage.getItem("access_token") != null) {
      if (userData.data == null) {
        dispatch(UserProfile(localStorage.getItem("access_token")));
      } else {
        dispatch(wishlistGet(userData?.data?.id));
      }
    }
  }, [userData]);
  useEffect(() => {
    if (
      localStorage.getItem("access_token") != null &&
      wishlistData?.data.length > 0
    ) {
      if (Array.isArray(wishlistData?.data)) {
        dispatch(postWishlit(wishlistData?.data, userData?.data?.id));
      }
    }
  }, [wishlistData?.data]);
  useEffect(() => {
    if (
      localStorage.getItem("currentLocation") &&
      !localStorage.getItem("lat")
    ) {
      setLocationFlag(true);
      const options = {
        method: "GET",
        url: "https://google-maps-geocoding.p.rapidapi.com/geocode/json",
        params: {
          address: localStorage.getItem("currentLocation"),
          language: "en",
        },
        headers: {
          "X-RapidAPI-Key":
            "7fded38e7emsh3c4fb60f3b8017cp1c084bjsn32180c499f5f",
          "X-RapidAPI-Host": "google-maps-geocoding.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function(response) {
          console.log(response.data);

          console.log(
            "lat long ",
            response.data.results[0].geometry.location.lat,
            response.data.results[0].geometry.location.lng
          );
          localStorage.setItem(
            "lat",
            response.data.results[0].geometry.location.lat
          );
          localStorage.setItem(
            "long",
            response.data.results[0].geometry.location.lng
          );
        })
        .catch(function(error) {
          console.error(error);
        });
      // var bytes = CryptoJS.AES.decrypt(localStorage.getItem("currentLocation"), 'my-secret-key@123');
      // var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      setdecryptedData("bengaluru");
    }
  }, [locationData]);

  // var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(localStorage.getItem("currentLocation")), 'my-secret-key@123').toString();
  // let valueone=JSON.parse((CryptoJS.AES.decrypt(ciphertext, 'my-secret-key@123')).toString(CryptoJS.enc.Utf8))

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [idUser, setIDUser] = useState();
  // const [success, setSuccess] = useState("");
  // const [error, setError] = useState("");

  const removeAll = () => {
    dispatch(removeAllWishlist());
    dispatch(removeUserData());
    dispatch(getUserProfileData(data));
  };

  useEffect(() => {
    if (localStorage.getItem("access_token") != null) {
      setloaderProfile(true);
      // let result=decrypt("userdata")
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer " + localStorage.getItem("access_token")
      );

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(url + "api/user/profile/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result?.errors?.code) {
            alert("token expire");
            localStorage.removeItem("access_token");
          } else {
            setName(result.name);
            setEmail(result.email);
            setIDUser(result.id);
            user1.setUserID(result.id);
            dispatch(userProfileDataApi(result.id));
          }
        })
        .catch((error) => console.log("error", error));
      setloaderProfile(true);
    }
  }, [loginTemp, user1.loginRef]);

  const updateLastLoginTime = () => {
    var myHeaders = new Headers();

    var formdata = new FormData();
    formdata.append("user", idUser);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "api/user/lastLoginTime", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("result", result);
      })
      .catch((error) => console.log("error", error));
  };

  const getLocationSearchMethod = () => {
    if (coords?.coords) {
      localStorage.setItem("lat", coords.coords.latitude);
      localStorage.setItem("long", coords.coords.longitude);
      // setLat(coords.coords.latitude)
      // setLong(coords.coords.longitude)
      const url =
        "https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?lat=" +
        coords.coords.latitude +
        "&lng=" +
        coords.coords.longitude;

      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "fa6911a29amsh90c021191193a8cp14400cjsn0df4fd15aa65",
          "X-RapidAPI-Host":
            "address-from-to-latitude-longitude.p.rapidapi.com",
        },
      };
      // setLoading(true)
      fetch(url, options)
        .then((res) => res.json())
        .then((json) => {
          localStorage.setItem("currentLocation", json.Results[0].city);
          // localStorage.setItem("currentLocation",CryptoJS.AES.encrypt(JSON.stringify({'city':'bengaluru'}), 'my-secret-key@123').toString())
          window.location.reload();

          // setState(json.Results[0].region)
          // setCity(json.Results[0].city)
          // setLocality(json.Results[0].address)
          // setZipcode(json.Results[0].postalcode)
          // setLoading(false)
          // setError(null)
        })
        .catch((err) => console.log("Failed to get location.."));
      // setLoading(false)
    } else {
      modal.info(config);
    }
    // if(coords){

    // }
  };
  //Start Of Wishlist Count
  // var [wishlistmain, setWishlist] = useState([]);
  // useEffect(() => {

  //   if (localStorage.getItem("access_token") != null) {
  //     let barererToken = "Bearer " + localStorage.getItem("access_token");
  //     var myHeaders = new Headers();
  //     myHeaders.append("Authorization", barererToken);
  //     var formdata = new FormData();
  //     formdata.append("wishlist", JSON.parse(decrypt("wishlist")));

  //     var requestOptions = {
  //       method: 'POST',
  //       headers: myHeaders,
  //       body: formdata,
  //       redirect: 'follow'
  //     };

  //     fetch("  http://192.168.0.103:8000/api/user/wishlist/", requestOptions)
  //       .then(response => response.json())
  //       .then(result => {
  //         setWishlist(result)
  //       })

  //       .catch(error => console.log('error', error));
  //   }

  // }, [])
  // End of wishlist Count  Done
  // const [toggle, setToggle] = useState(false);

  // const info = () => {
  //   Modal.info({
  //     title: "Hola9 ",
  //     content: (
  //       <div>
  //                   <p>There is no new notification</p>       {" "}
  //       </div>
  //     ),
  //     onOk() {},
  //   });
  // };

  const [isModalVisible, setIsModalVisible] = useState(false);

  // const shownModal = () => {
  //   setIsModalVisible(true);
  // };

  const handleeOk = () => {
    setIsModalVisible(false);
  };

  const handleeCancel = () => {
    setIsModalVisible(false);
  };

  // logout modal
  const { confirm } = Modal;

  const showConfirm = () => {
    confirm({
      title: "Logout",
      icon: <ExclamationCircleFilled />,
      content: "Are you sure you want to Logout ?",
      okText: "Exit",
      onOk: handleOk,
      onCancel: handleCancel,
    });
  };

  const data = [];
  return (
    <>
      {/* <TopHeader /> */}
      <Mobileheader />
      {/* <div style={style}>
      <ClipLoader color={"#123abc"} loading={loaderProfile} />
    </div> */}
      <nav
        className="navbar sticky-top navbar-expand-lg navbar-light  p-4 hidden-sm hidden-xs visible-md-block visible-lg-block"
        style={{ height: "45px", marginTop: "-14px", background: "white" }}
      >
        <div className="container-fluid">
          <Link title="Logo" to="/" className="site__brand__logo">
            <img
              src={Hola9logo}
              style={{ width: "90px", height: "40px" }}
              alt="Golo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mx-auto"
              style={{ margin: "auto" }}
            >
              <li className="nav-item">
                <Link
                  className="nav-link active thisoneoneon"
                  aria-current="page"
                  to="/"
                  title="Home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutUs/" title="About Us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" title="Contact Us" to="/contact/">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" title="Blog" to="/blogs-listing/">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" title="Careers" to="/career/">
                  Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" title="All Ads" to="/ads-listing/">
                  All Ads
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link"
                  title="All Ads"
                  to="/business-profile/"
                >
                  Business Profile
                </Link>
              </li> */}
            </ul>
            <div className="dropdown show">
              <Link
                className=" dropdown-toggle"
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {userProfileDetails.status ? (
                  <div class="loader "></div>
                ) : (
                  <img
                    className="m-0 p-0"
                    alt="profile"
                    style={{
                      borderRadius: "15px",
                      height: "30px",
                      width: "30px",
                    }}
                    src={
                      userProfileDetails?.data.length === 0 ||
                      userProfileDetails?.data[0]?.fields?.image == "undefined"
                        ? user
                        : userProfileDetails?.data[0]?.fields?.image
                    }
                  />
                )}
              </Link>
              {localStorage.getItem("access_token") == null ? (
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <Link className="dropdown-item" to="/signup/">
                    Signup
                  </Link>
                  <Link className="dropdown-item" to="/login/">
                    Login
                  </Link>
                </div>
              ) : (
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  {/* <Link
                    className="dropdown-item capitalizer"
                    to="/dashboard/profile"
                  >
                    {name}
                  </Link> */}

                  <span className="dropdown-item">{name}</span>

                  <Link className="dropdown-item" to="/dashboard/">
                    Dashboard
                  </Link>
                  <button className="dropdown-item" onClick={showConfirm}>
                    Logout
                  </button>

                  {/* <Modal
                    title="confirmation"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <p>Are you sure you want to Logout?</p>
                  </Modal> */}
                </div>
              )}
            </div>
            {/* {locationFlag?
            <div className="dropdown show">
              <a  className=" dropdown-toggle " href="#" role="button"
                id="dropdownMenuLink"  data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
               &nbsp;&nbsp; <FaLocationArrow />{decryptedData.city} {location!=null?decryptedData.city:location}
               </a>&nbsp;
               <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
               <input className='inpstyle' required placeholder='location' type="text" list="locations" style={{width:'100%'}} 
                onChange={(e) =>setLocation(e.target.value)}  />
             <datalist id="locations">
            {LocationList.map(result=>{
             return <option value={result} >{result}</option>
            })
            }
            </datalist>
            </ul>
               </div>:null} */}
            <div className="dropdown show">
              <Link
                className=" dropdown-toggle "
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                &nbsp;&nbsp;{" "}
                <RiMapPinLine style={{ fontSize: "24px", marginTop: "-6px" }} />
                {localStorage.getItem("currentLocation") != undefined
                  ? localStorage.getItem("currentLocation")
                  : ""}
              </Link>
              &nbsp;
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <FaSearchLocation
                  className="mx-2"
                  onClick={() => {
                    getLocationSearchMethod();
                  }}
                />
                <span className="fs-12">current </span>
                <input
                  className="inpstyle"
                  required
                  placeholder="location"
                  type="text"
                  list="locations"
                  style={{ width: "100%" }}
                  onChange={(e) => {
                    if (LocationList.includes(e.target.value)) {
                      setLocation(e.target.value);
                      localStorage.setItem("currentLocation", e.target.value);
                      setLocationData(e.target.value);
                      window.location.reload();
                    }
                  }}
                />
                <datalist id="locations">
                  {LocationList.map((result) => {
                    return <option value={result}>{result}</option>;
                  })}
                </datalist>
              </ul>
            </div>
            &nbsp;&nbsp;
            <div className="text-dark">
              <BsBell
                style={{
                  fontSize: "23px",
                  cursor: "pointer",
                }}
                onClick={() => setIsModalVisible(!isModalVisible)}
              />
              <Modal
                style={{ borderRadius: "10px" }}
                title="Hola9"
                visible={isModalVisible}
                onOk={handleeOk}
                onCancel={handleeCancel}
              >
                <p>There is no new notification</p>
              </Modal>
            </div>
            <div
              className="product-btn text-center"
              style={{ backgroundColor: "none" }}
            >
              {localStorage.getItem("userdata") ? (
                <Link to="/dashboard/wishlist/">
                  <button
                    type="button"
                    title="Wishlist"
                    className="far fa-heart"
                    style={{
                      marginLeft: "-15px",
                      color: "red",
                      marginTop: "-20px",
                      marginRight: "-5px",
                    }}
                  />{" "}
                  &nbsp;
                  <span class="badge badge-secondary">
                    {!wishlistData?.data ? 0 : wishlistData?.data?.length}
                  </span>
                </Link>
              ) : (
                <Link to="/login">
                  <button
                    type="button"
                    title="Wishlist"
                    className="far fa-heart"
                    style={{ marginLeft: "-10px", color: "red" }}
                  />{" "}
                  &nbsp;
                  <span class="badge badge-secondary">
                    {localStorage.getItem("wishlist")
                      ? JSON.parse(decrypt("wishlist")).length
                      : 0}
                  </span>
                </Link>
              )}
            </div>
            &nbsp;
            <Link to="/allCategories/">
              <button class="btnhead text-white">Become A Member</button>
            </Link>
            &nbsp;
            <Link to="/add-product/">
              <button class="btnhead text-white">
                <FaPlus
                  className="text-white fs-12"
                  style={{ marginTop: "-2px" }}
                />
                &nbsp;Post Ads
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export const callingloginCheck = () => {
  console.log("callinglogin systeem ");
};

export default Header;
