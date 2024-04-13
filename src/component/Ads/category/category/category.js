
// import React, { useEffect, useState } from "react"
import './category.css';
// import Hola9logo from '../images/logotext.png';


const Category = () => {

 
  return (
    <>
<>
<section className="section-pad category-v2 border-bottom">
  <div className="section-heading-v1">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-md-7 center-block">
          <h3 className="text-uppercase">Ads categories</h3>
          <p>
            Semper ac dolor vitae accumsan. Cras interdum hendrerit
            lacinia.Phasellusaccumsan urna vitae molestie interdum. Nam sed
            placerat libero, non eleifend dolor
          </p>
        </div>
        {/*col-lg-7*/}
      </div>
      {/*row*/}
    </div>
    {/*container*/}
  </div>
  {/*section-heading-v1*/}
  <div className="container">
    <div className="row">
      <div
        className="col-lg-4 col-md-4 col-sm-6 match-height"
        style={{ height: 347 }}
      >
        <div className="category-box border">
          <div className="category-heading clearfix border-bottom">
            <span className="category-icon-box pull-left flip">
              <i
                className="fa fa-briefcase icon-color"
                style={{ color: "#00aeff" }}
              />
            </span>
            {/*category-icon-box*/}
            {/* <div className="category-heading-content pull-left flip">
              <h4>Jobs</h4>
              <p>0&nbsp; ads posted </p>
            </div>
            {/*category-heading-content*/}
          </div>
          {/*category-heading*/}
          <div className="category-content">
            {/* <ul>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/jobs/accounts-jobs/"
                  className="av-2"
                  data-color="#00aeff"
                  style={{ background: "rgb(250, 250, 250)" }}
                >
                  <i className="fas fa-angle-right" />
                  Accounts Jobs <span>(0)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/jobs/cleaning-washing/"
                  className="av-2"
                  data-color="#00aeff"
                >
                  <i className="fas fa-angle-right" />
                  Cleaning &amp; Washing <span>(0)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/jobs/data-entry/"
                  className="av-2"
                  data-color="#00aeff"
                  style={{ background: "rgb(250, 250, 250)" }}
                >
                  <i className="fas fa-angle-right" />
                  Data Entry <span>(0)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/jobs/design-code/"
                  className="av-2"
                  data-color="#00aeff"
                  style={{ background: "rgb(250, 250, 250)" }}
                >
                  <i className="fas fa-angle-right" />
                  Design &amp; Code <span>(0)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/jobs/finance-jobs/"
                  className="av-2"
                  data-color="#00aeff"
                  style={{ background: "rgb(250, 250, 250)" }}
                >
                  <i className="fas fa-angle-right" />
                  Finance Jobs <span>(0)</span>
                </a>
              </li>
            </ul> */}
            {/* <div className="view-button text-center">
              <a href="https://demo.joinwebs.com/classiera/strobe/category/jobs/">
                VIEW ALL
                <i className="fas fa-long-arrow-alt-right right-i" />
              </a>
            </div> */}
            {/*view-button text-center*/}
          </div>
          {/*category-content*/}
        </div>
        {/*category-box*/}
      </div>
      {/*col-lg-4*/}
      <div
        className="col-lg-4 col-md-4 col-sm-6 match-height"
        style={{ height: 347 }}
      >
        <div className="category-box border">
          <div className="category-heading clearfix border-bottom">
            <span className="category-icon-box pull-left flip">
              <i
                className="fa fa-car icon-color"
                style={{ color: "#ff0059" }}
              />
            </span>
            {/*category-icon-box*/}
            <div className="category-heading-content pull-left flip">
              <h4>Automotive</h4>
              <p>1&nbsp; ads posted </p>
            </div>
            {/*category-heading-content*/}
          </div>
          {/*category-heading*/}
          <div className="category-content">
            <ul>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/automotive/classic-fancy/"
                  className="av-2"
                  data-color="#ff0059"
                  style={{ background: "rgb(250, 250, 250)" }}
                >
                  <i className="fas fa-angle-right" />
                  Classic &amp; Fancy <span>(0)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/automotive/expensive-cars/"
                  className="av-2"
                  data-color="#ff0059"
                >
                  <i className="fas fa-angle-right" />
                  Expensive Cars <span>(0)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/automotive/heavy-vehicles/"
                  className="av-2"
                  data-color="#ff0059"
                >
                  <i className="fas fa-angle-right" />
                  Heavy Vehicles <span>(1)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/automotive/van-trucks/"
                  className="av-2"
                  data-color="#ff0059"
                  style={{ background: "rgb(250, 250, 250)" }}
                >
                  <i className="fas fa-angle-right" />
                  Van &amp; Trucks <span>(0)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/automotive/auto-parts/"
                  className="av-2"
                  data-color="#ff0059"
                  style={{ background: "rgb(250, 250, 250)" }}
                >
                  <i className="fas fa-angle-right" />
                  Auto Parts <span>(0)</span>
                </a>
              </li>
            </ul>
            <div className="view-button text-center">
              <a href="https://demo.joinwebs.com/classiera/strobe/category/automotive/">
                VIEW ALL
                <i className="fas fa-long-arrow-alt-right right-i" />
              </a>
            </div>
            {/*view-button text-center*/}
          </div>
          {/*category-content*/}
        </div>
        {/*category-box*/}
      </div>
      {/*col-lg-4*/}
      <div
        className="col-lg-4 col-md-4 col-sm-6 match-height"
        style={{ height: 347 }}
      >
        <div className="category-box border">
          <div className="category-heading clearfix border-bottom">
            <span className="category-icon-box pull-left flip">
              <i
                className="fa fa-wrench icon-color"
                style={{ color: "#66b2ba" }}
              />
            </span>
            {/*category-icon-box*/}
            <div className="category-heading-content pull-left flip">
              <h4>Services</h4>
              <p>2&nbsp; ads posted </p>
            </div>
            {/*category-heading-content*/}
          </div>
          {/*category-heading*/}
          <div className="category-content">
            <ul>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/services/cleaning-services/"
                  className="av-2"
                  data-color="#66b2ba"
                >
                  <i className="fas fa-angle-right" />
                  Cleaning Services <span>(0)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/services/educational/"
                  className="av-2"
                  data-color="#66b2ba"
                >
                  <i className="fas fa-angle-right" />
                  Educational <span>(0)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/services/food-services/"
                  className="av-2"
                  data-color="#66b2ba"
                >
                  <i className="fas fa-angle-right" />
                  Food Services <span>(0)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/services/home-office-removals/"
                  className="av-2"
                  data-color="#66b2ba"
                >
                  <i className="fas fa-angle-right" />
                  Home &amp; Office Removals <span>(1)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/services/photography/"
                  className="av-2"
                  data-color="#66b2ba"
                >
                  <i className="fas fa-angle-right" />
                  Photography <span>(0)</span>
                </a>
              </li>
            </ul>
            <div className="view-button text-center">
              <a href="https://demo.joinwebs.com/classiera/strobe/category/services/">
                VIEW ALL
                <i className="fas fa-long-arrow-alt-right right-i" />
              </a>
            </div>
            {/*view-button text-center*/}
          </div>
          {/*category-content*/}
        </div>
        {/*category-box*/}
      </div>
      {/*col-lg-4*/}
      <div
        className="col-lg-4 col-md-4 col-sm-6 match-height"
        style={{ height: 347 }}
      >
        <div className="category-box border">
          <div className="category-heading clearfix border-bottom">
            <span className="category-icon-box pull-left flip">
              <i
                className="fa fa-coffee icon-color"
                style={{ color: "#8a646c" }}
              />
            </span>
            {/*category-icon-box*/}
            <div className="category-heading-content pull-left flip">
              <h4>Restaurants &amp; Cafe</h4>
              <p>3&nbsp; ads posted </p>
            </div>
            {/*category-heading-content*/}
          </div>
          {/*category-heading*/}
          <div className="category-content">
            <ul>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/restaurants-cafe/broasted-chicken/"
                  className="av-2"
                  data-color="#8a646c"
                >
                  <i className="fas fa-angle-right" />
                  Broasted Chicken <span>(0)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/restaurants-cafe/burgers/"
                  className="av-2"
                  data-color="#8a646c"
                >
                  <i className="fas fa-angle-right" />
                  Burgers <span>(0)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/restaurants-cafe/cafe-bistro/"
                  className="av-2"
                  data-color="#8a646c"
                >
                  <i className="fas fa-angle-right" />
                  Cafe or Bistro <span>(1)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/restaurants-cafe/fast-casual/"
                  className="av-2"
                  data-color="#8a646c"
                >
                  <i className="fas fa-angle-right" />
                  Fast Casual <span>(1)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/restaurants-cafe/fast-food/"
                  className="av-2"
                  data-color="#8a646c"
                >
                  <i className="fas fa-angle-right" />
                  Fast Food <span>(0)</span>
                </a>
              </li>
            </ul>
            <div className="view-button text-center">
              <a href="https://demo.joinwebs.com/classiera/strobe/category/restaurants-cafe/">
                VIEW ALL
                <i className="fas fa-long-arrow-alt-right right-i" />
              </a>
            </div>
            {/*view-button text-center*/}
          </div>
          {/*category-content*/}
        </div>
        {/*category-box*/}
      </div>
      {/*col-lg-4*/}
      <div
        className="col-lg-4 col-md-4 col-sm-6 match-height"
        style={{ height: 347 }}
      >
        <div className="category-box border">
          <div className="category-heading clearfix border-bottom">
            <span className="category-icon-box pull-left flip">
              <i
                className="fa fa-paw icon-color"
                style={{ color: "#ff7e3d" }}
              />
            </span>
            {/*category-icon-box*/}
            <div className="category-heading-content pull-left flip">
              <h4>Pets &amp; Animals</h4>
              <p>0&nbsp; ads posted </p>
            </div>
            {/*category-heading-content*/}
          </div>
          {/*category-heading*/}
          <div className="category-content">
            <ul>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/pets-animals/birds/"
                  className="av-2"
                  data-color="#ff7e3d"
                >
                  <i className="fas fa-angle-right" />
                  Birds <span>(0)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/pets-animals/cats/"
                  className="av-2"
                  data-color="#ff7e3d"
                  style={{ background: "rgb(250, 250, 250)" }}
                >
                  <i className="fas fa-angle-right" />
                  Cats <span>(0)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/pets-animals/dogs/"
                  className="av-2"
                  data-color="#ff7e3d"
                >
                  <i className="fas fa-angle-right" />
                  Dogs <span>(0)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/pets-animals/fancy-hens/"
                  className="av-2"
                  data-color="#ff7e3d"
                >
                  <i className="fas fa-angle-right" />
                  Fancy Hens <span>(0)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/pets-animals/fishes/"
                  className="av-2"
                  data-color="#ff7e3d"
                >
                  <i className="fas fa-angle-right" />
                  Fishes <span>(0)</span>
                </a>
              </li>
            </ul>
            <div className="view-button text-center">
              <a href="https://demo.joinwebs.com/classiera/strobe/category/pets-animals/">
                VIEW ALL
                <i className="fas fa-long-arrow-alt-right right-i" />
              </a>
            </div>
            {/*view-button text-center*/}
          </div>
          {/*category-content*/}
        </div>
        {/*category-box*/}
      </div>
      {/*col-lg-4*/}
      <div
        className="col-lg-4 col-md-4 col-sm-6 match-height"
        style={{ height: 347 }}
      >
        <div className="category-box border">
          <div className="category-heading clearfix border-bottom">
            <span className="category-icon-box pull-left flip">
              <i
                className="fa fa-desktop icon-color"
                style={{ color: "#ff00d0" }}
              />
            </span>
            {/*category-icon-box*/}
            <div className="category-heading-content pull-left flip">
              <h4>Electronics</h4>
              <p>1&nbsp; ads posted </p>
            </div>
            {/*category-heading-content*/}
          </div>
          {/*category-heading*/}
          <div className="category-content">
            <ul>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/electronics/home-electronics/"
                  className="av-2"
                  data-color="#ff00d0"
                  style={{ background: "rgb(250, 250, 250)" }}
                >
                  <i className="fas fa-angle-right" />
                  Home Electronics <span>(0)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/electronics/lcds/"
                  className="av-2"
                  data-color="#ff00d0"
                  style={{ background: "rgb(250, 250, 250)" }}
                >
                  <i className="fas fa-angle-right" />
                  LCDs <span>(0)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/electronics/mobile-tablets/"
                  className="av-2"
                  data-color="#ff00d0"
                  style={{ background: "rgb(250, 250, 250)" }}
                >
                  <i className="fas fa-angle-right" />
                  Mobile &amp; Tablets <span>(0)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/electronics/technical-services/"
                  className="av-2"
                  data-color="#ff00d0"
                  style={{ background: "rgb(250, 250, 250)" }}
                >
                  <i className="fas fa-angle-right" />
                  Technical Services <span>(1)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.joinwebs.com/classiera/strobe/category/electronics/tv-dvds/"
                  className="av-2"
                  data-color="#ff00d0"
                  style={{ background: "rgb(250, 250, 250)" }}
                >
                  <i className="fas fa-angle-right" />
                  TV &amp; DVDs <span>(0)</span>
                </a>
              </li>
            </ul>
            <div className="view-button text-center">
              <a href="https://demo.joinwebs.com/classiera/strobe/category/electronics/">
                VIEW ALL
                <i className="fas fa-long-arrow-alt-right right-i" />
              </a>
            </div>
            {/*view-button text-center*/}
          </div>
          {/*category-content*/}
        </div>
        {/*category-box*/}
      </div>
      {/*col-lg-4*/}
      <div className="col-lg-4 col-md-4 col-sm-6 match-height" style={{}}>
        <div className="category-box border">
          <div className="category-heading clearfix border-bottom">
            <span className="category-icon-box pull-left flip">
              <i
                className="fa fa-desktop icon-color"
                style={{ color: "#ff00d0" }}
              />
            </span>
            {/*category-icon-box*/}
            <div className="category-heading-content pull-left flip">
              <h4>Uncategorized</h4>
              <p>0&nbsp; ads posted </p>
            </div>
            {/*category-heading-content*/}
          </div>
          {/*category-heading*/}
          <div className="category-content">
            <ul></ul>
            <div className="view-button text-center">
              <a href="https://demo.joinwebs.com/classiera/strobe/category/uncategorized/">
                VIEW ALL
                <i className="fas fa-long-arrow-alt-right right-i" />
              </a>
            </div>
            {/*view-button text-center*/}
          </div>
          {/*category-content*/}
        </div>
        {/*category-box*/}
      </div>
      {/*col-lg-4*/}
    </div>
  </div>
</section>

</>

    
    </>
  )
}

export default Category
