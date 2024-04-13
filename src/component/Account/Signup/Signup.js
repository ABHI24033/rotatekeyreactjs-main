import React, { useContext } from "react";
import { useState, useEffect } from "react";
import validator from "validator";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import GetNumber from "../Login/GetNumber";
import { localUrl, url } from "../../env";
import { BsFillTelephoneFill } from "react-icons/bs";
import Spiner from "../../Spiner";
// import PricingCheckUser from "../../../context/PricingCheckUser";
import { UserContext } from "../../../App";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../../store/Track/trackUserSlice";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import Attach from "./Attach.png";
// import ads from "../../../../images/ads.jpg";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, db, storage } from "../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

// import { postApi } from "../../../store/signup";

const Signup = (props) => {
  const mobileStyle = {};
  const desktopStyle = {
    marginTop: "7px",
  };
  const [otpPhone, setOtpPhone] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [captchaResult, setCaptchaResult] = useState();
  const [signupform, setsignupform] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    tc: true,
    phoneNumber: null,
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const [ErrorOTp, setErrorOTp] = useState(false);
  const [flag, setFlag] = useState(true);
  const [enterotp, setEnterotp] = useState(null);
  const [otp, setOtp] = useState(null);
  const [emailExist, setEmailExist] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState(null);
  const [user, setUser] = useState({});
  const [checkbox, setCheckbox] = useState(false);
  const user1 = useContext(UserContext);

  const signUpSelector = useSelector((state) => state.signUpSlice);
  // var verifyEmail=false

  //passing value from login phoneverification to signup
  useEffect(() => {
    if (props?.props === "passingValue") {
      setOtpPhone(true);
    }
  }, []);
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

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  const loginEmail = (obj, userObject) => {
    var formdata = new FormData();
    formdata.append("email", userObject.email);
    // formdata.append("password", "18290178032892083029830@@@####)@(@((@@#");
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(localUrl + "user/verifyEmailLogin/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result?.errors?.email) {
          setError(result.errors.email[0]);
        } else if (result?.errors?.non_field_errors) {
          setError(result.errors.non_field_errors[0]);
        } else {
          localStorage.setItem("access_token", result.token.access);
          user1.setTokenValue(result.token.access);
          navigate("/dashboard");
        }

        setError(null);
      })
      .catch((error) => setError("somthing went wrong"));
    // navigate("/dashboard")
  };
  async function handleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential);
    console.log(userObject, "userObject");
    // signup with firebase chat
    let email = userObject?.email;
    let displayName = userObject?.name;
    let password = userObject?.email.slice(0, 8);
    console.log("password", password);
    let password2 = userObject?.family_name + userObject?.given_name;
    console.log("password2", password2);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res, "create account signup page  with help google");
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
      console.log(
        "in signup component google create acount id user already exists",
        res
      );
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

    fetch(localUrl + "user/register/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result?.errors?.email) {
          loginEmail(result, userObject);
        }
        localStorage.setItem("access_token", result.token.access);
        user1.setTokenValue(result.token.access);
        navigate("/dashboard/");
      })
      .catch((error) => setError("Something went wrong!"));

    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  const checkingmethod = (result) => {
    if (!result?.token?.access) {
      setFlag(false);
      setError("");
      var val = Math.floor(1000 + Math.random() * 9000);
      console.log(val, "kjkj");
      // let body1= '{"toAddress":"anuj840084@gmail.com","title":"hola9 Verification","message":"This is your <b>otp 123121</b>!"}'
      let body12 =
        '{"toAddress":"' +
        signupform.email +
        '","title":"RotateKey Verification","message":"This is your <b>' +
        val +
        '</b>!"}';
      setOtp(val);
      const options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "3d00e6d5bcmsha491cf18c61b444p100fccjsnf019021bff58",
          "X-RapidAPI-Host": "hourmailer.p.rapidapi.com",
        },
        body: body12,
      };

      fetch("https://hourmailer.p.rapidapi.com/send", options)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => setError("something went wrong!!"));
    } else {
    }
  };
  const verifyemail = async () => {
    var valuecheck;
    var formdata = new FormData();
    formdata.append("email", signupform.email);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    setLoading(true);
    await fetch(url + "api/user/verifyEmail/", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        //  setError("Email already Exist")
        //  navigate('/login/')
        // setEmailExist(result)
        {
          result == "already exist"
            ? setError("Email already exist")
            : checkingmethod(result);
        }
      })
      .catch((error) => setError(error.message));

    setLoading(false);
    return valuecheck;
  };
  //GOOGLE LOGIN//
  const handleRecaptcha = (value) => {
    fetch(url + "recaptcha/", {
      method: "POST",
      body: JSON.stringify({ captcha_value: value }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setCaptchaResult(data.captcha.success);
      });
  };

  const [emptyName, setemptyName] = useState(null);
  const [emptyEmailSignup, setemptyEmailSignup] = useState(null);
  const [emptyPassSignup, setemptyPassSignup] = useState(null);
  const [emptyConfirmPassSignup, setemptyConfirmPassSignup] = useState(null);

  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    if (name === "name" && value === "") {
      setemptyName(value);
    } else if (name === "email" && value === "") {
      setemptyEmailSignup(value);
    } else if (name === "password" && value === "") {
      setemptyPassSignup(value);
    } else if (name === "password2" && value === "") {
      setemptyConfirmPassSignup(value);
    } else {
      setemptyName(value);
      setemptyEmailSignup(value);
      setemptyPassSignup(value);
      setemptyConfirmPassSignup(value);
    }

    setsignupform({ ...signupform, [name]: value });
  };
  //firebase login
  const handerotpVerify = async () => {
    const displayName = signupform.name;
    const email = signupform.email;
    const password = signupform.email.slice(0, 8);
    const password2 = password;
    const file = {
      lastModified: 1676441887824,
      name: { Attach },
      size: 39727,
      type: "image/png",
      webkitRelativePath: "",
    };
    // e.target[3].files[0];

    try {
      //Create user
      debugger;
      const res = await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem("uuid", res?.user?.uid);
      //Create a unique image name
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        photoURL: "",
      });

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            // setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      // setErr(true);
      setLoading(false);
    }
    if (otp?.toString() === enterotp || otpPhone) {
      if (localStorage.getItem("phoneNumber") != null) {
        signupform["phoneNumber"] = localStorage.getItem("phoneNumber");
      } else {
        signupform["phoneNumber"] = "null";
      }
      var requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupform),
        redirect: "follow",
      };

      fetch(localUrl + "user/register/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result?.errors) {
            setError(result.errors?.email[0]);
          }
          localStorage.setItem("access_token", result.token.access);
          // if(otpPhone){
          //   storePhone(result.token.access)
          // }
          user1.changeTheme(true);
          if (user1.userid) {
            navigate("/dashboard/");
          } else {
            navigate("/pricing");
          }
        })
        .catch((error) => setError(error.message));
    } else {
      setErrorOTp(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !validator.isEmpty(signupform.name) &&
      signupform.email !== "" &&
      signupform.password !== "" &&
      signupform.password2 !== "" &&
      checkbox
    ) {
      if (!validator.isEmail(signupform.email)) {
        setError("email is need to validate");
      } else if (!validator.isByteLength(signupform.name, 3, 20)) {
        setError("name should not be more than 8 character");
      } else if (!validator.isStrongPassword(signupform.password)) {
        setError("this is not the strong password");
      } else if (signupform.password !== signupform.password2) {
        setError("Passwords and confirm password doesn't match");
      } else {
        if (otpPhone) {
          handerotpVerify();
        } else {
          verifyemail();
        }
      }
    } else {
      if (
        signupform.name == "" &&
        signupform.email == "" &&
        signupform.password == "" &&
        signupform.password2 == ""
      ) {
        setError("Please Fill the All Details");
      } else if (signupform.name == "") {
        setError("Name can not be empty");
      } else if (signupform.email == "") {
        setError("Email can not be empty");
      } else if (signupform.password == "") {
        setError("Password can not be empty");
      } else if (signupform.password2 == "") {
        setError("Confirm Password can not be empty");
      } else if (!checkbox) {
        setError("Please click on checkbox");
      }
      // setError("Please fillup all field");
    }
  };

  function validateForm(form) {
    const checked = form.target.checked;
    if (checked) {
      setCheckbox(true);
    } else {
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(add({ view: ["Signup"] }));
  }, []);
  document.title = "RotateKey - Register";
  return (
    <>
      <section style={{ marginTop: "80px" }}>
        <div className="container mb-3">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2"
              style={{ marginTop: "-80px", backgroundColor: "white" }}
            >
              <div
                className="form-grid"
                style={{
                  border: "1px solid #ffffff24",
                  borderRadius: "5px",
                  boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div className="text-center">{loading && <Spiner />}</div>
                {flag ? (
                  <form>
                    {!otpPhone ? (
                      <div>
                        <div
                          className="row"
                          style={{ marginTop: "-30px", textAlign: "center" }}
                        >
                          <div className="col-lg-6 mb-1">
                            <a
                              href="#popup1"
                              className="btn text-white fs-14 p-2 "
                              style={{ width: "200px" }}
                            >
                              <span
                                className="fs-14"
                                style={{ marginTop: "-2px" }}
                              >
                                <BsFillTelephoneFill />
                              </span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mobile Number
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

                        <div id="popup1" className="overlay">
                          <div className="popup" style={{ height: "auto" }}>
                            <GetNumber />
                          </div>
                        </div>
                        <h2
                          className="no-span"
                          style={{ marginTop: "-10px", color: "#00000085" }}
                        >
                          <b>(OR)</b>
                        </h2>
                      </div>
                    ) : null}
                    <div className="form-group" style={{ marginTop: "-10px" }}>
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={signupform.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter Name"
                        onKeyDown={(e) =>
                          [
                            "+",
                            "-",
                            ".",
                            "@",
                            "#",
                            "%",
                            "$",
                            ";",
                            ">",
                            "?",
                            "&",
                            "^",
                            "!",
                            "*",
                            "(",
                            ")",
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6",
                            "7",
                            "8",
                            "9",
                          ].includes(e.key) && e.preventDefault()
                        }
                        style={{
                          fontStyle: "monospace !important",
                          border: "1px solid red",
                          marginTop: "-18px",
                        }}
                      />
                      {emptyName === "" ? (
                        <small className="text-danger">
                          name cannot be empty
                        </small>
                      ) : null}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={signupform.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter Email"
                        style={{ marginTop: "-18px" }}
                      />
                      {emptyEmailSignup === "" ? (
                        <small className="text-danger">
                          Please Input Your Email
                        </small>
                      ) : null}
                      {!signupform.email == "" &&
                      !validator.isEmail(signupform.email) ? (
                        <small className="text-danger">
                          Email Need To Be Validate"
                        </small>
                      ) : null}
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Password</label>
                      <input
                        type={passwordShown ? "text" : "password"}
                        id="password"
                        name="password"
                        value={signupform.password}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter Password"
                        style={{ marginTop: "-18px" }}
                      />

                      {emptyPassSignup === "" ? (
                        <small className="text-danger">
                          Please Input Your Password
                        </small>
                      ) : null}
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Confirm Password</label>
                      <input
                        type={passwordShown ? "text" : "password"}
                        id="password2"
                        name="password2"
                        value={signupform.password2}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter Password"
                        style={{ marginTop: "-18px" }}
                      />
                      {emptyConfirmPassSignup === "" ? (
                        <small className="text-danger">
                          Please Input Your Confirm Password
                        </small>
                      ) : null}
                      {signupform.password2.length > 0 &&
                      signupform.password !== signupform.password2 ? (
                        <small className="text-danger">
                          Password And Confirm Password Doesn't Matching
                        </small>
                      ) : null}
                    </div>
                    <div
                      className="form-group d-flex justify-content-between"
                      style={{ marginTop: "-18px" }}
                    >
                      <button
                        className="btn-primary my-3 w-25 rounded"
                        onClick={togglePassword}
                      >
                        Show Password
                      </button>
                      <Link
                        to="/login"
                        data-target="#myModal"
                        data-toggle="modal"
                        className="text-right my-4"
                      >
                        Already have an account ?
                      </Link>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div
                          className="col-lg-12 col-xs-12 col-sm-7"
                          style={{ marginTop: "-18px" }}
                        >
                          <input
                            type="checkbox"
                            name="agree"
                            id="agree"
                            value="True"
                            required
                            onChange={validateForm}
                          />
                          <label for="agree">
                            I agree to the terms and conditions
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="cta">
                      {/* <ReCAPTCHA
            sitekey="6LeW3YYgAAAAANIitTPiSd313cwV5ZuJcNZM9h7I"
            onChange={handleRecaptcha}
          /> */}

                      {captchaResult && (
                        <button
                          type="submit"
                          onClick={(e) => {
                            handleSubmit(e);
                          }}
                        >
                          Submit
                        </button>
                      )}
                    </div>
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="custom-btn btn-15"
                      style={{ marginBottom: "10px", marginTop: "-18px" }}
                    >
                      Register
                    </button>
                    {success ? (
                      <div className="text-success">{success}</div>
                    ) : null}
                    {error ? (
                      <div className="text-danger">{error}</div>
                    ) : emailExist ? (
                      <div>email already exist</div>
                    ) : null}
                  </form>
                ) : (
                  <div>
                    <div className="form-group">
                      <label htmlFor="email">OTP</label>
                      <input
                        type="text"
                        id="otp"
                        name="otp"
                        className="form-control"
                        onChange={(e) => {
                          setEnterotp(e.target.value);
                        }}
                        placeholder="enter otp"
                      />
                    </div>
                    <button
                      onClick={handerotpVerify}
                      className="custom-btn btn-15 mb-3"
                    >
                      verify otp{" "}
                    </button>
                  </div>
                )}
                {ErrorOTp ? <div>otp not verified</div> : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
