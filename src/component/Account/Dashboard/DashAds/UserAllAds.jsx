import React, { useState, useEffect } from "react";
import ActiveAds from "./ActiveAds";
import DeletedAds from "./DeletedAds";
import EmptyAdsMsg from "./EmptyAdsMsg";
import ExpiredAds from "./ExpiredAds";

const UserAllAds = ({ allAds, deleteAds, underProcess, ads, regular }) => {
  const [active, setActive] = useState("UserAllAds");
  return (
    <div>
      <section className="">
        <div>
          {allAds?.length !== 0 &&
          allAds.map((val) => val.fields?.is_active)?.includes(true) ? (
            <div className="row" style={{ display: "block" }}>
              {allAds
                ?.sort((a, b) => b.pk - a.pk)
                ?.map((ads) =>
                  ads?.fields?.deleted ? (
                    <DeletedAds ads={ads} />
                  ) : ads?.fields?.expiry ? (
                    <ExpiredAds ads={ads} />
                  ) : ads?.fields?.is_active ? (
                    <ActiveAds ads={ads} deleteAds={deleteAds} />
                  ) : null
                )}
            </div>
          ) : (
            <EmptyAdsMsg />
          )}
        </div>
      </section>
    </div>
  );
};

export default UserAllAds;
