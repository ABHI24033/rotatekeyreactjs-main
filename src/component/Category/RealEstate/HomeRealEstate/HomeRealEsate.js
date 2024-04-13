// import React, { useEffect, useState } from "react"
// import FeaturedAds from '../../../Ads/FeaturedAds/featuredAds';
import Feature from "../../../Ads/FeaturedAds/Feature";
import CategoryUiSection from "../CategoryUiScetion/CategoryUiSection";
import SearchBox from "../searchBox/SearchBox";
import RealEstateSection from "../section/realEstateSection";
import Owldemo1 from "../../../Owldemo1";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsArticles from "../../../Blogs/NewsArticles";
import MyGallery from "./MyGallery";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../App";
import { Spin } from "antd";
import axios from "axios";
import { url } from "../../../env";
import { useDispatch } from "react-redux";
import { add } from "../../../../store/Track/trackUserSlice";
const HomeRealEsate = () => {
  const greeting = "RealEstate";

  const hola9 = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const disptach = useDispatch();
  useEffect(() => {
    disptach(add({ view: ["HomeRealEsate"] }));
  }, []);
  return (
    <>
      <RealEstateSection />
      <SearchBox />
      {loading && (
        <div>
          <h5>
            {" "}
            <div className="example">
              <Spin />
            </div>{" "}
          </h5>{" "}
        </div>
      )}
      {!loading && (
        <div className="mb-3">
          <Feature value="RealEstate" />
          {/* <Owldemo1 greeting={greeting} subcategory={"flats"} /> */}
          <Owldemo1 greeting={greeting} subcategory={"PG-Hostel"} />
          <Owldemo1 greeting={greeting} subcategory={"Rent-Commercial"} />
          <Owldemo1 greeting={greeting} subcategory={"Buy-Commercial"} />
          <Owldemo1 greeting={greeting} subcategory={"Rent-Residential"} />
          <Owldemo1 greeting={greeting} subcategory={"Buy-Residential"} />
          {/* <Owldemo1 greeting={greeting} subcategory={"apartment"} />
          <Owldemo1 greeting={greeting} subcategory={"field"} />
          <Owldemo1 greeting={greeting} subcategory={"home"} />
          <Owldemo1 greeting={greeting} subcategory={"Upcomming"} />
          <Owldemo1 greeting={greeting} subcategory={"Listed"} />
          <Owldemo1 greeting={greeting} trending={"trending"} /> */}
        </div>
      )}

      <NewsArticles category={"RealEstate"} />
      <MyGallery />
      {/* <NewsArticles category={"RealEstate"}/> */}
    </>
  );
};

export default HomeRealEsate;
