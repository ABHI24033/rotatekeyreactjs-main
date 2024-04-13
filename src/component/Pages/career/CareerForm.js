import React, { useEffect, useState } from "react";
import { localUrl } from "../../env";
import { isMobile } from "react-device-detect";
import { Button, Form, Input, Select } from "antd";
import { BsFillCircleFill } from "react-icons/bs";

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
const CareerForm = ({ jobs }) => {
  const mobileStyle = {
    width: "100%",
    padding: "10px",
    justifyContent: "center",
  };
  const desktopStyle = {
    width: "100%",
  };

  const mobileStyle1 = {};
  const desktopStyle1 = {
    borderLeft: "1px solid green",
    height: "450px",
  };
  const mob = {
    width: "100%",
  };
  const desk = {
    marginLeft: "90px",
  };
  const mob1 = {
    height: "auto",
  };
  const desk1 = {};
  const mobdes = {
    height: "80px",
    overflowX: "hidden",
    overflowY: "auto",
  };
  const deskdes = {
    height: "150px",
    overflowX: "hidden",
    overflowY: "auto",
  };
  console.log(jobs, "oo");
  const [filePath, setFilePath] = useState(null);
  const [fileObj, setFileObj] = useState(null);
  useEffect(() => {}, [setFilePath]);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("first", values);
    var formdata = new FormData();
    formdata.append("name", values.name);
    formdata.append("phone", values.phone);
    formdata.append("email", values.Email);
    formdata.append("title", jobs.fields?.title);
    formdata.append("Introduction", values.Message);
    formdata.append("filename", fileObj);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    fetch(localUrl + "user/jobDetails", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    form.resetFields();
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

  return (
    <div className="row" style={isMobile ? mob1 : desk1}>
      <div className="col-lg-5">
        <h3>{jobs.fields?.title}</h3>
        <p>
          No. of Openings: <b>{jobs.fields.no_of_openings}</b>
        </p>
        <p className="fs-18 font-weight-bold ">
          Starting CTC: As per industry standard's
        </p>
        <p className="fs-14">
          <BsFillCircleFill style={{ fontSize: "10px" }} />{" "}
          <b>Job Responsibility </b> : {jobs.fields.job_responsiblity}
          <br />
          <BsFillCircleFill style={{ fontSize: "10px" }} />{" "}
          <b>Technical Skills </b>: {jobs.fields.technical_skills}
          <br />
          <BsFillCircleFill style={{ fontSize: "10px" }} />{" "}
          <b>Qualification </b>: {jobs.fields.Preferred_qualification}
        </p>
        <b> Description</b>
        <p className="fs-14" style={isMobile ? mobdes : deskdes}>
          {" "}
          {jobs.fields.description}
        </p>
      </div>
      <div className="col-lg-7" style={isMobile ? mobileStyle1 : desktopStyle1}>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
          style={isMobile ? mobileStyle : desktopStyle}
        >
          <Form.Item
            name="job id"
            label="Job Id"
            rules={[
              {
                type: "text",
                message: "The input is not valid E-mail!",
              },
            ]}
          >
            <Input value={jobs?.pk} disabled placeholder={jobs?.pk} />
          </Form.Item>
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
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
                whitespace: true,
              },
            ]}
          >
            {/* <Input /> */}
            <Input placeholder="Enter your Name" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <input
            required
            style={isMobile ? mob : desk}
            className="mb-3"
            type="file"
            onChange={(e) => {
              setFileObj(e.target?.files[0]);
              setFilePath(e.target.value);
              console.log("change", e.target?.files[0].name, e.target.value);
            }}
          />
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
        </Form>
      </div>
    </div>
  );
};
export default CareerForm;
