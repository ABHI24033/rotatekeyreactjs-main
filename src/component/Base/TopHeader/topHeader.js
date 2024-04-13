import React, { useEffect, useState } from "react";
import "./topHeader.css";
import { Link } from "react-router-dom";
import { decrypt } from "../encryptDecrypt/encryptDecrypt";
import { IoMdLogIn } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { getUserPlan } from "../../../store/allPlanDetails";

const TopHeader = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();
  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      let result = decrypt("userdata");
      setName(result.name);
      setEmail(result.email);
      setImage(result.image);
    }

    let id = localStorage.getItem("user");
    if (localStorage.getItem("user") !== null) {
      dispatch(getUserPlan(id));
    }
  }, []);

  return (
    <>
      <div className="header-top">
        <div className="">
          <div
            className="row hidden-sm hidden-xs visible-md-block visible-lg-block"
            style={{ padding: "5px" }}
          >
            {/* Header Top Left */}
            <div className="header-top-left col-md-6 col-sm-6 col-xs-12 hidden-xs">
              <ul className="listnone">
                {/* <li>
                  <Link to="/aboutUs/">
                    <AiOutlineTeam className="topLink text-white fs-18"/> About
                  </Link>
                </li> */}
                {/* <li>
                  <Link to="/faq/">
                    <AiOutlineQuestionCircle className="text-white fs-18"/> FAQS
                  </Link>
                </li> */}
              </ul>
            </div>
            {/* Header Top Right Social */}
            <div className="header-right col-md-6 col-sm-6 col-xs-12 ">
              <div className="pull-right">
                <ul className="listnone">
                  {localStorage.getItem("access_token") == null ? (
                    <li>
                      <Link to="/login/" className="topLink">
                        <IoMdLogIn className="text-white fs-18" /> Log in
                        &nbsp;&nbsp;
                      </Link>
                      <Link to="/signup/" className="topLink">
                        <AiOutlineUserAdd className="text-white fs-18" />
                        Register
                      </Link>
                    </li>
                  ) : (
                    <li className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {image}
                        {/* <img
                          className="img-circle resize"
                          alt=""
                          src="https://templates.scriptsbundle.com/carspot/demos/images/users/3.jpg"
                        />{" "} */}
                        <span className="myname hidden-xs"> {name} </span>{" "}
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="topLink">
                          <Link to="/dashboard/profile/">User Profile</Link>
                        </li>
                        <li className="topLink">
                          <Link to="/add-product/">Create Ads</Link>
                        </li>
                        <li className="topLink">
                          <Link to="/activeAds">Active Ads</Link>
                        </li>
                        <li className="topLink">
                          <Link to="/dashboard/wishlist/">Favourite Ads</Link>
                        </li>
                        {/* <li>
                          <Link to="messages.html">Message Panel</Link>
                        </li> */}
                      </ul>
                    </li>
                  )}
                  <li>
                    <Link to="/add-product/" className="topLink p-1">
                      <FaPlus className="text-white fs-12" /> Post Ads
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
