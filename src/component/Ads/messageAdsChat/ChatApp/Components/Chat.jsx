import React, { useContext } from "react";

import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Chat = () => {
  const { data } = useContext(ChatContext);
  console.log(data);
  const uuid = useSelector((state) => state.ChatSlice);
  console.log("uuid check ", uuid);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          {/* <input type="tel" id="phone" name="phone" /> */}
          <a href={`tel:+91${uuid?.phoneNumber}`}>
            <BsFillTelephoneFill className="text-white" />
          </a>

          {/* <img src={Cam} alt="" /> */}
          {/* <img src={Add} alt="" /> */}
          {/* <img src={More} alt="" /> */}
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
