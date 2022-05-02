import React, { useEffect, useState } from "react";

import { Marker } from "@react-google-maps/api";

const position = {
  lat: 37.772,
  lng: -122.214,
};

export default function Markers() {
  const [coords, setCoords] = useState([]);

  useEffect(() => {
    const posSetter = setInterval(() => {
      const newPos = {
        lat: position.lat + Math.random(),
        lng: position.lng + Math.random(),
      };
      setCoords((prev) => [...prev, newPos]);
    }, 3000);
    return () => clearInterval(posSetter);
  }, []);

  return coords.map((coord, index) => <Marker key={index} position={coord} />);
}
