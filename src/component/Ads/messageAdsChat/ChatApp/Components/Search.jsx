import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../../../../../firebase";
import { AuthContext } from "../context/AuthContext";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../../../../../Loader/Loader";
import { Button } from "@mui/material";
const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const { currentUser } = useContext(AuthContext);
  const uid = useSelector((state) => state.ChatSlice);
  console.log("homepage", uid?.data);
  const getdata = async () => {
    setLoading(true);
    const q = query(collection(db, "users"), where("uid", "==", uid.data));
    try {
      setLoading(true);
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
      setLoading(false);
    } catch (err) {
      setLoading(true);
      setErr(true);
    }
  };
  useEffect(() => {
    if (uid?.data) {
      getdata();
    }
  }, []);

  const handleSearch = async () => {
    setUser(null);
    setLoading(true);
    setErr(false);
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      setLoading(true);
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        console.log(doc.data(), "check new val");
      });
      if (querySnapshot._snapshot?.docChanges?.length) {
        setErr(false);
      } else {
        setErr(true);
      }
      setLoading(false);
    } catch (err) {
      console.log("check Error");
      setErr(true);
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  const handleButton = (e) => {
    handleSearch();
  };
  console.log(user, "user");
  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    setLoading(true);
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      setLoading(true);
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        setLoading(true);
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
    }
    setLoading(false);
    setUser(null);
    setUsername("");
  };
  return (
    <div className="search">
      {/* <div className="searchForm"> */}
      <div className="m-1 mt-2">
        <input
          style={{
            marginRight: "10px",
            marginBottom: "5px",
            color:'white'
          }}
          className="w-100 text-danger"
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />

        <Button variant="outlined" onClick={handleButton} className="w-100 text-white border border-white">
          Search
        </Button>
        </div>
      {/* </div> */}

      {loading && <Loader />}
      {err && <div className="text-center w-80 m-1 text-white">User not found!</div>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
