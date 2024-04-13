import React from "react";
import CommonSectionCategory from "../../../Shared/CommonSectionCategory";
import { categoryModel } from "../../../Model/categoryCons";

const BikeCategory = () => {
  return (
    <>
      <div className="mb-3">
        <CommonSectionCategory props={categoryModel.Bikes} />
      </div>
    </>
  );
};

export default BikeCategory;
