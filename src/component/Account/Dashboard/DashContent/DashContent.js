import React, { useEffect, useState } from "react";
import { localUrl } from "../../../env";
import "./DashContent.css";

const DashContent = () => {
  const [payment, setPayment] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("access_token") != null) {
      let barererToken = "Bearer " + localStorage.getItem("access_token");
      var myHeaders = new Headers();
      myHeaders.append("Authorization", barererToken);

      var formdata = new FormData();
      formdata.append("user", "1");

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch(localUrl + "user/ordersPyament/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setPayment(result);
        })
        .catch((error) => console.log("error", error));
    }
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Payment Details</h1>
      <section className="profile-part">
        <div className="container">
          <div className="row">
            {payment.map((payment) => (
              <div className="col-lg-6">
                <div className="account-card">
                  <div className="account-title">
                    {/* <h3>Payment Details</h3> */}
                    {/* <a href="setting.html">Edite</a> */}
                  </div>
                  <ul className="account-card-list">
                    <li>
                      <h5>Title:</h5>
                      <p>
                        {JSON.parse(payment.fields.ProductData).map(
                          (result) => {
                            return result.fields.title;
                          }
                        )}
                      </p>
                    </li>
                    <li>
                      <h5>Joined:</h5>
                      <p>{payment.fields.dateid}</p>
                    </li>
                    <li>
                      <h5>Transation ID:</h5>
                      <p>{payment.fields.id1.slice(6)}</p>
                    </li>
                    <li>
                      <h5>Payment Details:</h5>
                      <p
                        style={{
                          color: "green",
                          fontWeight: "bold",
                          textTransform: "capitalize",
                        }}
                      >
                        {payment.fields.message}
                      </p>
                    </li>
                    <li>
                      <h5>Price(₹):</h5>
                      <p>100</p>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DashContent;
