import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Home from "./pages/Home";

const theme = createTheme({ palette: { primary: { main: "#1976d2" } } });

const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
    </ThemeProvider>
);

export default App;
