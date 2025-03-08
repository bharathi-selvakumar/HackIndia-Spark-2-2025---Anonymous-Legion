const express = require("express");
const router = express.Router();

 const airlines = {
    "AA": { name: "American Airlines", country: "USA", iata: "AA" },
    "DL": { name: "Delta Airlines", country: "USA", iata: "DL" },
    "UA": { name: "United Airlines", country: "USA", iata: "UA" },
    "BA": { name: "British Airways", country: "United Kingdom", iata: "BA" },
    "LH": { name: "Lufthansa", country: "Germany", iata: "LH" },
    "AF": { name: "Air France", country: "France", iata: "AF" },
    "EK": { name: "Emirates", country: "United Arab Emirates", iata: "EK" },
    "QR": { name: "Qatar Airways", country: "Qatar", iata: "QR" },
    "SQ": { name: "Singapore Airlines", country: "Singapore", iata: "SQ" },
    "CX": { name: "Cathay Pacific", country: "Hong Kong", iata: "CX" },
    "QF": { name: "Qantas", country: "Australia", iata: "QF" },
    "AI": { name: "Air India", country: "India", iata: "AI" },
    "TK": { name: "Turkish Airlines", country: "Turkey", iata: "TK" },
    "JL": { name: "Japan Airlines", country: "Japan", iata: "JL" },
    "AC": { name: "Air Canada", country: "Canada", iata: "AC" }
};
router.get("/", (req, res) => {
    const iataCode = req.query.iata;
    res.json(airlines[iataCode] || { error: "Airline not found" });
});

module.exports = router;
