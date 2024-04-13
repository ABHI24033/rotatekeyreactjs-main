import React, { useEffect, useState } from "react";
import axios from "axios";
import { decrypt } from "../Base/encryptDecrypt/encryptDecrypt";
import { Button } from "react-bootstrap";
import { Category, stateMain } from "../env";
import { localUrl } from "../env.js";
import Spiner from "../Spiner";
import { useDispatch } from "react-redux";
import { add } from "../../store/Track/trackUserSlice";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  let navigate = useNavigate();
  // const [id, setId] = useState();
  const USERdta = decrypt("userdata");
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [title, setTitle] = useState(null);
  const [subtitle, setSubtitle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [description, setDescription] = useState(null);
  const [state, setState] = useState(null);
  const [category, setcategory] = useState(null);
  const [date, setDate] = useState("");
  const [storeadsFlag, setstoreadsFlag] = useState(false);
  const [success, setsuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);
  const [buttoncheck, setbuttoncheck] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(add({ view: ["AddBlog"] }));
  }, []);

  const addNewBlog = async (e) => {
    e.preventDefault();
    setstoreadsFlag(true);
    let formdata = new FormData();
    // formdata.append("image", fileInput.files[0], "/C:/Users/USER/Pictures/Screenshots/Screenshot (4).png");
    formdata.append("title", title);
    formdata.append("subtitle", subtitle);
    formdata.append("description", description);
    formdata.append("state", state);
    formdata.append("city", city);
    formdata.append("user", USERdta.id);
    formdata.append("category", category);
    formdata.append("published_time", date);
    formdata.append("author", author);
    if (image !== null) {
      formdata.append("image", image);
    }
    if (image2 !== null) {
      formdata.append("imagesecond", image2);
    }
    setLoading(true);
    await axios({
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      url: localUrl + "blogsapi/",
      data: formdata,
    })
      .then((response) => {
        setsuccess(true);
        setstoreadsFlag(false);
        setLoading(false);
        // navigate.push("/");
      })
      .catch((error) => {
        setError(error.message);
        setstoreadsFlag(false);
        setLoading(false);
      });
  };
  useEffect(() => {
    var today = new Date();
    let date = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    var datevalue = `${year}-${month < 10 ? `0${month}` : `${month}`}-${
      date < 10 ? `0${date}` : `${date}`
    }`;
    setDate(datevalue);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("access_token") != null) {
      let barererToken = "Bearer " + localStorage.getItem("access_token");
      var myHeaders = new Headers();
      myHeaders.append("Authorization", barererToken);

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      setLoading(true);
      fetch(localUrl + "user/profile/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          // setprofileform(profileform.name=result.name)
          // setId(result.id)
          setAuthor(result.name);
          setLoading(false);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, []);
  document.title = "RotateKey - AddBlog";
  // const style = { position: "fixed", top: "45%", left: "59%", transform: "translate(-50%, -50%)" };
  return (
    <>
      {/* <div  style={style}>
      {loading ? <ClipLoader color={"#123abc"} loading={!storeadsFlag} />: ""}
      </div> */}
      <div className="shadow">
        {loading && <Spiner />}
        {/* <div className="container"> */}

        {/* <div style={{marginTop:'-50px'}}>  */}
        <h1 className="text-center">Add blog</h1>
        <form>
          <div className="form-group col-lg-12 col-md-8 col-sm-12">
            <label>Image</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>
          <div className="form-group col-lg-12 col-md-8 col-sm-12">
            <label>Image2</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setImage2(e.target.files[0])}
              required
            />
          </div>

          <div className="form-group col-lg-6 col-md-6 col-sm-12">
            <label className="mb-0 mt-2">Title</label>
            <input
              required
              type="Title"
              name="title"
              className="form-control"
              value={title}
              placeholder="enter title here"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group col-lg-6 col-md-6 col-sm-12">
            <label className="mb-0 mt-2">Subtitle</label>
            {/* <input type="state" className="form-control"  list="state" name="state"
              placeholder="enter state here"
              value={state}
              onChange={(e) => setState(e.target.value)} />
              <datalist id="state">
              {stateMain.map(result=>{
              return <option value={result} >{result}</option>
        })
        }
              </datalist> */}
            <input
              required
              type="Subtitle"
              name="subtitle"
              className="form-control"
              value={subtitle}
              placeholder="enter subtitle here"
              onChange={(e) => setSubtitle(e.target.value)}
            />
          </div>

          <div className="form-group col-lg-6 col-md-6 col-sm-12">
            <label className="mb-0 mt-2">City</label>

            <input
              type="city"
              className="form-control"
              name="city"
              placeholder="enter city here"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              list="city"
            />
            <datalist id="city">
              {/* Object.keys(stateMain).map(res=>stateMain[res]).flat(Infinity).map(val=>val) */}
              {Object.keys(stateMain)
                .map((res) => stateMain[res])
                ?.flat(Infinity)
                ?.sort()
                ?.map((result) => {
                  return <option value={result}>{result}</option>;
                })}
            </datalist>
          </div>

          <div className="form-group col-lg-6 col-md-6 col-sm-12">
            <label className="mb-0 mt-2">Category</label>

            <input
              type="category"
              className="form-control"
              placeholder="category"
              value={category}
              list="category"
              onChange={(e) => setcategory(e.target.value)}
            />
            <datalist id="category">
              {Category.map((result) => {
                return <option value={result}>{result}</option>;
              })}
            </datalist>
          </div>
          {/* Start */}
          <div className="form-group col-lg-6 col-md-6 col-sm-12">
            <label className="mb-0 mt-2">State</label>
            {/* <input required type="Subtitle" name="subtitle" className="form-control" value={subtitle}  placeholder="enter title here"   onChange={(e) => setSubtitle(e.target.value)} /> */}
            <input
              type="state"
              className="form-control"
              list="state"
              name="state"
              placeholder="enter state here"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <datalist id="state">
              {Object.keys(stateMain)?.map((result) => {
                return <option value={result}>{result}</option>;
              })}
            </datalist>
          </div>
          <div className="form-group col-lg-6 col-md-6 col-sm-12">
            <label className="mb-0 mt-2">Author</label>
            <input
              type="text"
              className="form-control"
              list="state"
              name="state"
              placeholder="enter state here"
              // value={USERdta.name}
              value={author}
              disabled={true}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <datalist id="state">
              {Object.keys(stateMain)?.map((result) => {
                return <option value={result}>{result}</option>;
              })}
            </datalist>
          </div>
          {/* End */}
          <div className="form-group col-lg-6 col-md-6 col-sm-12" hidden>
            <label className="mb-0 mt-2">User</label>
            <input
              className="myinput"
              type="text"
              name="id"
              disable={true}
              placeholder="USER ID"
              value={USERdta.name}
            />
            {/* <label  className="mb-0 mt-2">user</label>
            <input
              type="text"
              name="id"
              placeholder="enter date here"
              value={USERdta.name}
            /> */}
          </div>

          <div className="form-group col-lg-12 col-sm-12">
            <label className="mb-0 mt-2">Description</label>
            <textarea
              required
              type="description"
              name="title"
              className="form-control"
              placeholder="enter description here"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group col-lg-12 col-md-12 col-sm-12">
            <label className="mb-0 mt-2">Date</label>
            <input
              required
              type="text"
              name="date"
              className="form-control"
              value={date}
              placeholder="enter title here"
              onChange={(e) => setDate(e.target.value)}
              disabled
            />
          </div>
          <div className="col-lg-12 col-sm-12  mb-0 mt-2 ">
            <Button
              disabled={!description}
              className="btn btn-block style1"
              onClick={() => {
                setbuttoncheck("free");
              }}
            >
              Confirm
            </Button>
          </div>
          <div className="p-2">
            <button
              type="submit"
              className="btn btn-primary btn-block mt-2 mb-2"
              onClick={addNewBlog}
              disabled={buttoncheck == null}
            >
              Submit Blog
            </button>
          </div>
        </form>

        {success ? (
          <Modal
            title="Blog post successfully"
            open={success}
            fill="green"
            onOk={() => {
              navigate("/blogs-listing");
            }}
            onCancel={() => navigate("/dashboard")}
          />
        ) : null}
      </div>
    </>
  );
};

export default AddBlog;
