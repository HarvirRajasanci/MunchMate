const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = 5000;
require('dotenv').config();

// Use CORS middleware to allow requests from all origins (you can configure this more strictly later)
app.use(cors()); // This will allow all origins to access your backend

// Your existing backend code...
const GOOGLE_API_KEY = "AIzaSyBd2BfuaPYKS4fHN1kS86JBC8GFu2Z9fEI";
const location = "49.2664,-123.2500"; // Static location (latitude, longitude)
//const keyword = "Thai Food Resturant";

app.get("/api/restaurants", async (req, res) => {
  const { keyword } = req.query;

  try {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
      {
        params: {
          location,
          radius: 5000,
          keyword, // Use the received keyword here
          key: GOOGLE_API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from Google API:", error);
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
