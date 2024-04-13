import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import { FormatPrice } from "../../../../Utils/FormatPrice";

const ActiveAds = ({ ads, deleteAds }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    deleteAds(ads.pk);
    setIsModalOpen(false);
  };
  // onClick={() => deleteAds(ads.pk)}
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4">
      <div
        className="product-card"
        style={{ borderRadius: "3px", boxShadow: "lightgray 1px 2px 6px 3px" }}
      >
        <div className="product-media">
          <div className="product-img">
            <img
              src={ads.fields.image}
              alt="product"
              style={{ borderradius: "3px", width: "100%", height: "160px" }}
            />
          </div>
          <div className="product-type">
            {ads.fields.is_active ? (
              <b className="flat-badge booking text-success bg-white">
                Verified
              </b>
            ) : (
              <b className="flat-badge booking text-danger ">On Verification</b>
            )}
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
          <div className="d-flex" style={{ marginTop: "-10px" }}>
            <Link
              to={`/editAds/${ads.pk}`}
              className="btn-sm  w-50 m-1 text-center border border-info rounded"
            >
              <button type="button">Edit </button>
            </Link>
            <button
              type="button"
              className="btn-sm  w-50 m-1 border border-info rounded"
              value={ads.pk}
              // onClick={() => deleteAds(ads.pk)}
              onClick={showModal}
            >
              Delete
            </button>
            <Modal
              title="Basic Modal"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Are You Sure You Want To Delete this Ads</p>
            </Modal>
            {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveAds;
