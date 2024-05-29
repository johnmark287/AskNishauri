// src/App.js

import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [address, setAddress] = useState("");

  const getGeocode = async () => {
    const apiKey = "f796cb79aba840da993f38af94f8cb5f"; // Replace with your actual API key
    const geocodeUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

    try {
      const response = await axios.get(geocodeUrl);
      const results = response.data.results;
      if (results.length > 0) {
        setAddress(results[0].formatted);
      } else {
        setAddress("No address found");
      }
    } catch (error) {
      console.error("Error fetching geocode:", error);
      setAddress("Error fetching address");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Geocode Converter</h1>
      <div>
        <label>
          Latitude:
          <input
            type="text"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Longitude:
          <input
            type="text"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </label>
      </div>
      <button onClick={getGeocode}>Get Address</button>
      <div>
        <h2>Address:</h2>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default App;
