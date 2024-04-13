import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { UserContext } from "../../../App";
import { add } from "../../../store/Track/trackUserSlice";
// import { freePlanDetails, Free, Gold } from "../../env";
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Row, Skeleton, Switch } from "antd";
import { Space, Table, Tag } from "antd";
// import { listItemAvatarClasses } from "@mui/material";
// import { result } from "lodash";
import { Hola9Table } from "../../StyledComponent/StyledComponents";
const { Meta } = Card;

const columns = [
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Days",
    dataIndex: "days",
    key: "days",
  },
  {
    title: "Regulars",
    dataIndex: "regulars",
    key: "regulars",
  },
  // {
  //   title: "topAds",
  //   key: "topAds",
  //   dataIndex: "topAds",
  // },
  // {
  //   title: "featured",
  //   key: "featured",
  //   dataIndex: "featured",
  // },
  {
    title: "teleSupport",
    key: "teleSupport",
    dataIndex: "teleSupport",
  },
  {
    title: "response",
    key: "response",
    dataIndex: "response",
  },
  {
    title: "chatSupport",
    key: "chatSupport",
    dataIndex: "chatSupport",
  },
  {
    title: "dedicatedRm",
    key: "dedicatedRm",
    dataIndex: "dedicatedRm",
  },

  {
    title: "hola9Website",
    key: "hol9Website",
    dataIndex: "hol9Website",
  },
];

const ActivePlans = () => {
  const data = useSelector((state) => state.planData);
  const [loading, setLoading] = useState(true);

  const onChange = (checked) => {
    setLoading(!checked);
  };
  console.log("datra", data);
  const [listData, setListData] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    var ListData = [];

    Object.keys(data?.data?.planDataDetails).map((result) => {
      const planObj = {
        category: null,
        days: null,
        regulars: null,
        // topAds: "None",
        // featured: "None",
        teleSupport: "None",
        response: "Limited",
        chatSupport: "None",
        dedicatedRm: "None",
        hol9Website: "None",
      };
      if (result === "Free") {
        planObj["category"] = result;
        planObj["days"] = data?.data?.planDataDetails[result]["limitDays"];
        planObj["regulars"] =
          data?.data?.planDataDetails[result]["PostedregualAds"] +
          data?.data?.planDataDetails[result]["leftRegularAds"];
        ListData.push(planObj);
      } else {
        planObj["category"] = result;
        planObj["days"] = data?.data?.planDataDetails[result]["limitDays"];
        planObj["regulars"] =
          data?.data?.planDataDetails[result]["PostedregualAds"] +
          data?.data?.planDataDetails[result]["leftRegularAds"];
        // planObj["topAds"] =
        //   data?.data?.planDataDetails[result]["PostedTopAds"] +
        //   data?.data?.planDataDetails[result]["leftTopAds"];
        // planObj["featured"] =
        //   data?.data?.planDataDetails[result]["PostedFeaturedAds"] +
        //   data?.data?.planDataDetails[result]["leftFeaturedAds"];
        planObj["teleSupport"] = data?.data?.planDataDetails[result][
          "TeleSupport"
        ]
          ? "True"
          : "None";
        planObj["response"] = data?.data?.planDataDetails[result][
          "PostedregualAds"
        ]
          ? "True"
          : "None";
        planObj["chatSupport"] = data?.data?.planDataDetails[result][
          "chatSupport"
        ]
          ? "True"
          : "None";
        planObj["dedicatedRm"] = data?.data?.planDataDetails[result][
          "DeticatedRm"
        ]
          ? "True"
          : "None";
        planObj["hol9Website"] = data?.data?.planDataDetails[result][
          "Hol9Website"
        ]
          ? data?.data?.planDataDetails[result]["hol9Website"]
          : "None";
        ListData.push(planObj);
      }

      setListData(ListData);
      console.log(ListData);
    });

    setTimeout(() => {
      onChange(true);
    }, 2000);
    dispatch(add({ view: ["ActivePlans"] }));
  }, []);

  return (
    <>
      <div className="row">
        <h3 className="text-center px-0 ">Active Plans</h3>
        {/* <div className="  border border-1 rounded " style={{height:'fit-content',boxShadow: '0px 3px 5px 0px rgba(0, 0, 0, 0.5)'}}> */}
        {/* <div className="col-lg-12 d-flex justify-content-between mt-3 border-0 border-bottom" >
          <p className="text-secondary">Active Plans</p>
       
          </div> */}

        {/* <Switch checked={!loading} onChange={onChange} /> */}

        {!loading ? (
          <div className="px-0 w-100 ">
            <Hola9Table
              align="center"
              pagination={false}
              columns={columns}
              dataSource={listData}
              className="text-black bg-dark"
            />
          </div>
        ) : null}
        <Skeleton loading={loading} avatar active></Skeleton>
      </div>
      {/* </div> */}
    </>
  );
};

export default ActivePlans;
