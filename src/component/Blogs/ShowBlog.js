// import { DatePicker } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Category, localUrl } from "../env";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { isMobile } from "react-device-detect";
import { Card, Row, Col } from "antd";
// import axios from "axios";
// import React, { useState, useEffect } from "react";
import "antd/dist/antd.less";
import { FaBloggerB } from "react-icons/fa";
import { add } from "../../store/Track/trackUserSlice";
import YoutubeMagic1 from "../ContentLoader/YoutubeMagic1";
import NoDataFound from "../datanotfound/NoDataFound";
const { Meta } = Card;
// const categoryColor = styled.li`
//   background: red;
//   color: palevioletred;
// `;
const current = new Date().toGMTString();
// const date = `${current.getDate()}-${current.getMonth() + 1
//   }-${current.getFullYear()}`;
const date = `${current.slice(0, 16)}`;

const mobileStyle = {
  width: "100%",
  margin: "5px",
  justifyContent: "center",
};
const desktopStyle = {
  width: 300,
  margin: "5px",
};

const ShowBlog = () => {
  // const isMobile = true;
  // const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
  // const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState(null);
  const [isloading, setIsLoading] = useState(true);

  // const [error, setError] = useState(null);
  const [showPerPage, setShowPerPage] = useState(3);
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const [tempBlog, setTempBlog] = useState([]);
  const getBlogs = async () => {
    const response = await axios(localUrl + "blogsapi/");
    setBlogs(response.data);
    setTempBlog(response.data);
  };
  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    dispatch(add({ view: ["ShowBlog"] }));
  }, []);

  // const getBlogs = async () => {
  //   setLoading(true)
  //   try {
  //     const response = await axios.get(localUrl + "blogsapi/");
  //     if(!response.statusText.OK===false){
  //       throw Error("Could not fetch the data")
  //     }else{
  //     setBlogs(response.data);
  //     setLoading(false)
  //     setError(null)
  //     }
  //   } catch (err) {
  //     setLoading(false)
  //     // setError(err.message)
  //     setError("Could not fetch the data from this resources")
  //   }
  // };
  // useEffect(() => {
  //   getBlogs();
  // }, []);
  if (category != null) {
    let value1 = blogs.map((result, index) => {
      if (category == null ? false : result.category === category) {
        return "exists";
      }
      return;
    });
    if (value1.includes("exists")) {
      var valuemain = 3;
    }
  }

  useEffect(() => {
    let temp = [];
    temp = tempBlog.map((blog) => {
      // if(blog.category === category){
      if (category == null ? blog : blog.category === category) {
        return blog;
      } else {
        return "null";
      }
    });
    temp.push("null");
    temp = temp.filter(function(e) {
      return temp.indexOf(e) == temp.lastIndexOf(e);
    });

    setBlogs(temp);
  }, [category]);

  useEffect(() => {
    const t = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => {
      clearTimeout(t);
    };
  }, []);

  document.title = "RotateKey - ShowBlogs";
  return (
    <>
      {isloading ? (
        <YoutubeMagic1 />
      ) : (
        <div className="container-fluid mt-1">
          {error && <p>{error}</p>}
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 mx-auto">
              {/* <Ant/> */}
              <span>
                <Row className="justify-content-center">
                  {blogs.length > 0 ? (
                    blogs
                      ?.sort((a, b) => b.id - a.id)
                      .map((blog) => {
                        return (
                          <div key={blog.id}>
                            <Col xs={24} xl={8} className="g-3">
                              <Link to={`/blogs-listing/${blog.id}/`}>
                                <Card
                                  style={isMobile ? mobileStyle : desktopStyle}
                                  cover={
                                    <img
                                      alt="example"
                                      src={blog.image}
                                      style={{ width: "100%", height: "220px" }}
                                    />
                                  }
                                >
                                  <Meta
                                    title={blog.title}
                                    description={blog.description?.slice(
                                      0,
                                      200
                                    )}
                                  />
                                </Card>
                              </Link>
                            </Col>
                          </div>
                        );
                      })
                  ) : (
                    <div
                      style={{
                        margin: "auto",
                        padding: "auto",
                        width: "100%",
                        textAlign: "center",
                      }}
                    >
                      <div>
                        <NoDataFound />
                      </div>
                    </div>
                  )}
                </Row>
              </span>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h6 className="m-auto">Register Your Business With Us</h6>
                </div>
                <div className="card-body p-2">
                  <p
                    className="card-text text-center"
                    style={{ background: "none" }}
                  >
                    Having a Business in mind. We will promote you
                  </p>
                  <h5 className="text-center " style={{ marginLeft: "85px" }}>
                    <Link
                      to="/contact"
                      className="bg-info d-block text-white rounded-pill w-50 "
                    >
                      Contact Us
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Categories</h3>
                </div>
                <div className="card-body p-0">
                  <div className="list-catergory">
                    <div className="item-list">
                      <ul className="list-group mb-0">
                        {Category.map((catItem) => {
                          console.log(catItem, "#@#@#");
                          return (
                            <li
                              className={"list-group-item  "}
                              style={
                                category == catItem
                                  ? { background: "	#C8C8C8", color: "red" }
                                  : { background: "white" }
                              }
                            >
                              <Link
                                to="#"
                                value={catItem}
                                className="text-dark "
                                onClick={(e) => {
                                  setCategory(catItem);
                                }}
                              >
                                {/* <i className="fa fa-car bg-primary text-primary "  /> */}
                                <FaBloggerB /> &nbsp;
                                <span style={{ fontSize: "15px" }}>
                                  {catItem}
                                </span>
                                &nbsp;
                                <span className="badgetext badge badge-pill badge-light mb-0 mt-1 mt-1">
                                  {/* {catItem.length} */}
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                      {/* <button onClick={() => { setCategory(null) }}>clear filter</button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Popular Tags</h3>
                </div>
                <div className="card-body">
                  <div className="product-tags clearfix">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <Link
                          to="#"
                          // onClick={(e) => {
                          //   setCategory("Food");
                          onClick={(e) => {
                            setCategory("Food");
                          }}
                        >
                          Food blogs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          onClick={(e) => {
                            setCategory("Fashion");
                          }}
                        >
                          Fashion blogs
                        </Link>
                      </li>
                      <li>
                        <Link to="#">Lifestyle blogs</Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          onClick={(e) => {
                            setCategory("Joureney");
                          }}
                        >
                          Travel blogs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          onClick={(e) => {
                            setCategory("Art");
                          }}
                        >
                          Art and Craft blogs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          onClick={(e) => {
                            setCategory("Book");
                          }}
                        >
                          Book and writing blogs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          onClick={(e) => {
                            setCategory("photography");
                          }}
                        >
                          Photography
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          onClick={(e) => {
                            setCategory("Interview");
                          }}
                        >
                          Interviews Preparation
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          onClick={(e) => {
                            setCategory("Inspirational");
                          }}
                        >
                          Inspirational Stories
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          onClick={(e) => {
                            setCategory("Interior");
                          }}
                        >
                          Interior Design
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          onClick={(e) => {
                            setCategory("Weedings");
                          }}
                        >
                          Destination Weddings
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="mb-0"
                          onClick={(e) => {
                            setCategory("RealEstate");
                          }}
                        >
                          Real Estate
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowBlog;
