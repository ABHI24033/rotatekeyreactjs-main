import React, { useEffect } from "react";
import axiosInstance from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../../store/Track/trackUserSlice";

const Logout = () => {
  const navigate = useNavigate();

  var myItem = localStorage.getItem("currentLocation");
  localStorage.clear();
  localStorage.setItem("currentLocation", myItem);
  // localStorage.removeItem('access_token');
  // 	localStorage.removeItem('refresh_token');

  const sendLogout = () => {
    navigate("/");
  };
  // axiosInstance.defaults.headers['Authorization'] = null;

  useEffect(() => {
    sendLogout();
    // const response = axiosInstance.post('user/logout/blacklist/', {
    // 	refresh_token: localStorage.getItem('refresh_token'),
    // });
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(add({ view: ["Logout"] }));
  }, []);
  return (
    <>
      {/* <div className='row'>
	<div className='col-lg-2 col-md-2'></div>
	<div className='col-lg-7 col-md-7 col-sm-12' style={{border:"1px solid white",
	height:'100px',boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)'}}>
		<h4  style={{padding:'20px'}}>you are Successfully Logout</h4>
	</div>
	</div> */}
    </>
  );
};

export default Logout;
