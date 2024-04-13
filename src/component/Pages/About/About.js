import { useEffect, useState } from "react";
import "./About.scss";
import logo from "../../images/logotext.png";
import YouTubeChannel from "../../Ads/Video/youTubeChannel";
import ScrollButton from "../../ScrollTop/ScrollButton";
import Cwe from "../Contact/Cwe";
import { isMobile } from "react-device-detect";

const mobileStyle = {
  width: "100%",
  justifyContent: "center",
};
const desktopStyle = {
  marginRight: "60px",
};

const hmob = {
  height: "auto",
};
const hdesk = {
  height: "470px",
};

const About = () => {
  document.title = "RotateKey - About Us";

  return (
    <>
      <main id="main" className="site-main">
        <div
          className="container-fluid bgcolor"
          style={{
            display: "flex",
            justifyContent: "center",
            height: "90px",
          }}
        >
          <p style={{ color: "white", paddingTop: "10px", fontSize: "30px" }}>
            About Us
          </p>{" "}
        </div>

        {/* .page-title */}
        <div className="site-content">
          <div className="container">
            <div className="company-info flex-inline">
              <img src={logo} alt="Our Company" />
              <div className="ci-content">
                <h4>Our story begins with you</h4>
                <p>
                  Our Vision is to make RotateKey one stop solution for local
                  businesses, classifieds and largest business-to-business
                  marketplace for India Where you can get business to business,
                  Business to Customer and Customer to customer services at one
                  place e-commerce platform, focuses on expert services around
                  Home, Life and Self and where the user need is customized
                </p>
              </div>
            </div>
            {/* .company-info */}
            {/* .our-team */}
            <div className="join-team align-center">
              <div className="container">
                <h2 className="title">Join our team</h2>
                <div className="jt-content">
                  <p>
                    We’re always looking for talented individuals and <br />
                    people who are hungry to do great work.
                  </p>

                  <>
                    <p>
                      <a
                        className="button text-white mx-auto my-auto"
                        href="#popup1"
                        style={{ backgroundColor: "#2b224c" }}
                        title="View openings"
                      >
                        view openings
                      </a>
                    </p>
                    <div id="popup1" className="overlay mt-5 ">
                      <div className="col-lg-3"></div>
                      <div className="col-lg-6 col-md-12 col-sm-12 ">
                        <div className="popup" style={isMobile ? hmob : hdesk}>
                          <h2>Info box</h2>
                          <a
                            className="close"
                            href="#"
                            style={{
                              fontSize: "30px",
                              top: "0px",
                              right: "0px",
                            }}
                          >
                            ×
                          </a>
                          <div className="content">
                            <div style={isMobile ? mobileStyle : desktopStyle}>
                              <Cwe />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                </div>
              </div>
            </div>

            {/* .join-team */}
          </div>
          {/* .site-content */}
          <div style={{ marginTop: "-50px" }}>
            <YouTubeChannel style={{ width: "100%" }} />
          </div>
        </div>
      </main>
      {/* <div style={{ border: "1px solid red", backgroundColor: "black" }}>
        <ScrollButton />
      </div> */}
    </>
  );
};

export default About;
