import React from "react";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import styles from './ChatHome.module.css';


const ChatHome = (props) => {
  console.log("home component", props);
  return (
    <div className="home " style={{backgroundColor:"#a7bcff00"}}>
      <div className="container" >
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default ChatHome;