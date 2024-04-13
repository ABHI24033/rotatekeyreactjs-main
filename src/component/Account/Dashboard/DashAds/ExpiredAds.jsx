import React from "react";
import { FormatPrice } from "../../../../Utils/FormatPrice";

const ExpiredAds = ({ ads }) => {
  console.log("props", { ads });
  return (
    <div
      className="col-sm-6 col-md-6 col-lg-6 col-xl-4 "
      style={{ opacity: "0.5" }}
    >
      <div className="product-card">
        <div className="product-media">
          <div className="product-img">
            <img
              src={ads.fields.image}
              alt="product"
              style={{ width: "100%", height: "130px" }}
            />
          </div>
          <div className="product-type">
            <b className="flat-badge booking text-danger bg-white">
              Expired Ads
            </b>
            {ads.fields.is_featured ? (
              <span className="flat-badge booking">featured</span>
            ) : null}
          </div>

          <ul className="product-action">
            <li className="view">
              <i className="fas fa-eye" />
              <span>264</span>
            </li>
            <li className="click">
              <i className="fas fa-mouse" />
              <span>134</span>
            </li>
            <li className="rating">
              <i className="fas fa-star" />
              <span>4.5/7</span>
            </li>
          </ul>
        </div>
        <div className="product-content">
          <h4 className="fs-14 mt-1" style={{ marginTop: "-10px" }}>
            <b className="font-weight-bold">
              {ads.fields.title.slice(0, 20)}...
            </b>
          </h4>
          <div className="product-meta">
            <span>
              <i
                className="fas fa-map-marker-alt"
                style={{ fontSize: "10px" }}
              />
              {ads.fields.locality.slice(0, 10)}
              &nbsp;,&nbsp;{ads.fields.state.slice(0, 10)}
            </span>
            <span>
              <i className="fas fa-clock" style={{ fontSize: "10px" }} />

              {new Date(ads.fields.date_created).toGMTString().slice(0, 16)}
            </span>
          </div>
          <div className="product-info">
            {ads.fields.category == "Jobs" ? null : (
              <h5 className="product-price fs-14">
                <FormatPrice price={ads.fields.price} />
              </h5>
            )}
          </div>
          <div className="w-100 " style={{ marginTop: "-10px" }}>
            <button
              type="button"
              className="btn-sm  w-100 m-1 border border-info rounded text-danger"
              value={ads.pk}
              // onClick={()=>deleteAds(ads.pk)}
            >
              This Ads has been Expired
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpiredAds;
