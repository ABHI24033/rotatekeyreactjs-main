import React, { useState, useEffect } from "react";
import ActiveAds from "./ActiveAds";
import DeletedAds from "./DeletedAds";
import EmptyAdsMsg from "./EmptyAdsMsg";
import ExpiredAds from "./ExpiredAds";

const UserRegularAds = ({ regularAds, deleteAds }) => {
  const [regular, setRegularAds] = useState([]);
  useEffect(() => {
    const filertedRegularAds = regularAds.filter(
      (ads) =>
        ads?.fields?.is_active === true && ads.fields.adsType === "Regular"
    );
    setRegularAds(filertedRegularAds);
  }, [regularAds]);
  console.log("regular Ads", regular);

  console.log("props", regularAds);

  return (
    <section className="">
      <div>
        {regular.length ? (
          <div className="row" style={{ display: "block" }}>
            {regular
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

export default UserRegularAds;
