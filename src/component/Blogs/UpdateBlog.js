import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { localUrl } from "../env";
import { useDispatch } from "react-redux";
import { add } from "../../store/Track/trackUserSlice";

const UpdateBlog = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  const loadBlogs = async () => {
    const { data } = await axios.get(localUrl + `blogsapi/${id}/`);
    setImage(data.image);
    setTitle(data.title);
    setDescription(data.description);
    setState(data.state);
    setCity(data.city);
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const UpdateBlogInfo = async () => {
    let formdata = new FormData();
    // formdata.append("image", fileInput.files[0], "/C:/Users/USER/Pictures/Screenshots/Screenshot (4).png");
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("state", state);
    formdata.append("city", city);
    formdata.append("user", id);

    if (image !== null) {
      formdata.append("image", image);
    }
    await axios({
      method: "PUT",
      url: localUrl + `blogsapi/${id}/`,
      data: formdata,
    }).then((response) => {
      navigate.push("/");
    });
  };
  useEffect(() => {
    dispatch(add({ view: ["UpdateBlog"] }));
  }, []);

  document.title = "RotateKey - UpdateBlog";
  return (
    <>
      <div className="container">
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add A Student</h2>

            <div className="form-group">
              <img src={image} height="100px" width="300px" />
              <label>Image</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="enter title here"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label>description</label>
            <textarea
              name="title"
              placeholder="enter description here"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <label>state</label>
            <input
              type="text"
              name="state"
              placeholder="enter state here"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />

            <label>city</label>
            <input
              type="text"
              name="city"
              placeholder="enter city here"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <label>user</label>
            <input
              type="text"
              name="id"
              placeholder="enter date here"
              value={id}
            />

            <button
              className="btn btn-primary btn-block"
              onClick={UpdateBlogInfo}
            >
              update Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateBlog;
