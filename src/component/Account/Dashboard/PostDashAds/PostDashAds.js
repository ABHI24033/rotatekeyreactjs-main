import React, { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";
import "./PostDashAds.css";
// import { useGeolocated } from "react-geolocated";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import { FaSearchLocation } from "react-icons/fa";
import { localUrl } from "../../../env";
import Spiner from "../../../Spiner";

const PostDashAds = () => {
  let navigate = useNavigate();
  const [id, setId] = useState();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [tags, setTags] = useState(null);
  const [description, setDescription] = useState(null);
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [condition, setCondition] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [locality, setLocality] = useState(null);
  const [zipcode, setZipcode] = useState(null);
  const [date, setDate] = useState(null);
  const [loading, setLoading] = useState(false);

  const coords = useGeolocated();

  const getLocationSearchMethod = () => {
    if (coords) {
      const url =
        "https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?lat=" +
        coords.coords.latitude +
        "&lng=" +
        coords.coords.longitude;

      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "331734c762msh87686d3f66d810fp1c85ebjsn31d2ac2b6d68",
          "X-RapidAPI-Host":
            "address-from-to-latitude-longitude.p.rapidapi.com",
        },
      };
      fetch(url, options)
        .then((res) => res.json())
        .then((json) => {})
        .catch((err) => console.error("error:" + err));
    }
  };

  const addNewProduct1 = async () => {
    var formdata = new FormData();
    if (image !== null) {
      formdata.append("image", image);
    }

    formdata.append("title", title);
    formdata.append("price", price);
    formdata.append("tags", tags);
    formdata.append("description", description);
    formdata.append("category", category);
    formdata.append("brand", brand);
    formdata.append("condition", condition);
    formdata.append("state", state);
    formdata.append("city", city);
    formdata.append("locality", locality);
    formdata.append("zip_code", zipcode);
    formdata.append("user", id);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    setLoading(true);
    fetch(localUrl + "adsapi/", requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
    setLoading(false);
  };
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  if (localStorage.getItem("access_token") != null) {
    let barererToken = "Bearer " + localStorage.getItem("access_token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", barererToken);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    setLoading(true);
    fetch(localUrl + "user/profile/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // setprofileform(profileform.name=result.name)
        setId(result.id);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <>
      <section className="">
        <div className="container">
          <div className="row">
            {loading && <Spiner />}
            {!loading && (
              <div className="col-lg-12" style={{ marginTop: "-31px" }}>
                <form className="adpost-form">
                  <div className="adpost-card">
                    <div className="adpost-title">
                      <h3>Ad Information</h3>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label className="form-label">Product Title</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Type your product title here"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            style={{
                              border: "1px solid #c9c0c0",
                              borderRadius: "4px",
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label className="form-label">Product Image</label>
                          <input
                            type="file"
                            className="form-control"
                            onChange={(e) => setImage(e.target.files[0])}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-label">Product Category</label>
                          <select className="form-control custom-select">
                            <option selected="" value="DEFAULT">
                              Select Category
                            </option>
                            <option value={1}>property</option>
                            <option value={2}>electronics</option>
                            <option value={3}>automobiles</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Image</label>
                        <input
                          type="file"
                          className="form-control"
                          onChange={(e) => setImage(e.target.files[0])}
                        />
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-label">Price</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your pricing amount"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-label">User</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your pricing amount"
                            value={id}
                            onChange={(e) => setPrice(e.target.value)}
                            style={{
                              border: "1px solid #c9c0c0",
                              borderRadius: "4px",
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-label">Brand</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your pricing amount"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            style={{
                              border: "1px solid #c9c0c0",
                              borderRadius: "4px",
                            }}
                          />
                        </div>
                      </div>
                      <Button
                        onClick={() => {
                          getLocationSearchMethod();
                        }}
                      >
                        <FaSearchLocation />
                      </Button>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            className="form-label"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                          >
                            State
                          </label>
                          <select className="form-control custom-select">
                            <option selected="" value="DEFAULT">
                              Select State
                            </option>
                            <option value={1}>West Bengal</option>
                            <option value={2}>Goa</option>
                            <option value={3}>Gujrat</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-label">City</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your pricing amount"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            style={{
                              border: "1px solid #c9c0c0",
                              borderRadius: "4px",
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-label">Locality</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your Locality"
                            value={locality}
                            onChange={(e) => setLocality(e.target.value)}
                            style={{
                              border: "1px solid #c9c0c0",
                              borderRadius: "4px",
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-label">ZipCode</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your pricing amount"
                            value={zipcode}
                            onChange={(e) => setZipcode(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4">
                        <div className="form-group">
                          <ul className="form-check-list">
                            <li>
                              <label className="form-label">
                                price condition
                              </label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                className="form-check"
                                id="fix-check"
                              />
                              <label
                                htmlFor="fix-check"
                                className="form-check-text"
                              >
                                fixed
                              </label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                className="form-check"
                                id="nego-check"
                              />
                              <label
                                htmlFor="nego-check"
                                className="form-check-text"
                              >
                                negotiable
                              </label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                className="form-check"
                                id="day-check"
                              />
                              <label
                                htmlFor="day-check"
                                className="form-check-text"
                              >
                                daily
                              </label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                className="form-check"
                                id="week-check"
                              />
                              <label
                                htmlFor="week-check"
                                className="form-check-text"
                              >
                                weekly
                              </label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                className="form-check"
                                id="month-check"
                              />
                              <label
                                htmlFor="month-check"
                                className="form-check-text"
                              >
                                monthly
                              </label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                className="form-check"
                                id="year-check"
                              />
                              <label
                                htmlFor="year-check"
                                className="form-check-text"
                              >
                                yearly
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4">
                        <div className="form-group">
                          <ul className="form-check-list">
                            <li>
                              <label className="form-label">ad category</label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                className="form-check"
                                id="sale-check"
                              />
                              <label
                                htmlFor="sale-check"
                                className="flat-badge sale"
                              >
                                sale
                              </label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                className="form-check"
                                id="rent-check"
                              />
                              <label
                                htmlFor="rent-check"
                                className="flat-badge rent"
                              >
                                rent
                              </label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                className="form-check"
                                id="book-check"
                              />
                              <label
                                htmlFor="book-check"
                                className="flat-badge booking"
                              >
                                booking
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4">
                        <div className="form-group">
                          <ul className="form-check-list">
                            <li>
                              <label className="form-label">
                                product condition
                              </label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                className="form-check"
                                id="use-check"
                              />
                              <label
                                htmlFor="use-check"
                                className="form-check-text"
                              >
                                used
                              </label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                className="form-check"
                                id="new-check"
                              />
                              <label
                                htmlFor="new-check"
                                className="form-check-text"
                              >
                                new
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label className="form-label">ad description</label>
                          <textarea
                            className="form-control"
                            placeholder="Describe your message"
                            defaultValue={""}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label className="form-label">ad tag</label>
                          <textarea
                            className="form-control"
                            placeholder="Maximum of 15 keywords"
                            defaultValue={""}
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                          />
                        </div>
                      </div>
                      {/* <label>user</label> */}
                      <input
                        type="hidden"
                        name="id"
                        placeholder="enter date here"
                        value={id}
                      />

                      <button
                        className="btn btn-primary btn-block col-lg-3"
                        onClick={addNewProduct1}
                        style={{ marginBottom: "20px", marginTop: "10px" }}
                      >
                        Add Product
                      </button>
                    </div>
                  </div>
                  <div className="adpost-card">
                    <div className="adpost-title">
                      <h3>Author Information</h3>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-label">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-label">Number</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Your Number"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-label">Address</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Address"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="adpost-card">
                    <div className="adpost-title">
                      <h3>Plan Information</h3>
                    </div>
                    <ul className="adpost-plan-list">
                      <li>
                        <div className="adpost-plan-content">
                          <h6>
                            Free Plan - <span>Submit 5 Ad Listings</span>
                          </h6>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit Delectus minus Eaque corporis accusantium
                            incidunt officiis deleniti.
                          </p>
                        </div>
                        <div className="adpost-plan-meta">
                          <h3>$00.00</h3>
                          <button className="btn btn-outline">
                            <span>Select</span>
                          </button>
                        </div>
                      </li>
                      <li>
                        <div className="adpost-plan-content">
                          <h6>
                            Standerd Plan - <span>Submit 10 Ad Listings</span>
                          </h6>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit Delectus minus Eaque corporis accusantium
                            incidunt officiis deleniti.
                          </p>
                        </div>
                        <div className="adpost-plan-meta">
                          <h3>$23.00</h3>
                          <button className="btn btn-outline">
                            <span>Select</span>
                          </button>
                        </div>
                      </li>
                      <li>
                        <div className="adpost-plan-content">
                          <h6>
                            Premium Plan - <span>Unlimited Ad Listings</span>
                          </h6>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit Delectus minus Eaque corporis accusantium
                            incidunt officiis deleniti.
                          </p>
                        </div>
                        <div className="adpost-plan-meta">
                          <h3>$43.00</h3>
                          <button className="btn btn-outline">
                            <span>Select</span>
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="adpost-card pb-2">
                    <div className="adpost-agree">
                      <div className="form-group">
                        <input type="checkbox" className="form-check" />
                      </div>
                      <p>
                        Send me Trade Email/SMS Alerts for people looking to buy
                        mobile handsets in www By clicking "Post", you agree to
                        our <a href="#">Terms of Use</a>and{" "}
                        <a href="#">Privacy Policy</a>
                        and acknowledge that you are the rightful owner of this
                        item and using Trade to find a genuine buyer.
                      </p>
                    </div>
                    <div className="form-group text-right">
                      <button className="btn btn-inline">
                        <i className="fas fa-check-circle" />
                        <span>published your ad</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
            {/* <div className="col-lg-4">
        <div className="account-card alert fade show">
          <div className="account-title">
            <h3>Safety Tips</h3>
            <button data-dismiss="alert">close</button>
          </div>
          <ul className="account-card-text">
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit debitis
                odio perferendis placeat at aperiam.
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit debitis
                odio perferendis placeat at aperiam.
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit debitis
                odio perferendis placeat at aperiam.
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit debitis
                odio perferendis placeat at aperiam.
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit debitis
                odio perferendis placeat at aperiam.
              </p>
            </li>
          </ul>
        </div>
        <div className="account-card alert fade show">
          <div className="account-title">
            <h3>Custom Offer</h3>
            <button data-dismiss="alert">close</button>
          </div>
          <form className="account-card-form">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-inline">
                <i className="fas fa-paper-plane" />
                <span>send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default PostDashAds;
