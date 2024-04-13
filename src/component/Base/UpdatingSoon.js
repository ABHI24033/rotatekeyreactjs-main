import React from "react";
import comingsoon from "../images/comingsoon.mp4";

const UpdatingSoon = () => {
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
        <source src={comingsoon} type="video/mp4" />
      </video>
    </>
  );
};

export default UpdatingSoon;
