import { faJetFighter } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

const FullAdminDash = () => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const navigate = useNavigate();
  useEffect(() => {
    if (adminLogin?.length == 0) {
      navigate("/hola9-login/");
    }
  }, [adminLogin]);
  return (
    <>
      <div class="container-fluid" id="main">
        <div class="row row-offcanvas row-offcanvas-left">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default FullAdminDash;
