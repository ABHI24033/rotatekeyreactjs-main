import React, { useState, useEffect } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { isMobile } from "react-device-detect";
import "./Career.css";
import { Button, Modal } from "antd";
import CareerForm from "./CareerForm";
import { localUrl } from "../../env";
import Spiner from "../../Spiner";
const mobileStyle = {};
const desktopStyle = {
  borderLeft: "3px solid rgb(6 14 131 / 35%)",
  height: "350px",
};

const mob = {};
const desk = { margin: "20px" };
const mobdes = {};
const deskdes = {
  height: "70px",
};
const Career = () => {
  const [open, setOpen] = useState(false);
  const [jobdata, setJobData] = useState([]);
  const [jobId, setJobId] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(localUrl + "user/jobsRequired", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setJobData(result);
        console.log(result, "gg");
      })
      .catch((error) => console.log("error", error));
    setLoading(false);
  }, []);
  return (
    <>
      {loading && <Spiner />}
      <div className="row border p-3">
        <div className="col-lg-2"></div>
        <div className="col-lg-8 mt-3 ">
          <h3
            style={{ textAlign: "center", fontWeight: "bold", color: "black" }}
          >
            Join Our Team
          </h3>
          <p
            className="fs-18"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            RotateKey is a leading digital platform for local service businesses in
            India. RotateKey focuses on expert services clustered around Home, Life
            and Self and where the user's need is customized. Using technology
            and domain intelligence.
          </p>
        </div>
      </div>
      <div className="row  p-3">
        <div className="col-lg-1"></div>
        <div className="col-lg-5">
          <h3>Our Culture</h3>
          <p>
            We foster an inclusive workplace environment where employees are
            supported and encouraged to be their authentic selves and do their
            best work.
            <br />
            Further, all employees are respected and given the opportunity to
            grow and thrive. From onboarding and training, to conference
            participation and continuing educational opportunities, development
            and subject matter expertise is highly valued.
          </p>
          <b>Be a part of one of the best Indian software companies.</b>
          <p>
            RotateKey is proud of our talented workforce. We show gratitude to our
            employees by organizing regular outings, like cricket and
            volleyball. We also cater special luncheons and recognize
            achievements with promotions, raises and bonuses!
          </p>
        </div>

        <div className="col-lg-5" style={isMobile ? mobileStyle : desktopStyle}>
          <div className="mx-3">
            {" "}
            <h3>EMPLOYEE BENEFITS</h3>
            <p>
              <BsFillCircleFill style={{ fontSize: "10px" }} />
              &nbsp;Fast-paced environment in a leading organization that’s
              growing exponentially &nbsp;
              <br /> <BsFillCircleFill style={{ fontSize: "10px" }} />
              &nbsp;Competitive compensation packages with additional earnings
              potential &nbsp; <br />
              <BsFillCircleFill style={{ fontSize: "10px" }} />
              &nbsp;Comprehensive benefits package &nbsp; <br />
              <BsFillCircleFill style={{ fontSize: "10px" }} />
              &nbsp;Opportunities to drive new ideas and concepts &nbsp;
              <br />
              <BsFillCircleFill style={{ fontSize: "10px" }} />
              &nbsp;Strong technical knowledge and expertise &nbsp;
              <br />
              <BsFillCircleFill style={{ fontSize: "10px" }} />
              &nbsp;Robust growth &nbsp;
              <br />
              <BsFillCircleFill style={{ fontSize: "10px" }} />
              &nbsp;Flexible work hours &nbsp;
              <br />
              <BsFillCircleFill style={{ fontSize: "10px" }} />
              &nbsp;Extensive training curriculum
            </p>
          </div>
        </div>
      </div>
      <div className="row border bgColor p-5">
        <div className="col-lg-8 " style={{ textAlign: "center" }}>
          <h3 style={{ fontWeight: "bold", color: "white" }}>
            Saturdays are our walk-in interview days
          </h3>
        </div>
        <div className="col-lg-4 ">
          {/* <h4 className="text-white">View Location</h4> */}
        </div>
      </div>
      <div className="row  p-2 " style={isMobile ? mob : desk}>
        {jobdata?.map((jobsdata) => {
          return (
            <div className="col-lg-6">
              <div className="card">
                <h4 className="card-header text-capitalize ">
                  {jobsdata?.fields?.title}
                </h4>
                <h5 className="pl-4 mt-2 mb-1 ">
                  No.Of Openings - <b>{jobsdata.fields.no_of_openings}</b>
                </h5>

                <div className="card-body">
                  {/* <h5 className="card-title">Special title treatment</h5> */}
                  <p className="fs-14">
                    <BsFillCircleFill style={{ fontSize: "10px" }} />{" "}
                    <b>Job Responsibility </b> :{" "}
                    {jobsdata.fields.job_responsiblity}
                    <br />
                    <BsFillCircleFill style={{ fontSize: "10px" }} />{" "}
                    <b>Technical Skills </b>: {jobsdata.fields.technical_skills}
                    <br />
                    <BsFillCircleFill style={{ fontSize: "10px" }} />{" "}
                    <b>Qualification </b>:{" "}
                    {jobsdata.fields.Preferred_qualification}
                  </p>
                  <b> Description</b>
                  <p className="fs-14" style={isMobile ? mobdes : deskdes}>
                    {" "}
                    <div className="d-lg-none hidden-md visible-xs-block visible-sm-block ">
                      {jobsdata.fields.description.slice(0, 100)}...
                    </div>
                    <div className="hidden-sm hidden-xs visible-md-block visible-lg-block">
                      {jobsdata.fields.description.slice(0, 220)}...
                    </div>
                  </p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="careerBtn"
                      onClick={() => {
                        setOpen(true);
                        setJobId(jobsdata);
                      }}
                    >
                      APPLY NOW
                    </button>
                    <p> {jobsdata.fields.created_at}</p>
                  </div>
                  <Modal
                    title="Apply For The Position"
                    centered
                    open={open}
                    onOk={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                    width={1000}
                    style={{ marginTop: "70px" }}
                  >
                    <CareerForm jobs={jobId} />
                  </Modal>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Career;
