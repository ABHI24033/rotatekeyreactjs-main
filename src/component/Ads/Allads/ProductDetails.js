import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { url } from "../../env";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import "./ProductDetails.css";
import AddComment from "../../Addcommentblog/AddComment";
import { MessageAdsChat } from "../messageAdsChat/MessageAdsChat";
import Report from "../../Pages/Report/Report";
import { localUrl } from "../../env";
import Owldemo1 from "../../../component/Owldemo1";
import Spiner from "../../Spiner";
import MapLocationAds from "./mapadslocation/MapLocationAds";
import { Button, Popover } from "antd";
import Carousel from "react-grid-carousel";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../../store/Track/trackUserSlice";
import CategoryExtraField from "../../../Shared/CategoryExtraField";
import YoutubeMagic from "../../ContentLoader/YoutubeMagic";
import { BsHeartFill } from "react-icons/bs";
import { addUuid } from "../../../store/ChatSlice";
import { FormatPrice } from "../../../Utils/FormatPrice";
const ProductDetails = (props) => {
  const dispatch = useDispatch();

  const changeAds = useParams();
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const greeting = product.category;
  const idads = { id };
  const [imagesmutlipleads, setimagesmutlipleads] = useState([]);
  const [qrcode, setCoreCode] = useState([]);
  const [locationLink, setlocationLink] = useState(
    "https://www.google.com/maps/search/?api=1"
  );
  console.log("userparams()", useParams());
  const navigate = useNavigate();

  const disptach = useDispatch();

  useEffect(() => {
    disptach(add({ view: ["ProductDetails"] }));
  }, []);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxMTQ1MzkwLCJpYXQiOjE2NTk2MDkzOTAsImp0aSI6IjM5MzJjZjJkZTYyNTQwMjRiNTEyZDk4ZTE4ZDM1Mjk3IiwidXNlcl9pZCI6MjJ9.6uTC3ZTlxdqyhBewkVN5O4MduQ6O6YCNB6p9QJhOF3w"
    );

    var formdata = new FormData();
    disptach(add({ product: [id] }));
    formdata.append("product", id);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "/api/user/getQrCodeAds", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCoreCode(result[0]?.fields?.image);
        console.log("!!!!!result value", result);
        console.log(
          "!!!!!result value",
          result[0]?.fields?.image.slice(2).slice(0, -1)
        );
      })

      .catch((error) => console.log("error", error));
  }, []);
  const [userID, setUserId] = useState(null);

  const getSingleProduct = async () => {
    setLoading(true);

    const profileUser = (userid) => {
      console.log("!!!!!userid", userid);
      var formdata = new FormData();
      formdata.append("user", userid);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch(localUrl + "user/userProfileDetailsApi/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log("!!!result", result);
          console.log("!!!result", result[0].fields.name);

          setName(result[0].fields.name);
          setEmail(result[0].fields.email);
        })
        .catch((error) => console.log("error", error));
    };
    try {
      const { data } = await axios.get(localUrl + `adsapi/${id}/`);
      setLoading(false);

      setlocationLink(
        "https://www.google.com/maps/search/?api=1&query=" +
        data.lati +
        "," +
        data.long
      );
      console.log(data, "dd");
      setProduct(data);
      console.log("data", data?.uuid);
      dispatch(addUuid({ data: data?.uuid, phoneNumber: data?.phoneNumber }));
      profileUser(data.user);
      setUserId(data.user);
    } catch (error) {
      setError("Something went wrong!!");
    }
  };

  console.log("~~~~", userID);

  var rn = require("random-number");

  //phone details

  const [PhoneNumbertemp, setPhoneNumbertemp] = useState(true);
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [otpverifychecklocal, setotpverifychecklocal] = useState(null);

  const storePhoneNumer = (phone) => {
    var formdata = new FormData();
    formdata.append("productID", product.id);
    formdata.append("phoneNubmer", phone);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch(localUrl + "adsapi/collectVisitPhoneNumber", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  const SendOtp = (e) => {
    e.preventDefault();
    var gen = "1231";
    console.log("phonenumber", PhoneNumber);

    setotpverifychecklocal(gen);
    axios({
      method: "POST",
      url: url + "api/phone/sendOTP/",
      data: {
        number: PhoneNumber,
      },
    })
      .then((res) => {
        if (true) {
          if (res.data.OTPSent === true) {
            setPhoneNumbertemp(false);
            storePhoneNumer(PhoneNumber)
          } else {
            alert("OTP Was Not sent");
          }
        } else {
          alert("Enter Valid 10 Digits Number Only");
        }
      })
      .catch((e) => console.log(e));
  };
  const [otpVeriftemp, setotpVeriftemp] = useState(true);

  const [Otpdetails, setOtpdetails] = useState(null);

  const otpverifysumbit = (e) => {
    // console.log(typeof Otpdetails);
    console.log(Otpdetails);
    e.preventDefault();
    axios({
      method: "PUT",
      url: url + "api/phone/checkOTP/",
      data: {
        number: PhoneNumber,
        otp: Otpdetails,
      },
    })
      .then((res) => {
        if (res.data.status === true) {
          //calling registe  method

          setotpVeriftemp(false);
        } else {
          alert("Incorrect OTP");
        }
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("adsId", id);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "api/adsapi/adsUpload", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("result", result);

        var multipleImage = [];

        result.map((result) => {
          let tempObjImage = {};
          tempObjImage["url"] = result.fields.image;
          multipleImage.push(tempObjImage);
        });
        console.log("!!!!image ", multipleImage);
        setimagesmutlipleads(multipleImage);
      })
      .catch((error) => console.log("error", error));
  }, [changeAds]);

  useEffect(() => {
    getSingleProduct();
  }, [changeAds]);

  useEffect(() => {
    let productExtrafile = product.extraField
      ? JSON.parse(product.extraField)
      : null;
    console.log("####product", product, productExtrafile);
    console.log(product.uuid);
    dispatch(
      addUuid({ data: product?.uuid, phoneNumber: product?.phoneNumber })
    );
  }, [product]);
  var myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    "csrftoken=EmLuPRUNkf6K6gJITHLqCb44GCBa3XdZbwQ9z0697rglSv3GfLbtztOqBKdfAxaB"
  );

  var formdata = new FormData();
  formdata.append("adsID", id);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(url + "api/user/viewsupdate/", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  const handleVisibleChange = (newVisible) => {
    setVisible(newVisible);
  };
  document.title = "RotateKey - ProductDetails";
  return (
    <div className="load">
      {loading && (
        <div className="spinner-overlay">
          <Spiner />
        </div>
      )}
      <div className="content-container">
        {loading ? null : (
          <section className=" single-post-page mx-3 mt-2">
            <div>
              <div className="row">
                <div className="col-md-8 col-lg-8 col-xl-8 col-sm-12 mt-2">
                  {/* single post */}
                  <div className="single-post">
                    {/* post title*/}
                    {/* <div className="single-post-title"> */}
                    <div>
                      {/* <div className="post-price visible-xs visible-sm">
                    <h4>₹&nbsp; {product.price} </h4>
                  </div> */}
                      <h4 className="detailFont">
                        {product.title}
                        {imagesmutlipleads.length}
                      </h4>
                      <p className="post-category">
                        <i className="far fa-folder-open" />:
                        <span>{product.category}</span>&nbsp;&nbsp;
                        <i className="fas fa-map-marker-alt" />:
                        <span>{product.locality}</span>
                      </p>
                    </div>
                    {/* post title*/}
                    {/* <i
        width={896}
        height={504}
        images={imagesmutlipleads}
        showBullets={true}
        showNavs={true}
      /> */}
                    <div
                      style={{
                        border: "1px solid #00000012",
                        height: "300px",
                        borderRadius: "5px",
                      }}
                    >
                      <Carousel
                        cols={imagesmutlipleads.length > 1 ? 2 : 2}
                        rows={imagesmutlipleads.length > 3 ? 1 : 1}
                        gap={10}
                        loop
                        autoplay={3000}
                      >
                        {imagesmutlipleads.map((img) => {
                          return (
                            <Carousel.Item>
                              <img
                                width="100%"
                                style={{
                                  height: "300px",
                                  backgroundRepeat: "fill",
                                }}
                                src={img.url}
                              />
                            </Carousel.Item>
                          );
                        })}
                      </Carousel>
                    </div>
                    {/* single post carousel*/} {/* ad deails */}
                    <div className="p-4 border details mt-4">
                      <h4 className="mt-0 d-flex ">
                        Ad Details &nbsp;
                        <i className="far fa-file-alt h5" />
                        &nbsp;
                        <hr />
                      </h4>

                      <div className="post-details">
                        <ul className="list-unstyled clearfix">
                          <li>
                            <p className="clearfix">
                              Ad ID:
                              <span className="pull-right flip">
                                <i className="fas fa-hashtag IDIcon" />
                                {product.id}
                              </span>
                            </p>
                          </li>
                          {/*PostDate*/}
                          <li className="classiera_pdate">
                            <p className="clearfix">
                              Added:
                              {/* <span className="pull-right flip">  {datemanage(product.date_created)}</span> */}
                              <span className="pull-right flip">
                                {" "}
                                {new Date(product.date_created)
                                  .toGMTString()
                                  .slice(0, 12)}
                              </span>
                            </p>
                          </li>
                          {/*PostDate*/}
                          {/*Price Section */}
                          <li>
                            {product.category == "Jobs" ? null : (
                              <p className="clearfix">
                                Sale Price:
                                <span className="pull-right flip cl__price">
                                  &nbsp;
                                  <FormatPrice price={product.price} />
                                </span>
                              </p>
                            )}
                          </li>
                          {/*Sale Price*/}
                          <li>
                            {product.category == "Jobs" ? null : (
                              <p className="clearfix">
                                Regular Price:
                                <span className="pull-right flip cl__price">
                                  ₹&nbsp; {product.price}
                                </span>
                              </p>
                            )}
                          </li>
                          {/*Regular Price*/}
                          {/*Price Section */}
                          <li>
                            {product.category == "Jobs" ? null : (
                              <p className="clearfix">
                                Condition:
                                <span className="pull-right flip">
                                  {product.condition}
                                </span>
                              </p>
                            )}
                          </li>
                          {/*Condition*/}
                          <li>
                            <p className="clearfix">
                              State:
                              <span className="pull-right flip">
                                {product.state}
                              </span>
                            </p>
                          </li>
                          {/*Location*/}
                          <li>
                            <p className="clearfix">
                              City:
                              <span className="pull-right flip">
                                {product.City}
                              </span>
                            </p>
                          </li>
                          {/*state*/}
                          {/* <li>
                        <p className="clearfix">
                          City:
                          <span className="pull-right flip">Bellingham</span>
                        </p>
                      </li> */}
                          {/*City*/}
                          <li className="classiera_views">
                            <p className="clearfix">
                              Views:
                              <span
                                className="pull-right flip"
                                style={{ color: "green" }}
                              >
                                {product.viewsproduct}{" "}
                              </span>
                            </p>
                          </li>

                          <li>
                            <p className="clearfix">
                              Time:
                              <span className="pull-right flip">
                                {" "}
                                {new Date(product.date_created)
                                  .toGMTString()
                                  .slice(17, 22)}
                              </span>
                            </p>
                          </li>
                          {/*test*/}
                          {product.length && (
                            <li>
                              <p className="clearfix">
                                Model:
                                <span className="pull-right flip">
                                  {product.title}
                                </span>
                              </p>
                            </li>
                          )}
                          {/*test*/}
                          <li>
                            <p className="clearfix">
                              Year:
                              <span className="pull-right flip">
                                {new Date(product.date_created)
                                  .toGMTString()
                                  .slice(11, 16)}
                              </span>
                            </p>
                          </li>
                          {product?.extraField &&
                            Object?.keys(
                              JSON?.parse(product.extraField) || {}
                            ).map((key) => {
                              return (
                                <li>
                                  <p className="clearfix">
                                    {key} :{" "}
                                    <span className="pull-right flip">
                                      {(JSON?.parse(product.extraField))[key]}
                                    </span>
                                  </p>
                                </li>
                              );
                            })}
                          {/*test*/}
                        </ul>
                      </div>
                      {/*post-details*/}
                    </div>
                    {/* ad details */}
                    {/*Google Section*/}
                    {/*Google Section*/}
                    {/* Google MAP in Description */}
                    {/* Google MAP in Description */}
                    {/*PostVideo*/}
                    {/*PostVideo*/}
                    {/* post description */}
                    <div className="p-4 mt-2 border descriptio w-100">
                      <h4 className="">
                        Description &nbsp;
                        <i className="far fa-file-alt h5" />
                        <hr />
                      </h4>
                      <div className="classiera_entry_content">
                        <p>{product.description}</p>
                      </div>
                      <div className="tags">
                        <span>
                          <i className="fas fa-tags" />
                          Tags :
                        </span>
                        <a
                          href="https://demo.joinwebs.com/classiera/pearl/tag/apple/"
                          rel="tag"
                          className="ml-2"
                        >
                          RealEstate
                        </a>
                        <a
                          href="/ads-listing/category/Services/"
                          rel="tag"
                          className="ml-2"
                        >
                          Services
                        </a>
                        <a
                          href="/ads-listing/category/Electronics/"
                          rel="tag"
                          className="ml-2"
                        >
                          Electronics
                        </a>
                        <a
                          href="/ads-listing/category/Furniture/"
                          rel="tag"
                          className="ml-2"
                        >
                          Furniture & Household
                        </a>
                        <a
                          href="/ads-listing/category/Removals/"
                          rel="tag"
                          className="ml-2"
                        >
                          Transportations
                        </a>
                      </div>
                      {/*Post Pagination*/}
                      {/*Post Pagination*/}
                    </div>
                    {/* <CategoryExtraField props={product} /> */}
                    {/* post description */}
                    {/* classiera bid system */}
                    {/* classiera bid system */}
                    {/*comments*/}
                    {/* <Comments />   */}
                    <AddComment id={idads} />
                    {/*comments*/}
                  </div>
                  {/* <AddComment id={idads}/> */}
                  {/* single post */}
                </div>
                {/*col-md-8*/}
                <div className="col-md-4">
                  <aside className="sidebar">
                    <div className="row">
                      {/*Widget for style 1*/}
                      <div
                        className="col-lg-12 col-md-12 col-sm-6 match-height mt-3"
                      // style={{ marginTop: "6rem" }}
                      >
                        <div className="widget-box rounded">
                          <div className="widget-title price">
                            <h3 className="post-price fs-16">
                              {product.title} for &nbsp;{" "}
                              <FormatPrice price={product.price} />
                              <span className="ad_type_display fs-16">
                                Available{" "}
                              </span>
                            </h3>
                          </div>
                          {/*price*/}
                          <div className="widget-content widget-content-post">
                            <div className="author-info border-bottom widget-content-post-area">
                              <div className="media">
                                <div className="media-left">
                                  <img
                                    className="media-object"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU"
                                    alt="admin"
                                  />
                                </div>
                                {/*media-left*/}
                                <div className="media-body">
                                  <h6 className="media-heading text-uppercase">
                                    <b className="font-bold">{name}&nbsp;</b>
                                    <span className="small classiera_verified">
                                      Verified
                                    </span>
                                    <i
                                      className="far fa-check-circle classiera_verified"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Verified"
                                    />
                                  </h6>
                                  <p className="member_since">
                                    Member Since&nbsp;
                                    {new Date(product.date_created)
                                      .toGMTString()
                                      .slice(0, 16)}
                                  </p>
                                  <NavLink to={`/activeUserAds/${userID}/`}>
                                    {/* <Link to={`/activeUserAds/${userID}`}> */}
                                    See All ADs
                                    {/* </Link> */}
                                  </NavLink>
                                  <Popover
                                    // content={<a onClick={hide}></a>}
                                    content={
                                      <img
                                        src={
                                          "data:image/jpeg;base64," +
                                          qrcode?.slice(2)?.slice(0, -1)
                                        }
                                        alt="qr code is not avaiable"
                                        width="150"
                                        height="150"
                                      />
                                    }
                                    // title="Title"
                                    trigger="click"
                                    visible={visible}
                                    onVisibleChange={handleVisibleChange}
                                    placement="bottom"
                                  >
                                    {/* <Button type="primary">Click me</Button> */}
                                    <Button style={{ marginLeft: "20px" }}>
                                      Show QR
                                    </Button>
                                  </Popover>
                                </div>
                                {/*media-body*/}
                              </div>
                              {/*media*/}
                            </div>
                            {/*author-info*/}
                          </div>
                          {/*widget-content*/}
                          <div className="widget-content widget-content-post">
                            <div className="contact-details widget-content-post-area">
                              <h5 className="text-uppercase fs-16">
                                Contact Details :
                              </h5>
                              <ul
                                className="list-unstyled fa-ul c-detail"
                                style={{ marginTop: "-25px" }}
                              >
                                {/*WhatsAPP*/}
                                {/*WhatsAPP*/}
                                {/* <li>
                              <i className="fas fa-li fa-envelope" />
                              <a href="mailto:barik99@gmail.com">
                            <p className="detailFont"> {email}  </p> 
                            {" "}
                              </a>
                            </li> */}
                              </ul>

                              {/* Product Details Send */}

                              {/* Start */}
                              <div>
                                {PhoneNumbertemp ? (
                                  <div
                                    class="form-group mx-sm-3 mb-2"
                                    style={{ marginTop: "-30px" }}
                                  >
                                    <label htmlFor="input" className="sr-only">
                                      Enter Your Number
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="text"
                                      onChange={(e) => {
                                        setPhoneNumber(e.target.value);
                                      }}
                                      placeholder="Enter Your Number"
                                      onKeyDown={(e) =>
                                        ["e", "E", "+", "-", "."].includes(
                                          e.key
                                        ) && e.preventDefault()
                                      }
                                    />
                                    {PhoneNumber.length < 10 ||
                                      PhoneNumber.length > 10 ? (
                                      <div style={{ color: "red" }}>
                                        * Please Enter 10 Digit Mobile Number
                                        Only{" "}
                                      </div>
                                    ) : null}
                                    <button
                                      className="custom-btns btn-1 mt-2 mb-0 fs-14"
                                      onClick={SendOtp}
                                    >
                                      submit
                                    </button>
                                  </div>
                                ) : otpVeriftemp ? (
                                  <div>
                                    {" "}
                                    <form class="form-inline">
                                      <div
                                        class="col-lg-12 "
                                        style={{ marginTop: "-20px" }}
                                      >
                                        <label
                                          htmlFor="input"
                                          className="sr-only"
                                        >
                                          Enter Your otp
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="text"
                                          onChange={(e) => {
                                            setOtpdetails(e.target.value);
                                          }}
                                          placeholder="Enter Your otp"
                                        />
                                      </div>
                                      <button
                                        className="custom-btns btn-1 mt-3 mx-3 "
                                        onClick={otpverifysumbit}
                                      >
                                        Click here
                                      </button>
                                    </form>
                                  </div>
                                ) : (
                                  <div>
                                    <div
                                      className="mx-4 detailFont"
                                      style={{ marginTop: "-35px" }}
                                    >
                                      <b> details send to your Number </b>{" "}
                                      {product.phoneNumber}
                                    </div>
                                    <div className="mx-4 detailFont">
                                      <span>
                                        {product.locality} &nbsp;,&nbsp;
                                        {product.city} &nbsp;,&nbsp;
                                        {product.state}&nbsp;,&nbsp;
                                        {product.zip_code}
                                      </span>
                                      <br />
                                      &nbsp;&nbsp;<b>{name}</b> &nbsp; &nbsp;
                                      <a target="_blank" href={locationLink}>
                                        {" "}
                                        <button className="productButton">
                                          see on google map
                                        </button>
                                      </a>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                            {/*contact-details*/}
                          </div>
                          {/*widget-content*/}
                        </div>
                        {/*widget-box*/}
                      </div>
                      {/*col-lg-12 col-md-12 col-sm-6 match-height*/}
                      {/*Widget for style 1*/}
                      <MessageAdsChat product={product} />
                      {/*col-lg-12 col-md-12 col-sm-6 match-height*/}
                      <MapLocationAds
                        props={{ lati: product.lati, long: product.long }}
                      />
                      {/* <Report id={id} /> */}

                      {/*col-lg-12 col-md-12 col-sm-6 match-height*/}
                      {/*Social Widget*/}
                      {/*Social Widget*/}

                      {/*col-lg-12*/}
                      {/*SidebarWidgets*/}
                      {/*SidebarWidgets*/}
                    </div>
                    {/*row*/}
                  </aside>
                  {/*sidebar*/}
                </div>
                {/*col-md-4*/}
              </div>

              <div className="mb-3">
                {greeting ? <Owldemo1 greeting={greeting} /> : <YoutubeMagic />}
              </div>

              {/* <FooterBlog /> */}

              {/*row*/}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
