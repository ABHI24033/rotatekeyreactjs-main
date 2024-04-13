import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../../../firebase";
import { useContext } from "react";
import { UserContext } from "../../../../../App";
import { useSelector } from "react-redux";

const FireLogin = (props) => {
  const { data } = useSelector((state) => state.userIdSlice);
  console.log(data, "user login");
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
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
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

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
        <span className="logo">RotateKey Chat</span>
        <span className="title">Login</span>
        <button className="sign-in" onClick={signInWithGoogle}>
          Sign In with Google
        </button>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You don't have an account?{" "}
          <button onClick={() => props.toggleForm()}>Register</button>
        </p>
      </div>
    </div>
  );
};

export default FireLogin;
