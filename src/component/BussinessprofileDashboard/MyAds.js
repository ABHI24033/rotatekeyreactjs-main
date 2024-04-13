
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { isMobile } from "react-device-detect";
import { localUrl, url } from "../../../src/component/env";
import "../../../src/component/Account/Dashboard/DashAds/DashAds.css";
import { useDispatch } from "react-redux";
import { add } from "../../../src/store/Track/trackUserSlice";
import YoutubeMagic1 from "../../../src/component/ContentLoader/YoutubeMagic1";
import UserAllAds from "../../../src/component/Account/Dashboard/DashAds/UserAllAds";
import UserTopAds from "../../../src/component/Account/Dashboard/DashAds/UserTopAds";
import UserFeatureAds from "../../../src/component/Account/Dashboard/DashAds/UserFeatureAds";
import UserRegularAds from "../../../src/component/Account/Dashboard/DashAds/UserRegularAds";
import { AdsUnderProcess } from "../../../src/component/Account/Dashboard/DashAds/AdsUnderProcess";
import InActivePre from "./InActivePre";
import InActiveFea from "./InActiveFea";

const mob = {
  fontSize: "14px",
};
const desk = {
  width: "722px",
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

  const [active, setActive] = useState("top");
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
          if (val?.fields?.adsType === "TopAds"  ){
            return setTopAds([val]);
          } else if (val?.fields?.adsType === "Featured") {
            return setFeaturedAds([val]);
          }
          else {
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
            <span style={isMobile ? mobstyle : deskstyle}>Premium Ads </span>
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
            <span style={isMobile ? mobstyle : deskstyle}>Featured Ads</span>
          </button>

          <button
            onClick={() => {
              if (isMobile) {
                setActive("tops");
                setToggle(!toggle);
              } else {
                setActive("tops");
              }
            }}
            className="active  d-flex border-bottom"
            style={
              active === "tops"
                ? { color: "black", fontWeight: "bold", background: "white" }
                : { color: "black", background: "#0085db" }
            }
          >
            <span style={isMobile ? mobstyle : deskstyle}>Inactive Premium ads</span>
          </button>

          <button
            onClick={() => {
              if (isMobile) {
                setActive("features");
                setToggle(!toggle);
              } else {
                setActive("features");
              }
            }}
            className="active  d-flex border-bottom"
            style={
              active === "features"
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
              Inactive Featured ads
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
      {active === "top" && (
        <UserTopAds topAds={allAds} deleteAds={DeleteClick} />
      )}
      {active === "featured" && (
        <UserFeatureAds featuredAds={allAds} deleteAds={DeleteClick} />
      )}
      {active === "tops" && (
        <InActivePre topAds={allAds} deleteAds={DeleteClick} />
      )}
      {active === "features" && (
        <InActiveFea featuredAds={allAds} deleteAds={DeleteClick} />
      )}
    </>
  );
};

export default DashAds;
