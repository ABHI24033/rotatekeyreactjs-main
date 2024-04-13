import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";
import { Link } from "react-router-dom";
import Chatbot from "../../Pages/ChatBot/ChatBot";
import { Divider } from "antd";
import "./FootCat.css";
import { Title } from "../../../component/StyledComponent/StyledComponents";
import { useDispatch } from "react-redux";
import { getExtraField } from "../../../store/ProductFilterSlice";
import {
  Electronics,
  Jobs,
  Furniture,
  Pets,
  Mobiles,
  Services,
} from "../../env";
const Footcat = () => {
  const dispatch = useDispatch();
  const handleClick = (category, subCategoryValue) => {
    let obj = { category, subCategoryValue, extrafiled: {} };
    dispatch(getExtraField(obj));
  };
  return (
    <>
      <div className="">
        {/* <Chatbot></Chatbot> */}
        <MessengerCustomerChat
          pageId="112411668244304"
          appId="902489581139147"
          themeColor={"#8753F0"}
        />

        <div className="hidden-sm hidden-xs visible-md-block visible-lg-block">
          <div className="FootcatBg col-lg-12 p-2">
            <span className="heading">
              Real Estate
              <Divider
                type="vertical"
                style={{ backgroundColor: "white", height: "20px" }}
              />
              <Link
                onClick={() => {
                  handleClick("RealEstate", "Rent-Commercial");
                }}
                to={`/ads-listing/category/${"RealEstate"}/subcategory/${"Rent - Commercial"}`}
              >
                <div className="footcat mx-2"> Rent - Commercial</div>
              </Link>{" "}
              &nbsp; &nbsp;
              <Link
                onClick={() => {
                  handleClick("RealEstate", "Buy-Commercial");
                }}
                to={`/ads-listing/category/${"RealEstate"}/subcategory/${"Buy - Commercial"}`}
              >
                <div className="footcat">Buy - Commercial</div>
              </Link>
              &nbsp; &nbsp;
              {/* add two more fields */}
              <Link
                onClick={() => {
                  handleClick("RealEstate", "Rent-Residential");
                }}
                to={`/ads-listing/category/${"RealEstate"}/subcategory/${"Rent - Residential"}`}
              >
                <div className="footcat">Rent - Residential</div>
              </Link>
              &nbsp; &nbsp;
              <Link
                onClick={() => {
                  handleClick("RealEstate", "Buy-Residential");
                }}
                to={`/ads-listing/category/${"RealEstate"}/subcategory/${"Buy - Residential"}`}
              >
                <div className="footcat">Buy - Residential</div>
              </Link>
              &nbsp; &nbsp;
              <Link
                onClick={() => {
                  handleClick("RealEstate", "PG-Hostel");
                }}
                to={`/ads-listing/category/${"RealEstate"}/subcategory/${"hostels"}`}
              >
                <div className="footcat">PG-Hostels</div>
              </Link>{" "}
            </span>
          </div>

          <div className="FootcatBg col-lg-12 p-2">
            <span className="heading">
              Electronics{" "}
              <Divider
                type="vertical"
                style={{
                  backgroundColor: "white",
                  height: "20px",
                  marginLeft: "8px",
                }}
              />
              {Electronics.slice(0, 8).map((value, index) => (
                <>
                  <Link
                    key={index}
                    onClick={() => {
                      handleClick("Electronics", value);
                    }}
                    to={`/ads-listing/category/${"Electronics"}/subcategory/${value}`}
                  >
                    <div className="footcat mx-1">{value} &nbsp;&nbsp;</div>
                  </Link>
                </>
              ))}
            </span>
          </div>

          <div className="FootcatBg col-lg-12 p-2">
            <span className="heading">
              Furnitures
              <Divider
                type="vertical"
                style={{
                  backgroundColor: "white",
                  height: "20px",
                  marginLeft: "16px",
                }}
              />
              {Furniture.map((value, index) => (
                <>
                  <Link
                    key={index}
                    onClick={() => {
                      handleClick("Furniture", value);
                    }}
                    to={`/ads-listing/category/${"Furniture"}/subcategory/${value}`}
                  >
                    <div className="footcat mx-2">{value}</div>
                  </Link>
                </>
              ))}
            </span>
          </div>

          <div className="FootcatBg col-lg-12 p-2">
            <span className="heading">
              Mobiles{" "}
              <Divider
                type="vertical"
                style={{
                  backgroundColor: "white",
                  height: "20px",
                  marginLeft: "30px",
                }}
              />
              {Mobiles.map((value, index) => (
                <>
                  <Link
                    key={index}
                    onClick={() => {
                      handleClick("Mobiles", value);
                    }}
                    to={`/ads-listing/category/${"Mobiles"}/subcategory/${value}`}
                  >
                    <div className="footcat mx-2">{value}</div>
                  </Link>
                </>
              ))}
            </span>
          </div>
          <div className="FootcatBg col-lg-12 p-2">
            <span className="heading">
              Pets
              <Divider
                type="vertical"
                style={{
                  backgroundColor: "white",
                  height: "20px",
                  marginLeft: "65px",
                }}
              />
              {Pets.map((value, index) => (
                <>
                  <Link
                    key={index}
                    onClick={() => {
                      handleClick("Pets", value);
                    }}
                    to={`/ads-listing/category/${"Pets"}/subcategory/${value}`}
                  >
                    <div className="footcat mx-2">{value}</div>
                  </Link>
                </>
              ))}
            </span>
          </div>
          {/* <div className="FootcatBg col-lg-12 p-2">
            <span className="heading">
              Jobs
              <Divider
                type="vertical"
                style={{
                  backgroundColor: "white",
                  height: "20px",
                  marginLeft: "60px",
                }}
              />
              {Jobs.map((value, index) => (
                <>
                  <Link
                    key={index}
                    onClick={() => {
                      handleClick("Jobs", value);
                    }}
                    to={`/ads-listing/category/${"Jobs"}/subcategory/${value}`}
                  >
                    <div className="footcat mx-2">{value}</div>
                  </Link>
                </>
              ))}
            </span>
          </div> */}

          <div className="FootcatBg col-lg-12 p-2">
            <span className="heading">
              Bikes
              <Divider
                type="vertical"
                style={{
                  backgroundColor: "white",
                  height: "20px",
                  marginLeft: "57px",
                }}
              />{" "}
              &nbsp;
              <Link
                onClick={() => {
                  handleClick("Bikes", "Bikes");
                }}
                to={`/ads-listing/category/${"Bikes"}/subcategory/${"Bikes"}`}
              >
                <div className="footcat">Bikes</div>{" "}
              </Link>{" "}
              &nbsp; &nbsp;
              <Link
                onClick={() => {
                  handleClick("Bikes", "Spare Parts - Accessories");
                }}
                to={`/ads-listing/category/${"Bike"}/subcategory/${"Spare Parts"}`}
              >
                <div className="footcat">Spare Parts - Accessories</div>
              </Link>{" "}
            </span>
          </div>
          <div className="FootcatBg col-lg-12 p-2">
            <span className="heading">
              Cars
              <Divider
                type="vertical"
                style={{
                  backgroundColor: "white",
                  height: "20px",
                  marginLeft: "59px",
                }}
              />
              <Link
                onClick={() => {
                  handleClick("Cars", "Cars");
                }}
                to={`/ads-listing/category/${"Cars"}/subcategory/${"Cars"}`}
              >
                <div className="footcat mx-2">Cars</div>{" "}
              </Link>{" "}
              &nbsp; &nbsp;
              <Link
                onClick={() => {
                  handleClick("Car", "Spare Parts - Accessories");
                }}
                to={`/ads-listing/category/${"Car"}/subcategory/${"Spare Parts"}`}
              >
                <div className="footcat">Spare Parts - Accessories</div>
              </Link>
            </span>
          </div>

          <div className="FootcatBg col-lg-12 p-2">
            <span className="heading">
              Services
              <Divider
                type="vertical"
                style={{
                  backgroundColor: "white",
                  height: "20px",
                  marginLeft: "28px",
                }}
              />
              {Services.map((value, index) => (
                <>
                  <Link
                    key={index}
                    onClick={() => {
                      handleClick("Services", value);
                    }}
                    to={`/ads-listing/category/${"Services"}/subcategory/${value}`}
                  >
                    <div className="footcat mx-2">{value}</div>
                  </Link>
                </>
              ))}
            </span>
          </div>
        </div>
        {/* MOBILE VIEW */}
        <div className="d-lg-none hidden-md visible-xs-block visible-sm-block">
          <div className="FootcatBg col-lg-12 p-3">
            <span className="heading1">
              {" "}
              Real Estate{""}
              <Divider
                type="vertical"
                style={{
                  background: "white",
                  height: "20px",
                }}
              />
              <Link
                onClick={() => {
                  handleClick("RealEstate", "Rent-Commercial");
                }}
                to={`/ads-listing/category/${"RealEstate"}/subcategory/${"Rent - Commercial"}`}
              >
                <div className="footcat">Rent - Commercial</div>
              </Link>{" "}
              &nbsp; &nbsp;
              <Link
                onClick={() => {
                  handleClick("RealEstate", "Buy-Commercial");
                }}
                to={`/ads-listing/category/${"RealEstate"}/subcategory/${"Buy - Commercial"}`}
              >
                <div className="footcat">Buy - Commercial</div>
              </Link>
              &nbsp; &nbsp;
              {/* add two more fields */}
              <Link
                onClick={() => {
                  handleClick("RealEstate", "Rent-Residential");
                }}
                to={`/ads-listing/category/${"RealEstate"}/subcategory/${"Rent - Residential"}`}
              >
                <div className="footcat">Rent - Residential</div>
              </Link>
              &nbsp; &nbsp;
              <Link
                onClick={() => {
                  handleClick("RealEstate", "Buy-Residential");
                }}
                to={`/ads-listing/category/${"RealEstate"}/subcategory/${"Buy - Residential"}`}
              >
                <div className="footcat">Buy - Residential</div>
              </Link>
              &nbsp; &nbsp;
              <Link
                onClick={() => {
                  handleClick("RealEstate", "PG-Hostel");
                }}
                to={`/ads-listing/category/${"RealEstate"}/subcategory/${"hostels"}`}
              >
                <div className="footcat">PG-Hostels</div>
              </Link>{" "}
            </span>
          </div>

          <div className="FootcatBg col-lg-12 p-3">
            <span className="heading1">
              Electronics{" "}
              <Divider
                type="vertical"
                style={{
                  background: "white",
                  height: "20px",
                }}
              />
              {Electronics.slice(0, 8).map((value, index) => (
                <>
                  <Link
                    key={index}
                    onClick={() => {
                      handleClick("Electronics", value);
                    }}
                    to={`/ads-listing/category/${"Electronics"}/subcategory/${value}`}
                  >
                    <div className="footcat marginleft-2">{value}</div>
                  </Link>
                </>
              ))}
            </span>
          </div>

          <div className="FootcatBg col-lg-12 p-3">
            <span className="heading1">
              Mobiles{" "}
              <Divider
                type="vertical"
                style={{
                  background: "white",
                  height: "20px",
                }}
              />
              {Mobiles.map((value, index) => (
                <>
                  <Link
                    key={index}
                    onClick={() => {
                      handleClick("Mobiles", value);
                    }}
                    to={`/ads-listing/category/${"Mobiles"}/subcategory/${value}`}
                  >
                    <div className="footcat mx-2">{value}</div>
                  </Link>
                </>
              ))}
            </span>
          </div>

          <div className="FootcatBg col-lg-11 p-3">
            <span className="heading1">
              Furnitures{""}
              <Divider
                type="vertical"
                style={{
                  background: "white",
                  height: "20px",
                }}
              />
              {Furniture.map((value, index) => (
                <>
                  <Link
                    key={index}
                    onClick={() => {
                      handleClick("Furniture", value);
                    }}
                    to={`/ads-listing/category/${"Furniture"}/subcategory/${value}`}
                  >
                    <div className="footcat mx-1">{value}</div>
                  </Link>
                </>
              ))}
            </span>
          </div>

          {/* <div className="FootcatBg col-lg-12 p-3">
            <span className="heading1">Jobs{""}
            <Divider
            type="vertical"
            style={{
              background:"white",
              height:"20px",
              }}
              />
            {Jobs.map((value, index) => (
              <>
                <Link
                  key={index}
                  onClick={() => {
                    handleClick("Jobs", value);
                  }}
                  to={`/ads-listing/category/${"Jobs"}/subcategory/${value}`}
                >
                  <div className="footcat mx-2">{value}</div>
                </Link>
              </>
            ))}
            </span>
          </div> */}

          <div className="FootcatBg col-lg-12 p-3">
            <span className="heading1">
              Bikes{""}
              <Divider
                type="vertical"
                style={{
                  background: "white",
                  height: "20px",
                }}
              />
              <Link
                onClick={() => {
                  handleClick("Bike", "Bikes");
                }}
                to={`/ads-listing/category/${"Bike"}/subcategory/${"Bikes"}`}
              >
                <div className="footcat marginleft-4">Bikes</div>{" "}
              </Link>{" "}
              &nbsp; &nbsp;
              <Link
                onClick={() => {
                  handleClick("Bike", "Spare Parts - Accessories");
                }}
                to={`/ads-listing/category/${"Bike"}/subcategory/${"Spare Parts"}`}
              >
                <div className="footcat">Spare Parts - Accessories</div>
              </Link>{" "}
              &nbsp; &nbsp; &nbsp; &nbsp;
            </span>
          </div>

          <div className="FootcatBg col-lg-12 p-3">
            <span className="heading1">
              Cars{""}
              <Divider
                type="vertical"
                style={{
                  background: "white",
                  height: "20px",
                }}
              />
              <Link
                onClick={() => {
                  handleClick("Cars", "Cars");
                }}
                to={`/ads-listing/category/${"Car"}/subcategory/${"Cars"}`}
              >
                <div className="footcat">Cars</div>{" "}
              </Link>{" "}
              &nbsp; &nbsp;
              <Link
                onClick={() => {
                  handleClick("Cars", "Spare Parts - Accessories");
                }}
                to={`/ads-listing/category/${"Car"}/subcategory/${"Spare Parts"}`}
              >
                <div className="footcat">Spare Parts - Accessories</div>
              </Link>
            </span>
          </div>

          <div className="FootcatBg col-lg-12 p-3">
            <span className="heading1">
              Pets{""}
              <Divider
                type="vertical"
                style={{
                  background: "white",
                  height: "20px",
                }}
              />
              {Pets.map((value, index) => (
                <>
                  <Link
                    key={index}
                    onClick={() => {
                      handleClick("Pets", value);
                    }}
                    to={`/ads-listing/category/${"Pets"}/subcategory/${value}`}
                  >
                    <div className="footcat mx-2">{value}</div>
                  </Link>
                </>
              ))}
            </span>
          </div>

          <div className="FootcatBg col-lg-12 p-3">
            <span className="heading1">
              Services{""}
              <Divider
                type="vertical"
                style={{
                  background: "white",
                  height: "20px",
                }}
              />
              {Services.map((value, index) => (
                <>
                  <Link
                    key={index}
                    onClick={() => {
                      handleClick("Services", value);
                    }}
                    to={`/ads-listing/category/${"Services"}/subcategory/${value}`}
                  >
                    <div className="footcat mx-2">{value}</div>
                  </Link>
                </>
              ))}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footcat;
