import { useState } from "react";
import Payments from "../../../Ads/Payment/Payments";
import DashAds from "../DashAds/DashAds";
import DashContent from "../DashContent/DashContent";
import DashNotification from "../DashNotification/DashNotification";
import EditDashProfile from "../EditDashProfile/EditDashProfile";
import MessageDash from "../MessageDash/MessageDash";
import Orders from "../Orders/Orders";
import Safty from "../Safty/Safty";
import UserAllInformation from "../UserAllInformtaion/UserAllInformtaion";
import "./leftDashboard.css";
import Logout from "../../Login/Logout";
import MyFavorites from "../../../Ads/Allads/MyFavorites";
// import Confirm from "../../../../component/Base/Header";
import { IoMdWallet } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { MdLibraryAdd } from "react-icons/md";
import { MdLeaderboard } from "react-icons/md";
import { BsChatSquareTextFill } from "react-icons/bs";
import { MdHelpCenter } from "react-icons/md";
import { BiPackage } from "react-icons/bi";
import { GoVerified } from "react-icons/go";
import { FaBorderAll } from "react-icons/fa";
import Profile from "../../Profile/Profile";
import AddBlog from "../../../Blogs/AddBlog";
import MyBlog from "../../../Blogs/MyBlog";
import { isMobile } from "react-device-detect";
import ActivePlans from "../../../Ads/Pricing/ActivePlans";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "antd";

import { ExclamationCircleFilled } from "@ant-design/icons";
import { removeAllWishlist } from "../../../../store/wishlistSlice";
import { removeUserData } from "../../../../store/userIdSlice";
import { getUserProfileData } from "../../../../store/UserProfileDetailsSlice";
import { useDispatch } from "react-redux";
import ChatHome from "../../../Ads/messageAdsChat/ChatApp/ChatHome";
import Packages from "../../../BussinessprofileDashboard/Packages";
import ChatAndCommu from "../../../BussinessprofileDashboard/ChatAndCommu";
import Verified from "../../../BussinessprofileDashboard/Verified";
import Wallet from "../../../BussinessprofileDashboard/Wallet";
import Featured from "../../../BussinessprofileDashboard/Featured";
import Hola9Help from "../../../BussinessprofileDashboard/Hola9Help";
import EditProfile from "../../../BussinessprofileDashboard/EditProfile";
import MyAds from "../../../BussinessprofileDashboard/MyAds"
const LeftDashboard = ({ businessPlan }) => {
  const [business, setBusiness] = useState(true)
  console.log(businessPlan, "bb")
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
      {true ?
        <div className="container">
          <div className="row">
            {businessPlan ?
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
                      RotateKey'S Help
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
                            setActive("DashAds");
                            setToggle(!toggle);
                          } else {
                            setActive("DashAds");
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
                        RotateKey'S Help
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
                      </a>{" "}
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
              :
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

                    <a href
                      onClick={() => {
                        if (isMobile) {
                          setActive("Profile");
                          setToggle(!toggle);
                          // document.getElementById("toggle").style.visibility = "hidden";
                        } else {
                          setActive("Profile");
                        }
                      }}
                      className="active d-flex border-bottom "
                      style={
                        active == "Profile"
                          ? { color: "#34495e", fontWeight: "bold" }
                          : { color: "" }
                      }
                    >
                      <span className="icon7 me-3">
                        <i class="fa fa-user-circle"></i>
                      </span>
                      Edit Profile hghghg
                    </a>
                    <a href
                      onClick={() => {
                        if (isMobile) {
                          setActive("Chats");
                          setToggle(!toggle);
                          // document.getElementById("toggle").style.visibility = "hidden";
                        } else {
                          setActive("Chats");
                        }
                      }}
                      className="active d-flex border-bottom "
                      style={
                        active == "Profile"
                          ? { color: "#34495e", fontWeight: "bold" }
                          : { color: "" }
                      }
                    >
                      <span className="icon7 me-3">
                        <i class="fa fa-user-circle"></i>
                      </span>
                      Chats
                    </a>
                    {/* <a onClick={()=>setActive("DashAds")} className=" d-flex  border-bottom"> */}
                    <a
                      onClick={() => {
                        if (isMobile) {
                          setActive("DashAds");
                          setToggle(!toggle);
                        } else {
                          setActive("DashAds");
                        }
                      }}
                      className="active d-flex border-bottom"
                      style={
                        active == "DashAds"
                          ? { color: "#34495e", fontWeight: "bold" }
                          : { color: "" }
                      }
                    >
                      <span className="icon1 me-3">
                        <i className="fas fa-ad" />
                      </span>
                      My Ads
                    </a>
                    {/* <a onClick={()=>setActive("AddProduct")} className=" d-flex border-bottom"> */}
                    <a
                      onClick={() => {
                        if (isMobile) {
                          navigate("/add-product/");
                          setActive("AddProduct");
                          setToggle(!toggle);
                        } else {
                          navigate("/add-product/");
                          setActive("AddProduct");
                        }
                      }}
                      className="active d-flex border-bottom"
                      style={
                        active == "AddProduct"
                          ? { color: "#34495e", fontWeight: "bold" }
                          : { color: "" }
                      }
                    >
                      <span className="icon1 me-3">
                        <i className="fa fa-cart-plus" />
                      </span>
                      Create Ads
                    </a>
                    {/* <a onClick={()=>setActive("MyFavorites")} className=" d-flex border-bottom"> */}
                    <a
                      onClick={() => {
                        if (isMobile) {
                          navigate("/dashboard/wishlist/");
                          setActive("MyFavorites");
                          setToggle(!toggle);
                        } else {
                          navigate("/dashboard/wishlist/");

                          setActive("MyFavorites");
                        }
                      }}
                      className="active d-flex border-bottom"
                      style={
                        active == "MyFavorites"
                          ? { color: "#34495e", fontWeight: "bold" }
                          : { color: "" }
                      }
                    >
                      <span className="icon1 me-3">
                        <i className="fa fa-heart" />
                      </span>
                      My Favorite
                    </a>
                    {/* <a onClick={()=>setActive("FeaturedAds")} className="d-flex  border-bottom"> */}
                    {/* <a onClick={()=>{
      if(isMobile){
        setActive("FeaturedAds");
        setToggle(!toggle);
      }else{
        setActive("FeaturedAds");
      }
    }} className="active d-flex border-bottom" style={active=="FeaturedAds" ? {color:"#34495e", fontWeight:"bold" }:{color:""}}>
      <span className="icon1 me-3">
        <i className="icon icon-folder-alt" />
      </span>
      Featured Ads
    </a> */}
                    {/* <a onClick={()=>setActive("MessageDash")} className="d-flex border-bottom"> */}
                    {/* <a onClick={()=>{
      if(isMobile){
        setActive("MessageDash");
        setToggle(!toggle);
      }else{
        setActive("MessageDash");
      }
    }} className="active d-flex border-bottom" style={active=="MessageDash" ? {color:"#34495e", fontWeight:"bold" }:{color:""}}>
      <span className="icon1 me-3">
        <i className="icon icon-game-controller" />
      </span>
      Chat
    </a> */}

                    {/* <a onClick={()=>setActive("Orders")} className="d-flex  border-bottom"> */}
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
                        <i className="fa fa-money" />
                      </span>
                      Payments & Orders
                    </a>
                    {/* <a onClick={()=>setActive("Safty")} className="d-flex border-bottom"> */}
                    {/* <a
                  onClick={() => {
                    if (isMobile) {
                      setActive("Safty");
                      setToggle(!toggle);
                    } else {
                      setActive("Safty");
                    }
                  }}
                  className="active d-flex border-bottom"
                  style={
                    active == "Safty"
                      ? { color: "#34495e", fontWeight: "bold" }
                      : { color: "" }
                  }
                >
                  <span className="icon1 me-3">
                    <i className="icon icon-game-controller" />
                  </span>
                  Safety Tips
                </a> */}
                    {/* <a onClick={()=>setActive("AddBlog")} className="d-flex border-bottom"> */}
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
                      style={
                        active == "AddBlog"
                          ? { color: "#34495e", fontWeight: "bold" }
                          : { color: "" }
                      }
                    >
                      <span className="icon1 me-3">
                        <i className="fa fa-th" />
                      </span>
                      Add Blogs
                    </a>
                    {/* <a onClick={()=>setActive("MyBlog")} className="d-flex border-bottom"> */}
                    <a
                      onClick={() => {
                        if (isMobile) {
                          setActive("MyBlog");
                          setToggle(!toggle);
                        } else {
                          setActive("MyBlog");
                        }
                      }}
                      className="active d-flex border-bottom"
                      style={
                        active == "MyBlog"
                          ? { color: "#34495e", fontWeight: "bold" }
                          : { color: "" }
                      }
                    >
                      <span className="icon1 me-3">
                        <i className="fa fa-th-large" />
                      </span>
                      My Blogs
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
                      style={
                        active == "ActivePlans"
                          ? { color: "#34495e", fontWeight: "bold" }
                          : { color: "" }
                      }
                    >
                      <span className="icon1 me-3">
                        <i className="fa fa-line-chart" />
                      </span>
                      Active Plans
                    </a>
                    {/* <a onClick={() => setActive("Logout")} className="d-flex">
                  <span className="icon1 me-3">
                    <i className="icon icon-power" />
                  </span>
                  Logout
                </a> */}
                    <Button
                      style={{ width: "100%", fontWeight: "bolder" }}
                      onClick={showConfirm}
                    >
                      Logout
                    </Button>
                    {/* <Modal
                  title="Confirmation"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <p>Are you sure you want to Logout?</p>
                </Modal> */}
                  </div>
                )}
                <div className="card" id="toggle">
                  {toggle ? (
                    <div className="item1-links  mb-0">
                      {/* <a onClick={()=>setActive("Profile")} className="active d-flex border-bottom"> */}
                      <a
                        onClick={() => {
                          if (isMobile) {
                            setActive("Profile");
                            setToggle(!toggle);
                            // document.getElementById("toggle").style.visibility = "hidden";
                          } else {
                            setActive("Profile");
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
                            setActive("Chats");
                            setToggle(!toggle);
                            // document.getElementById("toggle").style.visibility = "hidden";
                          } else {
                            setActive("Chats");
                          }
                        }}
                        className="active d-flex border-bottom"
                      >
                        <span className="icon1 me-3">
                          <i className="icon icon-user" />
                        </span>
                        Chats
                      </a>
                      {/* <a onClick={()=>setActive("DashAds")} className=" d-flex  border-bottom"> */}
                      <a
                        onClick={() => {
                          if (isMobile) {
                            setActive("DashAds");
                            setToggle(!toggle);
                          } else {
                            setActive("DashAds");
                          }
                        }}
                        className="active d-flex border-bottom"
                      >
                        <span className="icon1 me-3">
                          <i className="icon icon-diamond" />
                        </span>
                        My Ads
                      </a>
                      {/* <a onClick={()=>setActive("AddProduct")} className=" d-flex border-bottom"> */}
                      <a
                        onClick={() => {
                          if (isMobile) {
                            navigate("/add-product/");
                            setActive("AddProduct");
                            setToggle(!toggle);
                          } else {
                            navigate("/add-product/");
                            setActive("AddProduct");
                          }
                        }}
                        className="active d-flex border-bottom"
                      >
                        <span className="icon1 me-3">
                          <i className="icon icon-heart" />
                        </span>
                        Create Ads
                      </a>
                      {/* <a onClick={()=>setActive("MyFavorites")} className=" d-flex border-bottom"> */}
                      <a
                        onClick={() => {
                          if (isMobile) {
                            navigate("/dashboard/wishlist/");

                            setActive("MyFavorites");
                            setToggle(!toggle);
                          } else {
                            navigate("/dashboard/wishlist/");

                            setActive("MyFavorites");
                          }
                        }}
                        className="active d-flex border-bottom"
                      >
                        <span className="icon1 me-3">
                          <i className="icon icon-heart" />
                        </span>
                        My Favorite
                      </a>
                      {/* <a onClick={()=>setActive("FeaturedAds")} className="d-flex  border-bottom"> */}
                      {/* <a onClick={()=>{
            if(isMobile){
              setActive("FeaturedAds");
              setToggle(!toggle);
            }else{
              setActive("FeaturedAds");
            }
          }} className="active d-flex border-bottom">
            <span className="icon1 me-3">
              <i className="icon icon-folder-alt" />
            </span>
            Featured Ads
          </a> */}
                      {/* <a onClick={()=>setActive("MessageDash")} className="d-flex border-bottom"> */}
                      <a
                        onClick={() => {
                          if (isMobile) {
                            setActive("MessageDash");
                            setToggle(!toggle);
                          } else {
                            setActive("MessageDash");
                          }
                        }}
                        className="active d-flex border-bottom"
                      >
                        <span className="icon1 me-3">
                          <i className="icon icon-game-controller" />
                        </span>
                        Chat
                      </a>
                      {/* <a onClick={()=>setActive("Orders")} className="d-flex  border-bottom"> */}
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
                      >
                        <span className="icon1 me-3">
                          <i className="icon icon-basket" />
                        </span>
                        Payments & Orders
                      </a>
                      {/* <a onClick={()=>setActive("Safty")} className="d-flex border-bottom"> */}
                      {/* <a
                    onClick={() => {
                      if (isMobile) {
                        setActive("Safty");
                        setToggle(!toggle);
                      } else {
                        setActive("Safty");
                      }
                    }}
                    className="active d-flex border-bottom"
                  >
                    <span className="icon1 me-3">
                      <i className="icon icon-game-controller" />
                    </span>
                    Safety Tips
                  </a> */}
                      {/* <a onClick={()=>setActive("AddBlog")} className="d-flex border-bottom"> */}
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
                          <i className="icon icon-settings" />
                        </span>
                        Add Blogs
                      </a>
                      {/* <a onClick={()=>setActive("MyBlog")} className="d-flex border-bottom"> */}
                      <a
                        onClick={() => {
                          if (isMobile) {
                            setActive("MyBlog");
                            setToggle(!toggle);
                          } else {
                            setActive("MyBlog");
                          }
                        }}
                        className="active d-flex border-bottom"
                      >
                        <span className="icon1 me-3">
                          <i className="icon icon-settings" />
                        </span>
                        My Blog
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
                      {/* <a onClick={() => setActive("Logout")} className="d-flex">
                    <span className="icon1 me-3">
                      <i className="icon icon-power" />
                    </span>
                    Logout
                  </a> */}{" "}
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
              </div>}

            <div className="col-xl-9 col-lg-12 col-md-12">
              {active === "Profile" && <Profile />}
              {active === "editprofile" && <EditProfile />}

              {active === "Chats" && <ChatHome />}
              {active === "UserAllInformation" && <UserAllInformation />}
              {/* {active === "MyFavorites" && <Wishlist />} */}
              {/* {active === "MyFavorites" && <Wishlist commonProps={commonProps} />} */}

              {/* {active ==="FeaturedAds" && <ManageAds />} */}
              {/* {active ==="PostDashAds" && <PostDashAds />} */}
              {/* {active === "AddProduct" && <AddProduct />} */}
              {/* {active === "PayMentDash" && <DashContent />} */}
              {active === "DashAds" && <DashAds />}
              {active === "EditDashProfile" && <EditDashProfile />}
              {active === "MessageDash" && <MessageDash />}
              {active === "DashNotification" && <DashNotification />}
              {active === "Payments" && <Payments />}
              {active === "Orders" && <Orders />}
              {active === "Safty" && <Safty />}
              {active === "AddBlog" && <AddBlog />}
              {active === "ActivePlans" && <ActivePlans />}
              {active === "Logout" && <Logout />}
              {active === "MyBlog" && <MyBlog />}
              {active === "Orders" && <Orders />}
              {active === "editprofile" && <EditProfile />}
              {active === "ads" && <MyAds />}
              {active === "bussiness" && <Packages />}
              {active === "chatandcommu" && <ChatAndCommu />}
              {active === "verified" && <Verified />}
              {active === "wallet" && <Wallet />}
              {active === "featured" && <Featured />}
              {active === "hola9help" && <Hola9Help />}
            </div>
          </div>
        </div> : "null"}
    </>
  );
};

export default LeftDashboard;
