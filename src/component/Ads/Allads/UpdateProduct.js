import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { localUrl } from "../../env";
import { useDispatch } from "react-redux";
import { add } from "../../../store/Track/trackUserSlice";

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [tags, setTags] = useState(null);
  const [description, setDescription] = useState(null);
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [condition, setCondition] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [locality, setLocality] = useState(null);
  const [zipcode, setZipcode] = useState(null);
  const [date, setDate] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  const loadProducts = async () => {
    const { data } = await axios.get(localUrl + `adsapi/${id}/`);

    setImage(data.image);
    setTitle(data.title);
    setPrice(data.price);
    setTags(data.tags);
    setDescription(data.description);
    setCategory(data.category);
    setBrand(data.brand);
    setCondition(data.condition);
    setState(data.state);
    setCity(data.city);
    setLocality(data.locality);
    setZipcode(data.zipcode);
    setDate(data.date);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const UpdateProductInfo = async () => {
    let formdata = new FormData();
    // formdata.append("image", fileInput.files[0], "/C:/Users/USER/Pictures/Screenshots/Screenshot (4).png");
    formdata.append("title", title);
    formdata.append("price", price);
    formdata.append("tags", tags);
    formdata.append("description", description);
    formdata.append("category", category);
    formdata.append("brand", brand);
    formdata.append("condition", condition);
    formdata.append("state", state);
    formdata.append("city", city);
    formdata.append("locality", locality);
    formdata.append("zip_code", zipcode);
    formdata.append("user", id);

    if (image !== null) {
      formdata.append("image", image);
    }
    await axios({
      method: "PUT",
      url: localUrl + `adsapi/${id}/`,
      data: formdata,
    }).then((response) => {
      navigate.push("/");
    });
  };
  useEffect(() => {
    dispatch(add({ view: ["UpdateProduct"] }));
  }, []);
  document.title = "RotateKey - UpdateProductDetails";
  return (
    <>
      <div className="container">
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add A Student</h2>

            <div className="form-group">
              <img src={image} height="100px" width="300px" alt="404 Error!" />
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

            <label>Price</label>
            <input
              type="text"
              name="price"
              placeholder="enter price here"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <label>tags</label>
            <input
              type="text"
              name="tags"
              placeholder="enter tags here"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />

            <label>description</label>
            <textarea
              name="title"
              placeholder="enter description here"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <label>category</label>
            <input
              type="text"
              name="category"
              placeholder="enter category here"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />

            <label>brand</label>
            <input
              type="text"
              name="brand"
              placeholder="enter brand here"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />

            <label>condition</label>
            <input
              type="text"
              name="condition"
              placeholder="enter condition here"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
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

            <label>locality</label>
            <input
              type="text"
              name="locality"
              placeholder="enter locality here"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
            />

            <label>zipcode</label>
            <input
              type="text"
              name="zipcode"
              placeholder="enter zipcode here"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            />

            <label>date</label>
            <input
              type="date"
              name="date"
              placeholder="enter date here"
              value={date}
              onChange={(e) => setDate(e.target.value)}
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
              onClick={UpdateProductInfo}
            >
              update Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
