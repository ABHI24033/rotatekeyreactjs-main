import { useDispatch } from "react-redux";
import ContentLoader, {
  List,
  BulletList,
  Facebook,
  Instagram,
} from "react-content-loader";
import { Col, Row, Tooltip, Button, Modal } from "antd";
import React, { useState, useEffect, useContext } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import {
  All,
  localUrl,
  subcategoryRealEstateBuy,
  subcategoryRealEstateRent,
  subcategoryType1,
  url,
  location2,
} from "../../env";
import { useInterval } from "react-interval-hook";
import "./ShowProduct.css";
import { MDBCol } from "mdbreact";
import { isMobile } from "react-device-detect";
import Spiner from "../../Spiner";
import { getFormLabelUtilityClasses, SliderValueLabel } from "@mui/material";
import SweetPagination from "sweetpagination";
// import Distance from "../../distance";
import DynamicFont from "react-dynamic-font";
import {
  BsReverseLayoutTextSidebarReverse,
  BsFillTagFill,
  BsFillBookmarkFill,
  BsFillClockFill,
  BsFillCheckSquareFill,
  BsGeoAltFill,
  BsBuilding,
  BsNewspaper,
  BsHeartFill,
} from "react-icons/bs";
import { remove, add1 } from "../../../store/wishlistSlice";
import { add } from "../../../store/Track/trackUserSlice";
import { useSelector } from "react-redux";
import { removeSearchData } from "../../../store/SearchCategory/searchCategorySlice";
import { FilterBy } from "../../../FilterBy";
import {
  getExtraField,
  removeFiled,
  removeKeyPair,
} from "../../../store/ProductFilterSlice";
import { filterData } from "../../../store/getDataFeature";

import { UserContext } from "../../../App";
import {
  newProductValue,
  productValueRemove,
  productValueValue,
} from "../../../store/showProductsliceValue";

import YoutubeMagic1 from "../../ContentLoader/YoutubeMagic1";

import Distance from "../../distance";
import NoDataFound from "../../datanotfound/NoDataFound";
import { searchApi } from "../../../store/ToggleSearchSlice";
// import Search from "antd/lib/input/Search";

// import { searchValue } from "../../../store/seachAdsArray";
import { Input, Space } from "antd";
import { FormatPrice } from "../../../Utils/FormatPrice";

const JsonSearch = require("search-array").default;

const ShowProduct = () => {
  const { Search } = Input;
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlistSlice);
  // const searchAds = useSelector((state) => state.searchAds);
  const { data } = useSelector((state) => state.sortFilter);

  console.log("search", data);
  const [wishlistID] = ["wishlistId"].map(
    document.getElementById.bind(document)
  );
  const navigate = useNavigate();

  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
  const [products, setProducts] = useState([]);
  const [popularity, setpopularity] = useState(null);
  const [featured, setfeatured] = useState(null);
  const [grid, setgrid] = useState(true);
  const [productvalue, setproductvalue] = useState(12);
  const [toggle, setToggle] = useState(true);
  const [loading, setLoading] = useState(getFormLabelUtilityClasses);
  const [isloading, setIsLoading] = useState(true);

  const [condition, setCondition] = useState(null);
  const [error, setError] = useState(null);
  const [lockInterval, setLockInterval] = useState(true);
  const [interval, setInterval] = useState({ start: 0, end: 8 });
  const [loaderAllAds, setloaderAllAds] = useState(true);
  const [SearchValue, setSearchValue] = useState("");
  const location1 = useParams().location;
  const [location, setlocation] = useState(
    useParams().location ? location1 : null
  );
  const [productnotSearch, setproductnotSearch] = useState(null);
  const category1 = useParams()?.category;
  const subcategory1 = useParams()?.subcategory;
  const [filterOnClick, setefilterOnClick] = useState(false);
  const [category, setcategory] = useState(
    useParams().category ? category1 : null
  );
  const [subcategoryfromHome, setsubcategoryfromHome] = useState(
    useParams().subcategory ? subcategory1 : null
  );
  const [tempProduct, setTempProduct] = useState([]);
  const [featureTrue, setfeatureTrue] = useState(null);
  const [filterFinal, setFilterFinal] = useState(null);

  let locationTemp = useParams().location;
  const [location111, setlocation1111] = useState(
    useParams().location ? locationTemp : null
  );
  const sortObjectsArray = require("sort-objects-array");

  const userdata = useSelector((state) => state.userIdSlice);

  //-----------------------------
  useEffect(() => {
    // console.log("userdata showproduct", userdata);
    dispatch(add({ view: ["ShowProduct"] }));

    let obj = {};

    if (location111) {
      obj["city"] = location111;
      obj["extrafiled"] = {};
      dispatch(getExtraField(obj));
    }
  }, []);

  const selector = useSelector((state) => state.filter);

  const productValue = useSelector((state) => state.showProductsliceValue);

  const fetchFromRedux = useSelector(
    (state) => state?.sortFilter?.data?.valueone
  );
  // console.log("fetch from redux", fetchFromRedux);

  const [valueTemp, setValueTemp] = useState(1);

  // useEffect(() => {
  //   setproductnotSearch(productValue);
  // }, [productValue]);
  useEffect(() => {
    if (
      selector.filter &&
      Object?.keys(selector.filter).length == 1 &&
      "extrafiled" in selector.filter &&
      Object?.keys(selector.filter?.extrafiled).length == 0
    ) {
      setProducts([]);
      setInterval({ start: 0, end: 8 });
      dispatch(removeFiled());
    }
  }, [selector.filter]);

  const [flagvalue, setFlagvalue] = useState(false);
  useEffect(() => {
    var flag = true;
    let obj = {
      product: [],
      intervals: { start: 0, end: 8 },
    };
    dispatch(productValueRemove(obj));
    setValueTemp(valueTemp + 1);
    setTimeout(() => { }, 100);
  }, [selector.filter]);

  const [filterMostSearch, setFilterMostSearch] = useState(null);

  useEffect(() => {
    if (productValue.intervals.start === 0) {
      setFlagvalue(true);
      console.log("selector product", productValue);
      let selctorObj1 = selector?.filter
        ? Object.keys(selector?.filter).length
        : null;

      if (
        selector?.filter &&
        (selctorObj1 === 1
          ? !Object?.keys(selector?.filter["extrafiled"]).length !== 0
          : true)
      ) {
        setFilterFinal(selector?.filter);
        getProductLoc();
      } else {
        getProducts();
      }
    }
  }, [selector.filter, valueTemp]);

  useInterval((newvalue) => {
    if (productValue.product?.length > 0 && flagvalue) {
      let selctorObj1 = selector?.filter
        ? Object.keys(selector?.filter).length
        : null;
      if (
        selector?.filter &&
        (selctorObj1 === 1
          ? !Object?.keys(selector?.filter["extrafiled"]).length !== 0
          : true)
      ) {
        setFilterFinal(selector?.filter);
        getProductLoc();
      } else {
        getProducts();
      }
    }
  }, 2000);
  const getProductLoc = () => {
    setloaderAllAds(true);
    var myHeaders = new Headers();
    myHeaders.append("Accept", "*/*");
    myHeaders.append("Accept-Language", "en-US,en;q=0.9");
    myHeaders.append("Connection", "keep-alive");
    myHeaders.append("Origin", "http://localhost:3000");
    myHeaders.append("Referer", "http://localhost:3000/");
    myHeaders.append(
      "User-Agent",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
    );
    myHeaders.append(
      "authorization",
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxMTQ1MzkwLCJpYXQiOjE2NTk2MDkzOTAsImp0aSI6IjM5MzJjZjJkZTYyNTQwMjRiNTEyZDk4ZTE4ZDM1Mjk3IiwidXNlcl9pZCI6MjJ9.6uTC3ZTlxdqyhBewkVN5O4MduQ6O6YCNB6p9QJhOF3w"
    );

    var formdata = new FormData();

    let value1 = selector.filter;

    formdata.append("start", productValue.intervals.start);
    formdata.append("end", productValue.intervals.end);
    // value1["extrafiled"]=JSON.stringify(value1["extrafiled"])
    // console.log(value1)
    formdata.append("requestData", JSON.stringify(value1));

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "api/adsapi/AdsDataFilter", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (false) {
          throw Error("Could not fetch data");
        } else {
          let s;
          let value = result.map((result) => {
            let a = { ...result.fields };
            a["pk"] = result.pk;
            return a;
          });
          if (localStorage.getItem("lat")) {
            s = Distance(value);

            // s = value;
            // this line was assing empty array that's why i have commented
          } else {
            s = value;
          }

          if (productValue?.product?.length === 0) {
            let obj = {
              product: s,
              intervals: {
                start: productValue.intervals.end + 1,
                end: productValue.intervals.end + 20,
              },
            };
            dispatch(productValueValue(obj));
            // dispatch(searchValue(s));
            console.log("@@product selector value", productValue);
          } else {
            if (result?.length !== 0) {
              let obj = {
                product: s,
                intervals: {
                  start: productValue.intervals.end + 1,
                  end: productValue.intervals.end + 20,
                },
              };
              let valueone = [
                ...productValue.product,
                ...s.map((result) => {
                  return result;
                }),
              ];
              console.log(valueone);
              obj.product = valueone;
              dispatch(productValueValue(obj));
              // dispatch(searchValue(valueone));
              setloaderAllAds(false);
            } else {
              setLockInterval(false);
              setloaderAllAds(false);
            }
          }
        }
        setloaderAllAds(false);
      })
      .catch((error) => console.log("error", error));
    // setloaderAllAds(false)
    setLoading(false);
    // setProducts([]);
  };
  // const productMaxMin=(array)=>{
  //   ;
  //   var obj={
  //   product:array,
  //   intervals:{start:0,end:8}
  // }

  //    obj={
  //     product:array,
  //     intervals:{start: obj.intervals.end + 1, end: obj.intervals.end + 20}
  //   }
  //   dispatch(newProductValue(obj))
  // }
  // const [apiData, setApiData] = useState([]);
  const getProducts = () => {
    // console.log("call the function ");
    setloaderAllAds(true);

    if (productValue?.product?.length === 0) {
      setLoading(true);
    }
    try {
      var formdata = new FormData();
      formdata.append("start", productValue.intervals.start);
      formdata.append("end", productValue.intervals.end);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch(url + "api/adsapi/allAdsByInerval", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (false) {
            throw Error("Could not fetch data");
          } else {
            let s;
            let value = result.map((result) => {
              let a = { ...result.fields };
              a["pk"] = result.pk;
              return a;
            });
            if (localStorage.getItem("lat")) {
              s = Distance(value);
            } else {
              s = value;
            }

            // for search purpose storing data into a state
            // if (s.length) {
            //   setApiData(s);
            // }
            if (productValue?.product?.length == 0) {
              let obj = {
                product: s,
                intervals: {
                  start: productValue.intervals.end + 1,
                  end: productValue.intervals.end + 20,
                },
              };
              setproductnotSearch(obj);
              dispatch(productValueValue(obj));
              // dispatch(searchValue(s));
              console.log("@@product selector value", productValue);
              setLoading(false);
            } else {
              let curretProduct = result;
              if (result?.length != 0) {
                let obj = {
                  product: s,
                  intervals: {
                    start: productValue.intervals.end + 1,
                    end: productValue.intervals.end + 20,
                  },
                };
                console.log("sssss", s);
                // dispatch(searchValue(s));

                let valueone = [
                  ...productValue.product,
                  ...s.map((result) => {
                    return result;
                  }),
                ];

                console.log(valueone, "value one");
                dispatch(filterData({ valueone }));
                // dispatch(searchValue(...valueone));

                let valueone2 = [
                  ...productnotSearch.product,
                  ...s.map((result) => {
                    return result;
                  }),
                ];

                // console.log(valueone);
                var sliceArray = valueone.slice();
                let feturedvalue;
                if (filterMostSearch == "featured") {
                  feturedvalue = valueone.filter((product) => {
                    if (product.PlanCategory === "Featured") {
                      return product;
                    }
                  });
                  console.log("feature", valueone);
                  obj.product = feturedvalue;
                  dispatch(productValueValue(obj));
                  setloaderAllAds(false);
                } else if (filterMostSearch === "priceMinMax") {
                  let minmax = valueone
                    .slice()
                    .sort((a, b) => a.price - b.price)
                    .map((value) => value);
                  obj.product = minmax;
                  console.log("priceminmax", minmax);
                  dispatch(productValueValue(obj));
                } else if (filterMostSearch === "priceMaxMin") {
                  let maxmin = valueone
                    .slice()
                    .sort((a, b) => b.price - a.price);
                  console.log("priceMaxMin", maxmin);
                  obj.product = maxmin;
                  dispatch(productValueValue(obj));
                } else if (filterMostSearch === "default") {
                  console.log(valueone, "!!343");
                  obj.product = sliceArray;
                  dispatch(productValueValue(obj));
                } else {
                  obj.product = sliceArray;
                  dispatch(productValueValue(obj));
                  // dispatch(searchValue(sliceArray));
                }
                dispatch(filterData({ valueone }));
                // dispatch(searchValue(valueone));
              } else {
                setLockInterval(false);
              }
            }
          }
        })
        .catch((error) => console.log("error", error));
      // setloaderAllAds(false)
    } catch (error) {
      setLoading(false);
      setError("Something went wrong!! Please wait for sometimes!!");
    }
    setLoading(false);
  };

  // console.log("!!!api data", apiData);
  // useEffect(() => {
  //   console.log("hello");
  // }, [filterMostSearch]);
  const filerMostSearch = (value) => {
    setTimeout(() => {
      setloaderAllAds(false);
      setefilterOnClick(false);
    }, 2000);
    setloaderAllAds(true);
    setefilterOnClick(true);
    let value1 = value;
    console.log(value1, "vl");
    //after stop interval
    if (!lockInterval) {
      let array = productValue?.product?.slice();
      if (value1 === "default") {
        console.log("call all ", array);

        let obj = {
          product: fetchFromRedux,
          intervals: {
            start: productValue.intervals.end + 1,
            end: productValue.intervals.end + 20,
          },
        };

        dispatch(productValueValue(obj));
      } else if (value1 === "priceMinMax") {
        var minMax = productValue.product
          .slice()
          .sort((a, b) => a.price - b.price);
        console.log("call after minMax", minMax);
        let obj = {
          product: minMax,
          intervals: {
            start: productValue.intervals.end + 1,
            end: productValue.intervals.end + 20,
          },
        };
        dispatch(productValueValue(obj));
        console.log("call after interval", value1);
      } else if (value1 === "priceMaxMin") {
        var maxMin = productValue.product
          .slice()
          .sort((a, b) => b.price - a.price);
        let obj = {
          product: maxMin,
          intervals: {
            start: productValue.intervals.end + 1,
            end: productValue.intervals.end + 20,
          },
        };
        dispatch(productValueValue(obj));
      } else if (value1 === "featured") {
        let feturedValue = productValue.product.filter((product) => {
          if (product.PlanCategory === "Featured") {
            return product;
          }
        });
        let obj = {
          product: feturedValue,
          intervals: {
            start: productValue.intervals.end + 1,
            end: productValue.intervals.end + 20,
          },
        };
        dispatch(productValueValue(obj));
      } else {
        let obj = {
          product: array,
          intervals: {
            start: productValue.intervals.end + 1,
            end: productValue.intervals.end + 20,
          },
        };
        dispatch(productValueValue(obj));
      }
    }
    if (value1 === "default") {
      setFilterMostSearch("defalut");
    } else if (value1 === "featured") {
      setFilterMostSearch("featured");
    } else if (value1 === "priceMinMax") {
      setFilterMostSearch("priceMinMax");
    } else if (value1 == "priceMaxMin") {
      setFilterMostSearch("priceMaxMin");
    }
  };

  const dynamicFont = {
    width: 400,
    fontSize: 30,
    lineHeight: 30,
    overflow: "hidden",
  };

  useEffect(() => {
    const t = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => {
      clearTimeout(t);
    };
  }, []);

  // useEffect(() => {
  //   console.log(wishlistData)
  //   console.log("@@@array", wishlistData)

  //   getProducts()

  // }, [products])
  const addingWishlist = (value, e) => {
    if (localStorage.getItem("access_token") == null) {
      navigate("/login");
    }
    if (wishlistData?.data?.indexOf(value) !== -1) {
      dispatch(remove({ value: value }));
    } else {
      dispatch(add1({ value: value }));
    }

    console.log("wishlist value", value, wishlistData);
  };

  const searchArray = () => {
    if (SearchValue?.trim()) {
      dispatch(searchApi(SearchValue));
    }
  };

  useEffect(() => {
    // searchArray();
  }, [selector.filter]);
  document.title = "RotateKey - ShowPropduct";
  // document.body.style = "background: #d1ced6;";
  return (
    <>
      <section className="inner-section ad-list-part mb-2" id="scroller">
        <div className="mx-2">
          <div className="row content-reverse">
            <div className="col-lg-12 col-md-12 col-xl-12">
              <div className="row container-fluid">
                <div className="col-lg-12">
                  <div className="d-flex justify-content-between">
                    {/* <div className="filter-show">
                      <label className="filter-label mt-3">Show :</label>
                      <select
                        className="custom-select filter-select"
                        onClick={(e) => {
                          fiterProductValue(e.target.value);
                        }}
                      >
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                      </select>
                    </div> */}
                    <div className="f">
                      <MDBCol md="12">
                        {/* <Search
                          placeholder="input search text"
                          allowClear
                          enterButton="Search"
                          size="medium"
                          onChange={(e) =>
                            setSearchValue(e.target.value.trim())
                          }
                          onSearch={searchArray}
                        /> */}

                        <div
                          className=" my-2 d-flex"
                          style={{ borderLeftRadius: 0, background: "white" }}
                        >
                          <input
                            style={{ background: "white" }}
                            className="form-control"
                            type="text"
                            placeholder="Search"
                            // value={SearchValue}
                            onChange={(e) =>
                              setSearchValue(e.target.value.trim())
                            }
                          />
                          <button
                            className="px-3 py-1 btn-primary"
                            onClick={searchArray}
                          >
                            Search
                          </button>
                        </div>
                      </MDBCol>
                    </div>

                    <div className="filter-short">
                      <label className="filter-label my-2">Sort by :</label>
                      <select
                        placeholder="Choose"
                        className="custom-select filter-select"
                        onChange={(e) => {
                          filerMostSearch(e.target.value);
                        }}
                      // onClick={(e) => {
                      //   filerMostSearch(e.target.value);
                      // }}
                      >
                        <option value="">choose</option>
                        <option value="default">default</option>
                        <option value="priceMinMax">Price(Min- Max)</option>
                        <option value="priceMaxMin">Price(Max- Min)</option>
                        <option value="featured">Featured</option>
                        {/* <option value="recommend">recommend</option> */}
                      </select>
                    </div>
                    <div className="filter-short">
                      <label className="filter-label my-2">Filter By : </label>
                      <FilterBy />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9 col-sm-12">
                  {selector?.filter ? (
                    <div className="d-flex mx-3  my-sm-2 flex-wrap">
                      {Object?.keys(selector?.filter).map((key) => {
                        let value = selector?.filter;

                        console.log(value, key, value[key]);
                        if (key === "extrafiled") {
                          console.log(
                            value,
                            value[key],
                            typeof value[key],
                            selector?.filter["extrafiled"],
                            value["extrafiled"]
                          );
                          Object?.keys(value[key]).map((key1) => {
                            return (
                              <div
                                className="mx-2"
                                style={{
                                  borderRadius: "3px",
                                  color: "#2b5876",
                                  background: "white",
                                  border: "1px solid #2b5876",
                                  padding: "1px 6px",
                                  marginBottom: "10px",
                                }}
                              >
                                <button
                                  type="button"
                                  className="btn-close"
                                  aria-label="Close"
                                  onClick={() => { }}
                                ></button>
                                {value[key][key1]}
                              </div>
                            );
                          });
                        } else {
                          return (
                            <div
                              className="mx-2"
                              style={{
                                borderRadius: "3px",
                                color: "#2b5876",
                                background: "white",
                                border: "1px solid #2b5876",
                                padding: "1px 6px",
                                marginBottom: "10px",
                              }}
                            >
                              <button
                                type="button"
                                class="btn-close"
                                aria-label="Close"
                                onClick={() => {
                                  // setsubcategoryfromHome(null);

                                  setProducts([]);
                                  setInterval({ start: 0, end: 8 });
                                  dispatch(removeKeyPair(key));

                                  // dispatch(getExtraField(value))
                                }}
                              ></button>
                              {value[key]}
                            </div>
                          );
                        }
                      })}
                    </div>
                  ) : null}
                </div>
                <div className="col-lg-3 col-sm-12">
                  {selector?.filter ? (
                    <div>
                      <div className="d-flex px-4 my-2 flex-wrap">
                        {Object.keys(selector?.filter["extrafiled"]).map(
                          (key1) => {
                            if (true) {
                              let value = selector?.filter["extrafiled"];
                              console.log(value);
                              return (
                                <div
                                  className="mx-2"
                                  style={{
                                    borderRadius: "3px",
                                    color: "#2b5876",
                                    background: "white",
                                    border: "1px solid #2b5876",
                                    padding: "1px 6px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <button
                                    type="button"
                                    class="btn-close"
                                    aria-label="Close"
                                    onClick={() => {
                                      setProducts([]);
                                      setInterval({ start: 0, end: 8 });
                                      dispatch(removeKeyPair({ extra: key1 }));
                                    }}
                                  ></button>
                                  {value[key1]}
                                </div>
                              );
                            }
                          }
                        )}
                      </div>
                      <div
                        className="text-center"
                        style={{ marginTop: "-20px" }}
                      >
                        <button
                          onClick={() => {
                            setProducts([]);
                            setInterval({ start: 0, end: 8 });
                            dispatch(removeFiled());
                          }}
                        >
                          Clear Filter
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <Row style={{ margin: "1px 30px" }}>
                <Col span={24} style={{ color: "black" }}>
                  Filtered By :
                </Col>
              </Row>
              {loaderAllAds &&
                (productValue?.product?.length == 0 || filterOnClick) ? (
                <YoutubeMagic1 />
              ) : null}
              {!loaderAllAds && productValue?.product?.length == 0 ? (
                <div>
                  <NoDataFound />
                </div>
              ) : null}
              {/* isloading ? <YoutubeMagic1/>: */}
              <div className="row">
                {error && <div className="alert alert-warning">{error}</div>}
                {loading && <Spiner />}
                {!loading && grid && productValue?.product?.length > 0 ? (
                  currentPageData?.map((product, index) =>
                    currentPageData?.length > 0 ? (
                      <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <NavLink
                          to={`/ads-listing/${product.pk === undefined ? product.pk : product.pk
                            }/`}
                        >
                          <div className="product-card m-2 border rounded ">
                            <div className="product-media">
                              <div
                                className="product-img"
                                style={{ weight: "500px" }}
                              >
                                <img
                                  src={
                                    !product?.image
                                      ? "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                      : product.image
                                  }
                                  alt="Product"
                                  style={{ height: "250px", width: "400px" }}
                                  onError={(e) => {
                                    e.target.src =
                                      "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
                                    e.onerror = null;
                                  }}
                                />
                              </div>
                              <div className="product-type">
                                {/* <span className="flat-badge booking">
                                  {true ? (
                                    <span className="flat-badge booking">
                                      {product?.plan}
                                    </span>
                                  ) : null}
                                </span> */}
                                <span className="flat-badge booking">
                                  {product?.plan != "Free" ? (
                                    <span
                                      className="flat-badge booking"
                                      style={{
                                        color: "white",
                                        border: "1px solid #0b157e",
                                        backgroundColor: "#0b157e",
                                        borderRadius: "3px",
                                      }}
                                    >
                                      {product?.plan}
                                    </span>
                                  ) : null}
                                  {" "}
                                </span>
                              </div>
                              <ul className="product-action">
                                <li className="view">
                                  <i
                                    className="fas fa-eye"
                                    style={{ color: "white" }}
                                  />
                                  <span style={{ color: "white" }}>
                                    {product.viewsproduct}
                                  </span>
                                </li>
                                {/* <li className="click">
                                  <i className="fas fa-mouse" />
                                  <span>134</span>
                                </li> */}
                                <li className="rating">
                                  <i className="" style={{ color: "white" }} />
                                  <span style={{ color: "white" }}>
                                    <BsNewspaper />
                                    &nbsp; {product.subCategoryValue}
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="product-content">
                              {/* <ol className="breadcrumb product-category bg-light">
                                <li>
                                  <i className="fas fa-tags" style={{fontSize:'10px'}} />
                                </li>
                                <li className="breadcrumb-item fs-14">
                                  <a href="#">{product.tags?.slice(0,5)}</a>
                                </li>
                                <li
                                  className="breadcrumb-item active fs-14"
                                  aria-current="page"
                                >
                                  {product.brand?.slice(0,5)}
                                </li>
                              </ol> */}

                              <div
                                className="d-flex justify-content-between  "
                                style={{ marginBottom: "-24px" }}
                              >
                                {/* DESKTOP VIEW */}
                                <p className="featureFont fs-14 fw-normal hidden-sm hidden-xs visible-md-block visible-lg-block">
                                  <Tooltip
                                    placement="topLeft"
                                    title={product.title}
                                  >
                                    {product?.title?.length > 15 ? (
                                      <p className="featureFont font-weight-bold">
                                        {product?.title?.slice(0, 12)}
                                        {product?.title?.length > 20
                                          ? "..."
                                          : null}
                                      </p>
                                    ) : (
                                      <div style={{ dynamicFont }}>
                                        <p className="featureFont font-weight-bold">
                                          {" "}
                                          <DynamicFont
                                            content={product.title}
                                          />
                                        </p>
                                      </div>
                                    )}
                                  </Tooltip>
                                </p>
                                {/* DESKTOP VIEW */}

                                {/* MOBILE VIEW */}
                                <p className="featureFont fs-14 fw-normal d-lg-none hidden-md visible-xs-block visible-sm-block d-flex">
                                  <Tooltip
                                    placement="topLeft"
                                    title={product.title}
                                  >
                                    {product?.title?.length > 15 ? (
                                      <p className="featureFont font-weight-bold">
                                        {product?.title?.slice(0, 22)}
                                        {product?.title?.length > 20
                                          ? "..."
                                          : null}
                                      </p>
                                    ) : (
                                      <div style={{ dynamicFont }}>
                                        <p className="featureFont font-weight-bold">
                                          {" "}
                                          <DynamicFont
                                            content={product.title}
                                          />
                                        </p>
                                      </div>
                                    )}
                                  </Tooltip>
                                </p>
                                {/* MOBILE VIEW */}

                                <p className="featureFont fs-14 fw-normal">
                                  <b>
                                    {new Date(product.date_created)
                                      .toGMTString()
                                      ?.slice(0, 12)}
                                  </b>
                                </p>
                              </div>

                              <div className="d-flex justify-content-between mb-2">
                                {product.category == "RealEstate" ? (
                                  <p className="fs-14">
                                    <BsBuilding className="mr-2" />
                                    {product.BuildUpArea}
                                  </p>
                                ) : (
                                  <p className="fs-14">
                                    <BsFillTagFill />
                                    {product.tags?.slice(0, 15)}
                                  </p>
                                )}
                                {product.category == "RealEstate" ? (
                                  <p className="fs-14">
                                    <BsBuilding className="mr-2" />
                                    {product.FurnishedType?.slice(0, 15)}
                                  </p>
                                ) : (
                                  <p className="fs-14">
                                    <BsFillCheckSquareFill className="mr-1" />
                                    {product.condition?.slice(0, 9)}
                                  </p>
                                )}

                                {/* <p className="fs-14"><BsFillBookmarkFill/>{product.price}</p> */}
                              </div>
                              {/* <div className="d-flex justify-content-between ">
                                {product.category == "RealEstate" ? (
                                  <p className="fs-14">
                                    <BsFillBookmarkFill className="fs-12" />
                                    {product.FurnishedType?.slice(0, 5)}
                                  </p>
                                ) : (
                                  <div>
                                    <p className="fs-14 hidden-sm hidden-xs visible-md-block visible-lg-block">
                                      <BsFillTagFill />
                                      <DynamicFont
                                        content={product.tags?.slice(0, 10)}
                                      />
                                    </p>
                                    <p className="fs-14 d-lg-none hidden-md visible-xs-block visible-sm-block d-flex">
                                      <BsFillTagFill className="mt-1 mr-1" />
                                      <DynamicFont
                                        content={product.tags?.slice(0, 15)}
                                      />
                                    </p>
                                  </div>
                                )}
                               
                              </div> */}

                              <div className="d-flex justify-content-between ">
                                <p className="autoFont fs-14">
                                  <BsGeoAltFill className="mr-1" />
                                  <Tooltip
                                    placement="topLeft"
                                    title={product.locality}
                                  >
                                    <DynamicFont content={product.City} />
                                  </Tooltip>
                                </p>
                                <p
                                  className="fs-14 fw-normal  "
                                  title="Add to cart"
                                >
                                  <BsHeartFill
                                    id="wishlistId"
                                    className={
                                      wishlistData?.data?.indexOf(
                                        product.pk
                                      ) !== -1
                                        ? "text-danger"
                                        : "fas fa-duotone fa-heart"
                                    }
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      e.preventDefault();
                                      addingWishlist(product.pk);
                                    }}
                                  />
                                </p>
                              </div>

                              <div className="d-flex justify-content-between">
                                <p className="fs-16 m-2 ">
                                  {product.category != "Jobs" ? (
                                    <strong>
                                      <FormatPrice price={product.price} />
                                    </strong>
                                  ) : null}
                                </p>
                                {product.category == "Jobs" ? (
                                  <button className=" btn-sm w-100 mb-1">
                                    Details
                                  </button>
                                ) : (
                                  <button className=" btn-sm w-50 ">
                                    Details
                                  </button>
                                )}
                              </div>
                              {/* <div className="product-info">
                                  <div className="d-flex justify-content-between ">
                                    <p className="fs-15 m-2 "><strong> ₹{product.price}</strong></p>
                                    <p className="m-2"><Popover placement="bottom" title={product.title} content={product.description} trigger="click">
                                      <button className="custom-btns btn-1" style={{ marginTop: '-10px' }}  >
                                        Desc
                                      </button>
                                    </Popover></p>
                                    <p className=" m-2"><button className="custom-btns btn-1" style={{ marginTop: '-10px', marginLeft: "20px" }} onClick={() => this.setDetails(false)}>
                                      Details
                                    </button></p>
                                  </div>
                                </div> */}
                            </div>
                          </div>
                        </NavLink>
                      </div>
                    ) : null
                  )
                ) : loading ? (
                  <div>{/* Loading.... */}</div>
                ) : null}
              </div>
              <SweetPagination
                navigation={true}
                currentPageData={setCurrentPageData}
                dataPerPage={productvalue}
                getData={productValue?.product}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowProduct;
