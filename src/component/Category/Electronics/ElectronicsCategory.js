import React from "react";
import CommonSectionCategory from "../../../Shared/CommonSectionCategory";
import { categoryModel } from "../../../Model/categoryCons";

const ElectronicsCategory = () => {
  return (
    <>
      <div className="mb-3">
        <CommonSectionCategory props={categoryModel.Electronics} />
      </div>
    </>
  );
};

export default ElectronicsCategory;
