import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { isMobile } from "react-device-detect";
import "../../component/Account/Dashboard/DashAds/DashAds.css";
import UserAllAds from "./PremiumCard.jsx";
import UserFeatureAds from "./FeatureCard.jsx";


const mob = {
  fontSize: "14px",
};
const desk = {
  width: "299px",
  // paddingLeft:"30px",
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

const Packages = (props) => {

  const [active, setActive] = useState("UserAllAds");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div
        style={
          { display:"flex",
            justifyContent:"center"
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
            <span style={isMobile ? mobstyle : deskstyle}> Premium Ads</span>
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
                ? { color: "black", fontWeight: "bold", background: "white"}
                : { color: "black", background: "#0085db"}
            }
          >
            <span style={isMobile ? mobstyle : deskstyle}> Featured Ads</span>
          </button>

          
        </div>
      </div>
      {/* {isloading  ? (
        <YoutubeMagic1/>
      ) : active === "UserAllAds" ? (
        <UserAllAds/>
      ) : null}
      */}
      {active === "UserAllAds" && (
        <UserAllAds />
      )}
      {active === "featured" && (
        <UserFeatureAds />
      )}
  
    </>
  );
};

export default Packages;