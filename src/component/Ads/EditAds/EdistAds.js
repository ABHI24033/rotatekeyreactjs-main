import "./EditAds.css";
import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
// import axios from "axios";
// import "./AddProducts.css"
import Payments from "../Payment/Payments";
import validator from "validator";
import { Image, Container, Row, Col } from "react-bootstrap";
import "../Allads/ImageUpload/ImageUpload.css";
import { FaCut } from "react-icons/fa";
// import "./AddProducts.css"
// import { Button,Form ,Alert} from "react-bootstrap";
import { FaSearchLocation } from "react-icons/fa";
import { useGeolocated } from "react-geolocated";
import {
  allSubcategory,
  Category,
  Electronics,
  Furniture,
  Gadgets,
  HomeAndLifeStyle,
  Education,
  localUrl,
  ProductCondition,
  stateMain,
  subcategoryRealEstateBuy,
  subcategoryRealEstateRent,
  subcategoryType1,
  url,
  RealEsateAllDetails,
} from "../../env";
import { decrypt } from "../../Base/encryptDecrypt/encryptDecrypt";
import Spiner from "../../Spiner";
import MultiImageInput from "react-multiple-image-input";
import ImageUploading from "react-images-uploading";
import { CreateAds } from "../../../error/errorMessage";
import { Button } from "antd";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const EdistAds = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const [visible, setVisible] = useState(false);
  const [style1, setStyle1] = useState({ color: "red!important" });
  const [style2, setStyle2] = useState("cont");
  const [buttoncheck, setbuttoncheck] = useState(null);
  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
  };
  const [afterSubmitFlg, setAfterSubmitflag] = useState(false);
  const [images, setImages] = useState({});
  const [id, setId] = useState();
  const [AllImage, setAllImage] = useState([]);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [condition, setCondition] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [locality, setLocality] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [date, setDate] = useState("");
  const [active, setActive] = useState("DashAds");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState(null);
  const [storeadsFlag, setstoreadsFlag] = useState(false);
  const [realEsateSubCategory, setrealEsateSubCategory] = useState(null);
  const [userdata, setUserData] = useState(null);
  const [subCategoryValue, setsubCategoryValue] = useState(null);
  const [subCategoryType, setsubCategoryType] = useState(null);
  const userDataValue = localStorage.getItem("userdata")
    ? decrypt("userdata")
    : null;
  const [successvalue, setSuccessValue] = useState(false);
  const [errorvalue, setErrorValue] = useState(false);
  const [message, setMessage] = useState(null);
  const [MoreImage, setMoreImage] = useState(false);
  const [phoneNumber, setphoneNumber] = useState(null);
  // const [lat,setLat]=useState(false)
  // const [long,setLong]=useState(false)
  const [lat, setLat] = useState(false);
  const [long, setLong] = useState(false);
  ///category real esate

  const [BuildUpArea, setBuildUpArea] = useState(null);
  const [Flor, setFlor] = useState(null);
  const [ApartMentType, setApartMentType] = useState(null);
  const [Availability, setAvailability] = useState(null);
  const [FurnishedType, setFurnishedType] = useState(null);
  const [Property, setProperty] = useState(null);
  const [Parking, setParking] = useState(null);
  const [PowerBackup, setPowerBackup] = useState(null);
  const [Gym, setGym] = useState(null);
  const [Garden, setGarden] = useState(null);
  const [Pool, setPool] = useState(null);
  const [Lift, setLift] = useState(null);

  const adsId = useParams();

  const myFun = async () => {
    const EditData = await axios.get(localUrl + `adsapi/${adsId.id}/`);
    // setImage(EditData.data.image);
    setTitle(EditData.data.title);
    setPrice(EditData.data.price);
    setTags(EditData.data.tags);
    setBrand(EditData.data.brand);
    setCategory(EditData.data.category);
    setCondition(EditData.data.condition);
    setsubCategoryType(EditData.data.subCategoryType);
    setsubCategoryValue(EditData.data.subCategoryValue);
    setBuildUpArea(EditData.data.BuildUpArea);
    setFlor(EditData.data.Flor);
    setApartMentType(EditData.data.ApartMentType);
    setAvailability(EditData.data.Availability);
    setFurnishedType(EditData.data.FurnishedType);
    setProperty(EditData.data.Property);
    setParking(EditData.data.Parking);
    setPowerBackup(EditData.data.PowerBackup);
    setGym(EditData.data.Gym);
    setGarden(EditData.data.Garden);
    setPool(EditData.data.Pool);
    setLift(EditData.data.Lift);
    setphoneNumber(EditData.data.phoneNumber);
    setState(EditData.data.state);
    setCity(EditData.data.city);
    setLocality(EditData.data.locality);
    setZipcode(EditData.data.zip_code);
    setDescription(EditData.data.description);
    setDate(EditData.data.date_created);
  };

  useEffect(() => {
    myFun();
  });
  const [imagesmutlipleads, setimagesmutlipleads] = useState([]);
  useEffect(() => {
    var formdata = new FormData();
    formdata.append("adsId", adsId.id);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "api/adsapi/adsUpload", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        var multipleImage = [];

        result.map((result) => {
          let tempObjImage = {};
          tempObjImage["url"] = result.fields.image;
          multipleImage.push(tempObjImage);
        });
        setimagesmutlipleads(multipleImage);
      })
      .catch((error) => console.log("error", error));
  }, []);
  const handleSetVisible = () => {
    setVisible(true);
  };

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit

    setImages(imageList);
  };
  const hideModal = () => {
    setVisible(false);
  };

  const navigate = useNavigate();

  if (localStorage.getItem("access_token") == null) {
    navigate("/login");
  }
  const CategoryList = Category;
  const coords = useGeolocated();
  const handlePay = () => {
    let formdata = {};
    // formdata.append("image", fileInput.files[0], "/C:/Users/USER/Pictures/Screenshots/Screenshot (4).png");
    formdata["title"] = title;
    formdata["price"] = price;
    formdata["tags"] = tags;
    formdata["description"] = description;
    formdata["category"] = category;
    formdata["brand"] = brand;
    formdata["condition"] = condition;
    formdata["state"] = state;
    formdata["city"] = city;
    formdata["locality"] = locality;
    formdata["zip_code"] = zipcode;
    formdata["user"] = id;

    if (image !== null) {
      formdata["image"] = image;
    }
    localStorage.setItem("payAdsData", JSON.stringify(formdata));
  };
  const name = userDataValue?.name;
  const selectShortlistedApplicant = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;

    setrealEsateSubCategory(value);
    if (checked) {
    } else {
      // setfeatureTrue(null)
    }
  };
  const [categorysubCategoryFlag, setcategorysubCategoryFlag] = useState(false);
  // if(category=="RealEstate"){
  //   setcategorysubCategoryFlag(true)
  // }
  // const [lat ,setLat] =useState(null)
  // const [long ,setLong]=useState(null)
  const getLocationSearchMethod = () => {
    if (coords) {
      setLat(coords.coords.latitude);
      setLong(coords.coords.longitude);
      const url =
        "https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?lat=" +
        coords.coords.latitude +
        "&lng=" +
        coords.coords.longitude;

      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "7fded38e7emsh3c4fb60f3b8017cp1c084bjsn32180c499f5f",
          "X-RapidAPI-Host":
            "address-from-to-latitude-longitude.p.rapidapi.com",
        },
      };
      setLoading(true);
      fetch(url, options)
        .then((res) => res.json())
        .then((json) => {
          setState(json.Results[0].region);
          setCity(json.Results[0].city);
          setLocality(json.Results[0].address);
          setZipcode(json.Results[0].postalcode);
          setLoading(false);
          setError(null);
        })
        .catch((err) => setError("Failed to get location.."));
      setLoading(false);
    }
  };

  const imageUpload = (props) => {
    for (var file in images) {
      var formdata = new FormData();
      formdata.append("imageList", images[file]);
      formdata.append("adsId", props);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };
      fetch(localUrl + `adsapi/adsUpload`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          navigate(`/ads-listing/${props}/`);
        })
        .catch((error) => setError("Somethig went wrong.."));
    }
  };

  const addNewProduct = async () => {
    setstoreadsFlag(true);

    if (
      !title ||
      !price ||
      !city ||
      !description ||
      !category ||
      !state ||
      !locality ||
      !zipcode ||
      !phoneNumber
    ) {
      setAfterSubmitflag(true);
      setError("* Please fill this field..");
    } else {
      let formdata = new FormData();
      if (true) {
        for (var file in images) {
          formdata.append("image", images[file]);
          break;
        }
      }

      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer " + localStorage.getItem("access_token")
      );

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
      formdata.append("user", userDataValue.id);
      formdata.append("subCategoryType", subCategoryType);
      formdata.append("subCategoryValue", subCategoryValue);
      formdata.append("lati", lat);
      formdata.append("long", long);
      formdata.append("phoneNumber", phoneNumber);
      formdata.append("BuildUpArea", BuildUpArea);
      formdata.append("Flor", Flor);
      formdata.append("ApartMentType", ApartMentType);
      formdata.append("Availability", Availability);
      formdata.append("FurnishedType", FurnishedType);
      formdata.append("Property", Property);
      formdata.append("Parking", Parking);
      formdata.append("PowerBackup", PowerBackup);
      formdata.append("Gym", Gym);
      formdata.append("Garden", Garden);
      formdata.append("Pool", Pool);
      formdata.append("Lift", Lift);

      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };
      setLoading(true);
      fetch(localUrl + `adsapi/${adsId.id}/`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setSuccessValue(true);
          setErrorValue(false);
          if (result?.detail) {
            setErrorValue(true);
            setSuccessValue(false);
            alert("token expire");
            localStorage.removeItem("access_token");
            navigate("/");
            setLoading(false);
          }
          if (!result?.id) {
            alert("ads not posted");
          } else {
            imageUpload(result.id);
          }

          setLoading(false);
        })
        .catch((error) => {
          setError("Something went wrong! Please come after Sometimes..");
          setErrorValue(true);
          setSuccessValue(false);
        });
    }
    setstoreadsFlag(false);
    setLoading(false);
    navigate("/dashboard");
    window.location.reload();
  };
  const [files, setFiles] = useState([]);
  ///function for multiple image upload
  const fileSelectedHandler = (e) => {
    files.push(e.target.files[0]);
    setFiles(files);
  };
  const style = {
    position: "fixed",
    top: "50%",
    left: "60%",
    transform: "translate(-50%, -50%)",
  };
  document.title = "RotateKey - AddProducts";
  return (
    <div className="container shadow ">
      <Carousel responsive={responsive}>
        {imagesmutlipleads.map((result) => {
          return (
            <div>
              <img src={result?.url} />
            </div>
          );
        })}
      </Carousel>
      {!loading && (
        <div className="container">
          <div className="w-100 mx-auto  p-2">
            <h1 style={{ marginTop: "-30px", fontSize: "20px" }}>
              Add A products
            </h1>
            <div className="form-group">
              <label>Main Banner Image</label>
              {/* <input
              required
              type="file" 
              className="form-control"
              onChange={(e) => setImage(e.target.files[0])}
            /> */}
            </div>
            <div className="row">
              <div className="col-lg-12">
                <MultiImageInput
                  max={10}
                  images={images}
                  setImages={setImages}
                  cropConfig={{ crop, ruleOfThirds: true }}
                  theme={{
                    background: "#ffffff",
                    outlineColor: "#111111",
                    textColor: "rgba(255,255,255,0.6)",
                    buttonColor: "#ff0e1f",
                    modalColor: "#ffffff",
                  }}
                />
              </div>
              {MoreImage ? (
                <div className="col-lg-8">
                  <div>
                    <form className="padingmanage">
                      <input type="file" onChange={fileSelectedHandler} />
                    </form>
                    <Container>
                      <Row>
                        {files.map((result) => {
                          return (
                            <Col xs={2} md={3}>
                              {" "}
                              <a alt="" href="" className="block-icon">
                                <Image
                                  src={URL.createObjectURL(result)}
                                  thumbnail
                                />

                                <FaCut
                                  className=" icon-tag"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    // this.removeItem(result)
                                  }}
                                />
                              </a>{" "}
                            </Col>
                          );
                        })}
                      </Row>
                    </Container>
                  </div>
                </div>
              ) : null}
              {error && <span className="text-danger ml-2">{error}</span>}
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <label className="mb-0 mt-2">Title</label>
                <input
                  required
                  className="myinput"
                  type="text"
                  name="title"
                  placeholder="enter title here"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {!title && afterSubmitFlg && (
                  <span className="text-danger ml-2">{CreateAds.title}</span>
                )}
              </div>
              <div className="col-lg-6 col-sm-12">
                <label className="mb-0 mt-2">Price</label>
                <input
                  className="myinput"
                  type="text"
                  name="price"
                  placeholder="enter price here"
                  value={price}
                  onChange={(e) => {
                    /[^0-9a-zA-Z]/.test(setPrice(e.target.value))
                      ? /[^0-9a-zA-Z]/.test(setPrice(e.target.value))
                      : setPrice(e.target.value);
                  }}
                  pattern="/^[0-9a-zA-Z]+$/"
                  required
                />
                {!price && afterSubmitFlg && (
                  <span className="text-danger ml-2">{CreateAds.Price}</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <label className="mb-0 mt-2">tags</label>
                <input
                  className="myinput"
                  type="text"
                  name="tags"
                  placeholder="enter tags here"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  required
                />
                {!tags && afterSubmitFlg && (
                  <span className="text-danger ml-2">{CreateAds.Tags}</span>
                )}
              </div>

              <div className="col-lg-6 col-sm-12">
                <label className="mb-0 mt-2">brand</label>
                <input
                  className="myinput"
                  type="text"
                  name="brand"
                  placeholder="enter brand here"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <label className="mb-0 mt-2">category</label>

                <input
                  className="inpstyle"
                  placeholder="category"
                  value={category}
                  type="text"
                  list="category"
                  style={{ padding: "10px", width: "100%", zIndex: "-50px" }}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setcategorysubCategoryFlag(
                      e.target.value == "RealEstate" ? true : false
                    );
                  }}
                />
                <datalist id="category">
                  {CategoryList.map((result) => {
                    return <option value={result}>{result}</option>;
                  })}
                </datalist>
                {!category && afterSubmitFlg && (
                  <span className="text-danger ml-2">{CreateAds.Category}</span>
                )}
              </div>

              <div className="col-lg-6 col-sm-12">
                <label className="mb-0 mt-2">condition</label>
                <input
                  className="inpstyle"
                  placeholder="condition"
                  value={condition}
                  type="text"
                  list="condition"
                  style={{ padding: "10px", width: "100%", zIndex: "-50px" }}
                  onChange={(e) => {
                    setCondition(e.target.value);
                    setCondition(e.target.value);
                  }}
                />
                <datalist id="condition">
                  {ProductCondition.map((result) => {
                    return <option value={result}>{result}</option>;
                  })}
                </datalist>
              </div>

              {category != "RealEstate" ? (
                <div className="col-lg-6 col-sm-12">
                  <label className="mb-0 mt-2">subcategory</label>
                  <input
                    className="inpstyle"
                    placeholder="Sub Category"
                    type="text"
                    list="subcategoryForAll"
                    style={{ padding: "10px", width: "100%", zIndex: "-50px" }}
                    onChange={(e) => {
                      setsubCategoryValue(e.target.value);
                    }}
                  />
                  <datalist id="subcategoryForAll">
                    {category == "Furniture"
                      ? Furniture.map((result) => {
                          return <option value={result}>{result}</option>;
                        })
                      : category == "Electronics"
                      ? Electronics.map((result) => {
                          return <option value={result}>{result}</option>;
                        })
                      : category == "Furniture"
                      ? Furniture.map((result) => {
                          return <option value={result}>{result}</option>;
                        })
                      : category == "Gadgets"
                      ? Gadgets.map((result) => {
                          return <option value={result}>{result}</option>;
                        })
                      : category == "HomeAndLifeStyle"
                      ? HomeAndLifeStyle.map((result) => {
                          return <option value={result}>{result}</option>;
                        })
                      : category == "Education"
                      ? Education.map((result) => {
                          return <option value={result}>{result}</option>;
                        })
                      : allSubcategory.map((result) => {
                          return <option value={result}>{result}</option>;
                        })}
                  </datalist>
                </div>
              ) : null}

              {categorysubCategoryFlag ? (
                <div className="col-lg-6 col-sm-12">
                  <label>SubCategory</label>
                  <input
                    className="inpstyle"
                    placeholder="SubCategory"
                    value={subCategoryType}
                    type="text"
                    list="subcategoryType"
                    style={{ padding: "12px", width: "100%", zIndex: "-50px" }}
                    onChange={(e) => {
                      setsubCategoryType(e.target.value);
                    }}
                  />
                  <datalist id="subcategoryType">
                    {subcategoryType1.map((result) => {
                      return <option value={result}>{result}</option>;
                    })}
                  </datalist>
                </div>
              ) : null}

              {subCategoryType == "Buy" ? (
                <div className="col-lg-6 col-sm-12">
                  <label>Type</label>

                  <input
                    className="inpstyle"
                    placeholder="subcategoryRealEstateBuy"
                    value={subCategoryValue}
                    type="text"
                    list="subcategoryRealEstateBuy"
                    style={{ padding: "12px", width: "100%", zIndex: "-50px" }}
                    onChange={(e) => {
                      setsubCategoryValue(e.target.value);
                    }}
                  />
                  <datalist id="subcategoryRealEstateBuy">
                    {subcategoryRealEstateBuy.map((result) => {
                      return <option value={result}>{result}</option>;
                    })}
                  </datalist>
                </div>
              ) : subCategoryType == "rent" ? (
                <div className="col-lg-6 col-sm-12">
                  <label>Type</label>

                  <input
                    className="inpstyle"
                    placeholder="subcategoryRealEstateRent"
                    value={subCategoryValue}
                    type="text"
                    list="subcategoryRealEstateRent"
                    style={{ padding: "12px", width: "100%", zIndex: "-50px" }}
                    onChange={(e) => {
                      setsubCategoryValue(e.target.value);
                    }}
                  />
                  <datalist id="subcategoryRealEstateRent">
                    {subcategoryRealEstateRent.map((result) => {
                      return <option value={result}>{result}</option>;
                    })}
                  </datalist>
                </div>
              ) : subCategoryType == "Residential" ? (
                <div className="col-lg-6 col-sm-12">
                  <label>Enter Here</label>

                  <input
                    className="inpstyle"
                    placeholder="subcategoryRealEstateRent"
                    type="text"
                    list="Others"
                    style={{ padding: "12px", width: "100%", zIndex: "-50px" }}
                    onChange={(e) => {
                      setsubCategoryValue(e.target.value);
                    }}
                  />

                  {/* <datalist id="Others">
                                            {Others.map(result => {
                                                return <option value={result} >{result}</option>
                                            })
                                            }
                                        </datalist> */}
                </div>
              ) : null}

              {subCategoryType == "Buy" ||
              subCategoryType == "rent" ||
              subCategoryType == "reResidentialnt" ? (
                <div>
                  <div className="col-lg-4 col-sm-6">
                    <label className="mb-0 mt-2">BuildUpArea</label>
                    <input
                      className="inpstyle"
                      placeholder="Build Up Area"
                      value={BuildUpArea}
                      type="text"
                      list="BuildUpArea"
                      style={{
                        padding: "10px",
                        width: "100%",
                        zIndex: "-50px",
                      }}
                      onChange={(e) => {
                        setBuildUpArea(e.target.value);
                      }}
                    />
                    <datalist id="BuildUpArea">
                      {RealEsateAllDetails.BuildUpArea.map((result) => {
                        return <option value={result}>{result}</option>;
                      })}
                    </datalist>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <label className="mb-0 mt-2">Flor</label>
                    <input
                      className="inpstyle"
                      placeholder="enter Flors"
                      value={Flor}
                      type="text"
                      list="Flor"
                      style={{
                        padding: "10px",
                        width: "100%",
                        zIndex: "-50px",
                      }}
                      onChange={(e) => {
                        setFlor(e.target.value);
                      }}
                    />
                    <datalist id="Flor">
                      {RealEsateAllDetails.Flor.map((result) => {
                        return <option value={result}>{result}</option>;
                      })}
                    </datalist>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <label className="mb-0 mt-2">ApartMentType</label>
                    <input
                      className="inpstyle"
                      placeholder="enter ApartMentType"
                      value={ApartMentType}
                      type="text"
                      list="ApartMentType"
                      style={{
                        padding: "10px",
                        width: "100%",
                        zIndex: "-50px",
                      }}
                      onChange={(e) => {
                        setApartMentType(e.target.value);
                      }}
                    />
                    <datalist id="ApartMentType">
                      {RealEsateAllDetails.ApartMentType.map((result) => {
                        return <option value={result}>{result}</option>;
                      })}
                    </datalist>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <label className="mb-0 mt-2">Availability</label>
                    <input
                      className="inpstyle"
                      placeholder="Availability"
                      value={Availability}
                      type="text"
                      list="Availability"
                      style={{
                        padding: "10px",
                        width: "100%",
                        zIndex: "-50px",
                      }}
                      onChange={(e) => {
                        setAvailability(e.target.value);
                      }}
                    />
                    <datalist id="Availability">
                      {RealEsateAllDetails.Availability.map((result) => {
                        return <option value={result}>{result}</option>;
                      })}
                    </datalist>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <label className="mb-0 mt-2">FurnishedType</label>
                    <input
                      className="inpstyle"
                      placeholder="FurnishedType"
                      value={FurnishedType}
                      type="text"
                      list="FurnishedType"
                      style={{
                        padding: "10px",
                        width: "100%",
                        zIndex: "-50px",
                      }}
                      onChange={(e) => {
                        setFurnishedType(e.target.value);
                      }}
                    />
                    <datalist id="FurnishedType">
                      {RealEsateAllDetails.FurnishedType.map((result) => {
                        return <option value={result}>{result}</option>;
                      })}
                    </datalist>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <label className="mb-0 mt-2">Property</label>
                    <input
                      className="inpstyle"
                      placeholder="Property"
                      type="text"
                      value={Property}
                      list="Property"
                      style={{
                        padding: "10px",
                        width: "100%",
                        zIndex: "-50px",
                      }}
                      onChange={(e) => {
                        setProperty(e.target.value);
                      }}
                    />
                    <datalist id="Property">
                      {RealEsateAllDetails.Property.map((result) => {
                        return <option value={result}>{result}</option>;
                      })}
                    </datalist>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <label className="mb-0 mt-2">Parking</label>
                    <input
                      className="inpstyle"
                      placeholder="Parking"
                      type="text"
                      value={Parking}
                      list="Parking"
                      style={{
                        padding: "10px",
                        width: "100%",
                        zIndex: "-50px",
                      }}
                      onChange={(e) => {
                        setParking(e.target.value);
                      }}
                    />
                    <datalist id="Parking">
                      {RealEsateAllDetails.Parking.map((result) => {
                        return <option value={result}>{result}</option>;
                      })}
                    </datalist>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <label className="mb-0 mt-2">PowerBackup</label>
                    <input
                      className="inpstyle"
                      placeholder="PowerBackup"
                      value={PowerBackup}
                      type="text"
                      list="PowerBackup"
                      style={{
                        padding: "10px",
                        width: "100%",
                        zIndex: "-50px",
                      }}
                      onChange={(e) => {
                        setPowerBackup(e.target.value);
                      }}
                    />
                    <datalist id="PowerBackup">
                      {RealEsateAllDetails.PowerBackup.map((result) => {
                        return <option value={result}>{result}</option>;
                      })}
                    </datalist>
                  </div>
                  <div>Amenity's</div>
                  <div className="col-lg-4 col-sm-6">
                    <label className="mb-0 mt-2">Gym</label>
                    <input
                      className="inpstyle"
                      placeholder="Gym"
                      value={Gym}
                      type="text"
                      list="Gym"
                      style={{
                        padding: "10px",
                        width: "100%",
                        zIndex: "-50px",
                      }}
                      onChange={(e) => {
                        setGym(e.target.value);
                      }}
                    />
                    <datalist id="Gym">
                      {RealEsateAllDetails.Amenity.Gym.map((result) => {
                        return <option value={result}>{result}</option>;
                      })}
                    </datalist>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <label className="mb-0 mt-2">Garden</label>
                    <input
                      className="inpstyle"
                      placeholder="Garden"
                      value={Garden}
                      type="text"
                      list="Garden"
                      style={{
                        padding: "10px",
                        width: "100%",
                        zIndex: "-50px",
                      }}
                      onChange={(e) => {
                        setGarden(e.target.value);
                      }}
                    />
                    <datalist id="Garden">
                      {RealEsateAllDetails.Amenity.Garden.map((result) => {
                        return <option value={result}>{result}</option>;
                      })}
                    </datalist>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <label className="mb-0 mt-2">Pool</label>
                    <input
                      className="inpstyle"
                      placeholder="Pool"
                      value={Pool}
                      type="text"
                      list="Pool"
                      style={{
                        padding: "10px",
                        width: "100%",
                        zIndex: "-50px",
                      }}
                      onChange={(e) => {
                        setPool(e.target.value);
                      }}
                    />
                    <datalist id="Pool">
                      {RealEsateAllDetails.Amenity.Pool.map((result) => {
                        return <option value={result}>{result}</option>;
                      })}
                    </datalist>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <label className="mb-0 mt-2">Lift</label>
                    <input
                      className="inpstyle"
                      placeholder="Lift"
                      value={Lift}
                      type="text"
                      list="Lift"
                      style={{
                        padding: "10px",
                        width: "100%",
                        zIndex: "-50px",
                      }}
                      onChange={(e) => {
                        setLift(e.target.value);
                      }}
                    />
                    <datalist id="Lift">
                      {RealEsateAllDetails.Amenity.Lift.map((result) => {
                        return <option value={result}>{result}</option>;
                      })}
                    </datalist>
                  </div>
                </div>
              ) : null}

              <div className="col-lg-6 col-sm-12">
                <label className="mb-0 mt-2">PhoneNumber</label>
                <input
                  className="inpstyle"
                  placeholder="enter phone number"
                  value={phoneNumber}
                  type="text"
                  style={{ padding: "10px", width: "100%", zIndex: "-50px" }}
                  onChange={(e) => {
                    setphoneNumber(e.target.value);
                  }}
                />

                {!phoneNumber && afterSubmitFlg && (
                  <span className="text-danger ml-2">
                    {CreateAds.PhoneNumber}
                  </span>
                )}
              </div>
            </div>
            {/* <Button className="style1" onClick={() => { getLocationSearchMethod() }} style={{ fontSize: '12px' }}>
            <FaSearchLocation /> current location
          </Button> */}
            <button
              className="h3 mt-2 btn-dark pl-1 rounded-circle"
              onClick={() => {
                getLocationSearchMethod();
              }}
            >
              <FaSearchLocation />
            </button>{" "}
            <strong>Current Location</strong>
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <label className="mb-0 mt-2">state</label>
                <input
                  className="inpstyle"
                  placeholder="state"
                  value={state}
                  type="text"
                  list="state"
                  style={{ padding: "10px", width: "100%", zIndex: "-50px" }}
                  onChange={(e) => {
                    setState(e.target.value);
                    setState(e.target.value);
                  }}
                />
                <datalist id="state">
                  {Object.keys(stateMain)?.map((result) => {
                    return <option value={result}>{result}</option>;
                  })}
                </datalist>
                {/* <input
            className="myinput"
            type="text"
            name="state"
            placeholder="enter state here"
            value={state}
            onChange={(e) => setState(e.target.value)}
          /> */}
                {!state && afterSubmitFlg && (
                  <span className="text-danger ml-2">{CreateAds.State}</span>
                )}
              </div>
              <div className="col-lg-6 col-sm-12">
                <label className="mb-0 mt-2">city</label>
                <input
                  className="myinput"
                  type="text"
                  name="city"
                  placeholder="enter city here"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
                {!city && afterSubmitFlg && (
                  <span className="text-danger ml-2">{CreateAds.City}</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <label className="mb-0 mt-2">locality</label>

                <input
                  className="myinput"
                  type="text"
                  name="locality"
                  placeholder="enter locality here"
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  required
                />
                {!locality && afterSubmitFlg && (
                  <span className="text-danger ml-2">{CreateAds.Locality}</span>
                )}
              </div>

              <div className="col-lg-6 col-sm-12">
                <label className="mb-0 mt-2">zipcode</label>
                <input
                  className="myinput"
                  type="text"
                  name="zipcode"
                  placeholder="enter zipcode here"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  required
                />
                {!zipcode && afterSubmitFlg && (
                  <span className="text-danger ml-2">{CreateAds.ZipCode}</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <label className="mb-0 mt-2">date</label>
                <input
                  className="myinput p-2"
                  style={{ border: "1px solid #8080804d", borderRadius: "5px" }}
                  type="text"
                  name="date"
                  placeholder="enter date here"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  disabled
                />
              </div>
              <div className="col-lg-6 col-sm-12">
                <label className="mb-0 mt-2">user</label>
                <input
                  className="myinput"
                  type="text"
                  name="id"
                  disable={true}
                  placeholder="USER ID"
                  value={name}
                />
              </div>
            </div>
            <div className="col-lg-12 col-sm-12">
              <label className="mb-0 mt-2">description</label>
              <input
                className="myinput"
                type="text"
                name="brand"
                placeholder="enter brand here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              {!description && afterSubmitFlg && (
                <span className="text-danger ml-2">{CreateAds.disc}</span>
              )}
            </div>
            {/* <div className="row">
  <div className="col-lg-6 mb-0 mt-2">
  <Button  className="style1" onClick={()=>{
    setbuttoncheck("free")
  }}>Free</Button>
  </div> */}
            {/* <div className="col-lg-6 mb-0 mt-2">
  <Button  className="style1" onClick={()=>{
    setbuttoncheck("paid")
  }}>Premium</Button>
  </div> */}
            {/* </div> */}
            {/* If want to more row */}
            {/* Start */}
            {/* <div className="row">
            <div className="col-lg-6 col-sm-12">13</div>
            <div className="col-lg-6 col-sm-12">14</div>
          </div> */}
            {/* End */}
            {true ? (
              <Button
                className="btn btn-block style1"
                disabled={false}
                onClick={addNewProduct}
                style={{ marginTop: "32px" }}
                loading={loading}
              >
                Add Product
              </Button>
            ) : (
              <Link to="/payment" className="headline">
                {" "}
                **For Premium ADs
                <button
                  type="button"
                  class="btn style1 btn-block"
                  onClick={handlePay}
                >
                  Pay & Add Product
                </button>
              </Link>
            )}
            {active === "Payments" && <Payments />}
            {/* {
            successvalue?  <div>Succecfully stored</div>:null
          }
            {
            errorvalue?  <div>Error Occure</div>:null
          } */}
            {successvalue ? <div>succesfully stored</div> : null}
            {errorvalue ? <div>Error</div> : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default EdistAds;
