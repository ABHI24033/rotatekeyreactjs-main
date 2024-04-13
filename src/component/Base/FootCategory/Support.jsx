import React from "react";

const Support = () => {
  return (
    <>
      <div>
        <div
          className="container-fluid py-3 mt-1 px-4 "
          style={{
            background: "linear-gradient(60deg,#0f3854,#2b224c)",
            marginBottom: "-20px",
          }}
        >
          <div className="row">
            <div className=" col-xxl-12 col-xl-12 col-md-12 col-lg-12 col-12 bg-transparent my-2 text-center text-white">
              <span className="h3 text-white bg-transparent">RotateKey</span>
            </div>
            <div className="col-xxl-12 col-xl-12 col-md-12 col-lg-12 col-12 text-center bg-transparent mb-4 text-white">
              <p className="h6 text-white my-1 ">
                Our mission is to help you grow your bussiness{" "}
              </p>
              <p className="h6 text-white  ">
                Contact us for any kind of support
              </p>
            </div>
            <div className="col-xxl-12 col-xl-12 col-md-12 col-lg-12 col-12 bg-transparent text-center text-white">
              <span
                className="hover-on-Contact px-3 py-1 cursor-pointer border border-2 rounded-4 bg-transparent"
                style={{ fontSize: "16px" }}
              >
                Contact No : 9606451628
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
