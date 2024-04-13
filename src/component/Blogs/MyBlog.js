import { Alert, Button, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { localUrl } from "../env";
import Spiner from "../Spiner";

const MyBlog = () => {
  let navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  let barererToken = "Bearer " + localStorage.getItem("access_token");
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", barererToken);
    myHeaders.append(
      "Cookie",
      "csrftoken=UHWWjOHzO3WiptxXgYHa05GQMsZXWezftGUBXm6hphCOKwEPglvTph3YAUBkSCfS"
    );

    var formdata = new FormData();

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(localUrl + "user/blogsby/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(true);
        setBlogs(result);
      })
      .catch((error) => console.log("error", error));
    setLoading(false);
  }, []);

  return (
    <>
      {!loading && <Spiner />}
      {loading && (
        <div>
          <div>
            {blogs.length == 0 ? (
              <Space
                direction="vertical"
                style={{
                  width: "100%",
                }}
              >
                <Alert
                  message="No blog"
                  showIcon
                  description="Please post blog "
                  type="warning"
                  action={
                    <Button
                      size="small"
                      danger
                      onClick={() => navigate("/add-blog/")}
                    >
                      Post Blog
                    </Button>
                  }
                />
              </Space>
            ) : null}
          </div>
          <div>
            {blogs.map((blogs) => {
              return (
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      {/* "http://hola9.live/adsapi/"+ */}
                      <img
                        src={
                          blogs?.fields.image
                            ? "http://hola9.live/adsapi/" + blogs?.fields.image
                            : "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZSUyMHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        }
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{blogs.fields.title}</h5>
                        <p className="card-text">{blogs.fields.description}</p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default MyBlog;
