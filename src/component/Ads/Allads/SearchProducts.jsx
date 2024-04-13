import React from "react";
import { Tooltip } from "antd";
import {
  BsBuilding,
  BsFillCheckSquareFill,
  BsFillTagFill,
  BsGeoAltFill,
  BsHeartFill,
  BsNewspaper,
} from "react-icons/bs";
import DynamicFont from "react-dynamic-font";
import { Navigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { remove, add1 } from "../../../store/wishlistSlice";
import { Input, Space } from "antd";
import {
  filterValue,
  reset,
  searchApi,
} from "../../../store/ToggleSearchSlice";
import { useState } from "react";
import { FilterBy } from "../../../FilterBy";
import { productValueValue } from "../../../store/showProductsliceValue";
import NoDataFound from "../../datanotfound/NoDataFound";
import { FormatPrice } from "../../../Utils/FormatPrice";
const SearchProducts = ({ data }) => {
  const { Search } = Input;
  const { searchVal } = useSelector((state) => state.ToggleSearchSlice);
  console.log("!!!data", searchVal);
  const wishlistData = useSelector((state) => state.wishlistSlice);
  const dispatch = useDispatch();

  const filterMost = (value) => {
    dispatch(filterValue(value));
  };

  const dynamicFont = {
    width: 400,
    fontSize: 30,
    lineHeight: 30,
    overflow: "hidden",
  };
  const addingWishlist = (value, e) => {
    if (localStorage.getItem("access_token") == null) {
      Navigate("/login");
    }
    if (wishlistData?.data?.indexOf(value) !== -1) {
      dispatch(remove({ value: value }));
    } else {
      dispatch(add1({ value: value }));
    }

    console.log("wishlist value", value, wishlistData);
  };
  const [search, setSearch] = useState({
    text: searchVal,
  });
  console.log(search.text, "@@@@@@");
  const searchArray = () => {
    if (search.text.trim()) {
      dispatch(searchApi(search.text));
    } else {
      dispatch(searchApi(""));
    }
  };

  return (
    <div>
     

      <div
        className="d-flex"
        style={{
          justifyContent: "space-between",
          marginBottom: "15px",
          marginTop: "8px",
          marginLeft: "5px",
        }}
      >
        <div
          className="my-2 d-flex"
          style={{ borderLeftRadius: 0, background: "white" }}
        >
          <input
            style={{ background: "white" }}
            className="form-control"
            type="text"
            placeholder="Search"
            value={search.text}
            onChange={(e) =>
              setSearch((prev) => ({ ...prev, text: e.target.value }))
            }
          />
          <button className="px-3 py-1 btn-primary" onClick={searchArray}>
            Search
          </button>
        </div>

        <div className="filter-short d-flex">
          <label className="filter-label my-2">Sort by :</label>
          <select
            placeholder="Choose"
            className="custom-select filter-select"
            onChange={(e) => {
              // filerMostSearch(e.target.value);
              filterMost(e.target.value);
            }}
          >
            <option value="">choose</option>
            <option value="default">default</option>
            <option value="priceMinMax">Price(Min- Max)</option>
            <option value="priceMaxMin">Price(Max- Min)</option>
            <option value="featured">Featured</option>
          </select>
        </div>

        <div className="filter-short d-flex">
          <label className="filter-label my-2">Filter By : </label>
          <FilterBy />
        </div>
      </div>
      <div>
        {data?.message ? (
          <NoDataFound />
        ) : (
          data?.map((product) => {
            return (
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <NavLink
                  to={`/ads-listing/${
                    product?.pk === undefined ? product?.pk : product.pk
                  }/`}
                >
                  <div
                    className="product-card m-2 border rounded"
                    style={{ height: "100%" }}
                  >
                    <div className="product-media">
                      <div className="product-img" style={{ weight: "500px" }}>
                        <img
                          src={
                            !product?.fields?.image
                              ? "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                              : product.fields?.image
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
                        <span className="flat-badge booking">
                          {product?.fields?.is_featured ? (
                            <span className="flat-badge booking">Premium</span>
                          ) : null}
                        </span>
                      </div>
                      <ul className="product-action">
                        <li className="view">
                          <i
                            className="fas fa-eye"
                            style={{ color: "white" }}
                          />
                          <span style={{ color: "white" }}>
                            {product?.fields?.viewsproduct}
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
                            &nbsp; {product?.fields?.subCategoryValue}
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
                                  <a href="#">{product?.fields?.tags?.slice(0,5)}</a>
                                </li>
                                <li
                                  className="breadcrumb-item active fs-14"
                                  aria-current="page"
                                >
                                  {product?.fields?.brand?.slice(0,5)}
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
                            title={product?.fields?.title}
                          >
                            {product?.fields?.title?.length > 15 ? (
                              <p className="featureFont font-weight-bold">
                                {product?.fields?.title?.slice(0, 12)}
                                {product?.fields?.title?.length > 20
                                  ? "..."
                                  : null}
                              </p>
                            ) : (
                              <div style={{ dynamicFont }}>
                                <p className="featureFont font-weight-bold">
                                  {" "}
                                  <DynamicFont
                                    content={product?.fields?.title}
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
                            title={product?.fields?.title}
                          >
                            {product?.fields?.title?.length > 15 ? (
                              <p className="featureFont font-weight-bold">
                                {product?.fields?.title?.slice(0, 22)}
                                {product?.fields?.title?.length > 20
                                  ? "..."
                                  : null}
                              </p>
                            ) : (
                              <div style={{ dynamicFont }}>
                                <p className="featureFont font-weight-bold">
                                  {" "}
                                  <DynamicFont
                                    content={product?.fields?.title}
                                  />
                                </p>
                              </div>
                            )}
                          </Tooltip>
                        </p>
                        {/* MOBILE VIEW */}

                        <p className="featureFont fs-14 fw-normal">
                          <b>
                            {new Date(product?.fields?.date_created)
                              .toGMTString()
                              ?.slice(0, 12)}
                          </b>
                        </p>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        {product?.fields?.category == "RealEstate" ? (
                          <p className="fs-14">
                            <BsBuilding className="mr-2" />
                            {product?.fields?.BuildUpArea}
                          </p>
                        ) : (
                          <p className="fs-14">
                            <BsFillTagFill />
                            {product?.fields?.tags?.slice(0, 15)}
                          </p>
                        )}
                        {product?.fields?.category == "RealEstate" ? (
                          <p className="fs-14">
                            <BsBuilding className="mr-2" />
                            {product?.fields?.FurnishedType?.slice(0, 15)}
                          </p>
                        ) : (
                          <p className="fs-14">
                            <BsFillCheckSquareFill className="mr-1" />
                            {product?.fields?.condition?.slice(0, 9)}
                          </p>
                        )}

                        {/* <p className="fs-14"><BsFillBookmarkFill/>{product?.fields?.price}</p> */}
                      </div>
                      {/* <div className="d-flex justify-content-between ">
                                {product?.fields?.category == "RealEstate" ? (
                                  <p className="fs-14">
                                    <BsFillBookmarkFill className="fs-12" />
                                    {product?.fields?.FurnishedType?.slice(0, 5)}
                                  </p>
                                ) : (
                                  <div>
                                    <p className="fs-14 hidden-sm hidden-xs visible-md-block visible-lg-block">
                                      <BsFillTagFill />
                                      <DynamicFont
                                        content={product?.fields?.tags?.slice(0, 10)}
                                      />
                                    </p>
                                    <p className="fs-14 d-lg-none hidden-md visible-xs-block visible-sm-block d-flex">
                                      <BsFillTagFill className="mt-1 mr-1" />
                                      <DynamicFont
                                        content={product?.fields?.tags?.slice(0, 15)}
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
                            title={product?.fields.locality}
                          >
                            <DynamicFont
                              content={
                                product?.fields.City?.slice(0, 12) + "..."
                              }
                            />
                          </Tooltip>
                        </p>

                        <p className="fs-14 fw-normal" title="Add to cart">
                          <BsHeartFill
                            id="wishlistId"
                            className={
                              wishlistData?.data?.indexOf(product?.pk) !== -1
                                ? "text-danger"
                                : "fas fa-duotone fa-heart"
                            }
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              addingWishlist(product?.pk);
                            }}
                          />
                        </p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <p className="fs-16 m-2 ">
                          {product?.fields?.category != "Jobs" ? (
                            <strong>
                              {" "}
                              <FormatPrice price={product?.fields?.price} />
                            </strong>
                          ) : null}
                        </p>
                        {product?.fields?.category == "Jobs" ? (
                          <button className=" btn-sm w-100 mb-1">
                            Details
                          </button>
                        ) : (
                          <button className=" btn-sm w-50 ">Details</button>
                        )}
                      </div>
                      {/* <div className="product-info">
                                  <div className="d-flex justify-content-between ">
                                    <p className="fs-15 m-2 "><strong> ₹{product?.fields?.price}</strong></p>
                                    <p className="m-2"><Popover placement="bottom" title={product?.fields?.title} content={product?.fields?.description} trigger="click">
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
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchProducts;
