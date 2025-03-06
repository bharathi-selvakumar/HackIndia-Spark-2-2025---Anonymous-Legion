const express = require("express");
const router = express.Router();

let searchHistory = [];

router.post("/", (req, res) => {
    searchHistory.push(req.body);
    res.json({ message: "Search saved", history: searchHistory });
});

router.get("/", (req, res) => {
    res.json(searchHistory);
});

module.exports = router;
