import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const SearchBar = ({ onSearch }) => {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (origin && destination) {
            onSearch(origin, destination);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", gap: 2 }}>
            <TextField label="Origin" value={origin} onChange={(e) => setOrigin(e.target.value)} />
            <TextField label="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
            <Button type="submit" variant="contained" color="primary">
                Find Route
            </Button>
        </Box>
    );
};

export default SearchBar;
