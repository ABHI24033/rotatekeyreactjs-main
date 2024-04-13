import React from 'react'
import axios from 'axios'


const API_endpoint = `https://api.openwheathermap.org/data/2.5/wheather?`;
const API_key =`b8bde4cf0937d0558186717f66cd0abc`
function Geolocation() {
    const[latitude,setLatitude]=React.useState('');
    const[longitude,setLongitude]=React.useState('');
    const[responseData,setResponseData] = React.useState({})
    React.useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
         })
    let finalAPIEndPoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_key}`
        axios.get(finalAPIEndPoint)
        .then((response)=>{
            setResponseData(response.data)
        })
    },[])
  return (
   <>
   geolocation is there
   <h1>{setResponseData.name}</h1>
   {/* <h1>{setResponseData.main.temp}</h1> */}

   </>
  )
}

export default Geolocation