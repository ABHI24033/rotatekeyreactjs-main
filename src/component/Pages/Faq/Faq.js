
// import React, { useEffect, useState } from "react"
// import { Link } from 'react-router-dom';
// import './error.css';
// import Hola9logo from '../images/logotext.png';
import './Faq.css';

import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { add } from '../../../store/Track/trackUserSlice';
const Faq = () => {
  const disptach=useDispatch()
  useEffect(()=>{
   disptach(add({view:["faq"]}))
  },[])
  
 
  return (
    <>

<main id="main" className="site-main " style={{height:'auto'}}>
  <div
    className="page-title page-title--small align-left hidden-sm hidden-xs visible-md-block visible-lg-block"
    style={{
      background: "linear-gradient(rgb(43, 88, 118), rgb(78, 67, 118))"
    }}
  >
    <div className="container">
      <div className="page-title__content">
        <h1 className="page-title__name">FAQ</h1>
      </div>
    </div>
  </div>
 
  <div className="col-lg-3 "></div>
<div className="col-lg-8 col-md-7 col-sm-12 mt-2">
  <p>
    <a
      className="btn-faq p-2 w-100 text-black bg-light"
      data-bs-toggle="collapse"
      href="#collapseExample"
      role="button"
      aria-expanded="false"
      aria-controls="collapseExample"
    >
      hello how can we help
    </a>
  </p>
  <div className="collapse" id="collapseExample">
    <div className="card card-body">
      Some placeholder content for the collapse component. This panel is hidden
      by default but revealed when the user activates the relevant trigger.
    </div>
  </div>
  </div>
  <div className='col-lg-3'></div>
<div className='col-lg-8 col-md-8 col-sm-12'>
  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        Accordion Item #1
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by
        default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance,
        as well as the showing and hiding via CSS transitions. You can modify
        any of this with custom CSS or overriding our default variables. It's
        also worth noting that just about any HTML can go within the{" "}
        <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
 </div>

 <div className="accordion mt-4" id="accordionExample">
 
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        Accordion Item #2
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
 </div>


 <div className="accordion" id="accordionExample">
  
 
  <div className="accordion-item mt-3">
    <h2 className="accordion-header" id="headingThree">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
        Accordion Item #3
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
</div>
</div>


</main>






    
    </>
  )
}

export default Faq
