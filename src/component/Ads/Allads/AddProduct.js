import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Checkbox } from "antd";
import Payments from "../Payment/Payments";
import "./AddProducts.css";
import validator from "validator";
import { Image, Container, Row, Col } from "react-bootstrap";
import "../Allads/ImageUpload/ImageUpload.css";
import { FaCut } from "react-icons/fa";
import "./AddProducts.css";
import { DatePicker, Space, Select, Spin, Alert } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import { useGeolocated } from "react-geolocated";
import { Button, Modal } from "antd";
import {
  Category,
  Electronics,
  Furniture,
  Pets,
  Cars,
  Bikes,
  Services,
  Mobiles,
  localUrl,
  stateMain,
  subcategoryRealEstateBuy,
  subcategoryRealEstateRent,
  subcategoryType1,
  url,
  School,
  College,
  Engine,
  Year,
  Jobs,
} from "../../env";
import { decrypt } from "../../Base/encryptDecrypt/encryptDecrypt";
import { isMobile } from "react-device-detect";

// import Success from "../../Pages/success/success";
// import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import ImageUpload from "./ImageUpload/ImageUpload";
// import { SignalWifiStatusbarNullSharp } from "@mui/icons-material";
// import Spiner from "../../Spiner";
import MultiImageInput from "react-multiple-image-input";
import { CreateAds } from "../../../error/errorMessage";

import { UserContext } from "../../../App";
import GoogleAutoComplteforAddProduct from "../../Home/GoogleAutoComplte/GoogleAutoComplteforAddProduct";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../../store/Track/trackUserSlice";
import { addActivePlan } from "../../../store/activePlanSlice";
import SubcategoryCommonInput from "../../../Shared/SubCategory/subcategoryCommonInput";
import { subCategoryInput } from "../../../Model/SubCategoryCons";
import "antd/dist/antd.css";
import { HolaAutoComplete } from "../components/HolaAutoComplete";
import { LocalSeeRounded } from "@mui/icons-material";
import { getUserPlan } from "../../../store/allPlanDetails";
import axios from "axios";
import { BsExclamationTriangle } from "react-icons/bs";



const array = [];
console.log("!!! 747 array,", array);

const mobileStyle = {
  width: "100%",
  // margin: "5px",
  justifyContent: "center",
};
const desktopStyle = {
  width: 300,
  //  margin: "5px",
};
const mobileStyle1 = {
  padding: "1px",
};
const desktopStyle1 = {
  padding: "50px",
  //  margin: "5px",
};
const AddProduct = (props) => {
  const disptach = useDispatch();
  useEffect(() => {
    disptach(add({ view: ["contactForm"] }));
  }, []);

  //loading1 button
  //  const [loading1s, setloadings] = useState<boolean[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [visible, setVisible] = useState(false);
  // const [style1, setStyle1] = useState({color:"red!important"});
  // const [style2, setStyle2] = useState("cont");
  // const [buttoncheck,setbuttoncheck]=useState(null)

  const dataUser = useContext(UserContext);

  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
  };
  const [rentErr, setRentErr] = useState(false);
  const [typeErr, setTypeErr] = useState(false);
  const [newError, setNewError] = useState(false);
  const [cityErr, setCityErr] = useState(false);
  const [catErr, setCatErr] = useState(false);
  const [subCat, setSubCat] = useState(false);
  const [afterSubmitFlg, setAfterSubmitflag] = useState(false);
  const [images, setImages] = useState({});
  const [id, setId] = useState();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [jobprice, setJobPrice] = useState(10);
  const [jobtags, setJobTags] = useState("asa");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(""); //13
  const [subcategoryForAll, setSubcategoryForAll] = useState("");
  const [brand, setBrand] = useState("");
  const [condition, setCondition] = useState("Good");
  const [state, setState] = useState("");
  const [city, setCity] = useState(null);
  const [locality, setLocality] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [date, setDate] = useState("");
  const [active, setActive] = useState("DashAds");
  const [loading1, setloading1] = useState(false);
  //loader
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState(null);
  const [storeadsFlag, setstoreadsFlag] = useState(false);
  const [realEsateSubCategory, setrealEsateSubCategory] = useState(null);

  const [subCategoryValue, setsubCategoryValue] = useState(null); //28
  const [subCategoryType, setsubCategoryType] = useState(null);
  const userDataValue = localStorage.getItem("userdata")
    ? decrypt("userdata")
    : null;
  const [successvalue, setSuccessValue] = useState(false);
  const [errorvalue, setErrorValue] = useState(false);
  const [message, setMessage] = useState(null);
  const [MoreImage, setMoreImage] = useState(false);
  const [phoneNumber, setphoneNumber] = useState("");
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

  const [formDisable, setFormDisable] = useState(true);
  // when ads limit over

  const [adsLimitCheck, setAdsLimitCheck] = useState(false);
  const [currentSelectedplan, setcurrentSelectedplan] = useState(null);

  //label change code
  const [labelBrand, setLableBrand] = useState("Brand");
  useEffect(() => {
    setLableBrand(subCategoryValue === "Animal" ? "Breed" : "Brand");
  }, [subCategoryValue]);
  const [colorCheck, setcolor] = useState(null);
  const [sizeCheck, setsize] = useState(null);

  const [oldPetsCheck, setoldPets] = useState(null);

  // state error
  //checkbox

  var planCategory =
    dataUser?.activePlan[dataUser?.activePlan?.length - 1]?.fields?.category;

  // all ads data

  const [allAdsCount, setAllAdsCount] = useState([]);

  // userPlan

  const { loading, data } = useSelector((state) => state.planData);

  console.log("~~~databyplan187", data);

  // for change plan
  const [updateAds_left, setUpdateAds_left] = useState(null);
  const [updateCategory, setUpdateCategory] = useState(null);
  const [updateFeatured_ads, setUpdateFeatured_ads] = useState(null);
  const [updateAds_limit, setUpdateAds_limit] = useState(null);
  const [updateTop_listing, setUpdateTop_listing] = useState(null);
  const [updateSupport, setUpdateSupport] = useState(null);
  const [updateAds_timimg, setUpdateAds_timimg] = useState(null);
  let userid = localStorage.getItem("userid");
  // let userid=localStorage.getItem("userid")
  // aminities checkbox value
  const [aminities, setAminities] = useState([]);

  console.log("aminites", aminities);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserPlan(userid));
  }, []);
  const getData = async () => {
    let headersList = {
      Accept: "*/*",
    };

    let bodyContent = new FormData();
    bodyContent.append("user", userid);

    let response = await fetch(localUrl + "adsapi/allPlanData", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });
    let data = await response.json();
    setAllAdsCount(data);
  };
  const [updateState, setUpdateState] = useState(null);
  const [cityWithState, setCityWithState] = useState(null);
  useEffect(() => {
    Object.keys(stateMain)?.filter((val) => {
      if (val === updateState) {
        setCityWithState(stateMain[val]);
      }
    });
  }, [updateState]);
  useEffect(() => {
    getData();
  }, []);

  const [dataByPlan, setDataByplan] = useState([]);
  const [plan, setPlan] = useState("");
  const [adsCategory, setAdsCategory] = useState("");

  const [dayslimit, setDaysLimit] = useState(null);
  const [planCategory1, setPlanCategory] = useState(null);
  const [planType, setPlanTpye] = useState(null);
  const [expireData, setExpireDate] = useState(null);
  // error for without choosing plan
  const [planError, setPlanError] = useState(false);
  //set new loader
  const [newLoader, setNewLoader] = useState(false);

  // set New modal
  const [openNewModal, setOpenNewModal] = useState(false);

  useEffect(() => {
    if (plan !== "") {
      setAdsCategory(data?.postAdsForm[plan]?.category[0]);
    }
  }, [plan]);

  useEffect(() => {
    setCity(null);
  }, [state]);

  useEffect(() => {
    setsubCategoryValue(null);
  }, [category]);

  useEffect(() => {
    if (adsCategory !== "" && plan !== "") {
      let days = data?.postAdsForm?.[plan].days;
      setDaysLimit(days);
      setPlanCategory(adsCategory);
      setPlanTpye(plan);
      setExpireDate(false);
      setPlanError(false);
    }
  }, [adsCategory]);

  useEffect(() => {
    console.log(data.leftPlan, "jj");
    var today = new Date();

    var datevalue =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    console.log(datevalue);

    setDate(datevalue);
  }, []);
  // const handleSetVisible = () => {
  //   setVisible(true);
  // };

  // const maxNumber = 69;

  // const onChange = (imageList, addUpdateIndex) => {
  //   // data for submit
  //   console.log("~~~~~", imageList, addUpdateIndex);
  //   setImages(imageList);
  // };
  // const hideModal = () => {
  //   setVisible(false);
  // };
  // const onUpload = (data) => {
  //   console.log("Upload files", data);
  // };
  // const onSelect = (data) => {
  //   console.log("Select files", data);
  // };
  // const onRemove = (id) => {
  //   console.log("Remove image id", id);
  // };

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
    formdata["locality"] = dataUser?.locality;
    formdata["zip_code"] = zipcode;
    formdata["user"] = id;

    if (image !== null) {
      formdata["image"] = image;
    }
    console.log("checking value", formdata);
    localStorage.setItem("payAdsData", JSON.stringify(formdata));
  };
  const name = userDataValue?.name;
  const selectShortlistedApplicant = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;

    setrealEsateSubCategory(value);
    if (checked) {
      console.log("checkined");
    } else {
      // setfeatureTrue(null)
      console.log("//unchecked");
    }
  };
  const [categorysubCategoryFlag, setcategorysubCategoryFlag] = useState(false);
  // if(category=="RealEstate"){
  //   setcategorysubCategoryFlag(true)
  // }
  // const [lat ,setLat] =useState(null)
  // const [long ,setLong]=useState(null)
  const selector = useSelector((state) => state.activePlan);
  const user1 = useContext(UserContext);
  useEffect(() => {
    console.log("##pricing plan ,selector ", selector, user1.pricing);
    if (parseInt(dataUser?.activePlan) <= 0) {
      setFormDisable(false);
    }
  }, [selector]);

  const selectorExtraSlice = useSelector(
    (state) => state.adsPostingExtraFiledSlice
  );
  useEffect(() => {
    console.log("#### checking add product ", selectorExtraSlice);
  }, [selectorExtraSlice]);
  useEffect(() => {
    if (true) {
      var formdata = new FormData();
      formdata.append("user", localStorage.getItem("userid"));

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch(localUrl + "adsapi/getPricingViews", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log("## pricing service response result", result);
          disptach(addActivePlan({ plan: result }));
          dataUser.setActivePlan(result);
        })
        .catch((error) => console.log("error", error));
    }
    console.log("###value user active plan", dataUser?.activePlan);
  }, []);
  // useEffect(() => {
  //   getLocationSearchMethod();
  // }, []);
  const getLocationSearchMethod = () => {
    const options = {
      method: "GET",
      url: "https://google-maps-geocoding.p.rapidapi.com/geocode/json",
      params: {
        address: dataUser?.locality,
        language: "en",
      },
      headers: {
        "X-RapidAPI-Key": "7fded38e7emsh3c4fb60f3b8017cp1c084bjsn32180c499f5f",
        "X-RapidAPI-Host": "google-maps-geocoding.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function(response) {
        console.log(response.data);

        console.log(
          "lat long ",
          response.data.results[0].geometry.location.lat,
          response.data.results[0].geometry.location.lng
        );

        setLat(response.data.results[0].geometry.location.lat);
        setLong(response.data.results[0].geometry.location.lng);
        // localStorage.setItem(
        //   "lat",
        //   response.data.results[0].geometry.location.lat
        // );
        // localStorage.setItem(
        //   "long",
        //   response.data.results[0].geometry.location.lng
        // );
      })
      .catch(function(error) {
        console.error(error);
      });
    // if (coords?.coords) {
    //   setLat(coords?.coords?.latitude);
    //   setLong(coords?.coords?.longitude);
    //   console.log("lcoation detecting", coords);

    //   const url =
    //     "https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?lat=" +
    //     "48.85824" +
    //     "&lng=" +
    //     "2.29451";
    //   const options = {
    //     method: "GET",
    //     headers: {
    //       "X-RapidAPI-Key":
    //         "7fded38e7emsh3c4fb60f3b8017cp1c084bjsn32180c499f5f",
    //       "X-RapidAPI-Host":
    //         "address-from-to-latitude-longitude.p.rapidapi.com",
    //     },
    //   };
    //   setloading1(true);
    //   fetch(url, options)
    //     .then((res) => res.json())
    //     .then((json) => {
    //       console.log("location fetching ", json);
    //       setState(json.Results[0].region);
    //       setCity(json.Results[0].city);
    //       setLocality(json.Results[0].address);
    //       setZipcode(json.Results[0].postalcode);
    //       setloading1(false);
    //       setError(null);
    //     })
    //     .catch((err) => setError("Failed to get location.."));
    //   setloading1(false);
    // }
  };

  // const updateCurrentPlan = (props) => {
  //   debugger;
  //   let userdataid = props?.toString();
  //   var formdata = new FormData();
  //   formdata.append("user", userdataid);

  //   var requestOptions = {
  //     method: "POST",
  //     body: formdata,
  //     redirect: "follow",
  //   };

  //   fetch(url + "api/adsapi/updatePlanLimit", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // };
  const qrcodeGenrate = (props) => {
    console.log("|datauser vsalue", dataUser?.activePlan);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxMTQ1MzkwLCJpYXQiOjE2NTk2MDkzOTAsImp0aSI6IjM5MzJjZjJkZTYyNTQwMjRiNTEyZDk4ZTE4ZDM1Mjk3IiwidXNlcl9pZCI6MjJ9.6uTC3ZTlxdqyhBewkVN5O4MduQ6O6YCNB6p9QJhOF3w"
    );

    var formdata = new FormData();
    formdata.append("product", props);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "api/user/qrCodeAds", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const imageUpload = (props) => {
    setloading1(true);
    setNewLoader(true);
    qrcodeGenrate(props);
    console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW", images);
    for (var file in images) {
      console.log(images[file]);

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
          setloading1(true);
          setNewLoader(false);
          console.log(result);
          setOpenNewModal(true);
          // navigate(`/ads-listing/${props}/`);
        })
        .catch((error) => {
          setloading1(true);
          setNewLoader(false);
          setError("Somethig went wrong..");
        });
    }
    setloading1(false);
  };

  const [ErrorExtraField, setErrorExtraField] = useState(false);
  useEffect(() => {
    if (category === "Jobs") {
      setPrice(jobprice);
      setTags(jobtags);
    } else {
      setPrice("");
      setTags("");
    }
  }, [category]);

  const addNewProduct = async () => {
    setNewLoader(true);

    setIsLoading(true);
    var aKeys = Object.keys(finalObj).sort();
    var bKeys = Object.keys(obj).sort();

    if (!(JSON.stringify(aKeys) === JSON.stringify(bKeys))) {
      setErrorExtraField(true);
      setAdsLimitCheck(true);
      setIsLoading(false);
    } else {
      setErrorExtraField(false);
      setstoreadsFlag(true);
      // if (dataUser?.activePlan[0]?.fields?.adsLeft == 0) {
      //   console.log("~~~ plan is zero");
      //   setAdsLimitCheck(true);
      // } else
      if (
        expireData ||
        !("0" in images) ||
        !title ||
        !tags ||
        !city ||
        !description ||
        !category ||
        !state ||
        // !dataUser?.locality ||
        !zipcode ||
        zipcode.length < 6 ||
        !phoneNumber ||
        phoneNumber.length < 10
      ) {
        setAfterSubmitflag(true);
        setError("* Please fill this field..");
        setNewLoader(false);
        setIsLoading(false);
      } else if (!data.leftPlan.length) {
        console.log("hgh");
        showModal();
        setIsLoading(false);
      } else {
        let formdata = new FormData();
        if (true) {
          setNewLoader(false);
          for (var file in images) {
            formdata.append("image", images[file]);
            console.log("~~~image");
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
        formdata.append("Engine", Engine);
        formdata.append("Year", Year);
        formdata.append("condition", condition);
        formdata.append("state", state);
        formdata.append("City", city);
        // formdata.append("locality", dataUser?.locality);
        formdata.append("locality", "aknvsubdvj");

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

        formdata.append("colorCheck", colorCheck);
        formdata.append("sizeCheck", sizeCheck);
        formdata.append("School", School);
        formdata.append("College", College);

        formdata.append("oldPetsCheck", oldPetsCheck);
        // for chat purpose
        formdata.append("uuid", localStorage.getItem("uuid"));
        formdata.append("date_created", date);
        formdata.append("PlanCategory", updateCategory);
        formdata.append("featured_ads", updateFeatured_ads);
        formdata.append("ads_limit", updateAds_limit);
        formdata.append("ads_timing", updateAds_timimg);
        formdata.append("top_listing", updateTop_listing);
        formdata.append("support", updateSupport);

        formdata.append("adsType", planCategory1);
        formdata.append("plan", planType);
        formdata.append("DaysLimit", dayslimit);
        formdata.append("expiry", expireData);
        // dayslimit, planCategory1, planType, expireData

        formdata.append("extraField", JSON.stringify(finalObj));

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: formdata,
          redirect: "follow",
        };
        setloading1(true);
        fetch(url + "api/adsapi/", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            setNewLoader(false);
            setSuccessValue(true);
            setErrorValue(false);
            if (result?.detail) {
              setErrorValue(true);
              setSuccessValue(false);
              alert("token expire");
              localStorage.removeItem("access_token");
              navigate("/");
              setloading1(false);
            }
            console.log("result", result);
            if (result.status !== "OK" && result?.DaysLimit && result?.expiry) {
              setPlanError(true);
            } else if (!result?.id) {
              alert("Ads not posted");
            } else {
              imageUpload(result.id);
            }
            setIsLoading(false);
            console.log(result);
          })
          .catch((error) => {
            //isloading false
            setIsLoading(false);
            setloading1(false);
            setError("Something went wrong! Please come after Sometimes..");
            setErrorValue(true);
            setSuccessValue(false);
            setNewLoader(false);
            console.log("error", error);
          });
      }
      setstoreadsFlag(false);
      setloading1(false);
      // setIsLoading(false);
    }
  };
  const [files, setFiles] = useState([]);
  ///function for multiple image upload
  const fileSelectedHandler = (e) => {
    console.log("imag efiles that one", e.target.files);
    files.push(e.target.files[0]);
    setFiles(files);
    console.log("!!!!!!!!!!!state", files);
  };

  useEffect(() => {
    console.log("@@@@@  datause.locality", dataUser?.locality);
    if (dataUser?.locality) {
      getLocationSearchMethod();
    }
  }, [dataUser?.locality]);
  useEffect(() => {
    var today = new Date();
    var datevalue =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    console.log(datevalue);
    setDate(datevalue);
  }, []);

  //for adding multiple values their

  const [finalObj, SetFinalObj] = useState({});
  const [obj, setObj] = useState({});
  const [extraFeildToggle, setExtraFeildToggle] = useState(false);
  useEffect(() => {
    if (subCategoryValue && subCategoryInput[category] !== undefined) {
      let subcategoryy = subCategoryInput[category];
      if (subcategoryy[subCategoryValue] !== undefined) {
        setExtraFeildToggle(true);
        let values = subcategoryy[subCategoryValue];
        let obj1 = values;
        Object.keys(obj1).forEach((key) => {
          let varkey = [];
          varkey = obj1[key].map((result) => {
            if (typeof result === "object" && result !== null) {
              return result;
            } else {
              return { value: result };
            }
          });
          obj1[key] = varkey;
        });

        console.log(obj1, subcategoryy, subcategoryy[subCategoryValue]);
        setObj(obj1);
      } else {
        setExtraFeildToggle(false);
      }
    } else {
      setExtraFeildToggle(false);
    }
  }, [subCategoryValue]);

  useEffect(
    (e) => {
      console.log("!!!category changes");
      // setsubCategoryType(e.currentTarget)
    },
    [category]
  );
  const onChangeplan = (e) => {
    setcurrentSelectedplan(e.target.value);
    console.log(`checked = ${e.target.value}`);
  };
  console.log("obj", obj);
  const style = {
    position: "fixed",
    top: "50%",
    left: "60%",
    transform: "translate(-50%, -50%)",
  };
  document.title = "RotateKey - AddProducts";
  const [change, setChange] = useState("1");
  const [changeState, setChangeState] = useState("2");
  const [changeCity, setChangeCity] = useState("1");
  const [changeSubCat, setChangeSubCat] = useState("1");
  const [subCateReal, setSubCateReal] = useState("1");
  const [subCateRealType, setSubCateRealType] = useState("1");

  return (
    <div className="container shadow bg-white">
      {/* <Spin tip="Loading..." spinning={newLoader} /> */}
      {!formDisable && <h2 className="text-danger">Your plan has expired</h2>}

      <fieldset disabled={!formDisable}>
        <div>
          <div
            className="white mx-auto"
            style={isMobile ? mobileStyle1 : desktopStyle1}
          >
            <h1 style={{ fontSize: "30px" }}>Add A Products</h1>

            <div className="form-group ">
              {/* <label>Main Banner Image</label> */}
              {/* <input
             
              type="file" 
              className="form-control"
              onChange={(e) => setImage(e.target.files[0])}
            /> */}
            </div>
            <div className="row p-2">
              <div className="col-lg-12">
                <label>Upload Images</label>
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
              {!("0" in images) && (
                <small className="text-danger ml-2">{error}</small>
              )}

              {/* <div className="col-lg-6 col-sm-12">
              <label>Video upload</label>
              <div style={{border:'2px solid black',padding:'20px'}}>
               <VideoInput height={200}/>
               </div>
              </div> */}
            </div>
            <div className="row p-3" style={{ marginBottom: "-20px" }}>
              <div className="col-lg-6 col-sm-12">
                <label className="mb-0 mt-2">Category</label>

                <Select
                  className="custom-select1"
                  style={{
                    // padding: "10px",
                    width: "100%",
                    zIndex: "-10px",
                    // borderRadius: "3px",
                  }}
                  getPopupContainer={(triggerNode) => triggerNode.parentElement}
                  allowClear
                  status={change ? "" : "error"}
                  onChange={(value) => {
                    console.log("1276", value);
                    setChange(value);

                    // if (CategoryList.includes(value)) {
                    //   setCatErr(true);
                    // } else {
                    //   setCatErr(false);

                    //   console.log("not match");
                    // }

                    setCategory(value);
                    setcategorysubCategoryFlag(
                      value === "RealEstate" ? true : false
                    );
                    if (category === "RealEstate") {
                      setsubCategoryValue(null);
                      setsubCategoryType(null);
                    } else {
                      setsubCategoryValue("");
                    }
                  }}
                  showSearch
                  placeholder="Select Category"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? "").includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                  options={CategoryList.map((result) => {
                    return { value: result, label: result };
                  })}
                />
                {/* <input
                  className="inpstyle"
                  placeholder="category"
                  type="text"
                  list="category"
                  onKeyDown={(e) =>
                    [
                      "e",
                      "E",
                      "+",
                      "-",
                      ".",
                      "@",
                      "#",
                      "%",
                      "$",
                      ";",
                      ">",
                      "?",
                      "&",
                      "^",
                      "!",
                      "*",
                      "(",
                      ")",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                    ].includes(e.key) && e.preventDefault()
                  }
                  style={{
                    padding: "7px",
                    width: "100%",
                    zIndex: "-50px",
                    borderRadius: "3px",
                    position: "relative",
                  }}
                  onChange={(e) => {
                    console.log("1276", e.target.value);

                    if (CategoryList.includes(e.target.value)) {
                      setCatErr(true);
                    } else {
                      setCatErr(false);

                      console.log("not match");
                    }

                    setCategory(e.target.value);
                    setcategorysubCategoryFlag(
                      e.target.value === "RealEstate" ? true : false
                    );
                    if (category === "RealEstate") {
                      setsubCategoryValue(null);
                      setsubCategoryType(null);
                    } else {
                      setsubCategoryValue("");
                    }
                  }}
                /> */}

                {/* <datalist id="category">
                  {CategoryList.map((result) => {
                    return <option value={result}>{result}</option>;
                  })}
                </datalist> */}
                {!change && (
                  <small className="text-danger ml-2">
                    *Select right category
                  </small>
                )}
                {change == false ? (
                  <span className="text-danger ml-2">
                    select right category
                  </span>
                ) : change && !category && afterSubmitFlg ? (
                  <small className="text-danger ml-2">
                    {CreateAds.Category}
                  </small>
                ) : null}

                {/* {!category && afterSubmitFlg && <span className="text-danger ml-2">{CreateAds.Category}</span>} */}
              </div>

              {category != "RealEstate" ? (
                <div className="col-lg-6 col-sm-12">
                  <label className="mb-0 mt-2">Sub Category</label>

                  <Select
                    className="custom-select1"
                    style={{
                      // padding: "10px",
                      width: "100%",
                      zIndex: "-10px",
                      // borderRadius: "3px",
                    }}
                    getPopupContainer={(triggerNode) =>
                      triggerNode.parentElement
                    }
                    allowClear
                    value={subCategoryValue}
                    status={changeSubCat ? "" : "error"}
                    onChange={(value) => {
                      console.log("1276", value);

                      setsubCategoryValue("");
                      setTimeout(() => {
                        setsubCategoryValue(value);
                      }, 0);

                      setChangeSubCat(value);

                      SetFinalObj({});
                    }}
                    showSearch
                    placeholder="Select Sub Category"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={
                      category === "Furniture"
                        ? Furniture.sort().map((result) => {
                            return { value: result, label: result };
                          })
                        : category == "Electronics"
                        ? Electronics.sort().map((result) => {
                            return { value: result, label: result };
                          })
                        : category == "Pets"
                        ? Pets.sort().map((result) => {
                            /*{/* :category=="Others"?Others.map(result=>{return <option value={result} >{result}</option>})}*/
                            return { value: result, label: result };
                          })
                        : category == "Cars"
                        ? Cars.sort().map((result) => {
                            return { value: result, label: result };
                          })
                        : category == "Mobiles"
                        ? Mobiles.sort().map((result) => {
                            return { value: result, label: result };
                          })
                        : category == "Bikes"
                        ? Bikes.sort().map((result) => {
                            return { value: result, label: result };
                          })
                        : category == "Services"
                        ? Services.sort().map((result) => {
                            return { value: result, label: result };
                          })
                        : null
                    }
                  />

                  {/* <input
                    className="inpstyle"
                    placeholder="Sub Category"
                    value={subCategoryValue}
                    type="text"
                    list="subcategoryForAll"
                    onKeyDown={(e) =>
                      [
                        "e",
                        "E",
                        "+",
                        "-",
                        ".",
                        "@",
                        "#",
                        "%",
                        "$",
                        ";",
                        ">",
                        "?",
                        "&",
                        "^",
                        "!",
                        "*",
                        "(",
                        ")",
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                      ].includes(e.key) && e.preventDefault()
                    }
                    style={{
                      padding: "7px",
                      borderRadius: "3px",
                      width: "100%",
                      zIndex: "-50px",
                    }}
                    onChange={(e) => {
                      console.log("1276", e.target.value);

                      {
                        [""] ? setSubCat(true) : setSubCat(false);
                      }

                      setsubCategoryValue(e.target.value);
                      SetFinalObj({});
                    }}
                  /> */}

                  {/* <datalist id="subcategoryForAll">
                    {category === "Furniture"
                      ? Furniture.sort().map((result) => {
                          return (
                            <option value={result.trim()}>{result}</option>
                          );
                        })
                      : category == "Furniture"
                      ? Furniture.sort().map((result) => {
                          return (
                            <option value={result.trim()}>{result}</option>
                          );
                        })
                      : category == "Electronics"
                      ? Electronics.sort().map((result) => {
                          return (
                            <option value={result.trim()}>{result}</option>
                          );
                        })
                      : category == "Pets"
                      ? Pets.sort().map((result) => {
                        
                          return (
                            <option value={result.trim()}>{result}</option>
                          );
                        })
                      : category == "Cars"
                      ? Cars.sort().map((result) => {
                          return (
                            <option value={result.trim()}>{result}</option>
                          );
                        })
                      : category == "Mobiles"
                      ? Mobiles.sort().map((result) => {
                          return (
                            <option value={result.trim()}>{result}</option>
                          );
                        })
                      : category == "Bikes"
                      ? Bikes.sort().map((result) => {
                          return (
                            <option value={result.trim()}>{result}</option>
                          );
                        })
                      : category == ""
                      ? [" "].map((result) => {
                          return <option>{result}</option>;
                        })
                      : null}
                  </datalist> */}
                  {!changeSubCat && (
                    <small className="text-danger ml-2">
                      *Select right sub category
                    </small>
                  )}
                  {subcategoryForAll && subCat == false ? (
                    <small className="text-danger ml-2">
                      *Select right category
                    </small>
                  ) : changeSubCat && !subcategoryForAll && afterSubmitFlg ? (
                    <small className="text-danger ml-2">
                      *Please Enter The Sub Category
                    </small>
                  ) : null}
                </div>
              ) : null}

              {categorysubCategoryFlag ? (
                <div className="col-lg-6 col-sm-12">
                  <label style={{ marginBottom: "0px", marginTop: "8px" }}>
                    Sub Category
                  </label>

                  {/* <input
                    className="inpstyle"
                    placeholder="Sub Category"
                    type="text"
                    list="subcategoryType"
                    style={{ width: "100%", zIndex: "-50px", padding: "6px" }}
                    onChange={(e) => {
                      setsubCategoryType(e.target.value);
                      setExtraFeildToggle(false);
                    }}
                  />
                  <datalist id="subcategoryType">
                    {subcategoryType1.map((result) => {
                      return <option value={result}>{result}</option>;
                    })}
                  </datalist> */}

                  <Select
                    className="custom-select1"
                    style={{
                      // padding: "10px",
                      width: "100%",
                      zIndex: "-10px",
                      // borderRadius: "3px",
                    }}
                    getPopupContainer={(triggerNode) =>
                      triggerNode.parentElement
                    }
                    allowClear
                    status={subCateReal ? "" : "error"}
                    onChange={(value) => {
                      setSubCateReal(value);
                      // setsubCategoryType(value);

                      // setSubCateRealType(value);
                      // setsubCategoryValue(value);
                      setsubCategoryType("");
                      setTimeout(() => {
                        setsubCategoryType(value);
                      }, 0);

                      setExtraFeildToggle(false);
                    }}
                    showSearch
                    placeholder="Select Sub Category"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={subcategoryType1.map((result) => {
                      return { value: result, label: result };
                    })}
                  />
                </div>
              ) : null}
              {/* {!subCateReal && change && (
                <small className="text-danger ml-2">
                  *Select right sub category1
                </small>
              )} */}
              {/* {subCategoryValue?
       <SubcategoryCommonInput category={category} subcategory={subCategoryValue}/>:null} */}

              {subCategoryType == "Residential" ? (
                <div className="col-lg-6 col-sm-12">
                  <label style={{ marginBottom: "0px", marginTop: "15px" }}>
                    Type
                  </label>

                  {/* <input
                    className="inpstyle"
                    placeholder="subcategoryRealEstateBuy"
                    type="text"
                    list="subcategoryRealEstateBuy"
                    style={{ width: "100%", zIndex: "-50px" }}
                    onKeyDown={(e) =>
                      [
                        "e",
                        "E",
                        "+",
                        "-",
                        ".",
                        "@",
                        "#",
                        "%",
                        "$",
                        ";",
                        ">",
                        "?",
                        "&",
                        "^",
                        "!",
                        "*",
                        "(",
                        ")",
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                      ].includes(e.key) && e.preventDefault()
                    }
                    onChange={(e) => {
                      if (subcategoryRealEstateBuy.includes(e.target.value)) {
                        setTypeErr(true);
                      } else {
                        setTypeErr(false);

                        console.log("not match");
                      }

                      setsubCategoryValue(e.target.value);
                    }}
                  /> */}
                  {/* <datalist id="subcategoryRealEstateBuy">
                    {subcategoryRealEstateBuy.map((result) => {
                      return <option value={result}>{result}</option>;
                    })}
                  </datalist> */}

                  <Select
                    className="custom-select1"
                    style={{
                      // padding: "10px",
                      width: "100%",
                      zIndex: "-10px",
                      // borderRadius: "3px",
                    }}
                    getPopupContainer={(triggerNode) =>
                      triggerNode.parentElement
                    }
                    allowClear
                    status={subCateRealType ? "" : "error"}
                    onChange={(value) => {
                      setSubCateRealType(value);
                      // setsubCategoryValue(value);
                      setsubCategoryValue("");
                      setTimeout(() => {
                        setsubCategoryValue(value);
                      }, 0);
                    }}
                    showSearch
                    placeholder="Select Sub Category Real Estate "
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={subcategoryRealEstateBuy.map((result) => {
                      return { value: result, label: result };
                    })}
                  />
                  {!subCateRealType && (
                    <small className="text-danger ml-2">
                      *Select right sub category type
                    </small>
                  )}
                  {subcategoryRealEstateBuy == false ? (
                    <small className="text-danger ml-2">
                      *Select right type
                    </small>
                  ) : !subcategoryRealEstateBuy && afterSubmitFlg ? (
                    <small className="text-danger ml-2">*Enter type</small>
                  ) : null}
                </div>
              ) : subCategoryType == "Commercial" ? (
                <div className="col-lg-6 col-sm-12">
                  <label style={{ marginBottom: "0px", marginTop: "15px" }}>
                    Type
                  </label>

                  {/* <input
                    className="inpstyle"
                    placeholder="subcategoryRealEstateRent"
                    type="text"
                    list="subcategoryRealEstateRent"
                    style={{ width: "100%", zIndex: "-50px" }}
                    onKeyDown={(e) =>
                      [
                        "e",
                        "E",
                        "+",
                        "-",
                        ".",
                        "@",
                        "#",
                        "%",
                        "$",
                        ";",
                        ">",
                        "?",
                        "&",
                        "^",
                        "!",
                        "*",
                        "(",
                        ")",
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                      ].includes(e.key) && e.preventDefault()
                    }
                    onChange={(e) => {
                      if (subcategoryRealEstateRent.includes(e.target.value)) {
                        setRentErr(true);
                      } else {
                        setRentErr(false);

                        console.log("not match");
                      }
                      setsubCategoryValue(e.target.value);
                    }}
                  />
                  <datalist id="subcategoryRealEstateRent">
                    {subcategoryRealEstateRent.map((result) => {
                      return <option value={result}>{result}</option>;
                    })}
                  </datalist> */}
                  <Select
                    className="custom-select1"
                    style={{
                      // padding: "10px",
                      width: "100%",
                      zIndex: "-10px",
                      // borderRadius: "3px",
                    }}
                    getPopupContainer={(triggerNode) =>
                      triggerNode.parentElement
                    }
                    allowClear
                    status={subCateRealType ? "" : "error"}
                    onChange={(value) => {
                      // setSubCateRealType(value);
                      // setsubCategoryValue(value);

                      setSubCateRealType(value);
                      // setsubCategoryValue(value);
                      setsubCategoryValue("");
                      setTimeout(() => {
                        setsubCategoryValue(value);
                      }, 0);
                    }}
                    showSearch
                    placeholder="Select Sub Category Real Estate "
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={subcategoryRealEstateRent.map((result) => {
                      return { value: result, label: result };
                    })}
                  />
                  {!subCateRealType && (
                    <small className="text-danger ml-2">
                      *Select right sub category type
                    </small>
                  )}

                  {subcategoryRealEstateRent == false ? (
                    <small className="ml-2 text-danger">
                      *Select right type
                    </small>
                  ) : rentErr == true ? null : !subcategoryRealEstateRent ? (
                    <small className="text-danger ml-2">*Enter type</small>
                  ) : null}
                </div>
              ) : subCategoryType == "Residential" ? (
                {
                  /* <div className="col-lg-6 col-sm-12">
                  <label>Enter Here</label>

                  <input
                    className="inpstyle"
                    placeholder="subcategoryRealEstateRent"
                    type="text"
                    list="Others"
                    style={{
                      padding: "12px",
                      width: "100%",
                      zIndex: "-50px",
                    }}
                    onChange={(e) => {
                      setsubCategoryValue(e.target.value);
                    }}
                  />

                  <datalist id="Others">
{Others.map(result=>{
      return <option value={result} >{result}</option>
  })
}
</datalist>
                </div> */
                }
              ) : null}
              <div>
                <Row className="my-2">
                  {(subCategoryValue &&
                    obj &&
                    extraFeildToggle &&
                    category === "RealEstate" &&
                    subCategoryValue === "Rent-Residential") ||
                  (subCategoryValue &&
                    obj &&
                    extraFeildToggle &&
                    category === "RealEstate" &&
                    subCategoryValue === "Rent-Commercial") ? (
                    <div
                      className="mt-2 text-dark"
                      style={{ fontSize: "14px" }}
                    >
                      <span>Property Details</span>
                    </div>
                  ) : (subCategoryValue &&
                      obj &&
                      extraFeildToggle &&
                      category === "RealEstate" &&
                      subCategoryValue === "Buy-Residential") ||
                    (subCategoryValue &&
                      obj &&
                      extraFeildToggle &&
                      category === "RealEstate" &&
                      subCategoryValue === "Buy-Commercial") ? (
                    <div
                      className="mt-2 text-dark"
                      style={{ fontSize: "14px" }}
                    >
                      <span> Buy Property Details</span>
                    </div>
                  ) : subCategoryValue &&
                    obj &&
                    extraFeildToggle &&
                    category === "RealEstate" &&
                    subCategoryValue === "PG-Hostel" ? (
                    <div
                      className="mt-2 text-dark"
                      style={{ fontSize: "14px" }}
                    >
                      <span> PG Details</span>
                    </div>
                  ) : null}
                  {subCategoryValue && obj && extraFeildToggle
                    ? Object?.keys(obj)?.map((key, index) => {
                        if (
                          (subCategoryValue === "Rent-Residential" &&
                            index < 8) ||
                          (subCategoryValue === "Rent-Commercial" &&
                            index < 7) ||
                          (subCategoryValue === "Buy-Commercial" &&
                            index < 7) ||
                          (subCategoryValue === "Buy-Residential" &&
                            index < 10) ||
                          (subCategoryValue === "PG-Hostel" && index < 6) ||
                          (category !== "RealEstate" && index >= 0)
                        ) {
                          // console.log(
                          //   JSON.stringify(obj[key]) ===
                          //     JSON.stringify(obj[key]),
                          //   "jj"
                          // );
                          console.log(key, "ll");
                          return (
                            <>
                              <Col span={6} style={{ marginTop: "15px" }}>
                                {/* {key === "available amenities" && (
                                  <h1>This is for checking</h1>
                                )} */}
                                {key.includes("Date") ? (
                                  <Space direction="vertical" className="mx-2">
                                    <DatePicker
                                      style={{
                                        width: "300px",
                                        border: "1px solid #00000038",
                                        color: "black",
                                      }}
                                      placeholder={key}
                                      onChange={(date, dateString) => {
                                        finalObj[key] = dateString;
                                        SetFinalObj(finalObj);
                                      }}
                                    />
                                  </Space>
                                ) : key === "available amenities" ? (
                                  <>check</>
                                ) : (
                                  <HolaAutoComplete
                                    getPopupContainer={(trigger) =>
                                      trigger.parentNode
                                    }
                                    style={
                                      isMobile ? mobileStyle : desktopStyle
                                    }
                                    notFoundContent="Please select right field"
                                    options={obj[key]}
                                    placeholder={key}
                                    autoFocus={true}
                                    onChange={(e) => {
                                      finalObj[key] = e;
                                      SetFinalObj(finalObj);
                                    }}
                                    filterOption={(inputValue, option) =>
                                      option.value
                                        .toUpperCase()
                                        .indexOf(inputValue.toUpperCase()) !==
                                      -1
                                    }
                                  />
                                )}
                              </Col>
                            </>
                          );
                        }
                      })
                    : null}
                </Row>

                <Row className="my-1">
                  {(subCategoryValue &&
                    obj &&
                    extraFeildToggle &&
                    category === "RealEstate" &&
                    subCategoryValue === "Rent-Residential") ||
                  (subCategoryValue &&
                    obj &&
                    extraFeildToggle &&
                    category === "RealEstate" &&
                    subCategoryValue === "Rent-Commercial") ? (
                    <div
                      className="mt-2 text-dark"
                      style={{ fontSize: "14px" }}
                    >
                      <span>Rental Property Details</span>
                    </div>
                  ) : (subCategoryValue &&
                      obj &&
                      extraFeildToggle &&
                      category === "RealEstate" &&
                      subCategoryValue === "Buy-Residential") ||
                    (subCategoryValue &&
                      obj &&
                      extraFeildToggle &&
                      category === "RealEstate" &&
                      subCategoryValue === "Buy-Commercial") ? (
                    <div
                      className="mt-2 text-dark"
                      style={{ fontSize: "14px" }}
                    >
                      <span>Buy Property Details</span>
                    </div>
                  ) : subCategoryValue &&
                    obj &&
                    extraFeildToggle &&
                    category === "RealEstate" &&
                    subCategoryValue === "PG-Hostel" ? (
                    <div
                      className="mt-2 text-dark"
                      style={{ fontSize: "14px" }}
                    >
                      <span> PG Room Details</span>
                    </div>
                  ) : null}
                  {subCategoryValue && obj && extraFeildToggle
                    ? Object?.keys(obj)?.map((key, index) => {
                        if (
                          (subCategoryValue === "Rent-Residential" &&
                            index > 7 &&
                            index < 15) ||
                          (subCategoryValue === "Buy-Residential" &&
                            index > 9 &&
                            index < 17) ||
                          (subCategoryValue === "PG-Hostel" &&
                            index > 5 &&
                            index < 10) ||
                          (subCategoryValue === "Rent-Commercial" &&
                            index > 6 &&
                            index < 14) ||
                          (subCategoryValue === "Buy-Commercial" &&
                            index > 6 &&
                            index < 11)
                        ) {
                          return (
                            <>
                              <Col span={6} style={{ marginTop: "15px" }}>
                                {/* {key === "available amenities" && (
                                  <h1>This is for checking</h1>
                                )} */}
                                {key.includes("Date") ? (
                                  <Space direction="vertical" className="mx-2">
                                    <DatePicker
                                      style={{
                                        width: "300px",
                                        border: "1px solid #00000038",
                                        color: "black",
                                      }}
                                      placeholder={key}
                                      onChange={(date, dateString) => {
                                        finalObj[key] = dateString;
                                        SetFinalObj(finalObj);
                                      }}
                                    />
                                  </Space>
                                ) : key === "available amenities" ? (
                                  <>check</>
                                ) : (
                                  <HolaAutoComplete
                                    getPopupContainer={(trigger) =>
                                      trigger.parentNode
                                    }
                                    style={
                                      isMobile ? mobileStyle : desktopStyle
                                    }
                                    notFoundContent="Please select right field"
                                    options={obj[key].sort((a, b) => a - b)}
                                    placeholder={key}
                                    autoFocus={true}
                                    onChange={(e) => {
                                      finalObj[key] = e;
                                      SetFinalObj(finalObj);
                                    }}
                                    filterOption={(inputValue, option) =>
                                      option.value
                                        .toUpperCase()
                                        .indexOf(inputValue.toUpperCase()) !==
                                      -1
                                    }
                                  />
                                )}
                              </Col>
                            </>
                          );
                        }
                      })
                    : null}
                </Row>
                <Row className="my-1">
                  {(subCategoryValue &&
                    obj &&
                    extraFeildToggle &&
                    category === "RealEstate" &&
                    subCategoryValue === "Rent-Residential") ||
                  (subCategoryValue &&
                    obj &&
                    extraFeildToggle &&
                    category === "RealEstate" &&
                    subCategoryValue === "Rent-Commercial") ? (
                    <div
                      className="mt-2 text-dark"
                      style={{ fontSize: "14px" }}
                    >
                      <span>Property Amenities Details</span>
                    </div>
                  ) : (subCategoryValue &&
                      obj &&
                      extraFeildToggle &&
                      category === "RealEstate" &&
                      subCategoryValue === "Buy-Residential") ||
                    (subCategoryValue &&
                      obj &&
                      extraFeildToggle &&
                      category === "RealEstate" &&
                      subCategoryValue === "Buy-Commercial") ? (
                    <div
                      className="mt-2 text-dark"
                      style={{ fontSize: "14px" }}
                    >
                      <span>Property Amenities Details</span>
                    </div>
                  ) : subCategoryValue &&
                    obj &&
                    extraFeildToggle &&
                    category === "RealEstate" &&
                    subCategoryValue === "PG-Hostel" ? (
                    <div
                      className="mt-2 text-dark"
                      style={{ fontSize: "14px" }}
                    >
                      <span> PG Detail Amenities</span>
                    </div>
                  ) : null}
                  {subCategoryValue && obj && extraFeildToggle
                    ? Object?.keys(obj)?.map((key, index) => {
                        if (
                          (subCategoryValue === "Buy-Residential" &&
                            index > 16) ||
                          (subCategoryValue === "Rent-Residential" &&
                            index > 14) ||
                          (subCategoryValue === "PG-Hostel" && index > 9) ||
                          (subCategoryValue === "Rent-Commercial" &&
                            index > 13) ||
                          (subCategoryValue === "Buy-Commercial" && index > 10)
                        ) {
                          console.log(
                            "keys",
                            key === "available amenities" || "PG amenities"
                              ? obj[key].map((val) => val.value)
                              : null
                          );
                          if (key === "available amenities") {
                            return (
                              <div className="d-block">
                                {/* <h5>{key} Choose Available Amenities </h5> */}
                                <p className="p-0 m-0">
                                  Choose Available Amenities{" "}
                                </p>

                                {obj[key]?.map((val) => (
                                  <Checkbox
                                    className="mx-2 my-2"
                                    onClick={(e) => {
                                      if (e.target.checked) {
                                        setAminities([...aminities, val.value]);
                                      } else {
                                        const removeItem = aminities.filter(
                                          (item) => item !== val.value
                                        );
                                        setAminities(removeItem);
                                      }
                                      finalObj[key] = aminities;
                                      SetFinalObj(finalObj);
                                      console.log(finalObj);
                                    }}
                                  >
                                    {val.value}
                                  </Checkbox>
                                ))}
                              </div>
                            );
                          } else if (key === "PG amenities") {
                            console.log("PG amenities");
                            return (
                              <div className="d-block">
                                {/* <h5>{key} Choose Available Amenities </h5> */}
                                <p className="p-0 m-0">
                                  Select Available Amenities
                                </p>

                                {obj[key]?.map((val) => (
                                  <Checkbox
                                    className="mx-2 my-2"
                                    onClick={(e) => {
                                      if (e.target.checked) {
                                        setAminities([...aminities, val.value]);
                                      } else {
                                        const removeItem = aminities.filter(
                                          (item) => item !== val.value
                                        );
                                        setAminities(removeItem);
                                      }
                                      finalObj[key] = aminities;
                                      SetFinalObj(finalObj);
                                      console.log(finalObj);
                                    }}
                                  >
                                    {val.value}
                                  </Checkbox>
                                ))}
                              </div>
                            );
                          } else {
                            return (
                              <Col span={6} style={{ marginTop: "15px" }}>
                                <HolaAutoComplete
                                  getPopupContainer={(trigger) =>
                                    trigger.parentNode
                                  }
                                  style={isMobile ? mobileStyle : desktopStyle}
                                  notFoundContent="Please select right field"
                                  options={obj[key]}
                                  placeholder={key}
                                  autoFocus={true}
                                  onChange={(e) => {
                                    finalObj[key] = e;
                                    SetFinalObj(finalObj);
                                  }}
                                  filterOption={(inputValue, option) =>
                                    option.value
                                      .toUpperCase()
                                      .indexOf(inputValue.toUpperCase()) !== -1
                                  }
                                />
                              </Col>
                            );
                          }
                          return (
                            <>
                              <Col span={6} style={{ marginTop: "15px" }}>
                                {key === "available amenities" ? (
                                  {
                                    /* <div className="d-block">
                                  <h3>{key}</h3>
                                  {obj[key]?.map((val) => (
                                    <Checkbox
                                      className="px-3"
                                      // onChange={(e) => {
                                      //   let push = [];
                                      //   if (e.target.checked) {
                                      //     push.push(val?.value);
                                      //   }
                                      // }}
                                      onClick={(e) => {
                                        if (e.target.checked) {
                                          setAminities([
                                            ...aminities,
                                            val.value,
                                          ]);
                                        } else {
                                          const removeItem = aminities.filter(
                                            (item) => item !== val.value
                                          );
                                          setAminities(removeItem);
                                        }
                                        finalObj[key] = aminities;
                                        SetFinalObj(finalObj);
                                        console.log(finalObj);
                                      }}
                                    >
                                      {val.value}
                                    </Checkbox>
                                  ))}
                                </div> */
                                  }
                                ) : (
                                  <HolaAutoComplete
                                    getPopupContainer={(trigger) =>
                                      trigger.parentNode
                                    }
                                    style={
                                      isMobile ? mobileStyle : desktopStyle
                                    }
                                    notFoundContent="Please select right field"
                                    options={obj[key]}
                                    placeholder={key}
                                    autoFocus={true}
                                    onChange={(e) => {
                                      finalObj[key] = e;
                                      SetFinalObj(finalObj);
                                    }}
                                    filterOption={(inputValue, option) =>
                                      option.value
                                        .toUpperCase()
                                        .indexOf(inputValue.toUpperCase()) !==
                                      -1
                                    }
                                  />
                                )}
                              </Col>
                            </>
                          );
                        }
                      })
                    : null}
                </Row>
              </div>
            </div>
            {/* <div className="row-hover"> */}
            <div className="row p-3" style={{ marginTop: "-40px" }}>
              <div className="col-lg-6 col-sm-12">
                <label className="mb-0 mt-2">Title</label>
                <input
                  className="myinput"
                  type="text"
                  name="title"
                  placeholder="enter title here"
                  value={title}
                  style={{
                    padding: "7px",
                    borderRadius: "3px",
                  }}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {!title && afterSubmitFlg && (
                  <small className="text-danger ml-2">{CreateAds.title}</small>
                )}
              </div>
              <div className="col-lg-6 col-sm-12">
                <label className="mb-0 mt-2">Phone Number</label>
                <input
                  // className="inpstyle"
                  className="myinput"
                  name="phoneNumber"
                  placeholder="enter phone number"
                  maxLength={10}
                  type="number"
                  onInput={(e) => {
                    if (e.target.value.length > e.target.maxLength)
                      e.target.value = e.target.value.slice(
                        0,
                        e.target.maxLength
                      );
                  }}
                  onKeyDown={(e) =>
                    ["e", "E", "+", "-", "."].includes(e.key) &&
                    e.preventDefault()
                  }
                  style={{
                    width: "100%",
                    zIndex: "-50px",
                    border: "1px solid #5d5d5d3d",
                    padding: "7px",
                    borderRadius: "3px",
                  }}
                  onChange={(e) => {
                    setphoneNumber(e.target.value);
                  }}
                />
                {phoneNumber.length < 10 && phoneNumber.length > 0 ? (
                  <small className="text-danger ml-2">Enter valid Number</small>
                ) : phoneNumber.length > 10 ? (
                  <small className="text-danger ml-2">
                    Enter only 10 digit Number
                  </small>
                ) : !phoneNumber && afterSubmitFlg ? (
                  <small className="text-danger ml-2">
                    {CreateAds.PhoneNumber}
                  </small>
                ) : null}
              </div>
            </div>

            <div className="d-flex" style={{ marginTop: "-5px" }}>
              <div className="col-lg-6 col-sm-12">
                <label className="mb-0 mt-2">Price</label>
                <input
                  autoComplete="none"
                  className="myinput"
                  type="number"
                  name="price"
                  placeholder="enter price here"
                  value={price}
                  onKeyDown={(e) =>
                    ["e", "E", "+", "-", "."].includes(e.key) &&
                    e.preventDefault()
                  }
                  style={{
                    border: "1px solid #5d5d5d3d",
                    padding: "7px",
                    borderRadius: "3px",
                  }}
                  onChange={(e) => {
                    /[^0-9a-zA-Z]/.test(setPrice(e.target.value))
                      ? /[^0-9a-zA-Z]/.test(setPrice(e.target.value))
                      : setPrice(e.target.value);
                  }}
                  pattern="/^[0-9a-zA-Z]+$/"
                />
                {!price && afterSubmitFlg && (
                  <small className="text-danger ml-2">{CreateAds.Price}</small>
                )}
              </div>

              <div className="col-lg-6 col-sm-12">
                <label className="mb-0 mt-2">Tags</label>
                <input
                  className="myinput"
                  autoComplete="none"
                  type="text"
                  name="tags"
                  placeholder="enter tags here"
                  value={tags}
                  onChange={(e) => {
                    const { value } = e.target;
                    // for only alphabet
                    const re = /^[A-Z a-z]+$/;
                    // for only numeric
                    //  const re = /^[0-9]+$/;
                    if (value === "" || re.test(value)) {
                      console.log(value);
                      setTags(value);
                    }
                  }}
                  style={{
                    padding: "7px",
                    borderRadius: "3px",
                  }}
                />
                {!tags && afterSubmitFlg && (
                  <small className="text-danger ml-2">{CreateAds.Tags}</small>
                )}
              </div>
            </div>
            {/* <Button className="style1" onClick={() => { getLocationSearchMethod() }} style={{ fontSize: '12px' }}>
            <FaSearchLocation /> current location
          </Button> */}
            {/* <button className="h3 mt-2 btn-dark pl-1 rounded-circle"  onClick={() => { getLocationSearchMethod() }}><FaSearchLocation />
          </button> <strong>Current Location</strong> */}
            <div className="d-flex">
              <div className="col-lg-6 col-sm-12">
                <label className="mb-0 mt-2">State</label>

                <Select
                  className="custom-select1"
                  style={{
                    // padding: "10px",
                    width: "100%",
                    zIndex: "-10px",
                    // borderRadius: "3px",
                  }}
                  autoComplete="none"
                  getPopupContainer={(triggerNode) => triggerNode.parentElement}
                  allowClear
                  status={changeState ? "" : "error"}
                  onChange={(value) => {
                    setChangeState(value);
                    console.log("1553", value);
                    setUpdateState(value);
                    setState(value);
                    setChangeCity("");
                  }}
                  showSearch
                  placeholder="Select State"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? "").includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                  options={Object.keys(stateMain)?.map((result) => {
                    return { value: result, label: result };
                  })}
                />

                {/* <input
                  className="inpstyle"
                  placeholder="state"
                  value={state}
                  type="text"
                  list="state"
                  style={{
                    borderRadius: "3px",
                    padding: "7px",
                    width: "100%",
                    zIndex: "-50px",
                  }}
                  onChange={(e) => {
                    console.log("1553", e.target.value);
                    setUpdateState(e.target.value);
                    if (Object.keys(stateMain)?.includes(e.target.value)) {
                      setNewError(true);
                    } else {
                      setNewError(false);

                      console.log("not match");
                    }

                    setState(e.target.value);
                  }}
                />

                <datalist id="state">
                  {Object.keys(stateMain)?.map((result) => {
                    return <option value={result}>{result}</option>;
                  })}
                </datalist> */}
                {!changeState && (
                  <small className="text-danger ml-2">
                    *Select right state
                  </small>
                )}
                {changeState == false ? (
                  <small className="text-danger ml-2">
                    *Choose right state
                  </small>
                ) : changeState && !state && afterSubmitFlg ? (
                  <small className="text-danger ml-2">{CreateAds.State}</small>
                ) : null}

                {/* {!state && afterSubmitFlg && <span className="text-danger ml-2">{newError==false?"choose right state":newError==true?"good job" :CreateAds.State}</span>} */}
              </div>
              <div className="col-lg-6 col-sm-12">
                <label className="mb-0 mt-2">City</label>

                <Select
                  className="custom-select1"
                  autoComplete="none"
                  style={{
                    // padding: "10px",
                    width: "100%",
                    zIndex: "-10px",
                    // borderRadius: "3px",
                  }}
                  value={city}
                  getPopupContainer={(triggerNode) => triggerNode.parentElement}
                  allowClear
                  status={changeCity ? "" : "error"}
                  onChange={(value) => {
                    setChangeCity(value);
                    console.log("1553", value);

                    // if (Object.keys(stateMain)?.includes(value)) {
                    //   setNewError(true);
                    // } else {
                    //   setNewError(false);

                    //   console.log("not match");
                    // }

                    setCity(value);
                  }}
                  showSearch
                  placeholder="Select City Name"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? "").includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                  options={
                    !changeCity &&
                    updateState &&
                    cityWithState?.map((result) => {
                      return { value: result, label: result };
                    })
                  }
                />
                {/* <input
                  className="myinput"
                  type="text"
                  name="city"
                  list="city"
                  placeholder="enter city here"
                  value={city}
                  style={{
                    borderRadius: "3px",
                    padding: "7px",
                    width: "100%",
                    zIndex: "-50px",
                  }}
                  // onChange={(e) => setCity(e.target.value)}
                  onChange={(e) => {
                    console.log("1276", e.target.value);

                    if (cityWithState.includes(e.target.value)) {
                      setCityErr(true);
                    } else {
                      setCityErr(false);

                      console.log("not match");
                    }

                    setCity(e.target.value);
                  }}
                /> */}

                {/* <datalist id="city">
                  {updateState &&
                    cityWithState?.map((result) => {
                      return <option value={result}>{result}</option>;
                    })}
                </datalist> */}
                {!changeCity && (
                  <small className="text-danger ml-2">*Select right city</small>
                )}
                {city == false ? (
                  <small className="text-danger ml-2">*Choose right city</small>
                ) : changeCity && !city && afterSubmitFlg ? (
                  <small className="text-danger ml-2">{CreateAds.City}</small>
                ) : null}

                {/* {!city && afterSubmitFlg && <span className="text-danger ml-2">{CreateAds.City}</span>} */}
              </div>
            </div>

            <div className="d-flex">
              <div className="col-lg-6 col-sm-12">
                <label className="mb-0 mt-2">Locality</label>
                <GoogleAutoComplteforAddProduct />
                {/* <input type="text" /> */}
                {/* <input
            className="myinput"
            type="text"
            name="locality"
            placeholder="enter locality here"
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
          
          /> */}
                {!dataUser?.locality && afterSubmitFlg && (
                  <small className="text-danger ml-2">
                    {CreateAds.Locality}
                  </small>
                )}
              </div>

              <div className="col-lg-6 col-sm-12">
                <label className="mb-0 mt-2">Zip Code</label>
                <input
                  className="myinput"
                  name="zipcode"
                  placeholder="enter zipcode here"
                  value={zipcode}
                  type="number"
                  maxLength={6}
                  onInput={(e) => {
                    if (e.target.value.length > e.target.maxLength)
                      e.target.value = e.target.value.slice(
                        0,
                        e.target.maxLength
                      );
                  }}
                  onKeyDown={(e) =>
                    ["e", "E", "+", "-", "."].includes(e.key) &&
                    e.preventDefault()
                  }
                  style={{
                    border: "1px solid #5d5d5d3d",
                    padding: "7px",
                    borderRadius: "3px",
                  }}
                  onChange={(e) => setZipcode(e.target.value)}
                />
                {zipcode.length < 6 && zipcode.length > 0 ? (
                  <span className="text-danger ml-2">
                    Please enter valid zipcode
                  </span>
                ) : zipcode.length > 6 ? (
                  <span className="text-danger ml-2">
                    Please enter valid zipcode
                  </span>
                ) : !zipcode && afterSubmitFlg ? (
                  <small className="text-danger ml-2">
                    {CreateAds.ZipCode}
                  </small>
                ) : null}
              </div>
            </div>
            <div className="d-flex">
              <div className="col-lg-6 col-sm-12">
                <label className="mb-0 mt-2">Date</label>
                <input
                  className="myinput p-2"
                  style={{
                    border: "1px solid #8080804d",
                    borderRadius: "3px",
                    padding: "6px",
                  }}
                  type="text"
                  name="date"
                  placeholder="enter date here"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  disabled
                />
              </div>
              <div className="col-lg-6 col-sm-12">
                <label className="mb-0 mt-2">User Name</label>
                <input
                  className="myinput"
                  style={{
                    borderRadius: "3px",
                    padding: "7px",
                  }}
                  type="text"
                  name="id"
                  disable={true}
                  placeholder="USER ID"
                  value={name}
                />
              </div>
            </div>
            <div className="col-lg-12 col-sm-12 mb-3">
              <label className="mb-0 mt-2">Description</label>
              <textarea
                className="myinput border"
                type="text"
                name="brand"
                style={{ resize: "none" }}
                placeholder="Write something about your product"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              {!description && afterSubmitFlg && (
                <small className="text-danger ml-2">{CreateAds.disc}</small>
              )}
            </div>
            <div className="col-lg-12 col-sm-12 mb-3">
              <small className="text-danger">
                *Choose a plan category and type for this post.{" "}
              </small>

              <span className="px-3">Plan Category</span>

              <Select
                defaultValue="Choose"
                getPopupContainer={(triggerNode) => triggerNode.parentElement}
                style={{
                  width: 150,
                }}
                onChange={(value) => {
                  // getDataByPlan(value);
                  setPlan(value);
                  setAdsCategory("");
                }}
                options={
                  data.hasOwnProperty("postAdsForm") &&
                  // Object.keys(data?.postAdsForm)
                  data?.leftPlan?.map((val) => {
                    return { value: val, label: val };
                  })
                }
              />
              <span className="px-3">Ads Category</span>
              <Select
                getPopupContainer={(triggerNode) => triggerNode.parentElement}
                defaultValue="Choose"
                value={adsCategory}
                style={{
                  width: 150,
                }}
                disabled
                onChange={(value) => {
                  setAdsCategory(value);
                  // getDataByPlan(value);
                }}
                // options={
                //   plan !== ""
                //     ? data.postAdsForm[plan].category.map((val) => {
                //         return { value: val, label: val };
                //       })
                //     : null
                //   //   data?.postAdsForm?.category?.map((val) => {
                //   //   return { value: val, label: val };
                //   // })
                // }
                options={[
                  {
                    value: data?.postAdsForm?.[plan]?.category[0],
                    label: data?.postAdsForm?.[plan]?.category[0],
                  },
                ]}
              />
              {dayslimit && (
                <span className="px-3">
                  Days limit for this post : {dayslimit}
                </span>
              )}
            </div>
            {planError ? (
              <>
                <p className="text-danger">Please choose a plan !</p>
              </>
            ) : null}

            {true ? (
              <>
                <Button
                  style={{ marginTop: "32px" }}
                  type="primary"
                  className="btn btn-block style1 text-white p-1"
                  loading={isLoading}
                  disabled={isLoading}
                  onClick={addNewProduct}
                >
                  Add Post
                </Button>
                {data.leftPlan && (
                  <Modal
                    // title="Basic Modal"
                    open={isModalOpen}
                    onOk={() => navigate("/pricing/")}
                    onCancel={handleCancel}
                  >
                    <div className="mt-2 text-center">
                      <BsExclamationTriangle className="fs-22 text-warning" />{" "}
                      &nbsp;&nbsp;
                      <span className="text-danger">
                        Please choose a plan !
                      </span>
                    </div>
                  </Modal>
                )}
              </>
            ) : (
              <Link to="/payment" className="headline">
                {" "}
                **For Premium ADs
                <button
                  type="button"
                  class="btn style1 btn-block"
                  onClick={handlePay}
                >
                  Pay & Add Add
                </button>
              </Link>
            )}
            {active === "Payments" && <Payments />}
            {ErrorExtraField ? (
              <>
                <Modal
                  zIndex={9999}
                  style={{ zIndex: "99999" }}
                  title="Warning"
                  open={adsLimitCheck}
                  okType="danger"
                  onOk={() => setAdsLimitCheck(false)}
                  onCancel={() => setAdsLimitCheck(false)}
                >
                  <p>Please fill the extra fields </p>
                </Modal>
              </>
            ) : null}
            {/* {successvalue ? (
                  <div className="text-success">Succesfully Stored</div>
                ) : null} */}
            {errorvalue ? <div className="text-danger">Error </div> : null}
            {/* {adsLimitCheck && (
              <>
                <Modal
                    zIndex={9999}
                    style={{ zIndex: "99999" }}
                    title="Warning"
                    open={adsLimitCheck}
                    okType="danger"
                    onOk={() => navigate("/pricing")}
                    onCancel={() => console.log("~~~cancle")}
                  >
                    <p>You can not post ads now .Your Ads limit has complete</p>
                    <p>Please buy a plan</p>
                  </Modal>
              </>
            )} */}
          </div>
        </div>

        {loading1 && (
          <Modal
            title="under process"
            open={loading1}
            onOk={() => {
              navigate("/dashboard");
            }}
          >
            It is under <span className="text-warning">verification</span>
            <p className="p-0 m-0"> It will approve within 24 hours.</p>
          </Modal>
        )}
        {openNewModal && (
          <Modal
            title="Ads post successfully"
            open={openNewModal}
            icon=<CheckCircleFilled />
            fill="green"
            onOk={() => {
              navigate("/dashboard");
            }}
            onCancel={() => navigate("/")}
          >
            <p className="p-0 m-0">Your ads have been posted successfully.</p>
            <p className="p-0 m-0">
              It is under <span className="text-warning">verification</span>
            </p>
            <p className="p-0 m-0"> It will approve within 24 hours.</p>
          </Modal>
        )}
      </fieldset>
    </div>
  );
};

export default AddProduct;
