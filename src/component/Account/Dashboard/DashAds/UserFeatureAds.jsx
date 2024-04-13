import React, { useState, useEffect } from "react";
import ActiveAds from "./ActiveAds";
import DeletedAds from "./DeletedAds";
import EmptyAdsMsg from "./EmptyAdsMsg";
import ExpiredAds from "./ExpiredAds";

const UserFeatureAds = ({ featuredAds, deleteAds, index }) => {
  const [featured, setFeaturedAds] = useState([]);
  useEffect(() => {
    const filertedFeaturedAds = featuredAds.filter(
      (ads) =>
        ads?.fields?.is_active === true && ads.fields.adsType === "Featured"
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

export default UserFeatureAds;
