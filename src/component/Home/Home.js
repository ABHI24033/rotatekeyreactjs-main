import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Owldemo1 from "../Owldemo1";
import AutoPlay from "../AutoPlay";
import Scroll from "../Ads/category/Scroll";
import Feature from "../Ads/FeaturedAds/Feature";
import HomeSection from "./homeSection/homeSection";
import YouTubeChannel from "../Ads/Video/youTubeChannel";
import Review1 from "../Pages/review/Review1";
import { url } from "../env";
import { UserContext } from "../../App";
import Spiner from "../Spiner";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { add, refreshTele } from "../../store/Track/trackUserSlice";
import YoutubeMagic from "../ContentLoader/YoutubeMagic";
import YoutubeMagic1 from "../ContentLoader/YoutubeMagic1";
import TrendingAds from "../Ads/Trending Ads/TrendingAds";
import { Modal } from "antd";
import { isMobile } from "react-device-detect";


const revmob = {
  marginTop: "38px"
}
const revdesk = {
  marginTop: "38px", width: "80%",
  margin: "0 auto"
}

export const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(t);
    };
  }, []);
  // modal on homepage
  const [visible, setVisible] = useState(false);
  const [showCount, setShowCount] = useState(0);

  let count = 0;

  useEffect(() => {
    if (count <= 2) {
      const timer = setTimeout(() => {
        setVisible(true);
        count++;
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  //  const myOptions = ['Adilabad', 'Agra', 'Ahmedabad', 'Ahmednagar', 'Aizawl', 'Ajitgarh', 'Mohali', 'Ajmer', 'Akola', 'Alappuzha', 'Aligarh', 'Alirajpur', 'Allahabad', 'Almora', 'Alwar', 'Ambala', 'Ambedkar', 'Nagar', 'Amravati', 'Amreli', 'district', 'Amritsar', 'Anand', 'Anantapur', 'Anantnag', 'Angul', 'Anjaw', 'Anuppur', 'Araria', 'Ariyalur', 'Arwal', 'Ashok', 'Nagar', 'Auraiya', 'Aurangabad', 'Aurangabad', 'Azamgarh', 'Badgam', 'Bagalkot', 'Bageshwar', 'Bagpat', 'Bahraich', 'Baksa', 'Balaghat', 'Balangir', 'Balasore', 'Ballia', 'Balrampur', 'Banaskantha', 'Banda', 'Bandipora', 'Bengaluru', 'Rural', 'Bengaluru', 'Urban', 'Banka', 'Bankura', 'Banswara', 'Barabanki', 'Baramulla', 'Baran', 'Bardhaman', 'Bareilly', 'Bargarh', '(Baragarh)', 'Barmer', 'Barnala', 'Barpeta', 'Barwani', 'Bastar', 'Basti', 'Bathinda', 'Beed', 'Begusarai', 'Belgaum', 'Bellary', 'Betul', 'Bhadrak', 'Bhagalpur', 'Bhandara', 'Bharatpur', 'Bharuch', 'Bhavnagar', 'Bhilwara', 'Bhind', 'Bhiwani', 'Bhojpur', 'Bhopal', 'Bidar', 'Bijapur', 'Bijapur', 'Bijnor', 'Bikaner', 'Bilaspur', 'Bilaspur', 'Birbhum', 'Bishnupur', 'Bokaro', 'Bongaigaon', 'Boudh', '(Bauda)', 'Budaun', 'Bulandshahr', 'Buldhana', 'Bundi', 'Burhanpur', 'Buxar', 'Cachar', 'Central', 'Delhi', 'Chamarajnagar', 'Chamba', 'Chamoli', 'Champawat', 'Champhai', 'Chandauli', 'Chandel', 'Chandigarh', 'Chandrapur', 'Changlang', 'Chatra', 'Chennai', 'Chhatarpur', 'Chhatrapati', 'Shahuji', 'Maharaj', 'Nagar', 'Chhindwara', 'Chikkaballapur', 'Chikkamagaluru', 'Chirang', 'Chitradurga', 'Chitrakoot', 'Chittoor', 'Chittorgarh', 'Churachandpur', 'Churu', 'Coimbatore', 'Cooch', 'Behar', 'Cuddalore', 'Cuttack', 'Dadra', 'and', 'Nagar', 'Haveli', 'Dahod', 'Dakshin', 'Dinajpur', 'Dakshina', 'Kannada', 'Daman', 'Damoh', 'Dantewada', 'Darbhanga', 'Darjeeling', 'Darrang', 'Datia', 'Dausa', 'Davanagere', 'Debagarh', '(Deogarh)', 'Dehradun', 'Deoghar', 'Deoria', 'Dewas', 'Dhalai', 'Dhamtari', 'Dhanbad', 'Dhar', 'Dharmapuri', 'Dharwad', 'Dhemaji', 'Dhenkanal', 'Dholpur', 'Dhubri', 'Dhule', 'Dibang', 'Valley', 'Dibrugarh', 'Dima', 'Hasao', 'Dimapur', 'Dindigul', 'Dindori', 'Diu', 'Doda', 'Dumka', 'Dungapur', 'Durg', 'East', 'Champaran', 'East', 'Delhi', 'East', 'Garo', 'Hills', 'East', 'Khasi', 'Hills', 'East', 'Siang', 'East', 'Sikkim', 'East', 'Singhbhum', 'Eluru', 'Ernakulam', 'Erode', 'Etah', 'Etawah', 'Faizabad', 'Faridabad', 'Faridkot', 'Farrukhabad', 'Fatehabad', 'Fatehgarh', 'Sahib', 'Fatehpur', 'Fazilka', 'Firozabad', 'Firozpur', 'Gadag', 'Gadchiroli', 'Gajapati', 'Ganderbal', 'Gandhinagar', 'Ganganagar', 'Ganjam', 'Garhwa', 'Gautam', 'Buddh', 'Nagar', 'Gaya', 'Ghaziabad', 'Ghazipur', 'Giridih', 'Goalpara', 'Godda', 'Golaghat', 'Gonda', 'Gondia', 'Gopalganj', 'Gorakhpur', 'Gulbarga', 'Gumla', 'Guna', 'Guntur', 'Gurdaspur', 'Gurgaon', 'Gwalior', 'Hailakandi', 'Hamirpur', 'Hamirpur', 'Hanumangarh', 'Harda', 'Hardoi', 'Haridwar', 'Hassan', 'Haveri', 'district', 'Hazaribag', 'Hingoli', 'Hissar', 'Hooghly', 'Hoshangabad', 'Hoshiarpur', 'Howrah', 'Hyderabad', 'Hyderabad', 'Idukki', 'Imphal', 'East', 'Imphal', 'West', 'Indore', 'Jabalpur', 'Jagatsinghpur', 'Jaintia', 'Hills', 'Jaipur', 'Jaisalmer', 'Jajpur', 'Jalandhar', 'Jalaun', 'Jalgaon', 'Jalna', 'Jalore', 'Jalpaiguri', 'Jammu', 'Jamnagar', 'Jamtara', 'Jamui', 'Janjgir-Champa', 'Jashpur', 'Jaunpur', 'district', 'Jehanabad', 'Jhabua', 'Jhajjar', 'Jhalawar', 'Jhansi', 'Jharsuguda', 'Jhunjhunu', 'Jind', 'Jodhpur', 'Jorhat', 'Junagadh', 'Jyotiba', 'Phule', 'Nagar', 'Kabirdham', '(formerly', 'Kawardha)', 'Kadapa', 'Kaimur', 'Kaithal', 'Kakinada', 'Kalahandi', 'Kamrup', 'Kamrup', 'Metropolitan', 'Kanchipuram', 'Kandhamal', 'Kangra', 'Kanker', 'Kannauj', 'Kannur', 'Kanpur', 'Kanshi', 'Ram', 'Nagar', 'Kanyakumari', 'Kapurthala', 'Karaikal', 'Karauli', 'Karbi', 'Anglong', 'Kargil', 'Karimganj', 'Karimnagar', 'Karnal', 'Karur', 'Kasaragod', 'Kathua', 'Katihar', 'Katni', 'Kaushambi', 'Kendrapara', 'Kendujhar', '(Keonjhar)', 'Khagaria', 'Khammam', 'Khandwa', '(East', 'Nimar)', 'Khargone', '(West', 'Nimar)', 'Kheda', 'Khordha', 'Khowai', 'Khunti', 'Kinnaur', 'Kishanganj', 'Kishtwar', 'Kodagu', 'Koderma', 'Kohima', 'Kokrajhar', 'Kolar', 'Kolasib', 'Kolhapur', 'Kolkata', 'Kollam', 'Koppal', 'Koraput', 'Korba', 'Koriya', 'Kota', 'Kottayam', 'Kozhikode', 'Krishna', 'Kulgam', 'Kullu', 'Kupwara', 'Kurnool', 'Kurukshetra', 'Kurung', 'Kumey', 'Kushinagar', 'Kutch', 'Lahaul', 'and', 'Spiti', 'Lakhimpur', 'Lakhimpur', 'Kheri', 'Lakhisarai', 'Lalitpur', 'Latehar', 'Latur', 'Lawngtlai', 'Leh', 'Lohardaga', 'Lohit', 'Lower', 'Dibang', 'Valley', 'Lower', 'Subansiri', 'Lucknow', 'Ludhiana', 'Lunglei', 'Madhepura', 'Madhubani', 'Madurai', 'Mahamaya', 'Nagar', 'Maharajganj', 'Mahasamund', 'Mahbubnagar', 'Mahe', 'Mahendragarh', 'Mahoba', 'Mainpuri', 'Malappuram', 'Maldah', 'Malkangiri', 'Mamit', 'Mandi', 'Mandla', 'Mandsaur', 'Mandya', 'Mansa', 'Marigaon', 'Mathura', 'Mau', 'Mayurbhanj', 'Medak', 'Meerut', 'Mehsana', 'Mewat', 'Mirzapur', 'Moga', 'Mokokchung', 'Mon', 'Moradabad', 'Morena', 'Mumbai', 'City', 'Mumbai', 'suburban', 'Munger', 'Murshidabad', 'Muzaffarnagar', 'Muzaffarpur', 'Mysore', 'Nabarangpur', 'Nadia', 'Nagaon', 'Nagapattinam', 'Nagaur', 'Nagpur', 'Nainital', 'Nalanda', 'Nalbari', 'Nalgonda', 'Namakkal', 'Nanded', 'Nandurbar', 'Narayanpur', 'Narmada', 'Narsinghpur', 'Nashik', 'Navsari', 'Nawada', 'Nawanshahr', 'Nayagarh', 'Neemuch', 'Nellore', 'New', 'Delhi', 'Nilgiris', 'Nizamabad', 'North', '24', 'Parganas', 'North', 'Delhi', 'North', 'East', 'Delhi', 'North', 'Goa', 'North', 'Sikkim', 'North', 'Tripura', 'North', 'West', 'Delhi', 'Nuapada', 'Ongole', 'Osmanabad', 'Pakur', 'Palakkad', 'Palamu', 'Pali', 'Palwal', 'Panchkula', 'Panchmahal', 'Panchsheel', 'Nagar', 'district', '(Hapur)', 'Panipat', 'Panna', 'Papum', 'Pare', 'Parbhani', 'Paschim', 'Medinipur', 'Patan', 'Pathanamthitta', 'Pathankot', 'Patiala', 'Patna', 'Pauri', 'Garhwal', 'Perambalur', 'Phek', 'Pilibhit', 'Pithoragarh', 'Pondicherry', 'Poonch', 'Porbandar', 'Pratapgarh', 'Pratapgarh', 'Pudukkottai', 'Pulwama', 'Pune', 'Purba', 'Medinipur', 'Puri', 'Purnia', 'Purulia', 'Raebareli', 'Raichur', 'Raigad', 'Raigarh', 'Raipur', 'Raisen', 'Rajauri', 'Rajgarh', 'Rajkot', 'Rajnandgaon', 'Rajsamand', 'Ramabai', 'Nagar', '(Kanpur', 'Dehat)', 'Ramanagara', 'Ramanathapuram', 'Ramban', 'Ramgarh', 'Rampur', 'Ranchi', 'Ratlam', 'Ratnagiri', 'Rayagada', 'Reasi', 'Rewa', 'Rewari', 'Ri', 'Bhoi', 'Rohtak', 'Rohtas', 'Rudraprayag', 'Rupnagar', 'Sabarkantha', 'Sagar', 'Saharanpur', 'Saharsa', 'Sahibganj', 'Saiha', 'Salem', 'Samastipur', 'Samba', 'Sambalpur', 'Sangli', 'Sangrur', 'Sant', 'Kabir', 'Nagar', 'Sant', 'Ravidas', 'Nagar', 'Saran', 'Satara', 'Satna', 'Sawai', 'Madhopur', 'Sehore', 'Senapati', 'Seoni', 'Seraikela', 'Kharsawan', 'Serchhip', 'Shahdol', 'Shahjahanpur', 'Shajapur', 'Shamli', 'Sheikhpura', 'Sheohar', 'Sheopur', 'Shimla', 'Shimoga', 'Shivpuri', 'Shopian', 'Shravasti', 'Sibsagar', 'Siddharthnagar', 'Sidhi', 'Sikar', 'Simdega', 'Sindhudurg', 'Singrauli', 'Sirmaur', 'Sirohi', 'Sirsa', 'Sitamarhi', 'Sitapur', 'Sivaganga', 'Siwan', 'Solan', 'Solapur', 'Sonbhadra', 'Sonipat', 'Sonitpur', 'South', '24', 'Parganas', 'South', 'Delhi', 'South', 'Garo', 'Hills', 'South', 'Goa', 'South', 'Sikkim', 'South', 'Tripura', 'South', 'West', 'Delhi', 'Sri', 'Muktsar', 'Sahib', 'Srikakulam', 'Srinagar', 'Subarnapur', '(Sonepur)', 'Sultanpur', 'Sundergarh', 'Supaul', 'Surat', 'Surendranagar', 'Surguja', 'Tamenglong', 'Tarn', 'Taran', 'Tawang', 'Tehri', 'Garhwal', 'Thane', 'Thanjavur', 'The', 'Dangs', 'Theni', 'Thiruvananthapuram', 'Thoothukudi', 'Thoubal', 'Thrissur', 'Tikamgarh', 'Tinsukia', 'Tirap', 'Tiruchirappalli', 'Tirunelveli', 'Tirupur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Tonk', 'Tuensang', 'Tumkur', 'Udaipur', 'Udalguri', 'Udham', 'Singh', 'Nagar', 'Udhampur', 'Udupi', 'Ujjain', 'Ukhrul', 'Umaria', 'Una', 'Unnao', 'Upper', 'Siang', 'Upper', 'Subansiri', 'Uttar', 'Dinajpur', 'Uttara', 'Kannada', 'Uttarkashi', 'Vadodara', 'Vaishali', 'Valsad', 'Varanasi', 'Vellore', 'Vidisha', 'Viluppuram', 'Virudhunagar', 'Visakhapatnam', 'Vizianagaram', 'Vyara', 'Warangal', 'Wardha', 'Washim', 'Wayanad', 'West', 'Champaran', 'West', 'Delhi', 'West', 'Garo', 'Hills', 'West', 'Kameng', 'West', 'Khasi', 'Hills', 'West', 'Siang', 'West', 'Sikkim', 'West', 'Singhbhum', 'West', 'Tripura','Wokha', 'Yadgir', 'Yamuna', 'Nagar', 'Yanam', 'Yavatmal', 'Zunheboto'];
  const hola9 = useContext(UserContext);
  const greeting = "RealEstate";
  const greeting1 = "Furniture";
  const greeting2 = "Electronics";
  const greeting3 = "Cars";
  const greeting4 = "Bikes";
  const greeting5 = "Pets";
  const greeting6 = "Mobiles";
  const greeting7 = "Services";
  // const greeting4 = "Jobs";

  const telemetry = useSelector((state) => state.telemetry);
  const disptach = useDispatch();

  // const [loading,setLoading]=useState(false)

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(url + "api/adsapi");
      if (!response.statusText.OK == false) {
        throw Error("Could not fetch data");
      } else {
        hola9.sethola9DataApp(response.data.reverse());
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    disptach(add({ view: ["home"] }));
  }, []);

  const postTelemetry = () => {
    var formdata = new FormData();
    formdata.append("data", JSON.stringify(telemetry));

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "api/user/trackingTele", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        disptach(refreshTele());
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    // alert("are you closing window")
    // const handleTabClose = (event) => {
    //   event.preventDefault();
    //   if (
    //     !(
    //       Object.keys(telemetry?.form).length === 0 &&
    //       Object.keys(telemetry.views).length === 0 &&
    //       telemetry.product.length === 0
    //     )
    //   ) {
    //     postTelemetry();
    //   }
    //   return (event.returnValue = "Are you sure you want to exit?");
    // };
    // window.addEventListener("beforeunload", handleTabClose, " after clicking");
  }, []);

  document.title = "RotateKey - Home";
  return (
    <>
      {/* <Modal
        title="Welcome"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>This is a modal that automatically pops up after 5 seconds.</p>
      </Modal> */}
      <HomeSection />
      <Scroll />
      {/* <City/>  */}
      <main id="main" className="site-main overflow">
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <Feature /> */}
      <div>
        {/* <div style={{marginLeft:"85px",marginRight:"100px",backgroundColor:"white",marginTop:"34px"}}> */}

        <div style={{
          width: "90%",
          margin: "0 auto",
          // backgroundColor:"red",
          // display:"flex",

        }}>
          <TrendingAds />
        </div>
        <div style={{
          width: "80%",
          backgroundColor:"blue",
          margin: "0 auto", marginTop: '-70px'
        }}>
          <Owldemo1 greeting={greeting} />
        </div>

        <div style={{
          width: "80%",
          margin: "0 auto"
        }}>
          <Owldemo1 greeting={greeting1} />
        </div>

        <div style={{
          width: "80%",
          margin: "0 auto"
        }}>
          <Owldemo1 greeting={greeting2} />
        </div>
        <div style={{
          width: "80%",
          margin: "0 auto"
        }}>
          <AutoPlay />
        </div>

        <div style={{
          width: "80%",
          margin: "0 auto", marginTop: "-50px"
        }}>
          <Owldemo1 greeting={greeting3} />
        </div>

        <div style={{
          width: "80%",
          margin: "0 auto"
        }}>
          <Owldemo1 greeting={greeting4} />
        </div>

        <div style={{
          width: "80%",
          margin: "0 auto"
        }}>
          <Owldemo1 greeting={greeting5} />
        </div>

        <div style={{
          width: "80%",
          margin: "0 auto"
        }}>
          <Owldemo1 greeting={greeting6} />
        </div>

        <div style={{
          width: "80%",
          margin: "0 auto"
        }}>
          <Owldemo1 greeting={greeting7} />
        </div>

{/* </div> */}



        {/* <Owldemo1 greeting={greeting4} /> */}
      </div>
      <div style={isMobile ? revmob : revdesk}>
        <Review1 />
      </div>
      {/* <YouTubeChannel /> */}
    </>
  );
};

export default Home;
