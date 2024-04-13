import React, { useEffect } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import Cwe from "./Cwe";

const Contact = () => {
  document.title = "RotateKey - Contact Us";
  return (
    <>
      <main id="main" className="site-main contact-main">
        <div
          className="container-fluid bgcolor"
          style={{ display: "flex", justifyContent: "center", height: "90px" }}
        >
          <p style={{ color: "white", paddingTop: "10px", fontSize: "30px" }}>
            Contact Us
          </p>{" "}
          <br></br>
        </div>

        {/* .page-title */}
        <div>
          <div className="container" style={{ marginTop: "-30px" }}>
            <div className="row">
              <div className="col-md-6">
                <div className="container">
                  <h2
                    style={{
                      textAlign: "center",
                      fontSize: "25px",
                    }}
                  >
                    Get In Touch With Us
                  </h2>
                  <Cwe />
                </div>
              </div>

              <div className="col-md-6">
                <div className="contact-text d-grid justify-content-center">
                  <h2
                    style={{
                      fontSize: "25px",
                      paddingTop: "-100px",
                    }}
                  >
                    Our Office
                  </h2>
                  <div className="contact-box">
                    <h3>Bengaluru (HQ)</h3>
                    <p>
                      {/* Hola 9 Technologies, Patel Narayana Reddy Layout, 6th
                      Block Koramangala,Bengaluru */}
                      #12 Second Floor 3rd Cross
                      <br />
                      Patel Narayana Reddy Layout
                      <br />
                      6th Block Koramangala <br />
                      Bengaluru -560095
                    </p>
                    {/* <p>+91 </p> */}
                    <a href="https://goo.gl/maps/CbhJY8tjNq8WxS627">
                      Get Direction
                    </a>
                    {/* <Link to="/" title="Get Direction">
                      Get Direction
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* .site-content */}
      </main>
      <div style={{ marginBottom: "500px" }}>
        <h3 style={{ fontSize: "25px", paddingLeft: "30px" }}>
          Location &amp; Maps
        </h3>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.2552970218364!2d77.6254499578763!3d12.939146011824848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15aa83004911%3A0xf04e6ab0127d1810!2sHOLA9%20CLASSIFIEDS%20INDIA%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1672904395635!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.2552970218364!2d77.6254499578763!3d12.939146011824848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15aa83004911%3A0xf04e6ab0127d1810!2sHOLA9%20CLASSIFIEDS%20INDIA%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1672904395635!5m2!1sen!2sin"
          width={1310}
          height={450}
          className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
          style={{
            border: 0,
            paddingTop: "6px",
            paddingLeft: "2px",
            paddingRight: "0.5px",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default Contact;
