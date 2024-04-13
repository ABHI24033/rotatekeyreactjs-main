import React from "react";
import CommonSectionCategory from "../../../Shared/CommonSectionCategory";
import { categoryModel } from "../../../Model/categoryCons";

const CarCategory = () => {
  return (
    <>
      <div className="mb-3">
        <CommonSectionCategory props={categoryModel.Cars} />
      </div>
    </>
  );
};

export default CarCategory;
