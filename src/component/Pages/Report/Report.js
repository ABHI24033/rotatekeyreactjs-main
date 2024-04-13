
// import React, { useEffect, useState } from "react"
// import { Link } from 'react-router-dom';
// import './error.css';
import { useState } from 'react';
import '../../Ads/Allads/ProductDetails.css';
import { url } from '../../env';
// import Hola9logo from '../images/logotext.png';


const Report = (props) => {
    const [success,setSuccess]=useState(null)
    console.log('propsreport value',props);
    const [reportMessage,setReportMessage]=useState("")
    const handleChange=(e)=>{
        var name=e.target.name
        var value=e.target.value
        setReportMessage(value)
        console.log("@@checking signupform value",name,value)
      }
      const handleSubmit=(e)=>{
        e.preventDefault();
        var formdata = new FormData();
formdata.append("ads", props.id);
formdata.append("report", reportMessage);

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch(url+"api/adsapi/ReportAds", requestOptions)
  .then(response => {console.log("reponse",response)
  setSuccess(true)})
  .catch(error => {setSuccess(false)}
  );
      }
  return (
    <>

<div
                    className="col-lg-12 col-md-12 col-sm-6 match-height"
                    style={{}}
                  >
                    <div className="widget-box ">
                      {/*ReportAd*/}
                      <div className="widget-content widget-content-post">
                        <div className="user-make-offer-message border-bottom widget-content-post-area">
                         
                          {/* Tab panes */}
                          {!success?
                          <div className="tab-content">
                            <div
                              role="tabpanel"
                              className="tab-pane active"
                              id="report"
                            >
                              <form
                                method="post"
                                className="form-horizontal"
                                data-toggle="validator"
                                noValidate="true"
                              >
                                <div className="radio">
                                  <input
                                    id="illegal"
                                    onChange={handleChange}
                                    defaultValue="illegal"
                                    type="radio"
                                    value="This is illegal/fraudulent"
                                    name="report_ad_val"
                                  />
                                  <label htmlFor="illegal">
                                    This is illegal/fraudulent
                                  </label>
                                  <input onChange={handleChange}
                                    id="spam"
                                    defaultValue="spam"
                                    type="radio"
                                    value="This ad is spam"
                                    name="report_ad_val"
                                  />
                                  <label htmlFor="spam">This ad is spam</label>
                                  <input
                                    id="duplicate"
                                    onChange={handleChange}
                                    defaultValue="duplicate"
                                    type="radio"
                                    value=" This ad is a duplicate"
                                    name="report_ad_val"
                                  />
                                  <label htmlFor="duplicate">
                                    This ad is a duplicate
                                  </label>
                                  <input
                                    id="wrong_category"
                                    onChange={handleChange}
                                    defaultValue="wrong_category"
                                    type="radio"
                                    value=" This ad is in the wrong category"
                                    name="report_ad_val"
                                  />
                                  <label htmlFor="wrong_category">
                                    This ad is in the wrong category
                                  </label>
                                  <input
                                    id="post_rules"
                                    onChange={handleChange}
                                    defaultValue="post_rules"
                                    type="radio"
                                    value=" The ad goes against posting rules"
                                    name="report_ad_val"
                                  />
                                  <label htmlFor="post_rules">
                                    The ad goes against posting rules
                                  </label>
                                  <input
                                    id="post_other"
                                    onChange={handleChange}
                                    defaultValue="post_other"
                                    type="radio"
                                    value="Other"
                                    name="report_ad_val"
                                  />
                                  <label htmlFor="post_other">Other</label>
                                </div>
                                <div className="otherMSG">
                                  <textarea
                                    id="other_report"
                                    name="other_report"
                                    className="form-control"
                                    placeholder="Type here..!"
                                    defaultValue={""}
                                    value="other"
                                  />
                                </div>
                                <input
                                  type="hidden"
                                  name="classiera_post_title"
                                  id="classiera_post_title"
                                  defaultValue="Apple iPhone Mobile for sale"
                                />
                                <input
                                  type="hidden"
                                  name="classiera_post_url"
                                  id="classiera_post_url"
                                  defaultValue="https://demo.joinwebs.com/classiera/pearl/apple-iphone-mobile-for-sale/"
                                />
                                <input
                                  type="hidden"
                                  name="submit"
                                  defaultValue="report_to_admin"
                                />
                                <button onClick={handleSubmit}
                                  className="btn btn-primary btn-block btn-sm sharp btn-style-one"
                                  name="report_ad"
                                  value="report_ad"
                                  type="submit"
                                >
                                  Report
                                </button>
                              </form>
                            </div>
                            {/*tabpanel*/}
                          </div>:<div>sonn we will notify you</div>}
                          {/*tab-content*/}
                        </div>
                        {/*user-make-offer-message*/}
                      </div>
                      {/*widget-content*/}
                      {/*ReportAd*/}
                    </div>
                    {/*widget-box*/}
                  </div>
    
    </>
  )
}

export default Report
