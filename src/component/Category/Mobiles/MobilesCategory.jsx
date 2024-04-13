import React from "react";
import CommonSectionCategory from "../../../Shared/CommonSectionCategory";
import { categoryModel } from "../../../Model/categoryCons";

const MobilesCategory = () => {
  return (
    <>
      <div className="mb-3">
        <CommonSectionCategory props={categoryModel.Mobiles} />
      </div>
    </>
  );
};
export default MobilesCategory;
