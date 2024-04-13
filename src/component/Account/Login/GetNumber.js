import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Login/PhoneNumber.scss";
import { url } from "../../env";
import validator from "validator";

export default function GetNumber(props) {
  const [inputNumber, setInputNumber] = useState("");

  const navigate = useNavigate();
  localStorage.setItem("number", inputNumber);
  console.log(
    "lcaolp phone number",
    localStorage.getItem("number"),
    inputNumber
  );
  const SendOtp = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: url + "api/phone/sendOTP/",
      data: {
        number: inputNumber,
        // validator.isMobilePhone
      },
    })
      .then((res) => {
        if (inputNumber.length == 10) {
          if (res.data.OTPSent === true) {
            localStorage.setItem("phoneNumber", inputNumber);
            //   history.push("/CheckOTP");
            navigate("/CheckOTP");
          } else {
            alert("OTP Was Not sent");
          }
        } else {
          alert("Enter Valid 10 Digits Number Only");
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <h1 className="h3 mb-4 fw-normal mt-4" style={{ fontSize: "22px" }}>
        Login with Mobile Number
      </h1>
      <a class="close" href="#" style={{ fontSize: "32px" }}>
        &times;
      </a>
      <div
        className="content overflow-hidden"
        style={{
          border: "1px solid #ffffff1f",
          padding: "5px",

          marginTop: "5px",
          borderRadius: "10px",
          height: "150px",
        }}
      >
        <div className="col-lg-12 col-md-12 col-sm-12 ">
          <input
            type="number"
            name="Number"
            className="form-control"
            id="floatingInput"
            placeholder="Enter your Mobile Number "
            onChange={(e) => {
              setInputNumber(e.target.value);
            }}
            onKeyDown={(e) =>
              ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()
            }
            maxLength={10}
            onInput={(e) => {
              if (e.target.value.length > e.target.maxLength)
                e.target.value = e.target.value.slice(0, e.target.maxLength);
            }}
          />
          {inputNumber.length < 10 || inputNumber.length > 10 ? (
            <div style={{ color: "red" }}>
              * Please Enter 10 Digit Mobile Number Only{" "}
            </div>
          ) : null
          //  !(inputNumber.match('/^[7-9][0-9]{9}$/$')) ?console.log("Please provide valid phone number"):localStorage.setItem("number", inputNumber)
          }
        </div>

        <div className="col-lg-2 col-md-3 col-sm-12">
          <button
            className="btn my-4 mx-1 text-white"
            style={{ padding: "2px" }}
            type="submit"
            onClick={(e) => {
              SendOtp(e);
            }}
          >
            Get OTP
          </button>
        </div>
      </div>
    </>
  );
}
