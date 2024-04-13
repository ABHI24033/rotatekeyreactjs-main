import React, { useContext, useEffect, useState } from "react";
import "./profileDashboard.css";
import Profile from "../../Profile/Profile";
import { decrypt } from "../../../Base/encryptDecrypt/encryptDecrypt";
import { localUrl, url } from "../../../env";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../../App";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getUserPlan } from "../../../../store/allPlanDetails";
const ProfileDashboard = () => {
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
  console.log("~~~plan", dataUser);
  let planCategory = dataUser?.activePlan[0]?.fields?.category;
  let leftAds = dataUser?.activePlan[0]?.fields?.adsLeft;
  const [lastLoginTime, setLastLoginTime] = useState(null);
  const imageValue = useSelector((state) => state.profile);

  //userPaln data in details
  const { loading, data } = useSelector((state) => state.planData);

  console.log("!!!!!data", Object.keys(data.postAdsForm));
  //all ads count
  const [allAdsCount, setAllAdsCount] = useState({});
  const [staticLoader, setStaticLoader] = useState(false);
  let userId = localStorage.getItem("userid");
  // const getData = async () => {
  //   setStaticLoader(true);
  //   let headersList = {
  //     Accept: "*/*",
  //   };

  //   let bodyContent = new FormData();
  //   bodyContent.append("user", userId);

  //   let response = await fetch(localUrl + "adsapi/allPlanData", {
  //     method: "POST",
  //     body: bodyContent,
  //     headers: headersList,
  //   });
  //   let data = await response.json();
  //   setStaticLoader(false);
  //   console.log("~~~data", data);
  //   setAllAdsCount(data);
  // };
  console.log(
    "~~~ads",
    allAdsCount,
    "~~~",
    allAdsCount.hasOwnProperty(`totalCount`)
  );
  // alll user plan api call in redux
  useEffect(() => {
    console.log("user", userId);
    dispatch(getUserPlan(userId));
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
        console.log("result", result);
        // result.filter((val) => {
        //   if (val?.fields?.PlanCategory === "Free") {
        //     freePlan.push(val);
        //   } else if (val?.fields?.PlanCategory === "Featured") {
        //     featuredPlan.push(val);
        //   } else if (val?.fields?.PlanCategory === "Premium") {
        //     premiumPlan.push(val);
        //   } else {
        //     recommendedPlanResult.push(val);
        //   }
        // });
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
        console.log("result", result);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    setPlan(dataUser.activePlan);
    console.log(dataUser.activePlan);
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
        console.log("error", error);
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
  //   .then(result => console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###########",result))
  //   .catch(error => console.log('error', error));
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
  return (
    <>
      <div className="container ">
        <div className="row">
          {/* Middle Content Area */}
          <div className="col-md-12 col-xs-12 col-sm-12">
            <section className="search-result-item">
              <div className="row">
                <div className="col-md-2 col-xs-4 col-sm-12">
                  <a className="image-link" href="#">
                    {/* {default_image} */}
                    <img
                      className=""
                      alt="error"
                      src={
                        !imageValue.length > 0
                          ? "https://t4.ftcdn.net/jpg/02/14/34/09/360_F_214340987_iYuLVLrP61oepILx6yiUTOO7xsdvmX9K.jpg"
                          : imageValue[imageValue.length - 1]
                      }
                    />
                  </a>
                </div>
                <div className="col-md-10 col-xs-8 col-sm-12">
                  <div className="">
                    <div className="row">
                      <div className="col-md-4 col-sm-12 col-xs-12">
                        <h4 className="search-result-item-heading">
                          <Link to="/">{name}</Link>
                        </h4>
                        <h7 className="search">
                          <Link to="/">{email}</Link>
                        </h7>
                        <p className="info">
                          <span>
                            <Link to="/dashboard/">
                              <i className="fa fa-user " />
                              Profile
                            </Link>
                          </span>
                          <span>
                            {/* <a onClick={()=>setActive("Profile")}> */}
                            <Link to="/dashboard/profile/">
                              <i className="fa fa-edit" />
                              Edit Profile
                            </Link>
                            {/* </a> */}
                          </span>
                        </p>
                        <p className="description">
                          You last logged in at:
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
                        <span className="label label-success">Dealer</span>
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
                          <span className="">
                            <Button type="danger">
                              <Link to="/pricing">Change Plan</Link>
                            </Button>
                          </span>
                        )}
                      </div>
                      <div className="col-md-8 col-sm-12 col-xs-12">
                        <div className="row ad-history">
                          <div className="col-md-12 bg-dark col-sm-4 col-xs-12">
                            <div className="user-stats px-0 pb-0">
                              <div className="inlineAds text-white">
                                <table className="table ">
                                  <tr>
                                    <th className="text-white py-0 pl-0">
                                      Ads Category
                                    </th>
                                    <th className="text-white py-0 pl-0">
                                      Ads Type
                                    </th>
                                    <th className="text-white py-0 pl-0">
                                      Ads Posted
                                    </th>
                                    <th className="text-white py-0 pl-0">
                                      Ads Left
                                    </th>
                                    <th className="text-white py-0 pl-0">
                                      Favourites Ads
                                    </th>
                                    <th className="text-white py-0 pl-0">
                                      Total Blogs
                                    </th>
                                  </tr>

                                  {staticLoader ? (
                                    <div class="loader"></div>
                                  ) : (
                                    <tr>
                                      {[data]?.map((val, index) => {
                                        return (
                                          <td className="pl-0">
                                            {val?.totalPlan}

                                            {/* {data.hasOwnProperty("totalPlan") &&
                                              Object.keys(val?.totalPlan)?.map(
                                                (planValue, index) => {
                                                  return (
                                                    <p
                                                      key={index}
                                                      className="text-white p-0 mb-1"
                                                    >
                                                      category {planValue}
                                                    </p>
                                                  );
                                                }
                                              )} */}
                                          </td>
                                        );
                                      })}
                                      <td className="text-center bg-transparent">
                                        {[data]?.map((val) => {
                                          <small className="text-white">
                                            {/* {Object.keys(val?.postAdsForm).map(
                                              (val) => (
                                                <li className="text-wite">
                                                  {val}
                                                </li>
                                              )
                                            )} */}
                                            {/* {Object.keys(val?.postAdsForm)?.map(
                                              (val) => (
                                                <h1>hello</h1>
                                              )
                                            )} */}
                                          </small>;
                                        })}
                                      </td>
                                      <td className="text-center bg-transparent">
                                        {data.hasOwnProperty(
                                          "planDataDetails"
                                        ) &&
                                          [data].map((val, index) => {
                                            return (
                                              <p
                                                key={index}
                                                className="text-white p-0  mb-1"
                                              >
                                                {
                                                  val.planDataDetails?.Free
                                                    ?.PostedregualAds
                                                }
                                              </p>
                                            );
                                          })}
                                        {/* {allAdsCount.hasOwnProperty(
                                              "totalCount"
                                            ) &&
                                              Object.keys(val?.totalCount).map(
                                                (planValue, index) => {
                                                  return (
                                                    <p
                                                      key={index}
                                                      className="text-white p-0  mb-1"
                                                    >
                                                      {
                                                        val?.totalCount?.[
                                                          planValue
                                                        ]?.[0]
                                                      }
                                                    </p>
                                                  );
                                                }
                                              )} */}
                                      </td>
                                      <td className="text-center">
                                        {/* {allAdsCount.hasOwnProperty(
                                          "totalCount"
                                        ) &&
                                          Object.keys(val?.totalCount).map(
                                            (planValue, index) => {
                                              return (
                                                <p
                                                  key={index}
                                                  className="text-white p-0 mb-1 pl-1"
                                                >
                                                  {
                                                    val?.totalCount?.[
                                                      planValue
                                                    ]?.[1]
                                                  }
                                                </p>
                                              );
                                            }
                                          )} */}
                                      </td>
                                      <td className="bg-transparent text-white text-center">
                                        {" "}
                                        {localStorage.getItem("wishlist")
                                          ? JSON.parse(decrypt("wishlist"))
                                              .length
                                          : 0}
                                      </td>
                                      <td className="text-center text-white">
                                        {Blog.length}
                                      </td>
                                    </tr>
                                  )}
                                </table>
                              </div>
                            </div>
                          </div>
                          {/* <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="user-stats">
                              <h2>
                                {localStorage.getItem("wishlist")
                                  ? JSON.parse(decrypt("wishlist")).length
                                  : 0}
                              </h2>
                              <small>Favourites Ads</small>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="user-stats">
                              <h2>{Blog.length}</h2>
                              <small>Total Blogs</small>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="dashboard-menu-container">
              <ul>
                <li className="active">
                  <Link to="/dashboard/profile/">
                    <div className="menu-name"> Profile </div>
                  </Link>
                </li>
                <li>
                  <Link to="/aboutUs/">
                    <div className="menu-name">Contactus</div>
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
                    <div className="menu-name">Search Ads</div>
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
            </div>
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
