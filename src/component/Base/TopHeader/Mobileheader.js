import React, { useState } from "react";
import Hola9logo from "../../images/logotext.png";
import CurrentLocation from "./CurrentLocation.js";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { decrypt } from "../encryptDecrypt/encryptDecrypt";

const Mobileheader = () => {
  const wishlistData = useSelector((state) => state.wishlistSlice);
  const userData = useSelector((state) => state.userIdSlice);
  const [decryptedData, setdecryptedData] = useState(null);

  return (
    <>
      <nav className="navbar sticky-top bg-white" style={{ zIndex: "5px" }}>
        <div className="col-sm-12 col-xs-12  d-lg-none hidden-md visible-xs-block visible-sm-block d-flex">
          <Link title="Logo" to="/" className="site__brand__logo ">
            <img
              src={Hola9logo}
              style={{ width: "90px", height: "40px", marginLeft: "15px" }}
              alt="Hola9"
            />
          </Link>
          <CurrentLocation />
          &nbsp;&nbsp;
          <div
            className="product-btn text-center"
            style={{
              position: "absolute",
              right: "0",
              marginRight: "5px",
              backgroundColor: "none",
            }}
          >
            {localStorage.getItem("userdata") ? (
              <Link to="/dashboard/wishlist/">
                <button
                  type="button"
                  title="Wishlist"
                  className="far fa-heart"
                  style={{ marginLeft: "-10px", color: "red" }}
                />{" "}
                &nbsp;
                <span class="badge badge-secondary">
                  {!wishlistData?.data ? 0 : wishlistData?.data?.length}
                </span>
              </Link>
            ) : (
              <Link to="/login">
                <button
                  type="button"
                  title="Wishlist"
                  className="far fa-heart"
                  style={{ marginLeft: "-10px", color: "red" }}
                />{" "}
                &nbsp;
                <span class="badge badge-secondary">
                  {localStorage.getItem("wishlist")
                    ? JSON.parse(decrypt("wishlist")).length
                    : 0}
                </span>
              </Link>
            )}
          </div>
          <Sidebar />
        </div>
      </nav>
    </>
  );
};

export default Mobileheader;
