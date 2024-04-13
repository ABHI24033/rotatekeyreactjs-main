import React from "react";
import nodata from "../images/nodata.mp4";

const NoDataFound = () => {
  return (
    <>
      <video
        style={{
          width: "100%",
          height: "500px",
          backgroundColor: "white",
        }}
        autoPlay
        loop
        muted
      >
        <source src={nodata} type="video/mp4" />
      </video>
    </>
  );
};

export default NoDataFound;
