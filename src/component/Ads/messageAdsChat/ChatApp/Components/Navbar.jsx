import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../../../firebase";
import { AuthContext } from "../context/AuthContext";
import Register from "../Auth/Register";

const Navbar = (props) => {
  console.log("prosp", props);
  const { currentUser } = useContext(AuthContext);
  const logout = () => {
    // debugger;
    signOut(auth).then(() => {});
  };
  console.log(currentUser, "navbar");
  return (
    <div className="navbar">
      <span className="logo">RotateKey Chat</span>
      <div className="user">
        <img src={currentUser?.photoURL} alt="" />
        <span>{currentUser?.displayName}</span>
      </div>
    </div>
  );
};

export default Navbar;
