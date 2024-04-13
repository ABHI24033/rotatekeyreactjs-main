import React, { useEffect, useState } from "react";
import { localUrl } from "../../env";

const Tt = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  if (localStorage.getItem("access_token") != null) {
    let barererToken = "Bearer " + localStorage.getItem("access_token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", barererToken);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(localUrl + "user/profile/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // setprofileform(profileform.name=result.name)
        setName(result.name);
        setEmail(result.email);

        // setLoader(false)
      })
      .catch((error) => console.log("error", error));
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">
      Navbar w/ text
    </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a href="/aboutUs/">
              <i className="fa fa-heart-o" aria-hidden="true" /> About
            </a> */}
              </li>
              <li className="nav-item">
                {/* <a href="/faq/">
              <i className="fa fa-folder-open-o" aria-hidden="true" /> FAQS
            </a> */}
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-globe" aria-hidden="true" /> Language{" "}
                  {/* <span className="caret" /> */}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">English</a>
                  </li>
                  <li>
                    <a href="#">Swedish</a>
                  </li>
                  <li>
                    <a href="#">Arabic</a>
                  </li>
                  <li>
                    <a href="#">Russian</a>
                  </li>
                  <li>
                    <a href="#">chinese</a>
                  </li>
                </ul>
              </li>
            </ul>
            <span className="navbar-text">
              {localStorage.getItem("access_token") == null ? (
                <li>
                  <a href="login.html">
                    <i className="fa fa-sign-in" /> Log in
                  </a>
                  &nbsp;&nbsp;
                  <a href="register.html">
                    <i className="fa fa-unlock" aria-hidden="true" /> Register
                  </a>
                </li>
              ) : (
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      className="img-circle resize"
                      alt=""
                      src="https://templates.scriptsbundle.com/carspot/demos/images/users/3.jpg"
                    />{" "}
                    <span className="myname hidden-xs"> {name} </span>{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="profile.html">User Profile</a>
                    </li>
                    <li>
                      <a href="archives.html">Archives</a>
                    </li>
                    <li>
                      <a href="active-ads.html">Active Ads</a>
                    </li>
                    <li>
                      <a href="favourite.html">Favourite Ads</a>
                    </li>
                    <li>
                      <a href="messages.html">Message Panel</a>
                    </li>
                    <li>
                      <a href="deactive.html">Account Deactivation</a>
                    </li>
                  </ul>
                </li>
              )}
              <a href="/post-ads/" className="btn btn-theme">
                Add Listing
              </a>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Tt;
