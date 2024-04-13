import React from "react";
import CommonSectionCategory from "../../../Shared/CommonSectionCategory";
import { categoryModel } from "../../../Model/categoryCons";

const JobCategory = () => {
  return (
    <>
      <div className="mb-3">
        <CommonSectionCategory props={categoryModel.Jobs} />
      </div>
    </>
  );
};

export default JobCategory;
