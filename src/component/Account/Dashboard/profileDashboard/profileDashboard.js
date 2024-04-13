import React, { useContext, useEffect, useState } from "react";
import "./profileDashboard.css";
import Profile from "../../Profile/Profile";
import { decrypt } from "../../../Base/encryptDecrypt/encryptDecrypt";
import { localUrl, url } from "../../../env";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../../App";
import { Button, Form } from "antd";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getUserPlan } from "../../../../store/allPlanDetails";
import UserDashPlanDetails from "./UserDashPlanDetails";
import { userProfileDataApi } from "../../../../store/UserProfileDetailsSlice";
import { isMobile } from "react-device-detect";

const ProfileDashboard = ({ Plan }) => {
  // const { databusiness } = props;
  console.log(Plan, "gh")

  const mobileStyle = {
    textAlign: "center",
    width: "80px",
    margin: "10px",
  };
  const desktopStyle = {
    width: "100px",
    margin: "40px",
  };
  const [active, setActive] = useState("");
  const [name, setName] = useState();
  const [plan, setPlan] = useState();
  const [nameFlag, setnameFlag] = useState(false);
  const [ads, setads] = useState([]);
  const [Blog, setBlog] = useState([]);
  const [FeaturedData, setFeaturedData] = useState(0);
  const [id, setId] = useState();
  const [error, setError] = useState("");
  const [verified, setVerified] = useState(false)
  const dispatch = useDispatch();

  // for showing every plan ads

  // const [users, setUsers] = useState([]);
  const [image, setImage] = useState(null);
  const [profileform, setprofileform] = useState({
    name: "",
    email: "",
    PhoneNumber: "",
    address: "",
    state: "",
    city: "",
    zipcode: "",
  });
  // const [name, setName] = useState();
  const [email, setEmail] = useState();
  let navigate = useNavigate();
  // var [wishlistmain , setWishlist] = useState([]);
  const dataUser = useContext(UserContext);
  let barererToken = "Bearer " + localStorage.getItem("access_token");
  const [lastLoginTime, setLastLoginTime] = useState(null);
  const imageValue = useSelector((state) => state.profile);

  // cosnt userProfile Datails
  const userProfileDetails = useSelector((state) => state.userProfileData);
  //userPaln data in details
  const { loading } = useSelector((state) => state.planData);

  //all ads count
  const [allAdsCount, setAllAdsCount] = useState({});

  const [staticLoader, setStaticLoader] = useState(false);
  let userId = localStorage.getItem("userid");
  // alll user plan api call in redux
  const [loading2, setLoading2] = useState(false);

  const getUserData = async (id) => {
    setLoading2(true);
    try {
      await dispatch(getUserPlan(userId));
      setLoading2(false);
    } catch {
      setLoading2(false);
    }
  };
  useEffect(() => {
    getUserData(userId);
  }, [userId]);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", barererToken);

    var formdata = new FormData();
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "api/user/adsby/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setads(result);
      })
      .catch((error) => console.log("error", error));
    countvalue();
  }, []);
  const lastloginget = (values) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", barererToken);

    var formdata = new FormData();
    formdata.append("user", values);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "api/user/lastLoginTimeGet", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLastLoginTime(result);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    setPlan(dataUser.activePlan);

    var myHeaders = new Headers();
    myHeaders.append("Authorization", barererToken);
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(url + "api/user/profile/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setprofileform((profileform.name = result.name));
        setName(result.name);
        setEmail(result.email);
        setId(result.id);
        lastloginget(result?.id);
        setImage(result.image);
        localStorage.setItem("userid", result.id);
      })
      .catch((error) => {
        setError("Having Some Issue");
      });
    checkname();
  }, []);

  // useEffect(()=>{

  // var myHeaders = new Headers();
  // myHeaders.append("Cookie", "csrftoken=EmLuPRUNkf6K6gJITHLqCb44GCBa3XdZbwQ9z0697rglSv3GfLbtztOqBKdfAxaB");

  // var formdata = new FormData();
  // formdata.append("user", localStorage.getItem("userid"));

  // var requestOptions = {
  //   method: 'GET',
  //   headers: myHeaders,
  //   body: formdata,
  //   redirect: 'follow'
  // };

  // fetch(localUrl+"adsapi/getPricingViews/", requestOptions)
  //   .then(response => response.json())
  // },[])

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", barererToken);

    var formdata = new FormData();
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "api/user/blogsby/", requestOptions)
      .then((response) => response.json())
      .then((result) => setBlog(result))
      .catch((error) => console.log("error", error));
    countvalue();
  }, []);

  const countvalue = () => {
    ads.map((result) => {
      if (result.fields.is_featured == false) {
        setFeaturedData(FeaturedData + 1);
      }
    });
  };

  const checkname = () => {
    setTimeout(() => {
      if (name.startsWith("user")) {
        setnameFlag(true);
      }
    }, 2000);
  };

  useEffect(() => {
    dispatch(userProfileDataApi(userId));
  }, [userId]);

  useEffect(() => {
    const apiResult = { verified: true };
    var formdata = new FormData();
    formdata.append("userid", "58");

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://hola9.live/api/adsapi/checkVerified", requestOptions)
      .then(response => response.json())
      .then(result => {
        setVerified(result.verifiedCustomer)
        console.log(result, "resvar")
      })
      .catch(error => console.log('error', error));
  }, [])
  console.log(verified, "lo")
  return (
    <>
      <div className="container ">
        <div className="row">
          {/* Middle Content Area */}
          <div className="col-md-12 col-xs-12 col-sm-12">
            <section
              className="search-result-item "
              style={{
                boxShadow: "2px 2px 8px lightgray",
              }}
            >
              <div className="row" >
                <div className="col-md-2 col-xs-4 col-sm-12" >
                  {verified ?
                    <div>
                      {/* <button type="button" className="btn btn-primary position-relative">
  Inbox */}
                      <span className="position-absolute top-20 start-10 translate-middle badge rounded-pill bg-info p-2 "
                        style={{ fontSize: '15px' }}>
                        Verified
                      </span>
                      {/* </button> */}



                      <a className="image-link" href="#">
                        {/* {default_image} */}
                        {userProfileDetails.status ? (
                          <div className="w-100 d-flex justify-content-center h-100 align-items-center text-center ">
                            <div class="loader "></div>
                          </div>
                        ) : (
                          <img
                            style={isMobile ? mobileStyle : desktopStyle}
                            className=""
                            alt="error"
                            src={
                              userProfileDetails?.data.length === 0 ||
                                userProfileDetails?.data[0]?.fields?.image ==
                                "undefined"
                                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Nhs-VE0Dr0atuCtmaXLv0KGce8O-WhP9fipo2OwHUha7cLb0BjNEQPXjZ0SYZDgiMGU&usqp=CAU"
                                : userProfileDetails?.data[0]?.fields?.image
                            }
                          />
                        )}
                      </a>
                    </div>

                    :

                    <a className="image-link" href="#">
                      {/* {default_image} */}
                      {userProfileDetails.status ? (
                        <div className="w-100 d-flex justify-content-center h-100 align-items-center text-center ">
                          <div class="loader "></div>
                        </div>
                      ) : (
                        <img
                          style={isMobile ? mobileStyle : desktopStyle}
                          className=""
                          alt="error"
                          src={
                            userProfileDetails?.data.length === 0 ||
                              userProfileDetails?.data[0]?.fields?.image ==
                              "undefined"
                              ? "https://img.icons8.com/external-sbts2018-lineal-color-sbts2018/2x/external-user-customer-support-sbts2018-lineal-color-sbts2018.png"
                              : userProfileDetails?.data[0]?.fields?.image
                          }
                        />
                      )}
                    </a>}
                </div>
                <div className="col-md-10 col-xs-8 col-sm-12">
                  <div className="">
                    <div className="row ">
                      <div className="col-md-4 col-sm-12 col-xs-12 ">
                        <h4 className="search-result-item-heading">{name}</h4>
                        <h7 className="search ">{email}</h7>
                        <p className="info">
                          <span>
                            <Link to="/dashboard/">
                              <i className="fa fa-user " />
                              Profile
                            </Link>
                          </span>

                        </p>
                        <p className="description">
                          You last logged in at :
                          {lastLoginTime?.map((result) => {
                            return result.fields.lastloginValue.slice(0, 19);
                          })}
                        </p>
                        {/* <span className="label label-warning">
                        {Plan?null:
                        <div className="bg-danger">
                        <span className="label label-warning">
                          {
                            dataUser?.activePlan[
                              dataUser?.activePlan?.length - 1
                            ]?.fields?.category
                          }
                        </span> */}
                        &nbsp;
                        {/* <b className="label label-success">Dealer</b> */}
                        {/* {dataUser?.activePlan[dataUser?.activePlan - 1]?.fields
                          ?.category == "Free" ? (
                          <span className="">
                            <Button type="danger">
                              <Link to="/pricing">
                                Upgrade your plan to Featured Plan
                              </Link>
                            </Button>
                          </span>
                        ) : dataUser?.activePlan[dataUser?.activePlan - 1]
                            ?.fields?.category == "Premium" ? (
                          <span className="">
                            <Button type="danger">
                              <Link to="/pricing">
                                Upgrade your plan to Recommended
                              </Link>
                            </Button>
                          </span>
                        ) : dataUser?.activePlan[dataUser?.activePlan - 1]
                            ?.fields?.category == "Featured" ? (
                          <span className="">
                            <Button type="danger">
                              <Link to="/pricing">
                                Upgrade your plan to Premium
                              </Link>
                            </Button>
                          </span>
                        ) : (
                          <span className="mx-1">
                          </span>
                        )} */}
                        <Button
                          type="button"
                          style={{
                            // boxShadow: "2px 1px red, -2px -1px red",
                            background: "#0085db",
                            color: "white",
                            borderRadius: "5px",
                            border: "0px solid red",
                            fontSize: "16px",
                          }}
                        >
                          <Link to="/pricing">Change Plan</Link>
                        </Button>
                      </div>
                      <div className="col-md-8 col-sm-12 col-xs-12">
                        {loading ? (
                          <div className="w-100 d-flex justify-content-center h-100 align-items-center bg-dark text-center ">
                            <div class="loader "></div>
                          </div>
                        ) : (
                          <UserDashPlanDetails />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <div className="dashboard-menu-container">
              <ul>
                <li className="active">
                  <Link to="/dashboard">
                    <div className="menu-name">Profile </div>
                  </Link>
                </li>
                <li>
                  <Link to="/aboutUs/">
                    <div className="menu-name">Contact Us</div>
                  </Link>
                </li>
                <li>
                  <Link to="/activeAds/">
                    <div className="menu-name">My Ads</div>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/wishlist/">
                    <div className="menu-name">Favourites Ads</div>
                  </Link>
                </li>
                <li>
                  <Link to="/ads-listing/">
                    <div className="menu-name">Search Ads nbnbn</div>
                  </Link>
                </li>
                <li>
                  <Link to="/add-product/">
                    <div className="menu-name">Create Ads</div>
                  </Link>
                </li>
                <li>
                  <Link to="/logout/">
                    <div className="menu-name">Logout</div>
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
          {/* Middle Content Area  End */}
        </div>
      </div>
      <div className="col-xl-9 col-lg-12 col-md-12">
        {active === "Profile" && <Profile />}
      </div>
    </>
  );
};

export default ProfileDashboard;
