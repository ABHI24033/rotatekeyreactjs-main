import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select, message, Upload } from "antd";
import { Margin } from "@mui/icons-material";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 30,
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

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const CallSchedule = () => {
  const [submitted, setSubmitted] = useState(false);
  const [file, setFile] = useState(null);

  function handleFileUpload(event) {
    setFile(event.target.files[0]);
  }

  const [form] = Form.useForm();
  const onFinish = (values) => {
    form.resetFields();
    setSubmitted(true);
    console.log("fisty", values);

    var formdata = new FormData();
    // formdata.append("id", "1");
    formdata.append("description", values.description);
    formdata.append("name", values.user.name);
    formdata.append("phone_number", values.phone_number);
    // formdata.append("add_file","/C:/Users/Admin/Downloads/Resume (1).pdf");
    formdata.append("add_file", file, values.addfile);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://139.59.26.221:8000/api/user/contactform", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result, "re"))
      .catch((error) => console.log("error", error));
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
          Request Submitted Succesfully.
        </h5>
      </div>
    );
  };
  return (
    <center>
      <Form
        form={form}
        className="mt-3 mb-3 "
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{
          maxWidth: 560,
          background: "whitesmoke",
          padding: "20px 40px 10px 30px",
        }}
        validateMessages={validateMessages}
      >
        <h4 className="mb-3">
          <b>Schedule A Call</b>
        </h4>
        <Form.Item
          name="description"
          label="Your Query"
          // rules={[
          //   {
          //     required: true,
          //   },
          //   {
          //     message: "Wrong format!",
          //   },
          // ]}
        >
          <Input.TextArea />
        </Form.Item>
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

        {/* <Upload {...props} name="addfile">
<label >Select File / Add File : </label>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload> */}
        {/* <label style={{display:'flex',flexDirection: 'row' ,}}>
        Upload file:
        <input type="file" onChange={handleFileUpload} name="addfile" style={{marginLeft:'10px', width: '100%', border: '1px solid red'}}/>
      </label>  */}
        <Form.Item type="file" label="Upload file">
          <input
            type="file"
            onChange={handleFileUpload}
            name="addfile"
            style={{
              border: "1px solid #cacaca",
              width: "100%",
              padding: "5px",
              borderRadius: "5px",
              background: "white",
            }}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 0,
          }}
        >
          <Button type="primary" htmlType="submit" className="rounded-lg">
            Send Request
          </Button>
        </Form.Item>
        <h4 className="text-success">{successMessage()}</h4>
      </Form>
    </center>
  );
};
export default CallSchedule;
