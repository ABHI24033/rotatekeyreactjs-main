import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";
import React, { useEffect, useState } from "react";
import lib from "react-multiple-image-grid";
import { url } from "../env";
import { category1, location1 } from "../env";
const Testss = () => {
  let barererToken = "Bearer " + localStorage.getItem("access_token");
  const [ads, setads] = useState([]);
  const [FeaturedData, setFeaturedData] = useState(0);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", barererToken);

    var formdata = new FormData();
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "api/user/adsby/", requestOptions)
      .then((response) => response.json())
      .then((result) => setads(result))
      .catch((error) => console.log("error", error));
    countvalue();
  }, []);

  const countvalue = () => {
    ads.map((result) => {
      if (result.fields.is_featured == false) {
        setFeaturedData(FeaturedData + 1);
      }
    });
  };

  // const save = ()=>{

  // }
  const [currentKey, setCurrentKey] = useState(null);
  const [final, setFinalData] = useState(null);
  const [currentFilter, setCurrentFilter] = useState(null);

  const OnFinish = (values) => {
    setFinalData(values);
    adsFilter(values.users[currentKey]);
  };
  const dataMethod = (key) => {
    setCurrentKey(key);
    // setFinalData(final[key])
    // adsFilter(final[key])
  };
  const adsFilter = (value) => {};

  return (
    <>
      <Form
        name="dynamic_form_nest_item"
        pricing="dynamic_form_nest_item"
        onFinish={OnFinish}
        autoComplete="off"
      >
        {/* {ads.filter(add =>(add.category1 == category1  && add.location1 ==location1))}    */}
        {/* {ads.map((add, index) => (add.category1 == category1  && add.location1 ==location1)
    (add.category1)
    )} */}

        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{
                    display: "flex",
                    marginBottom: 8,
                  }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "category"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing category",
                      },
                    ]}
                  >
                    <Input placeholder="category" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "location"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing location",
                      },
                    ]}
                  >
                    <Input placeholder="location" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "plan"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing plan",
                      },
                    ]}
                  >
                    <Input placeholder="plan" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                  {/* <Button type="primary" onClick={() => save()} >submit</Button> */}

                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={() => {
                      dataMethod(key);
                    }}
                  >
                    Submit
                  </Button>
                  {currentKey == key ? (
                    <div>
                      hh
                      {/* const result = arr.filter(element => element % 2 === 0); */}
                      {ads.filter((add) => {
                        if (add.category1 == final[currentKey]?.category) {
                          return (
                            <div>
                              <p>ads.category</p>
                            </div>
                          );
                        } else {
                        }
                      })}
                    </div>
                  ) : null}
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          {/* <Button id={index} type="button" onClick={e => this.handleEdit(e)}> */}
        </Form.Item>
      </Form>
    </>
  );
};
export default Testss;
