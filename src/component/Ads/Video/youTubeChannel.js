import { BsYoutube } from "react-icons/bs";
// import logo from "../../images/logotext.png";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import "./youTubeChannel.css";

const mobileStyle = {};
const desktopStyle = {
  minHeight: "xxx",
};
const mobileStyle1 = {};
const desktopStyle1 = {
  height: "420px",
};
const mobileStyle2 = {};
const desktopStyle2 = {
  // minHeight: "xxx",
  height: "373px",
  paddingTop: "21px",
};
const YouTubeChannel = () => {
  return (
    <div
      className="bg-seashell ptb-100"
      style={isMobile ? mobileStyle : desktopStyle}
    >
      {/* <div className="container" style={{border:'1px solid blue'}}> */}
      <div
        className="video-wrap style1  ptb-100 mx-1"
        style={isMobile ? mobileStyle1 : desktopStyle1}
      >
        <div className="row align-items-center">
          <div
            className="col-lg-7 col-md-8 order-lg-1 order-md-1 order-2 aos-init aos-animate p-4"
            data-aos="fade-right"
            data-aos-duration={1200}
            data-aos-delay={200}
          >
            <div
              className="video-content"
              style={isMobile ? mobileStyle2 : desktopStyle2}
            >
              {/* <img
                src={logo}
                alt="Our Company"
                style={{ width: "100px", height: "40px" }}
              /> */}
              &nbsp;
              <b className="youTubeFont">
                RotateKey Classifieds India Private Limited
              </b>
              <div className="content-title style1">
                <span className="m-2">Open YouTube Video</span>
                <div style={{ marginTop: "-13px" }}>
                  <h2>Our story begins with you</h2>
                  <p className="youTubeFont" style={{ marginTop: "-13px" }}>
                    Our Vision is to make RotateKey one stop solution for local
                    businesses, classifieds and largest business-to-business
                    marketplace for India Where you can get business to
                    business, Business to Customer and Customer to customer
                    services at one place e-commerce platform, focuses on expert
                    services around Home, Life and Self and where the user need
                    is customized.
                  </p>
                </div>
              </div>
              <a
                href="https://www.youtube.com/@hola9classifiedsindiapriva235/featured"
                target="_blank"
                className="btn style2 p-2"
                style={{ paddingTop: "-12px", marginTop: "-10px" }}
              >
                Youtube Video
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-md-4 order-lg-2 order-md-2 order-1">
            <a
              className="play-video"
              data-fancybox=""
              href="https://www.youtube.com/@hola9classifiedsindiapriva235/featured"
              target="_blank"
            >
              <span className="play-now icon" style={{ marginLeft: "85px" }}>
                {/* <i className="flaticon-play-1" /> */}
                <BsYoutube
                  style={{
                    width: "50%",
                    height: "100px",
                    color: "red",
                    marginTop: "-7px",
                    marginLeft: "-5px",
                  }}
                />

                {/* <span className="ripple" /> */}
                <span />
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default YouTubeChannel;
