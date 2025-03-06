import axios from "axios";

const API_BASE_URL = "http://localhost:5757"; // Update this if needed

export const getShortestRoute = async (origin, destination) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/shortest-route`, {
            params: { origin, destination }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching shortest route:", error);
        return null;
    }
};
