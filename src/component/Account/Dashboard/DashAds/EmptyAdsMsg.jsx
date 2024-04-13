import React from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Space } from "antd";

const EmptyAdsMsg = ({ plan }) => {
  let navigate = useNavigate();
  return (
    <div className="p-5">
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
      >
        <Alert
          message={plan?.hasOwnProperty("message") ? plan?.message : "No Ads "}
          showIcon
          description={
            plan?.hasOwnProperty("title") ? plan?.title : "Please post ads "
          }
          type="warning"
          action={
            <Button
              size="small"
              danger
              onClick={() => {
                if ("navigate"?.plan) {
                  navigate(plan?.navigate);
                } else {
                  navigate("/add-product");
                }
              }}
            >
              {plan?.hasOwnProperty("buttonName") ? (
                <>{plan?.buttonName}</>
              ) : (
                <> Post Ads</>
              )}
            </Button>
          }
        />
      </Space>
    </div>
  );
};

export default EmptyAdsMsg;
