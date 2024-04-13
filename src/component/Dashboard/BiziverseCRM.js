import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const BiziverseCRM = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [title, seTtitle] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [designation, setdesignation] = useState("");
  const [city, setCity] = useState("");
  const [state, setstate] = useState("");
  const [needs, setneeds] = useState("");
  const [source, setsource] = useState("");
  // const[apiKey, setapiKey] = useState("0010-8B706EE6-F25D-46C9-A5D6-185F1C14F88B-6679")
  const handleSubmit = (e) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("companyName", companyName);
    urlencoded.append("title", title);
    urlencoded.append("firstName", firstName);
    urlencoded.append("lastName", lastName);
    urlencoded.append("email", email);
    urlencoded.append("mobile", mobile);
    urlencoded.append("designation", designation);
    urlencoded.append("city", city);
    urlencoded.append("state", state);
    urlencoded.append("needs", needs);
    urlencoded.append("source", source);
    urlencoded.append(
      "apiKey",
      "0010-8B706EE6-F25D-46C9-A5D6-185F1C14F88B-6679"
    );
    urlencoded.append(
      "apiParams",
      `[{"moduleID":25,"actionType":"setLead","data":"[{\\"companyName\\":\\"${companyName}\\",\\"title\\":\\"${title}\\",\\"firstName\\":\\"${firstName}\\",\\"lastName\\":\\"${lastName}\\",\\"email\\":\\"${email}\\",\\"mobile\\":\\"${mobile}\\",\\"designation\\":\\"${designation}\\",\\"city\\":\\"${city}\\",\\"state\\":\\"${state}\\",\\"needs\\":\\"${needs}\\",\\"source\\":\\"${source}\\"}]"}]`
    );

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("https://biziverse.com/PremiumAPI.asmx/setAPI", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    navigate("/dashboard/");
  };

  return (
    <>
      {/* <a class="close" href="#">
        &times;
      </a>
      <div
        className="content"
        style={{
          border: "1px solid #0000ff1f",
          padding: "5px",
          boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",

          marginTop: "5px",
          borderRadius: "10px",
        }}
      >
        <div className="container">
          <form action="" method="get" className="form-example">
            <div className="form-example">
              <label for="name">CompanyName : </label>
              <input
                type="text"
                name="name"
                id="name"
                value={companyName}
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-example">
              <label for="text">Title : </label>
              <input
                type="text"
                name="text"
                id="text"
                value={title}
                onChange={(e) => {
                  seTtitle(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-example">
              <label for="text">First Name : </label>
              <input
                type="text"
                name="text"
                id="text"
                value={firstName}
                onChange={(e) => {
                  setfirstName(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-example">
              <label for="text">Last Name : </label>
              <input
                type="text"
                name="text"
                id="text"
                value={lastName}
                onChange={(e) => {
                  setlastName(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-example">
              <label for="text">Email : </label>
              <input
                type="text"
                name="text"
                id="text"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-example">
              <label for="text">Mobile : </label>
              <input
                type="text"
                name="text"
                id="text"
                value={mobile}
                onChange={(e) => {
                  setmobile(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-example">
              <label for="text">Designation : </label>
              <input
                type="text"
                name="text"
                id="text"
                value={designation}
                onChange={(e) => {
                  setdesignation(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-example">
              <label for="text">City : </label>
              <input
                type="text"
                name="text"
                id="text"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-example">
              <label for="text">State : </label>
              <input
                type="text"
                name="text"
                id="text"
                value={state}
                onChange={(e) => {
                  setstate(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-example">
              <label for="text">Needs : </label>
              <input
                type="text"
                name="text"
                id="text"
                value={needs}
                onChange={(e) => {
                  setneeds(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-example">
              <label for="text">Source : </label>
              <input
                type="text"
                name="text"
                id="text"
                value={source}
                onChange={(e) => {
                  setsource(e.target.value);
                }}
                required
              />
            </div>
            <button className="btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div> */}
      <div id="popup1" class="overlay">
        <div class="popup">
          <h2>Info box</h2>
          <a class="close" href="#">
            &times;
          </a>
          <div class="content">
            <p>This is done totally without JavaScript. Just HTML and CSS.</p>
          </div>
        </div>
      </div>

      <div id="popup2" class="overlay light">
        <a class="cancel" href="#"></a>
        <div class="popup">
          <h2>What the what?</h2>
          <div class="content">
            <p>Click outside the popup to close.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BiziverseCRM;
