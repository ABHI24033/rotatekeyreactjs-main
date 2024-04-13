import React, { useContext, useEffect, useState } from "react";
import { Modal } from "antd";
import {
  freePlanDetails,
  goldPlanDetails,
  platinumPlanDetails,
  silverPlanDetails,
  url,
  localUrl,
  Free,
  Gold,
  Silver,
  Platinum,
  access_token,
} from "../../env";
// import "./Pricing.module.css";
import "./pricing.css";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import { UserContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../../store/Track/trackUserSlice";
import BiziverseCRM from "../../Dashboard/BiziverseCRM";
import { SuccessMdoel } from "./SuccessModel";
import { Alert } from "antd";
import { getUserPlan } from "../../../store/allPlanDetails";
import { UserProfile } from "../../../store/userIdSlice";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Col, Row } from "antd";
const Pricing = () => {
  const user1 = useContext(UserContext);
  const { loading, data } = useSelector((state) => state.planData);
  console.log("resultapi ", data);
  const [userId, setUserId] = useState(null);
  const userData = useSelector((state) => state.userIdSlice);

  const navigate = useNavigate();

  const [phone, setPhoneNumber] = useState(null);
  const [planValue, setPlanValue] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(null);
  const { id } = useParams();
  const changeAds = useParams();

  //after sucess
  const [modalAfterSuccess, setModalAfterSuccess] = useState(false);
  const [successObj, setSuccessObj] = useState([]);
  useEffect(() => {
    console.log(id);
    if (id && localStorage.getItem("planValue") != null) {
      let data1 = document.getElementById("plan").value;
      let data = JSON.parse(localStorage.getItem("planValue"));
      localStorage.removeItem("planValue");
      console.log(data, "HELOWORLD", data1);
      debugger;
      // let data= document.getElementById("plan").value
      var bodyData = new FormData();
      bodyData.append("layer_pay_token_id", data.data["token_id"]);
      bodyData.append("tranid", data.data["txnid"]);
      bodyData.append("layer_order_amount", data.data["amount"]);
      bodyData.append("layer_payment_id", id);
      bodyData.append("hash", data.data["hash"]);
      console.log("callback calling", bodyData);

      var requestOptions = {
        method: "POST",
        body: bodyData,
        redirect: "follow",
      };

      fetch(url + "api/payment/callback", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          debugger;
          console.log("aftersuccess", result);
          setModalAfterSuccess(true);
          setSuccessObj(result);
          // navigate("/dashboard");
        })
        .catch((error) => console.log("error", error));
    }
  }, []);

  const showModal = (e) => {
    setIsModalOpen(true);
    setCurrentPlan(e);
    if (e == "Gold") {
      setPlanValue(499);
    } else if (e == "Silver") {
      setPlanValue(99);
    } else if (e == "Platinum") {
      setPlanValue(999);
    }

    console.log(e);
  };
  const handleOk = () => {
    if (currentPlan != null) {
      handleSubmit(currentPlan);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    console.log(data?.totalPlan);

    if (localStorage.getItem("access_token") != null) {
      if (userData.data == null) {
        dispatch(UserProfile(localStorage.getItem("access_token")));
      } else {
        setUserId(userData.data?.id);
        dispatch(getUserPlan(userData.data?.id));
      }
    }
  }, [userData.data]);

  useEffect(() => {}, [data]);

  ////razorpay payment gateway

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [order, setOrder] = useState(null);
  const [finalObj, setFinalObj] = useState(null);
  const [success, setSuccess] = useState(false);
  const [successResult, setResult] = useState(null);
  const [alertShow, setAlertShow] = useState(false);
  const [dataValue, setDataValue] = useState(null);

  useEffect(() => {}, [successResult]);
  var finalObjOnce;
  const finalSuccess = (v1) => {
    console.log(v1);
    let finalObj = v1;
    console.log(finalObjOnce);
    finalObj["order"] = finalObjOnce;
    setFinalObj(finalObj);
    console.log("final call happen");
    console.log(order);
    setSuccess(true);
    finalDetailsPayment(v1, finalObjOnce);
  };

  const finalDetailsPayment = (finalData, finalOrder) => {
    let objFinalDetails = {};
    objFinalDetails["UserID"] = finalData["user"];
    objFinalDetails["plan"] = finalData["plan"];
    objFinalDetails["orderid"] = finalOrder["id"];
    var formdata = new FormData();
    formdata.append("paymentDetails", JSON.stringify(objFinalDetails));

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "api/user/paymentDetails", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    console.log(objFinalDetails);
  };
  const handlePaymentSuccess = async (response, tempFinalObj) => {
    try {
      let bodyData = new FormData();
      // we will send the response we've got from razorpay to the backend to validate the payment
      bodyData.append("response", JSON.stringify(response));

      await Axios({
        url: localUrl + "payment/razorpay/payment/success/",
        method: "POST",
        data: bodyData,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log("!!92", res);
          finalSuccess(tempFinalObj);
          console.log("Everything is OK!");
          setName("");
          setAmount("");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(console.error());
    }
  };

  // this will load a script tag which will open up Razorpay payment card to make transactions
  const loadScript = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
  };

  const showRazorpay = async (v1, v2, tempFinalObj, planValue) => {
    console.log("temp final", tempFinalObj);
    const res = await loadScript();
    let amount = v1;
    let name = v2;
    console.log(v1, v2, amount, name);
    let bodyData = new FormData();

    // we will pass the amount and product name to the backend using form data
    // bodyData.append("amount", amount);
    bodyData.append("IdValue", name);
    bodyData.append("planValue", currentPlan);
    bodyData.append("Phone", phone);
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
  //end of razorpay payment gateway
  //after successpayment modal

  const finalSuccess1 = (v1) => {
    let finalObj = v1;
    setFinalObj(finalObj);
    finalDetailsPayment1(v1);
  };
  const finalDetailsPayment1 = (finalData) => {
    let objFinalDetails = {
      UserID: finalData.user,
      plan: finalData.plan,
      orderid: Math.floor(Math.random() * 1000000).toString(),
    };
    console.log("finalObj", JSON.stringify(objFinalDetails));

    var formdata = new FormData();
    formdata.append("paymentDetails", JSON.stringify(objFinalDetails));

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    fetch(url + "api/user/paymentDetails", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        if (result === "Success") {
          navigate("/dashboard");
        }
      })
      .catch((error) => console.log("error", error));
    console.log(objFinalDetails);
  };
  const handleFreePlan = (props) => {
    console.log("props", props);
    let idValue = user1.userid ? user1.userid : navigate("/login");
    let tempFinalObj = { plan: props, price: 1, user: idValue };
    finalSuccess1(tempFinalObj);
    // finalDetailsPayment1(props,idValue)
  };
  const handleSubmit = (props) => {
    setIsModalOpen(false);
    console.log("props", props);
    let idValue = user1.userid ? user1.userid : navigate("/login");
    var formdata = new FormData();
    formdata =
      props === "Free"
        ? Free
        : props === "Silver"
        ? Silver
        : props === "Gold"
        ? Gold
        : Platinum;
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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(add({ view: ["Pricing"] }));
  }, []);

  const error = () => {
    Modal.error({
      title: "Free Plan",
      content: "You can not buy free plan multiple times",
    });
  };
  return (
    <>
      {modalAfterSuccess && <SuccessMdoel props={successObj} />}

      {/* <div className="container" style={{ marginTop: "20vh" }}>
        <form>
          <h1>Payment page</h1>

          <div className="form-group">
            <label htmlFor="name">Product name</label>
            <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Amount</label>
            <input
                type="text"
                className="form-control"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </form>
        <button onClick={showRazorpay} className="btn btn-primary btn-block">
          Pay with razorpay
        </button>
      </div> */}
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-5dd5f5ff elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="5dd5f5ff"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-row">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6e9aec1d"
              data-id="6e9aec1d"
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div
                    className="elementor-element elementor-element-62bd0f3b elementor-widget elementor-widget-heading"
                    data-id="62bd0f3b"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="fs-18 text-center">
                        Our Pricing and Packages
                      </div>
                    </div>
                  </div>
                  <section
                    className="elementor-section elementor-inner-section elementor-element elementor-element-2b5a5118 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="2b5a5118"
                    data-element_type="section"
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-row">
                        <div
                          className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-14a9cf3f"
                          data-id="14a9cf3f"
                          data-element_type="column"
                        >
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
                                    <h3 className="rtin-title">Free Plan</h3>
                                    <div className="rtin-price py-2">
                                      <span
                                        className="rtin-currency"
                                        style={{ fontSize: "35px" }}
                                      >
                                        ₹0
                                      </span>
                                      <span className="rtin-duration"></span>
                                    </div>
                                    <div className="rtin-features">
                                      <ul className="d-grid justify-content-center">
                                        {freePlanDetails?.map((val, index) =>
                                          index < 3 ? (
                                            <li key={val} className="p-1 fs-14">
                                              <i className="fas fa-check text-success" />
                                              {val}
                                            </li>
                                          ) : (
                                            <li key={val} className="p-1 fs-14">
                                              <i className="fas fa-times text-danger" />
                                              {val}
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                    <div className="rtin-button">
                                      {data?.totalPlan?.includes("Free") ||
                                      !data?.totalPlan ? (
                                        <button type="button" onClick={error}>
                                          Buy Now
                                        </button>
                                      ) : (
                                        <button
                                          type="button"
                                          onClick={() => handleFreePlan(Free)}
                                        >
                                          Buy Now
                                        </button>
                                      )}

                                      {/* <button type="button"
                                              onClick={() =>
                                                handleFreePlan(Free)
                                              }
                                            >
                                              Buy Now
                                            </button> */}

                                      {/* {data?.totalPlan
                                        ?.filter((val) => val === "Free")
                                        .map((val) =>
                                          val === "Free" ? (<>
                                            <button type="primary" onClick={error}>
                                              Buy Now
                                            </button>
                                            </>) : (
                                            <button type="button"
                                              onClick={() =>
                                                handleFreePlan(Free)
                                              }
                                            >
                                              Buy Now
                                            </button>
                                          )
                                        )} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-78bdc915"
                          data-id="78bdc915"
                          data-element_type="column"
                        >
                          <div className="elementor-column-wrap elementor-element-populated">
                            <div className="elementor-widget-wrap">
                              <div
                                className="elementor-element elementor-element-63ff55c8 elementor-widget elementor-widget-rt-pricing-box"
                                data-id="63ff55c8"
                                data-element_type="widget"
                                data-widget_type="rt-pricing-box.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="rt-el-pricing-box-3">
                                    <h3 className="rtin-title">Silver Plan</h3>
                                    <div className="rtin-price py-2">
                                      <span
                                        className="rtin-currency"
                                        style={{ fontSize: "35px" }}
                                      >
                                        ₹99
                                      </span>
                                      <span className="rtin-duration"></span>
                                    </div>
                                    <div className="rtin-features">
                                      <ul className="d-grid justify-content-center">
                                        {silverPlanDetails?.map((val, index) =>
                                          index < 6 ? (
                                            <li key={val} className="p-1 fs-14">
                                              <i className="fas fa-check text-success" />
                                              {val}
                                            </li>
                                          ) : (
                                            <li key={val} className="p-1 fs-14">
                                              <i className="fas fa-times text-danger" />
                                              {val}
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                    <div className="rtin-button">
                                      <div>
                                        {" "}
                                        <button
                                          onClick={() => showModal("Silver")}
                                        >
                                          Buy Now
                                        </button>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-517eacc5"
                          data-id="517eacc5"
                          data-element_type="column"
                        >
                          <div className="elementor-column-wrap elementor-element-populated">
                            <div className="elementor-widget-wrap">
                              <div
                                className="elementor-element elementor-element-239f3988 elementor-widget elementor-widget-rt-pricing-box"
                                data-id="239f3988"
                                data-element_type="widget"
                                data-widget_type="rt-pricing-box.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="rt-el-pricing-box-3">
                                    <h3 className="rtin-title">Gold Plan</h3>

                                    <div className="rtin-price py-2">
                                      <span
                                        className="rtin-currency"
                                        style={{ fontSize: "35px" }}
                                      >
                                        ₹499
                                      </span>
                                    </div>
                                    <div className="rtin-features">
                                      <ul className="d-grid justify-content-center">
                                        {goldPlanDetails.map((val, index) =>
                                          index < 8 ? (
                                            <li
                                              key={val}
                                              className="p-1 fs-14 "
                                            >
                                              <i className="fas fa-check text-success" />
                                              {val}
                                            </li>
                                          ) : (
                                            <li key={val} className="p-1 fs-14">
                                              <i className="fas fa-times text-danger" />
                                              {val}
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                    <div className="rtin-button">
                                      <button
                                        id="plan"
                                        onClick={() => showModal("Gold")}
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
                        <div
                          className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-3da3045d"
                          data-id="3da3045d"
                          data-element_type="column"
                        >
                          <div className="elementor-column-wrap elementor-element-populated">
                            <div className="elementor-widget-wrap">
                              <div
                                className="elementor-element elementor-element-1ed139e6 elementor-widget elementor-widget-rt-pricing-box"
                                data-id="1ed139e6"
                                data-element_type="widget"
                                data-widget_type="rt-pricing-box.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="rt-el-pricing-box-3">
                                    <h3 className="rtin-title">
                                      Platinum Plan
                                    </h3>
                                    <div className="rtin-price py-2">
                                      <span
                                        className="rtin-currency"
                                        style={{ fontSize: "35px" }}
                                      >
                                        ₹999
                                      </span>
                                    </div>
                                    <div className="rtin-features">
                                      <ul className="d-grid justify-content-center">
                                        {platinumPlanDetails.map((val) => (
                                          <li key={val} className="p-1 fs-14">
                                            <i className="fas fa-check fs-14 text-success" />
                                            {val}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div className="rtin-button">
                                      <button
                                        onClick={() => showModal("Platinum")}
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
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BiziverseCRM />
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
    </>
  );
};

export default Pricing;
