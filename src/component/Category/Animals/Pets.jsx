import CommonSectionCategory from "../../../Shared/CommonSectionCategory";
import { categoryModel } from "../../../Model/categoryCons";

const Pets = () => {
  return (
    <div className="mb-3">
      <CommonSectionCategory props={categoryModel.Pets} />
    </div>
  );
};

export default Pets;
