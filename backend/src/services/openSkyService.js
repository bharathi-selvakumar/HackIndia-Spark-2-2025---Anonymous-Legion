const axios = require("axios");
const { OPEN_SKY_URL } = require("../config/apiConfig");

async function getLiveFlights() {
    try {
        const response = await axios.get(OPEN_SKY_URL);
        return response.data.states.map(flight => ({
            icao: flight[0], callsign: flight[1], origin: flight[2], lat: flight[6], lon: flight[5], altitude: flight[7]
        }));
    } catch (error) {
        console.error("Error fetching live flight data:", error);
        return [];
    }
}

module.exports = { getLiveFlights };
