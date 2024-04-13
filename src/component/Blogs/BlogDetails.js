import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./BlogDetails.css";
import FooterBlog from "./FooterBlog/FooterBlog";
import NewsLetter from "../Base/NewsLetter/NewsLetter";
import Blogcomment from "../Blogcomment/Blogcomment";
import { localUrl } from "../env";
import Spiner from "../Spiner";
import validator from "validator";
import Feature from "../Ads/FeaturedAds/Feature";
import { BsClock, BsFillPersonFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { add } from "../../store/Track/trackUserSlice";

const current = new Date();
const date = `${current.getDate()}-${current.getMonth() +
  1}-${current.getFullYear()}`;

const BlogDetails = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState();
  const [error, setError] = useState(null);
  const [username, setUserName] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
    Message: "",
  });

  const inputEvent = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setUserName({ ...username, [name]: value });
  };
  const submitButton = (e) => {
    e.preventDefault();
    if (
      !validator.isEmpty(username.Name) &&
      username.Email !== "" &&
      username.PhoneNumber !== "" &&
      username.Message !== ""
    ) {
      if (!validator.isEmail(username.Email)) {
        setError("email is need to validate");
      } else if (!validator.isByteLength(username.Name, 3, 20)) {
        setError("name should not be more then 8 character");
      } else if (!validator.isMobilePhone(username.PhoneNumber)) {
        setError("phone number need to validate");
      } else {
        setError("");
        var requestOptions = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(username),
          redirect: "follow",
        };

        fetch(localUrl + "contactus/", requestOptions)
          .then((response) => response.text())
          .then((result) => {
            setSuccess(" Successful stored ");

            let body12 =
              '{"toAddress":"' +
              "tech@hola9.com" +
              '","title":"hola9 contact","message":"This is your <b>' +
              username.Name +
              "</b> <b>" +
              username.Email +
              "</b> <b>" +
              username.PhoneNumber +
              "</b> <b>" +
              username.Message +
              '</b>!"}';

            const options = {
              method: "POST",
              headers: {
                "content-type": "application/json",
                "X-RapidAPI-Key":
                  "3d00e6d5bcmsha491cf18c61b444p100fccjsnf019021bff58",
                "X-RapidAPI-Host": "hourmailer.p.rapidapi.com",
              },
              body: body12,
            };

            fetch("https://hourmailer.p.rapidapi.com/send", options)
              .then((response) => response.json())
              .then((response) => console.log("hiiiii@@", response))
              .catch((err) => console.error(err));
            return <div>we will notify you</div>;
          })
          .catch((error) => console.log("@@error", error));
      }
    } else {
      setError("all filed are required");
    }
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const getSingleBlogs = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(localUrl + `blogsapi/${id}`);
      if (!data.id == true) {
        throw Error("asdf");
      } else {
        setBlogs(data);
        setLoading(false);
        setError(null);
      }
    } catch (err) {
      setError("Something went wrong!!");
      setLoading(false);
    }
  };
  useEffect(() => {
    getSingleBlogs();
  }, []);
  const deleteUser = async (id) => {
    await axios.delete(localUrl + `blogsapi/${id}/`);
    navigate.push("/");
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(add({ view: ["BlogDetails"] }));
  }, []);

  document.title = "RotateKey - BlogDetails";
  return (
    <>
      {/* {error && <div className="alert alert-info">{error}</div>} */}
      {loading && <Spiner />}
      {!loading && (
        <>
          <div className="card col-lg-12 col-md-12 col-sm-12 bg-dark text-white ">
            <img
              src={blogs.image}
              className="card-img"
              alt="..."
              style={{ maxHeight: "400px", objectFit: "fill" }}
            />
          </div>
          {/* <div className="mx-5"> */}
          <div className="row p-3 ">
            <div className="col-lg-9 container col-md-9 col-sm-12">
              <div
                className="border border-1 px-4"
                style={{ width: "90%", margin: " 5px auto" }}
              >
                <h2 className="font-weight-bolder">{blogs.title}</h2>
                <span className="card-text">
                  <BsFillPersonFill className="mr-1" />
                  <b>{!blogs.author ? "Unknown Writer" : blogs.author}</b>
                </span>
                <span className="ml-5" style={{ marginLeft: "50px" }}>
                  <BsClock className="mr-1" />
                  <b>
                    {!blogs.published_time
                      ? "Unknown Date"
                      : blogs.published_time}
                  </b>
                </span>
                <div className="mt-3">
                  <p>{blogs?.description?.slice(0, 350)}....</p>
                </div>
                <div>
                  {/* <h3 style={{marginTop:"15px"}}>Subtitle</h3> */}
                  <h3 className="font-weight-bolder">
                    {!blogs.subtitle ? "Unknown subtitle" : blogs?.subtitle}
                  </h3>
                  <div
                    className="px-5 d-flex justify-content-center"
                    style={{}}
                  >
                    <img
                      className="align-items-center"
                      width="50%"
                      height="200px"
                      src={blogs.imagesecond}
                      alt="Not Available"
                    />
                  </div>
                </div>
                {/* <div>
                  <h3>Subtitle</h3>
                  <p>
                  {blogs.description}
                  </p>
                </div> */}
                <div>
                  {blogs?.description?.length > 348 ? (
                    <>
                      {" "}
                      <h3
                        style={{ marginTop: "15px" }}
                        className="font-weight-bolder"
                      >
                        More Description
                      </h3>
                      <p>{blogs.description?.slice(349)}</p>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="card mt-4">
                <div className="card-body">
                  {!success ? (
                    <form>
                      <h3>Looking for {blogs.title}</h3>
                      <hr className="devider py-1" />
                      <input
                        type="text"
                        name="Name"
                        onChange={inputEvent}
                        value={username.Name}
                        placeholder="Enter Your Name"
                        className="form-control my-2"
                      />
                      <input
                        type="text"
                        name="Email"
                        onChange={inputEvent}
                        value={username.Email}
                        placeholder="Enter Your email"
                        className="form-control my-2"
                      />
                      <input
                        type="text"
                        name="PhoneNumber"
                        onChange={inputEvent}
                        value={username.PhoneNumber}
                        placeholder="Your Mobile Number"
                        className="form-control my-2"
                      />
                      <input
                        type="text"
                        name="Message"
                        onChange={inputEvent}
                        value={username.Message}
                        placeholder="Your Queries"
                        className="form-control my-2"
                      />
                      <button
                        type="submit"
                        onClick={submitButton}
                        className="btn btn-info btn-block my-2"
                      >
                        Submit
                      </button>

                      {error ? (
                        <div className="text-danger">{error}</div>
                      ) : null}
                    </form>
                  ) : (
                    <div className="text-success">{success}</div>
                  )}
                </div>
              </div>
              <div className="card mt-4">
                <div className="card-header">
                  <h3 className="card-title">Popular Tags</h3>
                </div>
                <div className="card-body">
                  <div className="product-tags clearfix">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <Link to="/">Travelling</Link>
                      </li>
                      <li>
                        <Link to="/">Household</Link>
                      </li>
                      <li>
                        <Link to="/">Joureney</Link>
                      </li>
                      <li>
                        <Link to="/">RealEstate</Link>
                      </li>
                      <li>
                        <Link to="/">Furniture</Link>
                      </li>
                      <li>
                        <Link to="/">Book and writing blogs</Link>
                      </li>
                      <li>
                        <Link to="/">Photography</Link>
                      </li>
                      <li>
                        <Link to="/">Interviews Preparation</Link>
                      </li>
                      <li>
                        <Link to="/">Inspirational Stories</Link>
                      </li>
                      <li>
                        <Link to="/">Fashion R</Link>
                      </li>
                      <li>
                        <Link to="/">Interior Design</Link>
                      </li>
                      <li>
                        <Link to="/">Destination Weedings</Link>
                      </li>
                      <li>
                        <Link to="/">Tours and Travels</Link>
                      </li>
                      <li>
                        <Link to="/" className="mb-0">
                          Real Estate
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </>
      )}

      <NewsLetter />
      {/* <FooterBlog /> */}
      <Blogcomment id={id} />
      <Feature />
    </>
  );
};

export default BlogDetails;
