
import './UserAllInformtaion.css';



const UserAllInformation = () => {

 
  return (
    <>

<section className="profile-part">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="account-card">
          <div className="account-title">
            <h3>Membership</h3>
            <a href="setting.html">Edite</a>
          </div>
          <ul className="account-card-list">
            <li>
              <h5>Status</h5>
              <p>Premium</p>
            </li>
            <li>
              <h5>Joined</h5>
              <p>February 02, 2021</p>
            </li>
            <li>
              <h5>Spand</h5>
              <p>4,587</p>
            </li>
            <li>
              <h5>Earn</h5>
              <p>97,325</p>
            </li>
          </ul>
        </div>
        <div className="account-card">
          <div className="account-title">
            <h3>Contact Info</h3>
            <a href="setting.html">Edite</a>
          </div>
          <ul className="account-card-list">
            <li>
              <h5>Website:</h5>
              <p>www.richardwilliam.com</p>
            </li>
            <li>
              <h5>Email:</h5>
              <p>richard@example.com</p>
            </li>
            <li>
              <h5>Phone:</h5>
              <p>+12027953213</p>
            </li>
            <li>
              <h5>Skype:</h5>
              <p>live:richard</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="account-card">
          <div className="account-title">
            <h3>Billing Address</h3>
            <a href="setting.html">Edite</a>
          </div>
          <ul className="account-card-list">
            <li>
              <h5>Post Code:</h5>
              <p>1420</p>
            </li>
            <li>
              <h5>State:</h5>
              <p>West Jalkuri</p>
            </li>
            <li>
              <h5>City:</h5>
              <p>Narayanganj</p>
            </li>
            <li>
              <h5>Country:</h5>
              <p>Bangladesh</p>
            </li>
          </ul>
        </div>
        <div className="account-card">
          <div className="account-title">
            <h3>Shipping Address</h3>
            <a href="setting.html">Edite</a>
          </div>
          <ul className="account-card-list">
            <li>
              <h5>Post Code:</h5>
              <p>1100</p>
            </li>
            <li>
              <h5>State:</h5>
              <p>Kawran Bazar</p>
            </li>
            <li>
              <h5>City:</h5>
              <p>Dhaka</p>
            </li>
            <li>
              <h5>Country:</h5>
              <p>Bangladesh</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}

export default UserAllInformation
