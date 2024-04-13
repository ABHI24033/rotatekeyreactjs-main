// import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./categoryIcon.css";
// import Hola9logo from '../images/logotext.png';

const CategoryIcon = () => {
  return (
    <>
      <>
        <section className="section-pad classiera-category-new-v2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="classiera-category-content">
                  <a
                    href="https://demo.joinwebs.com/classiera/plum/category/automotive/"
                    className="classiera-category-new-v2-box"
                    data-color="#683eff"
                  >
                    <Link to={`/ads-listing/category/${"Automotive"}/`}>
                      <span className="classiera-category-new-v2-box-img">
                        <img
                          src="https://demo.joinwebs.com/classiera/plum/wp-content/uploads/2018/11/Automotive.png"
                          alt="Automotive"
                        />
                      </span>
                      <h5 className="classiera-category-new-v2-box-title">
                        Automotive{" "}
                      </h5>
                    </Link>
                  </a>
                  <a
                    href="https://demo.joinwebs.com/classiera/plum/category/books-sports-hobbies/"
                    className="classiera-category-new-v2-box"
                    data-color="#00bc9d"
                  >
                    <Link to={`/ads-listing/category/${"Stationary"}/`}>
                      <span className="classiera-category-new-v2-box-img">
                        <img
                          src="https://demo.joinwebs.com/classiera/plum/wp-content/uploads/2018/11/Books-Sports-Hobbies.png"
                          alt="Books, Sports & Hobbies"
                        />
                      </span>
                      <h5 className="classiera-category-new-v2-box-title">
                        Books, Sports &amp; Hobbies{" "}
                      </h5>
                    </Link>
                  </a>
                  <a
                    className="classiera-category-new-v2-box"
                    data-color="#00bc9d"
                  >
                    <Link to={`/ads-listing/category/${"Electronics"}/`}>
                      <span className="classiera-category-new-v2-box-img">
                        <img
                          src="https://demo.joinwebs.com/classiera/plum/wp-content/uploads/2018/11/Electronics.png"
                          alt="Electronics"
                        />
                      </span>
                      <h5 className="classiera-category-new-v2-box-title">
                        Electronics{" "}
                      </h5>
                    </Link>
                  </a>
                  <a
                    href="https://demo.joinwebs.com/classiera/plum/category/fashion-beauty/"
                    className="classiera-category-new-v2-box"
                    data-color="#ff3e98"
                  >
                    <Link to={`/ads-listing/category/${"Fashion"}/`}>
                      <span className="classiera-category-new-v2-box-img">
                        <img
                          src="https://demo.joinwebs.com/classiera/plum/wp-content/uploads/2018/11/Fashion-Beauty.png"
                          alt="Fashion & Beauty"
                        />
                      </span>
                      <h5 className="classiera-category-new-v2-box-title">
                        Fashion &amp; Beauty{" "}
                      </h5>
                    </Link>
                  </a>
                  <a
                    href="https://demo.joinwebs.com/classiera/plum/category/furniture-household/"
                    className="classiera-category-new-v2-box"
                    data-color="#e76b77"
                  >
                    <Link to={`/ads-listing/category/${"Furniture"}/`}>
                      <span className="classiera-category-new-v2-box-img">
                        <img
                          src="https://demo.joinwebs.com/classiera/plum/wp-content/uploads/2018/11/Furniture-houseHold.png"
                          alt="Furniture & HouseHold"
                        />
                      </span>
                      <h5 className="classiera-category-new-v2-box-title">
                        Furniture &amp; HouseHold{" "}
                      </h5>
                    </Link>
                  </a>
                  <a
                    href="https://demo.joinwebs.com/classiera/plum/category/health-fitness/"
                    className="classiera-category-new-v2-box"
                    data-color="#39444c"
                  >
                    <Link to={`/ads-listing/category/${"Fitness"}/`}>
                      <span className="classiera-category-new-v2-box-img">
                        <img
                          src="https://demo.joinwebs.com/classiera/plum/wp-content/uploads/2018/11/Health-Fitness.png"
                          alt="Health & Fitness"
                        />
                      </span>
                      <h5 className="classiera-category-new-v2-box-title">
                        Health &amp; Fitness{" "}
                      </h5>
                    </Link>
                  </a>
                  {/* <a
            href="https://demo.joinwebs.com/classiera/plum/category/jobs/"
            className="classiera-category-new-v2-box"
            data-color="#ff3e98"
          >
             <Link to={`/ads-listing/category/${"Jobs"}/`}> 
            <span className="classiera-category-new-v2-box-img">
              <img
                src="https://demo.joinwebs.com/classiera/plum/wp-content/uploads/2018/11/jobs.png"
                alt="Jobs"
              />
            </span>
            <h5 className="classiera-category-new-v2-box-title">Jobs </h5>
            </Link>
          </a> */}
                  <a
                    href="https://demo.joinwebs.com/classiera/plum/category/kids-equipments/"
                    className="classiera-category-new-v2-box"
                    data-color="#fdb705"
                  >
                    <Link to={`/ads-listing/category/${"Kids"}/`}>
                      <span className="classiera-category-new-v2-box-img">
                        <img
                          src="https://demo.joinwebs.com/classiera/plum/wp-content/uploads/2018/11/Kids-Equipments.png"
                          alt="Kids Equipments"
                        />
                      </span>
                      <h5 className="classiera-category-new-v2-box-title">
                        Kids Equipments{" "}
                      </h5>
                    </Link>
                  </a>
                  <a
                    href="https://demo.joinwebs.com/classiera/plum/category/pets-animals/"
                    className="classiera-category-new-v2-box"
                    data-color="#fdb705"
                  >
                    <Link to={`/ads-listing/category/${"Pets"}/`}>
                      <span className="classiera-category-new-v2-box-img">
                        <img
                          src="https://demo.joinwebs.com/classiera/plum/wp-content/uploads/2018/11/Pets-Animals.png"
                          alt="Pets & Animals"
                        />
                      </span>
                      <h5 className="classiera-category-new-v2-box-title">
                        Pets &amp; Animals{" "}
                      </h5>
                    </Link>
                  </a>
                  <a
                    href="https://demo.joinwebs.com/classiera/plum/category/photography/"
                    className="classiera-category-new-v2-box"
                    data-color="#00bc9d"
                  >
                    <Link to={`/ads-listing/category/${"Photography"}/`}>
                      <span className="classiera-category-new-v2-box-img">
                        <img
                          src="https://demo.joinwebs.com/classiera/plum/wp-content/uploads/2018/11/Photography.png"
                          alt="Photography"
                        />
                      </span>
                      <h5 className="classiera-category-new-v2-box-title">
                        Photography{" "}
                      </h5>
                    </Link>
                  </a>
                  <a
                    href="https://demo.joinwebs.com/classiera/plum/category/real-estate/"
                    className="classiera-category-new-v2-box"
                    data-color="#86267e"
                    style={{ background: "transparent" }}
                  >
                    <Link to={`/ads-listing/category/${"RealEstate"}/`}>
                      <span className="classiera-category-new-v2-box-img">
                        <img
                          src="https://demo.joinwebs.com/classiera/plum/wp-content/uploads/2018/11/Real-Estate.png"
                          alt="Real Estate"
                        />
                      </span>
                      <h5 className="classiera-category-new-v2-box-title">
                        Real Estate{" "}
                      </h5>
                    </Link>
                  </a>
                  <a
                    href="https://demo.joinwebs.com/classiera/plum/category/removals-moving/"
                    className="classiera-category-new-v2-box"
                    data-color="#509fa6"
                  >
                    <Link to={`/ads-listing/category/${"Removals"}/`}>
                      <span className="classiera-category-new-v2-box-img">
                        <img
                          src="https://demo.joinwebs.com/classiera/plum/wp-content/uploads/2018/11/Removals-Moving.png"
                          alt="Removals & Moving"
                        />
                      </span>
                      <h5 className="classiera-category-new-v2-box-title">
                        Removals &amp; Moving{" "}
                      </h5>
                    </Link>
                  </a>
                  <a
                    href="https://demo.joinwebs.com/classiera/plum/category/restaurants-cafe/"
                    className="classiera-category-new-v2-box"
                    data-color="#ff3e44"
                  >
                    <Link to={`/ads-listing/category/${"Restaurants"}/`}>
                      <span className="classiera-category-new-v2-box-img">
                        <img
                          src="https://demo.joinwebs.com/classiera/plum/wp-content/uploads/2018/11/Restaurants-Cafe.png"
                          alt="Restaurants & Cafe"
                        />
                      </span>
                      <h5 className="classiera-category-new-v2-box-title">
                        Restaurants &amp; Cafe{" "}
                      </h5>
                    </Link>
                  </a>
                  <a
                    href="https://demo.joinwebs.com/classiera/plum/category/services/"
                    className="classiera-category-new-v2-box"
                    data-color="#3eafff"
                  >
                    <Link to={`/ads-listing/category/${"Services"}/`}>
                      <span className="classiera-category-new-v2-box-img">
                        <img
                          src="https://demo.joinwebs.com/classiera/plum/wp-content/uploads/2018/11/Services.png"
                          alt="Services"
                        />
                      </span>
                      <h5 className="classiera-category-new-v2-box-title">
                        Services{" "}
                      </h5>
                    </Link>
                  </a>
                  <a
                    href="https://demo.joinwebs.com/classiera/plum/category/travel-tours/"
                    className="classiera-category-new-v2-box"
                    data-color="#509fa6"
                  >
                    <Link to={`/ads-listing/category/${"Travels"}/`}>
                      <span className="classiera-category-new-v2-box-img">
                        <img
                          src="https://demo.joinwebs.com/classiera/plum/wp-content/uploads/2018/11/Travel-Tours.png"
                          alt="Travel & Tours"
                        />
                      </span>
                      <h5 className="classiera-category-new-v2-box-title">
                        Travel &amp; Tours{" "}
                      </h5>
                    </Link>
                  </a>
                  <a
                    href="https://demo.joinwebs.com/classiera/plum/category/wedding-matrimonials/"
                    className="classiera-category-new-v2-box"
                    data-color="#e76b77"
                  >
                    <Link to={`/ads-listing/category/${"Matrimonials"}/`}>
                      <span className="classiera-category-new-v2-box-img">
                        <img
                          src="https://demo.joinwebs.com/classiera/plum/wp-content/uploads/2018/11/Wedding-matrimonials.png"
                          alt="Wedding & matrimonials"
                        />
                      </span>
                      <h5 className="classiera-category-new-v2-box-title">
                        Wedding &amp; matrimonials{" "}
                      </h5>
                    </Link>
                  </a>
                </div>
                {/*classiera-category-content*/}
              </div>
              {/*col-lg-12*/}
            </div>
            {/*row*/}
          </div>
          {/*container*/}
        </section>
      </>
    </>
  );
};

export default CategoryIcon;
