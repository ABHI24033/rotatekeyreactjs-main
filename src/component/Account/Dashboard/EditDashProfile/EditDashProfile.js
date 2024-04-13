
const EditDashProfile = () => {

 
  return (
    <>

<div className="setting-part">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="account-card alert fade show">
          <div className="account-title">
            <h3>Edit Profile</h3>
            <button data-dismiss="alert">close</button>
          </div>
          <form className="setting-form">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mahmudul"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Hasan"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label className="form-label">Company</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Classicads Advertising LID."
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="1420, West Jalkuri, Narayanganj, Bangladesh"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Narayanganj"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-label">State</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="West Jalkuri"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-label">Post Code</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={1420}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-label">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Bangladesh"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-label">Website</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="https://mironmahmud.com"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={+8801838288389}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-label">Birthday</label>
                  <input
                    type="date"
                    className="form-control"
                    defaultValue="1995-02-02"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-label">Profile Image</label>
                  <input type="file" className="form-control" />
                </div>
              </div>
              <div className="col-lg-12">
                <button className="btn btn-inline">
                  <i className="fas fa-user-check" />
                  <span>update profile</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}

export default EditDashProfile
