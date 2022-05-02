import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Markers from "./Markers";

const containerStyle = {
  width: "80vw",
  margin: "auto",
  marginTop: "50px",
  height: "80vh",
};

const center = {
  lat: 37.772,
  lng: -122.214,
};

const Map = () => {
  console.log("rendered");
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Markers />
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map);
