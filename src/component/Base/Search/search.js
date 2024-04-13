
// import React, { useEffect, useState } from "react"
import './search.css';
import { BsGeoAlt } from "react-icons/bs";
// import Hola9logo from '../images/logotext.png';
// import Filter from '../../Filter/Filter';
// import Findfilter from '../../Filter/Findfilter';
import { useState } from 'react';


const Search = () => {
 

 
  return (
    <>
    
<div className='row .d-sm-none .d-md-block' style={{marginBottom:'20px'}}>
<div className='col-lg-2'></div>
  
  <div className='col-lg-3 col-md-3 col-sm-12 ' style={{border:'1px solid white',background:'white',display:'flex'}}>
  <div style={{fontSize:'23px',marginTop:'24px'}}><BsGeoAlt /></div>
  <a  tabIndex={0} style={{padding:'10px'}}><Filter/>  </a>
  </div>
  <div className='col-lg-3 col-sm-12' style={{border:'1px solid white',background:'white'}}>
  <div style={{ width:'0px', height: '100%',float: 'left' ,border: '1px inset'}}></div>
  <a tabIndex={0} style={{padding:'10px' }}> <Findfilter/> </a>
  </div>
  <div className='col-lg-1 col-sm-12' style={{border:'1px solid white',background:'white'}}>
    
  <a className="s-btn" tabIndex={0} style={{height:'70px',width:'120px',marginTop:'0px',
  marginLeft:'-39px',background:'red',paddingTop:'20px',paddingLeft:'10px',fontSize:'19px',color:'white'}}>
      Get Experts 
  </a>
  </div>
</div>



    {/* <div className='row'>
    <div className='col-lg-2'></div>
    <div className='col-lg-8 col-md-8 col-sm-12' style={{paddingBottom:'20px'}}>
<div className="search-hp" style={{display:'flex'}}>
   <div className="hp-city sdropdown" style={{marginTop:'0px'}}>
    <a className="input sd-link" tabIndex={0}> Bangalore </a>
    <a className="input sd-link" tabIndex={0}> <Filter/> </a>

    <div className="sd-menu">
      <div className="search-wrap">
        <input className="sinput" type="search" placeholder="Search your city"autoComplete="off" />
      </div>
      <div className="results-wrap">
        <ul className="ac-menu " />
      </div>
     
    </div>
  </div> */}
 
  {/* <div className="hp-search" >
    <a className="search-clear">×</a>
    <input type="search" placeholder="Find your service here" autoComplete="off"
      onfocus="this.removeAttribute('readonly')"ondrop="return false" />{" "}
    <a className="s-btn" tabIndex={0} style={{height:'50px',marginTop:'-2px',}}>
      Get Experts 
    </a>
    <ul className="ac-menu ac-float " style={{ display: "none" }}>
      <li className="ac-group-label">Recent search</li>
      <li className="ac-list">
        <a>Advocates &amp; lawyers</a>
      </li>
      <li className="ac-group-label">Popular categories</li>
      <li className="ac-list">
        <a>Ac services</a>
      </li>
      <li className="ac-list">
        <a>Advocates &amp; lawyers</a>
      </li>
      <li className="ac-list">
        <a>Apartments &amp; Flats</a>
      </li>
      <li className="ac-list">
        <a>Apartments for Rent</a>
      </li>
      <li className="ac-list">
        <a>Building Constructors and Contractors</a>
      </li>
      <li className="ac-list">
        <a>Catering services</a>
      </li>
      <li className="ac-list">
        <a>Chartered accountants</a>
      </li>
      <li className="ac-list">
        <a>Cleaning services</a>
      </li>
      <li className="ac-list">
        <a>Computer repair services</a>
      </li>
      <li className="ac-list">
        <a>Event management companies</a>
      </li>
      <li className="ac-list">
        <a>Home Appliances Repair and Services</a>
      </li>
      <li className="ac-list">
        <a>House keeping Services</a>
      </li>
      <li className="ac-list">
        <a>Houses &amp; Villas</a>
      </li>
      <li className="ac-list">
        <a>Houses for Rent</a>
      </li>
      <li className="ac-list">
        <a>Interior Design and Decorators</a>
      </li>
      <li className="ac-list">
        <a>Job Training</a>
      </li>
      <li className="ac-list">
        <a>New Projects</a>
      </li>
      <li className="ac-list">
        <a>Packers and Movers</a>
      </li>
      <li className="ac-list">
        <a>Photographers and Video Graphers</a>
      </li>
      <li className="ac-list">
        <a>Plots &amp; Lands</a>
      </li>
      <li className="ac-list">
        <a>PG &amp; Hostels</a>
      </li>
      <li className="ac-list">
        <a>Security Guards</a>
      </li>
      <li className="ac-list">
        <a>Security system dealers</a>
      </li>
      <li className="ac-list">
        <a>Vehicle rentals</a>
      </li>
      <li className="ac-list">
        <a>Website services</a>
      </li>
      <li className="ac-list">
        <a>Womens beauty parlour services</a>
      </li>
    </ul>
  </div> */}
{/* </div> */}
{/* </div> */}
{/* </div> */}

    
    </>
  )
}

export default Search
