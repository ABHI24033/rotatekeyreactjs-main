import React, { useEffect, useState } from "react";
import ads from "../../../../images/ads.jpg";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db, storage } from "../../../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import "../style.scss";
import { useSelector } from "react-redux";
const Register = (props) => {
  const uuid = useSelector((state) => state.ChatSlice);
  const { data } = useSelector((state) => state.userIdSlice);
  console.log("uuid", uuid?.data);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  console.log(props);
  const autoLogin = async () => {
    const email = data.email;
    const password = data.email.slice(0, 8);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      // localStorage.setItem("uuid", res?.user?.uid);
      console.log("login", res);
      props.showHome();
      // navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  useEffect(() => {
    // call uuse Effect
    if (data) {
      autoLogin();
    }
  }, []);
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = ads;

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      console.log(res);

      // Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);
      console.log(storageRef);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            // Update profile
            // await updateProfile(res.user, {
            //   displayName,
            //   photoURL: downloadURL,
            // });
            //   //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            // navigate("/");
            props.showHome();
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  //   const auth = firebase.auth();
  // const firestore = firebase.firestore();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    console.log("hello", auth, provider);
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("result", result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        console.log(auth, provider, "auth provider");
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log("credentail", credential);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        props.showHome();
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

    // console.log("authethicall", auth.signInWithPopup(provider));
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Hola9 Chat</span>
        <span className="title">Register</span>
        <button className="sign-in" onClick={signInWithGoogle}>
          Sign Up with Google
        </button>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          {/* <input required style={{ display: "none" }} type="file" id="file" /> */}
          <label htmlFor="file">
            {/* <img src={Add} alt="" /> */}

            <span>Add an avatar</span>
          </label>
          <button disabled={loading}>Sign up</button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You do have an account?{" "}
          <button onClick={() => props.clickRegister()}>Login</button>
        </p>
      </div>
    </div>
  );
};

export default Register;
