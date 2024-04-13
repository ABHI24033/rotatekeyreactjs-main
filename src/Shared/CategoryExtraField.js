import React, { useEffect } from "react";
import {
  BsFillBookmarkFill,
  BsFillClockFill,
  BsBuilding,
} from "react-icons/bs";
import { MdStairs } from "react-icons/md";
import { FaSwimmingPool, FaParking } from "react-icons/fa";
import { GiGardeningShears } from "react-icons/gi";
const CategoryExtraField = (props) => {
  return (
    <div>
      {" "}
      {props.props?.category === "RealEstate" ? (
        <div className="p-4 mt-2 border descriptio w-100 hidden-sm hidden-xs visible-md-block visible-lg-block">
          <div className="row ">
            <div className="col-lg-12 col-sm-12 d-flex justify-content-between">
              <div className="col-lg-3">
                <BsBuilding className="mr-2" /> <b>BuildUpArea </b>
              </div>{" "}
              <div className="col-lg-1"> {props.props?.BuildUpArea}</div>
              <div className="col-lg-3">
                <BsBuilding className="mr-2" />
                <b> ApartMent Type</b>{" "}
              </div>
              <div className="col-lg-1"> {props.props?.ApartMentType}</div>
              <div className="col-lg-3">
                <BsFillBookmarkFill />
                <b> Furnished Type</b>{" "}
              </div>
              <div className="col-lg-1">{props.props?.FurnishedType}</div>
            </div>
            <div className="col-lg-12 col-sm-12 d-flex justify-content-between">
              <div className="col-lg-3">
                <BsFillClockFill className="mr-2" />
                <b> Availability</b>{" "}
              </div>
              <div className="col-lg-1"> {props.props?.Availability}</div>
              <div className="col-lg-3">
                <MdStairs className="mr-2" />
                <b> Lift</b>{" "}
              </div>
              <div className="col-lg-1"> {props.props?.Lift}</div>
              <div className="col-lg-3">
                <BsBuilding className="mr-2" />
                <b> Property</b>{" "}
              </div>
              <div className="col-lg-1">{props.props?.Property}</div>
            </div>
            <div className="col-lg-12 col-sm-12 d-flex justify-content-between">
              <div className="col-lg-3">
                <FaParking className="mr-2" />
                <b> Parking </b>
              </div>
              <div className="col-lg-1"> {props.props?.Parking}</div>
              <div className="col-lg-3">
                <GiGardeningShears className="mr-2" /> <b>Garden</b>{" "}
              </div>
              <div className="col-lg-1"> {props.props?.Garden}</div>
              <div className="col-lg-3">
                <FaSwimmingPool className="mr-2" /> <b>Pool</b>{" "}
              </div>
              <div className="col-lg-1">{props.props?.Pool}</div>
            </div>
          </div>
        </div>
      ) : (
        <p></p>
      )}
      {props.props?.category === "RealEstate" ? (
        <div className="p-4 mt-2 border descriptio w-100 d-lg-none hidden-md visible-xs-block visible-sm-block d-flex">
          <div className="row ">
            <div className="col-lg-12 col-sm-12 d-flex justify-content-between">
              <p className="fs-12">
                <BsBuilding /> {props.props?.BuildUpArea}
              </p>
              <p className="fs-12">
                <BsBuilding /> {props.props?.ApartMentType}
              </p>
              <p className="fs-12">
                <BsFillBookmarkFill /> {props.props?.FurnishedType}
              </p>
            </div>
            <div className="col-lg-12 col-sm-12 d-flex justify-content-between">
              <p className="fs-12">
                <BsFillClockFill /> {props.props?.Availability}
              </p>
              <p className="fs-12">
                <BsBuilding /> Lift:{props.props?.Lift}
              </p>
              <p className="fs-12">
                <BsBuilding /> {props.props?.Property}
              </p>
            </div>
            <div className="col-lg-12 col-sm-12 d-flex justify-content-between">
              <p className="fs-12">
                <BsBuilding /> Parking:{props.props?.Parking}
              </p>
              <p className="fs-12">
                <BsBuilding /> Garden:{props.props?.Garden}
              </p>
              <p className="fs-12">
                <BsBuilding /> Pool:{props.props?.Pool}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p></p>
      )}
      {props.props?.category === "Furniture" ? (
        <div className="p-4 mt-2 border descriptio w-100 hidden-sm hidden-xs visible-md-block visible-lg-block">
          <div className="row ">
            <div className="col-lg-12 col-sm-12">
              <div className="col-lg-3 d-flex justify-content-between">
                {" "}
                <b>Color</b>
                <p>{props.props?.colorCheck}</p>
              </div>
              <div className="col-lg-3 d-flex justify-content-between">
                <b>Size</b>
                <p>{props.props?.sizeCheck}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p></p>
      )}
      {props.props?.category === "Bikes" ? (
        <div className="p-4 mt-2 border descriptio w-100 hidden-sm hidden-xs visible-md-block visible-lg-block">
          <div className="row ">
            <div className="col-lg-12 col-sm-12 d-flex justify-content-between">
              <div className="col-lg-4"> Color:{props.props?.colorCheck}</div>
              <div className="col-lg-4"> Size: {props.props?.sizeCheck}</div>
              <div className="col-lg-4"> Year:{props.props?.Year}</div>
            </div>
            <div className="col-lg-12 col-sm-12 d-flex justify-content-between">
              <div className="col-lg-4"> Engine: {props.props?.Engine}</div>
              {/* <div className='col-lg-4'>{" "}Model:{" "}{ props.props?.sizeCheck}</div> */}
            </div>
          </div>
        </div>
      ) : (
        <p></p>
      )}
      {/* {Object.keys(props).map((keyName, i) => (
    <li key={i}>
        <li>
          {keyName}
        
    </li>
    </li>

))} */}
    </div>
  );
};

export default CategoryExtraField;
