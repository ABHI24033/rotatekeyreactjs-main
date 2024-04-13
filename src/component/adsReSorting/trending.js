const sortObjectsArray = require("sort-objects-array");
const Trending = (props) => {
  let product = sortObjectsArray({ props }, "viewsproduct", { order: "desc" });
  return product;
};

export default Trending;
