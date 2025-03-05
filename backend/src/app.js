const express = require('express');
const http = require('http');
const cors = require('cors');
const flightsRoutes = require('./routes/flights');
const historyRoutes = require('./routes/history');
const distanceRoutes = require('./routes/distance');
const airlinesRoutes = require('./routes/airlines');
const shortestRouteRoutes = require('./routes/shortestRoute');
const setupWebSocket = require('./websocket');

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/flights', flightsRoutes);
app.use('/api/history', historyRoutes);
app.use('/api/distance', distanceRoutes);
app.use('/api/airlines', airlinesRoutes);
app.use('/api/shortestRoute', shortestRouteRoutes);

// Initialize WebSocket
setupWebSocket(server);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
