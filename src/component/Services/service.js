import axios from "axios";
import { useState } from "react";
import { url } from "../env";

const ProfileService = () => {
  var axios = require("axios");
  // const [data,setData]= useState([])
  var config = {
    method: "get",
    url: url + "api/user/profile/",
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU1ODQ2NTk5LCJpYXQiOjE2NTU4NDI5OTksImp0aSI6IjYxYjJmZjcyMWFlYzQwN2NiZWZkNzhkZDllODA1NGRmIiwidXNlcl9pZCI6MTV9.HMUVdwmwCLZKWfgjkWmtS3hYa5n2sEWtUj4IYWTqAYc",
    },
  };

  return axios(config)
    .then(function (response) {})
    .catch(function (error) {
      alert("token is expire");
    });
  // return data
};

export default ProfileService;
