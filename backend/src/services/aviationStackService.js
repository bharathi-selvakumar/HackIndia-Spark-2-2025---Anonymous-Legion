const axios = require("axios");
const { aviationStackKey } = require("../config/apiConfig");

async function getAirlineDetails(iataCode) {
    try {
        const response = await axios.get("http://api.aviationstack.com/v1/airlines", {
            params: { access_key: aviationStackKey, iata_code: iataCode }
        });

        if (!response.data || response.data.data.length === 0) {
            return { error: "No airline found for this IATA code" };
        }

        return response.data.data[0]; // Return the first airline match
    } catch (error) {
        console.error("Error fetching airline data:", error.message);
        return { error: "Error fetching airline data" };
    }
}

module.exports = { getAirlineDetails };
