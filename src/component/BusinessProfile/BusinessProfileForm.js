import React, { useContext, useEffect, useState } from "react";
import { Form, Button, Checkbox, DatePicker, Input, Select, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { access_token, localUrl, recommendedPlan } from "../env";
import { decrypt } from "../Base/encryptDecrypt/encryptDecrypt";
import Testss from "./Testss";
import { useDispatch } from "react-redux";
import activeRequest from "../../store/activePlanSlice";

function BusinessProfileForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // (localStorage.getItem("access_token")==null?navigate('/login/'):

  const dataUser = useContext(UserContext);
  // const dataUser = useContext(UserContext);

  //   const activeRequest =(value)=>{

  //   var formdata = new FormData();
  //   formdata.append("user", value);

  //     var requestOptions = {
  //       method: 'POST',
  //       body: formdata,
  //       redirect: 'follow'
  //     };

  //     fetch(localUrl+"adsapi/getPricingViews", requestOptions)
  //       .then(response => response.json())
  //       .then(result => {
  //      if(result?.length==0){
  //      }
  //
  //         dataUser.setActivePlan(result)
  //       })
  //
  // }

  useEffect(() => {
    let s =
      decrypt("userdata") == "[0]" ? navigate("/login/") : decrypt("userdata");
    dispatch(activeRequest(s?.id));

    //  debugger
    if (dataUser.activePlan.length > 0) {
      if (
        localStorage.getItem("access_token") !== null &&
        dataUser?.activePlan[0]?.fields?.category == "Recommended"
      ) {
      }
      // else if(localStorage.getItem("access_token")){
      //   navigate("/login/")
      // }
      else if (dataUser?.activePlan[0]?.fields?.category !== "Reocommeded") {
        navigate("/pricing/");
      } else {
        navigate("/login");
      }
    }

    // }, [dataUser.activePlan])
  }, []);

  return (
    <div className="App">
      <Testss />
      <header className="App-header">
        <Form
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={(values) => {}}
          onFinishFailed={(error) => {}}
        >
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            // hasFeedback
          >
            <Input placeholder="Type your name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
              { type: "email", message: "Please enter a valid email" },
            ]}
            // hasFeedback
          >
            <Input placeholder="Type your email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
              },
              { min: 6 },
              {
                validator: (_, value) =>
                  value && value.includes("A")
                    ? Promise.resolve()
                    : Promise.reject("Password does not match criteria."),
              },
            ]}
            // hasFeedback
          >
            <Input.Password
              placeholder="Type your password"
              style={{
                padding: "8px 15px",
              }}
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered does not match."
                  );
                },
              }),
            ]}
            // hasFeedback
          >
            <Input.Password
              placeholder="Confirm your password"
              style={{
                padding: "8px 15px",
              }}
            />
          </Form.Item>

          <Form.Item name="gender" label="Gender" requiredMark="optional">
            <Select placeholder="Select your gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[
              {
                required: true,
                message: "Please provide your date of birth",
              },
            ]}
            hasFeedback
          >
            <DatePicker
              style={{ width: "100%", padding: "8px 15px" }}
              picker="date"
              placeholder="Chose date of birth"
            />
          </Form.Item>

          <Form.Item
            name="website"
            label="Website"
            rules={[{ type: "url", message: "Please enter a valid url" }]}
            // hasFeedback
          >
            <Input placeholder="Add your website url" />
          </Form.Item>

          <Form.Item
            name="agreement"
            wrapperCol={{ span: 24 }}
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        "To proceed, you need to agree with our terms and conditions"
                      ),
              },
            ]}
          >
            <Checkbox>
              {" "}
              Agree to our <a href="#">Terms and Conditions</a>
            </Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button block type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
}
export default BusinessProfileForm;
