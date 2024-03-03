// components/GoogleMap.tsx
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "600px",
  borderRadius: "10px"
};

const center = {
  lat: 9.695273295299064,
  lng: 105.48511737301513
};

const CustomMap: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={14}
      >
        <Marker
          position={{
            lat: 9.695273295299064,
            lng: 105.48511737301513
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default CustomMap;