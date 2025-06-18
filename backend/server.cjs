// backend/server.cjs
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require='mongoose';
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URL;

// Middleware
app.use(express.json()); // For parsing application/json (body parser)
app.use(cors()); // Enable CORS for all origins (important for frontend to connect)

// Database Connection
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('MongoDB Connected successfully!');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    // Exit process with failure
    process.exit(1); // Exit if DB connection fails
  }
};

// Connect to database when the server starts
connectDB();

// Basic route to check if the server is running
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access the API at http://localhost:${PORT}`);
});