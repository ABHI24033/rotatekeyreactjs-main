// // import { Key, Pets } from '@mui/icons-material';
// import { Button, Col, Row, Modal } from "antd";
// import React, { useContext, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { HolaAutoComplete } from "./component/Ads/components/HolaAutoComplete";
// import { Category, Jobs } from "./component/env";
// import { filterInsertJobData } from "./Model/SeachFIlterCons";
// import { subCategoryInput } from "./Model/SubCategoryCons";
// import { getExtraField } from "../src/store/ProductFilterSlice";

// import { UserContext } from "./App";
// import { useNavigate } from "react-router-dom";
// import { isMobile } from "react-device-detect";
// import { HolaAutoCompletePrice } from "./component/Ads/components/HolaAutoComplete";
// const mobileStyle = {
//   border: "1px solid purple",
//   borderRadius: "3px",
//   padding: "4px",
//   margin: "12px",
//   justifyContent: "center",
//   backgroundColor: "#2b5876",
//   color: "white",
// };
// const desktopStyle = {
//   width: "10%",
//   border: "1px solid purple",
//   borderRadius: "3px",
//   padding: "4px",
//   marginTop: "45px",
//   backgroundColor: "#2b5876",
//   color: "white",
// };

// const mobileStyle1 = {};
// const desktopStyle1 = {

// };
// export const FilterByJobs = (props) => {
//   const user = useContext(UserContext);
//   const dispatch = useDispatch();
//   const filterSlice = useSelector((state) => state.Filter);

//   useEffect(() => {
//     if (props?.value) {
//       setCategory(props.value);
//     }
//   }, []);

//   let CategoryList = Category;
//   const [open, setOpen] = useState(false);
//   const [finalObj, SetFinalObj] = useState({});
//   const [extraFeildToggle, setExtraFeildToggle] = useState(false);
//   const [subCategoryValue, setsubCategoryValue] = useState(null); //11
//   const [category, setCategory] = useState(null);
//   const [obj, setObj] = useState(null); //13
//   const [finalObjSub, SetFinalObjsub] = useState({});

//   const [objJson, setobjJson] = useState(null);

//   const [finalJsonData, setFinalJsonData] = useState(null);

//   useEffect(() => {
//     if (subCategoryValue && subCategoryInput[category] !== undefined) {
//       let subcategoryy = subCategoryInput[category];
//       if (subcategoryy[subCategoryValue] !== undefined) {
//         setExtraFeildToggle(true);
//         let values = subcategoryy[subCategoryValue];
//         let obj1 = values;

//         Object.keys(obj1).forEach((key) => {
//           let varkey = [];
//           varkey = obj1[key].map((result) => {
//             if (typeof result === "object" && result !== null) {
//               return result;
//             } else {
//               return { value: result };
//             }
//           });
//           obj1[key] = varkey;
//         });
//         // debugger

//         setObj(obj1);
//       } else {
//         setExtraFeildToggle(false);
//       }
//     } else {
//       setExtraFeildToggle(false);
//     }
//   }, [subCategoryValue]);

//   // useEffect(() => {

//   // }, [finalObj?.category])
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (subCategoryValue) {
//     }

//     var dataStringy = JSON.stringify(finalObj);

//     setobjJson(dataStringy);
//   }, [finalObj?.category]);

//   const submitMethod = () => {
//     setOpen(false);
//     user.setFilterBy(true);
//     let extrafiled = JSON.stringify(finalObjSub);
//     const finalData = {
//       category,
//       subCategoryValue,
//       extrafiled,
//     };
//     setFinalJsonData(finalData);
//     let obj = {};
//     for (var empty in finalObj) {
//       if (
//         finalObj[empty]?.trim() === "" ||
//         finalObj[empty]?.trim() === undefined
//       ) {
//         delete finalObj[empty];
//       }
//     }
//     obj = Object.assign(obj, finalObj);

//     if (category) {
//       obj["category"] = category;
//     }
//     if (subCategoryValue) {
//       obj["subCategoryValue"] = subCategoryValue;
//     }
//     for (var emptyKeyValue in obj) {
//       if (
//         obj[emptyKeyValue]?.trim() === "" ||
//         obj[emptyKeyValue]?.trim() === undefined
//       ) {
//         delete obj[emptyKeyValue];
//       }
//     }
//     for (var emptykey in finalObjSub) {
//       if (
//         finalObjSub[emptykey]?.trim() === "" ||
//         finalObjSub[emptykey]?.trim() === undefined
//       ) {
//         delete finalObjSub[emptykey];
//       }
//     }
//     if (finalObjSub) {
//       obj["extrafiled"] = finalObjSub;
//     }
//     dispatch(getExtraField(obj));
//     if (props?.value) {
//       navigate("/ads-listing");
//     }
//   };
//   return (
//     <>
//       {!props?.value ? (
//         <div>
//           <Button type="primary" onClick={() => setOpen(true)}>
//             Filter
//           </Button>
//           <Modal
//             title="Filter"
//             centered
//             open={open}
//             onOk={() => {
//               submitMethod();
//             }}
//             onCancel={() => setOpen(false)}
//             width={1050}
//           >
//             <div
//               style={{
//                 paddingBottom: "1%",
//                 minHeight: "xxx",
//                 overflow: "hidden",
//               }}
//             >
//               {Object?.keys(filterInsertJobData)?.map((key) => {
//                 let valueone = filterInsertJobData[key];

//                 return Object?.keys(filterInsertJobData[key])?.map((key1) => {
//                   return (
//                     <Col
//                       className="w-100 d-inline-flex mx-0 justify-content-center"
//                       span={8}
//                       style={{ marginTop: "3px" }}
//                     >
//                       <HolaAutoCompletePrice
//                         style={{
//                           width: 300,
//                         }}
//                         options={valueone[key1]}
//                         placeholder={
//                           key1 === "minSalary"
//                             ? "Min Salary "
//                             : key1 === "maxSalary"
//                             ? "Max Salary"
//                             : key1
//                         }
//                         autoFocus={true}
//                         onChange={(e) => {
//                           finalObj[key1] = e;
//                           SetFinalObj(finalObj);
//                         }}
//                         filterOption={(inputValue, option) =>
//                           option.value
//                             .toUpperCase()
//                             .indexOf(inputValue.toUpperCase()) !== -1
//                         }
//                       />
//                     </Col>
//                   );
//                 });
//               })}
//               <div className="col-lg-4 col-sm-12">
//                 <label className="mb-0 mt-2">Category</label>

//                 <input
//                   className="inpstyle"
//                   placeholder="category"
//                   type="text"
//                   list="category"
//                   style={{ width: "100%", zIndex: "-50px" }}
//                   onChange={(e) => {
//                     setCategory(e.target.value);

//                     setsubCategoryValue("");
//                   }}
//                 />
//                 <datalist id="category">
//                   {CategoryList.map((result) => {
//                     return <option value={result}>{result}</option>;
//                   })}
//                 </datalist>
//               </div>

//             </div>
//           </Modal>
//         </div>
//       ) : (
//         <div
//           style={{
//             paddingBottom: "1%",
//             minHeight: "xxx",
//             overflow: "hidden",
//             border: "1px solid white",
//             borderRadius: "3px",

//             boxShadow: "1px 2px 5px 3px lightgray",
//             padding: "10px",
//             width: "80%",
//             margin: "15px auto",
//             background: "white",
//           }}
//         >
//           {Object?.keys(filterInsertJobData)?.map((key) => {
//             let valueone = filterInsertJobData[key];

//             return Object?.keys(filterInsertJobData[key])?.map((key1) => {
//               return (
//                 <Col
//                   className="w-100 d-inline-flex mx-0 justify-content-center"
//                   span={8}
//                   style={{ marginTop: "3px" }}
//                 >
//                   <HolaAutoCompletePrice
//                     style={{
//                       width: 300,
//                     }}
//                     options={valueone[key1]}
//                     placeholder={
//                       key1 === "minSalary"
//                         ? "Min Salary"
//                         : key1 === "maxSalary"
//                         ? "Max Salary"
//                         : key1
//                     }
//                     autoFocus={true}
//                     onChange={(e) => {
//                       finalObj[key1] = e;
//                       SetFinalObj(finalObj);
//                     }}
//                     filterOption={(inputValue, option) =>
//                       option.value
//                         .toUpperCase()
//                         .indexOf(inputValue.toUpperCase()) !== -1
//                     }
//                   />
//                 </Col>
//               );
//             });
//           })}
//           <div
//             className="col-lg-4 col-sm-12"
//             style={isMobile ? mobileStyle1 : desktopStyle1}
//           >
//             <label className="mb-0 mt-2">Category</label>

//             <input
//               className="inpstyle"
//               value={props?.value}
//               placeholder="category"
//               type="text"
//               list="category"
//               style={{
//                 width: "100%",
//                 zIndex: "-50px",
//                 backgroundColor: "white",
//               }}
//               onChange={(e) => {
//                 setCategory(e.target.value);
//                 setsubCategoryValue("");
//               }}
//               disabled
//             />
//             <datalist id="category">
//               {CategoryList.map((result) => {
//                 return <option value={result}>{result}</option>;
//               })}
//             </datalist>
//           </div>
//           {category !== "RealEstate" ? (
//             <div className="col-lg-4 col-sm-12">
//               <label className="mb-0 mt-2">Sub Category</label>
//               <input
//                 className="inpstyle"
//                 value={subCategoryValue}
//                 placeholder="Sub Category"
//                 type="text"
//                 list="subcategoryForAll"
//                 style={{ width: "100%", zIndex: "-50px" }}
//                 onChange={(e) => {
//                   setsubCategoryValue(e.target.value);
//                 }}
//               />
//               <datalist id="subcategoryForAll">
//                 {category === "Jobs"
//                   ? Jobs.map((result) => {
//                       return <option value={result}>{result}</option>;
//                     })
//                   : category == ""
//                   ? ["select category"].map((result) => {
//                       return <option>{result}</option>;
//                     })
//                   : null}
//               </datalist>
//             </div>
//           ) : null}

//           {subCategoryValue && obj && extraFeildToggle
//             ? Object?.keys(obj)?.map((key) => {
//                 return (
//                   <Col
//                     className="d-inline-flex justify-content-center gx-3 col-sm-6 col-md-4 col-lg-6"
//                     span={12}
//                     style={{ marginTop: "15px" }}
//                   >
//                     <HolaAutoComplete
//                       style={{
//                         width: 300,
//                       }}
//                       options={obj[key]}
//                       placeholder={key}
//                       autoFocus={true}
//                       onChange={(e) => {
//                         finalObjSub[key] = e;
//                         SetFinalObjsub(finalObjSub);
//                       }}
//                       filterOption={(inputValue, option) =>
//                         option.value
//                           .toUpperCase()
//                           .indexOf(inputValue.toUpperCase()) !== -1
//                       }
//                     />
//                   </Col>
//                 );
//               })
//             : null}
//           <button
//             onClick={() => {
//               submitMethod();
//             }}
//             style={isMobile ? mobileStyle : desktopStyle}
//           >
//             Search
//           </button>
//         </div>
//       )}
//     </>
//   );
// };
