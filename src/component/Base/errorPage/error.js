// import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./error.css";
// import Hola9logo from '../images/logotext.png';

const Error = () => {
  return (
    <>
      <section className="error-part">
        <div className="container">
          <div className="error">
            <h1>404</h1>
            <h2>Oops! Something Went Wrong?</h2>
            <Link to={`/`}>
              <a className="btn btn-outline">
                <i className="fas fa-home" />
                <span>go to homepage</span>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
