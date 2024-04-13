import React, { useState, useEffect } from "react";
import ActiveAds from "../../component/Account/Dashboard/DashAds/ActiveAds";
import DeletedAds from "../../component/Account/Dashboard/DashAds/DeletedAds";
import EmptyAdsMsg from "../../component/Account/Dashboard/DashAds/EmptyAdsMsg";
import ExpiredAds from "../../component/Account/Dashboard/DashAds/ExpiredAds";

const InActiveFea = ({ featuredAds, deleteAds, index }) => {
  const [featured, setFeaturedAds] = useState([]);
  useEffect(() => {
    const filertedFeaturedAds = featuredAds.filter(
      (ads) =>
        ads?.fields?.is_active === false && ads.fields.adsType === "Featured"
    );
    setFeaturedAds(filertedFeaturedAds);
  }, [featuredAds]);

  return (
    <section className="">
      <div>
        {featured?.length ? (
          <div className="row" style={{ display: "block" }}>
            {featured
              ?.sort((a, b) => b.pk - a.pk)
              ?.map((ads, index) =>
                ads?.fields?.deleted ? (
                  <DeletedAds ads={ads} />
                ) : ads?.fields?.expiry ? (
                  <ExpiredAds ads={ads} />
                ) : (
                  <ActiveAds ads={ads} deleteAds={deleteAds} />
                )
              )}
          </div>
        ) : (
          <EmptyAdsMsg />
        )}
      </div>
    </section>
  );
};

export default InActiveFea;
