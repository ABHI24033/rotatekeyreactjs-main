import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { GoVerified } from "react-icons/go";
import Axios from "axios";
import { Modal } from "antd";
import PhoneInput from "react-phone-input-2";
import { Col, Row } from "antd";
import { useContext } from "react";
import { UserContext } from "../../App";
import { Navigate, useParams } from "react-router";
import { localUrl } from "../env";
const Verified = () => {
  const [isVerified, setIsVerified] = useState(false);
  const user1 = useContext(UserContext);
  const value = useParams()
  const [adsCategory, setadsCategory] = useState(value?.id)
  const [totalPrice, setTotalPrice] = useState(value?.id)
  const [totalAds, settotalAds] = useState(value?.id)
  const [totalAdsMonth, settotalAdsMonth] = useState(value?.id)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [planValue, setPlanValue] = useState(null);
  const [dataValue, setDataValue] = useState(null);
  const [currentPlan, setCurrentPlan] = useState(null);
  const [phone, setPhoneNumber] = useState(null);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [finalObj, setFinalObj] = useState(null);


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
    formdata["price"] = 199;
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
    bodyData.append("planValue", "VerifiedCustomer");
    bodyData.append("Phone", phone);
    bodyData.append("adsCategory", adsCategory)
    bodyData.append("PriceValue", 199)
    // bodyData.append("adsValue",planValue=="Premium"?noOfFeaturedAds:10)
    // bodyData.append("monthsVale",planValue=="Premium"?noOfFeaturedMonth:3)
    // bodyData.append("city",premiumCity)
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

  }
  const handleFreePlan = (e) => {
    console.log("eeeee", e)
    showModal(e)
    // alert("Checking");
  };
  const showModal = (e) => {
    setIsModalOpen(true);
    setCurrentPlan(e);
    if (e == "VerifiedCustomer") {
      setPlanValue(299);
    }

    console.log(e);
  };

  const handlePayment = () => {
    setIsVerified(true);
  };

  return (
    <>
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
      <Card className="col-lg-4 mt-3">
        <Card.Body>
          <center>
            <Card.Title>
              <h4 style={{ color: "#0085db" }}>
                <GoVerified style={{ color: "#0085db" }} /> To Get Verified
              </h4>
            </Card.Title>
            <Card.Text>
              To Become Our Verified Customer, You Need to Pay Rs. 99 per month
              <button onClick={handlePayment} style={{ color: 'rgba(251, 0, 21, 0.79)', fontSize: '16px' }}><b>Via Hola9 Wallet</b></button>
            </Card.Text>
          </center>
          {isVerified ? (
            <p style={{ color: "#0085db" }}>You are a verified customer.</p>
          ) : (
            <>
              <center>
                <Button varient="primary" onClick={() => handleFreePlan("VerifiedCustomer")}>
                  Pay Rs. 99
                </Button>
              </center>

            </>
          )}
        </Card.Body>
      </Card>
      <Card className="col-lg-4 mt-3">
        <Card.Body>
          <center>
            <Card.Title>
              <h4 style={{ color: "gray" }}>
                <GoVerified /> To Get Verified
              </h4>
            </Card.Title>
            <Card.Text>
              To Become Our Verified Customer, You Need to Pay Rs. 199 per month
              <button onClick={handlePayment} style={{ color: 'gray' }}> Via Payment Gateway</button>
            </Card.Text>
          </center>
          {isVerified ? (
            <p style={{ color: "#0085db" }}>You are a verified customer.</p>
          ) : (
            <>
              <center>
                <Button varient="primary" id="plan" onClick={handlePayment}>
                  Pay Rs. 199
                </Button>
              </center>

            </>
          )}
        </Card.Body>
      </Card>

    </>
  );
};

export default Verified;
