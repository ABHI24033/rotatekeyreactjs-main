import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../../env";
// import secureAxios from "../src/Config/secureAxios/secureAxios"

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Signup from "../Signup/Signup";
import PricingCheckUser from "../../../context/PricingCheckUser";
import { useDispatch } from "react-redux";
import { add } from "../../../store/Track/trackUserSlice";
import { isMobile } from "react-device-detect";

const mob = {
  margin: "2px",
};
const desk = {
  width: "100px",
  margin: "2px",
};
const mobRow = {};
const deskRow = {
  // marginLeft: "30px",
  marginLeft: "50px",
};
export default function CheckOTP(props) {
  const [status, setStatus] = useState(false);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");
  let finalOTP = first + second + third + fourth;
  const [PhoneRegister, setPhoneRegister] = useState(null);
  const navigate = useNavigate();
  const [flagValue, setFlagValue] = useState(false);

  const verifyPhoneNumberExist = () => {
    var formdata = new FormData();
    formdata.append("phoneNumber", localStorage.getItem("phoneNumber"));

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "api/user/verifyPhone/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result?.errors?.non_field_errors == "phone Number not exist") {
          setFlagValue(true);
          setPhoneRegister("passingValue");
        } else {
          localStorage.setItem("access_token", result.token.access);
          // if(otpPhone){
          //   storePhone(result.token.access)
          // }
          navigate("/dashboard/");
        }
      })
      .catch((error) => console.log("error", error));

    //     var formdata = new FormData();
    // formdata.append("number",localStorage.number);

    // var requestOptions = {
    //   method: 'POST',
    //   body: formdata,
    //   redirect: 'follow'
    // };

    // fetch(url+"api/phone/verifyUserPhone", requestOptions)
    //   .then(response => response.json())
    //   .then(result => {
    //     if(result.status=="not Exist"){
    //       setFlagValue(true)
    //     setPhoneRegister("passingValue")}
    //   })
    //
  };
  const register = () => {
    var formdata = new FormData();
    formdata.append("name", "user" + Math.floor(Math.random() * 90000) + 10000);
    formdata.append(
      "email",
      "user" + Math.floor(Math.random() * 90000) + 10000 + "@gmail.com"
    );
    formdata.append("password", "nanaNANA@#");
    formdata.append("password2", "nanaNANA@#");
    formdata.append("tc", "true");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "api/user/register/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("access_token", result.token.access);
      })
      .catch((error) => console.log("error", error));
    let s = PricingCheckUser();
    if (s) {
      navigate("/dashbaord");
    } else {
      navigate("/pricing");
    }
  };
  const checkOtp = async () => {
    await axios({
      method: "PUT",
      url: url + "api/phone/checkOTP/",
      data: {
        number: localStorage.number,
        otp: finalOTP,
      },
    })
      .then((res) => {
        setStatus(res.data.status);
        if (res.data.status === true) {
          //calling registe  method

          verifyPhoneNumberExist();
          // history.push("/Registration");
        } else {
          alert("Incorrect OTP");
        }
      })
      .catch((e) => console.log(e));
    console.log("Status: ", status);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(add({ view: ["CheckOTP"] }));
  }, []);
  document.title = "RotateKey - CheckOTP";

  const handleChange1 = (e) => {
    setFirst(e.target.value);
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    let fieldIntIndex = parseInt(fieldIndex, 10);

    // Check if no of char in field == maxlength
    if (value.length >= maxLength) {
      // It should not be last input field
      if (fieldIntIndex < 3) {
        // Get the next input field using it's name
        const nextfield = document.querySelector(
          `input[name=field-${fieldIntIndex + 1}]`
        );

        // If found, focus the next field
        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }
  };

  const handleChange2 = (e) => {
    setSecond(e.target.value);
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    let fieldIntIndex = parseInt(fieldIndex, 10);

    // Check if no of char in field == maxlength
    if (value.length >= maxLength) {
      // It should not be last input field
      if (fieldIntIndex < 3) {
        // Get the next input field using it's name
        const nextfield = document.querySelector(
          `input[name=field-${fieldIntIndex + 1}]`
        );

        // If found, focus the next field
        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }
  };

  const handleChange3 = (e) => {
    setThird(e.target.value);
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    let fieldIntIndex = parseInt(fieldIndex, 10);

    // Check if no of char in field == maxlength
    if (value.length >= maxLength) {
      // It should not be last input field
      if (fieldIntIndex < 4) {
        // Get the next input field using it's name
        const nextfield = document.querySelector(
          `input[name=field-${fieldIntIndex + 1}]`
        );

        // If found, focus the next field
        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }
  };

  const handleChange4 = (e) => {
    setFourth(e.target.value);
    // const { maxLength, value, name } = e.target;
    // const [fieldName, fieldIndex] = name.split("-");

    // let fieldIntIndex = parseInt(fieldIndex, 10);

    // // Check if no of char in field == maxlength
    // if (value.length >= maxLength) {

    //   // It should not be last input field
    //   if (fieldIntIndex < 3) {

    //     // Get the next input field using it's name
    //     const nextfield = document.querySelector(
    //       `input[name=field-${fieldIntIndex + 1}]`
    //     );

    //     // If found, focus the next field
    //     if (nextfield !== null) {
    //       nextfield.focus();
    //     }
    //   }}
  };
  return !flagValue ? (
    <div className="d-flex justify-content-center align-items-center container mb-5 ">
      <div
        className="col-lg-6 col-md-7 col-sm-12"
        style={{
          border: "1px solid white",
          boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
        }}
      >
        <h5 className="m-0" style={{ padding: "10px", textAlign: "center" }}>
          Mobile phone verification
        </h5>
        <span className="mobile-text">
          Enter the code we just send on your mobile phone 
          <b className="text-danger">+91 {localStorage.number}</b>
        </span>
        <div
          className="d-flex flex-row mt-2"
          style={isMobile ? mobRow : deskRow}
        >
          <input
            type="number"
            className="form-control"
            style={isMobile ? mob : desk}
            // style={{ margin: "2px", width: "50px" }}
            name="field-1"
            autoFocus=""
            maxLength="1"
            onChange={(e) => handleChange1(e)}
            onKeyDown={(e) =>
              ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()
            }
            onInput={(e) => {
              if (e.target.value.length > e.target.maxLength)
                e.target.value = e.target.value.slice(0, e.target.maxLength);
            }}
          />
          <input
            type="number"
            className="form-control"
            style={isMobile ? mob : desk}
            name="field-2"
            maxLength="1"
            onChange={(e) => handleChange2(e)}
            onKeyDown={(e) =>
              ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()
            }
            onInput={(e) => {
              if (e.target.value.length > e.target.maxLength)
                e.target.value = e.target.value.slice(0, e.target.maxLength);
            }}
          />
          <input
            type="number"
            className="form-control "
            name="field-3"
            style={isMobile ? mob : desk}
            maxLength="1"
            onChange={(e) => handleChange3(e)}
            onKeyDown={(e) =>
              ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()
            }
            onInput={(e) => {
              if (e.target.value.length > e.target.maxLength)
                e.target.value = e.target.value.slice(0, e.target.maxLength);
            }}
          />
          <input
            type="number"
            className="form-control "
            maxLength="1"
            name="field-4"
            style={isMobile ? mob : desk}
            onChange={(e) => handleChange4(e)}
            onKeyDown={(e) =>
              ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()
            }
            onInput={(e) => {
              if (e.target.value.length > e.target.maxLength)
                e.target.value = e.target.value.slice(0, e.target.maxLength);
            }}
          />
        </div>
        <button
          className="btn btn-lg btn-outline-primary p-0 my-4 mx-5"
          onClick={() => {
            checkOtp();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  ) : (
    <Signup props={PhoneRegister} />
  );
}
