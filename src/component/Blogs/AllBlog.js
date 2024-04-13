import axios from "axios";
import React from "react";
import { url } from "./../env";
import { Link } from "react-router-dom";
// import './AllBlog.css';
const AllBlog = () => {
  const data = [{ image: "hhhhh" }, { title: "" }];

  axios
    .get(url + "api/blogsapi/")
    .then((result) => console.log(result.data))
    .catch((error) => console.log(error));

  return (
    <>
      <div>
        {data.map(function(d, idx) {
          return <li key={idx}>{d.image}</li>;
        })}
      </div>

      <div
        className="page-title page-title--small page-title--blog align-left"
        style={{
          backgroundImage: "url(static/mainClassified/images/bg/bg-blog.png)",
        }}
      >
        <div className="container">
          <div className="page-title__content">
            <h1 className="page-title__name">Explore Afdsmazing Listing</h1>
            <p className="page-title__slogan">Add Listing</p>
          </div>
        </div>
      </div>
      <div className="page-content page-content-sidebar">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sidebar">
                <aside className="widget widget-category">
                  <h3 className="widget-title">Categories</h3>
                  <div className="widget-content">
                    <ul></ul>
                  </div>
                </aside>

                <aside className="widget widget-post">
                  <h3 className="widget-title">Top Article</h3>
                  <div className="widget-content"></div>
                </aside>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-12">
                  <div className="owner-page-content">
                    <h2>Top Ads </h2>
                    <div className="area-places "></div>
                    <div className="button-wrap">
                      <Link to="#" className="btn" title="View more">
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pagination align-left">
              <div className="pagination__numbers">
                <span>1</span>
                <a title={2} href="#">
                  2
                </a>
                <a title={3} href="#">
                  3
                </a>
                <a title="Next" href="#">
                  <i className="la la-angle-right" />
                </a>
              </div>
            </div>
            {/* .pagination */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBlog;
