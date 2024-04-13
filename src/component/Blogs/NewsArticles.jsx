import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Category, localUrl } from "../env";
// import { Card } from 'antd';
// const { Meta } = Card;

const NewsArticles = (props) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const getArticles = async () => {
    try {
      const response = await axios.get(localUrl + "blogsapi/");
      if (!response.statusText.OK === false) {
        throw Error("Could not fetch the data");
      } else {
        let value = response.data.map((result) => {
          if (props.category == result.category) {
            return result;
          } else {
            return "null";
          }
        });
        value.push("null");
        value = value.filter(function(e) {
          return value.indexOf(e) == value.lastIndexOf(e);
        });
        setArticles(value);
        // setArticles(response.data);
      }
    } catch (err) {
      setError("Could not fetch the data from this resources");
    }
  };
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div>
      <h3 className="bg-info text-white rounded p-2 mx-2">News & Articles</h3>
      <div className="container">
        <div className="row justify-content-start">
          {articles.map((article) => {
            return (
              <div className="col-md-3 col-sm-4 col-xs-4">
                <div className="card" key={article?.id}>
                  <img
                    className="card-img-top"
                    src={article?.image}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {article?.title?.slice(0, 25)}
                    </h5>
                    <p className="card-text">
                      {article?.description?.slice(0, 100)}
                    </p>
                  </div>
                  <div className="card-body">
                    <Link to="/blogs-listing/:id/" className="card-link">
                      See Blog
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsArticles;
