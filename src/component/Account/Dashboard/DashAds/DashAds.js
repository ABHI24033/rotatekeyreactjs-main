import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { isMobile } from "react-device-detect";
import { localUrl, url } from "../../../env";
import "./DashAds.css";
import { useDispatch } from "react-redux";
import { add } from "../../../../store/Track/trackUserSlice";
import YoutubeMagic1 from "../../../ContentLoader/YoutubeMagic1";
import UserAllAds from "./UserAllAds";
import UserTopAds from "./UserTopAds";
import UserFeatureAds from "./UserFeatureAds";
import UserRegularAds from "./UserRegularAds";
import { AdsUnderProcess } from "./AdsUnderProcess";

const mob = {
  fontSize: "14px",
};
const desk = {
  width: "673px",
  boxShadow: "2px 2px 8px lightgray ",
};

const mobstyle = {};
const deskstyle = {
  margin: "15px",
  // border: "2px solid black",
  borderRadius: "5px",
  fontWeight: "bold",
  background: "white",

  padding: "5px 10px",
  width: "auto",
  // color: "black",
  // boxShadow: "1px 1px black ",
};

const DashAds = (props) => {
  //for tabs
  const [isloading, setIsLoading] = useState(true);
  let barererToken = "Bearer " + localStorage.getItem("access_token");

  const [active, setActive] = useState("UserAllAds");
  const [toggle, setToggle] = useState(false);
  const disptach = useDispatch();

  useEffect(() => {
    disptach(add({ view: ["DashAds"] }));
  }, []);

  // showing ads for category

  const [regularAds, setRegularAds] = useState([]);
  const [featuredAds, setFeaturedAds] = useState([]);
  const [topAds, setTopAds] = useState([]);
  const [allAds, setAllAds] = useState([]);

  const adsuser = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", barererToken);

    var formdata = new FormData();
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    setIsLoading(true);
    fetch(url + "api/user/adsby/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setIsLoading(false);
        setAllAds(result);

        result?.filter((val) => {
          if (val?.fields?.adsType === "Regular") {
            return setRegularAds([val]);
          } else if (val?.fields?.adsType === "Featured") {
            return setFeaturedAds([val]);
          } else if (val?.fields?.adsType === "TopAds") {
            return setTopAds([val]);
          } else {
          }
        });
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  // deleted  item
  const DeleteClick = (id) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg4ODE4NzYxLCJpYXQiOjE2NTcyODI3NjEsImp0aSI6IjA5ZDJhYmNjZGUwMzQ3NjFiNDgwYjNiY2I5NDdmZTJkIiwidXNlcl9pZCI6MTZ9.1GlJx7NpVwhQmVGamK1V5WyDlSr3e1579hrFnOsJsKw"
    );

    var formdata = new FormData();
    formdata.append("adsId", id);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    fetch(localUrl + "adsapi/DeletedAds", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    let s = allAds.filter((item) => {
      return item.pk !== id;
    });
    setAllAds(s);
  };
  useEffect(() => {
    adsuser();
  }, []);

  useEffect(() => {}, [allAds]);

  return (
    <>
      <div
        style={
          {
            // background: "#0085db",
            // marginRight: "180px",
            // height: "75px",
          }
        }
      >
        <div className="d-flex my-4 " style={isMobile ? mob : desk}>
          <button
            onClick={() => {
              if (isMobile) {
                setActive("UserAllAds");
                setToggle(!toggle);
              } else {
                setActive("UserAllAds");
              }
            }}
            className="active d-flex border-bottom"
            style={
              active === "UserAllAds"
                ? {
                    color: "black",
                    fontWeight: "bold",
                    background: "white",
                  }
                : { color: "black", background: "#0085db" }
            }
          >
            <span style={isMobile ? mobstyle : deskstyle}> All Ads</span>
          </button>

          <button
            onClick={() => {
              if (isMobile) {
                setActive("Regular");
                setToggle(!toggle);
              } else {
                setActive("Regular");
              }
            }}
            className="active  d-flex border-bottom"
            style={
              active === "Regular"
                ? { color: "black", fontWeight: "bold", background: "white" }
                : { color: "black", background: "#0085db" }
            }
          >
            <span style={isMobile ? mobstyle : deskstyle}>Regular Ads </span>
          </button>

          {/* <button
            onClick={() => {
              if (isMobile) {
                setActive("top");
                setToggle(!toggle);
              } else {
                setActive("top");
              }
            }}
            className="active  d-flex border-bottom"
            style={
              active === "top"
                ? { color: "black", fontWeight: "bold", background: "white" }
                : { color: "black", background: "#0085db" }
            }
          >
            <span style={isMobile ? mobstyle : deskstyle}>Top Ads</span>
          </button>

          <button
            onClick={() => {
              if (isMobile) {
                setActive("featured");
                setToggle(!toggle);
              } else {
                setActive("featured");
              }
            }}
            className="active  d-flex border-bottom"
            style={
              active === "featured"
                ? { color: "black", fontWeight: "bold", background: "white" }
                : { color: "black", background: "#0085db" }
            }
          >
            <span style={isMobile ? mobstyle : deskstyle}> Feature Ads</span>
          </button> */}

          <button
            onClick={() => {
              if (isMobile) {
                setActive("underProcess");
                setToggle(!toggle);
              } else {
                setActive("underProcess");
              }
            }}
            className="active d-flex border-bottom"
            style={
              active === "underProcess"
                ? {
                    color: "black",
                    fontWeight: "bold",
                    background: "white",
                  }
                : { color: "black", background: "#0085db" }
            }
          >
            <span style={isMobile ? mobstyle : deskstyle}>
              {" "}
              Under Verification
            </span>
          </button>
        </div>
      </div>
      {isloading ? (
        <YoutubeMagic1 />
      ) : active === "UserAllAds" ? (
        <UserAllAds allAds={allAds} deleteAds={DeleteClick} />
      ) : null}
      {/* // {active ==="UserAllAds" && <UserAllAds allAds={allAds} />} */}
      {/* {active === "top" && (
        <UserTopAds topAds={allAds} deleteAds={DeleteClick} />
      )}
      {active === "featured" && (
        <UserFeatureAds featuredAds={allAds} deleteAds={DeleteClick} />
      )} */}
      {active === "Regular" && (
        <UserRegularAds regularAds={allAds} deleteAds={DeleteClick} />
      )}
      {active === "underProcess" && <AdsUnderProcess underProcess={allAds} />}
    </>
  );
};

export default DashAds;