import React from "react";
import Feature from "../../component/Ads/FeaturedAds/Feature";
import Owldemo1 from "../../component/Owldemo1";
const OwlDemoMultiPle = (props) => {
  return (
    <div>
      {props.props.subCategory.map((result) => {
        return (
          <Owldemo1 greeting={props.props.category} subcategory={result} />
        );
      })}
    </div>
  );
};

export default OwlDemoMultiPle;
