import { Select } from "antd";
import React, { useEffect, useState } from "react";
import {
  adsFilter,
  businessPrimiumAds,
  businessPrimiumValidity,
  metroCity,
  validateFilter,
} from "../env";
import {Link} from "react-router-dom";
import { isMobile } from "react-device-detect";

const mobstyle = {
  width: '100%',
  margin: '0px 0px 10px 0px ',
  padding: '0px -10px'
 
}
const deskstyle = {
  width: "70%", 
  margin: "30px auto"
}


const FeatureCard = () => {
  // for premium plan
  const [primiumPrice, setPrimiumPrice] = useState(
    adsFilter[0].price * validateFilter[0].price
  );
  const [noOfAds, setNoOfAds] = useState({
    ads: adsFilter[0].ads,
    price: adsFilter[0].price,
  });
  const [noOfMonth, setNoOfMonth] = useState({
    days: validateFilter[0].days,
    price: validateFilter[0].price,
  });
  const [premiumCity, setPremiumCity] = useState(null);
  // for featured plan

  const [featuredPrice, setFeaturedPrice] = useState(
    adsFilter[0].price * validateFilter[0].price
  );
  const [noOfFeaturedAds, setNoOfFeaturedAds] = useState({
    ads: adsFilter[0].ads,
    price: adsFilter[0].price,
  });
  const [noOfFeaturedMonth, setNoOfFeaturedMonth] = useState({
    days: validateFilter[0].days,
    price: validateFilter[0].price,
  });
  const [featuredCity, setFeaturedCity] = useState("");
  useEffect(() => {
    setPrimiumPrice(noOfAds.price * noOfMonth.price);
  }, [noOfMonth.days, noOfAds.ads]);

  useEffect(() => {
    setFeaturedPrice(noOfFeaturedAds.price * noOfFeaturedMonth.price);
  }, [noOfFeaturedMonth.days, noOfFeaturedAds.ads]);
  console.log("Price", primiumPrice);
  const handleFreePlan = () => {
    alert("Checking");
  };
  return (
    <div>
      <div style={isMobile ? mobstyle : deskstyle}
        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-14a9cf3f col-lg-9"
        data-id="14a9cf3f"
        data-element_type="column"
      >

<div className="elementor-column-wrap elementor-element-populated col-lg-12">
  <div className="elementor-widget-wrap">
    <div
      className="elementor-element elementor-element-eeb15f6 elementor-widget elementor-widget-rt-pricing-box"
      data-id="eeb15f6"
      data-element_type="widget"
      data-widget_type="rt-pricing-box.default"
    >
      <div className="elementor-widget-container">
        <div className="rt-el-pricing-box-3">
          <h3 className="rtin-title">Featured </h3>
          <div className="rtin-price py-2">
            <span
              className="rtin-currency"
              style={{ fontSize: "35px" }}
            >
              ₹{featuredPrice}
            </span>
            <span className="rtin-duration"></span>
          </div>
          <div className="rtin-features">
            <ul className="d-grid justify-content-center">
              <li>
                <i className="fas fa-check text-success" />
                Featured ads 5 times visiblity of free ads
              </li>
              <div className="d-flex my-2">
                {" "}
                No. of Ads :
                {businessPrimiumAds?.map((val, index) => (
                  <li key={val} className="p-1 fs-14">
                    <i className="fas fa-check text-success" />
                    {val}
                  </li>
                ))}
              </div>
              <div className="d-flex">
                {" "}
                No. of Months :
                {businessPrimiumValidity?.map((val, index) => (
                  <li key={val} className="p-1 fs-14">
                    <i className="fas fa-check text-success" />
                    {val}
                  </li>
                ))}
              </div>
            </ul>
            <div className="row my-2">
              <div className="col-4">
                <span> Select Ads : </span>
              </div>
              <div className="col-8 text-start">
                <Select
                  getPopupContainer={(triggerNode) =>
                    triggerNode.parentElement
                  }
                  defaultValue="Choose"
                  value={noOfFeaturedAds.ads}
                  style={{
                    width: 150,
                  }}
                  onChange={(value, { label }) => {
                    console.log(value, "check", label);
                    setNoOfFeaturedAds((pre) => ({
                      ...pre,
                      ads: label,
                      price: value,
                    }));
                  }}
                  options={adsFilter?.map((val) => {
                    return { value: val.price, label: val.ads };
                  })}
                />
              </div>
            </div>
            <div className="row my-2">
              <div className="col-4">
                <span> Select Months : </span>
              </div>
              <div className="col-8  text-start">
                <Select
                  getPopupContainer={(triggerNode) =>
                    triggerNode.parentElement
                  }
                  defaultValue="Choose"
                  value={noOfFeaturedMonth.days}
                  style={{
                    width: 150,
                  }}
                  onChange={(value, { label }) => {
                    console.log(value, "checkmonth");
                    setNoOfFeaturedMonth((pre) => ({
                      ...pre,
                      days: label,
                      price: value,
                    }));
                  }}
                  options={validateFilter?.map((val) => {
                    return { value: val.price, label: val.days };
                  })}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <span> Select City : </span>
              </div>
              <div className="col-8  text-start">
                <Select
                  getPopupContainer={(triggerNode) =>
                    triggerNode.parentElement
                  }
                  defaultValue="Choose"
                  //   value={featuredCity}
                  style={{
                    width: 150,
                  }}
                  onChange={(value, { label }) => {
                    setFeaturedCity(value);
                  }}
                  options={metroCity?.map((val) => {
                    return { value: val, label: val };
                  })}
                />
              </div>
            </div>
          </div>
          <div className="rtin-button">
           
            <Link to="/businessdashboard">
            <button
              type="button"
              onClick={() => handleFreePlan("Featured")}
            >
              Buy Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
);
};

export default FeatureCard;
