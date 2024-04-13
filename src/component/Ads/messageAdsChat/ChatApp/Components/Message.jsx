import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  console.log("hello", data);

  const ref = useRef();

  const [time, setTime] = useState("");

  let currentTime = new Date().toLocaleTimeString();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    const unixTimestamp = message?.date?.seconds; // March 24, 2021 10:00:00 AM GMT+0
    const date = new Date(unixTimestamp * 1000);
    const istTime = date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    setTime(istTime.split(","));
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        {/* <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        /> */}
        <img src={data.user.photoURL} alt="" />

        {/* <span>just now</span> */}
      </div>
      <div className="messageContent">
        <p>
          {message.text}
          <sub>{time[1]?.slice(0, 5) + "  " + time[1]?.slice(-2)}</sub>
        </p>
        {message.img && (
          <>
            <img src={message.img} alt="" />
            <sub>{time[1]?.slice(0, 5) + "  " + time[1]?.slice(-2)}</sub>
          </>
        )}
      </div>
    </div>
  );
};

export default Message;
