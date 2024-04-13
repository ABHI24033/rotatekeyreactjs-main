import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Base/Header";
import { Home } from "./component/Home/Home";

import Footer from "./component/Base/Footer";
import Signup from "./component/Account/Signup/Signup";
import Login from "./component/Account/Login/Login";
import Contact from "./component/Pages/Contact/Contact";
import About from "./component/Pages/About/About";
import Refundpolicy from "./component/Pages/Refundpolicy";
import Listingpolicy from "./component/Pages/Listingpolicy";
import Copyrightpolicy from "./component/Pages/Copyrightpolicy";
import Privacypolicy from "./component/Pages/Privacypolicy";
import ShowProduct from "./component/Ads/Allads/ShowProduct";
import AddProduct from "./component/Ads/Allads/AddProduct";
import ProductDetails from "./component/Ads/Allads/ProductDetails";
import UpdateProduct from "./component/Ads/Allads/UpdateProduct";
import ForgotPassword from "./component/Account/Login/ForgotPassword";
import BlogDetails from "./component/Blogs/BlogDetails";
import ShowBlog from "./component/Blogs/ShowBlog";
import UpdateBlog from "./component/Blogs/UpdateBlog";
import AddBlog from "./component/Blogs/AddBlog";
import Dashboard from "./component/Account/Dashboard/Dashboard";
import Logout from "./component/Account/Login/Logout";
import Profile from "./component/Account/Profile/Profile";
import Wishlist from "./component/Account/Wishlist/Wishlist";
// import Location from "./component/Home/Location";
import CheckOTP from "./component/Account/Login/CheckOtp";
import Registration from "./component/Account/Login/Registration";
// import Geolocation from "./component/Home/Geolocation";
import Footcat from "./component/Base/FootCategory/Footcat";
import Payments from "./component/Ads/Payment/Payments";
import HomeRealEsate from "./component/Category/RealEstate/HomeRealEstate/HomeRealEsate";
import Faq from "./component/Pages/Faq/Faq";
import DashAds from "./component/Account/Dashboard/DashAds/DashAds";
import Policy from "./component/Category/RealEstate/section/Policy";
import Pricing from "./component/Ads/Pricing/Pricing";
import HomeScreen from "./src/screens/home/HomeScreen";
import AppPaths from "./src/lib/appPaths";
import LoginScreen from "./src/screens/auth/login/LoginScreen";
import SignupScreen from "./src/screens/auth/signup/SignupScreen";
import { createContext, useEffect, useState } from "react";
// import TodoContextProvider from "./contextref";
import "antd/dist/antd.min.css";
import { hola9Data } from "./context/context";
// import { url } from "./component/env";
// import ScrollTopButton from "./component/ScrollTopButton";
import YouTubeChannel from "./component/Ads/Video/youTubeChannel";
import EdistAds from "./component/Ads/Allads/EdistAds";
import AdminLogin from "./component/Account/AdminLogin/AdminLogin";
// New Dashboard
//Start
import FullAdminDash from "./component/Dashboard/FullAdminDash";
import ActivePlans from "./component/Ads/Pricing/ActivePlans";
import { Provider } from "react-redux";
import store from "./store/store";
import Terms from "./component/Pages/Terms";
import Pets from "./component/Category/Animals/Pets";
import EducationCategory from "./component/Category/Education/EducationCategory";
import FurnitureCategory from "./component/Category/Furniture/FurnitureCategory";
import SalonCategory from "./component/Category/Salon/SalonCategory";
import ElectronicsCategory from "./component/Category/Electronics/ElectronicsCategory";
import HealthCategory from "./component/Category/Health/HealthCategory";
import ServiceCategory from "./component/Category/Services/ServiceCategory";
// import JobCategory from "./component/Category/Jobs/JobCategory";
import TravelCategory from "./component/Category/Travels/TravelCategory";
import PhotographyCategory from "./component/Category/Photography/PhotographyCategory";
import CarCategory from "./component/Category/Automotive/CarCategory";
import BikeCategory from "./component/Category/Bikes/BikeCategory";
import MobilesCategory from "./component/Category/Mobiles/MobilesCategory";
// import EnqueryForm from "./Shared/Category/EnqueryForm";
import BiziverseCRM from "./component/Dashboard/BiziverseCRM";
import Spiner from "./component/Spiner";
// import Spinner from "./Spinner";
import ScrollToTop from "../src/component/ScrollTop/ScrollToTop";
import "antd/dist/antd.css";
// import BusinessProfileForm from "./component/BusinessProfile/BusinessProfileForm";
import Support from "../src/component/Base/FootCategory/Support";
import Career from "./component/Pages/career/Career";
import UserActiveAds from "./component/Ads/userAds/UserActiveAds";
import UpdatingSoon from "./component/Base/UpdatingSoon";
import { PremiumAds } from "./component/Premium-Ads/PremiumAds";
// import Business from "./src/business/Business";
import { AuthContextProvider } from "./component/Ads/messageAdsChat/ChatApp/context/AuthContext";
import { ChatContextProvider } from "./component/Ads/messageAdsChat/ChatApp/context/ChatContext";
import Pri from "./src/ForAndroidAppContent/Pri";
import Listing from "./src/ForAndroidAppContent/Listing";
import Copyright from "./src/ForAndroidAppContent/Copyright";
import TermsAndCon from "./src/ForAndroidAppContent/TermsAndCon";
// import { requestFirebaseNotificationPermission } from "./firebase";
import ChatHome from "./component/Ads/messageAdsChat/ChatApp/ChatHome";
import ShowProductsSearch from "./component/Ads/Allads/ShowProductsSearch";
import BusinessPricing from "./business/BusinessPricing";
import AllCategories from "./business/AllCategories";
import BusinessProfileDashboard from "./component/BussinessprofileDashboard/BusinessProfileDashboard";
import LeftDashboard from "./component/BussinessprofileDashboard/LeftBussinessDashboard";

import LeftBussinessDashboard from "./component/BussinessprofileDashboard/LeftBussinessDashboard";
import EditProfile from "./component/BussinessprofileDashboard/EditProfile"
import ChatAndCommu from "./component/BussinessprofileDashboard/ChatAndCommu"
import Featured from "./component/BussinessprofileDashboard/Featured"
import Hola9Help from "./component/BussinessprofileDashboard/Hola9Help"
import MyAds from "./component/BussinessprofileDashboard/MyAds"
import Packages from "./component/BussinessprofileDashboard/Packages"
import Orders from "./component/BussinessprofileDashboard/Orders"
import Verified from "./component/BussinessprofileDashboard/Verified"
import Wallet from "./component/BussinessprofileDashboard/Wallet"
import BussinessDashboard from "./component/BussinessprofileDashboard/BussinessDashboard";


export const UserContext = createContext();
function App() {
  const [loading, setLoading] = useState(true);
  const [loginRef, setLoginRef] = useState(false);
  const [userid, setUserID] = useState(null);
  const [locality, setLocality] = useState(null);
  // const hola9DataApp1=hola9Data
  const [hola9DataApp, sethola9DataApp] = useState([]);
  const [activePlan, setActivePlan] = useState([]);
  const [tokenValue, setTokenValue] = useState(null);
  const [pricing, setPricing] = useState(true);
  const [searchBoxLocaity, setsearchBoxLocaity] = useState(null);
  const [filterBy, setFilterBy] = useState(false);

  useEffect(() => { });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  const changeTheme = (value) => {
    if (true) {
      setLoginRef(true);
    }
  };
  useEffect(() => { }, [window.location.pathname]);

  return (
    <>
      {/* {window.location.pathname === "/privicy-policy" ? (
        <BrowserRouter>
          <Routes>
            <Route exact path="/privicy-policy" element={<Pri />} />
          </Routes>
        </BrowserRouter>
      ) : null} */}
      {window.location.pathname === "/privicy-policy" ||
        window.location.pathname === "/listing-policy" ||
        window.location.pathname === "/copyright-policy" ||
        window.location.pathname === "/terms-condition" ? (
        <BrowserRouter>
          <Routes>
            <Route exact path="/privicy-policy" element={<Pri />} />
            <Route exact path="/listing-policy" element={<Listing />} />
            <Route exact path="/copyright-policy" element={<Copyright />} />
            <Route exact path="/terms-condition" element={<TermsAndCon />} />
          </Routes>
        </BrowserRouter>
      ) : loading ? (
        <Spiner />
      ) : (
        <Provider store={store}>
          <UserContext.Provider
            value={{
              loginRef,
              changeTheme,
              hola9DataApp,
              sethola9DataApp,
              userid,
              setUserID,
              activePlan,
              setActivePlan,
              tokenValue,
              setTokenValue,
              pricing,
              setPricing,
              locality,
              setLocality,
              searchBoxLocaity,
              setsearchBoxLocaity,
              filterBy,
              setFilterBy,
            }}
          >
            <AuthContextProvider>
              <ChatContextProvider>
                <BrowserRouter>
                  <ScrollToTop />
                  <Header />

                  {/* <Geolocation/> */}
                  <Routes>
                    <Route path="/" exact element={<Home />} />
                    {/* <Route
                      path="/businessForm"
                      exact
                      element={<BusinessProfileForm />}
                    /> */}
                    <Route path="/career" exact element={<Career />} />
                    <Route path="/faq" exact element={<Faq />} />
                    <Route path="/activeAds" exact element={<DashAds />} />
                    <Route path="/contact" exact element={<Contact />} />
                    <Route path="/aboutus" exact element={<About />} />
                    {" "}
                    <Route
                      path="/allCategories"
                      exact
                      element={<AllCategories />}
                    />
                    <Route
                      path="/refundPolicy"
                      exact
                      element={<Refundpolicy />}
                    />
                    <Route
                      path="/listingPolicy"
                      exact
                      element={<Listingpolicy />}
                    />
                    <Route
                      path="/copyrightPolicy"
                      exact
                      element={<Copyrightpolicy />}
                    />
                    <Route
                      path="/terms-of-service/"
                      exact
                      element={<Terms />}
                    />
                    <Route
                      path="/privacyPolicy"
                      exact
                      element={<Privacypolicy />}
                    />
                    <Route
                      path="/updatingSoon"
                      exact
                      element={<UpdatingSoon />}
                    />
                    <Route
                      path="/cat/RealEstate"
                      exact
                      element={<HomeRealEsate />}
                    />
                    <Route path="/cat/Pets" exact element={<Pets />} />
                    <Route path="/cat/Cars" exact element={<CarCategory />} />
                    <Route path="/cat/Bike" exact element={<BikeCategory />} />
                    <Route
                      path="/cat/education"
                      exact
                      element={<EducationCategory />}
                    />
                    <Route
                      path="/cat/furniture"
                      exact
                      element={<FurnitureCategory />}
                    />
                    <Route
                      path="/cat/salon"
                      exact
                      element={<SalonCategory />}
                    />
                    <Route
                      path="/cat/electronics"
                      exact
                      element={<ElectronicsCategory />}
                    />
                    <Route
                      path="/cat/health"
                      exact
                      element={<HealthCategory />}
                    />
                    {/* <Route path="/cat/jobs" exact element={<JobCategory />} /> */}
                    <Route
                      path="/cat/Mobiles"
                      exact
                      element={<MobilesCategory />}
                    />
                    <Route
                      path="/cat/services"
                      exact
                      element={<ServiceCategory />}
                    />
                    <Route
                      path="/cat/Travels"
                      exact
                      element={<TravelCategory />}
                    />
                    <Route
                      path="/cat/photography"
                      exact
                      element={<PhotographyCategory />}
                    />
                    {/* <Route path="/catergoryform" exact element={<CategoryForm  />} /> */}
                    <Route
                      path="/ads-listing/"
                      exact
                      element={<ShowProductsSearch />}
                    />
                    <Route
                      path="/add-product/"
                      exact
                      element={<AddProduct />}
                    />
                    <Route
                      path="/ads-listing/:id"
                      element={<ProductDetails />}
                    />
                    <Route
                      path="/ads-listing/category/:category"
                      element={<ShowProduct />}
                    />
                    <Route
                      path="/ads-listing/category/:category/subcategory/:subcategory"
                      element={<ShowProduct />}
                    />
                    <Route
                      path="/ads-listing/location/:location"
                      element={<ShowProduct />}
                    />
                    <Route
                      path="/ads-listing/realEstate/:realEstate"
                      element={<ShowProduct />}
                    />
                    <Route path="/:id/update/" element={<UpdateProduct />} />
                    <Route path="/forgot-pswd/" element={<ForgotPassword />} />
                    <Route
                      path="/api/user/reset/:uid/:id"
                      element={<ForgotPassword />}
                    />
                    <Route
                      path="/blogs-listing/:id/"
                      element={<BlogDetails />}
                    />
                    <Route
                      path="/blogs-listing/"
                      exact
                      element={<ShowBlog />}
                    />
                    <Route
                      path="/blogs-listing/category/:category"
                      element={<ShowBlog />}
                    />
                    <Route path="/:id/update/" element={<UpdateBlog />} />
                    <Route path="/add-blog/" exact element={<AddBlog />} />
                    {/* //apply the telemetry view on down of compoentn */}
                    <Route path="/pricing/" exact element={<Pricing />} />
                    <Route path="/pricing/:id/" exact element={<Pricing />} />
                    <Route
                      path="/activeplans/"
                      exact
                      element={<ActivePlans />}
                    />
                    <Route path="/dashboard/" exact element={<Dashboard />} />
                    <Route
                      path="/dashboard/:token/"
                      exact
                      element={<Dashboard />}
                    />
                    <Route
                      path="/dashboard/profile/"
                      exact
                      element={<Profile />}
                    />
                    <Route
                      path="/dashboard/wishlist/:id/"
                      exact
                      element={<Wishlist />}
                    />
                    <Route
                      path="/dashboard/wishlist/"
                      exact
                      element={<Wishlist />}
                    />
                    <Route path="/signup/" exact element={<Signup />} />
                    <Route path="/login/" exact element={<Login />} />
                    <Route path="/checkotp/" exact element={<CheckOTP />} />
                    <Route
                      path="/registration/"
                      exact
                      element={<Registration />}
                    />
                    <Route
                      path="/ads-listing/category/:category/locality/:locality"
                      element={<ShowProduct />}
                    />
                    <Route path="/logout/" exact element={<Logout />} />
                    <Route path="/payment/" exact element={<Payments />} />
                    <Route
                      path="/YouTubeChannel/"
                      exact
                      element={<YouTubeChannel />}
                    />
                    <Route path="/editAds/:id" exact element={<EdistAds />} />
                    <Route
                      path="/activeUserAds/:id"
                      exact
                      element={<UserActiveAds />}
                    />
                    <Route
                      path="/premium-ads/"
                      exact
                      element={<PremiumAds />}
                    />
                    <Route
                      path="/trending-ads/"
                      exact
                      element={<PremiumAds TrendingAds="TrendingAds" />}
                    />
                    <Route
                      path="/biziverse/"
                      exact
                      element={<BiziverseCRM />}
                    />
                    {/* <Route path="/admin/" exact element={<AdminDashboard/>}/> */}
                    {/* <Route path="/admin/" exact element={<Navbar/>}/> */}
                    <Route path="/admin/" exact element={<FullAdminDash />} />
                    <Route
                      path="/hola9-login/"
                      exact
                      element={<AdminLogin />}
                    />
                    <Route path="/policy/" exact element={<Policy />} />

                    <Route path="/businessdashboard/" exact element={<BussinessDashboard />} />
                    <Route path="/businessdashboard/chatandcommu/" exact element={<ChatAndCommu />} />

                    <Route path="/BusinessProfileDashboard/" exact element={<BusinessProfileDashboard />} />
                    <Route path="/LeftDashboard/" exact element={<LeftBussinessDashboard />} />
                    <Route path="/Featured/" exact element={<Featured/>} />



                    {/* <Route path="/enquiry" exact element={<EnqueryForm/>} /> */}
                    {/* chat system */}
                    <Route
                      path={AppPaths.HOME}
                      exact
                      element={<HomeScreen />}
                    />
                    <Route
                      path={AppPaths.CHAT_ROOM}
                      exact
                      element={<HomeScreen />}
                    />
                    {/* <Route path="business" exact element={<Business />} /> */}
                    <Route
                      path={AppPaths.LOGIN}
                      exact
                      element={<LoginScreen />}
                    />
                    <Route
                      path={AppPaths.SIGN_UP}
                      exact
                      element={<SignupScreen />}
                    />
                    <Route path="/user-chat/:id" exact element={<ChatHome />} />
                    <Route
                      path="/business-pricing/:id"
                      exact
                      element={<BusinessPricing />}
                    />
                  </Routes>
                  {/* <Support /> */}

                  <Footcat />

                  <Footer />
                  {/* <ScrollTopButton/> */}
                </BrowserRouter>
              </ChatContextProvider>
            </AuthContextProvider>
          </UserContext.Provider>
        </Provider>
      )}
      <div id="root"></div>
    </>
  );
}

export default App;
