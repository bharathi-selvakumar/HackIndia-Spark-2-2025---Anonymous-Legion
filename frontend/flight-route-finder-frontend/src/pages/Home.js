import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar";
import RouteResults from "../components/RouteResults";
import { getShortestRoute } from "../services/api";

const Home = () => {
    const [route, setRoute] = useState(null);

    const handleSearch = async (origin, destination) => {
        const result = await getShortestRoute(origin, destination);
        setRoute(result);
    };

    return (
        <Container sx={{ mt: 5 }}>
            <Typography variant="h4" gutterBottom>Optimal Flight Route Finder</Typography>
            <SearchBar onSearch={handleSearch} />
            {route && <RouteResults route={route} />}
        </Container>
    );
};

export default Home;
