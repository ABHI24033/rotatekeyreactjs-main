import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { localUrl } from "../../../env";
import Spiner from "../../../Spiner";
import EmptyAdsMsg from "../DashAds/EmptyAdsMsg";
import "./Orders.css";

const Orders = () => {
  const userData = useSelector((state) => state.userIdSlice);

  const [payment, setPayment] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUserPaymentDetails = async () => {
    setLoading(true);
    try {
      let formdata = new FormData();
      formdata.append("userID", userData.data.id);
      let requestOptions = {
        method: "POST",
        redirect: "follow",
        body: formdata,
      };
      const res = await fetch(
        localUrl + "payment/userTransData",
        requestOptions
      );

      const data = await res.json();
      setLoading(false);
      setPayment(data);
    } catch (error) {
      setLoading(false);
    }
    setLoading(false);
  };
  useEffect(() => {
    getUserPaymentDetails();
  }, []);

  let paymentMessage = {
    message: "You haven't buy any plan. ",
    title: "Please Buy A Plan",
    navigate: "/pricing",
    buttonName: "Buy Plan",
  };
  return (
    <>
      {loading && <Spiner />}

      {!loading && payment.length ? (
        <>
          <h1 style={{ textAlign: "center" }}>Payment Details</h1>
          <section className="profile-part">
            <div className="container pt-0">
              <div className="row">
                {payment
                  ?.sort((a, b) => b.pk - a.pk)
                  ?.map((payment) => (
                    <div className="col-lg-6">
                      <div className="account-card">
                        <div className="account-title">
                          <h3>Payment Details</h3>
                          {/* <a href="setting.html">Edite</a> */}
                        </div>
                        <ul className="account-card-list">
                          <li>
                            <h5 style={{ marginTop: "-30px" }}>Status:</h5>
                            {payment?.fields?.paymentStatus === "success" ? (
                              <p
                                className="bg-success text-white px-1"
                                style={{
                                  borderRadius: "3px",
                                  marginTop: "-20px",
                                }}
                              >
                                {payment?.fields?.paymentStatus}
                              </p>
                            ) : (
                              <p className="bg-danger text-white">
                                {payment?.fields?.paymentStatus}
                              </p>
                            )}
                          </li>
                          <li style={{ marginTop: "-30px" }}>
                            <h5>plan:</h5>
                            <p>{payment?.fields?.plan}</p>
                          </li>
                          {payment?.fields?.paymentStatus === "success" ? (
                            <li style={{ marginTop: "-30px" }}>
                              <h5>Transation ID:</h5>
                              <p>{payment?.fields?.payment_id}</p>
                            </li>
                          ) : null}
                          <li style={{ marginTop: "-30px" }}>
                            <h5>Phone Number:</h5>
                            <p>{payment?.fields?.phoneNumber}</p>
                          </li>
                          <li style={{ marginTop: "-30px" }}>
                            <h5>Date:</h5>
                            <p>{payment?.fields?.ordrDate}</p>
                          </li>
                          <li
                            style={{
                              marginTop: "-30px",
                              marginBottom: "-50px",
                            }}
                          >
                            <h5>Price(₹):</h5>
                            <p
                              style={{
                                color: "green",
                                fontWeight: "bold",
                                textTransform: "capitalize",
                              }}
                            >
                              {Math.floor(
                                payment?.fields?.order_payment_amount
                              )}
                              .00
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </>
      ) : null}
      {!loading && payment.length === 0 ? (
        <div>
          <EmptyAdsMsg plan={paymentMessage} />
        </div>
      ) : null}
    </>
  );
};

export default Orders;
