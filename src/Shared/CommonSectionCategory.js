// import React from "react";
// import Feature from "../component/Ads/FeaturedAds/Feature";
// import OwlDemoMultiPle from "./Category/OwlDemoMultiPle";
// import SearchCategory from "./Category/SearchCategory";
// import SliderCategory from "./Category/SliderCategory";
// import BikeSlider from "./CategorySlider/BikeSlider";
// import CarsSlider from "./CategorySlider/CarsSlider";
// import JobsSlider from "./CategorySlider/JobsSlider";
// import ElectronicsSlider from "./CategorySlider/ElectronicsSlider";
// import EducationSlider from "./CategorySlider/EducationSlider";
// import FurnitureSlider from "./CategorySlider/FurnitureSlider";
// import MobilesSlider from "./CategorySlider/MobilesSlider";
// import PetsSlider from "./CategorySlider/PetsSlider";
// import HealthSlider from "./CategorySlider/HealthSlider";
// import ServiceSlider from "./CategorySlider/ServiceSlider";
// import { FilterBy } from "../FilterBy";
// import { FilterByJobs } from "../FilterByJobs";
// export const CommonSectionCategory = (props) => {
//   return (
//     <div>
//       {props.props.category == "Pets" ? (
//         <PetsSlider props={props.props.SlideImage} />
//       ) : props.props.category == "Furniture" ? (
//         <FurnitureSlider props={props.props.SlideImage} />
//       ) : props.props.category == "Education" ? (
//         <EducationSlider props={props.props.SlideImage} />
//       ) : props.props.category == "Pets" ? (
//         <PetsSlider props={props.props.SlideImage} />
//       ) : props.props.category == "Mobiles" ? (
//         <MobilesSlider props={props.props.SlideImage} />
//       ) : props.props.category == "Bikes" ? (
//         <BikeSlider props={props.props.SlideImage} />
//       ) : props.props.category == "Cars" ? (
//         <CarsSlider props={props.props.SlideImage} />
//       ) : props.props.category == "Electronics" ? (
//         <ElectronicsSlider props={props.props.SlideImage} />
//       ) : props.props.category == "Jobs" ? (
//         <JobsSlider props={props.props.SlideImage} />
//       ) : // props.props.category == "Health" ? <HealthSlider props={props.props.SlideImage} /> :
//       props.props.category == "Services" ? (
//         <ServiceSlider props={props.props.SlideImage} />
//       ) : (
//         <SliderCategory props={props.props.SlideImage} />
//       )}
//       {/* <SearchCategory props={props.props} /> */}
//       {props.props.category === "Jobs" ? (
//         <FilterByJobs value={props.props.category} />
//       ) : (
//         <FilterBy value={props.props.category} />
//       )}
//       <Feature value={props.props.category} />
//       <OwlDemoMultiPle props={props.props} />
//     </div>
//   );
// };
// export default CommonSectionCategory;

import React from "react";
import Feature from "../component/Ads/FeaturedAds/Feature";
import OwlDemoMultiPle from "./Category/OwlDemoMultiPle";
import SearchCategory from "./Category/SearchCategory";
import SliderCategory from "./Category/SliderCategory";
import BikeSlider from "./CategorySlider/BikeSlider";
import CarsSlider from "./CategorySlider/CarsSlider";
import ElectronicsSlider from "./CategorySlider/ElectronicsSlider";
import EducationSlider from "./CategorySlider/EducationSlider";
import FurnitureSlider from "./CategorySlider/FurnitureSlider";
import MobilesSlider from "./CategorySlider/MobilesSlider";
import PetsSlider from "./CategorySlider/PetsSlider";
import ServiceSlider from "./CategorySlider/ServiceSlider";
import { FilterBy } from "../FilterBy";

export const CommonSectionCategory = (props) => {
  return (
    <div>
      {props.props.category == "Pets" ? (
        <PetsSlider props={props.props.SlideImage} />
      ) : props.props.category == "Furniture" ? (
        <FurnitureSlider props={props.props.SlideImage} />
      ) : props.props.category == "Education" ? (
        <EducationSlider props={props.props.SlideImage} />
      ) : props.props.category == "Pets" ? (
        <PetsSlider props={props.props.SlideImage} />
      ) : props.props.category == "Mobiles" ? (
        <MobilesSlider props={props.props.SlideImage} />
      ) : props.props.category == "Bikes" ? (
        <BikeSlider props={props.props.SlideImage} />
      ) : props.props.category == "Cars" ? (
        <CarsSlider props={props.props.SlideImage} />
      ) : props.props.category == "Electronics" ? (
        <ElectronicsSlider props={props.props.SlideImage} />
      ) : props.props.category == "Services" ? (
        <ServiceSlider props={props.props.SlideImage} />
      ) : (
        <SliderCategory props={props.props.SlideImage} />
      )}
      {/* <SearchCategory props={props.props} /> */}
      <FilterBy value={props.props.category} />
      <Feature value={props.props.category} />
      <OwlDemoMultiPle props={props.props} />
    </div>
  );
};
export default CommonSectionCategory;
