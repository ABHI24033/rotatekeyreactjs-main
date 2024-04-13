import React from "react";
import "./Footer.css";
import Hola9logo from "../images/logotext.png";
import appstore from "../images/app-store.png";
import googleplay from "../images/google-play.png";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
// import Bottom from '../Bottom';

const mobfoot = {
  marginTop: "-100px",
};
const deskfoot = {};

export const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer bg-dark text-white">
        <div className="container">
          <div className="footer__top">
            <div style={isMobile ? mobfoot : deskfoot}>
              <div className="col-lg-5 mt-2" style={{ paddingTop: "30px" }}>
                <div className="footer__top__info">
                  <Link title="Logo" to="/" className="footer__top__info__logo">
                    <img src={Hola9logo} alt="Golo" />
                  </Link>
                  <p
                    className="footer__top__info__desc text-white"
                    style={{ color: "black", marginTop: "-30px" }}
                  >
                    #12 Second Floor 3rd Cross <br />
                    Patel Narayana Reddy Layout
                    <br />
                    6th Block Koramangala
                    <br />
                    Bengaluru -560095
                  </p>
                  <div className="footer__top__info__app">
                    <Link
                      title="App Store"
                      to="/updatingSoon"
                      className="banner-apps__download__iphone"
                    >
                      <img src={appstore} alt="App Store" />
                    </Link>
                    <Link
                      title="Google Play"
                      to="/updatingSoon"
                      className="banner-apps__download__android"
                    >
                      <img src={googleplay} alt="Google Play" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 mt-2 d-flex d-lg-none hidden-md visible-xs-block visible-sm-block d-flex">
                <aside className="footer__top__nav">
                  <ul className="dropdown">
                    <h3 className="footerFont fs-3 text-white" style={{ marginLeft: "-10px" }}>
                      My Account
                    </h3>
                    <li>
                      <Link
                        to="/signup/"
                        className="footerFont"
                        title="  Signup"
                      >
                        {" "}
                        Signup
                      </Link>
                    </li>
                    <li>
                      <Link to="/login/" className="footerFont" title="Login">
                        {" "}
                        Login
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="/faqs/" className="footerFont">
                        Faq
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        title="Contact Us"
                        to="/contact/"
                        className="footerFont"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="About Us"
                        to="/aboutUs/"
                        className="footerFont"
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </aside>
                <aside className="footer__top__nav ">
                  <h3 className="footerFont fs-3 text-white">Helpful Links</h3>
                  <ul className="p-0 m-0">
                    {/* <li>
                      <Link
                        title="About Us"
                        to="/refund/"
                        className="footerFont"
                      >
                        Refund Policy
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        title=" Listing Policy"
                        to="/listingPolicy/"
                        className="footerFont"
                      >
                        Listing Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        title=" Copyright Policy"
                        to="/copyrightPolicy/"
                        className="footerFont"
                      >
                        Copyright Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="  Privacy Policy"
                        to="/privacyPolicy/"
                        className="footerFont"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        title=" Terms's & Conditions"
                        to="/terms-of-service/"
                        className="footerFont"
                      >
                        Terms's & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Blogs"
                        to="/blogs-listing/"
                        className="footerFont"
                      >
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link title="Blogs" to="/pricing/" className="footerFont">
                        Pricing
                      </Link>
                    </li>
                  </ul>
                </aside>
              </div>
              <div
                className="col-lg-2 mt-2  hidden-sm hidden-xs visible-md-block visible-lg-block"
                style={{ paddingTop: "30px" }}
              >
                <aside className="footer__top__nav">
                  <ul className="dropdown">
                    <h3 className="footerFont text-white">My Account</h3>
                    <li>
                      <Link
                        to="/signup/"
                        className="footerFont"
                        title="  Signup"
                      >
                        {" "}
                        Signup
                      </Link>
                    </li>
                    <li>
                      <Link to="/login/" className="footerFont" title="Login">
                        {" "}
                        Login
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="/faqs/" className="footerFont" title="FAQ's">
                        Faq
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        title="Contact Us"
                        to="/contact/"
                        className="footerFont"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="About Us"
                        to="/aboutUs/"
                        className="footerFont"
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </aside>
              </div>
              <div
                className="col-lg-2 mt-2  hidden-sm hidden-xs visible-md-block visible-lg-block"
                style={{ paddingTop: "30px" }}
              >
                <aside className="footer__top__nav">
                  <h3 className="footerFont text-white">Helpful Links</h3>
                  <ul className=" p-0 m-0">
                    {/* <li>
                      <Link
                        title="About Us"
                        to="/refundPolicy/"
                        className="footerFont"
                      >
                        Refund Policy
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        title=" Listing Policy"
                        to="/listingPolicy/"
                        className="footerFont"
                      >
                        Listing Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        title=" Copyright Policy"
                        to="/copyrightPolicy/"
                        className="footerFont"
                      >
                        Copyright Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="  Privacy Policy"
                        to="/privacyPolicy/"
                        className="footerFont"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        title=" Terms's & Conditions"
                        to="/terms-of-service/"
                        className="footerFont"
                      >
                        Terms & Condition
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Blogs"
                        to="/blogs-listing/"
                        className="footerFont"
                      >
                        Blogs
                      </Link>
                    </li>
                  </ul>
                </aside>
              </div>
              <div
                className="col-lg-3 mt-2  hidden-sm hidden-xs visible-md-block visible-lg-block"
                style={{ paddingTop: "30px" }}
              >
                <aside className="footer__top__nav footer__top__nav--contact">
                  <h3 className="footerFont text-white">Security</h3>
                  <p className="footerFont">
                    {" "}
                    <b>Email </b>: hello@rotatekey.com
                  </p>

                  <p className="footerFont">
                    <b>Mobile No </b>: +91 9987654321
                  </p>
                  <ul>
                    <li className="facebook">
                      <a
                        title="Facebook"
                        target="_blank"
                        href="https://www.facebook.com/Hola9-Technologies-103386172328157"
                      >
                        <BsFacebook
                          style={{
                            fontSize: "30px",
                            color: "#3b5998",
                            margin: "5px",
                          }}
                        />
                      </a>
                    </li>
                    <li className="twitter">
                      <a
                        title="Linkdin"
                        target="_blank"
                        href="https://www.linkedin.com/company/hola9-classifieds-india-private-limited/mycompany/"
                      >
                        <BsLinkedin
                          style={{
                            fontSize: "30px",
                            color: "#0077b5",
                            margin: "5px",
                          }}
                        />
                      </a>
                    </li>
                    <li className="instagram">
                      <a
                        title="Instagram"
                        target="_blank"
                        href="https://www.instagram.com/hola9.official/"
                      >
                        <BsInstagram
                          style={{
                            fontSize: "30px",
                            color: "#bc2a8d",
                            margin: "5px",
                          }}
                        />
                      </a>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
          {/* .top-footer */}
          <div className="footer__bottom">
            <p className="footer__bottom__copyright ">
              {" "}
              <Link title="Hola 9 " to="/">
                {" "}
                2022 © RotateKey Classifieds India Private Limited 
              </Link>
              . All rights reserved.
            </p>
          </div>
          {/* .top-footer */}
        </div>
        {/* .container */}
      </footer>
      {/* <Bottom/> */}
    </>
  );
};

export default Footer;
