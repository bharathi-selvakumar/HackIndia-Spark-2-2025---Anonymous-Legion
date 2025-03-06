import React, { useState } from "react";
import { Card, CardContent, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const RouteResults = ({ routeOptions }) => {
    const [selectedRoute, setSelectedRoute] = useState(routeOptions.length > 0 ? routeOptions[0] : null);

    const handleChange = (event) => {
        setSelectedRoute(routeOptions[event.target.value]);
    };

    if (!routeOptions || routeOptions.length === 0) {
        return <Typography>No route found.</Typography>;
    }

    return (
        <Card sx={{ mt: 3, p: 2 }}>
            <CardContent>
                <Typography variant="h6">Select Shortest Path:</Typography>
                
                <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel>Available Routes</InputLabel>
                    <Select value={routeOptions.indexOf(selectedRoute)} onChange={handleChange}>
                        {routeOptions.map((route, index) => (
                            <MenuItem key={index} value={index}>
                                {route.path.join(" → ")} ({route.distance} hours)
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {selectedRoute && (
                    <>
                        <Typography variant="h6" sx={{ mt: 2 }}>Selected Route:</Typography>
                        <Typography variant="body1">{selectedRoute.path.join(" → ")}</Typography>
                        <Typography variant="body2" color="textSecondary">
                            Total Travel Time: {selectedRoute.distance} hours
                        </Typography>
                    </>
                )}
            </CardContent>
        </Card>
    );
};

export default RouteResults;
