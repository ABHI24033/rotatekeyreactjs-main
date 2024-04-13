import "./EditAds.css";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import Payments from "../Payment/Payments";
import "./AddProducts.css";
import validator from "validator";
import { Image, Container, Row, Col } from "react-bootstrap";
import "../Allads/ImageUpload/ImageUpload.css";
import { FaCut, FaFileSignature } from "react-icons/fa";
import "./AddProducts.css";
import { DatePicker, Space, Select } from "antd";
import { useGeolocated } from "react-geolocated";
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
} from "../../env";
import { decrypt } from "../../Base/encryptDecrypt/encryptDecrypt";
import { isMobile } from "react-device-detect";
import { Button, Modal } from "antd";
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
import Carousel from "react-multi-carousel";
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

const EdistAds = () => {
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
  const disptach = useDispatch();
  const adsId = useParams();
  const [extra, setExtra] = useState({});

  useEffect(() => {
    console.log(extra);
  }, [extra]);
  const [completData, setCompleteData] = useState({});
  const [imagesmutlipleads, setimagesmutlipleads] = useState([]);
  console.log("!!!!calling");
  const myFun = async () => {
    const EditData = await axios.get(localUrl + `adsapi/${adsId.id}/`);
    console.log("!!!details datta", EditData);
    setExtra(JSON.parse(EditData?.data["extraField"]));
    // setImage(EditData.data.image);
    setCompleteData(EditData?.data);
  };

  useEffect(() => {
    myFun();
  }, []);
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
        console.log("result", result);

        var multipleImage = [];

        result.map((result) => {
          let tempObjImage = {};
          tempObjImage["url"] = result.fields.image;
          multipleImage.push(tempObjImage);
        });
        console.log("!!!!image ", multipleImage);
        setimagesmutlipleads(multipleImage);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const [visible, setVisible] = useState(false);
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
  const [city, setCity] = useState("");
  const [locality, setLocality] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [date, setDate] = useState("");
  const [active, setActive] = useState("DashAds");
  const [loading1, setloading1] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState(null);
  const [storeadsFlag, setstoreadsFlag] = useState(false);
  const [realEsateSubCategory, setrealEsateSubCategory] = useState(null);
  const [userdata, setUserData] = useState(null);
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
  const [changeCategoryPlan, setChangeCategoryPlan] = useState(false);
  const [updateAds_left, setUpdateAds_left] = useState(null);
  const [updateCategory, setUpdateCategory] = useState(null);
  const [updateFeatured_ads, setUpdateFeatured_ads] = useState(null);
  const [updateAds_limit, setUpdateAds_limit] = useState(null);
  const [updateTop_listing, setUpdateTop_listing] = useState(null);
  const [updateSupport, setUpdateSupport] = useState(null);
  const [updateAds_timimg, setUpdateAds_timimg] = useState(null);
  let userid = localStorage.getItem("userid");
  // let userid=localStorage.getItem("userid")
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

  console.log(
    "~~~allplanDetails",
    allAdsCount,
    allAdsCount?.leftPlan?.map((val) => {
      return { value: val, label: val };
    }),
    "plan"
  );
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
  useEffect(() => {
    if (plan !== "") {
      setAdsCategory(data?.postAdsForm[plan]?.category[0]);
    }
  }, [plan]);
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
  console.log("console.log", dayslimit, planCategory1, planType, expireData);

  useEffect(() => {
    let changeCategory =
      dataUser?.activePlan[dataUser?.activePlan.length - 1]?.fields?.category;
    let changeAds_Left =
      dataUser?.activePlan[dataUser?.activePlan.length - 1]?.fields?.adsLeft;
    let changeFeatured_ads =
      dataUser?.activePlan[dataUser?.activePlan.length - 1]?.fields
        ?.featured_ads;
    let changeAds_limit =
      dataUser?.activePlan[dataUser?.activePlan.length - 1]?.fields?.ads_limit;
    let changeAds_timimg =
      dataUser?.activePlan[dataUser?.activePlan.length - 1]?.fields?.ads_timing;
    let changeTop_listing =
      dataUser?.activePlan[dataUser?.activePlan.length - 1]?.fields
        ?.top_listing;
    let changeSupport =
      dataUser?.activePlan[dataUser?.activePlan.length - 1]?.fields?.support;
    // debugger;
    console.log("plan", dataByPlan[0]?.fields);
    if (changeCategoryPlan) {
      setUpdateCategory(dataByPlan[0]?.fields?.category);
      setUpdateAds_left(dataByPlan[0]?.fields?.adsLeft);
      setUpdateFeatured_ads(dataByPlan[0]?.fields?.featured_ads);
      setUpdateAds_limit(dataByPlan[0]?.fields?.ads_limit);
      setUpdateAds_timimg(dataByPlan[0]?.fields?.ads_timing);
      setUpdateTop_listing(dataByPlan[0]?.fields?.top_listing);
      setUpdateSupport(dataByPlan[0]?.fields?.support);
    } else {
      setUpdateCategory(changeCategory);
      setUpdateAds_left(changeAds_Left);
      setUpdateFeatured_ads(changeFeatured_ads);
      setUpdateAds_limit(changeAds_limit);
      setUpdateAds_timimg(changeAds_timimg);
      setUpdateTop_listing(changeTop_listing);
      setUpdateSupport(changeSupport);
    }
  }, [changeCategoryPlan]);

  console.log(
    "change plan with on change",
    updateCategory,
    updateAds_limit,
    updateAds_timimg,
    updateFeatured_ads,
    updateSupport,
    updateTop_listing
  );

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
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  const updateCurrentPlan = (props) => {
    let userdataid = props?.toString();
    var formdata = new FormData();
    formdata.append("user", userdataid);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "api/adsapi/updatePlanLimit", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
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
          console.log(result);
          navigate(`/ads-listing/${props}/`);
        })
        .catch((error) => setError("Somethig went wrong.."));
    }
  };

  const [ErrorExtraField, setErrorExtraField] = useState(false);
  // useEffect(() => {
  //   if (category === "Jobs") {
  //     setPrice(jobprice);
  //     setTags(jobtags);
  //   }
  // }, [category]);
  const addNewProduct = async () => {
    // debugger;
    var aKeys = Object.keys(finalObj).sort();
    var bKeys = Object.keys(obj).sort();
    if (!(JSON.stringify(aKeys) === JSON.stringify(bKeys))) {
      setErrorExtraField(true);
      setAdsLimitCheck(true);
    } else {
      setErrorExtraField(false);
      setstoreadsFlag(true);
      // if (dataUser?.activePlan[0]?.fields?.adsLeft == 0) {
      //   console.log("~~~ plan is zero");
      //   setAdsLimitCheck(true);
      // } else
      if (false) {
        // if(validator.isMobilePhone(phoneNumber)){
        //   setError("need to validate")
        // }
        setAfterSubmitflag(true);
        setError("* Please fill this field..");
      } else {
        let formdata = new FormData();
        if (true) {
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

        formdata.append("title", completData.title);

        formdata.append("price", completData.price);
        formdata.append("tags", completData.tags);

        formdata.append("description", completData.description);
        formdata.append("category", completData.category);
        formdata.append("brand", brand);
        formdata.append("Engine", Engine);
        formdata.append("Year", Year);
        formdata.append("condition", condition);
        formdata.append("state", completData.state);
        formdata.append("City", completData.City);
        formdata.append("locality", completData.locality);
        formdata.append("zip_code", completData.zip_code);
        formdata.append("user", completData.user);
        formdata.append("subCategoryType", completData.subCategoryType);
        formdata.append("subCategoryValue", completData.subCategoryValue);
        formdata.append("lati", completData.lati);
        formdata.append("long", completData.long);
        formdata.append("phoneNumber", phoneNumber);
        formdata.append("is_active", true);

        // formdata.append("BuildUpArea", BuildUpArea);
        // formdata.append("Flor", Flor);
        // formdata.append("ApartMentType", ApartMentType);
        // formdata.append("Availability", Availability);
        // formdata.append("FurnishedType", FurnishedType);
        // formdata.append("Property", Property);
        // formdata.append("Parking", Parking);
        // formdata.append("PowerBackup", PowerBackup);
        // formdata.append("Gym", Gym);
        // formdata.append("Garden", Garden);
        // formdata.append("Pool", Pool);
        // formdata.append("Lift", Lift);

        // formdata.append("colorCheck", colorCheck);
        // formdata.append("sizeCheck", sizeCheck);
        // formdata.append("School", School);
        // formdata.append("College", College);

        // formdata.append("oldPetsCheck", oldPetsCheck);

        // formdata.append("date_created", completData.date_created);
        // formdata.append("PlanCategory", updateCategory);
        // formdata.append("featured_ads", updateFeatured_ads);
        // formdata.append("ads_limit", updateAds_limit);
        // formdata.append("ads_timing", updateAds_timimg);
        // formdata.append("top_listing", updateTop_listing);
        // formdata.append("support", updateSupport);

        formdata.append("adsType", completData.adsType);
        formdata.append("plan", completData.plan);
        formdata.append("DaysLimit", completData.DaysLimit);
        formdata.append("expiry", completData.expiry);
        // dayslimit, planCategory1, planType, expireData
        console.log(extra);

        formdata.append("extraField", JSON.stringify(extra));

        var requestOptions = {
          method: "PUT",
          headers: myHeaders,
          body: formdata,
          redirect: "follow",
        };
        setloading1(true);
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
              setloading1(false);
            }
            console.log("result", result);
            if (result.status !== "OK" && result?.DaysLimit && result?.expiry) {
              setPlanError(true);
              alert("days kimit error");
            } else if (!result?.id) {
              alert("Ads not posted");
            } else {
              imageUpload(result.id);

              updateCurrentPlan(
                dataUser?.activePlan[dataUser?.activePlan - 1]?.fields?.user
              );
            }

            console.log(result);
            setloading1(false);
          })
          .catch((error) => {
            setError("Something went wrong! Please come after Sometimes..");
            setErrorValue(true);
            setSuccessValue(false);
            console.log("error", error);
          });
      }
      setstoreadsFlag(false);
      setloading1(false);
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

  const style = {
    position: "fixed",
    top: "50%",
    left: "60%",
    transform: "translate(-50%, -50%)",
  };
  document.title = "RotateKey - AddProducts";
  return (
    <div className="container shadow  bg-white">
      {/* {true &&  <div className="example">
    <Spin />
  </div>} */}
      {!formDisable && <h2 className="text-danger">Your plan has expired</h2>}
      {!loading1 && (
        <fieldset disabled={!formDisable}>
          <div>
            <Carousel responsive={responsive}>
              {imagesmutlipleads.map((result) => {
                return (
                  <div>
                    <img src={result?.url} />
                  </div>
                );
              })}
            </Carousel>
            <div
              className="white mx-auto"
              style={isMobile ? mobileStyle1 : desktopStyle1}
            >
              <h1 style={{ marginTop: "-20px", fontSize: "20px" }}>Edit</h1>

              <div className="form-group ">
                {/* <label>Main Banner Image</label> */}
                {/* <input
              required
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
                  <span className="text-danger ml-2">{error}</span>
                )}

                {/* <div className="col-lg-6 col-sm-12">
              <label>Video upload</label>
              <div style={{border:'2px solid black',padding:'20px'}}>
               <VideoInput height={200}/>
               </div>
              </div> */}
              </div>
              <div className="row p-2" style={{ marginBottom: "-20px" }}>
                <div className="col-lg-6 col-sm-12">
                  <label className="mb-0 mt-2">Category</label>

                  <input
                    className="inpstyle"
                    placeholder="category"
                    type="text"
                    list="category"
                    style={{
                      width: "100%",
                      zIndex: "-50px",
                      borderRadius: "3px",
                    }}
                    value={completData.category}
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
                    disabled
                  />

                  <datalist id="category">
                    {CategoryList.map((result) => {
                      return <option value={result}>{result}</option>;
                    })}
                  </datalist>
                  {category && catErr == false ? (
                    <span className="text-danger ml-2">
                      select right category
                    </span>
                  ) : catErr == true ? null : !category && afterSubmitFlg ? (
                    <span className="text-danger ml-2">
                      {CreateAds.Category}
                    </span>
                  ) : null}

                  {/* {!category && afterSubmitFlg && <span className="text-danger ml-2">{CreateAds.Category}</span>} */}
                </div>

                {category != "RealEstate" ? (
                  <div className="col-lg-6 col-sm-12">
                    <label className="mb-0 mt-2">Sub Category</label>
                    <input
                      className="inpstyle"
                      placeholder="Sub Category"
                      value={completData.subCategoryValue}
                      type="text"
                      list="subcategoryForAll"
                      style={{
                        width: "100%",
                        zIndex: "-50px",
                        borderRadius: "3px",
                      }}
                      onChange={(e) => {
                        console.log("1276", e.target.value);

                        {
                          [""] ? setSubCat(true) : setSubCat(false);
                        }

                        setsubCategoryValue(e.target.value);
                        SetFinalObj({});
                      }}
                      disabled
                    />

                    <datalist id="subcategoryForAll">
                      {category === "Furniture"
                        ? Furniture.map((result) => {
                            return <option value={result}>{result}</option>;
                          })
                        : category == "Furniture"
                        ? Furniture.map((result) => {
                            return <option value={result}>{result}</option>;
                          })
                        : category == "Electronics"
                        ? Electronics.map((result) => {
                            return <option value={result}>{result}</option>;
                          })
                        : category == "Pets"
                        ? Pets.map((result) => {
                            /*{/* :category=="Others"?Others.map(result=>{return <option value={result} >{result}</option>})}*/
                            return <option value={result}>{result}</option>;
                          })
                        : category == "Cars"
                        ? Cars.map((result) => {
                            return <option value={result}>{result}</option>;
                          })
                        : category == "Mobiles"
                        ? Mobiles.map((result) => {
                            return <option value={result}>{result}</option>;
                          })
                        : category == "Bikes"
                        ? Bikes.map((result) => {
                            return <option value={result}>{result}</option>;
                          })
                        : category == "Services"
                        ? Services.map((result) => {
                            return <option value={result}>{result}</option>;
                          })
                        : category == ""
                        ? [" "].map((result) => {
                            return <option>{result}</option>;
                          })
                        : null}
                    </datalist>
                    {subcategoryForAll && subCat == false ? (
                      <span className="text-danger ml-2">
                        Select right category
                      </span>
                    ) : subCat == true ? null : !subcategoryForAll &&
                      afterSubmitFlg ? (
                      <span className="text-danger ml-2">
                        Please Enter The Sub Category
                      </span>
                    ) : null}
                  </div>
                ) : null}
                {/* {console.log("hello", completData, completData["extrafield"]), typeof(completData["extrafield"])} */}

                {extra
                  ? Object?.keys(extra).map((result) => (
                      <div className="col-lg-6 col-sm-12">
                        <label className="mb-0 mt-2">{result}</label>
                        <input
                          className="inpstyle"
                          placeholder={result}
                          defaultValue={
                            JSON?.parse(completData["extraField"])[result]
                          }
                          type="text"
                          list="subcategoryForAll"
                          style={{
                            width: "100%",
                            zIndex: "-50px",
                            borderRadius: "3px",
                          }}
                          onChange={(e) => {
                            extra[result] = e.target.value;
                            setExtra(extra);
                            // let value = JSON?.parse(completData["extraField"])
                            // value[result] = e.target.value
                            // completData["extraField"] = JSON.stringify(value)
                            // setCompleteData(completData)
                          }}
                        />
                      </div>
                    ))
                  : null}
                {categorysubCategoryFlag ? (
                  <div className="col-lg-6 col-sm-12">
                    <label
                      style={{
                        marginBottom: "0px",
                        marginTop: "8px",
                        borderRadius: "3px",
                      }}
                    >
                      SubCategory
                    </label>
                    <input
                      className="inpstyle"
                      placeholder="Sub Category"
                      type="text"
                      list="subcategoryType"
                      style={{
                        width: "100%",
                        zIndex: "-50px",
                        borderRadius: "3px",
                        borderRadius: "3px",
                      }}
                      onChange={(e) => {
                        setsubCategoryType(e.target.value);
                        setExtraFeildToggle(false);
                      }}
                    />
                    <datalist id="subcategoryType">
                      {subcategoryType1.map((result) => {
                        return <option value={result}>{result}</option>;
                      })}
                    </datalist>
                  </div>
                ) : null}

                {/* {subCategoryValue?
       <SubcategoryCommonInput category={category} subcategory={subCategoryValue}/>:null} */}

                {subCategoryType == "Residential" ? (
                  <div className="col-lg-6 col-sm-12">
                    <label style={{ marginBottom: "0px", marginTop: "15px" }}>
                      Type
                    </label>

                    <input
                      className="inpstyle"
                      placeholder="subcategoryRealEstateBuy"
                      type="text"
                      list="subcategoryRealEstateBuy"
                      style={{
                        width: "100%",
                        zIndex: "-50px",
                        borderRadius: "3px",
                      }}
                      onChange={(e) => {
                        if (subcategoryRealEstateBuy.includes(e.target.value)) {
                          setTypeErr(true);
                        } else {
                          setTypeErr(false);

                          console.log("not match");
                        }

                        setsubCategoryValue(e.target.value);
                      }}
                    />
                    <datalist id="subcategoryRealEstateBuy">
                      {subcategoryRealEstateBuy.map((result) => {
                        return <option value={result}>{result}</option>;
                      })}
                    </datalist>
                    {subcategoryRealEstateBuy && typeErr == false ? (
                      <span className="text-danger ml-2">
                        Select right type
                      </span>
                    ) : typeErr == true ? null : !subcategoryRealEstateBuy &&
                      afterSubmitFlg ? (
                      <span className="text-danger ml-2">"enter type</span>
                    ) : null}
                  </div>
                ) : subCategoryType == "Commercial" ? (
                  <div className="col-lg-6 col-sm-12">
                    <label style={{ marginBottom: "0px", marginTop: "15px" }}>
                      Type
                    </label>

                    <input
                      className="inpstyle"
                      placeholder="subcategoryRealEstateRent"
                      type="text"
                      list="subcategoryRealEstateRent"
                      style={{
                        width: "100%",
                        zIndex: "-50px",
                        borderRadius: "3px",
                      }}
                      onChange={(e) => {
                        if (
                          subcategoryRealEstateRent.includes(e.target.value)
                        ) {
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
                    </datalist>
                    {subcategoryRealEstateRent && rentErr == false ? (
                      <span className="ml-2">Select right type</span>
                    ) : rentErr == true ? null : !subcategoryRealEstateRent ? (
                      <span className="text-danger ml-2">"enter type</span>
                    ) : null}
                  </div>
                ) : subCategoryType == "Residential" ? (
                  <div className="col-lg-6 col-sm-12">
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
                        borderRadius: "3px",
                      }}
                      onChange={(e) => {
                        setsubCategoryValue(e.target.value);
                      }}
                    />

                    {/* <datalist id="Others">
{Others.map(result=>{
      return <option value={result} >{result}</option>
  })
}
</datalist> */}
                  </div>
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
                            return (
                              <>
                                <Col span={6} style={{ marginTop: "15px" }}>
                                  {key.includes("Date") ? (
                                    <Space
                                      direction="vertical"
                                      className="mx-2"
                                    >
                                      <DatePicker
                                        style={{
                                          width: "300px",
                                          border: "1px solid #00000038",
                                          color: "black",
                                          borderRadius: "3px",
                                        }}
                                        placeholder={key}
                                        onChange={(date, dateString) => {
                                          finalObj[key] = dateString;
                                          SetFinalObj(finalObj);
                                        }}
                                      />
                                    </Space>
                                  ) : (
                                    <HolaAutoComplete
                                      style={
                                        isMobile ? mobileStyle : desktopStyle
                                      }
                                      options={obj[key]}
                                      placeholder={key}
                                      autoFocus={true}
                                      required
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
                        style={{ fontSize: "14px", borderRadius: "3px" }}
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
                        style={{ fontSize: "14px", borderRadius: "3px" }}
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
                        style={{ fontSize: "14px", borderRadius: "3px" }}
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
                                  {key.includes("Date") ? (
                                    <Space
                                      direction="vertical"
                                      className="mx-2"
                                    >
                                      <DatePicker
                                        style={{
                                          width: "300px",
                                          border: "1px solid #00000038",
                                          color: "black",
                                          borderRadius: "3px",
                                        }}
                                        placeholder={key}
                                        onChange={(date, dateString) => {
                                          finalObj[key] = dateString;
                                          SetFinalObj(finalObj);
                                        }}
                                      />
                                    </Space>
                                  ) : (
                                    <HolaAutoComplete
                                      style={
                                        isMobile ? mobileStyle : desktopStyle
                                      }
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
                        style={{ fontSize: "14px", borderRadius: "3px" }}
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
                        style={{ fontSize: "14px", borderRadius: "3px" }}
                      >
                        <span> PG Amenities</span>
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
                            (subCategoryValue === "Buy-Commercial" &&
                              index > 10)
                          ) {
                            return (
                              <>
                                <Col span={6} style={{ marginTop: "15px" }}>
                                  <HolaAutoComplete
                                    style={
                                      isMobile ? mobileStyle : desktopStyle
                                    }
                                    // style={{
                                    //   width: 300,

                                    // }}
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
              <div className="row p-2">
                <div className="col-lg-6 col-sm-12">
                  <label className="mb-0 mt-2">Title</label>
                  <input
                    required
                    className="myinput"
                    type="text"
                    name="title"
                    placeholder="enter title here"
                    value={completData.title}
                    style={{
                      width: "100%",
                      zIndex: "-50px",
                      borderRadius: "3px",
                      border: "1px solid #5d5d5d3d",
                      padding: "7px",
                    }}
                    onChange={(e) => setTitle(e.target.value)}
                    disabled
                  />
                  {!title && afterSubmitFlg && (
                    <span className="text-danger ml-2">{CreateAds.title}</span>
                  )}
                </div>
                <div className="col-lg-6 col-sm-12">
                  <label className="mb-0 mt-2">Phone Number</label>
                  <input
                    className="inpstyle"
                    placeholder="enter phone number"
                    type="number"
                    defaultValue={completData.phoneNumber}
                    onKeyDown={(e) =>
                      ["e", "E", "+", "-", "."].includes(e.key) &&
                      e.preventDefault()
                    }
                    style={{
                      width: "100%",
                      zIndex: "-50px",
                      borderRadius: "3px",
                      border: "1px solid #5d5d5d3d",
                      padding: "7px",
                    }}
                    onChange={(e) => {
                      completData.phoneNumber = phoneNumber;
                      console.log("e", e.target.value);
                      setphoneNumber(e.target.value);
                    }}
                  />
                  {phoneNumber.length < 10 && phoneNumber.length > 0 ? (
                    <span className="text-danger ml-2">Enter valid Number</span>
                  ) : phoneNumber.length > 10 ? (
                    <span className="text-danger ml-2">
                      Enter only 10 digit Number
                    </span>
                  ) : !phoneNumber && afterSubmitFlg ? (
                    <span className="text-danger ml-2">
                      {CreateAds.PhoneNumber}
                    </span>
                  ) : null}
                </div>
              </div>

              {/* <div className="d-flex" style={{ marginTop: "-5px" }}>
               
                {category == "Jobs" ? null : (
                  <div className="col-lg-6 col-sm-12">
                    <label className="mb-0 mt-2">Price</label>
                    <input
                      className="myinput"
                      type="number"
                      name="price"
                      placeholder="enter price here"
                      defaultValue={completData.price}
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
                        completData.price = e.target.value;
                        setCompleteData(completData);
                      }}
                      pattern="/^[0-9a-zA-Z]+$/"
                      required
                    />
                    {!price && afterSubmitFlg && (
                      <span className="text-danger ml-2">
                        {CreateAds.Price}
                      </span>
                    )}
                  </div>
                )}
                {category == "Jobs" ? null : (
                  <div className="col-lg-6 col-sm-12">
                    <label className="mb-0 mt-2">Tags</label>
                    <input
                      className="myinput"
                      type="text"
                      name="tags"
                      placeholder="enter tags here"
                      defaultValue={completData.tags}
                      style={{
                        padding: "7px",
                        width: "100%",
                        zIndex: "-50px",
                        borderRadius: "3px",
                      }}
                      onChange={(e) => {
                        completData.tags = e.target.value;
                        setCompleteData(completData);
                      }}
                      required
                    />
                    {!tags && afterSubmitFlg && (
                      <span className="text-danger ml-2">{CreateAds.Tags}</span>
                    )}
                  </div>
                )}
              </div> */}
              {/* <Button className="style1" onClick={() => { getLocationSearchMethod() }} style={{ fontSize: '12px' }}>
            <FaSearchLocation /> current location
          </Button> */}
              {/* <button className="h3 mt-2 btn-dark pl-1 rounded-circle"  onClick={() => { getLocationSearchMethod() }}><FaSearchLocation />
          </button> <strong>Current Location</strong> */}
              <div className="d-flex">
                <div className="col-lg-6 col-sm-12">
                  <label className="mb-0 mt-2">State</label>

                  <input
                    className="inpstyle"
                    placeholder="state"
                    value={completData.state}
                    type="text"
                    list="state"
                    style={{
                      padding: "7px",
                      width: "100%",
                      zIndex: "-50px",
                      borderRadius: "3px",
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
                    disabled
                  />

                  <datalist id="state">
                    {Object.keys(stateMain)?.map((result) => {
                      return <option value={result}>{result}</option>;
                    })}
                  </datalist>

                  {state && newError == false ? (
                    <small className="text-danger ml-2">
                      *Choose right state
                    </small>
                  ) : newError == true ? null : !state && afterSubmitFlg ? (
                    <span className="text-danger ml-2">{CreateAds.State}</span>
                  ) : null}

                  {/* {!state && afterSubmitFlg && <span className="text-danger ml-2">{newError==false?"choose right state":newError==true?"good job" :CreateAds.State}</span>} */}
                </div>
                <div className="col-lg-6 col-sm-12">
                  <label className="mb-0 mt-2">City</label>
                  <input
                    className="myinput"
                    type="text"
                    name="city"
                    list="city"
                    placeholder={completData?.City}
                    value={completData.City}
                    style={{
                      padding: "7px",
                      width: "100%",
                      zIndex: "-50px",
                      borderRadius: "3px",
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
                    disabled
                  />

                  <datalist id="city">
                    {updateState &&
                      cityWithState?.map((result) => {
                        return <option value={result}>{result}</option>;
                      })}
                  </datalist>
                  {city && cityErr == false ? (
                    <span className="text-danger ml-2">Choose right city</span>
                  ) : cityErr == true ? null : !city && afterSubmitFlg ? (
                    <span className="text-danger ml-2">{CreateAds.City}</span>
                  ) : null}

                  {/* {!city && afterSubmitFlg && <span className="text-danger ml-2">{CreateAds.City}</span>} */}
                </div>
              </div>

              <div className="d-flex">
                <div className="col-lg-6 col-sm-12">
                  <label className="mb-0 mt-2">Locality</label>
                  <input
                    className="myinput"
                    type="text"
                    name="city"
                    list="city"
                    placeholder="enter city here"
                    value={completData.locality}
                    style={{
                      padding: "7px",
                      width: "100%",
                      zIndex: "-50px",
                      borderRadius: "3px",
                    }}
                    disabled
                  />
                  {/* <input
            className="myinput"
            type="text"
            name="locality"
            placeholder="enter locality here"
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
            required
          /> */}
                  {!dataUser?.locality && afterSubmitFlg && (
                    <span className="text-danger ml-2">
                      {CreateAds.Locality}
                    </span>
                  )}
                </div>

                <div className="col-lg-6 col-sm-12">
                  <label className="mb-0 mt-2">Zip Code</label>
                  <input
                    className="myinput"
                    name="zipcode"
                    placeholder="enter zipcode here"
                    value={completData.zip_code}
                    type="number"
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
                      completData.zip_code = e.target.value;
                      setCompleteData(completData);
                    }}
                    required
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
                    <span className="text-danger ml-2">
                      {CreateAds.ZipCode}
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="d-flex">
                <div className="col-lg-6 col-sm-12">
                  <label className="mb-0 mt-2">Date</label>
                  <input
                    className="myinput p-2"
                    style={{
                      padding: "6px",
                      width: "100%",
                      zIndex: "-50px",
                      borderRadius: "3px",
                    }}
                    type="text"
                    name="date"
                    placeholder="enter date here"
                    defaultValue={completData.date_created}
                    onChange={(e) => setDate(e.target.value)}
                    disabled
                  />
                </div>
                {/* <div className="col-lg-6 col-sm-12">
                  <label className="mb-0 mt-2">User Name</label>
                  <input
                    className="myinput"
                    type="text"
                    name="id"
                    disable={true}
                    placeholder="USER ID"
                    value={completData.user}
                    style={{
                      padding: "7px",
                      width: "100%",
                      zIndex: "-50px",
                      borderRadius: "3px",
                    }}
                  />
                </div> */}
              </div>
              <div className="col-lg-12 col-sm-12 mb-3">
                <label className="mb-0 mt-2">Description</label>
                <textarea
                  className="myinput border"
                  type="text"
                  name="brand"
                  style={{ resize: "none" }}
                  placeholder="Write something about your product"
                  defaultValue={completData.description}
                  onChange={(e) => {
                    completData.description = e.target.value;
                    setCompleteData(completData);
                  }}
                />
                {!description && afterSubmitFlg && (
                  <span className="text-danger ml-2">{CreateAds.disc}</span>
                )}
              </div>
              <div className="col-lg-12 col-sm-12 mb-3">
                <p className="text-danger">
                  {/* *Choose a plan category and type for this  post.{" "} */}
                </p>

                <span className="px-3">Plan Category</span>

                <Select
                  value={completData.plan}
                  onChange={(e) => e.target.value}
                  disabled
                  style={{
                    width: 150,
                  }}
                />
                <span className="px-3">Ads Categoty</span>
                <Select
                  defaultValue="Choose"
                  value={completData.adsType}
                  onChange={(e) => e.target.value}
                  disabled
                  style={{
                    width: 150,
                  }}
                />
                {true && (
                  <span className="px-3">
                    Days limit for this post : {completData.DaysLimit}
                  </span>
                )}
              </div>
              {planError && (
                <div className="text-danger"> Please choose a plan ! </div>
              )}
              {true ? (
                <Button
                  className="btn btn-block style1 text-white p-1"
                  disabled={false}
                  onClick={addNewProduct}
                  style={{ marginTop: "32px" }}
                  loading11={loading1}
                >
                  Update Post
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
                    Pay & Add Add
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
              {adsLimitCheck && (
                <>
                  {/* <Modal
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
                  </Modal> */}
                </>
              )}
              {/* </div> */}
            </div>
          </div>
        </fieldset>
      )}
    </div>
  );
};

export default EdistAds;
