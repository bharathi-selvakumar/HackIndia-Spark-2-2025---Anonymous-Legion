const express = require("express");
const { dijkstra } = require("./dijkstraService");
const flightGraph = require("../data/flightGraph");

const router = express.Router();

router.get("/", (req, res) => {
    const { origin, destination } = req.query;

    if (!origin || !destination || !flightGraph[origin] || !flightGraph[destination]) {
        return res.status(400).json({ error: "Invalid origin or destination" });
    }

     
    const routes = dijkstra(flightGraph, origin, destination);

    if (!routes || routes.length === 0) {
        return res.status(404).json({ error: "No valid routes found" });
    }

    res.json({
        origin,
        destination,
        routes
    });
});

module.exports = router;
