import "./searchWithCat.css";
import { AutoComplete } from "antd";
import styled from "styled-components";
import "../../../../component/StyledComponent/StyledComponents.jsx";
// import { Auto } from "../../../../component/StyledComponent/StyledComponents.jsx";
import { Auto1 } from "../../../../component/StyledComponent/StyledComponents.jsx";
// import { Auto } from "../../../Ads/components/HolaAutoComplete";
import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleAutoComplte from "../../../Home/GoogleAutoComplte/GoogleAutoComplte.js";
// import {Category, location1} from "./../../env";
// import {Category} from './../../env';
import { useGeolocated } from "react-geolocated";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../../../../App";
import { add } from "../../../../store/Track/trackUserSlice";
import { BsArrowLeft, BsSearch } from "react-icons/bs";
import { getExtraField } from "../../../../store/ProductFilterSlice";
import { Button, Modal, Space } from "antd";
import { Category, location1, url } from "../../../env";
import categoryConsSlice, {
  categoryCons,
} from "../../../../store/categoryConsSlice";
import house from "../../../images/house.png";
import armchair from "../../../images/armchair.png";
import dogicon from "../../../images/dogicon.png";
import motorcycle from "../../../images/motorcycle.png";
import car1icon from "../../../images/car1icon.png";
import plug from "../../../images/plug.png";
import appstore from "../../../images/appstore.png";
import appli from "../../../images/Service2.jpg";
// import jobseek from "../../../images/jobseek.png";

const SearchWithCat = () => {
  // const TomatoButton = styled(Button)`
  //   color: tomato;
  //   border-color: tomato;
  // `;
  const [titalData, setTitalData] = useState([]);
  // const categoryConst = useSelector((state) => state.categoryConsSlice);
  const options = [];
  useEffect(() => {
    var formdata = new FormData();
    formdata.append("wishlist", "");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "api/adsapi/searchData", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setTitalData(result);
      })
      .catch((error) => console.log("error", error));
  }, []);
  const navigate = useNavigate();
  const LocationList = location1;
  var CryptoJS = require("crypto-js");
  const CategoryList = Category;
  const [locationSearch, setlocationSearch] = useState(false);
  const [category, setCategory] = useState(null);
  const [location, setLocation] = useState(null);
  const [title, setTitle] = useState(null);
  const coords = useGeolocated();
  const UserData = useContext(UserContext);
  const disptach = useDispatch();
  useEffect(() => {
    if (category && UserData.searchBoxLocaity) {
      disptach(
        add({ form: ["home", "search", [category, UserData.searchBoxLocaity]] })
      );
    }
  }, [category, UserData.searchBoxLocaity]);
  const getLocationSearchMethod = () => {
    if (coords) {
      console.log("lcoation detecting");
      localStorage.setItem(
        "currentLocation",
        CryptoJS.AES.encrypt(
          JSON.stringify({ city: "bengaluru" }),
          "my-secret-key@123"
        ).toString()
      );
      window.location.reload();
      // const url = 'https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?lat='+coords.coords.latitude+'&lng='+coords.coords.longitude;

      // const options = {
      //   method: 'GET',
      //   headers: {
      //     'X-RapidAPI-Key': '331734c762msh87686d3f66d810fp1c85ebjsn31d2ac2b6d68',
      //     'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'
      //   }
      // };

      // fetch(url, options)
      //     .then(res => res.json())
      //     .then(json =>{
      //         localStorage.setItem("currentLocation",CryptoJS.AES.encrypt(JSON.stringify(json.Results[0]), 'my-secret-key@123').toString())
      //         window.location.reload();
      //     })
      //     .catch(err => console.error('error:' + err));
      //     navigate("/")
    }
  };

  // useEffect(()=>{
  //   if(localStorage.getItem("currentLocation")!=null){
  //     window.location.reload();
  //   }
  // },[setlocationSearch])

  const [flagSearh, setFlagSearch] = useState(false);
  const [pathname, setPathName] = useState("/");

  useEffect(() => {
    console.log();
    var pathname1;
    if (flagSearh) {
      // debugger
      if (title && UserData?.searchBoxLocaity) {
        let obj = {};
        obj["locality"] = UserData?.searchBoxLocaity;
        // obj["category"] = categoryConst.value;
        obj["title"] = title;
        obj["extrafiled"] = {};
        disptach(getExtraField(obj));
        navigate("/ads-listing/");
      }
      setPathName(
        title && UserData?.searchBoxLocaity
          ? `/ads-listing/category/${category}/locality/${UserData?.searchBoxLocaity}`
          : `/`
      );
      pathname1 =
        title && UserData?.searchBoxLocaity
          ? `/ads-listing/category/${category}/locality/${UserData?.searchBoxLocaity}`
          : Modal.info({
              title: "Select location and Category",
              content: (
                <div>
                  <p>choose Location ,category and title </p>
                </div>
              ),

              onOk() {},
            });
      setFlagSearch(false);
    }
  }, [category, UserData?.searchBoxLocaity, flagSearh]);

  const doThis = (e) => {
    console.log("deubbger", e.target.value);
  };
  return (
    <div>
      <div className="rui-3edbr">
        <div className="">
          <div className="_2FSAi">
            <header className="_2qkRs" data-aut-id="navigationHeader">
              <div className="_1oKlx">
                <span className="_1gRon">
                  <a href="#">
                    <button
                      type="button"
                      className="rui-1rYgw rui-82PI3"
                      role="button"
                      tabIndex={0}
                      data-aut-id="overlayHeaderIcon"
                      title=""
                    >
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 1024 1024"
                        data-aut-id="icon"
                        className=""
                        fillRule="evenodd"
                      >
                        <path
                          className="rui-4K4Y7"
                          d="M512 124.16v54.827l-302.293 294.187 676.949 0.043 38.827 38.784-38.827 38.784h-676.907l302.251 294.229v54.869h-56.32l-370.347-360.448v-54.869l370.347-360.405h56.32z"
                        />
                      </svg>
                    </button>
                  </a>
                </span>
                <button
                  type="button"
                  data-aut-id="rightSideText"
                  className="rui-39-wj rui-3-PNI rui-1JPTg _2yRzF"
                >
                  <span>
                    <span>
                      {" "}
                      <Link
                        to={pathname}
                        onClick={() => {
                          setFlagSearch(true);
                        }}
                      >
                        Search
                      </Link>
                    </span>
                  </span>
                </button>
              </div>
            </header>

            <div className="_2MfV_" style={{ marginTop: "110px" }}>
              <div className="_3_ZNh">
                <div data-aut-id="locationBox" className="_16-NA">
                  <span className="l6yok">
                    <svg
                      width="25px"
                      height="25px"
                      viewBox="0 0 1024 1024"
                      data-aut-id="icon"
                      className=""
                      fillRule="evenodd"
                    >
                      <path
                        className="rui-4K4Y7"
                        d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"
                      />
                    </svg>
                  </span>
                  {/* <input
              className="_3taHC"
              placeholder="Find Cars, Mobile Phones and more..."
              defaultValue=""
            /> */}

                  <Auto1
                    style={{
                      width: "100%",
                    }}
                    options={titalData}
                    onChange={(value) => setTitle(value)}
                    placeholder="Find Your Categories Here ..."
                    filterOption={(inputValue, option) =>
                      option.value
                        .toUpperCase()
                        .indexOf(inputValue.toUpperCase()) !== -1
                    }
                  />
                </div>

                <div className="_2c3V9 _339_O">
                  <div className="_3Oa0E">
                    <h6 className="mt-3">Most Popular Categories</h6>
                    <div>
                      <Link to="/cat/RealEstate" title="Category RealEstates">
                        <p>
                          <img
                            alt="imag"
                            src={house}
                            style={{
                              width: "30px",
                              height: "30px",
                            }}
                          />{" "}
                          <span className="text-center fs-14">Real Estate</span>
                        </p>
                      </Link>
                    </div>
                    <div>
                      <Link to="/cat/furniture" title="Category Furnitures">
                        <p>
                          <img
                            alt="imag"
                            src={armchair}
                            style={{ width: "30px", height: "30px" }}
                          />{" "}
                          <span className="text-center fs-14">Furnitures</span>
                        </p>
                      </Link>
                    </div>
                    <div>
                      <Link to="/cat/Pets" title="Category Pets">
                        <p>
                          <img
                            alt="imag"
                            src={dogicon}
                            style={{ width: "30px", height: "30px" }}
                          />{" "}
                          <span className="text-center fs-14">Pets</span>
                        </p>
                      </Link>
                    </div>
                    <div>
                      <Link to="/cat/Bike" title="Category Bikes">
                        <p>
                          <img
                            alt="imag"
                            src={motorcycle}
                            style={{ width: "30px", height: "30px" }}
                          />{" "}
                          <span className="text-center fs-14">Bikes</span>
                        </p>
                      </Link>
                    </div>
                    <div>
                      <Link to="/cat/Cars" title="Category Cars">
                        <p>
                          <img
                            alt="imag"
                            src={car1icon}
                            style={{ width: "30px", height: "30px" }}
                          />{" "}
                          <span className="text-center fs-14">Cars</span>
                        </p>
                      </Link>
                    </div>
                    <div>
                      <Link to="/cat/electronics" title="Category Electronics">
                        <p>
                          <img
                            alt="imag"
                            src={plug}
                            style={{ width: "30px", height: "30px" }}
                          />{" "}
                          <span className="text-center fs-14">Electronics</span>
                        </p>
                      </Link>
                    </div>
                    <div>
                      <Link to="/cat/Mobiles" title="Category Mobiles">
                        <p>
                          <img
                            alt="imag"
                            src={appstore}
                            style={{ width: "30px", height: "30px" }}
                          />{" "}
                          <span className="text-center fs-14">Mobiles</span>
                        </p>
                      </Link>
                    </div>

                    <div>
                      <Link to="/cat/services" title="Category Services">
                        <p>
                          <img
                            alt="imag"
                            src={appli}
                            style={{ width: "30px", height: "30px" }}
                          />{" "}
                          <span className="text-center fs-14">Services</span>
                        </p>
                      </Link>
                    </div>
                    {/* <div>
                      <Link to="/cat/jobs" title="Category Jobs">
                        <p>
                          <img
                            alt="imag"
                            src={jobseek}
                            style={{ width: "30px", height: "30px" }}
                          />{" "}
                          <span className="text-center fs-14">Jobs</span>
                        </p>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="p1IZ5">
                <div data-aut-id="locationBox" className="">
                  <GoogleAutoComplte />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWithCat;
