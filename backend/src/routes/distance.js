const express = require("express");
const axios = require("axios");
const { googleMapsApiUrl, apiKeys } = require("../config/apiConfig");

const router = express.Router();

router.get("/", async (req, res) => {
    const { origin, destination } = req.query;
    if (!origin || !destination) return res.status(400).json({ error: "Origin and destination required" });

    try {
        const response = await axios.get(`${googleMapsApiUrl}/distancematrix/json`, {
            params: {
                key: apiKeys.googleMaps,
                origins: origin,
                destinations: destination
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error calculating airport distance" });
    }
});

module.exports = router;
