import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogDetails from "./Blogs/BlogDetails";
import { localUrl } from "./env";

const Map = () => {
  const [products, setProducts] = useState([]);
  const [details, setDetails] = useState(true);

  const getProducts = async () => {
    const response = await axios.get(localUrl + "adsapi");
    setBlogs(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <h1>hello hye bye bye</h1>
      {products.map((products, index) => (
        <div key={index}>
          {details ? (
            <div>
              <img src={products.image} height="200px" width="300px" />
              {/* <button>show details</button> */}
              <Link to={`/blogs-listing/${blogs.id}/`}>
                {" "}
                <button onClick={() => this.setDetails(false)}>
                  Read More
                </button>
              </Link>
            </div>
          ) : (
            <BlogDetails />
          )}
        </div>
      ))}
    </>
  );
};

export default Map;
