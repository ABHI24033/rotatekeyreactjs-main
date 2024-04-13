import React, { useEffect } from "react";
import { useState } from "react";
import "../Addcommentblog/AddComment.css";
import { decrypt } from "../Base/encryptDecrypt/encryptDecrypt";
import { url } from "../env";
import { Alert, Space, Spin } from "antd";
import { useNavigate } from "react-router-dom";
const Blogcomment = (props) => {
  const [blogsComment, setblogsComment] = useState({
    user: "",
    blogs: "",
    date: "",
    comment: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loginFlag, setloginFlag] = useState(false);
  const [messageValue, setMessageValue] = useState(null);
  const [comments, setComment] = useState([]);
  const [commentChange, setCommentChange] = useState(1);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(false);
    var formdata = new FormData();
    formdata.append("ads", props.id);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "api/adsapi/blogCommentBox", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoader(false);
        setComment(result);
      })
      .catch((error) => console.log("error", error));
  }, [commentChange]);
  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setblogsComment({ ...blogsComment, [name]: value });
  };
  const handleSubmit = (e) => {
    setLoader(true);
    e.preventDefault();
    if (localStorage.getItem("access_token") == null) {
      setloginFlag(true);
      navigate("/login");
      setError("please login first ");
    } else {
      var formdata = new FormData();
      formdata.append("ads", props.id.id);
      formdata.append("email", decrypt("userdata").email);
      formdata.append("message", messageValue);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch(url + "api/adsapi/blogCommentBox", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setLoader(false);

          // finalComment()
          setMessageValue("");
          // window.location.reload();
        })
        .catch((error) => console.log("error", error));
      setTimeout(() => {
        setCommentChange(commentChange + 1);
      }, 200);
    }
  };

  document.title = "RotateKey - BlogDetails";
  return (
    <>
      <main id="main" className="site-main contact-main">
        <Space
          direction="vertical"
          style={{
            width: "100%",
          }}
        >
          <Spin tip="Loading..." spinning={loader}>
            <div className=" mt-1 container border border-1 ">
              <div className="d-flex paddingleft row">
                <div className="col-md-12 container m-auto">
                  <div className="d-flex flex-column comment-section">
                    {comments.map((result, index) => {
                      return (
                        <div className="bg-white p-2">
                          <div className="d-flex flex-row user-info">
                            <img
                              className="rounded-circle"
                              src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                              width={50}
                              alt=""
                            />
                            <div className="d-flex flex-column justify-content-start ml-2">
                              <span className="d-block font-weight-bold name">
                                {result.fields.email}
                              </span>
                              <span className="date text-black-50">
                                {result.fields.datetimeValue}
                              </span>
                            </div>
                          </div>
                          <div className="mt-2 mx-2">
                            <p className="comment-text mx-5 fs-14">
                              {result.fields.message}
                            </p>
                          </div>
                        </div>
                      );
                    })}

                    <div className="bg-light p-2">
                      <div className="d-flex flex-row align-items-start">
                        <img
                          className="rounded-circle"
                          src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                          width={40}
                          alt=""
                        />
                        <textarea
                          className="form-control ml-1 shadow-none textarea"
                          defaultValue={messageValue}
                          onChange={(e) => {
                            setMessageValue(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mt-2 text-right">
                        <button
                          className="btn btn-primary btn-sm shadow-none"
                          type="button"
                          onClick={handleSubmit}
                          disabled={messageValue == "" || messageValue == null}
                        >
                          Post comment
                        </button>
                        {/* <button
              className="btn btn-outline-primary btn-sm ml-1 shadow-none"
              type="button"
            >
              Cancel
            </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Spin>
        </Space>
      </main>
    </>
  );
};

export default Blogcomment;
