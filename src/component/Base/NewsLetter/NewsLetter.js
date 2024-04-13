// import React, { useEffect, useState } from "react"
import { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import "./NewsLetter.css";
// import Hola9logo from '../images/logotext.png';

const Error = () => {
  const [email, setEmail] = useState(null);
  const [success, setSuccess] = useState(false);
  const submitmethod = () => {
    let body12 =
      '{"toAddress":"' +
      "tech@hola9.com" +
      '","title":"hola9 newsletter","message":"This is your <b>' +
      email +
      '</b>"}';

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "3d00e6d5bcmsha491cf18c61b444p100fccjsnf019021bff58",
        "X-RapidAPI-Host": "hourmailer.p.rapidapi.com",
      },
      body: body12,
    };

    fetch("https://hourmailer.p.rapidapi.com/send", options)
      .then((response) => response.json())
      .then((response) => {
        setSuccess(true);
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      {/* <section className="bg-white border mb-3"> */}
      <div className="container border my-3 rounded-3 my-3 text-white">
        {!success ? (
          <div className="row">
            <div className="col-lg-7 col-xl-6 col-md-12 col-sm-12">
              <div className="sub-newsletter">
                <h3 className="mb-2">
                  <FaTelegramPlane />
                  <span className="ml-3"> Subscribe To Our Newsletter</span>
                </h3>
                <p className="me-2">
                  Subscribe up to our newsletter, so you can be the first to
                  find out the latest news and tips about applications, as well
                  as general RotateKey updates .
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-xl-6 col-md-12 col-sm-12">
              <div className="input-group sub-input p-2">
                <input
                  type="email"
                  className="form-control form-inline mt-2"
                  placeholder="Enter your Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <button
                  type="button"
                  className="blgBtn ml-3 w-25"
                  onClick={submitmethod}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-3">We will notify you soon</div>
        )}
      </div>
      {/* </section> */}
    </>
  );
};

export default Error;
