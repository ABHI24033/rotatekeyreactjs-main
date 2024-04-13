import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleAutoComplte from "../../Home/GoogleAutoComplte/GoogleAutoComplte.js";
import { Category, location1 } from "./../../env";
// import {Category} from './../../env';
import { useGeolocated } from "react-geolocated";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../../../App";
import { add } from "../../../store/Track/trackUserSlice";
import { BsArrowLeft, BsSearch } from "react-icons/bs";
import { getExtraField } from "../../../store/ProductFilterSlice";
import { Button, Modal, Space } from "antd";
import SearchWithCat from "./searchWithCat/SearchWithCat.js";

const SearchForm = () => {
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
      <p>
        <a href="#popup1" style={{ width: "100%" }}>
          <div
            className="col-sm-12"
            style={{ zIndex: "2", background: "#ffffff29", padding: "10px" }}
          >
            <p
              className="p-2"
              style={{
                border: "2px solid rgb(16 11 112 / 96%)",
                borderRadius: "5px",
              }}
            >
              <BsSearch style={{ marginTop: "-4px" }} /> Search Location And
              Categories Here
            </p>
            {/* <AntSearch/> */}
          </div>
        </a>
      </p>

      <div id="popup1" className="overlay mt-5">
        <SearchWithCat />
      </div>
    </>
  );
};

export default SearchForm;
