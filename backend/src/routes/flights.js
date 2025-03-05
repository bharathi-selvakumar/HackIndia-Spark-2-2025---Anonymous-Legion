const express = require("express");
const axios = require("axios");
const router = express.Router();

// Flight tracking API using OpenSky Network
router.get("/", async (req, res) => {
    const { icao24 } = req.query;

    if (!icao24) {
        return res.status(400).json({ error: "Missing required parameter: icao24" });
    }

    try {
        const response = await axios.get(`https://opensky-network.org/api/states/all`);
        if (response.data && response.data.states) {
            const flight = response.data.states.find(state => state[0].toLowerCase() === icao24.toLowerCase());

            if (flight) {
                return res.json({
                    icao24: flight[0],
                    callsign: flight[1]?.trim() || "N/A",
                    origin_country: flight[2],
                    longitude: flight[5],
                    latitude: flight[6],
                    baro_altitude: flight[7],
                    velocity: flight[9],
                    heading: flight[10],
                    vertical_rate: flight[11],
                    on_ground: flight[8],
                    geo_altitude: flight[13],
                    squawk: flight[14]
                });
            } else {
                return res.status(404).json({ error: "Flight not found for this code" });
            }
        } else {
            return res.status(500).json({ error: "Invalid response from OpenSky API" });
        }
    } catch (error) {
        console.error("Error fetching flight data:", error.message);
        return res.status(500).json({ error: "Error fetching flight data" });
    }
});

module.exports = router;
