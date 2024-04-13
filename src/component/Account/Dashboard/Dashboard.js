
import React, {useState, useEffect, useContext} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import axios from "axios";
import {  Space, Spin } from 'antd';
import { encrypt } from '../../Base/encryptDecrypt/encryptDecrypt';
import Error from '../../Base/errorPage/error';
import { localUrl, url } from '../../env';
import { ClipLoader } from "react-spinners";
import './Dashboard.css';
// import DashContent from './DashContent/DashContent';
import LeftDashboard from './LeftDashboard/leftDashboard';
import ProfileDashboard from './profileDashboard/profileDashboard';
import { isMobile } from 'react-device-detect';
import DashAds from './DashAds/DashAds';
import Alert from "react-bootstrap/Alert";
import { UserContext } from '../../../App';
import Pricing from '../../Ads/Pricing/Pricing';
import { useDispatch } from "react-redux";
import { add } from '../../../store/Track/trackUserSlice';
import YoutubeMagic from '../../ContentLoader/YoutubeMagic';


const Dashboard = () => {
  const [databusiness, setDataBusiness] = useState([]);

  const[business,setBusiness]=useState(true)
  const value=useParams()
  const navigate=useNavigate()
  const[success,setSuccess]=useState(false)
  const[dashLoader,setdashLoader]=useState(false)
  const[loading,setLoading]=useState(true);

  const[toggle,setToggle]=useState(true);
  const[error,setError]=useState(null)
  const style = {textAlign: 'center'};
  const dataUser = useContext(UserContext);
  const [pricingPlan,setPricingPlan]=useState(true)
  useEffect(()=>{
     
console.log("value",value)
if(localStorage.getItem("payAdsData") && value?.token){

  console.log('he is getting')
   
  // let formdata = new FormData();
  let valuesession=JSON.parse(localStorage.getItem("payAdsData"))
 

  if (localStorage.getItem("access_token") != null) {
    let barererToken = "Bearer " + localStorage.getItem("access_token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", barererToken);
  
  var formdata = new FormData();
  formdata.append("title", valuesession["title"]);
  formdata.append("price", valuesession["price"]);
  formdata.append("tags", valuesession["tags"]);
  formdata.append("description", valuesession["description"]);
  formdata.append("category", valuesession["category"]);
  formdata.append("brand", valuesession["brand"]);
  formdata.append("condition", valuesession["condition"]);
  formdata.append("state", valuesession["state"]);
  formdata.append("city", valuesession["city"]);
  formdata.append("locality", valuesession["locality"]);
  formdata.append("zip_code", valuesession["zip_code"]);
  formdata.append("date_created", valuesession["date_created"]);
  formdata.append("user", "1");
  formdata.append("token",value.token)
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };
  
  fetch(localUrl+"user/createFeatured/", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log("",result)
      setSuccess(true)
      console.log("result",result)})
    .catch(error =>{
      setError("Facing some issue! Please come after sometime!")
    });
    localStorage.removeItem("payAdsData")

}
}
  },[])
  const activeRequest =()=>{
        
    var formdata = new FormData();
    formdata.append("user", dataUser.userid);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(localUrl+"adsapi/getPricingViews", requestOptions)
      .then(response => response.json())
      .then(result => {
     if(result?.length==0){
      setPricingPlan(false)
     }
     console.log("@!!!!!!!!result value",result,dataUser.userid)
        dataUser.setActivePlan(result)
      })
      .catch(error => console.log('error', error));
}
useEffect(() => {
    activeRequest()
  
}, [dataUser.userid,dataUser.pricing])
  // useEffect(()=>{
  //   window.location.reload()
  // console.log("!!!!!!!reload calling ")
  // },[localStorage.getItem('access_token')])

  useEffect(()=>{
    if(isMobile){
      setToggle(false)
    }
    setdashLoader(true)
    let barererToken="Bearer "+localStorage.getItem("access_token")
    var myHeaders = new Headers();
    myHeaders.append("Authorization", barererToken);
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch(url+"api/user/profile/", requestOptions)
      .then(response => response.json())
      .then(result => {
          let value={"key":"userdata",value:result}
          dataUser.setUserID(result.id)
          encrypt(value)
        // setLoader(false)
      })
      .catch(error => {
        setError("Having some Issue")
      });
      setdashLoader(false)
  },[])
  useEffect(()=>{
    if(localStorage.getItem("access_token")==null){
      return <Error/>
     }
  },[])
  const dispatch = useDispatch();
 useEffect(()=>{
    dispatch(add({view:["Dashboard"]}))
  },[])

  useEffect(() => {
    const t = setTimeout(()=>{
      setLoading(false);
    },1000);
    return ()=>{
      clearTimeout(t);
    }
  
  
   
  }, [])

  useEffect(() => {
    var formdata = new FormData();
formdata.append("userid", dataUser.userid);

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};
    // Call API here and update the data state

fetch("http://139.59.26.221:8000/api/adsapi/checkBusinessPlan", requestOptions)
  .then(response => response.json())
  .then(result =>{console.log(result,"dt")
      setDataBusiness(result)}) 
  .catch(error => console.log('error', error));
 
  }, []);
  console.log(  databusiness,"lk")
  return (
    <>
   
     {loading ?(
      <div style={{ 
        margin: '20%',textAlign:'center'}}>  <Spin tip="Loading..."></Spin></div>
    ):(<div>
      
  
    {
      success?<div>sucessfully completed</div>:null}
    
      {pricingPlan?<main id="main" className="site-main">
        <div className="site-content owner-content">
        <div style={style}>
      <ClipLoader color={"#123abc"} loading={dashLoader} />
    </div>
          <ProfileDashboard Plan={databusiness.Plan}/>
          {/* <ProfileDashboard data={databusiness}/> */}

          <LeftDashboard businessPlan={databusiness.businessPlan} />
        </div>
      </main>:navigate('/pricing')}
      {/* <div><Pricing></Pricing></div> */}
      </div>)} 
      
    </>
  )
}

export default Dashboard