const express = require("express");
const router = express.Router();

 
const distances = {
    "New York (JFK) - Los Angeles (LAX)": 3975,
    "New York (JFK) - Chicago (ORD)": 1187,
    "Chicago (ORD) - Los Angeles (LAX)": 2805,
    "Chicago (ORD) - Atlanta (ATL)": 990,
    "Atlanta (ATL) - Los Angeles (LAX)": 3110,
    "New York (JFK) - Miami (MIA)": 1757,
    "Miami (MIA) - Atlanta (ATL)": 964,
    "New York (JFK) - Dallas (DFW)": 2235,
    "Dallas (DFW) - Los Angeles (LAX)": 1985,
    "San Francisco (SFO) - Los Angeles (LAX)": 543,
    "New York (JFK) - San Francisco (SFO)": 4160,
    "San Francisco (SFO) - Seattle (SEA)": 1093,
    "Chicago (ORD) - Denver (DEN)": 1442,
    "Denver (DEN) - Seattle (SEA)": 2112,
    "Atlanta (ATL) - Denver (DEN)": 1945,
    "Los Angeles (LAX) - Seattle (SEA)": 1545,
    "Miami (MIA) - Dallas (DFW)": 1788,
    "Las Vegas (LAS) - Denver (DEN)": 1018,
    "Las Vegas (LAS) - Los Angeles (LAX)": 386,
    "Chicago (ORD) - Las Vegas (LAS)": 2440,
    "New York (JFK) - Las Vegas (LAS)": 3621,
    "Seattle (SEA) - Chicago (ORD)": 2800,
    "Dallas (DFW) - Seattle (SEA)": 2760
};

router.get("/", (req, res) => {
    const { origin, destination } = req.query;
    const key = `${origin}-${destination}`;
    res.json({ distance: distances[key] || "Data not available" });
});

module.exports = router;
