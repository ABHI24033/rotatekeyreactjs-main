import React, { useState } from "react";
import { localUrl } from "../../env";
import { isMobile } from "react-device-detect";
import { AutoComplete, Button, Form, Input, Select, message } from "antd";
import { add } from "../../../store/Track/trackUserSlice";
import { useDispatch } from "react-redux";

const mobileStyle = {
  width: "100%",
  padding: "10px",
  justifyContent: "center",
};
const desktopStyle = {
  width: "100%",
};

const { Option } = Select;

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
      span: 16,
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
const Cwe = () => {
  const disptach = useDispatch();
  // disptach(add({form:["contact","contactPage",values]}))
  const [values, setValues] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    disptach(add({ form: ["contact", "contactPage", values] }));

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

    fetch(localUrl + "contactus/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        //   setSuccess(" Your Form is Submitted Successfully!!!! We will contact you soon!!!! ")

        //   let body12 = '{"toAddress":"' + "tech@hola9.com" + '","title":"hola9 contact","message":"This is your <b>' + contactform.Name + '</b> <b>' + contactform.Email + '</b> <b>' + contactform.PhoneNumber + '</b> <b>' + contactform.Message + '</b>!"}'

        const options = {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key":
              "7fded38e7emsh3c4fb60f3b8017cp1c084bjsn32180c499f5f",
            "X-RapidAPI-Host": "hourmailer.p.rapidapi.com",
          },
          // body: body12
        };

        // fetch('https://hourmailer.p.rapidapi.com/send', options)
        //   .then(response => response.json())
        //   .then(response =>{ console.log(response)
        //     })
        //   .catch(err => console.error(err));
        // return (
        //   <div>we will notify you</div>
        // )
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
        <h5 className="text-success bg-white" style={{ textAlign: "center" }}>
          Submitted
        </h5>
      </div>
    );
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>
  );

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  return (
    <>
      {" "}
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
        style={isMobile ? mobileStyle : desktopStyle}
      >
        <Form.Item
          name="Email"
          label="Email"
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
          name="Name"
          label="Name"
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
          <Input placeholder="Enter your Name" />
        </Form.Item>
        <Form.Item
          name="PhoneNumber"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
            {
              pattern: new RegExp("^[0-9]*$"),
              message: "Wrong format!",
            },
          ]}
        >
          <Input
            placeholder="Enter Phone Number"
            maxLength={10}
            minLength={10}
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
        <Form.Item
          name="Message"
          label="Message"
          rules={[
            {
              required: true,
              message: "Enter Message",
            },
          ]}
        >
          <Input.TextArea
            showCount
            maxLength={100}
            placeholder="Enter Message Here"
          />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <h4 className="text-success">{successMessage()}</h4>
      </Form>
    </>
  );
};
export default Cwe;
