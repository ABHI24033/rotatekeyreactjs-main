import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { PremiumAds } from "../component/Premium-Ads/PremiumAds";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const { Option } = Select;


/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

// const category = [
//   "RealEstate",
//   "Cars",
//   "Bikes",
//   "Furnitues",
//   "Electronics",
//   "Pets",
//   "FeatureAds",
//   "OtherQueries",
// ];





const CategoryEnquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);
const [form] = Form.useForm();
const onFinish = (values) => {
  form.resetFields();
  setSubmitted(true);
  console.log("fisty",values);
  var formdata = new FormData();
formdata.append("name", values.user.name);
formdata.append("email", values.user.email);
formdata.append("phone_number", values.phone_number);
formdata.append("category", values.category);
formdata.append("subject", values.subject);
formdata.append("description", values.user.Description);



var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("http://192.168.1.31:8000/api/businessenquiry/enquiries/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result,"re"))
  .catch(error => console.log('error', error));
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
return(
  <Form
  form={form}
    className="mt-5"
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={["user", "name"]}
      label="Name"
      rules={[
        {
          required: true,
        },
        {
          pattern: new RegExp("^[A-Za-z]*$"),
          message: "Wrong format!",
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={["user", "email"]}
      label="Email"
      rules={[
        {
          type: "email",
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name="phone_number"
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
        addonBefore="+91"
        style={{
          width: "100%",
        }}
      />
    </Form.Item>

    {/* <Form.Item label="Select" name="category">
      <select
        style={{
          width: "100%",
          padding: "8px",
          borderColor: "#80808052",
          borderRadius: "5px",
        }}
      >
        {category.map((val) => {
          return <option value="volvo">{val}</option>;
        })}
      </select>
    </Form.Item> */}

<Form.Item label="Select" name="category">
<Select>
<Select.Option value="RealEstate">RealEstate</Select.Option>

  <Select.Option value="furniture">furniture</Select.Option>
  <Select.Option value="Cars"> Cars</Select.Option>
  <Select.Option value=" Bikes,">  Bikes</Select.Option>
  <Select.Option value="Electronics">Electronics</Select.Option>
  <Select.Option value="Pets">Pets</Select.Option>
  <Select.Option value="FeatureAds">FeatureAds</Select.Option>
  <Select.Option value="OtherQueries">OtherQueries</Select.Option>


  </Select>
    </Form.Item>



    <Form.Item
      name="subject"
      label="Subject"
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
        placeholder="Enter Subject Here"
      />
    </Form.Item>
    <Form.Item name={["user", "Description"]} label="Introduction">
      <Input.TextArea />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit" className="rounded-lg">
        Submit
      </Button>
    </Form.Item>
    <h4 className="text-success">{successMessage()}</h4>

  </Form>
)


};
export default CategoryEnquiryForm;
