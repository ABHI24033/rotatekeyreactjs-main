// import { Key, Pets } from '@mui/icons-material';
import { Button, Col, Row, Modal } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HolaAutoComplete } from "./component/Ads/components/HolaAutoComplete";
import { HolaAutoCompletePrice } from "./component/Ads/components/HolaAutoComplete";
import {
  allSubcategory,
  Bikes,
  Pets,
  Category,
  Electronics,
  subcategoryRealEstateBuy,
  Furniture,
  subcategoryType1,
  Services,
  // Jobs,
  Mobiles,
  subcategoryRealEstateRent,
  Cars,
} from "./component/env";
import { filterInsertData } from "./Model/SeachFIlterCons";
import { subCategoryInput } from "./Model/SubCategoryCons";
import { getExtraField } from "../src/store/ProductFilterSlice";
import { GiEvilFork } from "react-icons/gi";
import { UserContext } from "./App";
import { useNavigate, useParams } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { reset } from "./store/ToggleSearchSlice";

const mobileStyle = {
  border: "1px solid purple",
  borderRadius: "3px",
  padding: "4px",
  margin: "12px",
  justifyContent: "center",
  backgroundColor: "#2b5876",
  color: "white",
};

const desktopStyle = {
  width: "10%",
  border: "1px solid purple",
  borderRadius: "3px",
  padding: "4px",
  marginTop: "45px",
  backgroundColor: "#2b5876",
  color: "white",
};

const mobileStyle1 = {};
const desktopStyle1 = {
  // boxShadow: "1px 2px 5px 3px lightgray",
  // padding: "10px",
  // width: "80%",
  // margin: "15px auto",
  // background: "white",
};
export const FilterBy = (props) => {
  const user = useContext(UserContext);
  const dispatch = useDispatch();
  const filterSlice = useSelector((state) => state.Filter);

  useEffect(() => {
    if (props?.value) {
      setCategory(props.value);
    }
  }, []);

  let CategoryList = Category;
  const [open, setOpen] = useState(false);

  const [finalObj, SetFinalObj] = useState({});
  const [changeTrigger, setChangeTrigger] = useState(1);
  const [priceErrorFlag, setPriceErrorFlag] = useState(false);
  const [categorysubCategoryFlag, setcategorysubCategoryFlag] = useState(false);
  const [subCategoryType, setsubCategoryType] = useState(null);
  const [extraFeildToggle, setExtraFeildToggle] = useState(false);
  //  const [subCategoryType, setsubCategoryType] = useState(null)

  const [subCategoryValue, setsubCategoryValue] = useState(null); //11
  const [category, setCategory] = useState(null);
  const [obj, setObj] = useState(null); //13
  const [finalObjSub, SetFinalObjsub] = useState({});

  const [objJson, setobjJson] = useState(null);

  const [finalJsonData, setFinalJsonData] = useState(null);
  useEffect(() => {
    if (Number(finalObj?.minPrice) > Number(finalObj?.maxPrice)) {
      setPriceErrorFlag(true);
    } else {
      setPriceErrorFlag(false);
    }
    console.log("final obj data ", finalObj);
  }, [changeTrigger]);

  useEffect(() => {
    console.log("~~~", subCategoryValue);
    // if (subCategoryValue)
    if (subCategoryValue && subCategoryInput[category] !== undefined) {
      let subcategoryy = subCategoryInput[category];
      if (subcategoryy[subCategoryValue] !== undefined) {
        setExtraFeildToggle(true);
        let values = subcategoryy[subCategoryValue];
        let obj1 = values;

        Object.keys(obj1).forEach((key) => {
          let varkey = [];
          varkey = obj1[key].map((result) => {
            if (typeof result === "object" && result !== null) {
              return result;
            } else {
              return { value: result };
            }
          });
          obj1[key] = varkey;
        });
        // debugger

        setObj(obj1);
      } else {
        setExtraFeildToggle(false);
      }
    } else {
      setExtraFeildToggle(false);
    }
  }, [subCategoryValue]);

  const navigate = useNavigate();
  useEffect(() => {
    if (subCategoryValue) {
    }

    var dataStringy = JSON.stringify(finalObj);

    setobjJson(dataStringy);
  }, [finalObj?.category]);
  const submitMethod = () => {
    dispatch(reset());
    setOpen(false);
    user.setFilterBy(true);
    let extrafiled = JSON.stringify(finalObjSub);
    const finalData = {
      category,
      subCategoryValue,
      extrafiled,
    };
    setFinalJsonData(finalData);
    let obj = {};
    for (var empty in finalObj) {
      if (
        finalObj[empty]?.trim() === "" ||
        finalObj[empty]?.trim() === undefined
      ) {
        delete finalObj[empty];
      }
    }
    obj = Object.assign(obj, finalObj);

    if (category) {
      obj["category"] = category;
    }
    if (subCategoryValue) {
      obj["subCategoryValue"] = subCategoryValue;
    }
    // for revomve key from obj which has emtpy or dash srting
    for (var emptyKeyValue in obj) {
      if (
        obj[emptyKeyValue]?.trim() === "" ||
        obj[emptyKeyValue]?.trim() === undefined
      ) {
        delete obj[emptyKeyValue];
      }
    }

    for (var emptykey in finalObjSub) {
      if (
        finalObjSub[emptykey]?.trim() === "" ||
        finalObjSub[emptykey]?.trim() === undefined
      ) {
        delete finalObjSub[emptykey];
      }
    }
    if (finalObjSub) {
      obj["extrafiled"] = finalObjSub;
    }

    dispatch(getExtraField(obj));
    if (props?.value) {
      navigate("/ads-listing");
    }
  };
  return (
    <>
      {!props?.value ? (
        <div>
          <Button type="primary" onClick={() => setOpen(true)}>
            Filter
          </Button>
          <Modal
            title="Filter"
            centered
            open={open}
            onOk={() => {
              submitMethod();
            }}
            onCancel={() => setOpen(false)}
            okButtonProps={{ disabled: priceErrorFlag }}
            width={1050}
          >
            <div
              style={{
                paddingBottom: "1%",
                minHeight: "xxx",
                overflow: "hidden",
              }}
            >
              {Object?.keys(filterInsertData)?.map((key) => {
                let valueone = filterInsertData[key];

                return Object?.keys(filterInsertData[key])?.map((key1) => {
                  return (
                    <Col
                      className="w-100 d-inline-flex mx-0 justify-content-center"
                      span={8}
                      style={{ marginTop: "3px" }}
                    >
                      <HolaAutoCompletePrice
                        style={{
                          width: 300,
                        }}
                        options={valueone[key1]}
                        placeholder={
                          key1 === "minPrice"
                            ? "Min Price "
                            : key1 === "maxPrice"
                            ? "Max Price"
                            : key1
                        }
                        autoFocus={true}
                        onChange={(e) => {
                          finalObj[key1] = e;
                          SetFinalObj(finalObj);
                          setChangeTrigger(changeTrigger + 1);
                        }}
                        filterOption={(inputValue, option) =>
                          option.value
                            .toUpperCase()
                            .indexOf(inputValue.toUpperCase()) !== -1
                        }
                      />
                      {key1 === "maxPrice" && priceErrorFlag ? (
                        <div
                          style={{
                            display: "flex",
                            position: "absolute",
                            marginTop: " 40px",
                            color: "red",
                          }}
                        >
                          Choose Greater Price{" "}
                        </div>
                      ) : null}
                    </Col>
                  );
                });
              })}
              <div className="col-lg-4 col-sm-12">
                <label className="mb-0 mt-2">Category</label>

                <input
                  className="inpstyle"
                  placeholder="category"
                  type="text"
                  list="category"
                  style={{ width: "100%", zIndex: "-50px" }}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setcategorysubCategoryFlag(
                      e.target.value === "RealEstate" ? true : false
                    );
                    SetFinalObjsub({});
                    if (category === "RealEstate") {
                      setsubCategoryValue(null);
                      setsubCategoryType(null);
                    } else {
                      setsubCategoryValue("");
                    }
                  }}
                />
                <datalist id="category">
                  {CategoryList.map((result) => {
                    return <option value={result}>{result}</option>;
                  })}
                </datalist>
              </div>
              {category !== "RealEstate" ? (
                <div className="col-lg-4 col-sm-12">
                  <label className="mb-0 mt-2">Sub Category</label>
                  <input
                    className="inpstyle"
                    value={subCategoryValue}
                    placeholder="Sub Category"
                    type="text"
                    list="subcategoryForAll"
                    style={{ width: "100%", zIndex: "-50px" }}
                    onChange={(e) => {
                      setsubCategoryValue(e.target.value);
                      SetFinalObjsub({});
                    }}
                  />
                  <datalist id="subcategoryForAll">
                    {category === "Furniture"
                      ? Furniture.map((result) => {
                          return <option value={result}>{result}</option>;
                        })
                      : category === "Electronics"
                      ? Electronics.map((result) => {
                          return <option value={result}>{result}</option>;
                        })
                      : category === "Furniture"
                      ? Furniture.map((result) => {
                          return <option value={result}>{result}</option>;
                        })
                      : category === "RealEstate"
                      ? subcategoryRealEstateRent.map((result) => {
                          return <option value={result}>{result}</option>;
                        })
                      : category === "Pets"
                      ? Pets.map((result) => {
                          return <option value={result}>{result}</option>;
                        })
                      : category === "Cars"
                      ? Cars.map((result) => {
                          return <option value={result}>{result}</option>;
                        })
                      : category === "Mobiles"
                      ? Mobiles.map((result) => {
                          return <option value={result}>{result}</option>;
                        })
                      : category === "Bikes"
                      ? Bikes.map((result) => {
                          return <option value={result}>{result}</option>;
                        })
                      : category === "Services"
                      ? Services.map((result) => {
                          return <option value={result}>{result}</option>;
                        })
                      : category == ""
                      ? ["select category"].map((result) => {
                          return <option>{result}</option>;
                        })
                      : null}
                  </datalist>
                </div>
              ) : null}
              {categorysubCategoryFlag ? (
                <div className="col-lg-4 col-sm-12">
                  <label style={{ marginBottom: "0px", marginTop: "8px" }}>
                    SubCategory
                  </label>
                  <input
                    className="inpstyle"
                    placeholder="Sub Category"
                    type="text"
                    list="subcategoryType"
                    style={{ width: "100%", zIndex: "-50px" }}
                    onChange={(e) => {
                      setsubCategoryType(e.target.value);
                      setExtraFeildToggle(false);
                      SetFinalObjsub({});
                    }}
                  />
                  <datalist id="subcategoryType">
                    {subcategoryType1.map((result) => {
                      return <option value={result}>{result}</option>;
                    })}
                  </datalist>
                </div>
              ) : null}
              {subCategoryType == "Residential" ? (
                <div className="col-lg-4 col-sm-12">
                  <label style={{ marginBottom: "0px", marginTop: "8px" }}>
                    Type
                  </label>

                  <input
                    className="inpstyle"
                    placeholder="subcategoryRealEstateBuy"
                    type="text"
                    list="subcategoryRealEstateBuy"
                    style={{ width: "100%", zIndex: "-50px" }}
                    onChange={(e) => {
                      setsubCategoryValue(e.target.value);
                      SetFinalObjsub({});
                    }}
                  />
                  <datalist id="subcategoryRealEstateBuy">
                    {subcategoryRealEstateBuy.map((result) => {
                      return <option value={result}>{result}</option>;
                    })}
                  </datalist>
                </div>
              ) : subCategoryType == "Commercial" ? (
                <div className="col-lg-4 col-sm-12">
                  <label style={{ marginBottom: "0px", marginTop: "15px" }}>
                    Type
                  </label>

                  <input
                    className="inpstyle"
                    placeholder="subcategoryRealEstateRent"
                    type="text"
                    list="subcategoryRealEstateRent"
                    style={{ width: "100%", zIndex: "-50px" }}
                    onChange={(e) => {
                      setsubCategoryValue(e.target.value);
                      SetFinalObjsub({});
                    }}
                  />
                  <datalist id="subcategoryRealEstateRent">
                    {subcategoryRealEstateRent.map((result) => {
                      return <option value={result}>{result}</option>;
                    })}
                  </datalist>
                </div>
              ) : subCategoryType == "Residential" ? (
                <div className="col-lg-4 col-sm-12">
                  <label>Enter Here</label>

                  <input
                    className="inpstyle"
                    placeholder="subcategoryRealEstateRent"
                    type="text"
                    list="Others"
                    style={{ padding: "12px", width: "100%", zIndex: "-50px" }}
                    onChange={(e) => {
                      setsubCategoryValue(e.target.value);
                      SetFinalObjsub({});
                    }}
                  />

                  {/* <datalist id="Others">
{Others.map(result=>{
      return <option value={result} >{result}</option>
  })
}
</datalist> */}
                </div>
              ) : null}

              {subCategoryValue && obj && extraFeildToggle
                ? Object?.keys(obj)?.map((key) => {
                    return (
                      <Col
                        className="w-100 d-inline-flex mx-0 justify-content-center gx-3 col-sm-6 col-md-4 col-lg-6"
                        span={12}
                        style={{ marginTop: "15px" }}
                      >
                        <HolaAutoComplete
                          style={{
                            width: 300,
                          }}
                          options={obj[key]}
                          placeholder={key}
                          autoFocus={true}
                          onChange={(e) => {
                            console.log(e);
                            // finalObjSub[key] = e;
                            SetFinalObjsub({
                              ...finalObjSub,
                              [key]: e,
                            });
                          }}
                          filterOption={(inputValue, option) =>
                            option.value
                              .toUpperCase()
                              .indexOf(inputValue.toUpperCase()) !== -1
                          }
                        />
                      </Col>
                    );
                  })
                : null}
              {/* <button onClick={()=>{submitMethod()}}>click me </button> */}
            </div>
          </Modal>
        </div>
      ) : (
        <div
          style={{
            paddingBottom: "1%",
            minHeight: "xxx",
            overflow: "hidden",
            border: "1px solid white",
            borderRadius: "3px",
            boxShadow: "1px 2px 5px 3px lightgray",
            padding: "10px",
            width: "80%",
            margin: "15px auto",
            background: "white",
          }}
        >
          {Object?.keys(filterInsertData)?.map((key) => {
            let valueone = filterInsertData[key];

            return Object?.keys(filterInsertData[key])?.map((key1) => {
              return (
                <Col
                  className="w-100 d-inline-flex mx-0 justify-content-center"
                  span={8}
                  style={{ marginTop: "3px" }}
                >
                  <HolaAutoCompletePrice
                    style={{
                      width: 300,
                    }}
                    options={valueone[key1]}
                    placeholder={
                      key1 === "minPrice"
                        ? "Min Price"
                        : key1 === "maxPrice"
                        ? "Max Price"
                        : key1
                    }
                    autoFocus={true}
                    onChange={(e) => {
                      finalObj[key1] = e;
                      SetFinalObj(finalObj);
                    }}
                    filterOption={(inputValue, option) =>
                      option.value
                        .toUpperCase()
                        .indexOf(inputValue.toUpperCase()) !== -1
                    }
                  />
                </Col>
              );
            });
          })}
          <div
            className="col-lg-4 col-sm-12"
            style={isMobile ? mobileStyle1 : desktopStyle1}
          >
            <label className="mb-0 mt-2">Category</label>

            <input
              className="inpstyle"
              value={props?.value}
              placeholder="category"
              type="text"
              list="category"
              style={{
                width: "100%",
                zIndex: "-50px",
                backgroundColor: "white",
              }}
              onChange={(e) => {
                setCategory(e.target.value);
                setcategorysubCategoryFlag(
                  e.target.value === "RealEstate" ? true : false
                );
                if (category === "RealEstate") {
                  setsubCategoryValue(null);
                  setsubCategoryType(null);
                } else {
                  setsubCategoryValue("");
                }
              }}
              disabled
            />
            <datalist id="category">
              {CategoryList.map((result) => {
                return <option value={result}>{result}</option>;
              })}
            </datalist>
          </div>
          {category !== "RealEstate" ? (
            <div className="col-lg-4 col-sm-12">
              <label className="mb-0 mt-2">Sub Category</label>
              <input
                className="inpstyle"
                value={subCategoryValue}
                placeholder="Sub Category"
                type="text"
                list="subcategoryForAll"
                style={{ width: "100%", zIndex: "-50px" }}
                onChange={(e) => {
                  setsubCategoryValue(e.target.value);
                }}
              />
              <datalist id="subcategoryForAll">
                {category === "Furniture"
                  ? Furniture.map((result) => {
                      return <option value={result}>{result}</option>;
                    })
                  : category === "Electronics"
                  ? Electronics.map((result) => {
                      return <option value={result}>{result}</option>;
                    })
                  : category === "Furniture"
                  ? Furniture.map((result) => {
                      return <option value={result}>{result}</option>;
                    })
                  : category === "RealEstate"
                  ? subcategoryRealEstateRent.map((result) => {
                      return <option value={result}>{result}</option>;
                    })
                  : category === "Pets"
                  ? Pets.map((result) => {
                      return <option value={result}>{result}</option>;
                    })
                  : category === "Cars"
                  ? Cars.map((result) => {
                      return <option value={result}>{result}</option>;
                    })
                  : category === "Mobiles"
                  ? Mobiles.map((result) => {
                      return <option value={result}>{result}</option>;
                    })
                  : category === "Bikes"
                  ? Bikes.map((result) => {
                      return <option value={result}>{result}</option>;
                    })
                  : category === "Services"
                  ? Services.map((result) => {
                      return <option value={result}>{result}</option>;
                    })
                  : category == ""
                  ? ["select category"].map((result) => {
                      return <option>{result}</option>;
                    })
                  : null}
              </datalist>
            </div>
          ) : null}
          {categorysubCategoryFlag ? (
            <div className="col-lg-4 col-sm-12">
              <label style={{ marginBottom: "0px", marginTop: "8px" }}>
                SubCategory
              </label>
              <input
                className="inpstyle"
                placeholder="Sub Category"
                type="text"
                list="subcategoryType"
                style={{ width: "100%", zIndex: "-50px" }}
                onChange={(e) => {
                  setsubCategoryType(e.target.value);
                  setExtraFeildToggle(false);
                }}
              />
              <datalist id="subcategoryType">
                {subcategoryType1.map((result) => {
                  return <option value={result}>{result}</option>;
                })}
              </datalist>
            </div>
          ) : null}
          {subCategoryType == "Residential" ? (
            <div className="col-lg-4 col-sm-12">
              <label style={{ marginBottom: "0px", marginTop: "8px" }}>
                Type
              </label>

              <input
                className="inpstyle"
                placeholder="subcategoryRealEstateBuy"
                type="text"
                list="subcategoryRealEstateBuy"
                style={{ width: "100%", zIndex: "-50px" }}
                onChange={(e) => {
                  setsubCategoryValue(e.target.value);
                }}
              />
              <datalist id="subcategoryRealEstateBuy">
                {subcategoryRealEstateBuy.map((result) => {
                  return <option value={result}>{result}</option>;
                })}
              </datalist>
            </div>
          ) : subCategoryType == "Commercial" ? (
            <div className="col-lg-4 col-sm-12">
              <label style={{ marginBottom: "0px", marginTop: "15px" }}>
                Type
              </label>

              <input
                className="inpstyle"
                placeholder="subcategoryRealEstateRent"
                type="text"
                list="subcategoryRealEstateRent"
                style={{ width: "100%", zIndex: "-50px" }}
                onChange={(e) => {
                  setsubCategoryValue(e.target.value);
                  SetFinalObjsub({});
                }}
              />
              <datalist id="subcategoryRealEstateRent">
                {subcategoryRealEstateRent.map((result) => {
                  return <option value={result}>{result}</option>;
                })}
              </datalist>
            </div>
          ) : subCategoryType == "Residential" ? (
            <div className="col-lg-4 col-sm-12">
              <label>Enter Here</label>

              <input
                className="inpstyle"
                placeholder="subcategoryRealEstateRent"
                type="text"
                list="Others"
                style={{ padding: "12px", width: "100%", zIndex: "-50px" }}
                onChange={(e) => {
                  setsubCategoryValue(e.target.value);
                  SetFinalObjsub({});
                }}
              />

              {/* <datalist id="Others">
{Others.map(result=>{
      return <option value={result} >{result}</option>
  })
}
</datalist> */}
            </div>
          ) : null}

          {subCategoryValue && obj && extraFeildToggle
            ? Object?.keys(obj)?.map((key) => {
                return (
                  <Col
                    className="d-inline-flex justify-content-center gx-3 col-sm-6 col-md-4 col-lg-6"
                    span={12}
                    style={{ marginTop: "15px" }}
                  >
                    <HolaAutoComplete
                      style={{
                        width: 300,
                      }}
                      options={obj[key]}
                      placeholder={key}
                      autoFocus={true}
                      onChange={(e) => {
                        SetFinalObjsub({
                          ...finalObjSub,
                          [key]: e,
                        });
                        // finalObjSub[key] = e;
                        // SetFinalObjsub(finalObjSub);
                      }}
                      filterOption={(inputValue, option) =>
                        option.value
                          .toUpperCase()
                          .indexOf(inputValue.toUpperCase()) !== -1
                      }
                    />
                  </Col>
                );
              })
            : null}
          <button
            onClick={() => {
              submitMethod();
            }}
            style={isMobile ? mobileStyle : desktopStyle}
          >
            Search
          </button>
        </div>
      )}
    </>
  );
};

// : category === "Jobs"
//                     {/* ? Jobs.map((result) => { */}
//                     return <option value={result}>{result}</option>;
//                   })
