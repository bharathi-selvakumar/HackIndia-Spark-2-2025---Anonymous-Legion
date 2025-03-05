// const express = require("express");
// const axios = require("axios");
// const { dijkstra } = require("../utils/dijkstra");
// require("dotenv").config();

// const router = express.Router();

// router.get("/shortest-route", async (req, res) => {
//     const { origin, destination } = req.query;
//     if (!origin || !destination) return res.status(400).json({ error: "Origin and destination required" });

//     try {
//         // Fetch real flight routes using Amadeus API
//         const response = await axios.get(
//             `https://test.api.amadeus.com/v1/schedule/flights?origin=${origin}&destination=${destination}`,
//             { headers: { Authorization: `Bearer ${process.env.AMADEUS_API_KEY}` } }
//         );

//         const routes = response.data.data;
//         let flightGraph = {};

//         // Build the flight graph dynamically
//         routes.forEach((route) => {
//             const from = route.origin.iataCode;
//             const to = route.destination.iataCode;
//             const distance = route.totalFlightTime; // Estimated time as weight

//             if (!flightGraph[from]) flightGraph[from] = {};
//             flightGraph[from][to] = distance;
//         });

//         const shortestPath = dijkstra(flightGraph, origin, destination);
//         res.json({ origin, destination, path: shortestPath });
//     } catch (error) {
//         res.status(500).json({ error: "Error fetching flight routes" });
//     }
// });
// module.exports = router;

const express = require("express");
const axios = require("axios");
const { dijkstra } = require("../services/dijkstraService");
const { aviationStackApiUrl, apiKeys } = require("../config/apiConfig");

const router = express.Router();

router.get("/", async (req, res) => {
    const { origin, destination } = req.query;
    if (!origin || !destination) {
        return res.status(400).json({ error: "Origin and destination required" });
    }

    try {
        // 🔹 Fetch real flight routes from the AviationStack API
        const response = await axios.get(`${aviationStackApiUrl}/routes`, {
            params: {
                access_key: apiKeys.aviationStack,
                dep_iata: origin,
            }
        });

        // 🔹 Construct the flightGraph dynamically
        const flightGraph = {};
        response.data.data.forEach(route => {
            if (!flightGraph[route.departure_iata]) {
                flightGraph[route.departure_iata] = {};
            }
            flightGraph[route.departure_iata][route.arrival_iata] = route.distance;
        });

        // 🔹 Find the shortest path
        const shortestPath = dijkstra(flightGraph, origin, destination);
        res.json({ origin, destination, path: shortestPath });

    } catch (error) {
        console.error("Error fetching flight routes:", error);
        res.status(500).json({ error: "Error fetching flight routes" });
    }
});

module.exports = router;
