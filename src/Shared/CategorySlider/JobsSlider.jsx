// import React from "react";
// import "./jobsSlider.css";
// import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";
// import AwesomeSliderStyles from "react-awesome-slider/src/styles";
// import EnqueryForm from "../Category/EnqueryForm";
// import { isMobile } from "react-device-detect";

// const mobileStyle = {
//   height: "400px",
//   backgroundImage:
//     "url(https://images.unsplash.com/photo-1659697067461-f9604d8f9898?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
// };
// const desktopStyle = {
//   backgroundImage:
//     "url(https://images.unsplash.com/photo-1659697067461-f9604d8f9898?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
//   marginLeft: "-25px",
//   height: "400px",
// };
// const JobsSlider = (props) => {
//   const mobileStyle = {
//     height: "500px",
//   };
//   const desktopStyle = {
//     height: "300px",
//   };
//   return (
//     <div className="row  mt-1">
//       <div className="col-lg-8">
//         <div className="mx-2 mt-1">
//           <div
//             id="carouselExampleFade"
//             className="carousel"
//             data-bs-ride="carousel"
//           >
//             <div className="carousel-inner rounded">
//               <div className="carousel-item active">
//                 <img
//                   src={props.props.slideImageOne}
//                   alt="Los Angeles"
//                   style={{ height: "300px" }}
//                 />
//               </div>
//               <div className="carousel-item">
//                 <img
//                   src={props.props.slideImageTwo}
//                   alt="Chicago"
//                   style={{ height: "300px" }}
//                 />
//               </div>
//               <div className="carousel-item">
//                 <img
//                   src={props.props.slideImageThird}
//                   alt="Los Angeles"
//                   style={{ height: "300px" }}
//                 />
//               </div>
//             </div>
//             <button
//               className="carousel-control-prev"
//               type="button"
//               data-bs-target="#carouselExampleFade"
//               data-bs-slide="prev"
//             >
//               <span className="carousel-control-prev-icon" aria-hidden="true" />
//               <span className="visually-hidden">Previous</span>
//             </button>
//             <button
//               className="carousel-control-next"
//               type="button"
//               data-bs-target="#carouselExampleFade"
//               data-bs-slide="next"
//             >
//               <span className="carousel-control-next-icon" aria-hidden="true" />
//               <span className="visually-hidden">Next</span>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="col-lg-4" style={isMobile ? mobileStyle : desktopStyle}>
//         <EnqueryForm />
//       </div>
//     </div>
//   );
// };

// export default JobsSlider;
