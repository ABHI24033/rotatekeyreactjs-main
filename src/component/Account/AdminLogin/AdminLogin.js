import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { add } from "../../../store/adminLoginSlice";
const AdminLogin = () => {
  const disptach = useDispatch();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loginform, setloginform] = useState({ username: "", password: "" });
  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setloginform({ ...loginform, [name]: value });
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    if (loginform.email && loginform.password) {
      const newLoginform = {
        id: new Date().getTime().toString(),
        ...loginform,
      };
      setUsers([...users, newLoginform]);
      setloginform({ username: "", password: "" });
    }
    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginform),
      redirect: "follow",
    };

    fetch("https://hola9.live/api/adsapi/adminAuth", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        disptach(add("true"));
        if (result === true) {
          navigate("/admin/");
        } else {
          setError("id or password is wrong");
        }
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="row">
      <div className="col-lg-3"></div>
      <div className="col-lg-6  col-sm-12 border border-rounded mt-5 ">
        <div className="form">
          <div className="form-body p-3">
            <div className="email">
              <label className="form__label" for="username">
                Username{" "}
              </label>
              <input
                type="username"
                id="username"
                name="username"
                onChange={handleChange}
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="password mt-2">
              <label className="form__label" for="password">
                Password{" "}
              </label>
              <input
                className="form-control"
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
          </div>
          <div className="p-1 mx-2">
            <button
              type="submit"
              onClick={() => handleSubmit()}
              class="btn text-light fs-16 p-2"
            >
              Login
            </button>
          </div>
          {error && <div style={{ color: "red" }}>{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
