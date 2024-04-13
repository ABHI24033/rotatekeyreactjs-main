import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { url } from "../../component/env";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const EnqueryForm = () => {
  const [values, setValues] = useState();
  console.log(values, "oo");
  const [submitted, setSubmitted] = useState(false);

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("first", values);
    form.resetFields();
    setSubmitted(true);

    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(values),
      redirect: "follow",
    };
    console.log(typeof body);

    fetch(url + "api/adsapi/RealEstateEnquery", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "jl");

        // const options = {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //     "X-RapidAPI-Key":
        //       "7fded38e7emsh3c4fb60f3b8017cp1c084bjsn32180c499f5f",
        //     "X-RapidAPI-Host": "hourmailer.p.rapidapi.com",
        //   },
        // };
      })
      .catch((error) => console.log("@@error", error));
  };
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h5
          className="text-success"
          style={{ textAlign: "center", backgroundColor: "#f8f9fa" }}
        >
          we will notify you
        </h5>
      </div>
    );
  };
  return (
    <div>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
        style={{ margin: "20px" }}
      >
        <div style={{ display: "flex", justifyContent: "between" }}>
          <Form.Item
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input your name!",
                whitespace: true,
              },
              {
                pattern: new RegExp("^[A-Za-z]*$"),
                message: "Wrong format!",
              },
            ]}
          >
            {/* <Input /> */}
            <Input placeholder="Enter your First Name" />
          </Form.Item>
          <Form.Item
            style={{ marginLeft: "10px" }}
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please input your Last Name!",
                whitespace: true,
              },
              {
                pattern: new RegExp("^[A-Za-z]*$"),
                message: "Wrong format!",
              },
            ]}
          >
            {/* <Input /> */}
            <Input placeholder="Enter your Last Name" />
          </Form.Item>
        </div>
        <div style={{ display: "flex", justifyContent: "between" }}>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input placeholder="Enter Your Email" />
          </Form.Item>
          <Form.Item
            style={{ marginLeft: "10px" }}
            name="zip_code"
            rules={[
              {
                required: true,
                message: "Please input Zip code",
                whitespace: true,
              },
            ]}
          >
            {/* <Input /> */}
            <Input
              placeholder="Enter your zip_code"
              maxLength={6}
              minLength={6}
            />
          </Form.Item>
        </div>

        {/* <Form.Item
          name="remember"
          valuePropName="checked"
         
        >
          <Checkbox>
            {" "}
            I consent to having this website store my submitted information
          </Checkbox>
        </Form.Item> */}
        <Form.Item
          name="remember"
          valuePropName="checked"
          rules={[
            {
              required: true,
              message: "Please accept the Terms & Conditions",
            },
          ]}
        >
          <Checkbox>
            {" "}
            I consent to having this website store my submitted information
          </Checkbox>
        </Form.Item>

        <Form.Item {...tailFormItemLayout} style={{ marginTop: "-10px" }}>
          <Button
            htmlType="submit"
            style={{
              width: "50%",
              paddingBottom: "2px",
              color: "white",
              border: "1px solid rgb(6 14 131 / 35%)",
              fontWeight: "bold",
              borderRadius: "5px",
              background: " linear-gradient(270deg,#0f3854,#2b224c)",
            }}
          >
            Submit
          </Button>
        </Form.Item>
        <h4 className="text-success">{successMessage()}</h4>
      </Form>
    </div>
  );
};

export default EnqueryForm;
