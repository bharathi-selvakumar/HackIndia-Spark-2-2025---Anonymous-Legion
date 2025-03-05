require("dotenv").config();

module.exports = {
    OPEN_SKY_URL: "https://opensky-network.org/api/states/all",
    AVIATIONSTACK_URL: "http://api.aviationstack.com/v1/flights",
    GOOGLE_MAPS_DISTANCE_URL: "https://maps.googleapis.com/maps/api/distancematrix/json",
    API_KEYS: {
        AVIATIONSTACK: process.env.AVIATIONSTACK_API_KEY,
        GOOGLE_MAPS: process.env.GOOGLE_MAPS_API_KEY
    }
};
