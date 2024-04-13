import './DashNotification.css';



const DashNotification = () => {

 
  return (
    <>

<section className="notify-part">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 mx-auto">
        <div className="notify-body">
          <div className="notify-filter">
            <select
              className="select notify-select"
              style={{ display: "none" }}
            >
              <option value="">all notification</option>
              <option value="">read notification</option>
              <option value="">unread notification</option>
            </select>
            <div className="nice-select select notify-select" tabIndex={0}>
              <span className="current">all notification</span>
              <ul className="list">
                <li data-value="" className="option selected">
                  all notification
                </li>
                <li data-value="" className="option">
                  read notification
                </li>
                <li data-value="" className="option">
                  unread notification
                </li>
              </ul>
            </div>
            <div className="notify-action">
              <a href="#" title="Delete All" className="fas fa-trash-alt" />
              <a
                href="#"
                title="Mark All As Read"
                className="fas fa-envelope-open"
              />
              <a href="#" title="Notification Setting" className="fas fa-cog" />
            </div>
          </div>
          <ul className="notify-list notify-scroll">
            <li className="notify-item active">
              <a href="#" className="notify-link">
                <div className="notify-img">
                  <img src="images/avatar/01.jpg" alt="avatar" />
                </div>
                <div className="notify-content">
                  <p className="notify-text">
                    <span>miron mahmud</span>has added the advertisement post of
                    your <span>booking</span>to his wishlist.
                  </p>
                  <span className="notify-time">just now</span>
                </div>
              </a>
            </li>
            <li className="notify-item">
              <a href="#" className="notify-link">
                <div className="notify-img">
                  <img src="images/avatar/02.jpg" alt="avatar" />
                </div>
                <div className="notify-content">
                  <p className="notify-text">
                    <span>tahmina bonny</span>gave you a <span>comment</span>and
                    5 star <span>review.</span>
                  </p>
                  <span className="notify-time">2 hours ago</span>
                </div>
              </a>
            </li>
            <li className="notify-item">
              <a href="#" className="notify-link">
                <div className="notify-img">
                  <img src="images/avatar/03.jpg" alt="avatar" />
                </div>
                <div className="notify-content">
                  <p className="notify-text">
                    <span>shipu ahmed</span>and <span>4 other</span>have seen
                    your contact number
                  </p>
                  <span className="notify-time">3 minutes ago</span>
                </div>
              </a>
            </li>
            <li className="notify-item">
              <a href="#" className="notify-link">
                <div className="notify-img">
                  <img src="images/avatar/02.jpg" alt="avatar" />
                </div>
                <div className="notify-content">
                  <p className="notify-text">
                    <span>miron mahmud</span>has added the advertisement post of
                    your <span>booking</span>to his wishlist.
                  </p>
                  <span className="notify-time">5 days ago</span>
                </div>
              </a>
            </li>
            <li className="notify-item">
              <a href="#" className="notify-link">
                <div className="notify-img">
                  <img src="images/avatar/04.jpg" alt="avatar" />
                </div>
                <div className="notify-content">
                  <p className="notify-text">
                    <span>labonno khan</span>gave you a <span>comment</span>and
                    5 star <span>review.</span>
                  </p>
                  <span className="notify-time">4 months ago</span>
                </div>
              </a>
            </li>
            <li className="notify-item">
              <a href="#" className="notify-link">
                <div className="notify-img">
                  <img src="images/avatar/01.jpg" alt="avatar" />
                </div>
                <div className="notify-content">
                  <p className="notify-text">
                    <span>azam khan</span>and <span>4 other</span>have seen your
                    contact number
                  </p>
                  <span className="notify-time">1 years ago</span>
                </div>
              </a>
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

export default DashNotification
