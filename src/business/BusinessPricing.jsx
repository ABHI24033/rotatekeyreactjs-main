import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { UserContext } from "../App";
import Axios from "axios";
import { Modal } from "antd";
import PhoneInput from "react-phone-input-2";
import { Col, Row } from "antd";
import {
  adsFilter,
  businessPrimiumAds,
  businessPrimiumValidity,
  localUrl,
  metroCity,
  validateFilter,
} from "../component/env";

const BusinessPricing = () => {
  const user1 = useContext(UserContext);
  const objPricingDependsOnAds={
    "Furnitures":3,
    "RealEstates":4,
    "Bikes":5,
    "Pets":6,
    "Electronics":7,
    "Cars":8,
  }
  // for premium plan
  const value=useParams()
  console.log("value",value)
  const [adsCategory,setadsCategory]=useState(value?.id)
  const [totalPrice,setTotalPrice]=useState(value?.id)
  const [totalAds,settotalAds]=useState(value?.id)
  const [totalAdsMonth,settotalAdsMonth]=useState(value?.id)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [primiumPrice, setPrimiumPrice] = useState(
    adsFilter[0].price * validateFilter[0].price * objPricingDependsOnAds[value?.id]
  );
  const [planValue, setPlanValue] = useState(null);
  const [dataValue, setDataValue] = useState(null);
  const [currentPlan, setCurrentPlan] = useState(null);
  const [phone, setPhoneNumber] = useState(null);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [finalObj, setFinalObj] = useState(null);
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
    adsFilter[0].price * validateFilter[0].price * objPricingDependsOnAds[value?.id]
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
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = (props) => {
    setIsModalOpen(false);
    console.log("props", props);
    let idValue = user1.userid ? user1.userid : Navigate("/login");
    var formdata = new FormData();
    // formdata =
    //   props === "Free"
    //     ? Free
    //     : props === "Silver"
    //     ? Silver
    //     : props === "Gold"
    //     ? Gold
    //     : Platinum;
    formdata["price"] = 5;
    let priceValue = formdata["price"];
    setName(idValue);
    setAmount(priceValue);
    let tempFinalObj = {};
    tempFinalObj["plan"] = formdata;
    tempFinalObj["price"] = priceValue;
    tempFinalObj["user"] = idValue;
    setFinalObj(tempFinalObj);
    let planValue = props;
    let outputValue = showRazorpay(
      priceValue,
      idValue,
      tempFinalObj,
      planValue
    );
  };
  const showRazorpay = async (v1, v2, tempFinalObj, planValue) => {
    console.log("temp final", tempFinalObj);
    // const res = await loadScript();
    let amount = v1;
    let name = v2;
    console.log(v1, v2, amount, name);
    let bodyData = new FormData();

    // we will pass the amount and product name to the backend using form data
    // bodyData.append("amount", amount);
    bodyData.append("IdValue", name);
    bodyData.append("planValue", currentPlan);
    bodyData.append("Phone", phone);
    bodyData.append("adsCategory",adsCategory)
    bodyData.append("PriceValue",planValue=="Premium"?featuredPrice:primiumPrice)
    bodyData.append("adsValue",planValue=="Premium"?noOfFeaturedAds:10)
    bodyData.append("monthsVale",planValue=="Premium"?noOfFeaturedMonth:3)
    bodyData.append("city",premiumCity)
    // bodyData.append('userID','5')
    // bodyData.append('PlanID','12')
    const data = await Axios({
      // url: `${server}/razorpay/pay/`,
      url: localUrl + "payment/create_token",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: bodyData,
    }).then((res) => {
      // finalObjOnce = res.data.order;
      debugger
      document.getElementById("plan").value = JSON.stringify(res);
      localStorage.setItem("planValue", JSON.stringify(res));
      setDataValue(res);
      console.log(res);
      document.getElementById("paymentCalling").click();
      debugger;

      // setOrder(res?.data?.order);
      return res;
    });

    // console.log(data)

    // in data we will receive an object from the backend with the information about the payment
    //that has been made by the user

    // var options = {
    //   key_id: `** your razorpay public key id **`,
    //   key_secret: `** your razorpay secret key id **`,
    //   amount: data.data.payment.amount,
    //   currency: "INR",
    //   name: "Hola9",
    //   description: "Test teansaction",
    //   image: "", // add image url
    //   order_id: data.data.payment.id,
    //   handler: function (response) {
    //     // we will handle success by calling handlePayment method and
    //     // will pass the response that we've got from razorpay
    //     handlePaymentSuccess(response, tempFinalObj);
    //   },
    //   prefill: {
    //     name: "User's name",
    //     email: "User's email",
    //     contact: "User's phone",
    //   },
    //   notes: {
    //     address: "Razorpay Corporate Office",
    //   },
    //   theme: {
    //     color: "#3399cc",
    //   },
    // };

    // var rzp1 = new window.Razorpay(options);
    // rzp1.open();
  };
  useEffect(()=>{
   
    console.log("value useEffect",value,objPricingDependsOnAds[value?.id])
  },[])
  useEffect(() => {
    setPrimiumPrice(noOfAds.price * noOfMonth.price * objPricingDependsOnAds[value?.id]);
  }, [noOfMonth.days, noOfAds.ads]);

  useEffect(() => {
    setFeaturedPrice(noOfFeaturedAds.price * noOfFeaturedMonth.price * objPricingDependsOnAds[value?.id]);
  }, [noOfFeaturedMonth.days, noOfFeaturedAds.ads]);
  console.log("Price", primiumPrice);
  const handleFreePlan = (e) => {
    console.log("eeeee",e)
    showModal(e)
    // alert("Checking");
  };
  const showModal = (e) => {
    setIsModalOpen(true);
    setCurrentPlan(e);
    if (e == "Premium") {
      setPlanValue(299);
    } else if (e == "Featured") {
      setPlanValue(99);
    }

    console.log(e);
  };
  return (
    <div>
         <Modal
        title="Payment Now"
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={handleCancel}
        okText="Pay Now"
      >
        <Row>
          <Col span={8}> Phone Number</Col>
          <Col span={16}>
            {" "}
            <PhoneInput
              country={"in"}
              onlyCountries={["in"]}
              value={phone}
              onChange={(phone) => setPhoneNumber(phone)}
            />
          </Col>
          <Col span={12}>Plan</Col>
          <Col span={12}>{planValue}</Col>
          <Col span={12}>GST</Col>
          <Col span={12}>18%</Col>
          <Col span={12}>Total</Col>
          <Col span={12}>
            {Math.floor(planValue + (planValue * 18) / 100)}
            .00
          </Col>
        </Row>
      </Modal>
      {" "}
      <div
        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-14a9cf3f"
        data-id="14a9cf3f"
        data-element_type="column"
        style={{ width: "70%", margin: "30px auto" }}
      >
        <div
          className="elementor-column-wrap elementor-element-populated"
          style={{ marginRight: "2em" }}
        >
          <div className="elementor-widget-wrap">
            <div
              className="elementor-element elementor-element-eeb15f6 elementor-widget elementor-widget-rt-pricing-box"
              data-id="eeb15f6"
              data-element_type="widget"
              data-widget_type="rt-pricing-box.default"
            >
              <div className="elementor-widget-container">
                <div className="rt-el-pricing-box-3">
                  <h3 className="rtin-title">Premium </h3>
                  <div className="rtin-price py-2">
                    <span
                      className="rtin-currency"
                      style={{ fontSize: "35px" }}
                    >
                      ₹{primiumPrice}
                    </span>
                    <span className="rtin-duration"></span>
                  </div>
                  <div className="rtin-features">
                    <ul className="d-grid justify-content-center">
                      <li>
                        <i className="fas fa-check text-success" />
                        Premium ads 2 times visiblity of free ads
                      </li>
                      <div className="d-flex my-2">
                        No. of Ads :
                        {businessPrimiumAds?.map((val, index) => (
                          <li key={val} className="p-1 fs-14">
                            <i className="fas fa-check text-success" />
                            {val}
                          </li>
                        ))}
                      </div>
                      <div className="d-flex my-2">
                        
                        No. of Months :
                        {businessPrimiumValidity?.map((val, index) => (
                          <li key={val} className="p-1 fs-14">
                            <i className="fas fa-check text-success" />
                            {val}
                          </li>
                        ))}
                      </div>
                    </ul>
                    <div className="row my-2 ">
                      <div className="col-4">
                        <span> Select Ads : </span>
                      </div>
                      <div className="col-8 text-start">
                        <Select
                          getPopupContainer={(triggerNode) =>
                            triggerNode.parentElement
                          }
                          defaultValue="Choose"
                          value={noOfAds.ads}
                          style={{
                            width: 150,
                          }}
                          onChange={(value, { label }) => {
                            console.log(value, "check", label);
                            setNoOfAds((pre) => ({
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
                          value={noOfMonth.days}
                          style={{
                            width: 150,
                          }}
                          onChange={(value, { label }) => {
                            console.log(value, "checkmonth");
                            setNoOfMonth((pre) => ({
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
                          //   value={premiumCity}
                          style={{
                            width: 150,
                          }}
                          onChange={(value) => {
                            setPremiumCity(value);
                          }}
                          options={metroCity?.map((val) => {
                            return { value: val, label: val };
                          })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="rtin-button">
                    <button
                      type="button"
                      id="plan"
                      onClick={() => handleFreePlan("Premium")}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="elementor-column-wrap elementor-element-populated">
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
                      
                        No. of Ads :
                        {businessPrimiumAds?.map((val, index) => (
                          <li key={val} className="p-1 fs-14">
                            <i className="fas fa-check text-success" />
                            {val}
                          </li>
                        ))}
                      </div>
                      <div className="d-flex my-2">
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
                    <button
                      type="button"
                      onClick={() => handleFreePlan("Featured")}
                    >
                      Buy Now
                    </button>
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

export default BusinessPricing;
