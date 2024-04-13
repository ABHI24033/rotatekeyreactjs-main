import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMapPinLine } from "react-icons/ri";
import { FaSearchLocation } from "react-icons/fa";
import { useGeolocated } from "react-geolocated";
import { location1 } from "../../env";

const CurrentLocation = () => {
  var CryptoJS = require("crypto-js");
  const LocationList = location1;
  const [location, setLocation] = useState(null);

  const coords = useGeolocated();

  const getLocationSearchMethod = () => {
    if (coords) {
      const url =
        "https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?lat=" +
        coords.coords.latitude +
        "&lng=" +
        coords.coords.longitude;

      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "7fded38e7emsh3c4fb60f3b8017cp1c084bjsn32180c499f5f",
          "X-RapidAPI-Host":
            "address-from-to-latitude-longitude.p.rapidapi.com",
        },
      };
      // setLoading(true)
      fetch(url, options)
        .then((res) => res.json())
        .then((json) => {
          localStorage.setItem("currentLocation", json.Results[0].city);
          window.location.reload();
          console.log("location fetching ", json);
        })
        .catch((err) => console.log("Failed to get location.."));
    }
  };
  return (
    <>
      <div
        className="dropdown show mt-2"
        style={{ position: "absolute", right: "60px" }}
      >
        <Link
          className=" dropdown-toggle "
          to="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{ paddingLeft: "100px" }}
        >
          &nbsp;&nbsp;{" "}
          <RiMapPinLine style={{ fontSize: "24px", marginTop: "-6px" }} />
          {localStorage.getItem("currentLocation") != null
            ? localStorage.getItem("currentLocation")
            : localStorage.getItem("currentLocation")}
        </Link>
        &nbsp;
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <FaSearchLocation
            className="mx-2"
            onClick={() => {
              getLocationSearchMethod();
            }}
          />
          <span className="fs-12"> current </span>
          <input
            className="inpstyle mt-1"
            required
            placeholder="location"
            type="text"
            list="locations"
            style={{ width: "100%", marginBottom: "-7px" }}
            onChange={(e) => {
              if (LocationList.includes(e.target.value)) {
                setLocation(e.target.value);
                localStorage.setItem("currentLocation", e.target.value);
                window.location.realod();
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
    </>
  );
};

export default CurrentLocation;
