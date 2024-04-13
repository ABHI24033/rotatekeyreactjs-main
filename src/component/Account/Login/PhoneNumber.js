// import React,{useState} from 'react'
// import '../Login/PhoneNumber.scss';
// // import validator from 'validator'
// import {authentication} from '../Login/firebaseConfig';
// import {  RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";

// const PhoneNumber = () => {
//     const countryCode = "+91";

//     const [phoneNumber,setPhoneNumber]= useState(countryCode);
//     const [expandForm,setExpandForm]= useState(false);
//     const[OTP, setOTP] = useState('');
//     const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");

//     const generateRecaptcha = ()=>{
//         window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
//             'size': 'invisible',
//             'callback': (response) => {
//               // reCAPTCHA solved, allow signInWithPhoneNumber.
//             }
//           }, authentication);

//     }

//     const requestOTP = (e)=>{
//         e.preventDefault();
//         if(phoneNumber.length>=12){
//             setExpandForm(true);
//             generateRecaptcha();
//             let appVerifier =  window.recaptchaVerifier;
//             signInWithPhoneNumber(authentication,phoneNumber,appVerifier)
//             .then(confirmationResult => {
//                  window.confirmationResult = confirmationResult;
//             }).catch((error) => {
//              });

//         }
//     }

//     const verifyOTP = (e) =>{
//       let otp = e.target.value;
//       setOTP(otp);

//     }

// const handleSubmit = (event) => {

//   event.preventDefault()
//   if(phoneNumber==="" || OTP===""){
//     setError("enter mobile number & password")
//     setSuccess("")
//   }
//   else {
//     if(OTP.length === 6){

//       let confirmationResult = window.confirmationResult;
//       confirmationResult.confirm(OTP).then((result) => {
//         // User signed in successfully.
//         const user = result.user;

//         var formdata = new FormData();

//         formdata.append("phoneNumber", phoneNumber);

//         var requestOptions = {

//           method: 'POST',

//           body: formdata,

//           redirect: 'follow'

//         };

//         fetch("  http://192.168.0.103:8000/api/user/Phoneregister/", requestOptions)

//           .then(response => response.text())
//         // ...
//       }).catch((error) => {

//         // User couldn't sign in (bad verification code?)
//         // ...
//       });
// }

//   return (
//     <>
//        <form onSubmit={requestOTP}>
//             <h4>Enter Your Mobile number to continue...</h4>
//             <a className="close" href="#">×</a>
//             <div className="content">
//             <div className="field-input">
//              <label htmlFor="name">PhoneNumber:</label>
//              <input style={{ width: "80%" }} type="text" id="PhoneNumber" name="PhoneNumber"
//            value={phoneNumber} onChange={(event)=> setPhoneNumber(event.target.value)}  className="form-control"placeholder="Enter Name"/>
//             </div>
//             {
//             expandForm === true?
//             <>
//             <label>OTP</label>
//             <input type="number" id="otpInput" value={OTP} onChange={verifyOTP}/>
//             </>
//             :
//             null
//             }

//             {
//                 expandForm === false?
//                 <button type="submit">Request otp</button>
//                 :
//                 null
//             }

//             <button type="submit" onClick={handleSubmit} className="custom-btn btn-12"><span>Click!</span><span>Submit</span></button>
//                  {success ? (
//                       <div className="text-success">{success}</div>
//                     ) : null}
//                     {error ? <div className="text-danger">{error}</div> : null}

//             <div id="recaptcha-container"></div>
//             </div>

//           </form>

//     </>
//   )
// }

// export default PhoneNumber
