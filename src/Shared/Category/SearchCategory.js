import React, { useState } from "react";
import { Input } from "antd";
import {
  // All,
  locationData,
  // stateMain,
  // subcategoryRealEstateBuy,
  // subcategoryRealEstateRent,
  // subcategoryType1,
} from "../../component/env";
import "./SearchBox.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSearchData } from "../../store/SearchCategory/searchCategorySlice";
import { getExtraField } from "../../store/ProductFilterSlice";
const SearchCategory = (props) => {
  const [searchSending, setsearchSending] = useState({
    subCategoryType: null,
    subCategoryValue: null,
    city: null,
    minPrice: null,
    maxPrice: null,
    searchValue: null,
    category: props.props.category,
    extrafiled: {},
  });

  const disptach = useDispatch();
  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setsearchSending({ ...searchSending, [name]: value });

    disptach(addSearchData(searchSending));
  };

  // const [subCategoryType,setsubCategoryType]=useState(null)

  return (
    <div style={{ backgroundColor: "#8080800f" }}>
      <section
        className="elementor-section elementor-inner-section elementor-element elementor-element-96ef4f8 animated-slow elementor-section-boxed elementor-section-height-default elementor-section-height-default animated fadeIn"
        data-id="96ef4f8"
        data-element_type="section"
        data-settings='{"animation":"fadeIn"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-row">
            <div
              className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-1e9b522"
              data-id="1e9b522"
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div
                    className="elementor-element elementor-element-16dea2e elementor-button-align-stretch elementor-widget elementor-widget-houzez_elementor_search_builder"
                    data-id="16dea2e"
                    data-element_type="widget"
                    data-widget_type="houzez_elementor_search_builder.default"
                  >
                    <div className="elementor-widget-container">
                      <form
                        className="houzez-search-form-js houzez-search-builder-form-js"
                        id="houzez-search-16dea2e"
                        method="get"
                        action="https://demo04.houzez.co/search-results/"
                      >
                        <div className="houzez-ele-search-form-wrapper elementor-form-fields-wrapper elementor-labels-above">
                          <div className="elementor-field-group elementor-column form-group elementor-field-group-43d8ced elementor-col-40 m-2">
                            <label
                              htmlFor="form-field-43d8ced"
                              className="elementor-field-label elementor-screen-only"
                            >
                              Keyword
                            </label>
                            <input
                              type="text"
                              size={1}
                              name="searchValue"
                              value={searchSending.searchValue}
                              onChange={handleChange}
                              id="form-field-43d8ced"
                              className="elementor-field form-control elementor-size-sm elementor-field-textual houzez-keyword-autocomplete"
                              style={{
                                marginTop: "-3px",
                                padding: "22px",
                                background: "white",
                                borderRadius: "10px",
                              }}
                              placeholder="Search..."
                            />
                            <div
                              id="auto_complete_ajax"
                              className="auto-complete"
                            />
                          </div>

                          <div className="elementor-field-group elementor-column form-group elementor-field-group-field-status elementor-col-15 elementor-sm-50">
                            <label
                              htmlFor="form-field-field-status"
                              className="elementor-field-label elementor-screen-only"
                            >
                              Subcategory
                            </label>
                            <div className="elementor-field elementor-select-wrapper ">
                              <div className="dropdown bootstrap-select show-tick houzez-field-textual form-control elementor-size-sm status-js m-1">
                                <div>
                                  <input
                                    className="inpstyle"
                                    placeholder="All one"
                                    type="text"
                                    list="subcategory"
                                    style={{
                                      padding: "10px",
                                      width: "100%",
                                      zIndex: "-50px",
                                    }}
                                    name="subCategory"
                                    onChange={handleChange}
                                  />
                                  <datalist id="subcategory">
                                    {props.props.subCategory.map((result) => {
                                      return (
                                        <option value={result}>{result}</option>
                                      );
                                    })}
                                  </datalist>
                                  {/* <Input className="inpstyle"
                                    placeholder="Allinpuut"
                                    type="text"
                                    list="sub"
                                    style={{
                                      padding: "10px",
                                      width: "100%",
                                      zIndex: "-50px",
                                    }}
                                    name="subCategoryValue"
                                    onChange={handleChange} />
                                    <datalist id="sub">
                                    {props.props.subCategory.map(
                                      (result) => {
                                        return (
                                          <option value={result}>
                                            {result}
                                          </option>
                                        )
                                      }
                                    )}
                                  </datalist> */}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2 col-sm-12 m-1">
                            {/* <div className="elementor-field-group elementor-column form-group elementor-field-group-field-beds elementor-col-15 elementor-sm-50 m-1" > */}
                            <label
                              htmlFor="form-field-field-beds"
                              className="elementor-field-label elementor-screen-only"
                            >
                              Location
                            </label>
                            <div className="elementor-field elementor-select-wrapper">
                              <div className="dropdown bootstrap-select houzez-field-textual form-control elementor-size-sm">
                                <input
                                  className="inpstyle"
                                  placeholder="location"
                                  type="text"
                                  list="state"
                                  style={{
                                    padding: "12px",
                                    width: "100%",
                                    zIndex: "-50px",
                                  }}
                                  name="city"
                                  onChange={handleChange}
                                />
                                <datalist id="state">
                                  {locationData.map((result) => {
                                    return (
                                      <option value={result}>{result}</option>
                                    );
                                  })}
                                </datalist>
                                <div className="dropdown-menu ">
                                  <div
                                    className="inner show"
                                    role="listbox"
                                    id="bs-select-5"
                                    tabIndex={-1}
                                  >
                                    <ul
                                      className="dropdown-menu inner show"
                                      role="presentation"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* <div className="elementor-field-group elementor-column form-group elementor-field-group-field-min-area elementor-col-16 elementor-sm-50 m-1"> */}
                          <div className="col-lg-3 col-sm-12 m-1">
                            <label
                              htmlFor="form-field-field-min-area"
                              className="elementor-field-label elementor-screen-only"
                            >
                              Min. Price
                            </label>
                            <input
                              type="number"
                              style={{ borderRadius: "10px" }}
                              value={searchSending.minPrice}
                              name="minPrice"
                              id="form-field-field-min-area"
                              className="elementor-field form-control elementor-size-sm elementor-field-textual"
                              placeholder=" Min. Price"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-lg-3 col-sm-12 m-1">
                            {/* <div className="elementor-field-group elementor-column form-group elementor-field-group-field-max-area elementor-col-16 elementor-sm-50 m-1"> */}
                            <label
                              htmlFor="form-field-field-max-area"
                              className="elementor-field-label elementor-screen-only"
                            >
                              Max. Price
                            </label>
                            <input
                              style={{ borderRadius: "10px" }}
                              type="number"
                              onChange={handleChange}
                              value={searchSending.maxPrice}
                              name="maxPrice"
                              id="form-field-field-max-area"
                              className="elementor-field form-control elementor-size-sm elementor-field-textual"
                              placeholder="  Max. Price"
                            />
                          </div>

                          <span>
                            {" "}
                            <div
                              className="col-lg-3 col-sm-12"
                              style={{ marginTop: "-5px" }}
                            >
                              {/* <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-16 "> */}
                              <Link
                                to={`/ads-listing/`}
                                onClick={() => {
                                  for (const key in searchSending) {
                                    if (searchSending[key] === null) {
                                      delete searchSending[key];
                                    }
                                  }
                                  disptach(getExtraField(searchSending));
                                }}
                              >
                                <button
                                  className="btn houzez-search-button elementor-button elementor-size-sm"
                                  style={{
                                    background: "#a71616bf",
                                    color: "white",
                                  }}
                                >
                                  Search
                                </button>
                              </Link>
                            </div>
                          </span>
                        </div>
                        {/* End wrapper*/}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchCategory;
