import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const UserDashPlanDetails = (props) => {
  const { loading, data } = useSelector((state) => state.planData);

  //all ads count
  console.log("!!!data", data);

  const [allAdsCount, setAllAdsCount] = useState({});
  const [staticLoader, setStaticLoader] = useState(false);
  const today = new Date();
  return (
    <div>
      <div style={{ background: "#0085db", borderRadius: "5px" }}>
      
        <div className="">
          <div className="row ad-history">
            <div className="col-md-12 col-sm-4 col-xs-12">
              <div className="user-stats pl-3 pb-0">
                <div className="inlineAds text-white">
                  <table className="table ">
                    <thead>
                      <th className="text-white py-0 pl-0">Ads Category</th>
                      <th className="text-white py-0 pl-0">Ads Type</th>
                      <th className="text-white py-0 pl-0">Ads Posted</th>
                      <th className="text-white py-0 pl-0">Ads Left</th>
                      <th className="text-white py-0 pl-0">Plans Validity</th>
                      <th className="text-white py-0 pl-0">Expire Date</th>
                    </thead>
                    <tbody>
                      {data.hasOwnProperty("planDataDetails") &&
                        Object?.keys(data?.planDataDetails)?.map((result) => {
                          if (result === "Free") {
                            return (
                              <tr>
                                <td className="m-0 p-0">{result}</td>
                                <td className="m-0 p-0">Regular</td>
                                <td className="m-0 p-0">
                                  {
                                    data?.planDataDetails[result][
                                      "PostedregualAds"
                                    ]
                                  }
                                </td>
                                <td className="m-0 p-0">
                                  {
                                    data?.planDataDetails[result][
                                      "leftRegularAds"
                                    ]
                                  }
                                </td>
                                <td className="m-0 p-0">
                                  {data?.postAdsForm[result]["days"]} Days
                                </td>

                                <td className="m-0 p-0">
                                  {new Date(
                                    today.setDate(
                                      today.getDate() +
                                        data?.postAdsForm[result]["days"]
                                    )
                                  ).toLocaleDateString()}
                                </td>
                              </tr>
                            );
                          } else {
                            return (
                              <tr>
                                <td className="m-0 p-0">{result}</td>
                                <td className="m-0 p-0">
                                  <tr>Regular</tr>
                                  {/* <tr>TopAds</tr> */}
                                  {/* <tr>Featured</tr> */}
                                </td>
                                <td className="m-0 p-0">
                                  <tr className="m-0 p-0">
                                    {
                                      data?.planDataDetails[result][
                                        "PostedregualAds"
                                      ]
                                    }
                                  </tr>
                                  {/* <tr className="m-0 p-0">
                                    {
                                      data?.planDataDetails[result][
                                        "PostedTopAds"
                                      ]
                                    }
                                  </tr>
                                  <tr className="m-0 p-0">
                                    {
                                      data?.planDataDetails[result][
                                        "PostedFeaturedAds"
                                      ]
                                    }
                                  </tr> */}
                                </td>
                                <td className="m-0 p-0">
                                  <tr className="m-0 p-0">
                                    {
                                      data?.planDataDetails[result][
                                        "leftRegularAds"
                                      ]
                                    }
                                  </tr>
                                  {/* <tr className="m-0 p-0">
                                    {
                                      data?.planDataDetails[result][
                                        "leftTopAds"
                                      ]
                                    }
                                  </tr>
                                  <tr>
                                    {
                                      data?.planDataDetails[result][
                                        "leftFeaturedAds"
                                      ]
                                    }
                                  </tr> */}
                                </td>
                                <td className="m-0 p-0">
                                  {data?.postAdsForm[result]["days"]} Days
                                </td>
                                <td className="m-0 p-0">
                                  {new Date(
                                    today.setDate(
                                      today.getDate() +
                                        data?.postAdsForm[result]["days"]
                                    )
                                  ).toLocaleDateString()}
                                </td>
                              </tr>
                            );
                          }
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4 col-sm-4 col-xs-12">
        <div className="user-stats">
          <h2>
            {localStorage.getItem("wishlist")
              ? JSON.parse(decrypt("wishlist")).length
              : 0}
          </h2>
          <small>Favourites Ads</small>
        </div>
      </div>
      <div className="col-md-4 col-sm-4 col-xs-12">
        <div className="user-stats">
          <h2>{Blog.length}</h2>
          <small>Total Blogs</small>
        </div>
      </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashPlanDetails;
