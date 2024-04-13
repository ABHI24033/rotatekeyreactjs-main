import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MapLocationAds(props) {
  useEffect(() => {
    const ifameData = document.getElementById("iframeId");
    const lat = props.props.lati;
    const lon = props.props.long;
    ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed`;
  });
  return (
    // Important! Always set the container height explicitly
    <div style={{ marginBottom: "10px", width: "100%" }}>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAK7tRWWnPs7FH2cnUnQWWTiLKB7-hh1bQ" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
        
      </GoogleMapReact> */}
      <div>
        <iframe id="iframeId" height="500px" width="100%"></iframe>
      </div>
    </div>
  );
}
