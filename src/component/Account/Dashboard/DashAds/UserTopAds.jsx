import React, { useState, useEffect } from "react";
import ActiveAds from "./ActiveAds";
import DeletedAds from "./DeletedAds";
import EmptyAdsMsg from "./EmptyAdsMsg";
import ExpiredAds from "./ExpiredAds";
const UserTopAds = ({ topAds, deleteAds }) => {
  const [top, setTopAds] = useState([]);
  useEffect(() => {
    const filertedTopAds = topAds.filter(
      (ads) =>
        ads?.fields?.is_active === true && ads.fields.adsType === "TopAds"
    );
    setTopAds(filertedTopAds);
  }, [topAds]);
  return (
    <section className="">
      <div>
        {top?.length ? (
          <div className="row" style={{ display: "block" }}>
            {top
              ?.sort((a, b) => b.pk - a.pk)
              ?.map((ads) =>
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

export default UserTopAds;
