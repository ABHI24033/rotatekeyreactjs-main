import React from 'react'
import "./educationSlider.css"
import EnqueryForm from '../../Shared/Category/EnqueryForm'
import CommonSectionCategory from '../CommonSectionCategory'
import { categoryModel } from "../../Model/categoryCons"
import { Link } from 'react-router-dom'

const EducationSlider = (props) => {
  console.log("@@sliderCategory values", props)
  return (
    <div>

      <div className="site-wrap" id="home-section">
        <div className='bg-dark'>
        {/* style={{backgroundImage:"url(https://images.unsplash.com/photo-1659559466975-1e37ab8acce4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",backgroundSize: "cover" ,height:"50px"}} */}
          <div className="container" style={{ height: "50px" }}>
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-10 ">
                <h1 style={{ color: "darkcyan" }}>
                  The <strong>Hub</strong> Of <strong>Tutorials</strong>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section bg-dark">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="heading mb-4">
                  <span className="caption">Tutorial Courses</span>
                  <h2>Choose Course</h2>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-lg-2 col-sm-2 col-xs-2">
                <Link to="/ads-listing/" className="course">
                  <span className="wrap-icon brand-adobeillustrator" />
                  <h3>Illustrator</h3>
                </Link>
              </div>
              <div className="col-lg-2 col-sm-2 col-xs-2">
                <Link to="/ads-listing/" className="course">
                  <span className="wrap-icon brand-adobephotoshop" />
                  <h3>Photoshop</h3>
                </Link>
              </div>
              <div className="col-lg-2 col-sm-2 col-xs-2">
                <Link to="/ads-listing/" className="course">
                  <span className="wrap-icon brand-angular" />
                  <h3>Angular</h3>
                </Link>
              </div>
              <div className="col-lg-2 col-sm-2 col-xs-2">
                <Link to="/ads-listing/" className="course">
                  <span className="wrap-icon brand-javascript" />
                  <h3>JavaScript</h3>
                </Link>
              </div>
              <div className="col-lg-2 col-sm-2 col-xs-2">
                <Link to="/ads-listing/" className="course">
                  <span className="wrap-icon brand-react" />
                  <h3>React</h3>
                </Link>
              </div>
              <div className="col-lg-2 col-sm-2 col-xs-2">
                <Link to="/ads-listing/" className="course">
                  <span className="wrap-icon brand-vue-dot-js" />
                  <h3>Vue</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EducationSlider