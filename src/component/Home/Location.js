import React, { useEffect, useState } from "react";
// import axios from 'axios'
// import { useLocation} from "react-router-dom";
import { useGeolocated } from "react-geolocated";
// import { DeblurOutlined } from '@mui/icons-material';
import { url } from "../env";

const Location = () => {
  const [products, setProducts] = useState([]);
  const distance = () => {
    let distanceAdsCurrent = {};
    products.map((ads) => {
      let distance;

      if (lat === ads.fields.lat && lon === ads.fields.lon) {
        distance = 0;
      } else {
        var radlat1 = (Math.PI * lat) / 180;
        var radlat2 = (Math.PI * ads.fields.lat) / 180;
        var theta = lon - ads.fields.lon;
        var radtheta = (Math.PI * theta) / 180;
        var dist =
          Math.sin(radlat1) * Math.sin(radlat2) +
          Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
          dist = 1;
        }
        dist = Math.acos(dist);
        dist = (dist * 180) / Math.PI;
        dist = dist * 60 * 1.1515;
        if (true) {
          dist = dist * 1.609344;
        }
        distance = dist;
        distanceAdsCurrent[ads.fields.ads] = distance;
        // setdistanceAdsCurrent({...distanceAdsCurrent,[ads.fields.ads]:distance})
      }
    });
    localStorage.setItem("distancebetweenadsCurrent", distanceAdsCurrent);
  };

  const coords = useGeolocated();
  const lat = coords.coords !== undefined ? coords.coords.latitude : 0;
  const lon = coords.coords !== undefined ? coords.coords.longitude : 0;
  if (lat !== 0) {
    distance();
  }

  // const [addressCordinate,setaddressCordinate] = useState({"lat":null,"lon":null})

  const [distanceAdsCurrent, setdistanceAdsCurrent] = useState({});

  // const getProducts = async () =>{

  //     const response = await axios.get("http://192.168.0.104:8000/api/adsapi/")
  //     // setProducts(response.data)
  // }

  // let location={"lat":geolocation.latitudem,"lon":geolocation.longitude}

  //     const AddressToCordinate=(address,id)=>{
  //         const url = 'https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?address='+address;

  //         const options = {
  //             method: 'GET',
  //             headers: {
  //              'X-RapidAPI-Key': '7fded38e7emsh3c4fb60f3b8017cp1c084bjsn32180c499f5f',
  //               'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'
  //                          }
  //                               };

  // fetch(url, options)
  // 	.then(res => res.json())
  //         distance(addressCordinate.lat,addressCordinate.lon,12.9628018,77.5714015,id)

  //     }

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(url + "api/adsapi/AdsAdressLatLon", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("result", result);
        setProducts(result);
      })
      .catch((error) => console.log("error", error));
  }, []);
  //create array for all id contain near by distance one by one

  //## code for converting latitude and longitude to current address

  // const url = 'https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?lat=12.9140298&lng=77.6067445';

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '7fded38e7emsh3c4fb60f3b8017cp1c084bjsn32180c499f5f',
  //     'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'
  //   }
  // };

  // fetch(url, options)
  //     .then(res => res.json())

  //code for converting address to current latitude and longitude
  //         const url = 'https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?address=Sumedha Learning Center, 8th Main Road, BTM Layout, Bengaluru, Karnataka, 560076, India';

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '7fded38e7emsh3c4fb60f3b8017cp1c084bjsn32180c499f5f',
  //     'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'
  //   }
  // };

  // fetch(url, options)
  // 	.then(res => res.json())
  // 	.then(json => console.log("!!data to address to latitude and logintude",json))
  // 	.catch(err => console.error('error:' + err));
  return <>Location</>;
};

export default Location;
