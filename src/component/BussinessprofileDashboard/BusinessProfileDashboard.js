import React, { useContext, useEffect, useState } from "react";
import "../../../src/component/Account/Dashboard/profileDashboard/profileDashboard.css";
import Profile from "../../../src/component/Account/Profile/Profile";
// import { decrypt } from "../../../Base/encryptDecrypt/encryptDecrypt";
import { localUrl, url } from "../../../src/component/env";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../src/App";
import { Button, Form } from "antd";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getUserPlan } from "../../../src/store/allPlanDetails";
import UserDashPlanDetails from "../../../src/component/Account/Dashboard/profileDashboard/UserDashPlanDetails";
import { userProfileDataApi } from "../../../src/store/UserProfileDetailsSlice";
import { isMobile } from "react-device-detect";
import Featured from "./Featured";
import { AiOutlineCloseSquare } from "react-icons/ai";
import "./Bussinessdash.css"

const BusinessProfileDashboard = () => {
  const mobileStyle = {
    textAlign: "center",
    width: "80px",
    margin: "10px",
  };
  const desktopStyle = {
    width: "100px",
    margin: "40px",
  };
  const mobstyle = {
  fontSize: '10px',
  padding: '0px',
  margin: '0px',
  lineHeight: '1.25rem',

  
  };
  const deskstyle = {
   width: 'auto'
  };

  const { loading1, data } = useSelector((state) => state.planData);
  console.log("!!!data", data);

  const [active, setActive] = useState("");
  const [name, setName] = useState();
  const [plan, setPlan] = useState();
  const [nameFlag, setnameFlag] = useState(false);
  const [ads, setads] = useState([]);
  const [Blog, setBlog] = useState([]);
  const [FeaturedData, setFeaturedData] = useState(0);
  const [id, setId] = useState();
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const [open, setOpen] = useState("featured");
  const [toggle, setToggle] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // for showing every plan ads
  const currentDate = new Date();
  const expiryDate = new Date();
  expiryDate.setDate(currentDate.getDate() + 30);
  const expiryDate1 = new Date();
  expiryDate1.setDate(currentDate.getDate() + 60);
  // const[date,setdate]=useState(Date());

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

    fetch(url + "api/adsapi/allPricingPlanData", requestOptions)
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
  const today = new Date();
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
              <div className="row">
                <div className="col-md-2 col-xs-4 col-sm-12">
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
                  </a>
                 {/* <Button
                  onClick={() => {
                    if (isMobile) {
                      setOpen("featured");
                      setToggle(!toggle);
                    } else {
                      setOpen("featured");
                    }
                  }}
                  className="active d-flex border-bottom"
                  style={
                    open == "featured"
                      ? { color: "#34495e", fontWeight: "bold" }
                      : { color: "" }
                  } 
                >
                  <span className="icon1 me-3">
                  </span>
                  Manage Ad Postings
                </Button> */}
                  <Button
                    type="button"
                    style={{
                      background: "#0085db",
                      color: "white",
                      borderRadius: "5px",
                      border: "0px solid red",
                      fontSize: "16px",
                    }}
                  >
                    <Link to="/Featured">Manage Add Postings</Link>
                  </Button>
                </div>
                <div className="col-md-10 col-xs-8 col-sm-12">
                  <div className="">
                    <div className="row">
                      <div className="col-md-4 col-sm-12 col-xs-12">
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
                        <span className="label label-warning">
                          {
                            dataUser?.activePlan[
                              dataUser?.activePlan?.length - 1
                            ]?.fields?.category
                          }
                        </span>
                        &nbsp;
                        {dataUser?.activePlan[dataUser?.activePlan - 1]?.fields
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
                            <Button
                              type="button"
                              style={{
                                // boxShadow: "2px 1px red, -2px -1px red",
                                background: "#0085db",
                                color: "white",
                                borderRadius: "5px",
                                border: "0px solid red",
                                fontSize: "16px",
                                marginLeft: "10px",
                              }}
                            >
                              <Link to="/pricing">Change Plan</Link>
                            </Button>
                          </span>
                        )}
                      </div>
                      <div className="col-md-8 col-sm-12 col-xs-12">
                        {loading ? (
                          <div className="w-100 d-flex justify-content-center h-100 align-items-center bg-dark text-center ">
                            <div class="loader "></div>
                          </div>
                        ) : (
                          <>
                            <div>
                              <div
                                style={{
                                  background: "#0085db",
                                  borderRadius: "5px",
                                }}
                              >
                                <div className="">
                                  <div className="row ad-history" >
                                    <div className="col-lg-12">
                                      <div className="user-stats pb-0">
                                        <div className="inlineAds text-white">
                                        <table className="table ">
                    <thead>
                      <th className="text-white py-0 pl-0">Ads Category</th>
                      {/* <th className="text-white py-0 pl-0">Ads Type</th> */}
                      <th className="text-white py-0 pl-0">Ads Posted</th>
                      <th className="text-white py-0 pl-0">Ads Left</th>
                      <th className="text-white py-0 pl-0">Plans Validity</th>
                    </thead>
                    <tbody>
                      {data.hasOwnProperty("planDataDetails") &&
                        Object?.keys(data?.planDataDetails)?.map((result) => {
                          if (result === "Gold") {
                            return (
                              <tr>
                                <td className="m-0 p-0">{result}</td>
                                <td className="m-0 p-0">Regular</td>
                                <td className="m-0 p-0">
                                  {
                                    data?.planDataDetails[result][
                                      "PostedregualAds"
                                    ]
                                  }
                                </td>
                                <td className="m-0 p-0">
                                  {
                                    data?.planDataDetails[result][
                                      "leftRegularAds"
                                    ]
                                  }
                                </td>
                                <td className="m-0 p-0">
                                  {data?.postAdsForm[result]["days"]} Days
                                </td>

                                <td className="m-0 p-0">
                                {new Date(
                                    today.setDate(
                                      today.getDate() +
                                        data?.postAdsForm[result]["days"]
                                    )
                                  ).toLocaleDateString()}
                                </td>
                              </tr>
                            );
                          } else if(result === "Platinum"){
                            return (
                              <tr>
                                {/* <td className="m-0 p-0" onClick={() => setShowPopup(true)}>{result}</td> */}
                                
                                <td className="m-0 p-0">
                                 
                                  <tr  onClick={() => setShowPopup(true)} >Premium</tr>
                                  <tr>Featured</tr>
                                </td>
                                <td className="m-0 p-0">
                                 
                                  <tr className="m-0 p-0">
                                    {
                                      data?.planDataDetails["Platinum"]["PostedTopAds"]
                                    }
                                  </tr>
                                  <tr className="m-0 p-0">
                                    {
                                      data?.planDataDetails["Platinum"]["PostedFeaturedAds"]
                                    }
                                  </tr>
                                </td>
                                <td className="m-0 p-0">
                                  
                                  <tr className="m-0 p-0">
                                    {
                                      data?.planDataDetails["Platinum"]["leftTopAds"]
                                    }
                                  </tr>
                                  <tr>
                                    {
                                      data?.planDataDetails["Platinum"]["leftFeaturedAds"]
                                    }
                                  </tr>
                                </td>
                                <td className="m-0 p-0">
                                <tr>
                                    {data?.postAdsForm["Platinum"]["days"]} Days
                                </tr>
                                <tr>
                                    {data?.postAdsForm[result]["days"]} Days
                                </tr>
                              </td>
                              </tr>
                            );
                          }
                        })}
                    </tbody>
                  </table>{showPopup && (
                                      <div className="popup" >
                                        <div>
                                          <button
                                            onClick={() => setShowPopup(false)}
                                            style={{
                                              float: "right",
                                              color: "white",
                                              marginTop: '-15px',
                                              fontSize: '20px',

                                            }}
                                          >
                                            <AiOutlineCloseSquare />
                                          </button>
                                        </div>
                                        <br></br>
                                        <div>
                                        <table className="table ">
                    <thead>
                      <th className="text-white py-0 pl-0">Ads Category</th>
                      <th className="text-white py-0 pl-0">Ads Type</th>
                      <th className="text-white py-0 pl-0">Posted Date</th>
                      <th className="text-white py-0 pl-0">Expire Date</th>
                    </thead>
                    <tbody>
                      {data.hasOwnProperty("planDataDetails") &&
                        Object?.keys(data?.planDataDetails)?.map((result) => {
                          if(result === "Platinum"){
                            return (
                              <tr>
                                {/* <td className="m-0 p-0" onClick={() => setShowPopup(true)}>{result}</td> */}
                                <td className="m-0 p-0" onClick={() => setShowPopup(true)}>Premium</td>
                                
                                {/* <td className="m-0 p-0">
                                 
                                  <tr>Featured</tr>
                                  <tr>Featured</tr>
                                </td> */}
                                <td className="m-0 p-0">
                                 
                                  <tr>house</tr>
                                  <tr>Bike</tr>
                                </td>
                                {/* <td className="m-0 p-0">
                                 
                                  <tr className="m-0 p-0">
                                    {
                                      data?.planDataDetails["Platinum"]["PostedTopAds"]
                                    }
                                  </tr>
                                  <tr className="m-0 p-0">
                                    {
                                      data?.planDataDetails["Platinum"]["PostedFeaturedAds"]
                                    }
                                  </tr>
                                </td> */}
                                <td className="m-0 p-0">
                                <tr>
                                  {new Date().toLocaleDateString()}
                                </tr>
                                <tr>
                                  {new Date().toLocaleDateString()}
                                </tr>

                                </td>
                             
                                <td className="m-0 p-0">
                                <tr>
                                  {new Date(
                                    today.setDate(
                                      today.getDate() +
                                      data?.postAdsForm["Platinum"]["days"]
                                    )
                                  ).toLocaleDateString()}
                                </tr>
                                <tr>
                                  {new Date(
                                    today.setDate(
                                      today.getDate() +
                                      data?.postAdsForm["Platinum"]["days"]
                                    )
                                  ).toLocaleDateString()}
                                </tr>

                                </td>

                             
                              </tr>
                            );
                          }
                        })}
                    </tbody>
                  </table>
                                        </div>
                                      </div>
                                    )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                      {/* <UserDashPlanDetails/> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="col-xl-9 col-lg-12 col-md-12">
        {active === "Profile" && <Profile />}
        {active === "featured" && <Featured/>}
      </div>
    </>
  );
};

export default BusinessProfileDashboard;
