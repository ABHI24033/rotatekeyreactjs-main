import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { sendMessage } from "../../../error/errorMessage";
import { localUrl, url } from "../../env";
import "./MessageAdsChat.css";
import validator from "validator";
import { Button, message, Space, Alert } from "antd";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
export const MessageAdsChat = (props) => {
  const navigate = useNavigate();
  console.log(props, "!!!!!");
  const [successmessage, setSuccessmessage] = useState(true);
  const [error, setError] = useState(null);
  const [message, setmessage] = useState({
    Phonenumber: "",
    Messages: "",
  });
  const [users, setUsers] = useState([]);
  const onClose = (e) => {
    console.log(e, "I was closed.");
  };
  const handleChange = (e) => {
    // const name=e.target.name;
    // const value=e.target.value;
    const { name, value } = e.target;
    setmessage({ ...message, [name]: value });
  };

  const submitClick = (e) => {
    e.preventDefault();
    if (
      !(message.Phonenumber.trim().length && message.Messages.trim().length)
    ) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    var formdata = new FormData();
    formdata.append("sender", props.product.phoneNumber);
    formdata.append("title", props.product.title?.slice(0, 5) + "..");
    formdata.append("message", message.Messages);
    formdata.append("phoneNumber", message.Phonenumber);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "api/phone/sendMessage", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    setSuccessmessage(false);
    const newMessage = { id: new Date().getTime().toString(), ...message };
    setUsers([...users, newMessage]);
    setmessage({ Phonenumber: "", Messages: "" });
    console.log(message);
  };

  // for chat app
  const [openPopUp, setOpenPopUp] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [home, setHome] = useState(false);
  const toggleForm = () => {
    setToggle(false);
  };
  const clickRegister = () => {
    setToggle(true);
  };
  const [modal, contextHolder] = Modal.useModal();
  const confirm = () => {
    modal.confirm({
      title: "Please create a account !",
      icon: <ExclamationCircleOutlined />,
      onOk: () => navigate("/signup"),
      okText: "Sign Up",
      open: { openPopUp },
      onCancel: () => setOpenPopUp(false),
      cancelText: "Cancel",
    });
  };
  const visible = false;
  return (
    <div className="col-lg-12 col-md-12 col-sm-6 match-height">
      <div className="widget-box ">
        <div className="widget-content widget-content-post">
          <div className="user-make-offer-message widget-content-post-area">
            <div className="tab-content">
              {successmessage ? (
                <div
                  role="tabpanel"
                  className="tab-pane active"
                  id="message"
                  style={{ marginTop: "-10px" }}
                >
                  <h4 className="fs-16"> Send a message to Seller:</h4>
                  {/* <div className="form-group">
                    <label className="col-sm-3 control-label" htmlFor="subject">
                      Phone:
                    </label>
                    <div className="col-sm-9 mb-2">
                      <input
                        type="number"
                        value={message.Phonenumber}
                        name="Phonenumber"
                        id=""
                        className="form-control  mt-1"
                        placeholder="Enter Phone number"
                        onChange={handleChange}
                      />
                    </div>
                  </div> */}
                  {/* <div className="form-group">
                    <label className="col-sm-3 control-label" htmlFor="msg">
                      Msg :
                    </label> */}
                  {/* <div className="col-sm-9 mb-3"> */}
                  {/* <input
                        type="text"
                        value={message.Messages}
                        name="Messages"
                        id=""
                        className="form-control  mt-1"
                        placeholder="Enter Messages"
                        onChange={handleChange}
                      /> */}
                  {/* <textarea
              id="msg"
              name="message"
              className="form-control"
              placeholder="Type Message"
            
             
              onchange={handlechange}
            /> */}
                  {/* {!message.message && errorHandle && <span className="text-danger ml-2">{sendMessage.Message}</span>} */}
                  {/* </div> */}
                  {/* </div> */}
                  {/* 
                  <input
                    type="hidden"
                    name="submit"
                    defaultValue="send_message"
                  /> */}
                  {/* <button
                    className="btn btn-info btn-block btn-sm sharp btn-style-one rounded text-white fs-14"
                    onClick={submitClick}
                  >
                    Send Message
                  </button> */}
                  <button
                    className="btn btn-primary btn-block btn-sm sharp btn-style-one "
                    name="send_message"
                    value="send_message"
                    type="submit"
                    onClick={() => {
                      setOpenPopUp(!openPopUp);

                      localStorage.getItem("userid")
                        ? navigate(`/user-chat/${props?.product?.uuid}`)
                        : confirm();
                    }}
                  >
                    Chat
                  </button>

                  {contextHolder}

                  {/* {openPopUp && (
                    <Modal
                      width={650}
                      title="Basic Modal"
                      open={true}
                      onOk={() => setOpenPopUp(false)}
                      onCancel={() => setOpenPopUp(false)}
                    >
                      <div className="w-100 h-100">
                        {home ? (
                          <Home showHome={showHome} />
                        ) : !home && toggle ? (
                          <FireLogin
                            showHome={showHome}
                            toggleForm={toggleForm}
                          />
                        ) : (
                          <Register
                            showHome={showHome}
                            clickRegister={clickRegister}
                          />
                        )}
                      </div>
                    </Modal>
                  )} */}
                </div>
              ) : (
                <div>
                  {" "}
                  <Alert
                    message="Success "
                    description="Message Successfully Send"
                    type="success"
                    showIcon
                  />
                </div>
              )}
              {error && (
                <div>
                  {" "}
                  <Alert
                    message="Error "
                    description={"Please enter valid input"}
                    type="error"
                    closable
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
