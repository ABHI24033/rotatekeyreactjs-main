import React from "react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import { Spin } from "antd";
import CommonSectionCategory from "../../../Shared/CommonSectionCategory";
import { categoryModel } from "../../../Model/categoryCons";

const FurnitureCategory = () => {
  return (
    <>
      <div className="mb-3">
        <CommonSectionCategory props={categoryModel.Furniture} />
      </div>
    </>
  );
};

export default FurnitureCategory;
