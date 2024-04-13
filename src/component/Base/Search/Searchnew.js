import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Filter from '../../Filter/Filter';
import "./Searchnew.css";
// import { BsGeoAlt } from "react-icons/bs";
import { location1 } from "./../../env";
import { Category } from "./../../env";
// import { Button ,Spinner} from "react-bootstrap";
// import { FaSearchLocation } from 'react-icons/fa';
import { useGeolocated } from "react-geolocated";
// import PlaceAuto from './placeAuto';
import GoogleAutoComplte from "../../Home/GoogleAutoComplte/GoogleAutoComplte";
import { UserContext } from "../../../App";
// import LoadingSpinner from "./LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../../store/Track/trackUserSlice";
import SearchForm from "./SearchForm";
import { Button, Modal, Select, Space } from "antd";
import { getExtraField } from "../../../store/ProductFilterSlice";
import { AiOutlineBorder } from "react-icons/ai";
const Searchnew = () => {
  const { Option } = Select;
  const navigate = useNavigate();
  const LocationList = location1;
  var CryptoJS = require("crypto-js");
  const CategoryList = Category;
  const [locationSearch, setlocationSearch] = useState(false);
  const [category, setCategory] = useState(null);
  const [location, setLocation] = useState(null);
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
    var pathname1;
    if (flagSearh) {
      // debugger
      if (category && UserData?.searchBoxLocaity) {
        let obj = {};
        obj["locality"] = UserData?.searchBoxLocaity;
        obj["category"] = category;
        obj["extrafiled"] = {};
        disptach(getExtraField(obj));
        navigate("/ads-listing/");
      }
      setPathName(
        category && UserData?.searchBoxLocaity
          ? `/ads-listing/category/${category}/locality/${UserData?.searchBoxLocaity}`
          : `/`
      );
      pathname1 =
        category && UserData?.searchBoxLocaity
          ? `/ads-listing/category/${category}/locality/${UserData?.searchBoxLocaity}`
          : Modal.info({
              title: "Select location and Category",
              content: (
                <div>
                  <p>Please choose location and category</p>
                </div>
              ),

              onOk() {},
            });
      setFlagSearch(false);
    }
  }, [category, UserData?.searchBoxLocaity, flagSearh]);

  return (
    <>
      {/* DESKTOP RESPONSIVE SECTION */}
      <div
        className="row mb-3 hidden-sm hidden-xs visible-md-block visible-lg-block "
        style={{ padding: "10px" }}
      >
        <div className="text-center">
          <h2 style={{ zIndex: "2", fontWeight: "bold" }}>
            Anything,Anywhere &nbsp;&nbsp;{" "}
          </h2>
        </div>
        <div className=" align-items-center">
          <form className="mt-5">
            <div
              className="row d-flex justify-content-center align-items-center"
              style={{
                border: "1px solid #ffffff03",
                zIndex: "2",
                background: "#ffffff29",
                padding: "10px",
              }}
            >
              <div className="col-lg-2  col-lg-offset-4 m-0 p-0">
                <GoogleAutoComplte />
              </div>
              <div className="col-lg-3 m-0 p-0">
                {/* <div style={{ position: "relative" }}> */}
                <Select
                  required
                  className="custom-select2"
                  style={{
                    // padding: "2px",
                    // position: "relative",
                    width: "100%",
                    zIndex: "2",
                    borderRadius: "5px",
                    // border: "2px solid whiteSmoke",
                  }}
                  getPopupContainer={(triggerNode) => triggerNode.parentNode}
                  allowClear
                  onChange={(value) => setCategory(value)}
                  showSearch
                  placeholder="Select State"
                  options={CategoryList.map((value) => {
                    return { value: value, label: value };
                  })}
                  // dropdownClassName="select-dropdown"
                />
                {/* <Select
                    style={{
                      width: "100%",
                      padding: "5px",
                      borderRadius: "5px",
                      backgroundColor: "white",
                    }}
                    placeholder="Select Category"
                    onChange={(value) => setCategory(value)}
                    getPopupContainer={(triggerNode) =>
                      triggerNode.parentElement
                    }
                  >
                    {CategoryList.map((value) => (
                      <Option key={value} value={value}>
                        {value}
                      </Option>
                    ))}
                  </Select> */}
                {/* </div> */}
              </div>

              <div className="col-lg-2 col-md-3 col-sm-12 m-0 p-0">
                <button type="submit" class="custom-btnm btn-15 ">
                  <Link
                    to={pathname}
                    onClick={() => {
                      setFlagSearch(true);
                    }}
                    style={{
                      color: "white",
                      width: "100%",
                      display: "block",
                      padding: "12px 0px",
                    }}
                  >
                    Search
                  </Link>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* MOBILE RESPONSIVE SECTION */}

      <div
        className="row mb-3 d-lg-none hidden-md visible-xs-block visible-sm-block d-flex"
        style={{ marginTop: "0px", padding: "10px" }}
      ></div>
    </>
  );
};

export default Searchnew;
