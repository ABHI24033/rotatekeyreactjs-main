import { Button, Modal, Descriptions } from "antd";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";

export const SuccessMdoel = ({ props }) => {
  console.log("***", props);
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [size, setSize] = useState("large");
  const [renderObj, setRenderObj] = useState({});

  useEffect(() => {
    let obj = {};
    if (props) {
      obj["Name"] = props?.name;
      obj["days"] = props?.days;
      obj["payment_id"] = props?.payment_id;
      obj["order_date"] = props?.order_date;
      obj["Email"] = props?.email;
      obj["Plan"] = props?.plan;
      obj["Regular_Ads"] = props?.regulars;
      obj["PhoneNumber"] = props?.PhoneNumber;
      obj["Top_Ads"] = props?.topAds;
      obj["Feature_Ads"] = props?.featured;
      obj["Amout"] = props?.amount;
      obj["Response"] = props?.response;
      obj["Payment"] = "Success";

      obj["ChatSupport"] = props?.ChatSupport;

      obj["teleSupport"] = props?.teleSupport;

      obj["dedicatedRm"] = props?.dedicatedRm;

      obj["Hola's9Website"] = props?.hol9Website;
    }
    setRenderObj(obj);
    console.log("renderObj:", renderObj);
  }, []);

  const inputRef = useRef(null);
  const printDocument = () => {
    html2canvas(inputRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  };

  return (
    <>
      <Modal
        title="Payment Details"
        centered
        visible={open}
        onOk={() => {
          setOpen(false);
          navigate("/dashboard");
        }}
        onCancel={() => {
          setOpen(false);
          navigate("/dashboard");
        }}
        width={1000}
      >
        <div>
          <div className="App">
            <div className="mb5">
              <button onClick={printDocument}>Print</button>
            </div>
            <div id="divToPrint" ref={inputRef}>
              {/* <div>Note: Here the dimensions of div are same as A4</div> */}
              <div>
                <Descriptions title="Hola9-Payment" layout="vertical">
                  {Object.keys(renderObj)?.map((key) => {
                    return (
                      <Descriptions.Item label={key}>
                        {renderObj[key]}
                      </Descriptions.Item>
                    );
                  })}
                </Descriptions>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
