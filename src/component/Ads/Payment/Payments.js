import React , {useState} from 'react'
import Axios from "axios";
import { server } from "../../../server";
import { localUrl,url } from '../../env';
const Payments = () => {
    const [name, setName] = useState(JSON.parse(localStorage.getItem("payAdsData")).title);
    // const [amount, setAmount] = useState("");
    const [amount, setAmount] = useState(100);
    // const [email, setEmail] = useState("");
  
    const handleSuccess = (res) => {
      
      // separate key and values from the res object which is nothing but param_dict
      let keyArr = Object.keys(res);
      let valArr = Object.values(res);
  
      // when we start the payment verification we will hide our Product form
      document.getElementById("paymentFrm").style.display = "none";
  
      // Lets create a form by DOM manipulation
  
      // display messages as soon as payment starts
      let heading1 = document.createElement("h1");
      heading1.innerText = "Redirecting you to the paytm....";
      let heading2 = document.createElement("h1");
      heading2.innerText = "Please do not refresh your page....";
  
      //create a form that will send necessary details to the paytm
      let frm = document.createElement("form");
      frm.action = "https://securegw-stage.paytm.in/order/process/";
      frm.method = "post";
      frm.name = "paytmForm";
  
      // we have to pass all the credentials that we've got from param_dict
      keyArr.map((k, i) => {
        // create an input element
        let inp = document.createElement("input");
        inp.key = i;
        inp.type = "hidden";
        // input tag's name should be a key of param_dict
        inp.name = k;
        // input tag's value should be a value of key that we are passing in inp.name
        inp.value = valArr[i];
        // append those all input tags in the form tag
        frm.appendChild(inp);
        // we will submit this form with all the credentials present in param_dict
      });
  
      // append all the above tags to the body tag
      document.body.appendChild(heading1);
      document.body.appendChild(heading2);
      document.body.appendChild(frm);
      // finally submit that form with all the inpput tags to get a confirmation from the paytm
      frm.submit();
      console.log("success chackiung that one ")
      // if you remember, the param_dict also has "'CALLBACK_URL': 'http://127.0.0.1:8000/api/payment/handlepayment/'"
      // so as soon as paytm get the payment it will hit that callback url with some response and
      // on the basis of that response we are displaying the payment successfull or failed message at the backend
    };
  
    const startPayment = async () => {
      let bodyData = new FormData();
  
      // we will pass the amount and product name to the backend using form data
      // bodyData.append("amount", amount);
      bodyData.append("amount", 100);
      bodyData.append("name", name);
      bodyData.append("email", email);
  
      await Axios({
        url: `${url}/api/payment/pay/`,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: bodyData,
      }).then((res) => {
        
        // we will retreive the param_dict which we are
        // passing from the backend with all the necessary credentials
        // and we will pass it to handleSuccess() func to send it to the paytm
        if (res) {
        
          handleSuccess(res.data.param_dict);
          console.log("success message")
        }
      });
    };
    //ADD TITLE
    //START
    
    //END
  //PROFILE DATA
  //START
  const [id, setId] = useState();
  const [loder, setLoader] = useState(false);
  const [profileform, setprofileform] = useState({
    name: "",
    email: "",
    PhoneNumber: "",
    address: "",
    state: "",
    city: "",
    zipcode: "",
  });
  // const [name, setName] = useState();
  const [email, setEmail] = useState();

  if (localStorage.getItem("access_token") != null) {
    let barererToken = "Bearer " + localStorage.getItem("access_token");

    var myHeaders = new Headers();
    myHeaders.append("Authorization", barererToken);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
    fetch(localUrl+"user/profile/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // setprofileform(profileform.name=result.name)
        // setName(result.name);
        setEmail(result.email);
        setId(result.id);
       localStorage.setItem("userid",result.id)

        // setLoader(false);
      })
      .catch((error) => console.log("error", error));
  }
  //END OF PROFILE DATA FETCH
  
    return (
      <div id="paymentFrm" className="container" style={{ marginTop: "20vh" }}>
        <form>
          <h1>Payment page</h1>
  
          <div className="form-group">
            <label htmlFor="name">Product name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Amount</label>
            <input
              type="text"
              className="form-control"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </form>
        <button onClick={startPayment} className="btn btn-primary btn-block">
          Pay with PayTm
        </button>
      </div>
    );
}

export default Payments
