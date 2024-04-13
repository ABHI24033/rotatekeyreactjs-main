import React, { useState } from "react";
import "./Leads.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { isMobile } from "react-device-detect";
import "../../component/Account/Dashboard/DashAds/DashAds.css";
import Premiumlead from "./Premiumlead";
import Featuredlead from "./Featuredlead";

const mob = {
  fontSize: "14px",
};
const desk = {
  width: "230px",
  boxShadow: "2px 2px 12px lightgray ",
};

const mobstyle = {};
const deskstyle = {
  margin: "15px",
  borderRadius: "5px",
  fontWeight: "bold",
  background: "white",
  fontSize : '12px',
  padding: "5px 5px",
  width: "auto",
};

const Featured = () => {

  const [active, setActive] = useState("featuredads");
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="d-flex " style={isMobile ? mob : desk}>
          <button
            onClick={() => {
              if (isMobile) {
                setActive("featuredads");
                setToggle(!toggle);
              } else {
                setActive("featuredads");
              }
            }}
            className="active d-flex border-bottom"
            style={
              active === "featuredads"
                ? {
                    color: "black",
                    fontWeight: "bold",
                    background: "white",
                  }
                : { color: "black", background: "#0085db" }
            }
          >
            <span style={isMobile ? mobstyle : deskstyle}>Featured Ads</span>
          </button>

          <button
            onClick={() => {
              if (isMobile) {
                setActive("premiumads");
                setToggle(!toggle);
              } else {
                setActive("premiumads");
              }
            }}
            className="active  d-flex border-bottom"
            style={
              active === "premiumads"
                ? { color: "black", fontWeight: "bold", background: "white" }
                : { color: "black", background: "#0085db" }
            }
          >
            <span style={isMobile ? mobstyle : deskstyle}>Premium Ads</span>
          </button>
        </div>
      </div>
      {active === "premiumads" && <Premiumlead/>}
      {active === "featuredads" && <Featuredlead/>}
    

     
    </div>
  );
};

export default Featured;