import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { isMobile } from "react-device-detect";
import "../../component/Account/Dashboard/DashAds/DashAds.css";
import CallSchedule from "./CallSchedule";
import ChatAndCommu from "./ChatAndCommu";
import "./Hola9Help.css";
import { BsChatDots } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";

const mobstyle = {
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "5px",
  width: "auto",
};
const deskstyle = {
  margin: "15px 5px 15px 5px",
  borderRadius: "5px",
  fontWeight: "bold",
  justifyContent: "center",
  width: "auto",
};

const Hola9Help = (props) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <section id="contact">
          <center>
            <h2>Get In Touch With Us</h2>
          </center>
          <div className="container contact__container">
            <div
              className="contact__options "
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "-20px",
              }}
            >
              <button
                onClick={() => {
                  if (isMobile) {
                    setActive("ChatHelp");
                    setToggle(!toggle);
                  } else {
                    setActive("ChatHelp");
                  }
                }}
                style={
                  active === "ChatHelp"
                    ? {
                        fontWeight: "bold",
                        background: "#0085db",
                        marginRight: "20px",
                        height: "1.5cm",
                        textAlign: "center",
                      }
                    : {
                        background: "#047dba",
                        display: "flex",
                        marginRight: "20px",
                        height: "1.5cm",
                        justifyContent: "center",
                      }
                }
                className="contact-option col-lg-6"
              >
                <span style={isMobile ? mobstyle : deskstyle}>
                  <h6 style={{ color: "white", fontSize: '18px'  }}>
                    <BsChatDots/>
                    Chat Support
                  </h6>
                </span>
              </button>
              <button
                onClick={() => {
                  if (isMobile) {
                    setActive("CallSchedule");
                    setToggle(!toggle);
                  } else {
                    setActive("CallSchedule");
                  }
                }}
                style={
                  active === "CallSchedule"
                    ? {
                      
                        fontWeight: "bold",
                        background: "#0085db",
                        marginRight: "20px",
                        height: "1.5cm",
                        justifyContent: 'center'
                      }
                    : {
                        background: "#047dba",
                        display: "flex",
                        marginRight: "20px",
                        height: "1.5cm",
                        justifyContent: "center",
                      }
                }
                className="contact-option col-lg-6"
              >
                <span style={isMobile ? mobstyle : deskstyle}>
                  <h6 style={{ color: "white",fontSize: '18px' }}>
                    <FiPhoneCall
                    />
                    Schedule a Call
                  </h6>
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {active === "CallSchedule" && <CallSchedule />}
      {active === "ChatHelp" && <ChatAndCommu />}
    </>
  );
};

export default Hola9Help;
