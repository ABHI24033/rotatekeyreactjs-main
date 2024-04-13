import React from "react";
import Hola9logo from "../component/images/logotext.png";
import PropagateLoader from "react-spinners/PropagateLoader";
const Spiner = () => {
  return (
    <div
      style={{
        // width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="text-center">
        <img
          src={Hola9logo}
          style={{ width: "90px", height: "40px" }}
          alt="Loading"
        />
        <div className="text-center">
          <PropagateLoader color="#394275" cssOverride={{}} />
        </div>
      </div>
    </div>
  );
};

export default Spiner;
