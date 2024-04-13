import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db, storage } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import validator from "validator";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import GetNumber from "./GetNumber";
import { BsFillTelephoneFill } from "react-icons/bs";
import { url } from "./../../env";
// import ClipLoader from "react-spinners/ClipLoader";
// import { CircleLoader } from "react-spinners";
// import Spiner from "../../Spiner";
// import SpinnerCenter from"../../SpinnerCenter";

// import SpinnerCenter from "../../SpinnerCenter";
import { connect, useDispatch } from "react-redux";
import { addToCart } from "../../../actions/action";
import Header, { callingloginCheck } from "../../Base/Header";
import { UserContext } from "../../../App";
import { UserProfile } from "../../../store/userIdSlice";
import { Space, Spin } from "antd";
const clientId = "Your-Client-Id";
const mapStateToProps = (state) => ({
  // data:state.cardItems
});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});

const Login = (props) => {
  const mobileStyle = {};
  const desktopStyle = {
    marginTop: "7px",
  };
  const user1 = useContext(UserContext);
  const navigate = useNavigate();
  const [loginform, setloginform] = useState({
    email: "",
    password: "",
    tc: true,
  });
  const [loaderAnt, setloaderAnt] = useState(false);
  const [loader, setLoader] = useState(false);
  const [passwordShown, setPasswordShown] = useState();
  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };
  const [success, setSuccess] = useState("");
  const [error, setError] = useState(null);
  const [user, setUser] = useState({});
  const [checkbox, setCheckbox] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoader(true);
    localStorage.setItem("userid", 2);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("access_token")
    );

    var formdata = new FormData();

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "api/user/profile", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("userid", 2);
        setLoader(false);
      });
    setLoader(false);
  }, []);
  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  const loginEmail = (obj, userObject) => {
    setloaderAnt(true);
    setLoader(true);

    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "csrftoken=EmLuPRUNkf6K6gJITHLqCb44GCBa3XdZbwQ9z0697rglSv3GfLbtztOqBKdfAxaB"
    );

    var formdata = new FormData();
    formdata.append("email", userObject.email);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "api/user/verifyEmailLogin/", requestOptions)
      .then((response) => response.json())

      .then((result) => {
        localStorage.setItem("access_token", result.token.access);
        user1.setTokenValue(result.token.access);
        user1.changeTheme(true);
        setLoader(false);

        if (localStorage.getItem("navigateurl")) {
          navigate(localStorage.getItem("navigateurl"));

          localStorage.removeItem("navigateurl");
          user1.changeTheme(true);
        } else {
          dispatch(UserProfile(localStorage.getItem("access_token")));
          navigate("/dashboard");
        }
        setloaderAnt(false);
      })
      .catch((error) => setError("something went wrong"));
    setLoader(false);
  };
  async function handleCallbackResponse(response) {
    setLoader(true);
    setloaderAnt(true);
    var userObject = jwt_decode(response.credential);
    //firebase login with google
    console.log(userObject, "userObject");
    let email = userObject?.email;
    let displayName = userObject?.name;
    let password = userObject?.email.slice(0, 8);
    console.log("password", password);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res, "login with firebase google");
      localStorage.setItem("uuid", res?.user?.uid);
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      const userData = await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        photoURL: userObject.picture,
      });
      const userChatRoom = await setDoc(doc(db, "userChats", res.user.uid), {});
    } catch (error) {
      console.log("firebase error", error);
      const res = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("uuid", res?.user?.uid);
      console.log(res, "login with firebase google already login");
    }

    var formdata = new FormData();
    formdata.append("name", userObject.name);
    formdata.append("email", userObject.email);
    formdata.append("password", "18290178032892083029830@@@####)@(@((@@#");
    formdata.append("password2", "18290178032892083029830@@@####)@(@((@@#");
    formdata.append("tc", "true");
    formdata.append("phoneNumber", "null");
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    setLoader(true);

    fetch(url + "api/user/register/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result?.errors?.email) {
          loginEmail(result, userObject);
        } else {
          localStorage.setItem("access_token", result.token.access);
          user1.setTokenValue(result.token.access);
          dispatch(UserProfile(localStorage.getItem("access_token")));
          navigate("/dashboard");
        }
        setloaderAnt(false);
        setLoader(false);
        user1.changeTheme(true);
      })
      .catch((error) => setError("something went wrong"));
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
    setLoader(false);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "712525820153-naetp2au8v8fpffj6sh4bvdegqolt53g.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    // google.accounts.id.prompt();
  }, []);
  const [emptyEmail, setemptyEmail] = useState(null);
  const [emptyPass, setemptyPass] = useState(null);
  // const [emptyCheck, setemptyCheck] = useState(null);
  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    console.log("emai error", name);
    if (name === "email" && value === "") {
      console.log("email should nbot be emoty", name, value);
      setemptyEmail(value);
    } else if (name === "password" && value === "") {
      console.log("password should nbot be emoty", name, value);
      setemptyPass(value);
    } else {
      setemptyPass(value);
      setemptyEmail(value);
    }
    setloginform({ ...loginform, [name]: value });
  };
  console.log(emptyEmail == "");
  const handleSubmit = async (e) => {
    // debugger
    e.preventDefault();
    setloaderAnt(true);
    setLoader(true);
    if (
      !validator.isEmpty(loginform.email) &&
      !validator.isEmpty(loginform.password) &&
      checkbox
    ) {
      if (!validator.isEmail(loginform.email)) {
        setError("email is need to validate");
        setLoader(false);
        setloaderAnt(false);
      } else {
        setError("");

        var requestOptions = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginform),
          // body: contactform,
          redirect: "follow",
        };
        setloaderAnt(true);
        // e.preventDefault();
        const email = loginform.email;
        const password = loginform.email.slice(0, 8);

        fetch(url + "api/user/login/", requestOptions)
          .then((response) => response.json())
          .then(async (result) => {
            setloaderAnt(false);
            console.log("result", result);
            if (result?.errors?.non_field_errors) {
              setError(result.errors.non_field_errors[0]);
              setLoader(false);
            } else {
              try {
                const res = await signInWithEmailAndPassword(
                  auth,
                  email,
                  password
                );
                console.log("login with user email and password", res);
                localStorage.setItem("uuid", res?.user?.uid);
                // navigate("/");
              } catch (err) {
                console.log("firebase error login components", err);
              }
            }

            localStorage.setItem("access_token", result.token.access);
            setLoader(false);
            setloaderAnt(false);
            if (localStorage.getItem("navigateurl")) {
              navigate(localStorage.getItem("navigateurl"));
              localStorage.removeItem("navigateurl");
              setLoader(false);
              setloaderAnt(false);
            } else {
              callingloginCheck();
              user1.changeTheme(true);
              localStorage.setItem("login", true);
              setloaderAnt(false);

              dispatch(UserProfile(localStorage.getItem("access_token")));
              navigate("/dashboard");
            }
            // setloaderAnt(false)
          })
          .catch((error) => console.log("error", error));
        setLoader(false); //means direct after fetch api
        // setloaderAnt(false)
      }
    } else {
      if (loginform.email == "" && loginform.password == "") {
        setError("Please Enter The Email Id and Password");
        setLoader(false);
        setloaderAnt(false);
      } else if (loginform.email == "") {
        setError("Email is empty");
        setLoader(false);
        setloaderAnt(false);
      } else if (loginform.password == "") {
        setLoader(false);
        setloaderAnt(false);
        setError("Password is empty");
      } else if (checkbox == "") {
        setLoader(false);
        setloaderAnt(false);
        setError("please select the checkbox");
      }
      // setError("* Please enter all field!!")
      setLoader(false); //no mean (delete)
    }
  };

  function validateForm(e) {
    const checked = e.target.checked;
    //  debugger
    if (checked) {
      setLoader(false);

      // setloaderAnt(true)
      setCheckbox(true);
    } else {
      setloaderAnt(false);
      setLoader(false);
      setCheckbox(false);
    }
    // if(!form.agree.checked)
    // {
    //     document.getElementById('agree_chk_error').style.visibility='visible';
    //     return false;
    // }
    // else
    // {
    //     document.getElementById('agree_chk_error').style.visibility='hidden';
    //     return true;
    // }
  }
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  document.title = "RotateKey - Login";
  return (
    <>
      {/* {loader && <Spiner />} */}
      {
        <section className="section-padding gray">
          <Space
            direction="vertical"
            style={{
              width: "100%",
            }}
          >
            <Spin tip="Loading..." spinning={loaderAnt}>
              <div className="container p-4">
                <div className="row">
                  <div
                    className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2"
                    style={{
                      marginTop: "-90px",
                      marginBottom: "-80px",
                      border: "1px solid #ffffff24",
                      borderRadius: "5px",
                      boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
                      backgroundColor: "white",
                    }}
                  >
                    {/*  Form */}
                    <div className="form-grid">
                      <div
                        className="row"
                        style={{ marginTop: "20px", textAlign: "center" }}
                      >
                        <div className="col-lg-6 mb-1">
                          <a
                            href="#popup1"
                            className="btn fs-14 text-white"
                            style={{
                              fontSize: "14px",
                              padding: "10px",
                              width: "200px",
                            }}
                          >
                            <span style={{ padding: "-2px" }}>
                              <BsFillTelephoneFill className="fs-14 mb-1" />
                            </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mobile Number
                          </a>
                        </div>
                        <div
                          className="col-lg-3"
                          style={isMobile ? mobileStyle : desktopStyle}
                        >
                          <a>
                            {/* <span className="fa fa-google" />  */}
                            <div id="signInDiv"></div>
                            {Object.keys(user).length !== 0 && (
                              <button onClick={(e) => handleSignOut(e)}>
                                Sign Out
                              </button>
                            )}

                            {user && (
                              <div>
                                <img src={user.picture} alt=""></img>
                                <h3>{user.name}</h3>
                              </div>
                            )}
                          </a>
                        </div>
                      </div>

                      <h2
                        className="no-span"
                        style={{ marginTop: "-15px", color: "#00000085" }}
                      >
                        <b>(OR)</b>
                      </h2>
                      <div
                        id="popup1"
                        className="overlay"
                        style={{ borderRadius: "5px" }}
                      >
                        <div
                          className="popup"
                          style={{ height: "auto", borderRadius: "10px" }}
                        >
                          <GetNumber />
                        </div>
                      </div>
                      <div className="form-group">
                        <label style={{ marginBottom: "-15px" }}>Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={loginform.email}
                          onChange={handleChange}
                          placeholder="Enter Your Email "
                          className="form-control"
                        />
                        {emptyEmail === "" ? (
                          <small className="text-danger">
                            Please Input Your Email
                          </small>
                        ) : !loginform.email == "" &&
                          !validator.isEmail(loginform.email) ? (
                          <small className="text-danger">
                            Email Need To Be Validate"
                          </small>
                        ) : null}
                      </div>

                      <div className="form-group">
                        <div class="row" style={{ marginBottom: "-15px" }}>
                          <div class="col-6">
                            {" "}
                            <label>Password</label>
                          </div>
                          <div class="col-6">
                            <b
                              className="fs-12 text-decoration-underline text-right"
                              onClick={togglePassword}
                            >
                              Show Password
                            </b>
                          </div>
                        </div>

                        <input
                          type={passwordShown ? "text" : "password"}
                          id="password"
                          name="password"
                          value={loginform.password}
                          onChange={handleChange}
                          placeholder="Enter Password"
                          className="form-control"
                        />
                        {emptyPass === "" ? (
                          <small className="text-danger">
                            Please Input Your Password
                          </small>
                        ) : null}

                        <div className="row">
                          <div class="col-6">
                            <Link
                              to="/forgot-pswd/"
                              data-target="#myModal"
                              data-toggle="modal"
                              className="my-1 fs-14"
                            >
                              Forgot password?
                            </Link>
                          </div>
                          <div class="col-6 text-right">
                            <Link
                              to="/signup"
                              data-target="#myModal"
                              data-toggle="modal"
                              className="my-1 fs-14"
                            >
                              Create an account ?
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="row" style={{ marginTop: "5px" }}>
                          <div className="col-lg-12 col-xs-12 col-sm-12">
                            <input
                              type="checkbox"
                              name="agree"
                              id="agree"
                              value="true"
                              onChange={validateForm}
                            />

                            <label for="agree">
                              I agree to the terms and conditions
                            </label>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={handleSubmit}
                        className="custom-btn btn-15 Login"
                        style={{ marginBottom: "10px", marginTop: "-10px" }}
                      >
                        Login
                      </button>
                      {success ? (
                        <div className="text-success">{success}</div>
                      ) : null}
                      {error ? (
                        <div className="text-danger">{error}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </Spin>
          </Space>
        </section>
      }
    </>
  );
};

export default Login;
