import React, { useEffect } from "react";
import { useState } from "react";
// import validator from 'validator'
import { localUrl, url } from "../../env";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../../store/Track/trackUserSlice";
// import { FaBullseye } from 'react-icons/fa';
const ForgotPassword = (props) => {
  var idChecking = useParams();
  const navigate = useNavigate();

  const [idCheckingLoading, setidCheckingLoading] = useState(
    idChecking?.id ? true : false
  );
  const [afterSuccess, setafterSuccess] = useState(false);
  const dispatch = useDispatch();
  // if(props?.id){
  //   debugger

  // // }

  // if(){
  //   setidCheckingLoading(true)
  // }

  // useEffect(()=>{
  //   if(idCheckingLoading){
  //     console.log("verifying linking ")
  //   }

  // },[])
  const [loginform, setloginform] = useState({
    emailPhoneUser: "",
  });

  const [resetpassword, setresetpassword] = useState({
    password: "",
    password2: "",
  });
  const [SuccessLinksend, setSuccessLinksend] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChangeRest = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setresetpassword({ ...resetpassword, [name]: value });
  };

  const handleSubmitReset = (e) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("password", resetpassword.password);
    formdata.append("password2", resetpassword.password2);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      url +
        "api/user/reset-password/" +
        idChecking?.uid +
        "/" +
        idChecking?.id +
        "/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result?.errors?.non_field_errors) {
          setError(result?.errors?.non_field_errors);
        } else {
          setafterSuccess(true);
          setTimeout(() => {
            navigate("/login/");
          }, 2000);
        }
      })
      .catch((error) => console.log("error", error));
  };

  //calling email verification

  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setloginform({ ...loginform, [name]: value });
    console.log("@@checking contactform value", loginform);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("email", loginform.emailPhoneUser);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "api/user/send-reset-password-email/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result?.errors?.email) {
          setError(result?.errors?.email[0]);
        } else if (result?.errors?.non_field_errors) {
          setError(result?.errors?.non_field_errors);
        } else {
          setSuccessLinksend(true);
        }
      });
  };
  useEffect(() => {
    dispatch(add({ view: ["ForgotPassword"] }));
  }, []);

  return (
    <>
      <div className="row p-4">
        <div
          className="col-lg-4 col-md-4 col-sm-12 mt-5 mb-5"
          style={{
            border: "1px solid white",
            margin: "auto",
            boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.5)",
            borderRadius: "5px",
          }}
        >
          <div className="contact-form">
            <h2 className="fs-18 text-center">login with email</h2>
            {!afterSuccess ? (
              !idChecking?.id ? (
                !SuccessLinksend ? (
                  <form
                    action="/contact/"
                    method="POST"
                    className="form-underline"
                  >
                    <div className="field-inline">
                      <div
                        className="field-input"
                        style={{ marginTop: "-10px" }}
                      >
                        <input
                          style={{ width: "200%" }}
                          type="email"
                          id="emailPhoneUser"
                          name="emailPhoneUser"
                          value={loginform.emailPhoneUser}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="username or email "
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="custom-btn btn-12 mb-3"
                    >
                      <span>Click!</span>
                      <span>Submit</span>
                    </button>
                    {success ? (
                      <div className="text-success">{success}</div>
                    ) : null}
                    {error ? <div className="text-danger">{error}</div> : null}
                  </form>
                ) : (
                  <div
                    className="text-center"
                    style={{ color: "green", marginTop: "-20px" }}
                  >
                    Link has been sent successfully{" "}
                  </div>
                )
              ) : (
                <div>
                  <form
                    action="/contact/"
                    method="POST"
                    className="form-underline"
                  >
                    <div className="field-inline">
                      <div className="field-input">
                        <input
                          style={{ width: "200%" }}
                          type="text"
                          id="password"
                          name="password"
                          value={resetpassword.password}
                          onChange={handleChangeRest}
                          className="form-control"
                          placeholder="Password  "
                        />
                      </div>
                    </div>

                    <div className="field-inline">
                      <div className="field-input">
                        <input
                          style={{ width: "200%" }}
                          type="text"
                          id="password2"
                          name="password2"
                          value={resetpassword.password2}
                          onChange={handleChangeRest}
                          className="form-control"
                          placeholder="Confirm Password"
                        />
                      </div>
                    </div>

                    {/* <button type="submit" onClick={handleSubmit} className="btn btn-primary">
                             submit
                           </button> */}
                    <button
                      type="submit"
                      onClick={handleSubmitReset}
                      className="custom-btn btn-12 mb-3"
                    >
                      <span>Click!</span>
                      <span>Submit</span>
                    </button>
                    {success ? (
                      <div className="text-success">{success}</div>
                    ) : null}
                    {error ? <div className="text-danger">{error}</div> : null}
                  </form>
                </div>
              )
            ) : (
              <div
                className="text-center"
                style={{ color: "green", marginTop: "-20px" }}
              >
                Passowrd succefully changed{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
