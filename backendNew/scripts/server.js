const express = require("express");
const app = express();
const port = 5757;

 
app.use(express.json());
const cors = require("cors");
app.use(cors());  

 
app.use("/airlines", require("../data/airlines"));
app.use("/distance", require("../data/distance"));
app.use("/flights", require("../data/flights"));
app.use("/shortest-route", require("../data/shortestRoute"));
app.use("/history", require("../data/history"));

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
