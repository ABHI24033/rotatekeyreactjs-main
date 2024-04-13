import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdLibraryAdd } from "react-icons/md";
import { MdLeaderboard } from "react-icons/md";
import { BsChatSquareTextFill } from "react-icons/bs";
import { MdHelpCenter } from "react-icons/md";
import { BiPackage } from "react-icons/bi";
import { GoVerified } from "react-icons/go";
import { FaBorderAll } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { IoMdWallet } from "react-icons/io";
// import { VscLayersActive } from "react-icons/vsc";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import Orders from "./Orders";
import EditProfile from "./EditProfile";
import MyAds from "./MyAds";
import Packages from "./Packages";
import ChatAndCommu from "./ChatAndCommu";
import Verified from "./Verified";
import Wallet from "./Wallet";
import Featured from "./Featured";
import Hola9Help from "./Hola9Help";
import MyDashboardBP from "./MyDashboardBP";

import { removeAllWishlist } from "../../../src/store/wishlistSlice";
import { removeUserData } from "../../../src/store/userIdSlice";
import { getUserProfileData } from "../../../src/store/UserProfileDetailsSlice";
import { useDispatch } from "react-redux";
// import ChatHome from "../../../Ads/messageAdsChat/ChatApp/ChatHome";

const LeftBussinessDashboard = () => {
  let navigate = useNavigate();
  const [active, setActive] = useState("DashAds");
  const [toggle, setToggle] = useState(false);

  // const commonProps = { myProp1: "prop1" };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  //logout

  const dispatch = useDispatch();
  const removeAll = () => {
    dispatch(removeAllWishlist());
    dispatch(removeUserData());
    dispatch(getUserProfileData(data));
  };

  const handleOk = () => {
    removeAll();
    var myItem = localStorage.getItem("currentLocation");
    localStorage.clear();
    localStorage.setItem("currentLocation", myItem);

    navigate("/");
    setIsModalOpen(false);
  };

  const data = [];

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { confirm } = Modal;

  const showConfirm = () => {
    confirm({
      title: "Do you Want to delete these items?",
      icon: <ExclamationCircleFilled />,
      content: "Some descriptions",
      onOk: handleOk,
      onCancel: handleCancel,
    });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-xl-3 col-lg-12 col-md-12"
            style={{
              boxShadow: "2px 2px 8px lightgray",
              height: "fit-content",
              background: "#f3f0f899",
            }}
          >
            {isMobile ? (
              <button
                className="bg-info p-2 rounded text-white m-1 w-100"
                onClick={() => setToggle(!toggle)}
              >
                Your Details
              </button>
            ) : (
              <div className="item1-links  mb-0">
                {/* <a onClick={()=>setActive("Profile")} className="active d-flex border-bottom"> */}

                <a
                  href
                  onClick={() => {
                    if (isMobile) {
                      setActive("mydashboard");
                      setToggle(!toggle);
                      // document.getElementById("toggle").style.visibility = "hidden";
                    } else {
                      setActive("mydashboard");
                    }
                  }}
                  className="active d-flex border-bottom "
                  style={
                    active == "mydashboard"
                      ? { color: "#34495e", fontWeight: "bold" }
                      : { color: "" }
                  }
                >
                  <span className="icon7 me-3">
                    <MdDashboardCustomize />
                  </span>
                  My Dashboard
                </a>

                <a
                  href
                  onClick={() => {
                    if (isMobile) {
                      setActive("editprofile");
                      setToggle(!toggle);
                      // document.getElementById("toggle").style.visibility = "hidden";
                    } else {
                      setActive("editprofile");
                    }
                  }}
                  className="active d-flex border-bottom "
                  style={
                    active == "editprofile"
                      ? { color: "#34495e", fontWeight: "bold" }
                      : { color: "" }
                  }
                >
                  <span className="icon7 me-3">
                    <FaUserEdit />
                  </span>
                  Edit Profile
                </a>
                <a
                  href
                  onClick={() => {
                    if (isMobile) {
                      setActive("ads");
                      setToggle(!toggle);
                      // document.getElementById("toggle").style.visibility = "hidden";
                    } else {
                      setActive("ads");
                    }
                  }}
                  className="active d-flex border-bottom "
                  style={
                    active == "ads"
                      ? { color: "#34495e", fontWeight: "bold" }
                      : { color: "" }
                  }
                >
                  <span className="icon7 me-3">
                    <i className="fas fa-ad" />
                  </span>
                  My Ads
                </a>
                {/* <a onClick={()=>setActive("DashAds")} className=" d-flex  border-bottom"> */}
                <a
                  onClick={() => {
                    if (isMobile) {
                      setActive("bussiness");
                      setToggle(!toggle);
                    } else {
                      setActive("bussiness");
                    }
                  }}
                  className="active d-flex border-bottom"
                  style={
                    active == "bussiness"
                      ? { color: "#34495e", fontWeight: "bold" }
                      : { color: "" }
                  }
                >
                  <span className="icon1 me-3">
                    <BiPackage />
                  </span>
                  My Bussiness & Packages
                </a>
                {/* <a onClick={()=>setActive("AddProduct")} className=" d-flex border-bottom"> */}
                <a
                  onClick={() => {
                    if (isMobile) {
                      // navigate("/featured&premium/");
                      setActive("featured");
                      setToggle(!toggle);
                    } else {
                      // navigate("/featured&premium/");
                      setActive("featured");
                    }
                  }}
                  className="active d-flex border-bottom"
                  style={
                    active == "featured"
                      ? { color: "#34495e", fontWeight: "bold" }
                      : { color: "" }
                  }
                >
                  <span className="icon1 me-3">
                    <MdLeaderboard />
                  </span>
                  Featured/Premium Leads
                </a>

                <a
                  onClick={() => {
                    if (isMobile) {
                      // navigate("/dashboard/wishlist/");
                      setActive("chatandcommu");
                      setToggle(!toggle);
                    } else {
                      // navigate("/dashboard/wishlist/");

                      setActive("chatandcommu");
                    }
                  }}
                  className="active d-flex border-bottom"
                  style={
                    active == "chatandcommu"
                      ? { color: "#34495e", fontWeight: "bold" }
                      : { color: "" }
                  }
                >
                  <span className="icon1 me-3">
                    <BsChatSquareTextFill />
                  </span>
                  Chat & Communication
                </a>

                <a
                  onClick={() => {
                    if (isMobile) {
                      setActive("hola9help");
                      setToggle(!toggle);
                    } else {
                      setActive("hola9help");
                    }
                  }}
                  className="active d-flex border-bottom"
                  style={
                    active == "hola9help"
                      ? { color: "#34495e", fontWeight: "bold" }
                      : { color: "" }
                  }
                >
                  <span className="icon1 me-3">
                    <MdHelpCenter />
                  </span>
                  Hola9'S Help
                </a>
                <a
                  onClick={() => {
                    if (isMobile) {
                      setActive("verified");
                      setToggle(!toggle);
                    } else {
                      setActive("verified");
                    }
                  }}
                  className="active d-flex border-bottom"
                  style={
                    active == "verified"
                      ? { color: "#34495e", fontWeight: "bold" }
                      : { color: "" }
                  }
                >
                  <span className="icon1 me-3">
                    <GoVerified />
                  </span>
                  Become Verified Customer
                </a>

                <a
                  onClick={() => {
                    if (isMobile) {
                      setActive("Orders");
                      setToggle(!toggle);
                    } else {
                      setActive("Orders");
                    }
                  }}
                  className="active d-flex border-bottom"
                  style={
                    active == "Orders"
                      ? { color: "#34495e", fontWeight: "bold" }
                      : { color: "" }
                  }
                >
                  <span className="icon1 me-3">
                    <FaBorderAll />
                  </span>
                  My Orders
                </a>
                <a
                  onClick={() => {
                    if (isMobile) {
                      setActive("wallet");
                      setToggle(!toggle);
                    } else {
                      setActive("wallet");
                    }
                  }}
                  className="active d-flex border-bottom"
                  style={
                    active == "wallet"
                      ? { color: "#34495e", fontWeight: "bold" }
                      : { color: "" }
                  }
                >
                  <span className="icon1 me-3">
                    <IoMdWallet />
                  </span>
                  My Wallet
                </a>

                {/* <a
                  onClick={() => {
                    if (isMobile) {
                      setActive("ActivePlans");
                      setToggle(!toggle);
                    } else {
                      setActive("ActivePlans");
                    }
                  }}
                  className="active d-flex border-bottom"
                  style={
                    active == "ActivePlans"
                      ? { color: "#34495e", fontWeight: "bold" }
                      : { color: "" }
                  }
                >
                  <span className="icon1 me-3">
                    <VscLayersActive/>
                  </span>
                  Active Plans
                </a> */}

                <Button
                  style={{ width: "100%", fontWeight: "bolder" }}
                  onClick={showConfirm}
                >
                  Logout
                </Button>
              </div>
            )}
            <div className="card" id="toggle">
              {toggle ? (
                <div className="item1-links  mb-0">

                  {/* <a onClick={()=>setActive("Profile")} className="active d-flex border-bottom"> */}

                  <a
                  href
                  onClick={() => {
                    if (isMobile) {
                      setActive("mydashboard");
                      setToggle(!toggle);
                      // document.getElementById("toggle").style.visibility = "hidden";
                    } else {
                      setActive("mydashboard");
                    }
                  }}
                  className="active d-flex border-bottom "
                  style={
                    active == "mydashboard"
                      ? { color: "#34495e", fontWeight: "bold" }
                      : { color: "" }
                  }
                >
                  <span className="icon7 me-3">
                    <MdDashboardCustomize />
                  </span>
                  My Dashboard
                </a>

                  <a
                    onClick={() => {
                      if (isMobile) {
                        setActive("editprofile");
                        setToggle(!toggle);
                        // document.getElementById("toggle").style.visibility = "hidden";
                      } else {
                        setActive("editprofile");
                      }
                    }}
                    className="active d-flex border-bottom"
                  >
                    <span className="icon1 me-3">
                      <i className="icon icon-user" />
                    </span>
                    Edit Profile
                  </a>
                  <a
                    onClick={() => {
                      if (isMobile) {
                        setActive("ads");
                        setToggle(!toggle);
                        // document.getElementById("toggle").style.visibility = "hidden";
                      } else {
                        setActive("ads");
                      }
                    }}
                    className="active d-flex border-bottom"
                  >
                    <span className="icon1 me-3">
                      <MdLibraryAdd />
                    </span>
                    My Ads
                  </a>
                  {/* <a onClick={()=>setActive("DashAds")} className=" d-flex  border-bottom"> */}
                  <a
                    onClick={() => {
                      if (isMobile) {
                        // navigate("/add-product/");
                        setActive("bussiness");
                        setToggle(!toggle);
                      } else {
                        // navigate("/add-product/");
                        setActive("bussiness");
                      }
                    }}
                    className="active d-flex border-bottom"
                  >
                    <span className="icon1 me-3">
                    <BiPackage />
                    </span>
                    My Bussiness & Packages
                  </a>
                  {/* <a onClick={()=>setActive("AddProduct")} className=" d-flex border-bottom"> */}
                  <a
                    onClick={() => {
                      if (isMobile) {
                        // navigate("/add-product/");
                        setActive("featured");
                        setToggle(!toggle);
                      } else {
                        // navigate("/add-product/");
                        setActive("featured");
                      }
                    }}
                    className="active d-flex border-bottom"
                  >
                    <span className="icon1 me-3">
                      <MdLeaderboard />
                    </span>
                    Featured/Premium Leads
                  </a>
                  {/* <a onClick={()=>setActive("MyFavorites")} className=" d-flex border-bottom"> */}
                  <a
                    onClick={() => {
                      if (isMobile) {
                        // navigate("/dashboard/wishlist/");

                        setActive("chatandcommu");
                        setToggle(!toggle);
                      } else {
                        // navigate("/dashboard/wishlist/");

                        setActive("chatandcommu");
                      }
                    }}
                    className="active d-flex border-bottom"
                  >
                    <span className="icon1 me-3">
                      <BsChatSquareTextFill />
                    </span>
                    Chat & Communication
                  </a>
                  <a
                    onClick={() => {
                      if (isMobile) {
                        setActive("hola9help");
                        setToggle(!toggle);
                      } else {
                        setActive("hola9help");
                      }
                    }}
                    className="active d-flex border-bottom"
                  >
                    <span className="icon1 me-3">
                      <MdHelpCenter />
                    </span>
                    Hola9'S Help
                  </a>
                  <a
                    onClick={() => {
                      if (isMobile) {
                        setActive("verified");
                        setToggle(!toggle);
                      } else {
                        setActive("verified");
                      }
                    }}
                    className="active d-flex border-bottom"
                  >
                    <span className="icon1 me-3">
                      <GoVerified />
                    </span>
                    Become Verified Customer
                  </a>
                  <a
                    onClick={() => {
                      if (isMobile) {
                        setActive("AddBlog");
                        setToggle(!toggle);
                      } else {
                        setActive("AddBlog");
                      }
                    }}
                    className="active d-flex border-bottom"
                  >
                    <span className="icon1 me-3">
                      <FaBorderAll />
                    </span>
                    My Orders
                  </a>
                  {/* <a onClick={()=>setActive("MyBlog")} className="d-flex border-bottom"> */}
                  <a
                    onClick={() => {
                      if (isMobile) {
                        setActive("wallet");
                        setToggle(!toggle);
                      } else {
                        setActive("wallet");
                      }
                    }}
                    className="active d-flex border-bottom"
                  >
                    <span className="icon1 me-3">
                      <IoMdWallet />
                    </span>
                    My Wallet
                  </a>
                  <a
                    onClick={() => {
                      if (isMobile) {
                        setActive("ActivePlans");
                        setToggle(!toggle);
                      } else {
                        setActive("ActivePlans");
                      }
                    }}
                    className="active d-flex border-bottom"
                  >
                    <span className="icon1 me-3">
                      <i className="icon icon-settings" />
                    </span>
                    Active Plans
                  </a>
                  <Button type="primary" onClick={showModal}>
                    Logout
                  </Button>
                  <Modal
                    title="Confirmation"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <p>Are you sure you want to Logout?</p>
                  </Modal>
                </div>
              ) : null}
            </div>
          </div>

          <div className="col-xl-9 col-lg-12 col-md-12">
            {active === "Orders" && <Orders />}
            {active === "editprofile" && <EditProfile />}
            {active === "ads" && <MyAds />}
            {active === "bussiness" && <Packages />}
            {active === "chatandcommu" && <ChatAndCommu />}
            {active === "verified" && <Verified />}
            {active === "wallet" && <Wallet />}
            {active === "featured" && <Featured />}
            {active === "hola9help" && <Hola9Help />}
            {active === "mydashboard" && <MyDashboardBP />}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftBussinessDashboard;
