const express = require("express");
const router = express.Router();

// Mock flights
const flights = [
    { icao24: "aabbcc", callsign: "AA100", origin: "JFK", destination: "LAX" },
    { icao24: "ddeeff", callsign: "DL200", origin: "ORD", destination: "ATL" }
];

router.get("/", (req, res) => {
    res.json(flights);
});

module.exports = router;
