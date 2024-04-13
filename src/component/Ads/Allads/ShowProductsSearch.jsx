import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import YoutubeMagic1 from "../../ContentLoader/YoutubeMagic1";
import SearchProducts from "./SearchProducts";
import ShowProduct from "./ShowProduct";

const ShowProductsSearch = () => {
  const { data, Searchloading, searchError } = useSelector(
    (state) => state.ToggleSearchSlice
  );

  useEffect(() => {
    console.log(data, "toggle seach", data.length > 0);
  }, [data]);
  if (Searchloading) {
    return <YoutubeMagic1 />;
  }
  // if (data?.message) {
  //   return <h2>Data not found</h2>;
  // }
  return (
    <>
      {data.length > 0 || data.message ? (
        <SearchProducts data={data} />
      ) : (
        <ShowProduct />
      )}
    </>
  );
};

export default ShowProductsSearch;
