const express = require("express");
const axios = require("axios");
const { aviationStackApiUrl, apiKeys } = require("../config/apiConfig");

const router = express.Router();

router.get("/", async (req, res) => {
    const { flight_iata } = req.query;
    if (!flight_iata) return res.status(400).json({ error: "Flight IATA code required" });

    try {
        const response = await axios.get(`${aviationStackApiUrl}/flights`, {
            params: {
                access_key: apiKeys.aviationStack,
                flight_iata
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching flight history" });
    }
});

module.exports = router;
