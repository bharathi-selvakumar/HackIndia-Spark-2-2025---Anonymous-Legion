const express = require("express");
const router = express.Router();
const { getAirlineDetails } = require("../services/aviationStackService");

router.get("/", async (req, res) => {
    const iataCode = req.query.iata;
    if (!iataCode) {
        return res.status(400).json({ error: "Airline IATA code required" });
    }

    const airline = await getAirlineDetails(iataCode);
    res.json(airline);
});

module.exports = router;
