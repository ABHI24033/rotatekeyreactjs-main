import React, { useContext, useState } from "react";
import Img from "./Img.png";
import Attach from "./attach.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../../../../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import axios from "axios";
import { Toast } from "bootstrap";

// import { onMessageListener } from "../../../../../firebase";
import { useEffect } from "react";
import { Button } from "antd";
import { useSelector } from "react-redux";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [empty, setEmpty] = useState("");
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    if (text) {
      if (img) {
        const storageRef = ref(storage, uuid());

        const uploadTask = uploadBytesResumable(storageRef, img);

        uploadTask.on(
          (error) => {
            //TODO:Handle Error
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                await updateDoc(doc(db, "chats", data.chatId), {
                  messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now(),
                    img: downloadURL,
                  }),
                });
              }
            );
          }
        );
      } else {
        await updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            date: Timestamp.now(),
          }),
        });
      }

      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });

      await updateDoc(doc(db, "userChats", data.user.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });
    } else {
      setEmpty("please write something");
    }

    setText("");
    setImg(null);
    setLoading(false);
  };
  return (
    <>
      <div className="input" style={{backgroundColor:"white"}}>
        <input
        className="w-100 border border-info"
          type="text"
          placeholder="Type something..."
          onChange={(e) => {
            setText(e.target.value);
          }}
          disabled={loading}
          value={text}
        />
        <div className="send">
          <input
            type="file"
            style={{ display: "none" }}
            id="file"
            accept="image/x-png,image/jpeg,image/jpg "
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label
            htmlFor="file"
            style={{ width: "20px", heigth: "20px", paddingBottom: "0px" }}
          >
            {/* <img src={Img} alt="" /> */}
            <img src={Attach} alt="" />
          </label>
          <Button
         
            style={{
              display: "flex",
              alignItems:"center",
              justifyContent:"center",
              border: "none",
              padding: "10px 15px",
              color: "white",
              backgroundColor: "#2f2d52",
              cursor: "pointer",
            }}
            loading={loading}
            disabled={loading}
            onClick={handleSend}
          >
            Send
          </Button>
        </div>
      </div>
      {empty ? <h4 className="text-danger">{empty}</h4> : null}
    </>
  );
};

export default Input;
