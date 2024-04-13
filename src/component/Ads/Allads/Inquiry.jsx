import React from "react";

const Inquiry = () => {
  return (
    <>
      <div className="widget-box ">
        <div className="widget-content widget-content-post">
          <div className="user-make-offer-message widget-content-post-area">
            <ul className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active">
                <a
                  href="#message"
                  aria-controls="message"
                  role="tab"
                  data-toggle="tab"
                >
                  <i className="fas fa-envelope" />
                  Send Email
                </a>
              </li>
            </ul>
            {/*nav nav-tabs*/}
            {/* Tab panes */}
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active" id="message">
                {/*ShownMessage*/}
                <form
                  method="post"
                  className="form-horizontal"
                  data-toggle="validator"
                  name="contactForm"
                  action="https://demo.joinwebs.com/classiera/pearl/apple-iphone-mobile-for-sale/"
                  noValidate="true"
                >
                  <div className="form-group">
                    <label className="col-sm-3 control-label" htmlFor="name">
                      Name :
                    </label>
                    <div className="col-sm-9">
                      <input
                        id="name"
                        data-minlength={5}
                        type="text"
                        className="form-control form-control-xs"
                        name="contactName"
                        placeholder="Type your name"
                        required
                      />
                    </div>
                  </div>
                  {/*name*/}
                  <div className="form-group">
                    <label className="col-sm-3 control-label" htmlFor="email">
                      Email :
                    </label>
                    <div className="col-sm-9">
                      <input
                        id="email"
                        type="email"
                        className="form-control form-control-xs"
                        name="email"
                        placeholder="Type your email"
                        required=""
                      />
                    </div>
                  </div>
                  {/*Email*/}
                  <div className="form-group">
                    <label className="col-sm-3 control-label" htmlFor="subject">
                      Subject :
                    </label>
                    <div className="col-sm-9">
                      <input
                        id="subject"
                        type="text"
                        className="form-control form-control-xs"
                        name="subject"
                        placeholder="Type your subject"
                        required=""
                      />
                    </div>
                  </div>
                  {/*Subject*/}
                  <div className="form-group">
                    <label className="col-sm-3 control-label" htmlFor="msg">
                      Msg :
                    </label>
                    <div className="col-sm-9">
                      <textarea
                        id="msg"
                        name="comments"
                        className="form-control"
                        placeholder="Type Message"
                        required
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  {/*Message*/}
                  <div className="form-group">
                    <div className="col-sm-9">
                      <p>Please input the result of 6 + 5 =</p>
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      className="col-sm-3 control-label"
                      htmlFor="humanTest"
                    >
                      Answer :
                    </label>
                    <div className="col-sm-9">
                      <input
                        id="humanTest"
                        type="text"
                        className="form-control form-control-xs"
                        name="humanTest"
                        placeholder="Your answer"
                        required
                      />
                      <input
                        type="hidden"
                        name="humanAnswer"
                        id="humanAnswer"
                        defaultValue={11}
                      />
                      <input
                        type="hidden"
                        name="classiera_post_title"
                        id="classiera_post_title"
                        defaultValue="Apple iPhone Mobile for sale"
                      />
                      <input
                        type="hidden"
                        name="classiera_post_url"
                        id="classiera_post_url"
                        defaultValue="https://demo.joinwebs.com/classiera/pearl/apple-iphone-mobile-for-sale/"
                      />
                    </div>
                  </div>
                  {/*answer*/}
                  {/*Checkbox*/}
                  <div className="form-group">
                    <div className="checkbox col-sm-12">
                      <input
                        type="checkbox"
                        name="agree"
                        id="agree"
                        defaultValue="agree"
                        required=""
                      />
                      <label className="control-label" htmlFor="agree">
                        Agreed to
                        <a
                          target="_blank"
                          href="http://demo.joinwebs.com/classiera/pearl/terms-and-conditions/"
                        >
                          terms &amp; conditions.{" "}
                        </a>
                      </label>
                    </div>
                  </div>
                  {/*Checkbox*/}
                  <input
                    type="hidden"
                    name="submit"
                    defaultValue="send_message"
                  />
                  <button
                    className="btn btn-primary btn-block btn-sm sharp btn-style-one "
                    name="send_message"
                    value="send_message"
                    type="submit"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              {/*message*/}
            </div>
            {/*tab-content*/}
            {/* Tab panes */}
          </div>
          {/*user-make-offer-message*/}
        </div>
        {/*widget-content*/}
      </div>
    </>
  );
};

export default Inquiry;
