import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { localUrl } from "../env";
import { BsBootstrapFill } from "react-icons/bs";
import { VscLightbulb } from "react-icons/vsc";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import { Chart } from "react-google-charts";
import { CChart } from "@coreui/react-chartjs";
import SweetPagination from "sweetpagination";
import { DatePicker } from "antd";
import React from "react";
import { SignalCellularNullRounded } from "@mui/icons-material";
const Dashboard = () => {
  const userData = useContext(UserContext);
  const [record, setRecord] = useState([]);
  const [totalResult, setTotalResult] = useState([]);
  const [todaypostdata, setTodayPostData] = useState([]);
  const [todayAdsPostData, setTodayAdsPostData] = useState([]);
  const [todayUSERdata, setTodayUSERdata] = useState([]);
  // const [newJson, setNewJson] = useState();
  const [todayBLOGdata, setTodayBLOGdata] = useState([]);
  const [data, setData] = useState("");
  const [date, setDate] = useState(null);
  const [rangeStartDate, setRangeStartDate] = useState(2022 - 12 - 21);
  const [rangetEndDate, setRangetEndDate] = useState(2023 - 1 - 14);
  const [requestData, setRequestData] = useState("user");
  const [graphRangeOutPut, setGraphRangeOutPut] = useState(null);
  const [listDate, setListDate] = useState(null);
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
  const piedata = [
    ["Task", "Hours per Day"],
    ["User", date === null ? totalResult?.user : todaypostdata?.user],
    ["Ads", date == null ? totalResult?.ads : todaypostdata?.ads],
    ["Blogs", date == null ? totalResult?.blogs : todaypostdata?.blogs],
    ["Premiums", totalResult?.premium],
  ];
  const [datasetValue, setDatasetValue] = useState([
    {
      label: "User Data",
      backgroundColor: "rgba(220, 220, 220, 0.2)",
      borderColor: "rgba(220, 220, 220, 1)",
      pointBackgroundColor: "rgba(220, 220, 220, 1)",
      pointBorderColor: "#fff",
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
    },
    {
      label: "Ads Data",
      backgroundColor: "rgba(151, 187, 205, 0.2)",
      borderColor: "rgba(151, 187, 205, 1)",
      pointBackgroundColor: "rgba(151, 187, 205, 1)",
      pointBorderColor: "#fff",
      data: [50, 12, 28, 29, 7, 25, 12, 70, 60],
    },
    {
      label: "Blogs Data",
      backgroundColor: "rgba(151, 187, 205, 0.2)",
      borderColor: "rgba(151, 187, 205, 1)",
      pointBackgroundColor: "rgba(151, 187, 205, 1)",
      pointBorderColor: "#fff",
      data: [11, 15, 25, 36, 0, 88, 66, 48, 15],
    },
  ]);
  const [labelValue, setLablel] = useState([]);
  var dataGrapChart = ["user"];

  const loadDataGraph = (props) => {
    var formdata = new FormData();
    formdata.append("start", "2022-12-21");
    formdata.append("end", "2023-1-14");
    formdata.append("requestData", "user");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://hola9.live/api/adsapi/dataCuntMultipleValues",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        let datavalue;
        setLablel(result?.index);
        // debugger;
        if (props === "user") {
          datasetValue[0].data = result?.value;
          datavalue = datasetValue;
          setDatasetValue(datavalue);
        } else if (props === "blogs") {
          datasetValue[1].data = result?.value;
          datavalue = datasetValue;
          setDatasetValue(datavalue);
        } else if (props === "ads") {
          datasetValue[2].data = result?.value;
          datavalue = datasetValue;
          setDatasetValue(datavalue);
        }
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    dataGrapChart.map((result) => {
      loadDataGraph(result);
    });
  }, [rangeStartDate, rangetEndDate]);
  const options = {
    title: "Daily Activities",
    is3D: true,
  };

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resposne) => resposne.json())
      .then((res) => setRecord(res));
  };

  useEffect(() => {
    getData();
  }, []);
  const activeRequest = () => {
    // var formdata = new FormData();
    // formdata.append("user", localStorage.getItem("userid"));
    var formdata = new FormData();
    formdata.append("user", "124");
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(localUrl + "adsapi/getPricingViews", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        userData?.setActivePlan(result);
      })
      .catch((error) => console.log("error", error));

    // fetch(
    //   "https://hola9.live/api/adsapi/getPricingViews?user=124",
    //   requestOptions
    // )
    //   .then((response) => response.text())
    //   .then((result) => {
    //     userData?.setActivePlan(result);
    //   })
    //   .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    activeRequest();
  }, [userData?.pricing]);

  //this API THROWS ERROR

  useEffect(() => {
    //   // debugger;
    //   if (date == null) {

    var formdata = new FormData();
    formdata.append("dateads", "all");
    var requestOptions = {
      method: "POST",

      body: formdata,
      redirect: "follow",
    };

    fetch(localUrl + "adsapi/webCountData", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "jj");
        setTotalResult(result);
      })
      .catch((error) => console.log("error", error));

    //   } else {

    //     var formdata = new FormData();
    //     // formdata.append("dateads", "2022-8-26");
    //     formdata.append("dateads", date);

    //     var requestOptions = {
    //       method: "POST",
    //       body: formdata,
    //       redirect: "follow",
    //     };

    //     fetch(localUrl + "adsapi/webCountAsperDate", requestOptions)
    //       .then((response) => response.json())
    //       .then((result) => {
    //         setTotalResult(result);
    //       })
    //       .catch((error) => console.log("error", error));
    //   }
  }, [date]);
  console.log(totalResult, "tt");

  useEffect(() => {
    var formdata = new FormData();
    // formdata.append("dateads", "2022-8-26");
    formdata.append("dateads", date);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(localUrl + "adsapi/webCountAsperDate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setTodayPostData(result);
      });
  }, [date]);

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("dateads", listDate ? listDate : "all");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(localUrl + "adsapi/webCountasPerDateData", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setTodayAdsPostData(result);
      })
      .catch((error) => console.log("error", error));
  }, [listDate]);
  useEffect(() => {
    var formdata = new FormData();
    formdata.append("dateads", listDate ? listDate : "all");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(localUrl + "adsapi/webCountBLOGSPerDateData", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setTodayBLOGdata(result);
      })
      .catch((error) => console.log("error", error));
  }, [listDate]);
  console.log(todayBLOGdata, "oo");
  useEffect(() => {
    console.log("before api hist");

    var formdata = new FormData();
    formdata.append("dateads", listDate ? listDate : "all");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(localUrl + "adsapi/webCountUSERPerDateData", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "pp");
        setTodayUSERdata(result);
        // setNewJson(JSON.parse(todayUSERdata?.RegisterData));
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@setTodayUSERdata", result);
      })
      .catch((error) => console.log("error", error));
  }, [listDate]);
  // console.log(JSON.parse(todayUSERdata?.RegisterData), "bb");
  // console.log("newJson", newJson);

  //this API THROWS ERROR

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("start", "2022-6-12");
    formdata.append("end", "2023-1-3");
    formdata.append("requestData", "user");
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://hola9.live/api/adsapi/dataCuntMultipleValues",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setGraphRangeOutPut(result))
      .catch((error) => console.log("error", error));
  }, [rangeStartDate, rangetEndDate, requestData]);

  const menu = (
    <Menu
      items={[
        {
          label: (
            <p
              onClick={() => {
                setData("User");
              }}
            >
              User
            </p>
          ),
          key: "0",
        },
        {
          label: (
            <p
              onClick={() => {
                setData("Blogs");
              }}
            >
              Blogs
            </p>
          ),
          key: "1",
        },
        {
          label: (
            <p
              onClick={() => {
                setData("Ads");
              }}
            >
              Ads
            </p>
          ),
          key: "2",
        },
      ]}
    />
  );

  return (
    <div className="col main pt-5 mt-3">
      {/* <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Library</a></li>
            <li className="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
        </nav> */}
      <div className="row d-flex m-2">
        <div className="col-lg-3 border border-rounded text-center">
          Employee Details and Records
        </div>
        <div className="col-lg-5 col-sm-2 text-center">
          Your Date :{" "}
          <Space direction="vertical" className="mx-3">
            <DatePicker
              onChange={(date, dateString) => {
                if (dateString === "") {
                  setDate(null);
                } else {
                  setDate(dateString);
                }
              }}
            />
          </Space>
        </div>
        {/* <div className="dropdown col-lg-2 col-sm-2">
          <button
            className="btn btn-secondary dropdown-toggle w-75 fs-12 "
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Date
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <input
              type="date"
              id="date_input"
              value=""
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
        </div> */}
      </div>
      <div
        className="alert alert-warning fade collapse"
        role="alert"
        id="myAlert"
      >
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
          <span className="sr-only">Close</span>
        </button>
        <strong>Data and Records</strong> Learn more about employee
      </div>

      <div className="row mb-3">
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card bg-success text-white h-100">
            <div
              className="card-body bg-success"
              style={{ backgroundColor: "#57b960" }}
            >
              <div className="rotate">
                <i className="fa fa-user fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Users</h6>

              {date == null ? (
                <h1 className="display-4">{totalResult?.user?.Register}</h1>
              ) : (
                <h1 className="display-4">{totalResult?.user?.jobsrequired}</h1>
              )}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bg-danger h-100">
            <div className="card-body bg-danger">
              <div className="rotate d-flex justify-content-between">
                <i className="fa fa-list fa-4x"></i>
                {/* <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle w-100 fs-12" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                List
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <input type="date" id='date_input' value=""  onChange={(e)=>{ 
                                    setDate(e.target.value)}} />
                                </div>
                            </div> */}
              </div>
              <h6 className="text-uppercase">Posts</h6>
              {/* <h1 className="display-4">{totalResult.ads}</h1> */}
              {date == null ? (
                <h1 className="display-4">{totalResult?.ads?.ads}</h1>
              ) : (
                <h1 className="display-4">{totalResult?.ads?.adsmangeme}</h1>
              )}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bg-info h-100">
            <div className="card-body bg-info">
              <div className="rotate">
                <BsBootstrapFill style={{ fontSize: "55px" }} />
              </div>
              <h6 className="text-uppercase">Blogs</h6>
              {/* <h1 className="display-4">{totalResult.blog}</h1> */}
              {date == null ? (
                <h1 className="display-4">{totalResult?.blog?.BlogComment}</h1>
              ) : (
                <h1 className="display-4">{totalResult?.blog?.Blogs}</h1>
              )}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bg-warning h-100">
            <div className="card-body">
              <div className="rotate">
                <VscLightbulb style={{ fontSize: "55px" }} />
              </div>
              <h6 className="text-uppercase">Premiums</h6>
              {date == null ? (
                <h1 className="display-4">{totalResult?.ads?.premium}</h1>
              ) : (
                <h1 className="display-4">{totalResult?.premium}</h1>
              )}
            </div>
          </div>
        </div>
      </div>

      <hr />
      {/* <div className="row placeholders mb-3">
            <div className="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/dddddd/fff?text=1" className="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>Responsive</h4>
                <span className="text-muted">Device agnostic</span>
            </div>
            <div className="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/e4e4e4/fff?text=2" className="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>Frontend</h4>
                <span className="text-muted">UI / UX oriented</span>
            </div>
            <div className="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/d6d6d6/fff?text=3" className="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>HTML5</h4>
                <span className="text-muted">Standards-based</span>
            </div>
            <div className="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/e0e0e0/fff?text=4" className="center-block img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>Framework</h4>
                <span className="text-muted">CSS and JavaScript</span>
            </div>
        </div> */}

      <div className="row ">
        <div className="col-lg-7 col-md-6 col-sm-12">
          <div className="row border border-rounded">
            <div className="col-lg-3   fs-14 text-secondary">
              Check More Records of Employees
            </div>
            <div className="col-lg-1 mt-2">
              <Dropdown overlay={menu} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    {data == "User" ? (
                      <th className="text-dark">User</th>
                    ) : data == "Blogs" ? (
                      <th className="text-dark">Blogs</th>
                    ) : data == "Ads" ? (
                      <th className="text-dark">Ads</th>
                    ) : (
                      <th className="text-dark">User</th>
                    )}
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>

            <div className="col-lg-5 mx-3 mt-2">
              Date :{" "}
              <Space direction="vertical" className="mx-3" height="50px">
                <DatePicker
                  onChange={(date, dateString) => {
                    setListDate(dateString);
                  }}
                />
              </Space>
              {/* {listDate} */}
            </div>
            <div className="col-lg-2 col-sm-2 ">
              <button
                className="btn w-100 text-white p-0 "
                style={{ fontSize: "10px" }}
                onClick={() => {
                  setListDate("all");
                }}
              >
                All
              </button>
            </div>
            {/* <div className="dropdown col-lg-2">
              <button
                className="btn btn-secondary  w-100 fs-12 p-0"
                type="button"
                // id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                List Date
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <input
                  type="date"
                  id="date_input"
                  value=""
                  onChange={(e) => {
                    setListDate(e.target.value);
                  }}
                />
              </div>
            </div> */}

            <div className="table-responsive bg-danger ">
              <table className="col-lg-12 table table-striped ">
                <thead className="thead-light bg-dark">
                  <tr>
                    <th>No</th>
                    {data == "User" ? (
                      <th>name</th>
                    ) : data == "Blogs" ? (
                      <th>author</th>
                    ) : data == "Ads" ? (
                      <th>title</th>
                    ) : (
                      <th>name</th>
                    )}
                    {data == "User" ? (
                      <th>email</th>
                    ) : data == "Blogs" ? (
                      <th>title</th>
                    ) : data == "Ads" ? (
                      <th>price</th>
                    ) : (
                      <th>name</th>
                    )}
                    <th>Date</th>
                    {data == "User" ? (
                      <th>PhoneNumber</th>
                    ) : data == "Blogs" ? (
                      <th>city</th>
                    ) : data == "Ads" ? (
                      <th>city</th>
                    ) : (
                      <th>name</th>
                    )}
                    {/* <th>PhoneNumber</th> */}
                  </tr>
                </thead>
                {data == "User" ? (
                  <tbody>
                    {todayUSERdata?.RegisterData
                      ? JSON.parse(todayUSERdata?.RegisterData)?.map(
                          (result) => {
                            return (
                              <tr>
                                <td>{result?.pk}</td>
                                <td>{result?.fields?.name}</td>
                                <td>{result?.fields?.email}</td>
                                <td>{result?.fields?.created_at}</td>
                                <td>{result?.fields?.phoneNumber}</td>
                              </tr>
                            );
                          }
                        )
                      : null}
                  </tbody>
                ) : data == "Blogs" ? (
                  <tbody>
                    {todayBLOGdata?.map((result) => {
                      return (
                        <tr>
                          <td>{result?.pk}</td>
                          <td>{result?.fields?.author}</td>
                          <td>{result?.fields?.title}</td>
                          <td>{result?.fields?.published_time}</td>
                          <td>{result?.fields?.city}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                ) : data == "Ads" ? (
                  <tbody>
                    {todayAdsPostData?.map((result) => {
                      return (
                        <tr>
                          <td>{result?.pk}</td>
                          <td>{result?.fields?.title}</td>
                          <td>{result?.fields?.price}</td>
                          <td>{result?.fields?.date_created}</td>
                          <td>{result?.fields?.city}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                ) : (
                  <tbody>
                    {todayUSERdata?.RegisterData
                      ? JSON.parse(todayUSERdata?.RegisterData)?.map(
                          (result) => {
                            // {todayUSERdata?.RegisterData?.map((result) => {
                            return (
                              <tr>
                                <td>{result?.pk}</td>
                                <td>{result?.fields?.name}</td>
                                <td>{result?.fields?.email}</td>
                                <td>{result?.fields?.created_at}</td>
                                <td>{result?.fields?.phoneNumber}</td>
                              </tr>
                            );
                          }
                        )
                      : null}
                  </tbody>
                )}
                {/* <tbody>
                         {record.slice(0, 5).map((output)=>
                            <tr>
                                <td>{output.id}</td>
                                <td>{output.name}</td>
                                <td>{output.email}</td>
                                <td>{output.username}</td>
                                <td>{output.website}</td>
                            </tr>
                           )}
                        </tbody> */}
              </table>
            </div>
          </div>

          {/* <SweetPagination
            currentPageData={setCurrentPageData}
            getData={
              data === "User"
                ? todayUSERdata
                : data === "Blogs"
                ? todayBLOGdata
                : data === "Ads"
                ? todayAdsPostData
                : todayUSERdata
            }
            dataPerPage={10}
            navigation={true}
          /> */}
        </div>
        {/* <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
                <h4 className='title mt-3 mb-3 text-center text-secondary'>Data in Chart</h4>
                 <div className="mb-5" style={{height:"300px",width:"400px"}}><PieChart/> </div></div> */}
        <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
          <h4 className="title mt-3 mb-3 text-center text-secondary">
            Data in Chart
          </h4>
          {/* <div>H i I am Piechart</div> */}
          <div>
            <Chart
              chartType="PieChart"
              data={piedata}
              options={options}
              width={"100%"}
              height={"400px"}
            />
          </div>
        </div>
      </div>

      <a id="more"></a>
      <hr />
      <h2 className="sub-header mt-5">Chart For Data</h2>
      {/* <div className="mb-3">
        <div className="card-deck">
          <div className="card card-inverse card-success text-center">
            <div className="card-body">
              <blockquote className="card-blockquote">
                <p>
                  It's really good news that the new Bootstrap 4 now has support
                  for CSS 3 flexbox.
                </p>
                <footer>
                  Makes flexible layouts{" "}
                  <cite title="Source Title">Faster</cite>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="card card-inverse card-danger text-center">
            <div className="card-body">
              <blockquote className="card-blockquote">
                <p>
                  The Bootstrap 3.x element that was called "Panel" before, is
                  now called a "Card".
                </p>
                <footer>
                  All of this makes more <cite title="Source Title">Sense</cite>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="card card-inverse card-warning text-center">
            <div className="card-body">
              <blockquote className="card-blockquote">
                <p>
                  There are also some interesting new text classes for uppercase
                  and capitalize.
                </p>
                <footer>
                  These handy utilities make it{" "}
                  <cite title="Source Title">Easy</cite>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="card card-inverse card-info text-center">
            <div className="card-body">
              <blockquote className="card-blockquote">
                <p>
                  If you want to use cool icons in Bootstrap 4, you'll have to
                  find your own such as Font Awesome or Ionicons.
                </p>
                <footer>
                  The Glyphicons are not{" "}
                  <cite title="Source Title">Included</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div> */}
      <div className="row d-flex">
        <div className="dropdown col-lg-4">
          <span className="col-lg-12 text-center" style={{ fontSize: "10px" }}>
            Start Date :
            <Space direction="vertical" className="mx-3">
              <DatePicker
                onChange={(date, dateString) => {
                  setRangeStartDate(dateString);
                }}
              />
            </Space>
          </span>
          {/* <button
          className="btn btn-secondary dropdown-toggle w-100 fs-12"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Start
        </button> */}
          {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <input
            type="date"
            id="date_input"
            value=""
            onChange={(e) => {
              setRangeStartDate(e.target.value);
            }}
          />
        </div> */}
        </div>
        <div className="dropdown col-lg-4 d-flex">
          <span className="col-lg-12 text-center" style={{ fontSize: "10px" }}>
            {/* Date : {rangetEndDate} */}
            End Date :{" "}
            <Space direction="vertical" className="mx-3">
              <DatePicker
                onChange={(date, dateString) => {
                  setRangetEndDate(dateString);
                }}
              />
            </Space>
          </span>

          {/* <button
          className="btn btn-secondary dropdown-toggle w-100 fs-12"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          End
        </button> */}
          {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <input
            type="date"
            id="date_input"
            value=""
            onChange={(e) => {
              setRangetEndDate(e.target.value);
            }}
          />
        </div> */}
        </div>
      </div>
      <CChart
        className="my-2"
        type="line"
        data={{
          labels: labelValue,
          datasets: datasetValue,
        }}
      />

      <a id="flexbox"></a>
      <hr />
      <h2 className="mt-5">Masonry-style grid columns</h2>
      <h6>with Bootstrap 4 flexbox</h6>

      <div className="card-columns mb-3">
        <div className="card">
          <img
            className="card-img-top img-fluid"
            src="//placehold.it/600x200/444/fff?text=..."
            alt="Card imag cap"
          />
          <div className="card-body">
            <h4 className="card-title">New XL Grid Tier</h4>
            <p className="card-text">
              With screens getting smaller, Bootstrap 4 introduces a new grid
              breakpoint with the col-xl-* classes. This extra tier extends the
              media query range all the way down to 576 px. Eventhough the new
              XL tier would make one think it’s been added to support extra
              large screens, it’s actually the opposite.
            </p>
          </div>
        </div>
        <div className="card card-body">
          <blockquote className="card-blockquote">
            <p>Bootstrap 4 will be lighter and easier to customize.</p>
            <footer>
              <small className="text-muted">
                Someone famous like <cite title="Source Title">Mark Otto</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div className="card">
          <img
            className="card-img-top img-fluid"
            src="//placehold.it/600x200/bbb/fff?text=..."
            alt="Card image cap"
          />
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card card-body card-inverse card-primary text-center">
          <blockquote className="card-blockquote">
            <p>
              Create masonry or Pinterest-style card layouts in Bootstrap 4.
            </p>
            <footer>
              <small>
                Someone famous in <cite title="Source Title">Bootstrap</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div className="card card-body text-center">
          <h4 className="card-title">Clever heading</h4>
          <p className="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 5 mins ago</small>
          </p>
        </div>
        <div className="card">
          <img
            className="card-img img-fluid"
            src="//placehold.it/600x200/777/fff?text=..."
            alt="Card image"
          />
        </div>
        <div className="card card-body text-right">
          <blockquote className="card-blockquote">
            <p>
              There are also some interesting new text classes to uppercase or
              capitalize.
            </p>
            <footer>
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Bootstrap</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div className="card card-body">
          <h4 className="card-title">Responsive</h4>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
        <div className="card">
          <div className="card-body">
            <ul className="list-unstyled">
              <li className="text-capitalize">
                <code className="text-lowercase">text-capitalize</code>{" "}
                Capitalize each word
              </li>
              <li className="text-uppercase">
                <code className="text-lowercase">text-uppercase</code> Uppercase
                text
              </li>
              <li className="text-success">
                <code>text-success</code> Contextual colors for text
              </li>
              <li>
                <code>text-muted</code>{" "}
                <span className="text-muted">Lighten with muted</span>
              </li>
              <li>
                <code>text-info</code>{" "}
                <span className="text-muted">Info text color</span>
              </li>
              <li>
                <code>text-danger</code>{" "}
                <span className="text-muted">Danger text color</span>
              </li>
              <li>
                <code>text-warning</code>{" "}
                <span className="text-muted">Warning text color</span>
              </li>
              <li>
                <code>text-primary</code>{" "}
                <span className="text-primary">Primary text color</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="card card-body">
          <h4 className="card-title">Heading</h4>
          <p className="card-text">
            So now that you've seen some of what Bootstrap 4 has to offer, are
            you going to give it a try?
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 12 mins ago</small>
          </p>
        </div>
      </div>

      <a id="layouts"></a>
      <hr />
      <h2 className="sub-header mt-5">Interesting layouts and elements</h2>
      <div className="row mb-3">
        <div className="col-lg-6">
          <div className="card mb-3">
            <div className="card-header">
              Bye .well, .panel &amp; .thumbnail
            </div>
            <div className="card-body">
              <h4 className="card-title">Replaced with .card</h4>
              <p className="card-text">
                All of these Bootstrap 3.x components have been dropped entirely
                for the new card component.
              </p>
              <button type="button" className="btn btn-secondary btn-lg">
                Large
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#home1"
                role="tab"
                data-toggle="tab"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#profile1"
                role="tab"
                data-toggle="tab"
              >
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#messages1"
                role="tab"
                data-toggle="tab"
              >
                Messages
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#settings1"
                role="tab"
                data-toggle="tab"
              >
                Settings
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <br />
            <div role="tabpanel" className="tab-pane active" id="home1">
              <h4>Home</h4>
              <p>
                1. These Bootstrap 4 Tabs work basically the same as the
                Bootstrap 3.x tabs.
                <br />
                <br />
                <button className="btn btn-primary-outline btn-lg">Wow</button>
              </p>
            </div>
            <div role="tabpanel" className="tab-pane" id="profile1">
              <h4>Pro</h4>
              <p>
                2. Tabs are helpful to hide or collapse some addtional content.
              </p>
            </div>
            <div role="tabpanel" className="tab-pane" id="messages1">
              <h4>Messages</h4>
              <p>3. You can really put whatever you want into the tab pane.</p>
            </div>
            <div role="tabpanel" className="tab-pane" id="settings1">
              <h4>Settings</h4>
              <p>
                4. Some of the Bootstrap 3.x components like well and panel have
                been dropped for the new card component.
              </p>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="col-lg-6">
          <div className="card card-default card-body">
            <ul id="tabsJustified" className="nav nav-tabs nav-justified">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href=""
                  data-target="#tab1"
                  data-toggle="tab"
                >
                  List
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href=""
                  data-target="#tab2"
                  data-toggle="tab"
                >
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href=""
                  data-target="#tab3"
                  data-toggle="tab"
                >
                  More
                </a>
              </li>
            </ul>

            <br />
            <div id="tabsJustifiedContent" className="tab-content">
              <div className="tab-pane" id="tab1">
                <div className="list-group">
                  <a href="" className="list-group-item">
                    <span className="float-right label label-success">51</span>{" "}
                    Home Link
                  </a>
                  <a href="" className="list-group-item">
                    <span className="float-right label label-success">8</span>{" "}
                    Link 2
                  </a>
                  <a href="" className="list-group-item">
                    <span className="float-right label label-success">23</span>{" "}
                    Link 3
                  </a>
                  <a href="" className="list-group-item text-muted">
                    Link n..
                  </a>
                </div>
              </div>
              <div className="tab-pane active" id="tab2">
                <div className="row">
                  <div className="col-sm-7">
                    <h4>Profile Section</h4>
                    <p>
                      Imagine creating this simple user profile inside a tab
                      card.
                    </p>
                  </div>
                  <div className="col-sm-5">
                    <img
                      src="//placehold.it/170"
                      className="float-right img-responsive img-rounded"
                    />
                  </div>
                </div>
                <hr />
                <a href="javascript:;" className="btn btn-info btn-block">
                  Read More Profiles
                </a>
                <div className="spacer5"></div>
              </div>
              <div className="tab-pane" id="tab3">
                <div className="list-group">
                  <a href="" className="list-group-item">
                    <span className="float-right label label-info label-pill">
                      44
                    </span>{" "}
                    <code>.panel</code> is now <code>.card</code>
                  </a>
                  <a href="" className="list-group-item">
                    <span className="float-right label label-info label-pill">
                      8
                    </span>{" "}
                    <code>.nav-justified</code> is deprecated
                  </a>
                  <a href="" className="list-group-item">
                    <span className="float-right label label-info label-pill">
                      23
                    </span>{" "}
                    <code>.badge</code> is now <code>.label-pill</code>
                  </a>
                  <a href="" className="list-group-item text-muted">
                    Message n..
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div id="accordion" role="tablist" aria-multiselectable="true">
            <div className="card">
              <div
                className="card-header"
                role="tab"
                id="headingOne"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion example
              </div>
              <div
                id="collapseOne"
                className="card-block collapse in"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <p>
                  This is a Bootstrap 4 accordion that uses the{" "}
                  <code>.card</code> classes instead of <code>.panel</code>. The
                  single-open section aspect is not working because the parent
                  option (dependent on .panel) has not yet been finalized in BS
                  4 alpha.{" "}
                </p>
              </div>
              <div
                className="card-header"
                role="tab"
                id="headingTwo"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Mobile-first
              </div>
              <div
                id="collapseTwo"
                className="card-block collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <p>
                  Just like it's predecesor, Bootstrap 4 is mobile-first so that
                  you start by designing for smaller devices such as smartphones
                  and tablets, then proceed to laptop and desktop layouts.
                </p>
              </div>
              <div
                className="card-header"
                role="tab"
                id="headingThree"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Built for CSS3
              </div>
              <div
                id="collapseThree"
                className="card-block collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <p>
                  Bootstrap employs a handful of important global styles and
                  settings that you’ll need to be aware of when using it, all of
                  which are almost exclusively geared towards the normalization
                  of cross browser styles.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-4">
            <a href="/go/KrUO8QpyXP/bootstrao-4-dashboard" target="_ext">
              Get this Bootstrap 4 admin dashboard at Codeply
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
