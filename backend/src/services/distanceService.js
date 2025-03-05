const axios = require("axios");
const { GOOGLE_MAPS_DISTANCE_URL, API_KEYS } = require("../config/apiConfig");

async function getAirportDistance(origin, destination) {
    try {
        const response = await axios.get(`${GOOGLE_MAPS_DISTANCE_URL}?origins=${origin}&destinations=${destination}&key=${API_KEYS.GOOGLE_MAPS}`);
        return response.data.rows[0].elements[0].distance.text;
    } catch (error) {
        console.error("Error fetching airport distance:", error);
        return "Distance not available";
    }
}

module.exports = { getAirportDistance };
