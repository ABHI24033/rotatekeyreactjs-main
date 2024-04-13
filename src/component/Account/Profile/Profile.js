import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import validator from "validator";
import { localUrl, stateMain } from "../../env";
import Spiner from "../../Spiner";
import { decrypt } from "../../Base/encryptDecrypt/encryptDecrypt";
import FileBase64 from "react-file-base64";
import { Button, Modal, Select, Space } from "antd";
import { getUserProfileData } from "../../../store/UserProfileDetailsSlice";
// import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ImageUpload from "./imageUpload";
import { add } from "../../../store/Track/trackUserSlice";
import { CreateAds } from "../../../error/errorMessage";
import { userProfileDataApi } from "../../../store/UserProfileDetailsSlice";

// import { useSlider } from "@mui/base";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";
// import {render} from "../../../store/reRenderDashboard"
function validateInputNumber(event) {
  var key = window.event ? event.keyCode : event.which;
  if (event.keyCode == 8 || event.keyCode == 46
    || event.keyCode == 37 || event.keyCode == 39) {
    return true;
  }
  if (key < 48 || key > 57) {
    return false;
  }
  if (["e", "E", "+", "-", "."].includes(event.key)) {
    return false;
  }
  return true;
};

const { Option } = Select;

const Profile = ({ businessPlan }) => {
  // const { databusiness } = props;
  // const[business,setBusiness]=useState(true)

  const { userid } = useContext(UserContext);
  // console.log(user, "userprofile");
  const data = [];
  let navigate = useNavigate();
  //getting data from userProfileDetails
  const userProfileData = useSelector((state) => state.userProfileData);
  const [newError, setNewError] = useState(false);
  const [state, setState] = useState({
    state: userProfileData?.data[0]?.fields?.state,
  });
  const [updateState, setUpdateState] = useState(null);
  const [cityWithState, setCityWithState] = useState(null);
  const [cityErr, setCityErr] = useState(false);
  const [city, setCity] = useState({
    city: userProfileData?.data[0]?.fields?.city,
  });

  const [zipcode, setZipcode] = useState({
    zipcode: userProfileData?.data[0]?.fields?.zipcode,
  });
  const [afterSubmitFlg, setAfterSubmitflag] = useState(false);

  const [id, setId] = useState();
  const [loader, setLoader] = useState(false);
  const [loaderApi, setLoaderApi] = useState(false);
  const [success1, setSuccess] = useState(false);
  const [error, setError] = useState("");
  // const [users, setUsers] = useState([]);
  const [image, setImage] = useState(null);
  useEffect(() => {
    Object.keys(stateMain)?.filter((val) => {
      if (val === updateState) {
        setCityWithState(stateMain[val]);
      }
    });
  }, [updateState]);
  useEffect(() => {
    let s = decrypt("userdata");
    dispatch(userProfileDataApi(s.id));
  }, []);

  const imageValue = useSelector((state) => state.profile);
  const [profileform, setprofileform] = useState({
    name: null,
    email: null,
    PhoneNumber: userProfileData?.data[0]?.fields?.PhoneNumber,
    address: userProfileData?.data[0]?.fields?.address,
    // state: userProfileData?.data[0]?.fields?.state,
    // city: userProfileData?.data[0]?.fields?.city,
    zipcode: userProfileData?.data[0]?.fields?.zipcode,
    user: userProfileData?.data[0]?.fields?.user,
    image: userProfileData?.data[0]?.fields?.image,
  });
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("access_token")
    );
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(localUrl + "user/profile/", requestOptions)
      .then((response) => response.json())
      .then((result) => setId(result.id))
      .catch((error) => {
        setError("Something went wrong..");
      });
    // profileData();
  }, []);

  const handleStateChange = (value) => {
    setUpdateState(value);
    if (Object.keys(stateMain)?.includes(value)) {
      setNewError(false);
    } else {
      setNewError(true);
    }
    setState({
      ...state.state,
      state: value,
    });
    setCity("")
  }



  // const profileData = () => {
  //   let s = decrypt("userdata");
  //   var formdata = new FormData();
  //   formdata.append("idvalues", s.id);

  //   var requestOptions = {
  //     method: "POST",
  //     body: formdata,
  //     redirect: "follow",
  //   };

  //   fetch(localUrl + "user/updateProfileApi/", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       if (result) {
  //         let resultvalue = result[0];
  //         profileform.PhoneNumber = resultvalue.fields.PhoneNumber;
  //         profileform.address = resultvalue.fields.address;
  //         profileform.state = resultvalue.fields.state;
  //         profileform.city = resultvalue.fields.city;
  //         profileform.zipcode = resultvalue.fields.zipcode;
  //         profileform.user = resultvalue.fields.user;
  //         setImage(resultvalue?.fields?.image)
  //         setprofileform(profileform);
  //       } else {
  //         // return null;
  //       }
  //     })
  // };

  useEffect(() => {
    if (localStorage.getItem("access_token") != null) {
      let barererToken = "Bearer " + localStorage.getItem("access_token");
      var myHeaders = new Headers();
      myHeaders.append("Authorization", barererToken);

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      setLoader(true);
      fetch(localUrl + "user/profile/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          // setprofileform(profileform.name=result.name)
          setName(result.name);
          // localStorage.setItem("name",result.name)
          namevalue = result.name;
          setEmail(result.email);
          emailvalue = result.email;
          // let name="name"
          // let value=name
          // setprofileform({ ...profileform, [name]: value });
          setId(result.id);
          localStorage.setItem("userid", result.id);
          setLoader(false);
        })
        .catch((error) => setError("Something went wrong"));
    }
  }, []);
  var namevalue = "";
  var emailvalue = "";
  // for re render dashboard
  const [rerenderValue, setRerenderValue] = useState(0);
  const handleChange = (e) => {
    setError("");
    var name = e.target.name;
    var value = e.target.value;

    if (profileform["name"]?.length < 1) {
      name = "name";
      value = namevalue;
      // localStorage.removeItem("name")
    }
    setprofileform({ ...profileform, [name]: value });
  };

  let success = () => {
    Modal.success({
      content: "Your profile has updated successfully.",
      // onOk:(()=>{setRerenderValue(preVal=>!preVal)})
      onOk: () => {
        navigate("/dashboard");
        // dispatch(render())
      },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoaderApi(true);
    let elements = Array.from(e.target.elements)
    // report javascript validation errors
    let isAnyinvalid = elements.some(ele => !ele.checkValidity())
    if (isAnyinvalid) {
      setError("Please fill the inputs");
      return
    }
    if (zipcode.zipcode.length < 6 || profileform.PhoneNumber?.length < 10 || profileform.name?.length < 1) {
      setError("Please fill the inputs");
      return
    }
    if (!validator.isEmpty(profileform.PhoneNumber) !== "") {
      if (!validator.isMobilePhone(profileform.PhoneNumber)) {
        setError("Please enter valid number only");
      } else {
        // profileform["image"] = imageValue[0];
        profileform.email = email;
        profileform.name = name;
        profileform.user = id;

        // let objFinalObj={image:imageValue[0],email,name,id,state:state.state,city:city.city,zipcode:zipcode.zipcode,address:profileform.address,PhoneNumber:profileform.PhoneNumber}
        var formdata = new FormData();
        formdata.append("name", name);
        formdata.append("email", email);
        formdata.append("user", id);
        formdata.append("state", state.state);
        formdata.append("city", city.city);
        formdata.append("zipcode ", zipcode?.zipcode);
        formdata.append("PhoneNumber", profileform?.PhoneNumber);
        // formdata.append("image", imageValue[0]);
        formdata.append("address", profileform?.address);

        if (imageValue.length > 0) {
          formdata.append("image", imageValue[0]);
        }

        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow",
        };

        fetch(localUrl + "user/updateProfileApi/", requestOptions)
          .then((result) => result.text())
          .then((result) => {
            dispatch(userProfileDataApi(userid));
            console.log(userid, "uu");

            setLoaderApi(false);
            if (result == "success") {
              success(() => {
                Modal.success({
                  content: "Store Successfully",
                  onOk: (e) => {
                    navigate("/");
                  },
                });
              });
              // return setSuccess(true);
            }
          });
      }
    } else {
      setError("All filed are required");
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(add({ view: ["Profile"] }));
  }, []);
  document.title = "Rotatekey - Profile";

  return (
    <>
      <div>
        <div id="content">
          {/* <div id="content" className="section-padding" > */}
          {loader && <Spiner />}
          {loaderApi && <Spiner />}
          {!loader && (
            <div
            // style={{
            //   paddingLeft: "100px",
            //   paddingRight: "100px",
            //   width: "100%",
            //   paddingTop: "20px",
            // }}
            >
              {/* {!loader && <div className="container"> */}
              <div className="row">
                <div className="col-lg-2"></div>
                <div
                  className="col-sm-12 col-md-12 col-lg-8"
                  style={{ marginTop: "-10px" }}
                >
                  <div className="page-content">
                    <div className="inner-box">
                      <div className="tg-contactdetail">
                        <div className="dashboard-box">
                          <h2 className="dashbord-title mt-2">
                            Update Profile
                          </h2>
                        </div>

                        <div className="listing-box " id="contact">
                          <div className="field-group">
                            <ImageUpload image={image} />
                            {/* <label>Image</label>
                        <input
                          type="file"
                          className="form-control"
                          onChange={(e) =>{ setImage(e.target.files[0])}} 
                        /> */}
                          </div>
                          <form
                            onSubmit={handleSubmit}
                          >
                            <div className="field-group">
                              <label htmlFor="name">Name:</label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                className="form-control p-2"
                                placeholder="Enter Name"
                                disabled
                              />
                            </div>

                            <div className="field-group">
                              <label htmlFor="name">Email:</label>
                              <input
                                type="text"
                                id="email"
                                name="email"
                                value={email}
                                className="form-control p-2"
                                placeholder="Enter Name"
                                disabled
                              />
                            </div>

                            <div className="field-group">
                              <label htmlFor="name">Phone Number:</label>
                              <input
                                type="text"
                                id="PhoneNumber"
                                name="PhoneNumber"
                                maxlength={10}
                                minLength={10}
                                onInput={(e) => {
                                  if (e.target.value.length > e.target.maxLength)
                                    e.target.value = e.target.value.slice(
                                      0,
                                      e.target.maxLength
                                    );
                                }}
                                onKeyDown={(e) =>
                                  !validateInputNumber(e) && e.preventDefault()
                                }
                                value={profileform?.PhoneNumber}
                                onChange={handleChange}
                                className="form-control p-2"
                                placeholder="Enter Phone Number"
                              />
                              {profileform?.PhoneNumber?.length < 10 &&
                                profileform?.PhoneNumber?.length > 0 ? (
                                <span className="text-danger ml-2">
                                  Enter valid Number
                                </span>
                              ) : profileform?.PhoneNumber?.length > 10 ? (
                                <span className="text-danger ml-2">
                                  Enter only 10 digit Number
                                </span>
                              ) : !profileform?.PhoneNumber && afterSubmitFlg ? (
                                <span className="text-danger ml-2">
                                  {CreateAds.PhoneNumber}
                                </span>
                              ) : null}
                            </div>
                            {businessPlan ? <div>
                       " aading extra fields of edit profile"
                          </div>:
<div>
                            <div className="field-group">
                              <label>Address:</label>
                              <textarea
                                name="address"
                                placeholder="enter address here"
                                value={profileform.address}
                                required
                                onChange={handleChange}
                                className="form-control p-2"
                                rows="4"
                                cols="50"
                              ></textarea>
                            </div>

                            <div className="field-group">
                              <label>State:</label>
                             <Select
                               style={{ width: '100%' }}                          
                                showSearch
                                name="state"
                                placeholder="enter state here"
                                value={state.state}
                                required
                               allowClear 
                               onChange={handleStateChange}   
                                getPopupContainer={(triggerNode) => triggerNode.parentNode}   
                              >
                              {Object.keys(stateMain)?.map((result) => (
                                <Option key={result} value={result}>
                                  {result}
                                </Option>
                              ))}
                            </Select>
                            {state && newError ? (
                              <small className="text-danger ml-2">
                                *Choose right state
                              </small>
                            ) : newError == true ? null : !state && afterSubmitFlg ? (
                              <span className="text-danger ml-2">
                                {CreateAds.State}
                              </span>
                            ) : null}

                            </div>

                            <div className="field-group">
                              <label>City</label>
                              <Select
                               style={{ width: '100%' }}
                               
                               name="city"
                               placeholder="Enter city here"
                               value={city.city}
                               required
                               onChange={(value, option) => {
                                 if (cityWithState.includes(value)) {
                                   setCityErr(false);
                                 } else {
                                   setCityErr(true);
                                 }
                                 setCity({ ...city, [option.props.name]: value });
                                }}
                               getPopupContainer={(trigger) => trigger.parentNode} 
                               allowClear 
                                showSearch 
                                >
                               {updateState &&
                               cityWithState?.map((result) => {
                                  return (
                                    <Option key={result} name="city" value={result}>
                                     {result}
                                   </Option>
                                 );
                               })}
                            </Select>

                            {city && cityErr ? (
                             <span className="text-danger ml-2">Choose the right city</span>
                                ) : !city && afterSubmitFlg ? (
                          <span className="text-danger ml-2">{CreateAds.City}</span>
                                ) : null}
                            </div>

                            <div className="field-group">
                              <label>Zipcode</label>
                              <input
                                type="text"
                                name="zipcode"
                                placeholder="enter zipcode here"
                                maxLength={6}
                                minLength={6}
                                required
                                onInput={(e) => {
                                  if (e.target.value?.length > e.target?.maxLength)
                                    e.target.value = e.target.value.slice(
                                      0,
                                      e.target?.maxLength
                                    );
                                }}
                                onKeyDown={(e) =>
                                  !validateInputNumber(e) && e.preventDefault()
                                }
                                value={zipcode.zipcode}
                                onChange={(e) =>
                                  setZipcode({
                                    ...zipcode.zipcode,
                                    [e.target.name]: e.target.value,
                                  })
                                }
                                className="form-control p-2 border-0"
                              />
                              {zipcode?.zipcode?.length !== 6 &&
                                zipcode?.zipcode?.length > 0 ? (
                                <span className="text-danger ml-2">
                                  Please enter valid zipcode
                                </span>
                              ) : zipcode?.length > 6 ? (
                                <span className="text-danger ml-2">
                                  Please enter valid zipcode
                                </span>
                              ) : !zipcode && afterSubmitFlg ? (
                                <span className="text-danger ml-2">
                                  {CreateAds.ZipCode}
                                </span>
                              ) : null}
                            </div></div>}
                          
                         
                            <button
                              type="submit"
                              className="custom-btn btn-1"
                              style={{
                                margin: "20px -8px",
                                color: "White",
                                width: "120px",
                                marginLeft: "3px",
                              }}
                            >
                              <span>SUBMIT</span>
                              {/* <span>Save</span> */}
                            </button>
                            {/* {loaderApi && <div onLoad={success}></div>} */}
                            {success1 ? (
                              <div className="text-success">
                                Store successfully
                              </div>
                            ) : null}
                            {error ? (
                              <div className="text-danger">{error}</div>
                            ) : null}

                          </form>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
